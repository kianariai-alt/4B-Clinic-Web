<script>
  import { site } from '$lib/data/site.js';

  const services = [
    { title:'زانو و آرتروز', text:'درد زانو، آرتروز و آسیب‌های منتخب مینیسک با تمرکز بر تشخیص و درمان غیرجراحی در بیمار مناسب.', href:'/orthopedics/knee', image:'/images/services/knee.webp', alt:'فرد مسن با درد زانو' },
    { title:'شانه و روتاتورکاف', text:'شانه یخ‌زده، تاندینوپاتی و پارگی‌های ناکامل با ارزیابی معاینه و تصویربرداری.', href:'/orthopedics/shoulder', image:'/images/services/shoulder.webp', alt:'ورزشکار با درد شانه' },
    { title:'ریزش مو', text:'از پیدا کردن علت ریزش تا انتخاب درمان و پیگیری تراکم و کیفیت مو.', href:'/hair', image:'/images/services/hair.webp', alt:'کم‌پشتی و ریزش مو' },
    { title:'پوست و جوانسازی', text:'روش‌های تزریقی و غیرتهاجمی از جمله سونوفورزیس بر اساس کیفیت پوست و هدف درمان.', href:'/skin', image:'/images/services/skin.webp', alt:'جوانسازی پوست با تزریق و سونوفورزیس' },
    { title:'سلامت جنسی', text:'ارزیابی محرمانه بانوان و آقایان و انتخاب درمان بر اساس علت پزشکی و اندیکاسیون واقعی.', href:'/sexual-health', image:'/images/services/sexual-health.webp', alt:'زوج میانسال با فاصله عاطفی' }
  ];

  const technologies = [
    ['ACS','سرم اتولوگ شرطی‌شده'],
    ['PL','پلاکت لیزیت'],
    ['PRGF','فاکتورهای رشد مشتق از پلاکت'],
    ['EXO','اگزوزوم در موارد منتخب'],
    ['SVF','فراکسیون سلولی مشتق از بافت چربی'],
    ['MSC','سلول‌های مزانشیمی از منابع مجاز']
  ];

  const steps = [
    ['ارزیابی','شرح حال، معاینه و مرور تصویربرداری یا آزمایش‌های موجود.'],
    ['تشخیص','مشخص کردن علت اصلی علائم و اینکه چه چیزهایی قابل اصلاح‌اند.'],
    ['انتخاب درمان','تصمیم بین بازتوانی، درمان استاندارد، روش اتولوگ یا ارجاع تخصصی.'],
    ['پیگیری','ثبت پاسخ و تصمیم درباره ادامه، تغییر یا توقف مسیر درمان.']
  ];
</script>

<svelte:head>
  <title>4B Clinic | درمان‌های اتولوگ و ارتوبیولوژیک در تهران</title>
  <meta name="description" content="کلینیک 4B؛ ارزیابی و درمان‌های اتولوگ و ارتوبیولوژیک برای مشکلات منتخب زانو و شانه، پوست و مو، زخم‌های مزمن و سلامت جنسی در تهران." />
  <link rel="canonical" href={site.domain} />
  <meta property="og:title" content="4B Clinic | بدن خودت را با بدن خودت بساز" />
  <meta property="og:description" content={site.description} />
  <meta property="og:image" content="https://4b-clinic.com/images/services/knee.webp" />
</svelte:head>

<section class="home-v2-hero">
  <img src="/images/services/knee.webp" alt="درد و التهاب زانو در فرد سالمند" loading="eager" fetchpriority="high" />
  <div class="home-v2-shade"></div>
  <div class="home-v2-content">
    <div class="home-kicker">4B CLINIC • AUTOLOGOUS ORTHOBIOLOGICS</div>
    <h1>بدن خودت را<br/><span>با بدن خودت بساز</span></h1>
    <p>از روش درمان شروع نمی‌کنیم؛ از مشکل شما شروع می‌کنیم. در 4B Clinic تشخیص، شرایط بافت و هدف درمانی بیمار تعیین می‌کند که کدام مسیر منطقی است.</p>
    <div class="home-actions"><a href="/contact">درخواست ارزیابی اولیه</a><a class="outline" href="#services">مشکل من کجاست؟</a></div>
    <div class="home-trust"><span>اول تشخیص</span><span>درمان شخصی‌سازی‌شده</span><span>پیگیری‌پذیر</span></div>
  </div>
</section>

<section class="home-intro-v2">
  <div><div class="eyebrow">WHY 4B</div><h2>درمان جدید، فقط وقتی ارزش دارد که برای بیمار درست انتخاب شود.</h2></div>
  <div><p>نام‌های جذاب درمانی به‌تنهایی تصمیم پزشکی نمی‌سازند. آرتروز، پارگی تاندون، ریزش مو، کیفیت پوست یا زخم مزمن هرکدام مسیر ارزیابی متفاوتی دارند.</p><a href="/about">رویکرد درمانی 4B را ببینید ←</a></div>
</section>

<section class="services-v2" id="services">
  <div class="section-heading-v2"><div><div class="eyebrow">CLINICAL PATHWAYS</div><h2>برای چه مشکلی مراجعه می‌کنید؟</h2></div><p>هر صفحه به زبان بیمار توضیح می‌دهد چه چیزی بررسی می‌شود، چه گزینه‌هایی وجود دارد و چه انتظاری منطقی است.</p></div>
  <div class="service-photo-grid">
    {#each services as service, i}
      <a class:large={i === 0 || i === 3} class="photo-service-card" href={service.href}>
        <img src={service.image} alt={service.alt} loading="lazy" />
        <span class="photo-service-shade"></span>
        <div><small>0{i + 1}</small><h3>{service.title}</h3><p>{service.text}</p><b>مشاهده مسیر درمان ←</b></div>
      </a>
    {/each}
    <a class="photo-service-card wound-photo-card" href="/wounds">
      <img src="/images/services/wounds.webp" alt="مراقبت زخم مزمن پاشنه پا" loading="lazy" />
      <span class="photo-service-shade"></span>
      <div><small>06</small><h3>زخم‌های مزمن</h3><p>زخم دیابتی، فشاری، عروقی و دیرترمیم نیازمند درمان علت و خود زخم به‌صورت همزمان هستند.</p><b>صفحه زخم‌های مزمن ←</b></div>
    </a>
  </div>
</section>

<section class="approach-v2">
  <div class="approach-copy"><div class="eyebrow light">4B APPROACH</div><h2>چهار مرحله تا یک تصمیم درمانی روشن</h2><p>حتی اگر در نهایت درمان اتولوگ انتخاب نشود، ارزیابی باید به یک تصمیم قابل دفاع برسد.</p></div>
  <div class="approach-steps">{#each steps as step, i}<article><span>0{i+1}</span><h3>{step[0]}</h3><p>{step[1]}</p></article>{/each}</div>
</section>

<section class="tech-v2">
  <div class="section-heading-v2"><div><div class="eyebrow">TECHNOLOGIES</div><h2>ابزار درمانی، نه جایگزین تشخیص</h2></div><p>فناوری بر اساس اندیکاسیون، شواهد، شرایط بیمار و الزامات قانونی انتخاب می‌شود. داشتن یک روش در کلینیک به معنی مناسب بودن آن برای همه نیست.</p></div>
  <div class="tech-list-v2">{#each technologies as tech}<div><strong>{tech[0]}</strong><span>{tech[1]}</span></div>{/each}</div>
  <a class="inline-link" href="/technologies">آشنایی با فناوری‌های 4B ←</a>
</section>

<section class="bio-v2">
  <div><div class="eyebrow light">BIO HARMONY</div><h2>مسیر چندسطحی 4B برای آرتروز زانو</h2><p>Bio Harmony یک آمپول واحد نیست. ساختاری است برای انتخاب مرحله‌ای روش درمان بر اساس شدت علائم، شرایط مفصل و ارزیابی پزشک.</p></div>
  <a href="/bio-harmony">آشنایی با Bio Harmony</a>
</section>

<section class="clinic-v2">
  <div class="clinic-card"><div class="eyebrow">CLINIC DIRECTOR</div><h2>{site.manager.name}</h2><strong>{site.manager.title}</strong><p>{site.manager.role} 4B Clinic</p><a href="/doctors">پزشکان همکار و تیم درمان ←</a></div>
  <div class="clinic-contact"><div class="eyebrow light">TEHRAN • QEYTARIEH</div><h2>ارزیابی حضوری در تهران</h2><p>{site.contact.address}</p><div class="phone-row">{#each site.contact.phones as phone}<a href={phone.href} dir="ltr">{phone.display}</a>{/each}</div><a class="contact-button" href="/contact">راه‌های تماس و نوبت</a></div>
</section>

<section class="articles-v2"><div><div class="eyebrow">PATIENT GUIDES</div><h2>قبل از مراجعه، بهتر بدانید با چه مسئله‌ای روبه‌رو هستید.</h2><p>مقالات 4B برای تصمیم‌گیری بیمار نوشته می‌شوند. جزئیات علمی‌تر و مباحث سلولی مولکولی به Zetamed ارجاع داده می‌شوند.</p></div><div class="article-actions"><a href="/articles">مقالات و راهنمای بیماران</a><a class="outline-dark" href="https://zetamed.org" target="_blank" rel="noreferrer">مطالعه علمی در Zetamed</a></div></section>

<style>
  .home-v2-hero{position:relative;min-height:calc(100vh - 76px);min-height:clamp(650px,88vh,920px);overflow:hidden;background:#07172b;color:#fff;display:flex;align-items:flex-end}.home-v2-hero>img{position:absolute;inset:0;width:100%;height:100%;object-fit:cover;object-position:center center}.home-v2-shade{position:absolute;inset:0;background:linear-gradient(90deg,rgba(3,10,18,.99) 0%,rgba(3,10,18,.92) 30%,rgba(3,10,18,.42) 62%,rgba(3,10,18,.08) 100%),linear-gradient(0deg,rgba(3,10,18,.58),transparent 48%)}.home-v2-content{position:relative;z-index:2;width:min(780px,52vw);margin-left:clamp(22px,7vw,110px);margin-right:auto;padding:clamp(110px,14vw,170px) 0 clamp(62px,8vw,100px);text-align:right}.home-kicker,.eyebrow{font-size:10px;letter-spacing:.16em;font-weight:900;color:#a87f38}.eyebrow.light,.home-kicker{color:#ddc287}.home-v2-content h1{font-size:clamp(48px,6.2vw,90px);line-height:1.08;margin:12px 0 22px;letter-spacing:-.03em}.home-v2-content h1 span{color:#dcc184}.home-v2-content>p{max-width:720px;font-size:clamp(16px,1.55vw,20px);line-height:2.05;color:#edf1f4}.home-actions{display:flex;gap:10px;flex-wrap:wrap;margin-top:28px}.home-actions a,.bio-v2>a,.contact-button,.article-actions>a{display:inline-flex;align-items:center;justify-content:center;min-height:48px;padding:10px 20px;border-radius:999px;background:#b58d48;color:#fff;text-decoration:none;font-weight:900;font-size:13px}.home-actions .outline{background:rgba(255,255,255,.06);border:1px solid rgba(255,255,255,.4)}.home-trust{display:flex;gap:7px;flex-wrap:wrap;margin-top:32px}.home-trust span{font-size:10px;padding:5px 10px;border:1px solid rgba(255,255,255,.21);border-radius:999px;background:rgba(7,23,43,.32)}
  .home-intro-v2{padding:clamp(70px,9vw,124px) clamp(20px,7vw,110px);display:grid;grid-template-columns:1fr 1fr;gap:70px;background:#f7f7f4}.home-intro-v2 h2,.section-heading-v2 h2,.approach-v2 h2,.tech-v2 h2,.bio-v2 h2,.clinic-v2 h2,.articles-v2 h2{font-size:clamp(30px,4.4vw,58px);line-height:1.42;margin:10px 0}.home-intro-v2 p{font-size:18px;color:#56616b;margin-top:0}.home-intro-v2 a,.inline-link,.clinic-card a{color:#8b672c;font-weight:900;text-decoration:none}
  .services-v2,.tech-v2,.articles-v2{padding:clamp(66px,8vw,112px) clamp(20px,7vw,110px);background:#fff}.section-heading-v2{display:grid;grid-template-columns:1fr minmax(280px,.72fr);gap:64px;align-items:end;margin-bottom:36px}.section-heading-v2 p{margin:0;color:#65717b}.service-photo-grid{display:grid;grid-template-columns:repeat(3,1fr);grid-auto-rows:360px;gap:12px}.photo-service-card{position:relative;overflow:hidden;border-radius:24px;color:#fff;text-decoration:none;isolation:isolate}.photo-service-card.large{grid-column:span 2}.photo-service-card>img{position:absolute;inset:0;width:100%;height:100%;object-fit:cover;transition:.5s}.photo-service-shade{position:absolute;inset:0;background:linear-gradient(0deg,rgba(4,13,24,.93) 0%,rgba(4,13,24,.32) 58%,rgba(4,13,24,.06) 100%)}.photo-service-card>div{position:absolute;z-index:2;inset:auto 0 0;padding:26px}.photo-service-card small{color:#d9bc81;font-weight:900}.photo-service-card h3{font-size:27px;margin:8px 0}.photo-service-card p{font-size:13px;color:#d6dde3;max-width:560px;margin:0}.photo-service-card b{display:block;margin-top:17px;font-size:11px;color:#e0c68e}.photo-service-card:hover>img{transform:scale(1.035)}.wound-photo-card>img{object-position:center 58%}
  .approach-v2{padding:clamp(70px,9vw,124px) clamp(20px,7vw,110px);background:#07172b;color:#fff;display:grid;grid-template-columns:.7fr 1.3fr;gap:70px}.approach-copy p{color:#bcc6d0}.approach-steps{display:grid;grid-template-columns:1fr 1fr;gap:10px}.approach-steps article{padding:24px;border:1px solid rgba(255,255,255,.12);border-radius:18px;background:rgba(255,255,255,.045)}.approach-steps span{font-size:11px;color:#d5ba80;font-weight:900}.approach-steps h3{font-size:21px;margin:22px 0 8px}.approach-steps p{font-size:13px;color:#bac5ce;margin:0}
  .tech-list-v2{display:grid;grid-template-columns:repeat(3,1fr);gap:9px;margin-bottom:17px}.tech-list-v2 div{display:grid;grid-template-columns:80px 1fr;gap:12px;align-items:center;padding:17px 19px;border:1px solid #e0e4e1;border-radius:15px;background:#fafaf8}.tech-list-v2 strong{color:#8f6a2d;font-size:18px}.tech-list-v2 span{font-size:12px;color:#5f6b75}
  .bio-v2{margin:clamp(36px,6vw,80px);padding:clamp(40px,6vw,78px);border-radius:32px;background:linear-gradient(135deg,#07172b,#12385f);color:#fff;display:flex;justify-content:space-between;align-items:end;gap:40px}.bio-v2 p{max-width:760px;color:#c5ced7}.clinic-v2{display:grid;grid-template-columns:.8fr 1.2fr;background:#eef0ec}.clinic-card,.clinic-contact{padding:clamp(58px,7vw,96px) clamp(20px,7vw,90px)}.clinic-card{background:#f8f8f5}.clinic-card strong{color:#8d692c}.clinic-card p{color:#66727c}.clinic-contact{background:#0a1d32;color:#fff}.clinic-contact p{color:#c2ccd5;max-width:760px}.phone-row{display:flex;gap:9px;flex-wrap:wrap;margin:22px 0}.phone-row a{border:1px solid #38516c;color:#ddc287;padding:8px 13px;border-radius:12px;text-decoration:none}.contact-button{margin-top:6px}.articles-v2{display:flex;justify-content:space-between;align-items:end;gap:50px;background:#fff}.articles-v2>div:first-child{max-width:820px}.articles-v2 p{color:#65717b}.article-actions{display:flex;gap:9px;flex-wrap:wrap;justify-content:flex-end}.article-actions .outline-dark{background:#fff;color:#132538;border:1px solid #cbd2cf}
  @media(max-width:1000px){.home-v2-shade{background:linear-gradient(0deg,rgba(3,10,18,.98) 0%,rgba(3,10,18,.78) 50%,rgba(3,10,18,.1) 100%)}.home-v2-content{width:auto;margin:0;padding:130px 24px 52px}.home-intro-v2,.section-heading-v2,.approach-v2,.clinic-v2{grid-template-columns:1fr;gap:28px}.service-photo-grid{grid-template-columns:1fr 1fr}.photo-service-card.large{grid-column:span 1}.tech-list-v2{grid-template-columns:1fr 1fr}.articles-v2{align-items:flex-start;flex-direction:column}.article-actions{justify-content:flex-start}}
  @media(max-width:650px){.home-v2-hero{min-height:760px}.home-v2-hero>img{object-position:right center}.home-v2-content{padding-top:290px}.home-v2-content h1{font-size:46px}.home-actions{flex-direction:column}.home-actions a{width:100%}.service-photo-grid{grid-template-columns:1fr;grid-auto-rows:330px}.tech-list-v2{grid-template-columns:1fr}.approach-steps{grid-template-columns:1fr}.bio-v2{margin:28px 14px;padding:34px 22px;align-items:flex-start;flex-direction:column}.bio-v2>a{width:100%}.phone-row{display:grid;grid-template-columns:1fr 1fr}.article-actions{width:100%;display:grid}.article-actions>a{width:100%}}
</style>