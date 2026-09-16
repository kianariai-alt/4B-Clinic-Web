<script>
  import ServicePage from '$lib/components/ServicePage.svelte';
</script>

<svelte:head>
  <title>ارتوپدی، زانو و شانه | 4B Clinic</title>
  <meta name="description" content="ارزیابی مشکلات منتخب زانو و شانه، از آرتروز و آسیب مینیسک تا شانه یخ‌زده و پارگی‌های ناکامل روتاتورکاف، با انتخاب درمان متناسب با تشخیص." />
</svelte:head>

<ServicePage
  title="ارتوپدی، مفاصل و تاندون‌ها"
  subtitle="ارزیابی دقیق مشکلات منتخب زانو و شانه با تمرکز بر تشخیص، عملکرد مفصل و انتخاب درمان متناسب با هر بیمار."
  description="برنامه درمانی بر اساس معاینه، یافته‌های تصویربرداری در صورت نیاز، شدت آسیب، وضعیت مکانیکی مفصل و اهداف بیمار انتخاب می‌شود. درمان‌های اتولوگ و ارتوبیولوژیک برای همه آسیب‌ها مناسب نیستند و جایگزین اندیکاسیون جراحی در موارد لازم نمی‌شوند."
  bullets={[
    'آرتروز زانو و سایر مفاصل',
    'آسیب‌های منتخب مینیسک',
    'شانه یخ‌زده (Adhesive Capsulitis)',
    'پارگی‌های ناکامل تاندون‌های شانه و روتاتورکاف',
    'آسیب‌های منتخب کپسول و بافت‌های نرم شانه',
    'برنامه‌های منتخب ACS، PL و PRGF پس از ارزیابی پزشکی',
    'پیگیری مرحله‌ای درد، دامنه حرکت و عملکرد'
  ]}
/>

<section class="section shoulder-callout">
  <div>
    <div class="eyebrow">SHOULDER CARE</div>
    <h2>درد و محدودیت حرکت شانه فقط یک تشخیص نیست</h2>
    <p>شانه یخ‌زده، تاندینوپاتی و پارگی ناکامل روتاتورکاف می‌توانند علائم مشابهی ایجاد کنند اما مسیر درمان یکسانی ندارند. در 4B ابتدا تشخیص و شدت آسیب مشخص می‌شود و سپس گزینه‌های مناسب، از بازتوانی و درمان محافظه‌کارانه تا مداخلات منتخب، بررسی می‌شوند.</p>
  </div>
  <a class="button" href="/orthopedics/shoulder">مشاهده صفحه تخصصی شانه</a>
</section>

<style>
  .shoulder-callout{display:flex;align-items:end;justify-content:space-between;gap:40px;background:#eef2f3;border-top:1px solid #e1e6e8}.shoulder-callout h2{font-size:clamp(28px,4vw,48px);line-height:1.45;margin:12px 0}.shoulder-callout p{max-width:800px;color:#53606d;font-size:17px}@media(max-width:800px){.shoulder-callout{align-items:start;flex-direction:column}}
</style>
