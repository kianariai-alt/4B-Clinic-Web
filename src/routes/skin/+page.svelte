<script>
  import PhotoClinicalPage from '$lib/components/PhotoClinicalPage.svelte';

  const conditions = [
    { title: 'سونوفورزیس بدون تزریق', en: 'Needle-free Sonophoresis', text: 'فرآورده‌های اتولوگ منتخب مانند PL و PRGF روی پوست قرار می‌گیرند و اولتراسوند با پارامترهای تنظیم‌شده، از طریق کاویتاسیون آکوستیک و تغییرات گذرای ریزساختاری در سد پوستی، نفوذپذیری لایه شاخی را افزایش می‌دهد و انتقال موضعی مواد را تسهیل می‌کند.' },
    { title: 'فوتوبیومدولیشن و حمایت از فعالیت سلولی', en: 'Photobiomodulation', text: 'پس از یا همراه با سونوفورزیس، نور یا لیزر با طول موج انتخاب‌شده برای اثرگذاری بر مسیرهای میتوکندریایی و انرژی سلولی به کار می‌رود. هدف، حمایت از فعالیت فیبروبلاست‌ها، بازسازی ماتریکس و مسیرهای مرتبط با کلاژن‌سازی است.' },
    { title: 'تزریق مستقیم فرآورده‌های منتخب', en: 'Direct Injection', text: 'در شرایطی که هدف درمانی به رساندن مستقیم فرآورده به بافت نیاز داشته باشد، می‌توان از تزریق استفاده کرد. انتخاب ماده، محل، عمق و تعداد جلسات بر اساس ارزیابی پزشک و وضعیت پوست تعیین می‌شود.' },
    { title: 'پروتکل ترکیبی یا تناوبی', en: 'Alternating Combination Plan', text: 'برای بعضی بیماران می‌توان جلسات سونوفورزیس بدون تزریق را با جلسات تزریق مستقیم به‌صورت مرحله‌ای یا تناوبی ترکیب کرد تا برنامه درمان با هدف، تحمل بیمار و پاسخ واقعی پوست هماهنگ شود.' }
  ];

  const focusTabs = [
    {
      title: 'اسکار',
      en: 'Scar Remodeling',
      text: 'در اسکارهای منتخب، ACS + PL می‌تواند با هدف بهبود کیفیت بافت، انعطاف‌پذیری، یکنواختی و ظاهر اسکار در یک برنامه بازساختی استفاده شود. در نمونه‌های واقعی کلینیک، کاهش برجستگی و بهبود کیفیت بافت در بعضی بیماران مشاهده شده است.',
      note: 'نتیجه به نوع اسکار، سن آن، محل ضایعه و پاسخ فردی بافت بستگی دارد و حذف کامل اسکار قابل تضمین نیست.'
    },
    {
      title: 'پسوریازیس',
      en: 'Psoriasis',
      text: 'در تجربه بالینی 4B، در برخی بیماران منتخب با ضایعات پسوریازیس، پس از پروتکل ACS + PL کاهش پوسته‌ریزی و بهبود ظاهر و کیفیت سطح ضایعه مشاهده شده است. هدف این رویکرد، حمایت از ترمیم بافت و تعدیل محیط التهابی در کنار ارزیابی پزشکی است.',
      note: 'پاسخ درمان فردی است و این رویکرد جایگزین کنترل بیماری فعال یا درمان استاندارد توسط متخصص پوست نیست.'
    },
    {
      title: 'اگزما',
      en: 'Chronic Eczema',
      text: 'در اگزمای مزمن منتخب، پس از بررسی عامل محرک و کنترل فاز فعال، می‌توان ACS + PL یا سایر مداخلات بازساختی را به‌عنوان درمان مکمل برای حمایت از کیفیت بافت و سد پوستی بررسی کرد.',
      note: 'در فازهای فعال یا شدید، تشخیص دقیق، حذف محرک‌ها و درمان استاندارد پوست اولویت دارد.'
    }
  ];

  const steps = [
    { title: 'انتخاب فرآورده اتولوگ', text: 'بر اساس هدف درمان و شرایط پوست، فرآورده‌های منتخب مانند PL یا PRGF و نحوه استفاده از آن‌ها مشخص می‌شوند.' },
    { title: 'انتقال بدون تزریق یا تزریق مستقیم', text: 'در مسیر غیرتهاجمی، سونوفورزیس برای افزایش موقت نفوذپذیری سد پوستی به کار می‌رود؛ در مسیر تزریقی، فرآورده مستقیماً به ناحیه هدف رسانده می‌شود.' },
    { title: 'فوتوبیومدولیشن با لیزر', text: 'در صورت اندیکاسیون، نور یا لیزر با پارامترهای انتخاب‌شده برای تعدیل فعالیت میتوکندری و حمایت از پاسخ ترمیمی سلول‌های پوست به برنامه اضافه می‌شود.' },
    { title: 'تناوب و پیگیری پاسخ پوست', text: 'بر اساس پاسخ واقعی پوست، جلسات می‌توانند غیرتهاجمی، تزریقی یا به‌صورت تناوبی از هر دو روش ادامه پیدا کنند و نتیجه با عکس‌های استاندارد و ارزیابی بالینی پیگیری شود.' }
  ];

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
  <title>جوانسازی پوست، سونوفورزیس و درمان اسکار | 4B Clinic تهران</title>
  <meta name="description" content="جوانسازی پوست در 4B Clinic تهران با PL و PRGF، سونوفورزیس بدون تزریق، فوتوبیومدولیشن، تزریق مستقیم و برنامه‌های منتخب ACS + PL برای اسکار و ضایعات مزمن پوستی." />
  <link rel="canonical" href="https://4b-clinic.com/skin" />
  <meta property="og:image" content="https://4b-clinic.com/images/services/skin.webp" />
</svelte:head>

<PhotoClinicalPage
  eyebrow="SKIN • SONOPHORESIS • PHOTOBIOMODULATION"
  title="جوانسازی پوست با درمان‌های اتولوگ"
  titleAccent="بدون تزریق، با تزریق یا ترکیبی"
  intro="در 4B، PL و PRGF را می‌توان با سونوفورزیس بدون تزریق به‌صورت موضعی استفاده کرد، مستقیماً تزریق کرد یا این دو مسیر را به‌صورت تناوبی ترکیب کرد. در صورت اندیکاسیون، فوتوبیومدولیشن نیز برای حمایت از فعالیت میتوکندری و مسیرهای مرتبط با کلاژن‌سازی به برنامه اضافه می‌شود."
  image="/images/services/skin.webp"
  imageAlt="خانمی در کلینیک هنگام جوانسازی پوست با تزریق مستقیم و هندپیس سونوفورزیس"
  imagePosition="center 42%"
  mobileImagePosition="70% center"
  heroCopySide="left"
  {conditions}
  focusTitle="اسکار و بیماری‌های التهابی مزمن پوست"
  focusIntro="در کنار جوانسازی، تجربه بالینی 4B در بعضی بیماران منتخب شامل برنامه‌های ACS + PL برای اسکار، پسوریازیس و اگزمای مزمن است. هر مورد پس از ارزیابی پزشکی و بر اساس شرایط واقعی پوست انتخاب می‌شود."
  {focusTabs}
  pathwayTitle="سه مسیر برای جوانسازی؛ بدون تزریق، با تزریق یا ترکیبی"
  pathwayIntro="روش مناسب برای همه یکسان نیست. هدف این است که بر اساس کیفیت پوست، هدف درمانی و تحمل بیمار، مسیر غیرتهاجمی، تزریق مستقیم یا برنامه‌ای تناوبی از هر دو انتخاب شود."
  {steps}
  noteTitle="سونوفورزیس و تزریق، دو مسیر متفاوت برای رساندن درمان هستند"
  note="سونوفورزیس می‌تواند نفوذپذیری لایه شاخی پوست را به‌طور موقت افزایش دهد، اما میزان و عمق انتقال به نوع ماده، اندازه مولکول، فرمولاسیون و پارامترهای اولتراسوند وابسته است؛ بنابراین در همه کاربردها معادل تزریق مستقیم نیست. انتخاب روش یا ترکیب دو روش باید بر اساس شرایط پوست و نظر پزشک انجام شود."
  ctaTitle="برای پوست شما کدام مسیر مناسب‌تر است؟"
  ctaText="در ارزیابی اولیه مشخص می‌کنیم که سونوفورزیس بدون تزریق، تزریق مستقیم یا برنامه ترکیبی و تناوبی با هدف درمانی شما هماهنگ‌تر است."
  ctaLabel="درخواست ارزیابی پوست"
  backHref="/"
  backLabel="بازگشت به صفحه اصلی"
  badges={['سونوفورزیس بدون تزریق', 'PL / PRGF', 'فوتوبیومدولیشن', 'تزریق مستقیم', 'ACS + PL']}
  scienceHref="https://zetamed.org/%D9%BE%D8%B2%D8%B4%DA%A9%DB%8C-%D8%A8%D8%A7%D8%B2%D8%B3%D8%A7%D8%AE%D8%AA%DB%8C-%D9%85%D9%82%D8%AF%D9%85%D9%87/"
  scienceTitle="پزشکی بازساختی، انتقال پوستی و پاسخ سلولی"
  scienceText="برای آشنایی عمیق‌تر با مبانی پزشکی بازساختی، پیام‌رسانی سلولی و محدودیت‌های واقعی این درمان‌ها، محتوای علمی Zetamed را مطالعه کنید."
/>

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

<section class="skin-final-cta">
  <div>
    <div class="eyebrow light">NEXT STEP</div>
    <h2>برای پوست شما کدام مسیر مناسب‌تر است؟</h2>
    <p>پس از بررسی پوست و هدف درمانی، مشخص می‌کنیم که سونوفورزیس بدون تزریق، تزریق مستقیم، ACS + PL یا یک برنامه ترکیبی و تناوبی انتخاب مناسب‌تری است.</p>
  </div>
  <a href="/contact">درخواست ارزیابی پوست</a>
</section>

<style>
  :global(.cta-v2){display:none!important}
  .case-section{padding:clamp(64px,8vw,112px) clamp(20px,7vw,110px);background:#fff}
  .case-head{display:grid;grid-template-columns:1fr minmax(280px,.7fr);gap:60px;align-items:end;margin-bottom:34px}
  .case-head h2{font-size:clamp(30px,4.2vw,54px);line-height:1.35;margin:10px 0 0;color:#0a1d33}
  .case-head p{margin:0;color:#68737d;line-height:1.9}
  .eyebrow{font-size:10px;letter-spacing:.16em;color:#9a7737;font-weight:900}.eyebrow.light{color:#e0c68e}
  .case-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:18px;align-items:start}
  .case-card{overflow:hidden;border:1px solid #e0e3e3;border-radius:22px;background:#fafaf8;box-shadow:0 16px 40px rgba(7,23,43,.06)}
  .case-card img{display:block;width:100%;height:auto;object-fit:contain;background:#f1f0eb}
  .case-card__copy{padding:22px}
  .case-card__copy span{font-size:10px;letter-spacing:.14em;font-weight:900;color:#a17d3c}
  .case-card__copy h3{font-size:20px;line-height:1.6;margin:7px 0 8px;color:#0b2138}
  .case-card__copy p{font-size:14px;line-height:1.9;color:#65717a;margin:0}
  .case-disclaimer{margin:24px 0 0;color:#77818a;font-size:12px;line-height:1.9}
  .skin-final-cta{padding:clamp(62px,8vw,104px) clamp(20px,7vw,110px);background:linear-gradient(135deg,#0b2645,#061321);color:#fff;display:flex;justify-content:space-between;align-items:end;gap:40px}
  .skin-final-cta h2{font-size:clamp(30px,4vw,52px);line-height:1.4;margin:10px 0}
  .skin-final-cta p{color:#c5ced7;max-width:820px;margin:0;line-height:2}
  .skin-final-cta a{display:inline-flex;align-items:center;justify-content:center;min-height:48px;padding:10px 20px;border-radius:999px;font-weight:900;font-size:13px;background:#bd9650;color:#fff;border:1px solid #bd9650;flex:none}
  @media(max-width:900px){.case-head{grid-template-columns:1fr;gap:20px}.case-grid{grid-template-columns:1fr 1fr}.skin-final-cta{align-items:flex-start;flex-direction:column}}
  @media(max-width:640px){.case-grid{grid-template-columns:1fr}.skin-final-cta a{width:100%}}
</style>