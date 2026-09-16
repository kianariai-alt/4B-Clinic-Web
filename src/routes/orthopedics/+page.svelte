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

<section class="section pathway-grid">
  <a class="pathway-card" href="/orthopedics/knee">
    <span>01</span>
    <div class="eyebrow">KNEE CARE</div>
    <h2>زانو، آرتروز و مینیسک</h2>
    <p>از درد هنگام راه رفتن و پله تا آرتروز و آسیب‌های منتخب مینیسک؛ صفحه زانو برای تفکیک علت درد و انتخاب مسیر غیرجراحی مناسب طراحی شده است.</p>
    <b>مشاهده صفحه تخصصی زانو ←</b>
  </a>

  <a class="pathway-card" href="/orthopedics/shoulder">
    <span>02</span>
    <div class="eyebrow">SHOULDER CARE</div>
    <h2>شانه، کپسول و روتاتورکاف</h2>
    <p>شانه یخ‌زده، تاندینوپاتی و پارگی ناکامل روتاتورکاف می‌توانند علائم مشابهی ایجاد کنند اما مسیر درمان یکسانی ندارند.</p>
    <b>مشاهده صفحه تخصصی شانه ←</b>
  </a>
</section>

<style>
  .pathway-grid{display:grid;grid-template-columns:1fr 1fr;gap:16px;background:#eef2f3;border-top:1px solid #e1e6e8}.pathway-card{background:#fff;border:1px solid #e1e5e5;border-radius:22px;padding:30px;transition:.2s}.pathway-card:hover{transform:translateY(-4px);box-shadow:0 18px 45px #07172b10}.pathway-card>span{color:#b99651;font-size:11px;font-weight:900}.pathway-card .eyebrow{margin-top:30px}.pathway-card h2{font-size:clamp(28px,4vw,44px);line-height:1.45;margin:10px 0}.pathway-card p{color:#53606d;font-size:16px}.pathway-card b{display:block;margin-top:28px;color:#8c692f;font-size:12px}@media(max-width:800px){.pathway-grid{grid-template-columns:1fr}}
</style>
