<script>
  import { site } from '$lib/data/site.js';
  import ClinicalVisual from '$lib/components/ClinicalVisual.svelte';
  import ZetaScience from '$lib/components/ZetaScience.svelte';

  const conditions = [
    {
      title: 'شانه یخ‌زده',
      en: 'Adhesive Capsulitis',
      text: 'درد و کاهش تدریجی دامنه حرکت شانه نیاز به افتراق از مشکلات تاندونی، آرتروز، آسیب‌های پس از ضربه و سایر علل درد شانه دارد.'
    },
    {
      title: 'پارگی ناکامل روتاتورکاف',
      en: 'Partial Rotator Cuff Tear',
      text: 'محل، عمق و شدت پارگی، سطح فعالیت و میزان ضعف یا محدودیت عملکرد در انتخاب مسیر درمان اهمیت دارند.'
    },
    {
      title: 'تاندینوپاتی و آسیب تاندون‌ها',
      en: 'Tendinopathy & Tendon Injury',
      text: 'درد ناشی از تاندون‌های شانه همیشه به معنی پارگی کامل نیست و ارزیابی بالینی و در موارد لازم تصویربرداری به تعیین علت کمک می‌کند.'
    },
    {
      title: 'آسیب‌های کپسول و بافت نرم',
      en: 'Capsule & Soft Tissue Injury',
      text: 'آسیب‌های بافت نرم شانه باید در کنار ثبات مفصل، دامنه حرکت، قدرت عضلانی و مکانیسم ایجاد علائم بررسی شوند.'
    }
  ];
</script>

<svelte:head>
  <title>شانه یخ‌زده و پارگی ناکامل روتاتورکاف | 4B Clinic</title>
  <meta name="description" content="ارزیابی شانه یخ‌زده، پارگی ناکامل روتاتورکاف، تاندینوپاتی و آسیب‌های منتخب کپسول شانه در 4B Clinic؛ انتخاب مسیر درمان بر اساس نوع و شدت آسیب." />
  <link rel="canonical" href={`${site.domain}/orthopedics/shoulder`} />
</svelte:head>

<section class="shoulder-hero section">
  <div class="hero-copy">
    <div class="eyebrow">SHOULDER • ROTATOR CUFF • CAPSULE</div>
    <h1>درمان مشکلات شانه<br/><span>از تشخیص درست شروع می‌شود</span></h1>
    <p>درد، ضعف یا محدودیت حرکت شانه می‌تواند علل متفاوتی داشته باشد. هدف این صفحه معرفی مسیر ارزیابی شانه یخ‌زده، پارگی‌های ناکامل تاندون‌ها و روتاتورکاف و آسیب‌های منتخب کپسول و بافت نرم است.</p>
    <div class="actions"><a class="button" href="/contact">رزرو ارزیابی</a><a class="ghost" href="/orthopedics">بازگشت به ارتوپدی</a></div>
  </div>
  <ClinicalVisual kind="shoulder" label="SHOULDER • ROTATOR CUFF" />
</section>

<section class="section shoulder-grid">
  {#each conditions as condition}
    <article class="condition-card">
      <small>{condition.en}</small>
      <h2>{condition.title}</h2>
      <p>{condition.text}</p>
    </article>
  {/each}
</section>

<section class="section pathway">
  <div>
    <div class="eyebrow">CLINICAL PATHWAY</div>
    <h2>یک مسیر درمان برای همه شانه‌ها وجود ندارد</h2>
  </div>
  <ol>
    <li><strong>ارزیابی بالینی:</strong> درد، دامنه حرکت، قدرت، فعالیت روزمره و سابقه آسیب بررسی می‌شود.</li>
    <li><strong>تکمیل تشخیص:</strong> در صورت نیاز یافته‌های سونوگرافی، MRI یا سایر تصویربرداری‌ها با معاینه تطبیق داده می‌شوند.</li>
    <li><strong>انتخاب درمان:</strong> بازتوانی، اصلاح فعالیت و سایر درمان‌های غیرجراحی در کنار مداخلات منتخب بررسی می‌شوند.</li>
    <li><strong>ارجاع جراحی در صورت نیاز:</strong> پارگی‌های شدید، ضعف قابل‌توجه یا مواردی که معیار جراحی دارند نباید با درمان‌های بیولوژیک به تأخیر بیفتند.</li>
  </ol>
</section>

<section class="section evidence-note">
  <strong>نکته مهم</strong>
  <p>درمان‌های بیولوژیک و اتولوگ برای تمام انواع آسیب روتاتورکاف توصیه روتین ندارند. تصمیم درمانی باید بر اساس تشخیص، درجه پارگی، علائم و گزینه‌های استاندارد غیرجراحی یا جراحی انجام شود.</p>
</section>

<section class="section science-wrap">
  <ZetaScience
    href="https://zetamed.org/services/orthobiological/"
    title="ارتوبیولوژیک در بافت‌های تاندون، رباط و مفصل"
    text="برای مطالعه عمیق‌تر درباره مبانی ارتوبیولوژیک و کاربردهای آن در بافت‌های سیستم اسکلتی‌عضلانی، صفحه علمی Zetamed را ببینید."
  />
</section>

<style>
  .shoulder-hero{display:grid;grid-template-columns:minmax(0,1.05fr) minmax(320px,.72fr);gap:54px;align-items:center;background:radial-gradient(circle at 10% 20%,#1b3658 0,#07172b 45%,#050d18 100%);color:#fff}.shoulder-hero h1{font-size:clamp(40px,6vw,80px);line-height:1.2;margin:16px 0}.shoulder-hero h1 span{color:#c9aa6b}.shoulder-hero p{max-width:820px;font-size:19px;color:#d5dce5}.shoulder-hero :global(.visual){max-width:580px;justify-self:end}.shoulder-grid{display:grid;grid-template-columns:repeat(2,1fr);gap:18px}.condition-card{background:#fff;border:1px solid #e3e7e9;border-radius:22px;padding:30px}.condition-card small{color:#9b7735;letter-spacing:.08em}.condition-card h2{margin:10px 0 8px;font-size:28px}.condition-card p{color:#596673}.pathway{display:grid;grid-template-columns:.8fr 1.2fr;gap:70px;background:#eef2f3}.pathway h2{font-size:clamp(30px,4vw,48px);line-height:1.45}.pathway ol{margin:0;padding:0;list-style:none;counter-reset:step}.pathway li{counter-increment:step;background:#fff;border:1px solid #e2e7e9;border-radius:16px;padding:20px 24px;margin-bottom:12px}.pathway li::before{content:counter(step,decimal-leading-zero);color:#b99651;font-weight:900;margin-left:12px}.evidence-note{padding-top:48px;padding-bottom:48px}.evidence-note strong{font-size:20px;color:#8f6c2f}.evidence-note p{max-width:900px;color:#53606d}.science-wrap{padding-top:20px}@media(max-width:900px){.shoulder-hero{grid-template-columns:1fr}.shoulder-hero :global(.visual){justify-self:start;width:min(100%,620px)}}@media(max-width:800px){.shoulder-grid,.pathway{grid-template-columns:1fr}}
</style>
