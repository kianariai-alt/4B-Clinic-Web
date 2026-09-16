<script>
  import ServicePage from '$lib/components/ServicePage.svelte';
</script>

<svelte:head>
  <title>سلامت جنسی بانوان و آقایان | 4B Clinic تهران</title>
  <meta name="description" content="خدمات سلامت جنسی بانوان و آقایان در 4B Clinic تهران با ارزیابی محرمانه پزشکی و بررسی درمان‌های اتولوگ منتخب فقط در صورت اندیکاسیون مناسب." />
  <link rel="canonical" href="https://4b-clinic.com/sexual-health" />
</svelte:head>

<ServicePage
  title="سلامت جنسی"
  subtitle="ارزیابی محرمانه، محترمانه و پزشکی؛ بدون نسخه یکسان برای همه."
  description="مشکلات این حوزه می‌توانند علل عروقی، هورمونی، دارویی، روانی، عصبی یا بافتی داشته باشند. پیش از هر مداخله، شرح حال و عوامل قابل درمان بررسی می‌شوند و روش‌های اتولوگ تنها در شرایط منتخب وارد برنامه می‌شوند."
  bullets={[
    'ارزیابی اختصاصی بانوان و آقایان',
    'بررسی عوامل پزشکی و دارویی مرتبط',
    'درمان‌های اتولوگ در موارد منتخب و با توضیح محدودیت‌ها',
    'ارجاع برای بررسی‌های تخصصی در صورت نیاز',
    'حفظ محرمانگی اطلاعات و ارتباط',
    'پیگیری پاسخ درمان و عوارض احتمالی'
  ]}
/>

<section class="section pathways">
  <article>
    <div class="eyebrow">WOMEN</div>
    <h2>مسیر اختصاصی بانوان</h2>
    <p>خشکی، درد، تغییرات بافتی یا مسائل عملکردی می‌توانند علت‌های متفاوتی داشته باشند. ارزیابی باید پیش از انتخاب هر روش تزریقی یا بازساختی انجام شود.</p>
  </article>
  <article>
    <div class="eyebrow">MEN</div>
    <h2>مسیر اختصاصی آقایان</h2>
    <p>مشکلات عملکرد جنسی ممکن است با عوامل عروقی، متابولیک، دارویی یا هورمونی مرتبط باشند. روش‌های اتولوگ جایگزین بررسی پزشکی پایه نیستند.</p>
  </article>
</section>

<section class="section privacy-section">
  <div><div class="eyebrow">PRIVACY FIRST</div><h2>محرمانگی بخشی از درمان است، نه یک گزینه اضافه.</h2><p>جزئیات مراجعه، تصاویر، مدارک و اطلاعات پزشکی باید فقط از مسیرهای رسمی و امن کلینیک منتقل شوند. برای شروع ارتباط لازم نیست اطلاعات حساس را در پیام عمومی شبکه‌های اجتماعی بنویسید.</p></div>
  <a class="button" href="/contact">مسیرهای رسمی ارتباط</a>
</section>

<section class="section expectation-section">
  <div><div class="eyebrow">REALISTIC EXPECTATIONS</div><h2>هیچ مداخله‌ای برای همه مناسب نیست.</h2><p>درمان‌های اتولوگ در این حوزه باید با توضیح روشن درباره شواهد، محدودیت‌ها، احتمال پاسخ و گزینه‌های جایگزین مطرح شوند. اگر علت اصلی نیازمند درمان دیگری باشد، اولویت با همان درمان است.</p></div>
</section>

<style>
  .pathways{display:grid;grid-template-columns:1fr 1fr;gap:14px;background:#eef2f1}.pathways article{background:#fff;border:1px solid #e1e5e5;border-radius:20px;padding:30px}.pathways h2{font-size:clamp(27px,3vw,38px);margin:10px 0}.pathways p{color:#5d6976}.privacy-section{display:flex;justify-content:space-between;align-items:end;gap:40px;background:#07172b;color:#fff}.privacy-section h2,.expectation-section h2{font-size:clamp(28px,4vw,48px);line-height:1.45;margin:10px 0}.privacy-section p{max-width:820px;color:#c6d0da}.expectation-section{background:#fff}.expectation-section p{max-width:900px;color:#5d6976;font-size:17px}@media(max-width:850px){.pathways{grid-template-columns:1fr}.privacy-section{align-items:flex-start;flex-direction:column}}
</style>
