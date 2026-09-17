<script>
  const oShotPoints = [
    'O‑Shot نام رایجی برای تزریق فرآورده پلاکتی اتولوگ در نواحی هدف سلامت جنسی بانوان است؛ فرآورده از خون خود فرد تهیه می‌شود و پروتکل فقط پس از ارزیابی انتخاب می‌شود.',
    'هدف این رویکرد، فراهم کردن محیطی غنی از پیام‌رسان‌ها و فاکتورهای پلاکتی در بافت هدف است تا از پاسخ بافتی، خون‌رسانی و فرآیندهای ترمیمی حمایت شود.',
    'در برخی مطالعات، بهبودهایی در شاخص‌های عملکرد جنسی، کیفیت بافت واژینال و بعضی علائم ادراری گزارش شده، اما شواهد هنوز محدود است و نتیجه برای همه افراد یکسان نیست.',
    'در موارد منتخبِ کاهش برانگیختگی، خشکی، درد هنگام رابطه، تغییرات بافتی یا دشواری ارگاسم می‌توان O‑Shot را به‌عنوان یک گزینه مکمل بررسی کرد، نه جایگزین تشخیص علت.',
    'اگر مشکل از عفونت، اختلال هورمونی، بیماری پوستی، اختلال کف لگن، داروها یا عوامل روانی و رابطه‌ای ناشی باشد، درمان همان علت در اولویت قرار می‌گیرد.'
  ];

  const pShotPoints = [
    'P‑Shot نام رایجی برای تزریق فرآورده پلاکتی اتولوگ در بافت آلت است و در 4B فقط پس از ارزیابی کامل اورولوژی و تعیین علت مشکل مطرح می‌شود.',
    'هدف، حمایت از محیط عروقی و بافتی و مسیرهای ترمیمی است؛ این روش درمان هورمونی نیست و نمی‌تواند کمبود تستوسترون، بیماری عروقی یا عوامل روانی را به‌تنهایی برطرف کند.',
    'در برخی مطالعات اولیه نتایج امیدوارکننده‌ای برای اختلال نعوظ گزارش شده، اما مطالعات جدیدتر نتیجه یکنواختی نشان نداده‌اند و هنوز نمی‌توان اثربخشی قطعی برای همه بیماران وعده داد.',
    'در مردان منتخب با اختلال نعوظ خفیف تا متوسط، ممکن است P‑Shot به‌عنوان درمان مکمل در کنار اصلاح عوامل زمینه‌ای و درمان‌های استاندارد بررسی شود.',
    'P‑Shot درمان ثابت‌شده برای افزایش دائمی اندازه آلت یا همه انواع اختلال نعوظ نیست و انتخاب بیمار و تنظیم انتظار واقع‌بینانه بخش اصلی تصمیم درمانی است.'
  ];

  const womenProblems = [
    { title: 'کاهش میل یا برانگیختگی', text: 'می‌تواند با استرس، شرایط رابطه، داروها، تغییرات هورمونی، درد یا مشکلات جسمی همراه باشد. درمان بر اساس علت طراحی می‌شود و O‑Shot فقط در موارد منتخب یکی از گزینه‌های مکمل است.' },
    { title: 'خشکی و کاهش لغزندگی', text: 'در یائسگی، پس از زایمان یا در برخی شرایط پزشکی شایع‌تر است. مرطوب‌کننده‌ها، لوبریکانت، درمان هورمونی در صورت اندیکاسیون و روش‌های بازساختی می‌توانند بر اساس ارزیابی در برنامه قرار گیرند.' },
    { title: 'درد هنگام رابطه', text: 'درد ممکن است از خشکی، عفونت، بیماری‌های پوستی، اسپاسم کف لگن، اسکار یا مشکلات زنان ناشی شود. تزریق بازساختی قبل از روشن شدن علت نباید اولین قدم باشد.' },
    { title: 'دشواری ارگاسم', text: 'عوامل عصبی، دارویی، هورمونی، روانی و رابطه‌ای باید بررسی شوند. در برخی بیماران منتخب می‌توان روش‌های اتولوگ را در کنار درمان علت و مشاوره مناسب بررسی کرد.' },
    { title: 'تغییرات پس از زایمان یا یائسگی', text: 'تغییرات بافتی، حساسیت، خشکی و علائم کف لگن ممکن است کیفیت رابطه را کاهش دهند. مسیر درمان می‌تواند شامل توانبخشی کف لگن، درمان‌های استاندارد و در موارد منتخب O‑Shot باشد.' }
  ];

  const menProblems = [
    { title: 'اختلال نعوظ', text: 'ممکن است ناشی از عوامل عروقی، دیابت، فشار خون، داروها، مشکلات عصبی، هورمونی یا روانی باشد. درمان‌های استاندارد و اصلاح علت، پایه تصمیم‌گیری هستند و P‑Shot در بعضی بیماران به‌عنوان گزینه مکمل بررسی می‌شود.' },
    { title: 'کاهش سفتی یا حفظ نعوظ', text: 'این علامت می‌تواند نخستین نشانه یک مشکل عروقی یا متابولیک باشد. ارزیابی اورولوژی کمک می‌کند مشخص شود دارو، تغییر سبک زندگی، درمان زمینه‌ای یا روش‌های دیگر مناسب‌تر است.' },
    { title: 'کاهش میل جنسی', text: 'P‑Shot درمان مستقیم کاهش میل نیست. تستوسترون، داروها، خواب، استرس، افسردگی و کیفیت رابطه باید بررسی شوند و درمان بر اساس علت انجام شود.' },
    { title: 'اختلال انزال یا ارگاسم', text: 'زودانزالی، دیرانزالی و اختلال ارگاسم علل متفاوتی دارند و به ارزیابی اختصاصی نیاز دارند. درمان دارویی، رفتاری یا مشاوره‌ای ممکن است از هر درمان تزریقی مهم‌تر باشد.' },
    { title: 'انحنا، پلاک یا درد آلت', text: 'وجود انحنا یا پلاک نیازمند بررسی اورولوژی از نظر بیماری پیرونی و سایر علل است. هیچ تزریق بازساختی نباید بدون تشخیص دقیق جایگزین درمان استاندارد این وضعیت شود.' }
  ];

  const pathway = [
    { n: '01', title: 'شرح حال کاملاً محرمانه', text: 'علائم، زمان شروع، داروها، بیماری‌های زمینه‌ای، شرایط رابطه و درمان‌های قبلی بدون قضاوت و در فضای محرمانه بررسی می‌شوند.' },
    { n: '02', title: 'ارزیابی تخصصی متناسب با جنسیت', text: 'مشکلات آقایان توسط اورولوژیست باتجربه در سلامت جنسی بررسی می‌شود. ارزیابی اولیه بانوان توسط مامای بسیار باتجربه انجام می‌شود و هر جا نیاز باشد ارجاع تخصصی انجام خواهد شد.' },
    { n: '03', title: 'درمان علت قبل از انتخاب تکنیک', text: 'عوامل عروقی، هورمونی، دارویی، عفونت، بیماری پوستی، کف لگن و عوامل روانی یا رابطه‌ای در صورت لزوم بررسی و درمان می‌شوند.' },
    { n: '04', title: 'انتخاب O‑Shot یا P‑Shot فقط در بیمار مناسب', text: 'در صورت اندیکاسیون و پس از توضیح شواهد، محدودیت‌ها، گزینه‌های استاندارد و انتظارات واقع‌بینانه، درمان اتولوگ می‌تواند وارد برنامه شود.' },
    { n: '05', title: 'پیگیری نتیجه', text: 'پاسخ درمان، عوارض احتمالی و نیاز به ادامه، تغییر یا ترکیب درمان‌ها در ویزیت‌های بعدی ارزیابی می‌شود.' }
  ];
</script>

<svelte:head>
  <title>O‑Shot و P‑Shot | درمان مشکلات جنسی بانوان و آقایان | 4B Clinic تهران</title>
  <meta name="description" content="ارزیابی محرمانه مشکلات جنسی بانوان و آقایان در 4B Clinic تهران؛ بررسی O‑Shot و P‑Shot در بیماران منتخب، با ارزیابی آقایان توسط اورولوژیست و بانوان توسط مامای باتجربه." />
  <link rel="canonical" href="https://4b-clinic.com/sexual-health" />
  <meta property="og:image" content="https://4b-clinic.com/images/services/sexual-health.webp" />
</svelte:head>

<section class="sex-hero">
  <img src="/images/services/sexual-health.webp" alt="زوج میانسال با فاصله عاطفی و ناراحتی در رابطه" loading="eager" fetchpriority="high" />
  <div class="sex-hero__shade"></div>
  <div class="sex-hero__inner">
    <div class="eyebrow light">SEXUAL HEALTH • O‑SHOT • P‑SHOT</div>
    <h1>مشکلات جنسی<br/><span>قبل از درمان، باید درست فهمیده شوند.</span></h1>
    <p>اختلال عملکرد جنسی فقط یک مشکل موضعی نیست. عوامل عروقی، هورمونی، دارویی، عصبی، کف لگن، استرس و کیفیت رابطه می‌توانند در آن نقش داشته باشند. در 4B ابتدا علت بررسی می‌شود و سپس درمان استاندارد، O‑Shot، P‑Shot یا ترکیبی از گزینه‌ها در صورت مناسب بودن مطرح می‌شود.</p>
    <div class="hero-actions">
      <a class="primary-action" href="/contact">درخواست ارزیابی محرمانه</a>
      <a class="secondary-action" href="#shots">O‑Shot و P‑Shot چیست؟</a>
    </div>
    <div class="hero-badges"><span>محرمانه</span><span>ارزیابی علت</span><span>اورولوژی</span><span>سلامت بانوان</span></div>
  </div>
</section>

<section class="providers">
  <article>
    <span class="provider-tag">MEN</span>
    <h2>ارزیابی مشکلات آقایان توسط اورولوژیست</h2>
    <p>مشکلات جنسی آقایان در 4B توسط <strong>اورولوژیست باتجربه در این حوزه</strong> بررسی می‌شود. هدف فقط انتخاب یک تزریق نیست؛ ابتدا باید مشخص شود مشکل نعوظ، میل، انزال یا درد از چه عاملی ناشی شده و آیا نیاز به بررسی عروقی، متابولیک، هورمونی یا درمان استاندارد دارد.</p>
  </article>
  <article>
    <span class="provider-tag">WOMEN</span>
    <h2>ارزیابی مشکلات بانوان توسط مامای بسیار باتجربه</h2>
    <p>شرح حال و ارزیابی اولیه مشکلات جنسی بانوان توسط <strong>مامای بسیار باتجربه</strong> انجام می‌شود. خشکی، درد، کاهش برانگیختگی، دشواری ارگاسم، تغییرات یائسگی یا پس از زایمان به‌صورت اختصاصی بررسی می‌شوند و در صورت نیاز به تشخیص پزشکی، نسخه یا بررسی تخصصی، ارجاع مناسب انجام خواهد شد.</p>
  </article>
</section>

<section class="shots-section" id="shots">
  <div class="section-head">
    <div><div class="eyebrow">AUTOLOGOUS OPTIONS</div><h2>O‑Shot و P‑Shot چه کمکی می‌توانند بکنند؟</h2></div>
    <p>این نام‌ها برای روش‌های تزریقی مبتنی بر فرآورده‌های پلاکتی اتولوگ رایج شده‌اند. کاربرد آن‌ها باید بر اساس تشخیص و نه صرفاً نام تجاری تکنیک انتخاب شود.</p>
  </div>

  <div class="shot-grid">
    <article class="shot-card women-shot">
      <div class="shot-kicker">O‑SHOT • WOMEN</div>
      <h3>O‑Shot برای بانوان</h3>
      <p class="lead">یک رویکرد اتولوگ برای بیماران منتخب، با هدف حمایت از کیفیت بافت و عملکرد جنسی. این روش برای همه مشکلات بانوان طراحی نشده و قبل از آن باید علت اصلی مشخص شود.</p>
      <ol>{#each oShotPoints as item, i}<li><span>0{i + 1}</span><p>{item}</p></li>{/each}</ol>
    </article>

    <article class="shot-card men-shot">
      <div class="shot-kicker">P‑SHOT • MEN</div>
      <h3>P‑Shot برای آقایان</h3>
      <p class="lead">یک گزینه بازساختی مورد بررسی در بعضی بیماران مبتلا به اختلال نعوظ. انتخاب بیمار باید توسط اورولوژیست و با درنظرگرفتن درمان‌های استاندارد انجام شود.</p>
      <ol>{#each pShotPoints as item, i}<li><span>0{i + 1}</span><p>{item}</p></li>{/each}</ol>
    </article>
  </div>
</section>

<section class="problems-section">
  <div class="section-head">
    <div><div class="eyebrow">WOMEN’S SEXUAL HEALTH</div><h2>مشکلات شایع بانوان و مسیر درمان</h2></div>
    <p>یک علامت واحد می‌تواند چند علت داشته باشد. به همین دلیل درمان درست از شرح حال و ارزیابی دقیق شروع می‌شود، نه از نام یک تکنیک.</p>
  </div>
  <div class="problem-grid">
    {#each womenProblems as item, i}
      <article><span>0{i + 1}</span><h3>{item.title}</h3><p>{item.text}</p></article>
    {/each}
  </div>
</section>

<section class="problems-section men-problems">
  <div class="section-head light-head">
    <div><div class="eyebrow light">MEN’S SEXUAL HEALTH</div><h2>مشکلات شایع آقایان و مسیر درمان</h2></div>
    <p>اختلال نعوظ می‌تواند حتی نشانه یک مشکل عروقی یا متابولیک باشد. بنابراین انتخاب P‑Shot بدون ارزیابی علت، رویکرد مناسبی نیست.</p>
  </div>
  <div class="problem-grid dark-grid">
    {#each menProblems as item, i}
      <article><span>0{i + 1}</span><h3>{item.title}</h3><p>{item.text}</p></article>
    {/each}
  </div>
</section>

<section class="pathway-section">
  <div class="pathway-copy">
    <div class="eyebrow">CLINICAL PATHWAY</div>
    <h2>مسیر تصمیم‌گیری در 4B</h2>
    <p>هدف این نیست که هر مراجعه‌کننده به یک پروسیجر برسد. هدف این است که هر فرد بفهمد مشکلش از کجا می‌آید و کدام درمان برای شرایط خودش منطقی‌تر است.</p>
  </div>
  <ol class="pathway-list">
    {#each pathway as step}<li><span>{step.n}</span><div><h3>{step.title}</h3><p>{step.text}</p></div></li>{/each}
  </ol>
</section>

<section class="evidence-note">
  <div class="note-mark">4B</div>
  <div>
    <div class="eyebrow">EVIDENCE & EXPECTATIONS</div>
    <h2>O‑Shot و P‑Shot درمان قطعی همه مشکلات جنسی نیستند</h2>
    <p>شواهد درمان‌های پلاکتی در سلامت جنسی هنوز در حال تکامل است. در بانوان نتایج اولیه امیدوارکننده‌ای برای بعضی شاخص‌های عملکرد جنسی و سلامت واژینال گزارش شده، اما کیفیت شواهد هنوز محدود است. در اختلال نعوظ مردان نیز نتایج مطالعات یکسان نیستند. به همین دلیل در 4B این روش‌ها فقط برای بیمار منتخب و پس از توضیح شفاف گزینه‌های استاندارد، محدودیت‌ها و انتظارات واقع‌بینانه مطرح می‌شوند.</p>
  </div>
</section>

<section class="privacy-note">
  <div><div class="eyebrow">PRIVACY</div><h2>محرمانگی بخشی از درمان است.</h2></div>
  <p>برای گرفتن وقت لازم نیست جزئیات حساس، تصاویر یا مدارک پزشکی را در پیام عمومی شبکه‌های اجتماعی ارسال کنید. اطلاعات کامل در مسیر رسمی و محرمانه کلینیک دریافت می‌شود.</p>
</section>

<section class="final-cta">
  <div>
    <div class="eyebrow light">NEXT STEP</div>
    <h2>اول علت را مشخص کنیم، بعد درباره O‑Shot یا P‑Shot تصمیم بگیریم.</h2>
    <p>برای آقایان مسیر ارزیابی با اورولوژیست و برای بانوان با مامای باتجربه آغاز می‌شود. در صورت نیاز، بررسی یا ارجاع تخصصی بیشتر انجام خواهد شد.</p>
  </div>
  <a class="primary-action" href="/contact">درخواست ارزیابی محرمانه</a>
</section>

<style>
  .eyebrow{font-size:10px;letter-spacing:.16em;color:#a98039;font-weight:900}.eyebrow.light{color:#e0c68e}
  .sex-hero{position:relative;min-height:clamp(620px,80vh,880px);display:flex;align-items:flex-end;overflow:hidden;background:#07172b;color:#fff}
  .sex-hero>img{position:absolute;inset:0;width:100%;height:100%;object-fit:cover;object-position:center 48%;transform:scale(1.01)}
  .sex-hero__shade{position:absolute;inset:0;background:linear-gradient(90deg,rgba(4,13,24,.97) 0%,rgba(4,13,24,.9) 30%,rgba(4,13,24,.48) 62%,rgba(4,13,24,.12) 100%),linear-gradient(0deg,rgba(4,13,24,.68),transparent 48%)}
  .sex-hero__inner{position:relative;z-index:2;width:min(100%,1400px);margin:0 auto;padding:clamp(120px,14vw,180px) clamp(22px,7vw,110px) clamp(56px,8vw,96px);max-width:760px;margin-left:auto;margin-right:0}
  .sex-hero h1{font-size:clamp(42px,6vw,84px);line-height:1.2;margin:12px 0 20px}.sex-hero h1 span{color:#d8bd83}
  .sex-hero p{font-size:clamp(16px,1.5vw,20px);line-height:2.05;color:#edf1f4;margin:0}
  .hero-actions{display:flex;gap:10px;flex-wrap:wrap;margin-top:28px}.primary-action,.secondary-action{display:inline-flex;align-items:center;justify-content:center;min-height:49px;padding:10px 21px;border-radius:999px;font-weight:900;font-size:13px}.primary-action{background:#bd9650;color:#fff;border:1px solid #bd9650}.secondary-action{border:1px solid rgba(255,255,255,.38);color:#fff;background:rgba(255,255,255,.07)}
  .hero-badges{display:flex;gap:7px;flex-wrap:wrap;margin-top:30px}.hero-badges span{font-size:10px;border:1px solid rgba(255,255,255,.2);padding:5px 10px;border-radius:999px;color:#e5e9ee}
  .providers,.shots-section,.problems-section,.pathway-section,.evidence-note,.privacy-note,.final-cta{padding:clamp(64px,8vw,112px) clamp(20px,7vw,110px)}
  .providers{display:grid;grid-template-columns:1fr 1fr;gap:16px;background:#f5f4ef}.providers article{background:#fff;border:1px solid #dfded8;border-radius:24px;padding:30px}.provider-tag{font-size:10px;letter-spacing:.13em;color:#987332;font-weight:900}.providers h2{font-size:clamp(25px,3vw,38px);line-height:1.5;margin:9px 0 12px;color:#0a1d33}.providers p{color:#5f6b75;line-height:2;margin:0}
  .section-head{display:grid;grid-template-columns:1fr minmax(280px,.72fr);gap:60px;align-items:end;margin-bottom:36px}.section-head h2,.pathway-copy h2,.evidence-note h2,.privacy-note h2,.final-cta h2{font-size:clamp(30px,4.2vw,54px);line-height:1.42;margin:10px 0}.section-head>p{color:#67737d;margin:0;line-height:1.9}
  .shots-section{background:#fff}.shot-grid{display:grid;grid-template-columns:1fr 1fr;gap:18px}.shot-card{border-radius:24px;padding:32px;border:1px solid #dfe3e2;background:linear-gradient(180deg,#fff,#fafaf7)}.shot-kicker{font-size:10px;letter-spacing:.13em;font-weight:900;color:#9a7536}.shot-card h3{font-size:32px;margin:8px 0 10px;color:#0a1d33}.shot-card .lead{color:#5d6974;line-height:1.9}.shot-card ol{list-style:none;padding:0;margin:24px 0 0;display:grid;gap:11px}.shot-card li{display:grid;grid-template-columns:40px 1fr;gap:12px;padding-top:12px;border-top:1px solid #e4e5df}.shot-card li span{color:#b18a46;font-weight:900;font-size:12px}.shot-card li p{margin:0;color:#56636d;line-height:1.9;font-size:14px}
  .problems-section{background:#f7f7f4}.problem-grid{display:grid;grid-template-columns:repeat(5,1fr);gap:12px}.problem-grid article{position:relative;background:#fff;border:1px solid #e1e4e2;border-radius:20px;padding:24px;min-height:250px}.problem-grid article>span{display:block;color:#b08a48;font-weight:900;font-size:11px;margin-bottom:18px}.problem-grid h3{font-size:20px;line-height:1.6;margin:0 0 8px;color:#0b2138}.problem-grid p{font-size:13px;line-height:1.9;color:#64707a;margin:0}
  .men-problems{background:#07172b;color:#fff}.light-head h2{color:#fff}.light-head>p{color:#bdc7d0}.dark-grid article{background:rgba(255,255,255,.045);border-color:rgba(255,255,255,.12)}.dark-grid h3{color:#fff}.dark-grid p{color:#bac5ce}
  .pathway-section{display:grid;grid-template-columns:.72fr 1.28fr;gap:72px;background:#fff}.pathway-copy p{color:#68737d;line-height:2}.pathway-list{list-style:none;padding:0;margin:0;display:grid;gap:10px}.pathway-list li{display:grid;grid-template-columns:48px 1fr;gap:16px;padding:19px 20px;border:1px solid #e0e3e1;border-radius:18px;background:#fafaf8}.pathway-list li>span{color:#b18a46;font-weight:900}.pathway-list h3{margin:0;font-size:17px;color:#0b2138}.pathway-list p{margin:5px 0 0;color:#65717b;font-size:13px;line-height:1.9}
  .evidence-note{display:grid;grid-template-columns:110px 1fr;gap:32px;align-items:center;background:#efefeb}.note-mark{width:88px;height:88px;border-radius:50%;display:grid;place-items:center;background:#fff;border:1px solid #c7aa72;color:#8b682c;font-size:24px;font-weight:900}.evidence-note p{color:#596671;line-height:2;max-width:1000px}
  .privacy-note{display:grid;grid-template-columns:1fr 1fr;gap:70px;background:#fff;align-items:start}.privacy-note p{margin:0;color:#626f79;line-height:2;font-size:17px}
  .final-cta{background:linear-gradient(135deg,#0b2645,#061321);color:#fff;display:flex;justify-content:space-between;align-items:end;gap:40px}.final-cta p{color:#c5ced7;max-width:820px;line-height:2}.final-cta .primary-action{flex:none}
  @media(max-width:1100px){.problem-grid{grid-template-columns:repeat(2,1fr)}}
  @media(max-width:900px){.providers,.shot-grid,.section-head,.pathway-section,.privacy-note{grid-template-columns:1fr;gap:24px}.final-cta{flex-direction:column;align-items:flex-start}.sex-hero__shade{background:linear-gradient(0deg,rgba(4,13,24,.96) 0%,rgba(4,13,24,.73) 48%,rgba(4,13,24,.14) 100%)}.sex-hero__inner{max-width:none;margin:0;padding:130px 24px 52px}}
  @media(max-width:640px){.sex-hero{min-height:760px}.sex-hero>img{object-position:62% center}.sex-hero h1{font-size:42px}.sex-hero p{font-size:15px}.hero-actions{flex-direction:column}.primary-action,.secondary-action{width:100%}.problem-grid{grid-template-columns:1fr}.problem-grid article{min-height:auto}.shot-card{padding:24px}.providers article{padding:24px}.evidence-note{grid-template-columns:1fr}.note-mark{width:72px;height:72px}.final-cta .primary-action{width:100%}}
</style>
