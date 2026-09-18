<script>
  import ZetaScience from '$lib/components/ZetaScience.svelte';

  const woundImage = '/images/services/wounds.webp';

  const woundTypes = [
    { title: 'زخم پای دیابتی', text: 'کنترل قند، ارزیابی نوروپاتی، فشار روی پا، عفونت و خون‌رسانی باید همزمان با مراقبت موضعی انجام شود. بدون کاهش فشار و اصلاح عوامل زمینه‌ای، درمان موضعی به‌تنهایی کافی نیست.' },
    { title: 'زخم بستر (زخم فشاری)', text: 'کاهش فشار، تغییر وضعیت، تغذیه، کنترل رطوبت و عمق آسیب تعیین می‌کنند چه پانسمان یا مداخله‌ای مناسب‌تر است. برداشتن فشار از ناحیه، بخش اصلی درمان است.' },
    { title: 'زخم عروقی و دیرترمیم', text: 'در زخم‌های وریدی یا شریانی، تشخیص وضعیت خون‌رسانی و درمان علت زمینه‌ای مقدم بر هر مداخله بازساختی است.' },
    { title: 'زخم جراحی و تروما', text: 'بافت مرده، ترشح، بازشدگی لبه‌ها، عفونت و کیفیت بستر زخم باید به‌صورت مرحله‌ای ارزیابی و درمان شوند.' }
  ];

  const standardCare = [
    { title: 'ارزیابی و آماده‌سازی بستر زخم', text: 'اندازه، عمق، ترشح، پوست اطراف، بافت نکروتیک، درد و نشانه‌های عفونت ثبت می‌شوند تا برنامه درمان قابل پیگیری باشد.' },
    { title: 'دبریدمان و کنترل عفونت', text: 'در صورت نیاز، بافت غیرزنده برداشته می‌شود و درمان عفونت، بیوفیلم و التهاب بر اساس وضعیت بیمار انجام می‌گیرد.' },
    { title: 'پانسمان‌های نوین و مدیریت رطوبت', text: 'انتخاب پانسمان بر اساس میزان ترشح، عمق زخم، بافت بستر و هدف درمان انجام می‌شود؛ نه بر اساس یک پانسمان ثابت برای همه.' },
    { title: 'کاهش فشار و Off-loading', text: 'در زخم‌های فشاری و پای دیابتی، برداشتن فشار از ناحیه زخم و انتخاب روش مناسب Off-loading بخش جدایی‌ناپذیر درمان است.' },
    { title: 'ارزیابی عروقی و عوامل زمینه‌ای', text: 'خون‌رسانی، دیابت، تغذیه، داروها و بیماری‌های همراه باید اصلاح شوند؛ وگرنه بهترین پانسمان هم کار محدودی انجام می‌دهد.' },
    { title: 'پیگیری مستند', text: 'عکس‌های استاندارد، اندازه‌گیری منظم و مقایسه روند ترمیم کمک می‌کنند درمان بر اساس پاسخ واقعی زخم تغییر کند.' }
  ];

  const biologics = [
    { title: 'PL و PRGF', text: 'فرآورده‌های پلاکتی اتولوگ حاوی فاکتورها و پیام‌رسان‌های زیستی هستند. در برخی مطالعات زخم پای دیابتی و زخم‌های مزمن، استفاده مکمل از فرآورده‌های پلاکتی با بهبود بعضی شاخص‌های ترمیم همراه بوده است؛ با این حال کیفیت و یکنواختی شواهد محدود است و این روش‌ها جایگزین مراقبت استاندارد، کنترل عفونت، ارزیابی خون‌رسانی یا Off-loading نیستند.' },
    { title: 'ACS', text: 'ACS درمان استاندارد زخم محسوب نمی‌شود و شواهد بالینی آن در زخم‌های مزمن محدود است. در 4B این روش فقط در موارد منتخب، پس از ارزیابی و کنترل عوامل اصلی و با توضیح صریح محدودیت شواهد، قابل بررسی است.' },
    { title: 'روش استفاده بر اساس وضعیت زخم', text: 'اگر درمان اتولوگ برای بیمار منتخب مناسب تشخیص داده شود، نحوه استفاده از فرآورده بر اساس نوع زخم، وضعیت بافت و ارزیابی پزشکی تعیین می‌شود. هیچ روش واحدی برای همه زخم‌ها مناسب نیست.' }
  ];
</script>

<svelte:head>
  <title>درمان زخم دیابتی، زخم بستر و زخم مزمن | 4B Clinic تهران</title>
  <meta name="description" content="ارزیابی و درمان زخم پای دیابتی، زخم بستر، زخم عروقی و زخم دیرترمیم در 4B Clinic تهران؛ پانسمان نوین، دبریدمان، کنترل فشار و عفونت و در بیماران منتخب درمان‌های اتولوگ مانند PL، PRGF و ACS." />
  <link rel="canonical" href="https://4b-clinic.com/wounds" />
</svelte:head>

<section class="wound-hero">
  <div class="wound-copy">
    <div class="eyebrow light">ADVANCED WOUND CARE • AUTOLOGOUS BIOLOGICS</div>
    <h1>درمان زخم فقط<br/><span>تعویض پانسمان نیست.</span></h1>
    <p>برای زخم مزمن، فقط ظاهر زخم مهم نیست. خون‌رسانی، عفونت، فشار، کنترل قند، تغذیه و کیفیت بستر زخم هم‌زمان بررسی می‌شوند. بعد از اصلاح عوامل اصلی، پانسمان و مراقبت مناسب انتخاب می‌شود و در برخی بیماران، درمان‌های اتولوگ فقط به‌صورت مکمل و با توضیح شفاف حدود شواهد بررسی می‌شوند.</p>
    <div class="hero-actions">
      <a class="primary-action" href="/contact">درخواست ارزیابی زخم</a>
      <a class="secondary-action" href="#four-b-difference">تفاوت رویکرد 4B</a>
    </div>
    <div class="hero-badges"><span>ارزیابی خون‌رسانی</span><span>کنترل فشار</span><span>پانسمان نوین</span><span>PL / PRGF</span><span>پیگیری مستند</span></div>
  </div>
  <figure class="hero-photo">
    <img src={woundImage} alt="ارزیابی و مراقبت زخم مزمن پاشنه پا در محیط درمانی" loading="eager" fetchpriority="high" />
    <figcaption>زخم پاشنه: ارزیابی فشار، خون‌رسانی و عفونت پیش از انتخاب درمان</figcaption>
  </figure>
</section>

<section class="wound-types" id="wound-types">
  <div class="section-head">
    <div><div class="eyebrow">WOUND TYPES</div><h2>زخم مزمن یک بیماری چندعاملی است.</h2></div>
    <p>نوع زخم فقط بخشی از داستان است. علت زمینه‌ای، خون‌رسانی، عفونت، فشار، تغذیه و کیفیت بافت تعیین می‌کنند درمان از کجا شروع شود.</p>
  </div>
  <div class="grid-2">
    {#each woundTypes as item, i}
      <article class="info-card"><span>0{i + 1}</span><h3>{item.title}</h3><p>{item.text}</p></article>
    {/each}
  </div>
</section>

<section class="modern-care">
  <div class="section-head">
    <div><div class="eyebrow">MODERN WOUND CARE</div><h2>پایه درمان، اصول نوین و استاندارد مراقبت زخم است.</h2></div>
    <p>هیچ تزریق یا فرآورده بازساختی جای کنترل عفونت، خون‌رسانی، فشار و آماده‌سازی بستر زخم را نمی‌گیرد. این‌ها ستون اصلی درمان باقی می‌مانند.</p>
  </div>
  <div class="grid-3">
    {#each standardCare as item}
      <article class="care-card"><h3>{item.title}</h3><p>{item.text}</p></article>
    {/each}
  </div>
</section>

<section class="difference" id="four-b-difference">
  <div class="difference-copy">
    <div class="eyebrow light">THE 4B DIFFERENCE</div>
    <h2>تفاوت 4B: زیست‌درمانی در کنار درمان استاندارد، نه به‌جای آن</h2>
    <p>در 4B رویکرد بازساختی زمانی وارد برنامه می‌شود که بستر زخم و علت‌های اصلی تا حد ممکن کنترل شده باشند. در بیمار منتخب، فرآورده‌های تهیه‌شده از خون خود بیمار ممکن است به‌عنوان درمان مکمل بررسی شوند. هدف، حمایت از محیط ترمیم است؛ نه جایگزین‌کردن درمان استاندارد زخم یا تأخیر در درمان عفونت، اختلال خون‌رسانی و فشار مکانیکی.</p>
  </div>
  <div class="biologic-stack">
    {#each biologics as item, i}
      <article><span>0{i + 1}</span><div><h3>{item.title}</h3><p>{item.text}</p></div></article>
    {/each}
  </div>
</section>

<section class="pathway">
  <div><div class="eyebrow light">CLINICAL PATHWAY</div><h2>از ارزیابی تا ترمیم، یک مسیر قابل اندازه‌گیری</h2><p>هر مرحله بر اساس پاسخ واقعی زخم تنظیم می‌شود. اگر زخم در مسیر مورد انتظار پیش نرود، برنامه باید بازبینی شود؛ نه اینکه صرفاً همان پانسمان قبلی تکرار شود.</p></div>
  <ol>
    <li><span>01</span><div><strong>تشخیص علت و عوامل خطر</strong><p>نوع زخم، مدت، دیابت، فشار، خون‌رسانی، تغذیه و عفونت بررسی می‌شوند.</p></div></li>
    <li><span>02</span><div><strong>آماده‌سازی بستر زخم</strong><p>دبریدمان، کنترل رطوبت، پانسمان مناسب و مدیریت عفونت بر اساس نیاز انجام می‌شوند.</p></div></li>
    <li><span>03</span><div><strong>کنترل عوامل زمینه‌ای</strong><p>off-loading، کنترل قند، ارزیابی عروقی و سایر عوامل همزمان پیگیری می‌شوند.</p></div></li>
    <li><span>04</span><div><strong>افزودن درمان اتولوگ در صورت اندیکاسیون</strong><p>PL، PRGF یا ACS و روش رساندن آن‌ها فقط در بیمار منتخب و پس از ارزیابی وارد برنامه می‌شوند.</p></div></li>
    <li><span>05</span><div><strong>اندازه‌گیری پاسخ</strong><p>روند ترمیم با عکس استاندارد، اندازه‌گیری و مستندسازی منظم مقایسه می‌شود.</p></div></li>
  </ol>
</section>

<section class="warning">
  <div class="warning-mark">!</div>
  <div><div class="eyebrow">RED FLAGS</div><h2>بعضی زخم‌ها نباید منتظر جلسه بعد بمانند.</h2><p>تب، درد رو به افزایش، قرمزی منتشرشونده، ترشح بدبو، سیاه‌شدن بافت، سردی اندام یا علائم کاهش خون‌رسانی نیازمند ارزیابی سریع پزشکی هستند. در این شرایط، اولویت با درمان فوری و ایمن است.</p></div>
</section>

<section class="science"><ZetaScience href="https://zetamed.org/services/wound-clinic/" title="چرا زخم مزمن نیاز به نگاه چندعاملی دارد؟" text="برای مطالعه عمیق‌تر درباره بستر زخم، خون‌رسانی، عفونت، فشار و اصول علمی ترمیم بافت می‌توانید به Zetamed مراجعه کنید." /></section>

<section class="wound-cta">
  <div><div class="eyebrow light">NEXT STEP</div><h2>زخم را با سابقه‌اش ببینیم، نه فقط با یک عکس.</h2><p>برای ارزیابی دقیق‌تر، اگر در دسترس دارید گزارش‌های عروقی، نتایج قند خون، کشت، سوابق جراحی، فهرست داروها و عکس‌های قبلی زخم را همراه داشته باشید.</p></div>
  <a href="/contact">درخواست ارزیابی زخم</a>
</section>

<style>
  .eyebrow{font-size:10px;letter-spacing:.16em;color:#9c7532;font-weight:900}.eyebrow.light{color:#dfc88f}
  .wound-hero{min-height:700px;background:linear-gradient(135deg,#071720,#0c2d36 58%,#154550);color:#fff;display:grid;grid-template-columns:1.05fr .95fr;gap:clamp(34px,5vw,80px);align-items:center;padding:clamp(92px,10vw,150px) clamp(22px,7vw,110px)}
  .wound-copy{max-width:780px}.wound-copy h1{font-size:clamp(44px,6.2vw,86px);line-height:1.15;margin:12px 0 20px}.wound-copy h1 span{color:#dec58c}.wound-copy>p{font-size:clamp(16px,1.45vw,19px);line-height:2;color:#d7e1e4;max-width:720px}
  .hero-actions{display:flex;gap:10px;flex-wrap:wrap;margin-top:28px}.primary-action,.secondary-action,.wound-cta>a{display:inline-flex;align-items:center;justify-content:center;min-height:48px;padding:10px 20px;border-radius:999px;text-decoration:none;font-weight:900}.primary-action,.wound-cta>a{background:#b8914e;color:#fff}.secondary-action{border:1px solid rgba(255,255,255,.35);color:#fff;background:rgba(255,255,255,.06)}
  .hero-badges{display:flex;gap:7px;flex-wrap:wrap;margin-top:28px}.hero-badges span{font-size:10px;border:1px solid rgba(255,255,255,.18);padding:6px 10px;border-radius:999px;color:#e4eaec;background:rgba(255,255,255,.04)}
  .hero-photo{margin:0;align-self:center;border-radius:26px;overflow:hidden;border:1px solid rgba(255,255,255,.16);background:#0b2028;box-shadow:0 28px 80px rgba(0,0,0,.28)}.hero-photo img{width:100%;aspect-ratio:16/9;object-fit:cover;object-position:center;display:block}.hero-photo figcaption{font-size:12px;line-height:1.8;color:#cbd6d9;padding:13px 16px}
  .wound-types,.modern-care,.science{padding:clamp(62px,8vw,112px) clamp(20px,7vw,110px)}.wound-types,.science{background:#fff}.modern-care{background:#f4f5f1}
  .section-head{display:grid;grid-template-columns:1fr minmax(280px,.72fr);gap:60px;align-items:end;margin-bottom:34px}.section-head h2,.difference h2,.pathway h2,.warning h2,.wound-cta h2{font-size:clamp(28px,4vw,52px);line-height:1.45;margin:10px 0}.section-head>p{color:#64717a;margin:0;line-height:1.9;max-width:650px}
  .grid-2{display:grid;grid-template-columns:repeat(2,1fr);gap:14px}.grid-3{display:grid;grid-template-columns:repeat(3,1fr);gap:14px}.info-card,.care-card{height:100%;border:1px solid #dfe4e1;border-radius:20px;background:#fff;padding:28px}.info-card>span{color:#a47b38;font-size:11px;font-weight:900}.info-card h3,.care-card h3{font-size:22px;margin:18px 0 8px;color:#0b2730}.info-card p,.care-card p{margin:0;color:#5d6972;line-height:1.95;font-size:14px}
  .difference{padding:clamp(70px,9vw,124px) clamp(20px,7vw,110px);background:#0a2028;color:#fff;display:grid;grid-template-columns:.85fr 1.15fr;gap:70px}.difference-copy>p{color:#c0cdd1;line-height:2}.biologic-stack{display:grid;gap:12px}.biologic-stack article{display:grid;grid-template-columns:50px 1fr;gap:16px;padding:20px;border-radius:18px;border:1px solid rgba(255,255,255,.12);background:rgba(255,255,255,.045)}.biologic-stack span{color:#d7bb7e;font-weight:900}.biologic-stack h3{margin:0 0 6px}.biologic-stack p{margin:0;color:#bac7cb;font-size:14px;line-height:1.9}
  .pathway{padding:clamp(68px,9vw,122px) clamp(20px,7vw,110px);background:#071720;color:#fff;display:grid;grid-template-columns:.72fr 1.28fr;gap:70px}.pathway>div>p{color:#b9c8cc}.pathway ol{list-style:none;padding:0;margin:0;display:grid;gap:10px}.pathway li{display:grid;grid-template-columns:48px 1fr;gap:16px;padding:19px 20px;border:1px solid rgba(255,255,255,.12);background:rgba(255,255,255,.04);border-radius:16px}.pathway li>span{color:#d6bb81;font-weight:900}.pathway li p{color:#b8c6ca;margin:4px 0 0;font-size:13px}
  .warning{padding:clamp(58px,7vw,90px) clamp(20px,7vw,110px);display:grid;grid-template-columns:100px 1fr;gap:30px;align-items:center;background:#f2f0e9}.warning-mark{width:78px;height:78px;border-radius:50%;display:grid;place-items:center;background:#fff;border:1px solid #c6a76a;color:#986f2d;font-size:34px;font-weight:900}.warning p{max-width:920px;color:#56616b}.science{padding-top:48px;padding-bottom:48px}
  .wound-cta{padding:clamp(62px,8vw,112px) clamp(20px,7vw,110px);background:#0b2630;color:#fff;display:flex;justify-content:space-between;align-items:end;gap:40px}.wound-cta>div{max-width:850px}.wound-cta p{max-width:820px;color:#c1d0d3;line-height:1.95}
  @media(max-width:1000px){.wound-hero{grid-template-columns:1fr}.hero-photo{max-width:720px}.difference,.pathway,.section-head{grid-template-columns:1fr;gap:28px}.grid-3{grid-template-columns:1fr 1fr}.wound-cta{align-items:flex-start;flex-direction:column}}
  @media(max-width:640px){.wound-hero{min-height:auto;padding:88px 18px 54px;gap:30px}.wound-copy h1{font-size:38px;line-height:1.28}.wound-copy>p{font-size:15px;line-height:1.95}.hero-photo{border-radius:18px}.hero-photo figcaption{font-size:11px;padding:11px 13px}.wound-types,.modern-care,.science{padding-left:18px;padding-right:18px}.grid-2,.grid-3{grid-template-columns:1fr}.info-card,.care-card{padding:23px}.warning{grid-template-columns:1fr}.hero-actions{flex-direction:column}.hero-actions a,.wound-cta>a{width:100%}}
</style>
