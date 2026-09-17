<script>
  import PhotoClinicalPage from '$lib/components/PhotoClinicalPage.svelte';

  const conditions = [
    { title: 'سونوفورزیس بدون تزریق', en: 'Needle-free Sonophoresis', text: 'فرآورده‌های اتولوگ منتخب مانند PL و PRGF روی پوست قرار می‌گیرند و اولتراسوند با پارامترهای تنظیم‌شده، از طریق کاویتاسیون آکوستیک و ایجاد مسیرهای میکروسکوپی موقت در سد پوستی، نفوذپذیری لایه شاخی را افزایش می‌دهد و انتقال موضعی مواد را به درون پوست تسهیل می‌کند.' },
    { title: 'فوتوبیومدولیشن و فعال‌سازی سلولی', en: 'Photobiomodulation', text: 'پس از یا همراه با سونوفورزیس، نور با طول موج انتخاب‌شده برای اثرگذاری بر مسیرهای میتوکندریایی و انرژی سلولی به کار می‌رود. هدف، حمایت از فعالیت سلولی، فیبروبلاست‌ها و فرآیندهای مرتبط با بازسازی ماتریکس و کلاژن است.' },
    { title: 'تزریق مستقیم فرآورده‌های منتخب', en: 'Direct Injection', text: 'در شرایطی که هدف درمانی به رساندن مستقیم فرآورده به بافت نیاز داشته باشد، می‌توان از تزریق استفاده کرد. انتخاب ماده، محل، عمق و تعداد جلسات بر اساس ارزیابی پزشک و وضعیت پوست تعیین می‌شود.' },
    { title: 'پروتکل ترکیبی یا تناوبی', en: 'Alternating Combination Plan', text: 'برای بعضی بیماران می‌توان جلسات سونوفورزیس بدون تزریق را با جلسات تزریق مستقیم به‌صورت مرحله‌ای یا تناوبی ترکیب کرد تا برنامه درمان با هدف، تحمل بیمار و پاسخ واقعی پوست هماهنگ شود.' }
  ];

  const steps = [
    { title: 'انتخاب فرآورده اتولوگ', text: 'بر اساس هدف درمان و شرایط پوست، فرآورده‌های منتخب مانند PL یا PRGF و نحوه استفاده از آن‌ها مشخص می‌شوند.' },
    { title: 'انتقال بدون تزریق یا تزریق مستقیم', text: 'در مسیر غیرتهاجمی، سونوفورزیس برای افزایش موقت نفوذپذیری سد پوستی به کار می‌رود؛ در مسیر تزریقی، فرآورده مستقیماً به ناحیه هدف رسانده می‌شود.' },
    { title: 'فوتوبیومدولیشن با لیزر', text: 'در صورت اندیکاسیون، نور یا لیزر با پارامترهای انتخاب‌شده برای تعدیل فعالیت میتوکندری و حمایت از پاسخ ترمیمی سلول‌های پوست به برنامه اضافه می‌شود.' },
    { title: 'تناوب و پیگیری پاسخ پوست', text: 'بر اساس پاسخ واقعی پوست، جلسات می‌توانند غیرتهاجمی، تزریقی یا به‌صورت تناوبی از هر دو روش ادامه پیدا کنند و نتیجه با عکس‌های استاندارد و ارزیابی بالینی پیگیری شود.' }
  ];

  const focusTabs = {
    scar: {
      label: 'اسکار',
      title: 'بهبود کیفیت و ظاهر اسکار',
      text: 'در اسکارهای منتخب، هدف کاهش برجستگی، بهبود انعطاف‌پذیری و کیفیت بافت و کمک به بازسازی موضعی پوست است. هیچ درمانی حذف کامل اسکار را تضمین نمی‌کند و نوع اسکار، سن آن، محل و پاسخ بافت در نتیجه نقش دارند.'
    },
    psoriasis: {
      label: 'پسوریازیس',
      title: 'ارزیابی تکمیلی در ضایعات پسوریازیس',
      text: 'پسوریازیس یک بیماری التهابی مزمن است. در بیماران منتخب و پس از ارزیابی پزشک، ACS + PL می‌تواند به‌عنوان بخشی از یک رویکرد مکمل بازساختی و تعدیل‌کننده التهاب بررسی شود. کنترل بیماری فعال و درمان استاندارد پوست همچنان اهمیت دارد.'
    },
    eczema: {
      label: 'اگزما',
      title: 'رویکرد مکمل در اگزمای مزمن',
      text: 'در اگزمای مزمن، ابتدا تشخیص، عامل محرک و کنترل التهاب اهمیت دارد. در برخی بیماران منتخب می‌توان مداخلات بازساختی را به‌عنوان درمان مکمل برای حمایت از کیفیت بافت و سد پوستی بررسی کرد، نه جایگزین درمان استاندارد.'
    }
  };

  let activeFocus = focusTabs.scar;

  const cases = [
    {
      title: 'نمونه واقعی بهبود ضایعه پوستی با ACS + PL',
      image: '/images/cases/skin-psoriasis-case-1.webp',
      alt: 'نمونه واقعی روند بهبود ضایعه پوستی پس از درمان با ACS و PL',
      caption: 'در این نمونه بالینی، کاهش واضح پوسته‌ریزی و بهبود سطح و ظاهر ضایعه پس از درمان با ترکیب ACS + PL مشاهده شده است.'
    },
    {
      title: 'نمونه واقعی بهبود ضایعه مزمن پوستی',
      image: '/images/cases/skin-psoriasis-case-2.webp',
      alt: 'نمونه واقعی روند بهبود یک ضایعه مزمن پوستی',
      caption: 'نمونه‌ای از بهبود بالینی در ظاهر ضایعه و کیفیت سطح پوست پس از درمان بازساختی در بیمار منتخب.'
    },
    {
      title: 'نمونه واقعی بهبود اسکار',
      image: '/images/cases/skin-scar-case-1.webp',
      alt: 'تصویر روند قبل و بعد از بهبود اسکار با رویکرد بازساختی',
      caption: 'در این نمونه، کاهش برجستگی اسکار و بهبود کیفیت و یکنواختی بافت پوست پس از درمان مشاهده شده است.'
    }
  ];
</script>

<svelte:head>
  <title>جوانسازی پوست بدون تزریق با سونوفورزیس | 4B Clinic تهران</title>
  <meta name="description" content="جوانسازی پوست در 4B Clinic با فرآورده‌های اتولوگ منتخب، سونوفورزیس بدون تزریق، فوتوبیومدولیشن با لیزر، تزریق مستقیم یا پروتکل ترکیبی و تناوبی." />
  <link rel="canonical" href="https://4b-clinic.com/skin" />
  <meta property="og:image" content="https://4b-clinic.com/images/services/skin.webp" />
</svelte:head>

<PhotoClinicalPage
  eyebrow="SKIN • SONOPHORESIS • PHOTOBIOMODULATION"
  title="جوانسازی پوست با درمان‌های اتولوگ"
  titleAccent="سونوفورزیس بدون تزریق، تزریق مستقیم یا پروتکل ترکیبی"
  intro="در مسیر غیرتهاجمی 4B، فرآورده‌های اتولوگ منتخب روی پوست قرار می‌گیرند و سونوفورزیس با اولتراسوند و پارامترهای تنظیم‌شده، با افزایش موقت نفوذپذیری سد پوستی به انتقال موضعی آن‌ها کمک می‌کند. سپس در صورت اندیکاسیون، فوتوبیومدولیشن با نور یا لیزر برای حمایت از فعالیت میتوکندری، پاسخ ترمیمی سلول‌ها و مسیرهای مرتبط با کلاژن‌سازی به کار می‌رود. همین درمان را می‌توان در موارد مناسب با تزریق مستقیم یا به‌صورت تناوبی از هر دو روش انجام داد."
  image="/images/services/skin.webp"
  imageAlt="خانمی در کلینیک هنگام جوانسازی پوست با تزریق مستقیم و هندپیس سونوفورزیس"
  imagePosition="center 42%"
  mobileImagePosition="70% center"
  heroCopySide="left"
  {conditions}
  pathwayTitle="سه مسیر برای جوانسازی؛ بدون تزریق، با تزریق یا ترکیبی"
  pathwayIntro="روش مناسب برای همه یکسان نیست. هدف این است که بر اساس کیفیت پوست، هدف درمانی و تحمل بیمار، مسیر غیرتهاجمی، تزریق مستقیم یا برنامه‌ای تناوبی از هر دو انتخاب شود."
  {steps}
  noteTitle="سونوفورزیس و تزریق، دو مسیر متفاوت برای رساندن درمان هستند"
  note="سونوفورزیس می‌تواند نفوذپذیری لایه شاخی پوست را به‌طور موقت افزایش دهد، اما میزان و عمق انتقال به نوع ماده، اندازه مولکول، فرمولاسیون و پارامترهای اولتراسوند وابسته است؛ بنابراین در همه کاربردها معادل تزریق مستقیم نیست. انتخاب روش یا ترکیب دو روش باید بر اساس شرایط پوست و نظر پزشک انجام شود."
  ctaTitle="برای پوست شما کدام مسیر مناسب‌تر است؟"
  ctaText="در ارزیابی اولیه مشخص می‌کنیم که سونوفورزیس بدون تزریق، تزریق مستقیم یا برنامه ترکیبی و تناوبی با هدف جوانسازی شما هماهنگ‌تر است."
  ctaLabel="درخواست ارزیابی پوست"
  backHref="/"
  backLabel="بازگشت به صفحه اصلی"
  badges={['سونوفورزیس بدون تزریق', 'PL / PRGF', 'فوتوبیومدولیشن', 'تزریق مستقیم', 'پروتکل ترکیبی']}
  scienceHref="https://zetamed.org/%D9%BE%D8%B2%D8%B4%DA%A9%DB%8C-%D8%A8%D8%A7%D8%B2%D8%B3%D8%A7%D8%AE%D8%AA%DB%8C-%D9%85%D9%82%D8%AF%D9%85%D9%87/"
  scienceTitle="پزشکی بازساختی، انتقال پوستی و پاسخ سلولی"
  scienceText="برای آشنایی عمیق‌تر با مبانی پزشکی بازساختی، پیام‌رسانی سلولی و محدودیت‌های واقعی این درمان‌ها، محتوای علمی Zetamed را مطالعه کنید."
/>

<section class="focus-section">
  <div class="focus-head">
    <div>
      <div class="eyebrow">SCAR • PSORIASIS • ECZEMA</div>
      <h2>اسکار و ضایعات مزمن پوستی</h2>
    </div>
    <p>در این بخش، تجربه بالینی واقعی 4B Clinic در بیماران منتخب نمایش داده می‌شود. نوع ضایعه، مرحله بیماری و پاسخ فردی در نتیجه درمان نقش دارند.</p>
  </div>

  <div class="focus-tabs" role="tablist" aria-label="موارد پوستی منتخب">
    {#each Object.values(focusTabs) as tab}
      <button
        type="button"
        class:active={activeFocus === tab}
        onclick={() => (activeFocus = tab)}
        role="tab"
        aria-selected={activeFocus === tab}
      >{tab.label}</button>
    {/each}
  </div>

  <article class="focus-panel">
    <div class="eyebrow">CLINICAL FOCUS</div>
    <h3>{activeFocus.title}</h3>
    <p>{activeFocus.text}</p>
  </article>
</section>

<section class="case-section">
  <div class="case-head">
    <div>
      <div class="eyebrow">REAL CASES</div>
      <h2>نمونه‌های واقعی درمان در 4B Clinic</h2>
    </div>
    <p>این تصاویر مربوط به بیماران واقعی و نمونه‌های درمانی انجام‌شده در کلینیک هستند. نمایش آن‌ها برای نشان دادن تجربه بالینی است، نه تضمین نتیجه مشابه برای همه بیماران.</p>
  </div>

  <div class="case-grid">
    {#each cases as item}
      <article class="case-card">
        <img src={item.image} alt={item.alt} loading="lazy" />
        <div class="case-card__copy">
          <span>CASE STUDY</span>
          <h3>{item.title}</h3>
          <p>{item.caption}</p>
        </div>
      </article>
    {/each}
  </div>

  <p class="case-disclaimer">نتایج درمان فردی هستند و می‌توانند از بیماری به بیمار دیگر متفاوت باشند. انتخاب درمان پس از ارزیابی پزشکی انجام می‌شود.</p>
</section>

<style>
  .focus-section,.case-section{padding:clamp(64px,8vw,112px) clamp(20px,7vw,110px)}
  .focus-section{background:#f5f4ef}
  .focus-head,.case-head{display:grid;grid-template-columns:1fr minmax(280px,.7fr);gap:60px;align-items:end;margin-bottom:34px}
  .focus-head h2,.case-head h2{font-size:clamp(30px,4.2vw,54px);line-height:1.35;margin:10px 0 0;color:#0a1d33}
  .focus-head p,.case-head p{margin:0;color:#68737d;line-height:1.9}
  .eyebrow{font-size:10px;letter-spacing:.16em;color:#9a7737;font-weight:900}
  .focus-tabs{display:flex;gap:10px;flex-wrap:wrap;margin-bottom:18px}
  .focus-tabs button{border:1px solid #d8d5ca;background:#fff;color:#24374b;padding:11px 19px;border-radius:999px;font-weight:800;cursor:pointer;transition:.2s}
  .focus-tabs button.active{background:#0b2645;color:#fff;border-color:#0b2645}
  .focus-panel{background:#fff;border:1px solid #dfded7;border-radius:22px;padding:30px;max-width:1000px}
  .focus-panel h3{font-size:clamp(24px,3vw,38px);margin:8px 0 12px;color:#0a1d33}
  .focus-panel p{margin:0;color:#5f6b75;line-height:2}
  .case-section{background:#fff}
  .case-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:18px;align-items:start}
  .case-card{overflow:hidden;border:1px solid #e0e3e3;border-radius:22px;background:#fafaf8;box-shadow:0 16px 40px rgba(7,23,43,.06)}
  .case-card img{display:block;width:100%;height:auto;object-fit:contain;background:#f1f0eb}
  .case-card__copy{padding:22px}
  .case-card__copy span{font-size:10px;letter-spacing:.14em;font-weight:900;color:#a17d3c}
  .case-card__copy h3{font-size:20px;line-height:1.6;margin:7px 0 8px;color:#0b2138}
  .case-card__copy p{font-size:14px;line-height:1.9;color:#65717a;margin:0}
  .case-disclaimer{margin:24px 0 0;color:#77818a;font-size:12px;line-height:1.9}
  @media(max-width:900px){.focus-head,.case-head{grid-template-columns:1fr;gap:20px}.case-grid{grid-template-columns:1fr 1fr}}
  @media(max-width:640px){.case-grid{grid-template-columns:1fr}.focus-panel{padding:22px}}
</style>
