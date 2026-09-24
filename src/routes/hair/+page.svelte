<script>
  import PhotoClinicalPage from '$lib/components/PhotoClinicalPage.svelte';

  const conditions = [
    { title: 'ریزش موی الگوی مردانه و زنانه', en: 'Androgenetic Hair Loss', text: 'الگوی ریزش، سن شروع، سابقه خانوادگی، تراکم و ضخامت تار مو در انتخاب برنامه درمانی اهمیت دارند.' },
    { title: 'ریزش منتشر مو', en: 'Diffuse Hair Loss', text: 'ریزش منتشر می‌تواند با استرس، بیماری، کمبودها، داروها یا عوامل هورمونی همراه باشد و قبل از درمان باید علت‌های قابل اصلاح بررسی شوند.' },
    { title: 'کاهش کیفیت و ضخامت مو', en: 'Hair Quality & Miniaturization', text: 'کاهش قطر تار مو و مینیاتوریزاسیون فولیکول‌ها می‌تواند پیش از کم‌پشتی واضح دیده شود و در پیگیری درمان قابل ارزیابی است.' },
    { title: 'مشکلات پوست سر', en: 'Scalp Conditions', text: 'التهاب، خارش، پوسته‌ریزی یا ریزش اسکاری نیازمند افتراق تشخیصی‌اند و در صورت لزوم ارجاع تخصصی انجام می‌شود.' }
  ];

  const hairGuides = [
    ['قطع ریزش مو؛ اول علت را پیدا کنیم', 'ریزش فعال مو چه علت‌هایی دارد و چه زمانی باید بررسی آزمایشگاهی یا پزشکی انجام شود؟', '/hair/hair-loss-control'],
    ['درمان ریزش مو بدون جراحی', 'از درمان علت تا روش‌های استاندارد و فرآورده‌های اتولوگ منتخب.', '/hair/non-surgical-hair-loss'],
    ['PL و PRGF برای مو چه تفاوتی دارند؟', 'تفاوت فرآورده‌ها، منطق زیستی و محدودیت‌های واقعی شواهد.', '/hair/pl-prgf']
  ];
  const steps = [
    { title: 'ارزیابی علت', text: 'شرح حال، الگوی ریزش، داروها، بیماری‌های زمینه‌ای و وضعیت پوست سر بررسی می‌شوند.' },
    { title: 'ثبت پایه', text: 'عکس‌های استاندارد و در صورت امکان ارزیابی تراکم و ضخامت برای مقایسه بعدی ثبت می‌شوند.' },
    { title: 'انتخاب درمان', text: 'اصلاح عوامل زمینه‌ای، درمان استاندارد و در موارد منتخب PL، PRGF یا فناوری‌های مکمل بررسی می‌شوند.' },
    { title: 'پیگیری', text: 'پاسخ درمان در بازه زمانی منطقی و با معیارهای قابل مقایسه ارزیابی می‌شود، نه صرفاً بر اساس برداشت لحظه‌ای.' }
  ];
</script>

<svelte:head>
  <title>درمان ریزش مو و تقویت مو | 4B Clinic تهران</title>
  <meta name="description" content="ارزیابی الگوی ریزش مو و انتخاب برنامه شخصی‌سازی‌شده در 4B Clinic تهران؛ از بررسی علت تا درمان‌های اتولوگ منتخب مانند PL و PRGF." />

<section class="hair-intent">
  <div class="hair-intent__head"><div><span>HAIR KNOWLEDGE HUB</span><h2>قبل از انتخاب روش، مسئله ریزش مو را درست بشناسیم</h2></div><p>سه راهنمای بیمارمحور برای سؤال‌هایی که بیشتر پیش از مراجعه مطرح می‌شوند. هر راهنما به مسیر ارزیابی مو در 4B برمی‌گردد.</p></div>
  <div class="hair-intent__grid">{#each hairGuides as guide}<a href={guide[2]}><strong>{guide[0]}</strong><p>{guide[1]}</p><b>مطالعه راهنما ←</b></a>{/each}</div>
</section>

<style>
.hair-intent{padding:clamp(62px,8vw,112px) clamp(20px,7vw,110px);background:#f4f5f1;color:#132538}.hair-intent__head{display:grid;grid-template-columns:1fr minmax(280px,.72fr);gap:60px;align-items:end;margin-bottom:34px}.hair-intent__head span{font-size:10px;letter-spacing:.16em;color:#9c7532;font-weight:900}.hair-intent__head h2{font-size:clamp(30px,4.2vw,54px);line-height:1.4;margin:10px 0 0}.hair-intent__head>p{color:#65717b;line-height:1.9}.hair-intent__grid{display:grid;grid-template-columns:repeat(3,1fr);gap:14px}.hair-intent__grid a{min-height:210px;padding:26px;border-radius:22px;background:#fff;border:1px solid #dfe4e1;text-decoration:none;color:#17313c;display:flex;flex-direction:column}.hair-intent__grid strong{font-size:20px;line-height:1.6}.hair-intent__grid p{color:#65717b;line-height:1.9;font-size:13px}.hair-intent__grid b{margin-top:auto;color:#8f6a2d;font-size:11px}@media(max-width:800px){.hair-intent__head,.hair-intent__grid{grid-template-columns:1fr}.hair-intent__head{gap:18px}}
</style>
  <link rel="canonical" href="https://4b-clinic.com/hair" />
  <meta property="og:image" content="https://4b-clinic.com/images/services/hair.webp" />
</svelte:head>

<PhotoClinicalPage
  eyebrow="HAIR • SCALP • FOLLICLE"
  title="درمان ریزش مو"
  titleAccent="از تشخیص علت شروع می‌شود"
  intro="درمان زمانی منطقی است که بدانیم فولیکول چرا ضعیف شده است. الگوی ریزش، پوست سر، سابقه خانوادگی، داروها و عوامل زمینه‌ای قبل از هر پروتکل بررسی می‌شوند."
  image="/images/services/hair.webp"
  imageAlt="نمای واقعی کم‌پشتی و ریزش مو در یک فرد بزرگسال"
  imagePosition="center 38%"
  mobileImagePosition="72% center"
  heroCopySide="left"
  {conditions}
  pathwayTitle="یک نسخه برای همه انواع ریزش مو وجود ندارد"
  pathwayIntro="هدف این مسیر مشخص کردن علت غالب ریزش و انتخاب درمانی است که با شرایط واقعی فولیکول و بیمار هم‌خوان باشد."
  {steps}
  noteTitle="انتظارات واقع‌بینانه"
  note="سن، مدت ریزش، تراکم اولیه، علت ریزش و پاسخ فولیکول‌ها روی نتیجه اثر دارند. در بعضی بیماران هدف اصلی کاهش سرعت ریزش و حفظ موهای موجود است."
  ctaTitle="برای ارزیابی مو، سابقه ریزش و درمان‌های قبلی را همراه داشته باشید."
  ctaText="اگر آزمایش، نسخه قبلی یا عکس‌های قدیمی از وضعیت مو دارید، همراه مراجعه بیاورید تا روند بهتر قابل مقایسه باشد."
  ctaLabel="درخواست ارزیابی مو"
  backHref="/"
  backLabel="بازگشت به صفحه اصلی"
  badges={['PL', 'PRGF', 'ارزیابی پوست سر', 'پروتکل شخصی']}
  scienceHref="https://zetamed.org/%D9%81%D8%A7%DA%A9%D8%AA%D9%88%D8%B1%D9%87%D8%A7%DB%8C-%D8%B1%D8%B4%D8%AF%DB%8C-%DA%A9%D9%87-%D8%A7%D8%B2-%D9%BE%D9%84%D8%A7%DA%A9%D8%AA%D9%87%D8%A7-%D8%A8%D9%87-%D8%AF%D8%B3%D8%AA-%D9%85/"
  scienceTitle="فاکتورهای رشد پلاکتی و بافت مو"
  scienceText="برای مطالعه عمیق‌تر درباره فاکتورهای رشد پلاکتی و نقش آن‌ها در پیام‌رسانی و ترمیم بافت، مطلب علمی Zetamed را ببینید."
/>
