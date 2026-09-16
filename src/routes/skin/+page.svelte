<script>
  import ServicePage from '$lib/components/ServicePage.svelte';
</script>

<svelte:head>
  <title>جوانسازی پوست با روش‌های اتولوگ | 4B Clinic تهران</title>
  <meta name="description" content="برنامه‌های جوانسازی پوست در 4B Clinic تهران با روش‌های اتولوگ منتخب، تزریق و سونوفورزیس؛ انتخاب روش بر اساس کیفیت پوست و هدف درمانی." />
  <link rel="canonical" href="https://4b-clinic.com/skin" />
</svelte:head>

<ServicePage
  title="پوست و جوانسازی"
  subtitle="تمرکز بر کیفیت پوست، نه فقط یک پروسیجر واحد."
  description="در 4B روش درمان بر اساس کیفیت پوست، خشکی، بافت، خطوط، لک‌های همراه، حساسیت و هدف بیمار انتخاب می‌شود. روش‌های تزریقی و غیرتهاجمی می‌توانند جایگاه متفاوتی داشته باشند و لزوماً معادل یکدیگر نیستند."
  bullets={[
    'PL و PRGF در برنامه‌های منتخب جوانسازی',
    'روش‌های مبتنی بر EXO فقط در صورت اندیکاسیون مناسب',
    'سونوفورزیس برای انتقال غیرتهاجمی فرآورده‌های منتخب',
    'ترکیب با مراقبت پوستی و محافظت نوری',
    'انتخاب پروتکل بر اساس تحمل پوست و هدف درمان',
    'پیگیری با ارزیابی استاندارد کیفیت پوست'
  ]}
/>

<section class="section skin-options">
  <article><div class="eyebrow">INJECTABLE</div><h2>روش‌های تزریقی</h2><p>برای بعضی اهداف، رساندن مستقیم فرآورده به ناحیه هدف منطقی‌تر است. نوع ماده، حجم، عمق و تعداد جلسات باید بر اساس اندیکاسیون مشخص شوند.</p></article>
  <article><div class="eyebrow">NON-INVASIVE</div><h2>سونوفورزیس</h2><p>سونوفورزیس یک گزینه غیرتهاجمی برای کمک به انتقال موضعی فرآورده‌های منتخب است. غیرتهاجمی بودن به معنی اثربخشی یکسان با تزریق در همه کاربردها نیست.</p></article>
  <article><div class="eyebrow">COMBINATION</div><h2>برنامه ترکیبی</h2><p>گاهی بهترین نتیجه از یک روش واحد نمی‌آید. مراقبت پوستی، انرژی‌محور، روش اتولوگ یا درمان مرحله‌ای می‌توانند بسته به شرایط بیمار ترکیب شوند.</p></article>
</section>

<section class="section skin-cta">
  <div><div class="eyebrow">PERSONALIZED PLAN</div><h2>هدف، پوست طبیعی‌تر و سالم‌تر است؛ نه تغییر چهره با یک نسخه ثابت.</h2><p>قبل از انتخاب روش، سابقه درمان‌های زیبایی، حساسیت‌ها، داروها و هدف بیمار مرور می‌شوند تا برنامه واقع‌بینانه‌تری ساخته شود.</p></div>
  <a class="button" href="/contact">درخواست ارزیابی پوست</a>
</section>

<style>
  .skin-options{display:grid;grid-template-columns:repeat(3,1fr);gap:14px;background:#eef2f1}.skin-options article{background:#fff;border:1px solid #e1e5e5;border-radius:20px;padding:28px}.skin-options h2{font-size:25px;margin:10px 0}.skin-options p{color:#5d6976;font-size:14px}.skin-cta{display:flex;justify-content:space-between;align-items:end;gap:40px;background:#07172b;color:#fff}.skin-cta h2{font-size:clamp(28px,4vw,48px);line-height:1.45;margin:10px 0}.skin-cta p{max-width:820px;color:#c6d0da}@media(max-width:900px){.skin-options{grid-template-columns:1fr}.skin-cta{align-items:flex-start;flex-direction:column}}
</style>
