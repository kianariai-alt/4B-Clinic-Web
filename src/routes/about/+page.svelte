<script>
  import { site } from '$lib/data/site.js';
</script>

<svelte:head>
  <title>درباره 4B Clinic | رویکرد درمانی و فلسفه کلینیک</title>
  <meta name="description" content="آشنایی با 4B Clinic؛ کلینیک با تمرکز بر درمان‌های اتولوگ، ارتوبیولوژی و پزشکی بازساختی با رویکرد تشخیص‌محور، شفاف و قابل پیگیری." />
  <link rel="canonical" href="https://4b-clinic.com/about" />
</svelte:head>

<section class="about-hero section">
  <div class="eyebrow">ABOUT 4B CLINIC</div>
  <h1>Build your Body<br/>By your Body</h1>
  <p>فلسفه 4B ساده است: هرجا شواهد و شرایط بیمار اجازه بدهند، از ظرفیت‌های زیستی بدن به‌صورت هدفمند استفاده کنیم؛ و هرجا روش دیگری منطقی‌تر است، همان را انتخاب کنیم.</p>
</section>

<section class="section about-intro">
  <div><div class="eyebrow">OUR APPROACH</div><h2>درمان باید قابل توضیح باشد.</h2></div>
  <div><p>بیمار حق دارد بداند چرا یک روش پیشنهاد شده، منبع فرآورده چیست، چه انتظاری واقع‌بینانه است و چه زمانی باید مسیر درمان تغییر کند. برای همین در 4B تصمیم درمانی از تشخیص و ارزیابی شروع می‌شود، نه از نام محصول یا فناوری.</p><p>ما درمان‌های اتولوگ مانند ACS، PL و PRGF را در کنار فناوری‌ها و گزینه‌های تکمیلی منتخب بررسی می‌کنیم. همه این روش‌ها برای همه بیماران مناسب نیستند و کاربرد آنها باید با تشخیص، شواهد و الزامات پزشکی هماهنگ باشد.</p></div>
</section>

<section class="section values">
  <article><span>01</span><h2>تشخیص قبل از درمان</h2><p>هدف، انتخاب روش درست برای بیمار درست است؛ نه تطبیق همه بیماران با یک پروتکل ثابت.</p></article>
  <article><span>02</span><h2>شفافیت</h2><p>منبع، محدودیت‌ها، احتمال پاسخ و گزینه‌های جایگزین باید برای بیمار روشن باشند.</p></article>
  <article><span>03</span><h2>پیگیری</h2><p>اثر درمان باید با معیارهای قابل مقایسه، علائم، عملکرد و در صورت نیاز داده‌های تصویری پیگیری شود.</p></article>
  <article><span>04</span><h2>ارجاع وقتی لازم است</h2><p>اگر بیمار به درمان دیگری، جراحی یا تخصص متفاوت نیاز دارد، هدف باید رسیدن به همان مسیر مناسب باشد.</p></article>
</section>

<section class="section manager-band">
  <div>
    <div class="eyebrow">CLINIC DIRECTOR</div>
    <h2>{site.manager.name}</h2>
    <p><strong>{site.manager.title}</strong> • {site.manager.role}</p>
  </div>
  <a class="button" href="/doctors">پزشکان همکار</a>
</section>

<section class="section scope-section">
  <div><div class="eyebrow">CLINICAL SCOPE</div><h2>حوزه‌های اصلی 4B</h2></div>
  <div class="scope-grid">
    <a href="/orthopedics/knee">زانو، آرتروز و مینیسک</a>
    <a href="/orthopedics/shoulder">شانه، کپسول و روتاتورکاف</a>
    <a href="/hair">مو و ریزش مو</a>
    <a href="/skin">پوست و جوانسازی</a>
    <a href="/wounds">زخم‌های مزمن</a>
    <a href="/sexual-health">سلامت جنسی</a>
  </div>
</section>

<section class="section about-cta">
  <div><div class="eyebrow">4B CLINIC</div><h2>بدن خودت را با بدن خودت بساز، اما فقط وقتی از نظر پزشکی انتخاب درستی باشد.</h2><p>این جمله برای ما شعار بازاریابیِ بدون قید نیست؛ یادآوری این است که درمان باید شخصی‌سازی‌شده، شفاف و مسئولانه باشد.</p></div>
  <a class="button" href="/contact">ارتباط با کلینیک</a>
</section>

<style>
  .about-hero{min-height:62vh;display:flex;flex-direction:column;justify-content:center;background:radial-gradient(circle at 18% 30%,#19395f 0,#07172b 58%,#040c16 100%);color:#fff}.about-hero h1{font-size:clamp(50px,8vw,104px);line-height:1.02;margin:16px 0;color:#d0b374}.about-hero p{max-width:850px;color:#d0d9e2;font-size:18px}.about-intro{display:grid;grid-template-columns:.8fr 1.2fr;gap:70px}.about-intro h2,.scope-section h2,.about-cta h2,.manager-band h2{font-size:clamp(30px,4vw,50px);line-height:1.45;margin:10px 0}.about-intro p{color:#5d6976;font-size:17px}.values{display:grid;grid-template-columns:repeat(4,1fr);gap:12px;background:#eef2f1}.values article{background:#fff;border:1px solid #e1e5e5;border-radius:18px;padding:25px}.values span{color:#b99651;font-size:11px;font-weight:900}.values h2{font-size:21px;margin:22px 0 8px}.values p{color:#5d6976;font-size:13px}.manager-band{display:flex;align-items:end;justify-content:space-between;gap:40px;background:#fff}.manager-band p{margin:0;color:#5d6976}.manager-band strong{color:#8c692f}.scope-section{background:#fff}.scope-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:10px;margin-top:25px}.scope-grid a{padding:18px;border:1px solid #e1e5e5;border-radius:14px;transition:.2s}.scope-grid a:hover{border-color:#b99651;transform:translateY(-2px)}.about-cta{display:flex;justify-content:space-between;align-items:end;gap:40px;background:#07172b;color:#fff}.about-cta p{max-width:820px;color:#c6d0da}@media(max-width:900px){.about-intro{grid-template-columns:1fr}.values{grid-template-columns:1fr 1fr}.scope-grid{grid-template-columns:1fr 1fr}.about-cta,.manager-band{align-items:flex-start;flex-direction:column}}@media(max-width:620px){.values,.scope-grid{grid-template-columns:1fr}}
</style>
