<script>
  import ZetaScience from '$lib/components/ZetaScience.svelte';

  let {
    eyebrow,
    title,
    titleAccent = '',
    intro,
    image,
    imageAlt = '',
    imagePosition = 'center',
    mobileImagePosition = 'center top',
    heroCopySide = 'right',
    conditions = [],
    focusTitle = '',
    focusIntro = '',
    focusTabs = [],
    pathwayTitle = 'مسیر ارزیابی و درمان',
    pathwayIntro = '',
    steps = [],
    noteTitle = 'نکته مهم',
    note = '',
    ctaTitle = 'قدم بعدی',
    ctaText = '',
    ctaLabel = 'درخواست ارزیابی',
    backHref = '/',
    backLabel = 'بازگشت',
    scienceHref = '',
    scienceTitle = 'مطالعه علمی بیشتر',
    scienceText = 'برای توضیحات علمی عمیق‌تر می‌توانید محتوای مرتبط Zetamed را مطالعه کنید.',
    badges = []
  } = $props();

  let activeFocusTab = $state(0);
</script>

<section
  class="photo-hero"
  class:copy-left={heroCopySide === 'left'}
  style={`--hero-position:${imagePosition};--hero-mobile-position:${mobileImagePosition}`}
>
  <img class="photo-hero__image" src={image} alt={imageAlt} loading="eager" fetchpriority="high" />
  <div class="photo-hero__shade"></div>
  <div class="photo-hero__inner">
    <div class="photo-hero__copy">
      <div class="eyebrow light">{eyebrow}</div>
      <h1>{title}{#if titleAccent}<br/><span>{titleAccent}</span>{/if}</h1>
      <p>{intro}</p>
      <div class="hero-actions">
        <a class="primary-action" href="/contact">{ctaLabel}</a>
        <a class="secondary-action" href={backHref}>{backLabel}</a>
      </div>
      {#if badges.length}
        <div class="hero-badges">
          {#each badges as badge}<span>{badge}</span>{/each}
        </div>
      {/if}
    </div>
  </div>
</section>

<section class="v2-section intro-strip">
  <div class="intro-heading">
    <div class="eyebrow">WHAT WE EVALUATE</div>
    <h2>قبل از انتخاب روش، مسئله را دقیق تعریف می‌کنیم.</h2>
  </div>
  <p>هدف، رسیدن به یک برنامه قابل توضیح و قابل پیگیری است. درمان فقط زمانی انتخاب می‌شود که با تشخیص، شرایط بافت و هدف واقعی بیمار هماهنگ باشد.</p>
</section>

<section class="v2-section condition-section">
  <div class="section-head">
    <div><div class="eyebrow">CLINICAL VIEW</div><h2>چه چیزهایی در ارزیابی اهمیت دارند؟</h2></div>
    <p>هر بیمار ترکیب متفاوتی از علائم، سابقه پزشکی و هدف درمانی دارد. به همین دلیل یک نسخه ثابت برای همه طراحی نمی‌کنیم.</p>
  </div>
  <div class="condition-grid-v2">
    {#each conditions as condition, i}
      <article class="condition-v2">
        <span>0{i + 1}</span>
        {#if condition.en}<small>{condition.en}</small>{/if}
        <h3>{condition.title}</h3>
        <p>{condition.text}</p>
      </article>
    {/each}
  </div>
</section>

{#if focusTabs.length}
<section class="v2-section focus-tabs-section">
  <div class="focus-tabs-head">
    <div><div class="eyebrow">SKIN FOCUS</div><h2>{focusTitle}</h2></div>
    {#if focusIntro}<p>{focusIntro}</p>{/if}
  </div>
  <div class="focus-tabs" role="tablist" aria-label={focusTitle}>
    {#each focusTabs as tab, i}
      <button
        type="button"
        role="tab"
        aria-selected={activeFocusTab === i}
        class:active={activeFocusTab === i}
        onclick={() => activeFocusTab = i}
      >{tab.title}</button>
    {/each}
  </div>
  <div class="focus-panel" role="tabpanel">
    {#if focusTabs[activeFocusTab]}
      <div class="focus-panel-mark">0{activeFocusTab + 1}</div>
      <div>
        {#if focusTabs[activeFocusTab].en}<small>{focusTabs[activeFocusTab].en}</small>{/if}
        <h3>{focusTabs[activeFocusTab].title}</h3>
        <p>{focusTabs[activeFocusTab].text}</p>
        {#if focusTabs[activeFocusTab].note}<div class="focus-caution">{focusTabs[activeFocusTab].note}</div>{/if}
      </div>
    {/if}
  </div>
</section>
{/if}

<section class="v2-section pathway-v2">
  <div class="pathway-copy">
    <div class="eyebrow light">CLINICAL PATHWAY</div>
    <h2>{pathwayTitle}</h2>
    {#if pathwayIntro}<p>{pathwayIntro}</p>{/if}
  </div>
  <ol>
    {#each steps as step, i}
      <li>
        <span>0{i + 1}</span>
        <div><strong>{step.title}</strong><p>{step.text}</p></div>
      </li>
    {/each}
  </ol>
</section>

{#if note}
<section class="v2-section note-v2">
  <div class="note-mark">4B</div>
  <div><div class="eyebrow">IMPORTANT</div><h2>{noteTitle}</h2><p>{note}</p></div>
</section>
{/if}

{#if scienceHref}
<section class="v2-section science-v2">
  <ZetaScience href={scienceHref} title={scienceTitle} text={scienceText} />
</section>
{/if}

<section class="v2-section cta-v2">
  <div><div class="eyebrow light">NEXT STEP</div><h2>{ctaTitle}</h2><p>{ctaText}</p></div>
  <a class="primary-action" href="/contact">{ctaLabel}</a>
</section>

<style>
  .photo-hero{position:relative;min-height:clamp(600px,78vh,860px);display:flex;align-items:flex-end;overflow:hidden;background:#07172b;color:#fff}
  .photo-hero__image{position:absolute;inset:0;width:100%;height:100%;object-fit:cover;object-position:var(--hero-position);transform:scale(1.01)}
  .photo-hero__shade{position:absolute;inset:0;background:linear-gradient(90deg,rgba(4,13,24,.18) 0%,rgba(4,13,24,.48) 38%,rgba(4,13,24,.94) 76%,rgba(4,13,24,.98) 100%),linear-gradient(0deg,rgba(4,13,24,.7) 0%,transparent 46%)}
  .photo-hero__inner{position:relative;z-index:2;width:min(100%,1400px);margin:0 auto;padding:clamp(110px,14vw,180px) clamp(22px,7vw,110px) clamp(58px,8vw,100px);display:flex;justify-content:flex-end}
  .photo-hero__copy{width:min(720px,58vw);margin-right:0}
  .photo-hero.copy-left .photo-hero__shade{background:linear-gradient(90deg,rgba(4,13,24,.98) 0%,rgba(4,13,24,.94) 24%,rgba(4,13,24,.48) 62%,rgba(4,13,24,.10) 100%),linear-gradient(0deg,rgba(4,13,24,.64) 0%,transparent 46%)}
  .photo-hero.copy-left .photo-hero__inner{justify-content:flex-start}
  .photo-hero h1{font-size:clamp(42px,6.2vw,88px);line-height:1.18;margin:12px 0 20px;letter-spacing:-.025em}
  .photo-hero h1 span{color:#d8bd83}
  .photo-hero p{font-size:clamp(16px,1.55vw,20px);line-height:2.05;color:#edf1f4;max-width:690px;margin:0}
  .eyebrow{font-size:10px;letter-spacing:.16em;color:#a98039;font-weight:900}.eyebrow.light{color:#e0c68e}
  .hero-actions{display:flex;gap:10px;flex-wrap:wrap;margin-top:28px}
  .primary-action,.secondary-action{display:inline-flex;align-items:center;justify-content:center;min-height:48px;padding:10px 20px;border-radius:999px;font-weight:900;font-size:13px;transition:.2s}
  .primary-action{background:#bd9650;color:#fff;border:1px solid #bd9650}.primary-action:hover{background:#a98240;transform:translateY(-1px)}
  .secondary-action{border:1px solid rgba(255,255,255,.4);color:#fff;background:rgba(255,255,255,.06);backdrop-filter:blur(8px)}
  .hero-badges{display:flex;gap:7px;flex-wrap:wrap;margin-top:34px}.hero-badges span{font-size:10px;border:1px solid rgba(255,255,255,.22);background:rgba(7,23,43,.35);backdrop-filter:blur(6px);padding:5px 10px;border-radius:999px;color:#e5e9ee}
  .v2-section{padding:clamp(62px,8vw,112px) clamp(20px,7vw,110px)}
  .intro-strip{display:grid;grid-template-columns:1fr 1fr;gap:70px;background:#f7f7f4;align-items:start}.intro-strip h2,.section-head h2,.pathway-v2 h2,.note-v2 h2,.cta-v2 h2,.focus-tabs-head h2{font-size:clamp(28px,4vw,52px);line-height:1.45;margin:10px 0}.intro-strip>p{font-size:18px;color:#56616b;margin:0;max-width:720px}
  .condition-section{background:#fff}.section-head{display:grid;grid-template-columns:1fr minmax(280px,.7fr);gap:60px;align-items:end;margin-bottom:36px}.section-head p{color:#68737d;margin:0}
  .condition-grid-v2{display:grid;grid-template-columns:repeat(2,1fr);gap:14px}.condition-v2{position:relative;padding:30px;border:1px solid #e2e5e4;border-radius:22px;background:linear-gradient(180deg,#fff,#fbfbf9);min-height:245px}.condition-v2>span{position:absolute;left:26px;top:24px;color:#c2a56c;font-weight:900;font-size:12px}.condition-v2 small{display:block;color:#987332;letter-spacing:.06em;font-size:10px;margin-bottom:14px}.condition-v2 h3{font-size:24px;margin:0 0 9px}.condition-v2 p{color:#606c76;font-size:14px;margin:0}
  .focus-tabs-section{background:#eef1ee}.focus-tabs-head{display:grid;grid-template-columns:1fr minmax(280px,.72fr);gap:60px;align-items:end;margin-bottom:30px}.focus-tabs-head>p{color:#5e6b75;margin:0}.focus-tabs{display:flex;gap:8px;flex-wrap:wrap;margin-bottom:12px}.focus-tabs button{appearance:none;border:1px solid #cfd5d2;background:#fff;color:#263847;border-radius:999px;padding:11px 18px;font:inherit;font-weight:900;font-size:13px;cursor:pointer}.focus-tabs button.active{background:#0b2645;border-color:#0b2645;color:#fff}.focus-panel{display:grid;grid-template-columns:72px 1fr;gap:24px;padding:30px;border-radius:22px;background:#fff;border:1px solid #dde2df;min-height:220px}.focus-panel-mark{width:58px;height:58px;border-radius:50%;display:grid;place-items:center;background:#0b2645;color:#d8bd83;font-weight:900}.focus-panel small{color:#9a7434;font-size:10px;letter-spacing:.08em}.focus-panel h3{font-size:27px;margin:7px 0 10px}.focus-panel p{color:#56636e;margin:0;line-height:2}.focus-caution{margin-top:16px;padding:12px 14px;border-right:3px solid #b58d48;background:#f7f5ef;color:#52606b;font-size:13px;line-height:1.9}
  .pathway-v2{background:#07172b;color:#fff;display:grid;grid-template-columns:.72fr 1.28fr;gap:72px}.pathway-copy p{color:#bcc6d0;max-width:560px}.pathway-v2 ol{list-style:none;padding:0;margin:0;display:grid;gap:10px}.pathway-v2 li{display:grid;grid-template-columns:48px 1fr;gap:16px;padding:19px 20px;border:1px solid rgba(255,255,255,.12);background:rgba(255,255,255,.045);border-radius:16px}.pathway-v2 li>span{color:#d1b378;font-weight:900}.pathway-v2 li strong{font-size:16px}.pathway-v2 li p{color:#bac5ce;margin:4px 0 0;font-size:13px}
  .note-v2{display:grid;grid-template-columns:120px 1fr;gap:34px;align-items:center;background:#f0f1ed}.note-mark{width:92px;height:92px;border-radius:50%;display:grid;place-items:center;border:1px solid #c8ab72;color:#8b682c;font-weight:900;font-size:25px;background:#fff}.note-v2 p{max-width:900px;color:#56616b}.science-v2{background:#fff;padding-top:52px;padding-bottom:52px}
  .cta-v2{background:linear-gradient(135deg,#0b2645,#061321);color:#fff;display:flex;justify-content:space-between;align-items:end;gap:40px}.cta-v2 p{color:#c5ced7;max-width:800px}.cta-v2 .primary-action{flex:none}
  @media(max-width:900px){.photo-hero__shade,.photo-hero.copy-left .photo-hero__shade{background:linear-gradient(0deg,rgba(4,13,24,.96) 0%,rgba(4,13,24,.74) 46%,rgba(4,13,24,.16) 100%)}.photo-hero__inner,.photo-hero.copy-left .photo-hero__inner{justify-content:flex-start}.photo-hero__copy{width:min(100%,700px)}.intro-strip,.section-head,.pathway-v2,.focus-tabs-head{grid-template-columns:1fr;gap:26px}.condition-grid-v2{grid-template-columns:1fr 1fr}.cta-v2{align-items:flex-start;flex-direction:column}}
  @media(max-width:640px){.photo-hero{min-height:720px;align-items:flex-end}.photo-hero__image{object-position:var(--hero-mobile-position)}.photo-hero__inner{padding:120px 20px 44px}.photo-hero h1{font-size:42px}.photo-hero p{font-size:15px}.hero-actions{flex-direction:column;align-items:stretch}.primary-action,.secondary-action{width:100%}.condition-grid-v2{grid-template-columns:1fr}.condition-v2{min-height:auto;padding:24px}.focus-tabs{display:grid;grid-template-columns:1fr}.focus-tabs button{width:100%}.focus-panel{grid-template-columns:1fr;padding:22px}.pathway-v2 li{grid-template-columns:38px 1fr}.note-v2{grid-template-columns:1fr}.note-mark{width:72px;height:72px}.cta-v2 .primary-action{width:100%}}
</style>
