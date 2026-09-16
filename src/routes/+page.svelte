<script>
  import { site } from '$lib/data/site.js';

  const conditionGroups = [
    {
      number: '01',
      title: 'زانو و مفاصل',
      text: 'درد و خشکی زانو، آرتروز، آسیب‌های منتخب مینیسک و مشکلاتی که بیمار می‌خواهد پیش از تصمیم برای جراحی دقیق‌تر ارزیابی کند.',
      href: '/orthopedics',
      tags: ['آرتروز زانو', 'مینیسک', 'درد مفصل']
    },
    {
      number: '02',
      title: 'شانه و روتاتورکاف',
      text: 'شانه یخ‌زده، تاندینوپاتی، پارگی‌های ناکامل روتاتورکاف و آسیب‌های منتخب تاندون و کپسول پس از بررسی بالینی و تصویربرداری.',
      href: '/orthopedics/shoulder',
      tags: ['شانه یخ‌زده', 'روتاتورکاف', 'تاندون']
    },
    {
      number: '03',
      title: 'مو',
      text: 'بررسی علت ریزش مو و انتخاب برنامه درمانی متناسب با الگوی ریزش، وضعیت پوست سر و شرایط هر فرد.',
      href: '/hair',
      tags: ['ریزش مو', 'تقویت فولیکول', 'پروتکل شخصی']
    },
    {
      number: '04',
      title: 'پوست و جوانسازی',
      text: 'روش‌های تزریقی و غیرتهاجمی با تمرکز بر کیفیت پوست، بازسازی بافت و انتخاب روش متناسب با نیاز واقعی بیمار.',
      href: '/skin',
      tags: ['جوانسازی', 'سونوفورزیس', 'روش‌های اتولوگ']
    },
    {
      number: '05',
      title: 'زخم‌های مزمن',
      text: 'ارزیابی زخم‌های دیرترمیم و طراحی مسیر درمانی مرحله‌ای در کنار مراقبت استاندارد زخم و کنترل عوامل زمینه‌ای.',
      href: '/wounds',
      tags: ['زخم دیرترمیم', 'بازسازی بافت', 'مراقبت مرحله‌ای']
    },
    {
      number: '06',
      title: 'سلامت جنسی',
      text: 'خدمات اختصاصی بانوان و آقایان با رعایت حریم خصوصی، ارزیابی پزشکی و انتخاب روش بر اساس اندیکاسیون واقعی.',
      href: '/sexual-health',
      tags: ['بانوان', 'آقایان', 'ارزیابی محرمانه']
    }
  ];

  const technologies = [
    ['ACS', 'سرم اتولوگ شرطی‌شده'],
    ['PL', 'پلاکت لیزیت'],
    ['PRGF', 'فاکتورهای رشد مشتق از پلاکت'],
    ['EXO', 'فناوری‌های مبتنی بر اگزوزوم در موارد منتخب'],
    ['SVF', 'فراکسیون عروقی استرومال در چارچوب مناسب'],
    ['MSC', 'سلول‌های بنیادی مزانشیمی از منابع مجاز']
  ];

  const steps = [
    ['ارزیابی', 'شرح حال، معاینه و مرور تصویربرداری یا آزمایش‌های موجود.'],
    ['انتخاب', 'تعیین اینکه درمان اتولوگ واقعاً برای شما مناسب است یا نه.'],
    ['برنامه', 'انتخاب روش، تعداد جلسات و فاصله درمان بر اساس تشخیص.'],
    ['پیگیری', 'ارزیابی پاسخ درمان و تصمیم درباره ادامه، تغییر یا توقف مسیر.']
  ];
</script>

<svelte:head>
  <title>4B Clinic | درمان‌های اتولوگ و ارتوبیولوژیک در تهران</title>
  <meta name="description" content="کلینیک 4B؛ ارزیابی و درمان‌های اتولوگ و ارتوبیولوژیک برای مشکلات منتخب زانو و شانه، پوست و مو، زخم‌های مزمن و سلامت جنسی در تهران." />
  <link rel="canonical" href={site.domain} />
  <meta property="og:title" content="4B Clinic | بدن خودت را با بدن خودت بساز" />
  <meta property="og:description" content={site.description} />
  <meta property="og:url" content={site.domain} />
  <meta property="og:type" content="website" />
</svelte:head>

<section class="hero section home-hero">
  <div class="hero-copy">
    <div class="eyebrow">4B CLINIC • REGENERATIVE MEDICINE</div>
    <h1>بدن خودت را<br/><span>با بدن خودت بساز</span></h1>
    <p class="hero-lead">در 4B Clinic از درمان‌های اتولوگ و ارتوبیولوژیک زمانی استفاده می‌کنیم که با تشخیص، شرایط بافت و هدف درمانی بیمار هم‌خوان باشد؛ نه صرفاً چون نام یک روش جدید جذاب به نظر می‌رسد.</p>
    <div class="actions">
      <a class="button" href="/contact">درخواست ارزیابی اولیه</a>
      <a class="ghost" href="#conditions">مشکل من کجاست؟</a>
    </div>
    <div class="trust" aria-label="فناوری‌های مورد استفاده">
      <span>ACS</span><span>PL</span><span>PRGF</span><span>EXO</span><span>SVF</span><span>MSC</span>
    </div>
  </div>
  <aside class="hero-panel" aria-label="اصول درمان در 4B Clinic">
    <small>اصل درمان در 4B</small>
    <strong>اول تشخیص، بعد درمان</strong>
    <p>همه بیماران کاندید درمان‌های بازساختی نیستند. انتخاب روش بعد از ارزیابی پزشکی انجام می‌شود.</p>
    <div class="hero-panel-grid"><span>اتولوگ</span><span>شخصی‌سازی‌شده</span><span>پیگیری‌پذیر</span></div>
  </aside>
</section>

<section class="section intro home-intro">
  <div>
    <div class="eyebrow">START WITH THE PROBLEM</div>
    <h2>از اسم آمپول شروع نمی‌کنیم؛ از مشکل شما شروع می‌کنیم.</h2>
  </div>
  <div>
    <p>درد زانو، محدودیت حرکت شانه، ریزش مو یا یک زخم مزمن هرکدام علت و مسیر درمان متفاوتی دارند. هدف 4B انتخاب یک برنامه قابل توضیح و قابل پیگیری است، نه نسخه یکسان برای همه.</p>
    <a class="text-link" href="/about">رویکرد درمانی 4B را ببینید ←</a>
  </div>
</section>

<section class="section conditions" id="conditions">
  <div class="section-heading">
    <div><div class="eyebrow">CLINICAL PATHWAYS</div><h2>برای چه مشکلی مراجعه می‌کنید؟</h2></div>
    <p>هر مسیر صفحه اختصاصی خودش را دارد تا بیمار قبل از مراجعه بداند چه چیزی بررسی می‌شود و چه انتظاری منطقی است.</p>
  </div>
  <div class="condition-grid">
    {#each conditionGroups as item}
      <a class="condition-card" href={item.href}>
        <span class="condition-number">{item.number}</span>
        <h3>{item.title}</h3>
        <p>{item.text}</p>
        <div class="tag-row">{#each item.tags as tag}<span>{tag}</span>{/each}</div>
        <b>مشاهده مسیر درمان ←</b>
      </a>
    {/each}
  </div>
</section>

<section class="section approach-section">
  <div class="section-heading light-heading">
    <div><div class="eyebrow">4B APPROACH</div><h2>چهار مرحله تا یک تصمیم درمانی روشن</h2></div>
    <p>حتی اگر در نهایت درمان اتولوگ انتخاب نشود، ارزیابی باید به یک تصمیم قابل دفاع برسد. همین بخش ساده معمولاً از تبلیغ‌های پرزرق‌وبرق مفیدتر است.</p>
  </div>
  <div class="steps-grid">
    {#each steps as step, i}
      <div class="step-card"><span>0{i + 1}</span><h3>{step[0]}</h3><p>{step[1]}</p></div>
    {/each}
  </div>
</section>

<section class="section technology-section">
  <div class="section-heading">
    <div><div class="eyebrow">TECHNOLOGIES</div><h2>ابزار درمانی، نه جایگزین تشخیص</h2></div>
    <p>روش‌ها بسته به اندیکاسیون، شواهد موجود، شرایط بیمار و الزامات قانونی انتخاب می‌شوند. وجود یک فناوری در کلینیک به معنی مناسب بودن آن برای همه نیست.</p>
  </div>
  <div class="technology-grid">
    {#each technologies as tech}
      <div class="technology-card"><strong>{tech[0]}</strong><span>{tech[1]}</span></div>
    {/each}
  </div>
  <a class="text-link" href="/technologies">آشنایی با فناوری‌های 4B ←</a>
</section>

<section class="section dark-callout bio-callout">
  <div>
    <div class="eyebrow">BIO HARMONY</div>
    <h2>مسیر چندسطحی 4B برای آرتروز زانو</h2>
    <p>Bio Harmony یک نام برای «یک آمپول واحد» نیست؛ ساختاری برای انتخاب مرحله‌ای روش درمان بر اساس شدت علائم، شرایط مفصل و ارزیابی پزشک است.</p>
  </div>
  <a class="button" href="/bio-harmony">آشنایی با Bio Harmony</a>
</section>

<section class="section shoulder-highlight">
  <div class="shoulder-copy">
    <div class="eyebrow">SHOULDER CARE</div>
    <h2>شانه یخ‌زده یا پارگی ناکامل روتاتورکاف؟ اول باید دقیق بدانیم با چه چیزی طرفیم.</h2>
    <p>درد شانه ممکن است از کپسول، تاندون، بورس، مفصل یا ترکیبی از آنها ناشی شود. صفحه شانه 4B برای همین تفکیک طراحی شده است؛ نه برای اینکه هر درد شانه را به یک تزریق وصل کند.</p>
    <a class="button secondary-button" href="/orthopedics/shoulder">صفحه تخصصی شانه</a>
  </div>
  <div class="shoulder-facts">
    <span><b>01</b> دامنه حرکت</span>
    <span><b>02</b> تست‌های بالینی</span>
    <span><b>03</b> بررسی MRI / سونوگرافی</span>
    <span><b>04</b> تصمیم درمانی مرحله‌ای</span>
  </div>
</section>

<section class="section final-cta">
  <div><div class="eyebrow">NEXT STEP</div><h2>قبل از انتخاب درمان، پرونده را درست بررسی کنیم.</h2><p>می‌توانید برای ارزیابی اولیه و هماهنگی مراجعه از صفحه تماس با 4B Clinic اقدام کنید.</p></div>
  <a class="button" href="/contact">ارتباط با 4B Clinic</a>
</section>
