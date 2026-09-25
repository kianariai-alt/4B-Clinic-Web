<script>
  const groups = [
    {
      title: 'فرآورده‌های اتولوگ',
      subtitle: 'از خون یا بافت خود بیمار',
      items: [
        { code: 'ACS', name: 'Autologous Conditioned Serum', text: 'سرم اتولوگ شرطی‌شده؛ در کاربردهای منتخب ارتوپدی پس از ارزیابی پزشکی.' },
        { code: 'PL', name: 'Platelet Lysate', text: 'پلاکت لیزیت؛ فرآورده‌ای از پلاکت‌های خود بیمار که در برنامه‌های منتخب ارتوپدی، پوست، مو و زخم استفاده می‌شود.' },
        { code: 'PRGF', name: 'Plasma Rich in Growth Factors', text: 'فرآورده مشتق از خون خود بیمار با تمرکز بر اجزای پلاکتی و فاکتورهای رشد.' },
        { code: 'SVF', name: 'Stromal Vascular Fraction', text: 'فراکسیون سلولی حاصل از فرآوری بافت چربی خود بیمار؛ یک جمعیت سلولی ناهمگون شامل سلول‌های استرومال/بنیادی، عروقی، ایمنی و سایر سلول‌ها. SVF معادل سلول بنیادی خالص نیست.' }
      ]
    },
    {
      title: 'فناوری‌های مکمل',
      subtitle: 'الزاماً اتولوگ نیستند',
      items: [
        { code: 'EXO', name: 'Exosome-based Technologies', text: 'فناوری‌های مبتنی بر اگزوزوم که منبع، کیفیت و مجوز آنها باید مشخص باشد؛ استفاده فقط در موارد منتخب.', href: '/articles/exosomes-regenerative-medicine' },
        { code: 'MSC', name: 'Mesenchymal Stromal/Stem Cells', text: 'محصولات سلولی می‌توانند از منابع مجاز و کنترل‌شده تأمین شوند و بسته به منبع، الزاماً اتولوگ نیستند.' },
        { code: 'HA', name: 'Hyaluronic Acid', text: 'هیالورونیک اسید یک درمان اتولوگ نیست و در برخی برنامه‌های مفصلی می‌تواند به‌عنوان گزینه تکمیلی بررسی شود.' }
      ]
    }
  ];

  const rules = ['منبع فرآورده چیست؟','برای این تشخیص چه شواهدی دارد؟','چه محدودیت یا عارضه‌ای باید بدانیم؟','آیا از نظر پزشکی و قانونی برای این بیمار قابل استفاده است؟'];
</script>

<svelte:head>
  <title>فناوری‌ها و درمان‌های 4B Clinic | ACS، PL، PRGF، EXO، SVF و MSC</title>
  <meta name="description" content="آشنایی بیمارپسند با فناوری‌ها و درمان‌های مورد استفاده در 4B Clinic؛ تفکیک فرآورده‌های اتولوگ از فناوری‌های مکمل و توضیح کاربرد، منبع و محدودیت‌ها." />
  <link rel="canonical" href="https://4b-clinic.com/technologies" />
</svelte:head>

<section class="tech-v2-hero">
  <div class="tech-orbit" aria-hidden="true"><span></span><span></span><span></span><b>4B</b></div>
  <div class="tech-copy"><div class="eyebrow light">TECHNOLOGIES • SOURCES • LIMITATIONS</div><h1>فناوری‌ها<br/><span>ابزار درمان‌اند</span></h1><p>نام یک فناوری به‌تنهایی نشان نمی‌دهد برای چه کسی مناسب است. منبع فرآورده، روش آماده‌سازی، اندیکاسیون، شواهد و الزامات قانونی همگی بخشی از تصمیم درمانی‌اند.</p></div>
</section>

<section class="distinction-v2"><div><div class="eyebrow">IMPORTANT DISTINCTION</div><h2>«بازساختی» لزوماً به معنی «اتولوگ» نیست.</h2></div><p>ACS، PL و PRGF از خون خود بیمار تهیه می‌شوند. SVF از فرآوری بافت چربی خود بیمار به‌دست می‌آید و یک فراکسیون سلولی ناهمگون است. در مقابل، EXO و برخی محصولات MSC ممکن است از منبع دیگری تأمین شوند و HA نیز اصولاً اتولوگ نیست. این تفاوت باید برای بیمار روشن باشد.</p></section>

{#each groups as group, gi}
  <section class:alternate={gi % 2 === 1} class="tech-group-v2">
    <div class="group-title"><div class="eyebrow">{group.subtitle}</div><h2>{group.title}</h2></div>
    <div class:three={group.items.length === 3} class="tech-grid-v2">
      {#each group.items as item}
        <article><div class="tech-code">{item.code}</div><small>{item.name}</small><p>{item.text}</p>{#if item.href}<a class="tech-read" href={item.href}>مطالعه راهنمای علمی اگزوزوم ←</a>{/if}</article>
      {/each}
    </div>
  </section>
{/each}

<section class="rules-v2"><div><div class="eyebrow light">4B RULES</div><h2>چهار سؤال قبل از هر فناوری</h2><p>روش درمان باید جواب این چهار سؤال را داشته باشد، نه فقط یک اسم علمی خوش‌آهنگ.</p></div><div class="rule-grid-v2">{#each rules as rule, i}<span><b>{i + 1}</b>{rule}</span>{/each}</div></section>

<section class="tech-final"><div><div class="eyebrow light">CLINICAL DECISION</div><h2>فناوری مناسب بعد از تشخیص انتخاب می‌شود، نه قبل از آن.</h2><p>اگر برای یک مشکل مشخص مراجعه می‌کنید، از مسیر بیماری شروع کنید و سپس درباره گزینه‌های درمانی تصمیم بگیریم.</p></div><a href="/contact">درخواست ارزیابی</a></section>

<style>
  .eyebrow{font-size:10px;letter-spacing:.16em;color:#997231;font-weight:900}.eyebrow.light{color:#ddc287}.tech-v2-hero{position:relative;min-height:680px;padding:clamp(90px,11vw,150px) clamp(20px,7vw,110px);display:grid;grid-template-columns:.85fr 1.15fr;gap:70px;align-items:center;background:linear-gradient(135deg,#07172b,#12385f);color:#fff;overflow:hidden}.tech-copy{order:2}.tech-copy h1{font-size:clamp(50px,7.2vw,100px);line-height:1.04;margin:12px 0 22px}.tech-copy h1 span{color:#ddc287}.tech-copy p{max-width:760px;font-size:18px;color:#d0d9e1}.tech-orbit{position:relative;width:min(38vw,450px);aspect-ratio:1;display:grid;place-items:center;justify-self:center}.tech-orbit span{position:absolute;border-radius:50%;border:1px solid rgba(221,194,135,.25)}.tech-orbit span:nth-child(1){inset:0}.tech-orbit span:nth-child(2){inset:50px;border-style:dashed}.tech-orbit span:nth-child(3){inset:100px;border-color:rgba(255,255,255,.17)}.tech-orbit b{position:relative;width:132px;height:132px;border-radius:50%;display:grid;place-items:center;border:1px solid rgba(221,194,135,.55);background:rgba(255,255,255,.06);color:#ddc287;font-size:35px;backdrop-filter:blur(8px)}
  .distinction-v2,.tech-group-v2{padding:clamp(66px,8vw,112px) clamp(20px,7vw,110px)}.distinction-v2{display:grid;grid-template-columns:.85fr 1.15fr;gap:70px;background:#f7f7f4}.distinction-v2 h2,.group-title h2,.rules-v2 h2,.tech-final h2{font-size:clamp(30px,4.4vw,58px);line-height:1.42;margin:10px 0}.distinction-v2>p{color:#56616b;font-size:17px}.tech-group-v2{background:#fff}.tech-group-v2.alternate{background:#eef0ec}.group-title{margin-bottom:30px}.tech-grid-v2{display:grid;grid-template-columns:repeat(4,1fr);gap:12px}.tech-grid-v2.three{grid-template-columns:repeat(3,1fr)}.tech-grid-v2 article{padding:28px;border:1px solid #e0e4e1;border-radius:20px;background:#fafaf8}.alternate .tech-grid-v2 article{background:#fff}.tech-code{font-size:32px;font-weight:900;color:#9a7331}.tech-grid-v2 small{display:block;margin-top:18px;color:#36434e;font-weight:800;line-height:1.5}.tech-grid-v2 p{color:#5f6a74;font-size:13px}.tech-read{display:inline-flex;margin-top:10px;color:#8b672d;font-size:13px;font-weight:900;text-decoration:none}.tech-read:hover{text-decoration:underline}.rules-v2{padding:clamp(68px,9vw,122px) clamp(20px,7vw,110px);display:grid;grid-template-columns:.78fr 1.22fr;gap:70px;background:#07172b;color:#fff}.rules-v2>div:first-child>p{color:#bbc6cf}.rule-grid-v2{display:grid;grid-template-columns:1fr 1fr;gap:10px}.rule-grid-v2 span{padding:18px;border:1px solid rgba(255,255,255,.12);background:rgba(255,255,255,.045);border-radius:16px;color:#d7dee5}.rule-grid-v2 b{display:inline-grid;place-items:center;width:28px;height:28px;border-radius:50%;background:#b58d48;color:#fff;margin-left:9px}.tech-final{padding:clamp(62px,8vw,112px) clamp(20px,7vw,110px);background:#0a1d32;color:#fff;display:flex;justify-content:space-between;align-items:end;gap:40px}.tech-final p{max-width:820px;color:#c5ced7}.tech-final>a{display:inline-flex;align-items:center;justify-content:center;min-height:48px;padding:10px 20px;border-radius:999px;background:#b58d48;color:#fff;text-decoration:none;font-weight:900;flex:none}
  @media(max-width:980px){.tech-v2-hero,.distinction-v2,.rules-v2{grid-template-columns:1fr;gap:30px}.tech-copy{order:1}.tech-orbit{order:2;width:min(70vw,420px)}.tech-grid-v2,.tech-grid-v2.three{grid-template-columns:1fr 1fr}.tech-final{align-items:flex-start;flex-direction:column}}
  @media(max-width:620px){.tech-copy h1{font-size:48px}.tech-orbit{width:78vw}.tech-grid-v2,.tech-grid-v2.three,.rule-grid-v2{grid-template-columns:1fr}.tech-final>a{width:100%}}
</style>
