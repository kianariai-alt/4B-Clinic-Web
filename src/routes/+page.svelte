<script>
  import { site } from '$lib/data/site.js';
  const services = [
    ['ارتوپدی، زانو و شانه','ارزیابی آرتروز و مینیسک در کنار شانه یخ‌زده، تاندون‌ها و پارگی‌های ناکامل روتاتورکاف.','/orthopedics'],
    ['درمان‌های مو','برنامه‌های شخصی‌سازی‌شده مبتنی بر فرآورده‌های اتولوگ و فناوری‌های بازساختی.','/hair'],
    ['پوست و جوانسازی','روش‌های تزریقی و غیرتهاجمی از جمله سونوفورزیس با فرآورده‌های منتخب.','/skin'],
    ['زخم‌های مزمن','ارزیابی و درمان چندمرحله‌ای برای زخم‌های دیرترمیم با رویکرد بازساختی.','/wounds'],
    ['سلامت جنسی','خدمات اختصاصی بانوان و آقایان پس از ارزیابی پزشکی و انتخاب روش مناسب.','/sexual-health']
  ];
</script>
<svelte:head>
  <title>4B Clinic | درمان‌های اتولوگ و ارتوبیولوژیک</title>
  <meta name="description" content={site.description} />
  <link rel="canonical" href={site.domain} />
  <meta property="og:title" content="4B Clinic" />
  <meta property="og:description" content={site.description} />
  <meta property="og:url" content={site.domain} />
</svelte:head>

<section class="hero section">
  <div class="eyebrow">REGENERATIVE • AUTOLOGOUS • PERSONALIZED</div>
  <h1>بدن خودت را<br/><span>با بدن خودت بساز</span></h1>
  <p>در 4B Clinic انتخاب درمان بر پایه ارزیابی پزشکی، شواهد علمی و استفاده هدفمند از درمان‌های اتولوگ و ارتوبیولوژیک انجام می‌شود.</p>
  <div class="actions"><a class="button" href="/contact">رزرو مشاوره</a><a class="ghost" href="/orthopedics">زانو و شانه</a></div>
  <div class="trust"><span>ACS</span><span>PL</span><span>PRGF</span><span>EXO</span><span>SVF</span><span>MSC</span></div>
</section>

<section class="section intro">
  <div><div class="eyebrow">4B APPROACH</div><h2>درمان، نه بر اساس نام یک محصول؛ بر اساس نیاز بیمار</h2></div>
  <p>هدف ما استفاده از ظرفیت‌های زیستی بدن در یک برنامه درمانی تعریف‌شده است. هیچ روش واحدی برای همه مناسب نیست و انتخاب درمان پس از ارزیابی پزشک انجام می‌شود.</p>
</section>

<section class="section cards">
  {#each services as service}
    <a class="card" href={service[2]}><span>0{services.indexOf(service)+1}</span><h3>{service[0]}</h3><p>{service[1]}</p><b>مشاهده جزئیات ←</b></a>
  {/each}
</section>

<section class="section dark-callout">
  <div><div class="eyebrow">BIO HARMONY</div><h2>برنامه درمانی اختصاصی 4B برای استئوآرتریت زانو</h2><p>ساختار چندسطحی مبتنی بر PL، ACS، PRGF و در موارد منتخب فناوری‌های تکمیلی؛ متناسب با ارزیابی هر بیمار.</p></div>
  <a class="button" href="/bio-harmony">آشنایی با Bio Harmony</a>
</section>
