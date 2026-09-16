<script>
  import { site } from '$lib/data/site.js';
</script>

<svelte:head>
  <title>تماس، شبکه‌های اجتماعی و رزرو مشاوره | 4B Clinic</title>
  <meta name="description" content="راه‌های ارتباط با 4B Clinic و دسترسی به اینستاگرام، تلگرام، بله، روبیکا، ایتا و یوتیوب کلینیک." />
  <link rel="canonical" href="https://4b-clinic.com/contact" />
</svelte:head>

<section class="contact-hero section">
  <div class="eyebrow">CONTACT • BOOKING • SOCIAL</div>
  <h1>ارتباط با 4B Clinic</h1>
  <p>برای درخواست ارزیابی اولیه، هماهنگی مراجعه و دسترسی به محتوای آموزشی از مسیرهای رسمی کلینیک استفاده کنید.</p>
</section>

<section class="section contact-layout">
  <div class="contact-copy">
    <div class="eyebrow">BEFORE YOU CONTACT</div>
    <h2>برای ارزیابی اولیه چه اطلاعاتی آماده باشد؟</h2>
    <div class="prep-list">
      <span><b>01</b> مشکل اصلی و مدت شروع علائم</span>
      <span><b>02</b> درمان‌های قبلی و نتیجه آنها</span>
      <span><b>03</b> MRI، رادیوگرافی یا گزارش‌های موجود در صورت ارتباط</span>
      <span><b>04</b> داروهای مهم و بیماری‌های زمینه‌ای مرتبط</span>
    </div>
    <div class="privacy-note"><strong>حریم خصوصی:</strong> برای ارسال مدارک پزشکی کامل یا اطلاعات حساس، از مسیر امنی که کلینیک هنگام هماهنگی اعلام می‌کند استفاده کنید. شبکه‌های اجتماعی جای مناسبی برای انتشار عمومی اطلاعات پزشکی نیستند.</div>
  </div>

  <div>
    <div class="eyebrow">OFFICIAL CHANNELS</div>
    <h2 class="social-heading">شبکه‌های رسمی 4B</h2>
    <p class="social-lead">لینک هر شبکه پس از تطبیق با حساب رسمی کلینیک فعال می‌شود تا بیمار به صفحه اشتباه هدایت نشود.</p>
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
            <div><strong>{social.label}</strong><small>در انتظار تأیید لینک رسمی</small></div>
            <b>به‌زودی</b>
          </div>
        {/if}
      {/each}
    </div>
  </div>
</section>

<section class="section contact-next">
  <div><div class="eyebrow">BOOKING FLOW</div><h2>مسیر هماهنگی مراجعه</h2></div>
  <div class="booking-steps">
    <span><b>1</b> ارسال درخواست اولیه</span>
    <span><b>2</b> بررسی موضوع مراجعه و مدارک لازم</span>
    <span><b>3</b> تعیین زمان مناسب برای ارزیابی حضوری</span>
  </div>
</section>

<style>
  .contact-hero{background:radial-gradient(circle at 15% 30%,#17385c 0,#07172b 58%,#040c16 100%);color:#fff}.contact-hero h1{font-size:clamp(40px,6vw,76px);margin:12px 0}.contact-hero p{max-width:760px;color:#cbd5df;font-size:19px}.contact-layout{display:grid;grid-template-columns:.9fr 1.1fr;gap:70px;align-items:start}.contact-layout h2,.contact-next h2{font-size:clamp(30px,4vw,44px);line-height:1.45;margin:10px 0}.prep-list{display:grid;gap:9px;margin-top:24px}.prep-list span{display:flex;gap:13px;align-items:center;padding:14px 16px;background:#fff;border:1px solid #e2e7e9;border-radius:14px;font-size:14px}.prep-list b{color:#b99651;font-size:11px}.privacy-note{margin-top:22px;padding:16px 18px;border-radius:14px;background:#eef2f1;color:#5e6a75;font-size:13px}.privacy-note strong{color:#122033}.social-heading{margin-bottom:5px!important}.social-lead{color:#596673;margin-top:0}.social-grid{display:grid;grid-template-columns:repeat(2,1fr);gap:14px;margin-top:24px}.social-card{display:grid;grid-template-columns:auto 1fr auto;align-items:center;gap:16px;padding:20px;background:#fff;border:1px solid #e2e7e9;border-radius:18px;transition:.2s}.social-card:hover{transform:translateY(-3px);box-shadow:0 14px 36px #07172b10}.social-mark{width:42px;height:42px;border-radius:50%;display:grid;place-items:center;background:#07172b;color:#c9aa6b;font-weight:900}.social-card div{display:grid}.social-card small{color:#7a8792;margin-top:2px}.social-card b{font-size:12px;color:#9b7735}.pending{opacity:.72}.pending:hover{transform:none;box-shadow:none}.contact-next{background:#07172b;color:#fff}.booking-steps{display:grid;grid-template-columns:repeat(3,1fr);gap:10px;margin-top:28px}.booking-steps span{padding:18px;border:1px solid #ffffff1c;border-radius:14px;color:#d3dbe3}.booking-steps b{display:inline-grid;place-items:center;width:26px;height:26px;border-radius:50%;background:#b99651;color:#fff;margin-left:8px}@media(max-width:900px){.contact-layout{grid-template-columns:1fr}.booking-steps{grid-template-columns:1fr}}@media(max-width:600px){.social-grid{grid-template-columns:1fr}}
</style>
