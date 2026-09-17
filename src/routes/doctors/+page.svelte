<script>
  import { site } from '$lib/data/site.js';
</script>

<svelte:head>
  <title>پزشکان همکار و مدیر کلینیک | 4B Clinic</title>
  <meta name="description" content="معرفی مدیر کلینیک و پزشکان همکار 4B Clinic؛ دکتر محمد زهرایی، متخصص ارتوپدی و مدیر کلینیک." />
  <link rel="canonical" href="https://4b-clinic.com/doctors" />
</svelte:head>

<section class="doctors-hero section">
  <div class="eyebrow">MEDICAL TEAM • 4B CLINIC</div>
  <h1>پزشکان همکار 4B Clinic</h1>
  <p>تیم پزشکی 4B با رویکرد تشخیص‌محور و همکاری بین تخصصی شکل می‌گیرد. اطلاعات پزشکان همکار به‌تدریج و پس از تأیید مشخصات و تصاویر رسمی در این صفحه تکمیل می‌شود.</p>
</section>

<section class="section manager-section">
  <div class="manager-portrait" aria-hidden="true">
    <div class="avatar-ring"><span>م ز</span></div>
    <small>Clinic Director</small>
  </div>
  <div class="manager-copy">
    <div class="eyebrow">CLINIC DIRECTOR</div>
    <h2>{site.manager.name}</h2>
    <strong>{site.manager.title}</strong>
    <p>{site.manager.role}</p>
    <div class="manager-note">تصویر رسمی و اطلاعات تکمیلی حرفه‌ای پس از دریافت فایل نهایی به این پروفایل اضافه می‌شود.</div>
  </div>
</section>

<section class="section collaborators">
  <div class="collaborators-head">
    <div class="eyebrow">COLLABORATING PHYSICIANS</div>
    <h2>تیم همکار در حال تکمیل است</h2>
    <p>برای هر پزشک، نام، تخصص، حوزه همکاری، تصویر رسمی و در صورت نیاز معرفی کوتاه قرار خواهد گرفت. این ساختار از الان آماده است تا بعداً فقط اطلاعات تأییدشده اضافه شوند.</p>
  </div>
  <div class="future-grid">
    <article><span>01</span><h3>نام و تخصص</h3><p>مشخصات حرفه‌ای هر پزشک به‌صورت واضح و مختصر نمایش داده می‌شود.</p></article>
    <article><span>02</span><h3>حوزه همکاری</h3><p>نقش پزشک در مسیرهای ارتوپدی، پوست و مو، زخم یا سایر خدمات مشخص می‌شود.</p></article>
    <article><span>03</span><h3>تصویر رسمی</h3><p>فقط تصاویر تأییدشده و هماهنگ با هویت بصری 4B استفاده خواهند شد.</p></article>
  </div>
</section>

<section class="section doctors-cta">
  <div><div class="eyebrow">APPOINTMENT</div><h2>برای هماهنگی ارزیابی، با کلینیک تماس بگیرید.</h2><p>تیم پذیرش بر اساس موضوع مراجعه، مسیر مناسب ارزیابی را هماهنگ می‌کند.</p></div>
  <a class="button" href="/contact">راه‌های تماس</a>
</section>

<style>
  .doctors-hero{min-height:58vh;display:flex;flex-direction:column;justify-content:center;background:radial-gradient(circle at 15% 28%,#1b3b61 0,#07172b 56%,#040d18 100%);color:#fff}.doctors-hero h1{font-size:clamp(42px,6vw,80px);line-height:1.18;margin:14px 0}.doctors-hero p{max-width:850px;color:#d0d9e2;font-size:18px}.manager-section{display:grid;grid-template-columns:.75fr 1.25fr;gap:70px;align-items:center;background:#fff}.manager-portrait{min-height:360px;border-radius:28px;background:linear-gradient(145deg,#07172b,#12385f);display:grid;place-items:center;align-content:center;gap:18px;box-shadow:0 30px 80px #07172b1a}.avatar-ring{width:190px;height:190px;border-radius:50%;border:1px solid #d0b374;display:grid;place-items:center;box-shadow:0 0 0 18px #ffffff08,0 0 60px #d0b37420}.avatar-ring span{font-size:48px;color:#d0b374;font-weight:900}.manager-portrait small{color:#aebccc;letter-spacing:.15em}.manager-copy h2,.collaborators-head h2,.doctors-cta h2{font-size:clamp(32px,4vw,52px);line-height:1.4;margin:10px 0}.manager-copy>strong{display:block;font-size:20px;color:#8c692f}.manager-copy>p{font-size:16px;color:#5d6976;margin-top:4px}.manager-note{margin-top:24px;padding:16px 18px;background:#eef2f1;border-radius:14px;color:#5d6976;font-size:13px}.collaborators{background:#eef2f1}.collaborators-head{max-width:880px}.collaborators-head p{color:#5d6976}.future-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:14px;margin-top:32px}.future-grid article{background:#fff;border:1px solid #e1e5e5;border-radius:20px;padding:26px}.future-grid span{color:#b99651;font-size:11px;font-weight:900}.future-grid h3{font-size:21px;margin:24px 0 8px}.future-grid p{color:#5d6976;font-size:13px}.doctors-cta{display:flex;justify-content:space-between;align-items:end;gap:40px;background:#07172b;color:#fff}.doctors-cta p{max-width:760px;color:#c6d0da}@media(max-width:850px){.manager-section{grid-template-columns:1fr}.manager-portrait{min-height:300px}.future-grid{grid-template-columns:1fr}.doctors-cta{align-items:flex-start;flex-direction:column}.doctors-cta .button{width:100%}}
</style>
