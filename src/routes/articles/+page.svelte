<script>
  import ClinicalVisual from '$lib/components/ClinicalVisual.svelte';

  const articles = [
    {
      kind: 'knee',
      tag: 'زانو و آرتروز',
      title: 'درد زانو؛ از علت درد تا انتخاب درمان',
      text: 'درد زانو می‌تواند از آرتروز، منیسک، رباط‌ها، محور اندام یا التهاب ناشی شود. قبل از انتخاب هر درمانی باید مشخص شود مشکل اصلی کجاست و شدت آن چقدر است.',
      href: 'https://zetamed.org/knee-pain/',
      label: 'مطالعه کامل درباره درد زانو در Zetamed'
    },
    {
      kind: 'biology',
      tag: 'ارتوبیولوژیک',
      title: 'ارتوبیولوژیک دقیقاً چیست؟',
      text: 'ارتوبیولوژیک از دانش سلولی و مولکولی برای مدیریت برخی آسیب‌های سیستم اسکلتی‌عضلانی استفاده می‌کند. روش مناسب به بافت درگیر، شدت بیماری و هدف درمان بستگی دارد.',
      href: 'https://zetamed.org/services/orthobiological/',
      label: 'مطالعه علمی ارتوبیولوژیک در Zetamed'
    },
    {
      kind: 'hair',
      tag: 'PL • PRGF',
      title: 'فاکتورهای رشد پلاکتی چه نقشی در ترمیم دارند؟',
      text: 'پلاکت‌ها فقط در انعقاد خون نقش ندارند و مجموعه‌ای از پیام‌رسان‌های زیستی و فاکتورهای رشد را آزاد می‌کنند. فرآوری این منابع، پایه برخی روش‌های اتولوگ مانند PRGF و PL است.',
      href: 'https://zetamed.org/%D9%81%D8%A7%DA%A9%D8%AA%D9%88%D8%B1%D9%87%D8%A7%DB%8C-%D8%B1%D8%B4%D8%AF%DB%8C-%DA%A9%D9%87-%D8%A7%D8%B2-%D9%BE%D9%84%D8%A7%DA%A9%D8%AA%D9%87%D8%A7-%D8%A8%D9%87-%D8%AF%D8%B3%D8%AA-%D9%85/',
      label: 'اطلاعات علمی فاکتورهای رشد در Zetamed'
    },
    {
      kind: 'wound',
      tag: 'زخم مزمن',
      title: 'چرا بعضی زخم‌ها دیر خوب می‌شوند؟',
      text: 'در زخم مزمن فقط سطح زخم مهم نیست. خون‌رسانی، فشار، عفونت، کنترل دیابت، تغذیه و کیفیت بستر زخم همزمان روی روند ترمیم اثر می‌گذارند.',
      href: 'https://zetamed.org/services/wound-clinic/',
      label: 'مطالعه بیشتر درباره زخم در Zetamed'
    },
    {
      kind: 'skin',
      tag: 'پزشکی بازساختی',
      title: 'پزشکی بازساختی؛ از وعده‌های بزرگ تا کاربرد واقعی',
      text: 'پزشکی بازساختی به معنی رشد دوباره همه بافت‌ها نیست. این حوزه مجموعه‌ای از روش‌های سلولی، مولکولی و مهندسی بافت است که باید بر اساس شواهد و محدودیت‌های هر کاربرد بررسی شود.',
      href: 'https://zetamed.org/%D9%BE%D8%B2%D8%B4%DA%A9%DB%8C-%D8%A8%D8%A7%D8%B2%D8%B3%D8%A7%D8%AE%D8%AA%DB%8C-%D9%85%D9%82%D8%AF%D9%85%D9%87/',
      label: 'مقدمه علمی پزشکی بازساختی در Zetamed'
    },
    {
      kind: 'biology',
      tag: 'کتابخانه علمی',
      title: 'برای مطالعه عمیق‌تر کجا برویم؟',
      text: 'مقالات 4B برای تصمیم‌گیری بیمار نوشته می‌شوند. برای جزئیات مکانیزم‌ها، فاکتورهای رشد، سلول‌ها و محتوای علمی گسترده‌تر، کتابخانه Zetamed مرجع مکمل ماست.',
      href: 'https://zetamed.org/blog/',
      label: 'ورود به کتابخانه Zetamed'
    }
  ];
</script>

<svelte:head>
  <title>مقالات و راهنمای بیماران | 4B Clinic</title>
  <meta name="description" content="راهنمای بیمارمحور 4B Clinic درباره درد زانو، ارتوبیولوژیک، درمان‌های اتولوگ، فاکتورهای رشد و زخم مزمن؛ همراه با لینک مطالعه علمی بیشتر در Zetamed." />
  <link rel="canonical" href="https://4b-clinic.com/articles" />
</svelte:head>

<section class="articles-hero section">
  <div class="eyebrow">4B KNOWLEDGE</div>
  <h1>مقاله برای تصمیم بهتر،<br/><span>نه برای پیچیده‌تر کردن درمان.</span></h1>
  <p>اینجا مطالب را کوتاه، قابل‌فهم و بیمارمحور نگه می‌داریم. اگر بخواهید عمیق‌تر وارد مبانی علمی و سلولی شوید، در هر موضوع لینک مستقیم به محتوای مرتبط Zetamed قرار داده‌ایم.</p>
</section>

<section class="section article-intro">
  <div>
    <div class="eyebrow">PATIENT FIRST</div>
    <h2>دو لایه محتوا، برای دو نیاز متفاوت</h2>
  </div>
  <p><strong>4B Clinic</strong> پاسخ می‌دهد «این موضوع برای بیمار چه معنایی دارد؟» و <strong>Zetamed</strong> وارد جزئیات علمی، مکانیزم‌ها و مبانی پزشکی سلولی مولکولی می‌شود. این تفکیک باعث می‌شود سایت کلینیک روشن و کاربردی بماند، بدون اینکه عمق علمی قربانی شود.</p>
</section>

<section class="section article-grid">
  {#each articles as article}
    <article class="article-card">
      <ClinicalVisual kind={article.kind} label={article.tag} />
      <div class="article-copy">
        <span class="article-tag">{article.tag}</span>
        <h2>{article.title}</h2>
        <p>{article.text}</p>
        <a href={article.href} target="_blank" rel="noopener noreferrer">{article.label} ↗</a>
      </div>
    </article>
  {/each}
</section>

<section class="section editorial-note">
  <div>
    <div class="eyebrow">EDITORIAL PRINCIPLE</div>
    <h2>محتوای سایت جایگزین ویزیت پزشکی نیست.</h2>
    <p>مطالب این بخش برای آشنایی و تصمیم‌گیری بهتر طراحی شده‌اند. تشخیص و انتخاب درمان به شرح حال، معاینه، تصویربرداری و شرایط هر بیمار وابسته است.</p>
  </div>
  <a class="button" href="/contact">درخواست ارزیابی</a>
</section>

<style>
  .articles-hero{min-height:58vh;display:flex;flex-direction:column;justify-content:center;background:radial-gradient(circle at 14% 26%,#1b3b61 0,#0a2039 42%,#061426 72%,#030a12 100%);color:#fff}.articles-hero h1{font-size:clamp(42px,6vw,80px);line-height:1.2;margin:14px 0}.articles-hero h1 span{color:#d0b374}.articles-hero p{max-width:880px;color:#d1dae3;font-size:clamp(16px,2vw,20px)}.article-intro{display:grid;grid-template-columns:.8fr 1.2fr;gap:70px;align-items:start}.article-intro h2,.editorial-note h2{font-size:clamp(30px,4vw,50px);line-height:1.45;margin:10px 0}.article-intro p{margin:0;color:#586571;font-size:17px}.article-grid{display:grid;grid-template-columns:repeat(2,1fr);gap:20px;padding-top:10px}.article-card{overflow:hidden;background:#fff;border:1px solid #e1e5e5;border-radius:26px;box-shadow:0 18px 55px rgba(7,23,43,.06);transition:.22s}.article-card:hover{transform:translateY(-5px);box-shadow:0 26px 75px rgba(7,23,43,.12)}.article-card :global(.visual){border-radius:0;box-shadow:none}.article-copy{padding:26px 28px 30px}.article-tag{display:inline-flex;padding:4px 10px;border-radius:999px;background:#f2eee5;color:#8f6c2f;font-size:10px;font-weight:900}.article-copy h2{font-size:clamp(22px,2.6vw,31px);line-height:1.5;margin:13px 0 8px}.article-copy p{color:#5d6976;font-size:14px;margin:0}.article-copy a{display:inline-block;margin-top:22px;color:#80602a;font-size:12px;font-weight:900}.editorial-note{display:flex;justify-content:space-between;align-items:end;gap:40px;background:#e9eeed}.editorial-note p{max-width:820px;color:#596671}.editorial-note .button{flex:none}@media(max-width:900px){.article-intro,.article-grid{grid-template-columns:1fr}.article-intro{gap:20px}.editorial-note{align-items:flex-start;flex-direction:column}}@media(max-width:620px){.articles-hero{min-height:auto;padding-top:70px;padding-bottom:70px}.article-grid{gap:14px}.article-copy{padding:22px}.editorial-note .button{width:100%}}
</style>
