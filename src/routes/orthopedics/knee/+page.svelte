<script>
  import ZetaScience from '$lib/components/ZetaScience.svelte';
  import PatientVideoSection from '$lib/components/PatientVideoSection.svelte';

  const symptoms = ['درد هنگام راه رفتن یا پله', 'خشکی و محدودیت حرکت', 'تورم یا التهاب تکرارشونده', 'سابقه آسیب یا پارگی مینیسک', 'کاهش فعالیت به‌دلیل درد', 'پاسخ ناکافی به درمان‌های قبلی'];
  const pathway = [
    ['شرح حال و معاینه', 'الگوی درد، دامنه حرکت، تورم، ثبات، عملکرد و محدودیت‌های روزمره بررسی می‌شوند.'],
    ['تصویربرداری هدفمند', 'رادیوگرافی، MRI یا سونوگرافی فقط وقتی مرور یا درخواست می‌شوند که برای تصمیم درمانی لازم باشند.'],
    ['درجه‌بندی و هدف', 'شدت بیماری، وضعیت بافت، سن، سطح فعالیت و هدف واقعی بیمار کنار هم قرار می‌گیرند.'],
    ['انتخاب مسیر', 'بازتوانی، اصلاح عوامل زمینه‌ای، دارو، تزریق یا در موارد لازم ارجاع برای جراحی بررسی می‌شوند.']
  ];
  const scienceGuides = [
    ['ACS', 'کنترل محیط التهابی مفصل', '/articles/acs-autologous-conditioned-serum'],
    ['PRGF', 'فاکتورهای رشد مشتق از پلاکت', '/articles/prgf-growth-factors'],
    ['PL', 'Platelet Lysate و فرآورده پلاکتی', '/articles/platelet-lysate'],
    ['HA', 'تزریق هیالورونیک اسید برای زانو', '/articles/hyaluronic-acid-knee-injection'],
    ['SVF', 'کسر عروقی استرومایی و سطح شواهد', '/articles/svf-stromal-vascular-fraction'],
    ['MSC', 'سلول‌های استرومایی مزانشیمی و شواهد', '/articles/mesenchymal-stromal-cells-msc']
  ];
  const therapies = [
    ['PL', 'پلاکت لیزیت'],
    ['PRGF', 'فاکتورهای رشد مشتق از پلاکت'],
    ['ACS', 'سرم اتولوگ شرطی‌شده'],
    ['Selected add-ons', 'در صورت اندیکاسیون مناسب']
  ];
</script>

<svelte:head>
  <title>درمان آرتروز و درد زانو بدون جراحی | 4B Clinic تهران</title>
  <meta name="description" content="ارزیابی آرتروز زانو، درد مفصل و آسیب‌های منتخب مینیسک در 4B Clinic تهران؛ بررسی گزینه‌های غیرجراحی و درمان‌های اتولوگ و ارتوبیولوژیک بر اساس تشخیص و شدت بیماری." />
  <link rel="canonical" href="https://4b-clinic.com/orthopedics/knee" />
  <meta property="og:image" content="https://4b-clinic.com/images/services/knee.webp" />
</svelte:head>

<section class="knee-v2-hero">
  <img src="/images/services/knee.webp" alt="فرد مسن با درد و التهاب زانو" loading="eager" fetchpriority="high" />
  <div class="knee-v2-overlay"></div>
  <div class="knee-v2-copy">
    <div class="eyebrow-v2">KNEE • OSTEOARTHRITIS • MENISCUS</div>
    <h1>درد زانو فقط یک<br/><span>«آرتروز ساده» نیست</span></h1>
    <p>شدت تخریب غضروف، وضعیت مینیسک، محور اندام، التهاب مفصل، وزن، فعالیت و قدرت عضلات همگی روی درد و انتخاب درمان اثر می‌گذارند. در 4B تصمیم درمانی از تشخیص شروع می‌شود، نه از نام یک تزریق.</p>
    <div class="knee-actions"><a href="/contact">درخواست ارزیابی زانو</a><a class="outline" href="#assessment">مسیر ارزیابی</a></div>
    <div class="knee-badges"><span>آرتروز زانو</span><span>مینیسک</span><span>درمان غیرجراحی</span><span>ارتوبیولوژیک</span></div>
  </div>
</section>

<section class="v2-section knee-intro" id="assessment">
  <div><div class="eyebrow-dark">WHEN TO EVALUATE</div><h2>چه زمانی ارزیابی دقیق‌تر زانو ارزش دارد؟</h2></div>
  <div class="symptom-grid">{#each symptoms as item}<span>{item}</span>{/each}</div>
</section>

<section class="v2-section pathway-section">
  <div class="section-head"><div><div class="eyebrow-dark">4B KNEE PATHWAY</div><h2>از معاینه تا انتخاب درمان</h2></div><p>هدف این مسیر پیدا کردن منبع اصلی درد و مشخص کردن این است که آیا یک درمان غیرجراحی برای وضعیت فعلی شما منطقی است یا نه.</p></div>
  <div class="path-grid">{#each pathway as step, i}<article><b>0{i + 1}</b><h3>{step[0]}</h3><p>{step[1]}</p></article>{/each}</div>
</section>

<section class="v2-section treatment-section">
  <div class="treatment-copy"><div class="eyebrow-dark">ORTHOBIOLOGICS</div><h2>درمان اتولوگ برای چه کسی معنا پیدا می‌کند؟</h2><p>درمان‌های اتولوگ از خون یا بافت خود بیمار تهیه می‌شوند. در 4B از روش‌هایی مانند PL، PRGF و ACS در شرایط منتخب استفاده می‌شود. انتخاب روش به تشخیص، شدت بیماری و سابقه درمان بستگی دارد.</p><p>این درمان‌ها برای همه بیماران مناسب نیستند و نباید به‌عنوان تضمین رشد مجدد غضروف یا جایگزین قطعی جراحی معرفی شوند.</p><a class="text-link-v2" href="/technologies">فناوری‌های مورد استفاده در 4B ←</a></div>
  <div class="therapy-list">{#each therapies as therapy}<div><strong>{therapy[0]}</strong><span>{therapy[1]}</span></div>{/each}</div>
</section>

<section class="v2-section intent-guides">
  <div class="section-head"><div><div class="eyebrow-dark">راهنمای مشکلات شایع زانو</div><h2>پاسخ به سؤال‌هایی که بیماران بیشتر جست‌وجو می‌کنند</h2></div><p>راهنماهای زیر برای شناخت بهتر مشکل نوشته شده‌اند و به مسیر ارزیابی زانو متصل می‌شوند.</p></div>
  <div class="intent-grid">
    <a href="/orthopedics/knee/osteoarthritis-non-surgical"><strong>درمان آرتروز زانو بدون جراحی</strong><span>از بازتوانی تا گزینه‌های تزریقی منتخب</span></a>
    <a href="/orthopedics/knee/meniscus-non-surgical"><strong>پارگی مینیسک بدون جراحی</strong><span>چه زمانی درمان غیرجراحی منطقی است؟</span></a>
    <a href="/orthopedics/knee/knee-wear"><strong>ساییدگی زانو چیست؟</strong><span>علائم، ارزیابی و انتخاب مسیر درمان</span></a>
  </div>
</section>

<section class="v2-section evidence-map">
  <div class="section-head"><div><div class="eyebrow-dark">EVIDENCE MAP</div><h2>روش‌ها را با اسمشان انتخاب نکنید؛ شواهد و اندیکاسیون را ببینید</h2></div><p>این راهنماها توضیح می‌دهند هر فناوری چیست، چه منطقی دارد و محدودیت شواهد آن کجاست. تصمیم درمانی بعد از ارزیابی بالینی انجام می‌شود.</p></div>
  <div class="evidence-grid">{#each scienceGuides as guide}<a href={guide[2]}><b>{guide[0]}</b><span>{guide[1]}</span><i>مطالعه راهنما ←</i></a>{/each}</div>
</section>

<section class="bio-harmony-v2">
  <div><div class="eyebrow-light">BIO HARMONY</div><h2>مسیر چندسطحی 4B برای آرتروز زانو</h2><p>Bio Harmony یک آمپول واحد نیست. ساختاری است برای انتخاب مرحله‌ای درمان بر اساس شدت علائم، شرایط مفصل و ارزیابی پزشک.</p></div>
  <a href="/bio-harmony">آشنایی با Bio Harmony</a>
</section>

<section class="v2-section science-v2"><ZetaScience href="https://zetamed.org/knee-pain/" title="مطالعه علمی بیشتر درباره درد و آرتروز زانو" text="برای جزئیات بیشتر درباره علل درد زانو، آرتروز، مینیسک، رباط‌ها و مسیرهای درمانی، راهنمای علمی Zetamed را مطالعه کنید." /></section>

<section class="v2-section faq-v2">
  <div class="section-head"><div><div class="eyebrow-dark">FAQ</div><h2>سؤال‌های رایج درباره درمان زانو</h2></div></div>
  <div class="faq-list">
    <details><summary>آیا همه آرتروزهای زانو با تزریق قابل درمان هستند؟</summary><p>خیر. شدت آرتروز، تغییر شکل مفصل، محدودیت عملکرد، وضعیت استخوان و پاسخ به درمان‌های قبلی در انتخاب روش اثر دارند.</p></details>
    <details><summary>آیا درمان اتولوگ غضروف را حتماً بازسازی می‌کند؟</summary><p>چنین تضمینی علمی نیست. هدف بالینی در بسیاری از بیماران کنترل علائم و بهبود عملکرد است و پاسخ هر فرد متفاوت است.</p></details>
    <details><summary>برای مراجعه MRI لازم است؟</summary><p>نه برای همه. اگر تصویربرداری قبلی دارید همراه بیاورید. پزشک بعد از معاینه مشخص می‌کند آیا تصویربرداری جدید لازم است یا خیر.</p></details>
    <details><summary>پارگی مینیسک همیشه نیاز به جراحی دارد؟</summary><p>نه. نوع پارگی، علائم مکانیکی، سن، وضعیت غضروف و سطح فعالیت مهم‌اند. برخی پارگی‌ها با درمان غیرجراحی مدیریت می‌شوند.</p></details>
  </div>
</section>

<PatientVideoSection
  title="تجربه بیماران درمان زانو"
  intro="بعد از انتشار ویدئوی رضایت بیمار در یوتیوب، فقط لینک آن را به این بخش اضافه می‌کنیم و ویدئو همان‌جا نمایش داده می‌شود."
  videos={[
    {
      label: 'KNEE PATIENT STORY',
      title: 'رضایت بیمار پس از درمان زانو',
      text: 'جایگاه آماده برای ویدئوی واقعی بیمار پس از درمان زانو.',
      youtubeUrl: ''
    }
  ]}
/>

<section class="knee-final"><div><div class="eyebrow-light">NEXT STEP</div><h2>تصاویر و سابقه درمان زانویتان را برای ارزیابی آماده کنید.</h2><p>اگر رادیوگرافی، MRI یا گزارش درمان‌های قبلی دارید، همراه مراجعه داشته باشید تا تصمیم درمانی بر اساس اطلاعات کامل‌تری گرفته شود.</p></div><a href="/contact">ارتباط با کلینیک</a></section>

<style>
  .knee-v2-hero{position:relative;min-height:clamp(620px,80vh,880px);overflow:hidden;background:#07172b;color:#fff;display:flex;align-items:flex-end}.knee-v2-hero>img{position:absolute;inset:0;width:100%;height:100%;object-fit:cover;object-position:center center}.knee-v2-overlay{position:absolute;inset:0;background:linear-gradient(90deg,rgba(4,13,24,.98) 0%,rgba(4,13,24,.92) 30%,rgba(4,13,24,.42) 62%,rgba(4,13,24,.08) 100%),linear-gradient(0deg,rgba(4,13,24,.58),transparent 48%)}.knee-v2-copy{position:relative;z-index:2;width:min(760px,52vw);margin-left:clamp(22px,7vw,110px);margin-right:auto;padding:clamp(110px,14vw,180px) 0 clamp(58px,8vw,100px);text-align:right}.eyebrow-v2,.eyebrow-light,.eyebrow-dark{font-size:10px;letter-spacing:.16em;font-weight:900}.eyebrow-v2,.eyebrow-light{color:#ddc287}.eyebrow-dark{color:#9b7431}.knee-v2-copy h1{font-size:clamp(44px,6.2vw,88px);line-height:1.15;margin:12px 0 20px}.knee-v2-copy h1 span{color:#dbc084}.knee-v2-copy p{font-size:clamp(16px,1.55vw,20px);line-height:2.05;color:#e9eef2;max-width:720px}.knee-actions{display:flex;gap:10px;flex-wrap:wrap;margin-top:28px}.knee-actions a,.bio-harmony-v2>a,.knee-final>a{display:inline-flex;align-items:center;justify-content:center;min-height:48px;padding:10px 20px;border-radius:999px;background:#b58d48;color:#fff;text-decoration:none;font-weight:900;font-size:13px}.knee-actions .outline{background:rgba(255,255,255,.06);border:1px solid rgba(255,255,255,.4)}.knee-badges{display:flex;gap:7px;flex-wrap:wrap;margin-top:30px}.knee-badges span{font-size:10px;border:1px solid rgba(255,255,255,.22);padding:5px 10px;border-radius:999px;background:rgba(7,23,43,.32)}
  .v2-section{padding:clamp(62px,8vw,112px) clamp(20px,7vw,110px)}.knee-intro{display:grid;grid-template-columns:.8fr 1.2fr;gap:70px;background:#f7f7f4}.knee-intro h2,.section-head h2,.treatment-copy h2,.bio-harmony-v2 h2,.knee-final h2{font-size:clamp(28px,4vw,52px);line-height:1.45;margin:10px 0}.symptom-grid{display:grid;grid-template-columns:1fr 1fr;gap:10px}.symptom-grid span{padding:16px 18px;border:1px solid #e0e4e1;border-radius:15px;background:#fff;color:#46525d}
  .pathway-section{background:#fff}.section-head{display:grid;grid-template-columns:1fr minmax(280px,.7fr);gap:60px;align-items:end;margin-bottom:34px}.section-head>p{color:#65717b;margin:0}.path-grid{display:grid;grid-template-columns:repeat(4,1fr);gap:12px}.path-grid article{padding:26px;border-radius:20px;background:#f6f7f4;border:1px solid #e2e5e2}.path-grid b{color:#a9823f;font-size:11px}.path-grid h3{font-size:20px;margin:24px 0 8px}.path-grid p{font-size:13px;color:#606c76;margin:0}
  .treatment-section{display:grid;grid-template-columns:1.05fr .95fr;gap:70px;background:#eef0ec}.treatment-copy p{font-size:16px;color:#56616b}.text-link-v2{display:inline-block;margin-top:15px;color:#89672d;font-weight:900;text-decoration:none}.therapy-list{display:grid;gap:9px;align-content:start}.therapy-list div{display:grid;grid-template-columns:135px 1fr;gap:16px;align-items:center;padding:16px 18px;background:#fff;border:1px solid #dde2de;border-radius:15px}.therapy-list strong{color:#8f6a2d}.therapy-list span{color:#5f6a74;font-size:13px}
  .bio-harmony-v2{margin:clamp(36px,6vw,80px);padding:clamp(38px,6vw,78px);border-radius:30px;background:linear-gradient(135deg,#07172b,#12385f);color:#fff;display:flex;justify-content:space-between;align-items:end;gap:40px}.bio-harmony-v2 p{max-width:760px;color:#c5ced7}.science-v2{padding-top:20px;padding-bottom:20px}.faq-v2{background:#fff}.faq-list{display:grid;gap:9px;max-width:960px}.faq-list details{padding:18px 20px;border:1px solid #e1e4e2;border-radius:15px;background:#fbfbf9}.faq-list summary{cursor:pointer;font-weight:900}.faq-list p{color:#5f6a74}.knee-final{padding:clamp(62px,8vw,112px) clamp(20px,7vw,110px);background:#07172b;color:#fff;display:flex;justify-content:space-between;align-items:end;gap:40px}.knee-final p{color:#c5ced7;max-width:820px}
  @media(max-width:900px){.knee-v2-overlay{background:linear-gradient(0deg,rgba(4,13,24,.98) 0%,rgba(4,13,24,.78) 50%,rgba(4,13,24,.10) 100%)}.knee-v2-copy{width:auto;margin:0;padding:120px 22px 48px}.knee-intro,.section-head,.treatment-section{grid-template-columns:1fr;gap:26px}.path-grid{grid-template-columns:1fr 1fr}.bio-harmony-v2,.knee-final{align-items:flex-start;flex-direction:column}}
  @media(max-width:620px){.knee-v2-hero{min-height:720px}.knee-v2-hero>img{object-position:right center}.knee-v2-copy{padding-top:290px}.knee-v2-copy h1{font-size:42px}.knee-actions{flex-direction:column}.knee-actions a{width:100%}.symptom-grid,.path-grid{grid-template-columns:1fr}.therapy-list div{grid-template-columns:100px 1fr}.bio-harmony-v2{margin:26px 14px;padding:34px 22px}.knee-final>a{width:100%}}
.intent-guides{background:#f7f7f4}.intent-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:12px}.intent-grid a{display:grid;gap:8px;padding:24px;border-radius:20px;background:#fff;border:1px solid #dfe4e1;text-decoration:none;color:#17313c}.intent-grid strong{font-size:18px}.intent-grid span{font-size:13px;color:#66727b}@media(max-width:800px){.intent-grid{grid-template-columns:1fr}}.evidence-map{background:#eef0ec}.evidence-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:12px}.evidence-grid a{min-height:160px;padding:24px;border-radius:20px;background:#fff;border:1px solid #dce2de;text-decoration:none;color:#17313c;display:flex;flex-direction:column}.evidence-grid b{font-size:24px;color:#8f6a2d}.evidence-grid span{margin-top:9px;color:#5f6a74;font-size:13px}.evidence-grid i{margin-top:auto;padding-top:20px;color:#89672d;font-style:normal;font-size:11px;font-weight:900}@media(max-width:800px){.evidence-grid{grid-template-columns:1fr 1fr}}@media(max-width:520px){.evidence-grid{grid-template-columns:1fr}}</style>
