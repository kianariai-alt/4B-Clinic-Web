<script>
  import ZetaScience from '$lib/components/ZetaScience.svelte';

  const woundImage = 'data:image/webp;base64,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';

  const woundTypes = [
    { title: 'زخم دیابتی', text: 'کنترل قند، ارزیابی نوروپاتی، فشار روی پا، عفونت و خون‌رسانی باید همزمان با مراقبت موضعی انجام شود.' },
    { title: 'زخم فشاری', text: 'کاهش فشار، تغییر وضعیت، تغذیه، رطوبت و عمق آسیب تعیین می‌کنند چه پانسمان یا مداخله‌ای مناسب‌تر است.' },
    { title: 'زخم عروقی و دیرترمیم', text: 'در زخم‌های وریدی یا شریانی، تشخیص وضعیت خون‌رسانی و درمان علت زمینه‌ای مقدم بر هر مداخله بازساختی است.' },
    { title: 'زخم جراحی و تروما', text: 'بافت مرده، ترشح، بازشدگی لبه‌ها، عفونت و کیفیت بستر زخم باید به‌صورت مرحله‌ای ارزیابی و درمان شوند.' }
  ];

  const standardCare = [
    { title: 'ارزیابی و آماده‌سازی بستر زخم', text: 'اندازه، عمق، ترشح، پوست اطراف، بافت نکروتیک، درد و نشانه‌های عفونت ثبت می‌شوند تا برنامه درمان قابل پیگیری باشد.' },
    { title: 'دبریدمان و کنترل عفونت', text: 'در صورت نیاز، بافت غیرزنده برداشته می‌شود و درمان عفونت، بیوفیلم و التهاب بر اساس وضعیت بیمار انجام می‌گیرد.' },
    { title: 'پانسمان‌های نوین و مدیریت رطوبت', text: 'انتخاب پانسمان بر اساس میزان ترشح، عمق زخم، بافت بستر و هدف درمان انجام می‌شود؛ نه بر اساس یک پانسمان ثابت برای همه.' },
    { title: 'کاهش فشار و حمایت مکانیکی', text: 'در زخم‌های فشاری و پای دیابتی، off-loading و کنترل فشار بخش جدایی‌ناپذیر درمان است.' },
    { title: 'ارزیابی عروقی و عوامل زمینه‌ای', text: 'خون‌رسانی، دیابت، تغذیه، داروها و بیماری‌های همراه باید اصلاح شوند؛ وگرنه بهترین پانسمان هم کار محدودی انجام می‌دهد.' },
    { title: 'پیگیری مستند', text: 'عکس‌های استاندارد، اندازه‌گیری منظم و مقایسه روند ترمیم کمک می‌کنند درمان بر اساس پاسخ واقعی زخم تغییر کند.' }
  ];

  const biologics = [
    { title: 'PL و PRGF', text: 'فرآورده‌های پلاکتی اتولوگ حاوی مجموعه‌ای از فاکتورها و پیام‌رسان‌های زیستی هستند و در بیماران منتخب می‌توانند به‌عنوان درمان مکمل برای حمایت از محیط ترمیمی بافت بررسی شوند.' },
    { title: 'ACS', text: 'سرم اتولوگ شرطی‌شده با رویکرد تعدیل التهاب شناخته می‌شود. در 4B استفاده از آن برای زخم فقط در بیمار منتخب، پس از کنترل عوامل اصلی و با ارزیابی پزشکی مطرح می‌شود.' },
    { title: 'تزریق هدفمند اطراف یا در بافت مناسب', text: 'تفاوت رویکرد 4B صرفاً گذاشتن یک فرآورده روی سطح زخم نیست؛ در صورت اندیکاسیون، رساندن هدفمند فرآورده اتولوگ به بافت پیرامونی یا ناحیه هدف نیز در برنامه بررسی می‌شود.' }
  ];
</script>

<svelte:head>
  <title>درمان زخم مزمن با پانسمان نوین و بیولوژیک اتولوگ | 4B Clinic تهران</title>
  <meta name="description" content="کلینیک زخم 4B تهران؛ درمان مدرن زخم‌های دیابتی، فشاری، عروقی و دیرترمیم با پانسمان‌های نوین، کنترل عوامل زمینه‌ای و در بیماران منتخب استفاده از فرآورده‌های اتولوگ مانند PL، PRGF و ACS." />
  <link rel="canonical" href="https://4b-clinic.com/wounds" />
</svelte:head>

<section class="wound-hero">
  <div class="wound-copy">
    <div class="eyebrow light">ADVANCED WOUND CARE • AUTOLOGOUS BIOLOGICS</div>
    <h1>درمان زخم فقط<br/><span>تعویض پانسمان نیست.</span></h1>
    <p>در 4B تمام اصول مدرن مراقبت زخم و پانسمان‌های به‌روز بر اساس وضعیت واقعی بستر زخم به‌کار گرفته می‌شوند. تفاوت اصلی رویکرد ما این است که در بیماران منتخب، پس از کنترل عفونت، فشار، خون‌رسانی و عوامل زمینه‌ای، از فرآورده‌ها و تزریقات بیولوژیک اتولوگ نیز به‌عنوان بخش مکمل برنامه ترمیم استفاده می‌کنیم.</p>
    <div class="hero-actions">
      <a class="primary-action" href="/contact">درخواست ارزیابی زخم</a>
      <a class="secondary-action" href="#four-b-difference">تفاوت رویکرد 4B</a>
    </div>
    <div class="hero-badges"><span>پانسمان نوین</span><span>PL / PRGF</span><span>ACS</span><span>تزریق اتولوگ</span><span>پیگیری مستند</span></div>
  </div>
  <figure class="hero-photo">
    <img src={woundImage} alt="درمان زخم مزمن با پانسمان پیشرفته و تزریق فرآورده بیولوژیک اتولوگ در کلینیک" loading="eager" fetchpriority="high" />
    <figcaption>مراقبت استاندارد زخم + رویکرد بازساختی در بیمار منتخب</figcaption>
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
    <h2>تفاوت 4B: اضافه‌کردن زیست‌درمانی اتولوگ به درمان اصولی زخم</h2>
    <p>در 4B رویکرد بازساختی زمانی وارد برنامه می‌شود که بستر زخم و علت‌های اصلی تا حد ممکن کنترل شده باشند. در بیماران منتخب، فرآورده‌های تهیه‌شده از خون خود بیمار می‌توانند به‌صورت موضعی یا تزریق هدفمند در بافت مناسب بررسی شوند. هدف، حمایت از محیط ترمیم، تعدیل التهاب و فراهم‌کردن شرایط زیستی بهتر برای بازسازی بافت است؛ نه جایگزین کردن درمان استاندارد زخم.</p>
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
  <div><div class="eyebrow light">NEXT STEP</div><h2>زخم را با سابقه‌اش ببینیم، نه فقط با یک عکس.</h2><p>برای ارزیابی دقیق‌تر، گزارش‌های عروقی، قند خون، کشت، جراحی‌های قبلی، لیست داروها و عکس‌های قبلی زخم را همراه داشته باشید.</p></div>
  <a href="/contact">درخواست ارزیابی زخم</a>
</section>

<style>
  .eyebrow{font-size:10px;letter-spacing:.16em;color:#9c7532;font-weight:900}.eyebrow.light{color:#dfc88f}
  .wound-hero{min-height:700px;background:linear-gradient(135deg,#071720,#0c2d36 58%,#154550);color:#fff;display:grid;grid-template-columns:1.05fr .95fr;gap:clamp(34px,5vw,80px);align-items:center;padding:clamp(92px,10vw,150px) clamp(22px,7vw,110px)}
  .wound-copy h1{font-size:clamp(44px,6.2vw,86px);line-height:1.15;margin:12px 0 20px}.wound-copy h1 span{color:#dec58c}.wound-copy>p{font-size:clamp(16px,1.55vw,20px);line-height:2;color:#d7e1e4;max-width:760px}
  .hero-actions{display:flex;gap:10px;flex-wrap:wrap;margin-top:28px}.primary-action,.secondary-action,.wound-cta>a{display:inline-flex;align-items:center;justify-content:center;min-height:48px;padding:10px 20px;border-radius:999px;text-decoration:none;font-weight:900}.primary-action,.wound-cta>a{background:#b8914e;color:#fff}.secondary-action{border:1px solid rgba(255,255,255,.35);color:#fff;background:rgba(255,255,255,.06)}
  .hero-badges{display:flex;gap:7px;flex-wrap:wrap;margin-top:28px}.hero-badges span{font-size:10px;border:1px solid rgba(255,255,255,.18);padding:6px 10px;border-radius:999px;color:#e4eaec;background:rgba(255,255,255,.04)}
  .hero-photo{margin:0;border-radius:26px;overflow:hidden;border:1px solid rgba(255,255,255,.16);background:#0b2028;box-shadow:0 28px 80px rgba(0,0,0,.28)}.hero-photo img{width:100%;height:auto;display:block}.hero-photo figcaption{font-size:12px;color:#cbd6d9;padding:14px 16px}
  .wound-types,.modern-care,.science{padding:clamp(62px,8vw,112px) clamp(20px,7vw,110px)}.wound-types,.science{background:#fff}.modern-care{background:#f4f5f1}
  .section-head{display:grid;grid-template-columns:1fr minmax(280px,.72fr);gap:60px;align-items:end;margin-bottom:34px}.section-head h2,.difference h2,.pathway h2,.warning h2,.wound-cta h2{font-size:clamp(28px,4vw,52px);line-height:1.45;margin:10px 0}.section-head>p{color:#64717a;margin:0;line-height:1.9}
  .grid-2{display:grid;grid-template-columns:repeat(2,1fr);gap:14px}.grid-3{display:grid;grid-template-columns:repeat(3,1fr);gap:14px}.info-card,.care-card{border:1px solid #dfe4e1;border-radius:20px;background:#fff;padding:28px}.info-card>span{color:#a47b38;font-size:11px;font-weight:900}.info-card h3,.care-card h3{font-size:22px;margin:18px 0 8px;color:#0b2730}.info-card p,.care-card p{margin:0;color:#5d6972;line-height:1.95;font-size:14px}
  .difference{padding:clamp(70px,9vw,124px) clamp(20px,7vw,110px);background:#0a2028;color:#fff;display:grid;grid-template-columns:.85fr 1.15fr;gap:70px}.difference-copy>p{color:#c0cdd1;line-height:2}.biologic-stack{display:grid;gap:12px}.biologic-stack article{display:grid;grid-template-columns:50px 1fr;gap:16px;padding:20px;border-radius:18px;border:1px solid rgba(255,255,255,.12);background:rgba(255,255,255,.045)}.biologic-stack span{color:#d7bb7e;font-weight:900}.biologic-stack h3{margin:0 0 6px}.biologic-stack p{margin:0;color:#bac7cb;font-size:14px;line-height:1.9}
  .pathway{padding:clamp(68px,9vw,122px) clamp(20px,7vw,110px);background:#071720;color:#fff;display:grid;grid-template-columns:.72fr 1.28fr;gap:70px}.pathway>div>p{color:#b9c8cc}.pathway ol{list-style:none;padding:0;margin:0;display:grid;gap:10px}.pathway li{display:grid;grid-template-columns:48px 1fr;gap:16px;padding:19px 20px;border:1px solid rgba(255,255,255,.12);background:rgba(255,255,255,.04);border-radius:16px}.pathway li>span{color:#d6bb81;font-weight:900}.pathway li p{color:#b8c6ca;margin:4px 0 0;font-size:13px}
  .warning{padding:clamp(58px,7vw,90px) clamp(20px,7vw,110px);display:grid;grid-template-columns:100px 1fr;gap:30px;align-items:center;background:#f2f0e9}.warning-mark{width:78px;height:78px;border-radius:50%;display:grid;place-items:center;background:#fff;border:1px solid #c6a76a;color:#986f2d;font-size:34px;font-weight:900}.warning p{max-width:920px;color:#56616b}.science{padding-top:48px;padding-bottom:48px}
  .wound-cta{padding:clamp(62px,8vw,112px) clamp(20px,7vw,110px);background:#0b2630;color:#fff;display:flex;justify-content:space-between;align-items:end;gap:40px}.wound-cta p{max-width:820px;color:#c1d0d3}
  @media(max-width:1000px){.wound-hero{grid-template-columns:1fr}.hero-photo{max-width:720px}.difference,.pathway,.section-head{grid-template-columns:1fr;gap:28px}.grid-3{grid-template-columns:1fr 1fr}.wound-cta{align-items:flex-start;flex-direction:column}}
  @media(max-width:640px){.wound-copy h1{font-size:42px}.grid-2,.grid-3{grid-template-columns:1fr}.warning{grid-template-columns:1fr}.hero-actions{flex-direction:column}.hero-actions a,.wound-cta>a{width:100%}}
</style>
