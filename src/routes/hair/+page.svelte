<script>
  import ServicePage from '$lib/components/ServicePage.svelte';
</script>

<svelte:head>
  <title>درمان ریزش مو و تقویت مو | 4B Clinic تهران</title>
  <meta name="description" content="ارزیابی الگوی ریزش مو و انتخاب برنامه شخصی‌سازی‌شده در 4B Clinic تهران؛ از بررسی علت تا درمان‌های اتولوگ منتخب مانند PL و PRGF." />
  <link rel="canonical" href="https://4b-clinic.com/hair" />
</svelte:head>

<ServicePage
  title="درمان‌های مو"
  subtitle="ریزش مو یک تشخیص واحد نیست؛ برنامه درمان از علت شروع می‌شود."
  description="الگوی ریزش، سابقه خانوادگی، وضعیت پوست سر، داروها، بیماری‌های زمینه‌ای و در صورت نیاز آزمایش‌های مرتبط بررسی می‌شوند. درمان‌های اتولوگ تنها زمانی وارد برنامه می‌شوند که برای الگوی ریزش و شرایط بیمار منطقی باشند."
  bullets={[
    'ارزیابی ریزش موی الگوی مردانه و زنانه',
    'بررسی علل قابل اصلاح مانند کمبودها یا اختلالات زمینه‌ای در صورت نیاز',
    'PL و PRGF در موارد منتخب',
    'گزینه‌های مبتنی بر EXO فقط پس از تعیین اندیکاسیون',
    'برنامه پیگیری با عکس‌های استاندارد و ارزیابی روند',
    'ارجاع موارد مشکوک به ریزش اسکاری یا بیماری فعال پوست سر'
  ]}
/>

<section class="section hair-grid">
  <div class="hair-card"><span>01</span><h2>تشخیص الگوی ریزش</h2><p>ریزش موی ارثی، تلوژن افلوویوم، التهاب پوست سر و بعضی بیماری‌های مو ظاهر مشابهی ندارند و درمان یکسانی هم نمی‌خواهند.</p></div>
  <div class="hair-card"><span>02</span><h2>انتخاب درمان</h2><p>درمان می‌تواند شامل اصلاح عوامل زمینه‌ای، درمان دارویی استاندارد، روش‌های اتولوگ یا ترکیبی از آنها باشد. تصمیم بر اساس شرایط واقعی بیمار گرفته می‌شود.</p></div>
  <div class="hair-card"><span>03</span><h2>پیگیری قابل مقایسه</h2><p>نتیجه درمان مو باید در بازه زمانی منطقی و با عکس‌های هم‌زاویه و هم‌نور ارزیابی شود؛ نه با حافظه و حس کلی بیمار.</p></div>
</section>

<section class="section hair-callout">
  <div><div class="eyebrow">REALISTIC EXPECTATIONS</div><h2>هدف درمان، بهبود قابل اندازه‌گیری است؛ نه وعده نتیجه یکسان برای همه.</h2><p>سن، مدت ریزش، تراکم اولیه، پاسخ فولیکول و علت ریزش روی نتیجه اثر دارند. در بعضی شرایط هدف اصلی می‌تواند کاهش سرعت ریزش و حفظ موهای موجود باشد.</p></div>
  <a class="button" href="/contact">درخواست ارزیابی مو</a>
</section>

<style>
  .hair-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:14px;background:#eef2f1}.hair-card{background:#fff;border:1px solid #e1e5e5;border-radius:20px;padding:28px}.hair-card span{color:#b99651;font-size:11px;font-weight:900}.hair-card h2{font-size:24px;line-height:1.5;margin:24px 0 10px}.hair-card p{color:#5d6976;font-size:14px}.hair-callout{display:flex;justify-content:space-between;align-items:end;gap:40px;background:#07172b;color:#fff}.hair-callout h2{font-size:clamp(28px,4vw,48px);line-height:1.45;margin:10px 0}.hair-callout p{max-width:800px;color:#c6d0da}@media(max-width:900px){.hair-grid{grid-template-columns:1fr}.hair-callout{align-items:flex-start;flex-direction:column}}
</style>
