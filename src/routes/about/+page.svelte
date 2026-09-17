<script>
  import { site } from '$lib/data/site.js';
</script>

<svelte:head>
  <title>درباره 4B Clinic | رویکرد درمانی و فلسفه کلینیک</title>
  <meta name="description" content="آشنایی با 4B Clinic؛ کلینیک با تمرکز بر درمان‌های اتولوگ، ارتوبیولوژی و پزشکی بازساختی با رویکرد تشخیص‌محور، شفاف و قابل پیگیری." />
  <link rel="canonical" href="https://4b-clinic.com/about" />
</svelte:head>

<section class="about-v2-hero">
  <div class="about-collage" aria-hidden="true">
    <img src="/images/services/knee.webp" alt="" />
    <img src="/images/services/shoulder.webp" alt="" />
    <img src="/images/services/skin.webp" alt="" />
  </div>
  <div class="about-shade"></div>
  <div class="about-copy"><div class="eyebrow light">ABOUT 4B CLINIC</div><h1>Build your Body<br/><span>By your Body</span></h1><p>فلسفه 4B ساده است: هرجا شواهد و شرایط بیمار اجازه بدهند، از ظرفیت‌های زیستی بدن به‌صورت هدفمند استفاده کنیم؛ و هرجا روش دیگری منطقی‌تر است، همان را انتخاب کنیم.</p></div>
</section>

<section class="about-intro-v2"><div><div class="eyebrow">OUR APPROACH</div><h2>درمان باید قابل توضیح باشد.</h2></div><div><p>بیمار حق دارد بداند چرا یک روش پیشنهاد شده، منبع فرآورده چیست، چه انتظاری واقع‌بینانه است و چه زمانی باید مسیر درمان تغییر کند. برای همین در 4B تصمیم درمانی از تشخیص و ارزیابی شروع می‌شود، نه از نام محصول یا فناوری.</p><p>ما درمان‌های اتولوگ مانند ACS، PL و PRGF را در کنار فناوری‌ها و گزینه‌های تکمیلی منتخب بررسی می‌کنیم. همه این روش‌ها برای همه بیماران مناسب نیستند.</p></div></section>

<section class="values-v2">
  <article><span>01</span><h3>تشخیص قبل از درمان</h3><p>هدف، انتخاب روش درست برای بیمار درست است؛ نه تطبیق همه بیماران با یک پروتکل ثابت.</p></article>
  <article><span>02</span><h3>شفافیت</h3><p>منبع، محدودیت‌ها، احتمال پاسخ و گزینه‌های جایگزین باید برای بیمار روشن باشند.</p></article>
  <article><span>03</span><h3>پیگیری</h3><p>اثر درمان باید با معیارهای قابل مقایسه، علائم، عملکرد و در صورت نیاز داده‌های تصویری پیگیری شود.</p></article>
  <article><span>04</span><h3>ارجاع وقتی لازم است</h3><p>اگر بیمار به درمان دیگری، جراحی یا تخصص متفاوت نیاز دارد، هدف باید رسیدن به همان مسیر مناسب باشد.</p></article>
</section>

<section class="manager-v2"><div><div class="eyebrow light">CLINIC DIRECTOR</div><h2>{site.manager.name}</h2><p><strong>{site.manager.title}</strong><br/>{site.manager.role} 4B Clinic</p></div><a href="/doctors">پزشکان همکار</a></section>

<section class="scope-v2"><div class="scope-head"><div><div class="eyebrow">CLINICAL SCOPE</div><h2>حوزه‌های اصلی 4B</h2></div><p>هر حوزه مسیر ارزیابی خودش را دارد. چیزی که مشترک می‌ماند، شروع از تشخیص و تصمیم قابل دفاع است.</p></div><div class="scope-grid"><a href="/orthopedics/knee">زانو، آرتروز و مینیسک</a><a href="/orthopedics/shoulder">شانه، کپسول و روتاتورکاف</a><a href="/hair">مو و ریزش مو</a><a href="/skin">پوست و جوانسازی</a><a href="/wounds">زخم‌های مزمن</a><a href="/sexual-health">سلامت جنسی</a></div></section>

<section class="about-final"><div><div class="eyebrow light">4B CLINIC</div><h2>بدن خودت را با بدن خودت بساز، اما فقط وقتی از نظر پزشکی انتخاب درستی باشد.</h2><p>این جمله برای ما شعار بدون قید نیست. یادآوری این است که درمان باید شخصی‌سازی‌شده، شفاف و مسئولانه باشد.</p></div><a href="/contact">ارتباط با کلینیک</a></section>

<style>
  .eyebrow{font-size:10px;letter-spacing:.16em;color:#987130;font-weight:900}.eyebrow.light{color:#dfc58d}.about-v2-hero{position:relative;min-height:720px;overflow:hidden;background:#07172b;color:#fff;display:flex;align-items:flex-end}.about-collage{position:absolute;inset:0;display:grid;grid-template-columns:1.3fr .85fr .85fr;gap:5px}.about-collage img{width:100%;height:100%;object-fit:cover;min-width:0}.about-collage img:nth-child(1){object-position:center}.about-collage img:nth-child(2){object-position:center}.about-collage img:nth-child(3){object-position:center}.about-shade{position:absolute;inset:0;background:linear-gradient(90deg,rgba(4,13,24,.2),rgba(4,13,24,.68) 46%,rgba(4,13,24,.97) 82%),linear-gradient(0deg,rgba(4,13,24,.72),transparent 56%)}.about-copy{position:relative;z-index:2;width:min(760px,62vw);margin-right:clamp(22px,7vw,110px);padding:120px 0 70px}.about-copy h1{font-size:clamp(50px,7.5vw,106px);line-height:1.02;margin:14px 0 22px}.about-copy h1 span{color:#ddc287}.about-copy p{font-size:18px;line-height:2;color:#ecf0f3;max-width:720px}
  .about-intro-v2,.scope-v2{padding:clamp(68px,8vw,112px) clamp(20px,7vw,110px);display:grid;grid-template-columns:.82fr 1.18fr;gap:70px;background:#f7f7f4}.about-intro-v2 h2,.scope-head h2,.manager-v2 h2,.about-final h2{font-size:clamp(30px,4.4vw,58px);line-height:1.42;margin:10px 0}.about-intro-v2 p{color:#56616b;font-size:17px}.values-v2{padding:clamp(62px,8vw,108px) clamp(20px,7vw,110px);display:grid;grid-template-columns:repeat(4,1fr);gap:12px;background:#fff}.values-v2 article{padding:28px;border:1px solid #e1e4e2;border-radius:20px;background:#fafaf8}.values-v2 span{color:#a77f39;font-size:11px;font-weight:900}.values-v2 h3{font-size:21px;margin:24px 0 8px}.values-v2 p{color:#626e77;font-size:13px}.manager-v2{padding:clamp(62px,8vw,112px) clamp(20px,7vw,110px);display:flex;justify-content:space-between;align-items:end;gap:40px;background:linear-gradient(135deg,#07172b,#12385f);color:#fff}.manager-v2 p{color:#c5ced7}.manager-v2 strong{color:#ddc287}.manager-v2>a,.about-final>a{display:inline-flex;align-items:center;justify-content:center;min-height:48px;padding:10px 20px;border-radius:999px;background:#b58d48;color:#fff;text-decoration:none;font-weight:900;flex:none}.scope-v2{grid-template-columns:1fr;background:#fff}.scope-head{display:grid;grid-template-columns:1fr minmax(280px,.7fr);gap:60px;align-items:end}.scope-head p{color:#65717b}.scope-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:10px}.scope-grid a{padding:20px;border:1px solid #e0e4e1;border-radius:15px;text-decoration:none;color:#1e2d3a;font-weight:800;background:#fafaf8}.scope-grid a:hover{border-color:#bb9859;transform:translateY(-2px)}.about-final{padding:clamp(62px,8vw,112px) clamp(20px,7vw,110px);background:#0a1d32;color:#fff;display:flex;justify-content:space-between;align-items:end;gap:40px}.about-final p{max-width:820px;color:#c3cdd5}
  @media(max-width:900px){.about-collage{grid-template-columns:1fr 1fr}.about-collage img:nth-child(3){display:none}.about-shade{background:linear-gradient(0deg,rgba(4,13,24,.97) 0%,rgba(4,13,24,.76) 48%,rgba(4,13,24,.18) 100%)}.about-copy{width:auto;margin:0;padding:130px 22px 52px}.about-intro-v2,.scope-head{grid-template-columns:1fr;gap:28px}.values-v2{grid-template-columns:1fr 1fr}.manager-v2,.about-final{align-items:flex-start;flex-direction:column}.scope-grid{grid-template-columns:1fr 1fr}}
  @media(max-width:620px){.about-v2-hero{min-height:720px}.about-copy h1{font-size:46px}.about-collage{grid-template-columns:1fr}.about-collage img:nth-child(2){display:none}.values-v2,.scope-grid{grid-template-columns:1fr}.manager-v2>a,.about-final>a{width:100%}}
</style>
