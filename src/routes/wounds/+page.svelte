<script>
  import ServicePage from '$lib/components/ServicePage.svelte';
</script>

<svelte:head>
  <title>درمان زخم‌های مزمن و دیرترمیم | 4B Clinic تهران</title>
  <meta name="description" content="ارزیابی زخم‌های مزمن و دیرترمیم در 4B Clinic تهران؛ بررسی علت، خون‌رسانی، عفونت، فشار و استفاده از درمان‌های بازساختی منتخب در کنار مراقبت استاندارد زخم." />
  <link rel="canonical" href="https://4b-clinic.com/wounds" />
</svelte:head>

<ServicePage
  title="زخم‌های مزمن و دیرترمیم"
  subtitle="زخم مزمن فقط یک سطح آسیب‌دیده نیست؛ علت زمینه‌ای باید کنترل شود."
  description="درمان زخم مزمن به خون‌رسانی، عفونت، فشار، قند خون، تغذیه، بافت مرده و بیماری‌های زمینه‌ای وابسته است. درمان‌های بازساختی در 4B در صورت اندیکاسیون، به‌عنوان بخشی از یک برنامه جامع استفاده می‌شوند نه جایگزین مراقبت استاندارد زخم."
  bullets={[
    'ارزیابی علت و مدت زخم',
    'بررسی علائم عفونت و وضعیت بافت',
    'توجه به خون‌رسانی و فشار موضعی',
    'درمان‌های بازساختی منتخب در کنار مراقبت استاندارد',
    'ثبت تصویری و اندازه‌گیری روند ترمیم',
    'ارجاع سریع در صورت علائم هشدار یا نیاز به مداخله تخصصی'
  ]}
/>

<section class="section wound-grid">
  <article><span>01</span><h2>علت زخم</h2><p>زخم دیابتی، فشاری، عروقی، جراحی و زخم ناشی از تروما مسیرهای متفاوتی دارند. درمان مؤثر بدون شناخت علت، معمولاً ناقص است.</p></article>
  <article><span>02</span><h2>شرایط بافت</h2><p>بافت مرده، ترشح، التهاب، بوی غیرطبیعی، عمق زخم و پوست اطراف باید در هر مرحله بررسی شوند.</p></article>
  <article><span>03</span><h2>عوامل زمینه‌ای</h2><p>کنترل قند خون، فشار روی ناحیه، وضعیت عروقی و تغذیه می‌توانند از خود پانسمان مهم‌تر باشند.</p></article>
  <article><span>04</span><h2>پیگیری مستند</h2><p>اندازه، عمق، ظاهر بستر و عکس‌های استاندارد کمک می‌کنند مشخص شود مسیر درمان واقعاً در حال پیشرفت است یا نه.</p></article>
</section>

<section class="section warning-section">
  <div><div class="eyebrow">RED FLAGS</div><h2>بعضی زخم‌ها جای صبر کردن ندارند.</h2><p>تب، درد رو به افزایش، قرمزی منتشرشونده، ترشح بدبو، سیاه‌شدن بافت، کاهش هوشیاری یا علائم کاهش خون‌رسانی نیاز به ارزیابی سریع پزشکی دارند. در این شرایط اولویت با درمان ایمن و فوری است، نه برنامه‌های بازساختی انتخابی.</p></div>
</section>

<section class="section wound-cta">
  <div><div class="eyebrow">WOUND ASSESSMENT</div><h2>برای ارزیابی زخم، سابقه بیماری و روند قبلی درمان را همراه داشته باشید.</h2><p>گزارش‌های عروقی، قند خون، کشت، جراحی‌های قبلی و عکس‌های قبلی زخم می‌توانند به تصمیم‌گیری کمک کنند.</p></div>
  <a class="button" href="/contact">درخواست ارزیابی زخم</a>
</section>

<style>
  .wound-grid{display:grid;grid-template-columns:repeat(4,1fr);gap:12px;background:#eef2f1}.wound-grid article{background:#fff;border:1px solid #e1e5e5;border-radius:18px;padding:24px}.wound-grid span{color:#b99651;font-size:11px;font-weight:900}.wound-grid h2{font-size:22px;margin:22px 0 8px}.wound-grid p{color:#5d6976;font-size:13px}.warning-section{background:#3d1f20;color:#fff}.warning-section h2{font-size:clamp(28px,4vw,48px);line-height:1.45;margin:10px 0}.warning-section p{max-width:900px;color:#eadede}.wound-cta{display:flex;justify-content:space-between;align-items:end;gap:40px;background:#07172b;color:#fff}.wound-cta h2{font-size:clamp(28px,4vw,48px);line-height:1.45;margin:10px 0}.wound-cta p{max-width:820px;color:#c6d0da}@media(max-width:980px){.wound-grid{grid-template-columns:1fr 1fr}.wound-cta{align-items:flex-start;flex-direction:column}}@media(max-width:620px){.wound-grid{grid-template-columns:1fr}}
</style>
