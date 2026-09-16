<script>
  const groups = [
    {
      title: 'فرآورده‌های اتولوگ',
      subtitle: 'از خون یا بافت خود بیمار',
      items: [
        { code: 'ACS', name: 'Autologous Conditioned Serum', text: 'سرم اتولوگ شرطی‌شده؛ در کاربردهای منتخب ارتوپدی پس از ارزیابی پزشکی.' },
        { code: 'PL', name: 'Platelet Lysate', text: 'پلاکت لیزیت؛ فرآورده‌ای از پلاکت‌های خود بیمار که در برنامه‌های منتخب ارتوپدی، پوست، مو و زخم استفاده می‌شود.' },
        { code: 'PRGF', name: 'Plasma Rich in Growth Factors', text: 'فرآورده مشتق از خون خود بیمار با تمرکز بر اجزای پلاکتی و فاکتورهای رشد.' },
        { code: 'SVF', name: 'Stromal Vascular Fraction', text: 'فراکسیون سلولی حاصل از فرآوری بافت چربی خود بیمار؛ شامل جمعیتی از سلول‌های استرومال/بنیادی مشتق از چربی در کنار سلول‌های عروقی، ایمنی و سایر سلول‌ها. SVF معادل «سلول بنیادی خالص» نیست و استفاده از آن باید در چارچوب قانونی و اندیکاسیون مناسب انجام شود.' }
      ]
    },
    {
      title: 'فناوری‌های مکمل',
      subtitle: 'الزاماً اتولوگ نیستند',
      items: [
        { code: 'EXO', name: 'Exosome-based Technologies', text: 'فناوری‌های مبتنی بر اگزوزوم که منبع، کیفیت و مجوز آنها باید مشخص باشد؛ استفاده فقط در موارد منتخب.' },
        { code: 'MSC', name: 'Mesenchymal Stromal/Stem Cells', text: 'محصولات سلولی می‌توانند از منابع مجاز و کنترل‌شده تأمین شوند و بسته به منبع، الزاماً اتولوگ نیستند.' },
        { code: 'HA', name: 'Hyaluronic Acid', text: 'هیالورونیک اسید یک درمان اتولوگ نیست و در برخی برنامه‌های مفصلی می‌تواند به‌عنوان گزینه تکمیلی بررسی شود.' }
      ]
    }
  ];
</script>

<svelte:head>
  <title>فناوری‌ها و درمان‌های 4B Clinic | ACS، PL، PRGF، EXO، SVF و MSC</title>
  <meta name="description" content="آشنایی بیمارپسند با فناوری‌ها و درمان‌های مورد استفاده در 4B Clinic؛ تفکیک فرآورده‌های اتولوگ از فناوری‌های مکمل و توضیح کاربرد، منبع و محدودیت‌ها." />
  <link rel="canonical" href="https://4b-clinic.com/technologies" />
</svelte:head>

<section class="tech-hero section">
  <div class="eyebrow">TECHNOLOGIES • SOURCES • LIMITATIONS</div>
  <h1>فناوری‌ها و درمان‌ها</h1>
  <p>نام یک فناوری به‌تنهایی نشان نمی‌دهد برای چه کسی مناسب است. منبع فرآورده، روش آماده‌سازی، اندیکاسیون، شواهد و الزامات قانونی همگی بخشی از تصمیم درمانی‌اند.</p>
</section>

<section class="section tech-intro">
  <div><div class="eyebrow">IMPORTANT DISTINCTION</div><h2>«بازساختی» لزوماً به معنی «اتولوگ» نیست.</h2></div>
  <p>ACS، PL و PRGF از خون خود بیمار تهیه می‌شوند. SVF از فرآوری بافت چربی خود بیمار به‌دست می‌آید و یک فراکسیون سلولی ناهمگون است که در میان سلول‌های مختلف آن، سلول‌های استرومال/بنیادی مشتق از چربی نیز وجود دارند. در مقابل، EXO و برخی محصولات MSC ممکن است از منبع دیگری تأمین شوند و HA نیز اصولاً اتولوگ نیست. این تفاوت باید برای بیمار روشن باشد.</p>
</section>

{#each groups as group}
  <section class="section tech-group">
    <div class="group-heading"><div><div class="eyebrow">{group.subtitle}</div><h2>{group.title}</h2></div></div>
    <div class="tech-grid">
      {#each group.items as item}
        <article>
          <div class="tech-code">{item.code}</div>
          <h3>{item.name}</h3>
          <p>{item.text}</p>
        </article>
      {/each}
    </div>
  </section>
{/each}

<section class="section tech-rules">
  <div><div class="eyebrow">4B RULES</div><h2>چهار سؤال قبل از هر فناوری</h2></div>
  <div class="rule-grid">
    <span><b>1</b> منبع فرآورده چیست؟</span>
    <span><b>2</b> برای این تشخیص چه شواهدی دارد؟</span>
    <span><b>3</b> چه محدودیت یا عارضه‌ای باید بدانیم؟</span>
    <span><b>4</b> آیا از نظر پزشکی و قانونی برای این بیمار قابل استفاده است؟</span>
  </div>
</section>

<section class="section tech-cta">
  <div><div class="eyebrow">CLINICAL DECISION</div><h2>فناوری مناسب بعد از تشخیص انتخاب می‌شود، نه قبل از آن.</h2><p>اگر برای یک مشکل مشخص مراجعه می‌کنید، از مسیر بیماری شروع کنید و سپس درباره گزینه‌های درمانی صحبت کنیم.</p></div>
  <a class="button" href="/contact">درخواست ارزیابی</a>
</section>

<style>
  .tech-hero{min-height:55vh;display:flex;flex-direction:column;justify-content:center;background:#07172b;color:#fff}.tech-hero h1{font-size:clamp(44px,7vw,88px);line-height:1.15;margin:12px 0}.tech-hero p{max-width:880px;color:#c9d2dc;font-size:18px}.tech-intro{display:grid;grid-template-columns:.9fr 1.1fr;gap:70px}.tech-intro h2,.group-heading h2,.tech-rules h2,.tech-cta h2{font-size:clamp(28px,4vw,48px);line-height:1.45;margin:10px 0}.tech-intro p{color:#5d6976;font-size:17px}.tech-group:nth-of-type(even){background:#eef2f1}.group-heading{margin-bottom:28px}.tech-grid{display:grid;grid-template-columns:repeat(4,1fr);gap:12px}.tech-group:nth-of-type(4) .tech-grid{grid-template-columns:repeat(3,1fr)}.tech-grid article{background:#fff;border:1px solid #e1e5e5;border-radius:20px;padding:26px}.tech-code{font-size:30px;font-weight:900;color:#9a7637}.tech-grid h3{font-size:17px;line-height:1.4;margin:20px 0 8px}.tech-grid p{color:#5d6976;font-size:13px}.tech-rules{background:#eef2f1}.rule-grid{display:grid;grid-template-columns:1fr 1fr;gap:10px;margin-top:28px}.rule-grid span{padding:16px;background:#fff;border:1px solid #e1e5e5;border-radius:14px}.rule-grid b{display:inline-grid;place-items:center;width:25px;height:25px;border-radius:50%;background:#b99651;color:#fff;margin-left:8px}.tech-cta{display:flex;justify-content:space-between;align-items:end;gap:40px;background:#07172b;color:#fff}.tech-cta p{max-width:800px;color:#c6d0da}@media(max-width:980px){.tech-intro{grid-template-columns:1fr}.tech-grid,.tech-group:nth-of-type(4) .tech-grid{grid-template-columns:1fr 1fr}.tech-cta{align-items:flex-start;flex-direction:column}}@media(max-width:620px){.tech-grid,.tech-group:nth-of-type(4) .tech-grid,.rule-grid{grid-template-columns:1fr}}
</style>
