<script>
  import { site } from '$lib/data/site.js';
</script>

<svelte:head>
  <title>تماس، شبکه‌های اجتماعی و رزرو مشاوره | 4B Clinic</title>
  <meta name="description" content="راه‌های ارتباط با 4B Clinic و دسترسی به اینستاگرام، تلگرام، بله، روبیکا، ایتا و یوتیوب کلینیک." />
</svelte:head>

<section class="contact-hero section">
  <div class="eyebrow">CONTACT • BOOKING • SOCIAL</div>
  <h1>ارتباط با 4B Clinic</h1>
  <p>برای درخواست مشاوره، پیگیری و دسترسی به محتوای آموزشی می‌توانید از مسیرهای رسمی کلینیک استفاده کنید.</p>
</section>

<section class="section contact-layout">
  <div>
    <div class="eyebrow">DIRECT CONTACT</div>
    <h2>رزرو مشاوره</h2>
    <p>فرم امن درخواست مشاوره در مرحله اتصال backend فعال می‌شود. تا آن زمان شبکه‌های رسمی کلینیک نیز در همین صفحه در دسترس خواهند بود.</p>
    <div class="notice">شماره تماس، نشانی و ساعات کاری پس از تطبیق با اطلاعات رسمی فعلی کلینیک در این بخش ثبت می‌شوند.</div>
  </div>
  <div class="social-grid" aria-label="شبکه‌های اجتماعی 4B Clinic">
    {#each site.socials as social}
      {#if social.href}
        <a class="social-card" href={social.href} target="_blank" rel="noreferrer" aria-label={`${social.label} 4B Clinic`}>
          <span class="social-mark">{social.label.slice(0,1)}</span>
          <div><strong>{social.label}</strong>{#if social.handle}<small>{social.handle}</small>{/if}</div>
          <b>ورود ↗</b>
        </a>
      {:else}
        <div class="social-card pending" aria-label={`${social.label} - لینک در انتظار تأیید`}>
          <span class="social-mark">{social.label.slice(0,1)}</span>
          <div><strong>{social.label}</strong><small>لینک رسمی در انتظار تأیید</small></div>
          <b>به‌زودی</b>
        </div>
      {/if}
    {/each}
  </div>
</section>

<style>
  .contact-hero{background:#07172b;color:#fff}.contact-hero h1{font-size:clamp(40px,6vw,76px);margin:12px 0}.contact-hero p{max-width:760px;color:#cbd5df;font-size:19px}.contact-layout{display:grid;grid-template-columns:.8fr 1.2fr;gap:70px;align-items:start}.contact-layout h2{font-size:38px;margin:10px 0}.contact-layout p{color:#596673;font-size:17px}.notice{margin-top:24px;padding:16px 18px;border-radius:14px;background:#f0f2ef;color:#66717b;font-size:14px}.social-grid{display:grid;grid-template-columns:repeat(2,1fr);gap:14px}.social-card{display:grid;grid-template-columns:auto 1fr auto;align-items:center;gap:16px;padding:20px;background:#fff;border:1px solid #e2e7e9;border-radius:18px;transition:.2s}.social-card:hover{transform:translateY(-3px);box-shadow:0 14px 36px #07172b10}.social-mark{width:42px;height:42px;border-radius:50%;display:grid;place-items:center;background:#07172b;color:#c9aa6b;font-weight:900}.social-card div{display:grid}.social-card small{color:#7a8792;margin-top:2px}.social-card b{font-size:12px;color:#9b7735}.pending{opacity:.7}.pending:hover{transform:none;box-shadow:none}@media(max-width:900px){.contact-layout{grid-template-columns:1fr}}@media(max-width:600px){.social-grid{grid-template-columns:1fr}}
</style>
