<script>
  let {
    eyebrow = 'PATIENT STORIES',
    title = 'تجربه بیماران',
    intro = 'ویدئوهای رضایت بیماران پس از آماده‌سازی و انتشار در کانال رسمی یوتیوب 4B Clinic در این بخش نمایش داده می‌شوند.',
    videos = []
  } = $props();

  function youtubeId(url = '') {
    if (!url) return '';
    try {
      const u = new URL(url);
      if (u.hostname.includes('youtu.be')) return u.pathname.replace('/', '').split('?')[0];
      if (u.pathname.startsWith('/shorts/')) return u.pathname.split('/shorts/')[1].split('/')[0];
      if (u.pathname.startsWith('/embed/')) return u.pathname.split('/embed/')[1].split('/')[0];
      return u.searchParams.get('v') || '';
    } catch {
      return '';
    }
  }
</script>

<section class="video-section">
  <div class="video-head">
    <div>
      <div class="eyebrow">{eyebrow}</div>
      <h2>{title}</h2>
    </div>
    <p>{intro}</p>
  </div>

  <div class="video-grid">
    {#each videos as video}
      {@const id = youtubeId(video.youtubeUrl)}
      <article class="video-card">
        {#if id}
          <div class="embed-wrap">
            <iframe
              src={`https://www.youtube-nocookie.com/embed/${id}?rel=0`}
              title={video.title}
              loading="lazy"
              referrerpolicy="strict-origin-when-cross-origin"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowfullscreen
            ></iframe>
          </div>
        {:else}
          <div class="video-placeholder" aria-label="جایگاه ویدئوی رضایت بیمار">
            <div class="play-mark">▶</div>
            <strong>ویدئوی رضایت بیمار به‌زودی</strong>
            <span>پس از انتشار در یوتیوب، لینک در همین بخش قرار می‌گیرد.</span>
          </div>
        {/if}

        <div class="video-copy">
          <span>{video.label || 'PATIENT VIDEO'}</span>
          <h3>{video.title}</h3>
          {#if video.text}<p>{video.text}</p>{/if}
          <div class="privacy-note">حفظ محرمانگی بیمار و زیرنویس فارسی دقیق، پیش از انتشار ویدئو الزامی است.</div>
        </div>
      </article>
    {/each}
  </div>
</section>

<style>
  .video-section{padding:clamp(64px,8vw,112px) clamp(20px,7vw,110px);background:#f6f5f1}
  .video-head{display:grid;grid-template-columns:1fr minmax(280px,.78fr);gap:60px;align-items:end;margin-bottom:32px}
  .eyebrow{font-size:10px;letter-spacing:.16em;color:#9b7737;font-weight:900}
  .video-head h2{font-size:clamp(30px,4.2vw,54px);line-height:1.4;margin:10px 0 0;color:#0a1d33}
  .video-head p{margin:0;color:#65717b;line-height:1.95}
  .video-grid{display:grid;grid-template-columns:repeat(auto-fit,minmax(min(100%,320px),1fr));gap:18px}
  .video-card{overflow:hidden;border:1px solid #dddeda;border-radius:22px;background:#fff;box-shadow:0 16px 40px rgba(7,23,43,.06)}
  .embed-wrap{position:relative;aspect-ratio:16/9;background:#07172b}.embed-wrap iframe{position:absolute;inset:0;width:100%;height:100%;border:0}
  .video-placeholder{aspect-ratio:16/9;display:grid;place-items:center;text-align:center;align-content:center;gap:10px;padding:28px;background:linear-gradient(135deg,#0b2645,#07172b);color:#fff}
  .video-placeholder strong{font-size:18px}.video-placeholder span{font-size:12px;color:#c6d0da;max-width:340px}.play-mark{width:58px;height:58px;border-radius:50%;display:grid;place-items:center;background:#bd9650;color:#fff;padding-right:2px;font-size:20px}
  .video-copy{padding:22px}.video-copy>span{font-size:10px;letter-spacing:.14em;font-weight:900;color:#a17d3c}.video-copy h3{font-size:21px;line-height:1.6;margin:7px 0 8px;color:#0b2138}.video-copy p{font-size:14px;line-height:1.9;color:#65717a;margin:0}
  .privacy-note{margin-top:14px;padding:11px 12px;border-right:3px solid #b58d48;background:#f8f6f0;color:#5e6973;font-size:12px;line-height:1.8}
  @media(max-width:900px){.video-head{grid-template-columns:1fr;gap:18px}}
</style>
