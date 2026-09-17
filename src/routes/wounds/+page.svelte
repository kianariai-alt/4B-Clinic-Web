<script>
  import ZetaScience from '$lib/components/ZetaScience.svelte';

  const conditions = [
    ['زخم دیابتی','کنترل قند، فشار روی ناحیه، عفونت، نوروپاتی و خون‌رسانی باید همزمان با مراقبت موضعی بررسی شوند.'],
    ['زخم فشاری','کاهش فشار، تغییر وضعیت، شرایط تغذیه‌ای و عمق آسیب بخش مهم تصمیم درمانی‌اند و صرفاً تعویض پانسمان کافی نیست.'],
    ['زخم عروقی یا دیرترمیم','خون‌رسانی ناکافی می‌تواند روند ترمیم را مختل کند و در صورت شک، ارزیابی عروقی باید در اولویت قرار گیرد.'],
    ['زخم پس از جراحی یا تروما','عمق، بافت مرده، ترشح، وضعیت بخیه یا لبه‌های زخم و علائم عفونت در انتخاب مسیر درمان اهمیت دارند.']
  ];
  const steps = [
    ['تشخیص علت','نوع زخم، مدت، بیماری‌های زمینه‌ای و عوامل ایجاد یا تداوم زخم مشخص می‌شوند.'],
    ['ارزیابی بستر زخم','عمق، ترشح، بافت مرده، پوست اطراف، درد و علائم عفونت بررسی و ثبت می‌شوند.'],
    ['کنترل عوامل زمینه‌ای','فشار، خون‌رسانی، قند خون، تغذیه و مراقبت استاندارد همزمان با درمان موضعی مدیریت می‌شوند.'],
    ['درمان و پیگیری','در صورت اندیکاسیون، درمان‌های بازساختی منتخب به برنامه افزوده و روند ترمیم با عکس و اندازه‌گیری مستند می‌شود.']
  ];
</script>

<svelte:head>
  <title>درمان زخم‌های مزمن و دیرترمیم | 4B Clinic تهران</title>
  <meta name="description" content="ارزیابی زخم‌های مزمن و دیرترمیم در 4B Clinic تهران؛ بررسی علت، خون‌رسانی، عفونت، فشار و استفاده از درمان‌های بازساختی منتخب در کنار مراقبت استاندارد زخم." />
  <link rel="canonical" href="https://4b-clinic.com/wounds" />
</svelte:head>

<section class="wound-hero">
  <div class="wound-glow"></div>
  <div class="wound-copy"><div class="eyebrow light">WOUND • HEALING • TISSUE</div><h1>زخم مزمن فقط<br/><span>یک سطح آسیب‌دیده نیست</span></h1><p>خون‌رسانی، عفونت، فشار، قند خون، تغذیه و کیفیت بافت همگی می‌توانند روند ترمیم را تغییر دهند. درمان موفق یعنی هم علت را ببینیم و هم خود زخم را.</p><div class="actions"><a href="/contact">درخواست ارزیابی زخم</a><a class="outline" href="#wound-types">انواع زخم</a></div></div>
  <div class="wound-visual" aria-hidden="true"><span></span><span></span><span></span><div>4B</div></div>
</section>

<section class="wound-types" id="wound-types"><div class="section-head"><div><div class="eyebrow">CLINICAL VIEW</div><h2>چه نوع زخم‌هایی نیاز به ارزیابی چندعاملی دارند؟</h2></div><p>درمان بازساختی زمانی معنا پیدا می‌کند که مراقبت استاندارد زخم و عوامل زمینه‌ای نیز همزمان مدیریت شوند.</p></div><div class="condition-grid">{#each conditions as item, i}<article><span>0{i+1}</span><h3>{item[0]}</h3><p>{item[1]}</p></article>{/each}</div></section>

<section class="wound-path"><div><div class="eyebrow light">WOUND PATHWAY</div><h2>ترمیم زخم، یک برنامه چندمرحله‌ای است</h2><p>پیشرفت درمان باید با عکس‌های استاندارد، اندازه‌گیری و ثبت منظم وضعیت بستر زخم پیگیری شود تا تغییرات در طول زمان قابل مقایسه باشند.</p></div><ol>{#each steps as item, i}<li><span>0{i+1}</span><div><strong>{item[0]}</strong><p>{item[1]}</p></div></li>{/each}</ol></section>

<section class="warning"><div class="warning-mark">!</div><div><div class="eyebrow">RED FLAGS</div><h2>علائم هشدار را جدی بگیرید</h2><p>تب، درد رو به افزایش، قرمزی منتشرشونده، ترشح بدبو، سیاه‌شدن بافت یا علائم کاهش خون‌رسانی نیازمند ارزیابی سریع پزشکی هستند. در این شرایط اولویت با درمان ایمن و فوری است.</p></div></section>

<section class="science"><ZetaScience href="https://zetamed.org/services/wound-clinic/" title="چرا زخم مزمن نیاز به نگاه چندعاملی دارد؟" text="در Zetamed می‌توانید درباره زخم مزمن، نقش خون‌رسانی، فشار، عفونت و اصول مراقبت بستر زخم با جزئیات بیشتری مطالعه کنید." /></section>

<section class="wound-cta"><div><div class="eyebrow light">NEXT STEP</div><h2>روند قبلی درمان زخم را همراه داشته باشید.</h2><p>گزارش‌های عروقی، قند خون، کشت، جراحی‌های قبلی و عکس‌های قبلی زخم می‌توانند به تصمیم‌گیری دقیق‌تر کمک کنند.</p></div><a href="/contact">درخواست ارزیابی زخم</a></section>

<style>
  .eyebrow{font-size:10px;letter-spacing:.16em;color:#9c7532;font-weight:900}.eyebrow.light{color:#d9c08a}.wound-hero{position:relative;min-height:680px;overflow:hidden;background:radial-gradient(circle at 22% 20%,#315d67 0,#163b46 32%,#0b2330 58%,#07151f 100%);color:#fff;display:grid;grid-template-columns:1.1fr .9fr;align-items:center;padding:clamp(90px,10vw,150px) clamp(22px,7vw,110px);gap:60px}.wound-glow{position:absolute;width:560px;height:560px;border-radius:50%;left:-140px;top:-160px;background:radial-gradient(circle,rgba(201,174,112,.2),transparent 65%);filter:blur(10px)}.wound-copy{position:relative;z-index:2}.wound-copy h1{font-size:clamp(44px,6.4vw,88px);line-height:1.16;margin:12px 0 20px}.wound-copy h1 span{color:#d9c08a}.wound-copy p{max-width:760px;color:#d8e2e4;font-size:clamp(16px,1.6vw,20px)}.actions{display:flex;gap:10px;flex-wrap:wrap;margin-top:28px}.actions a,.wound-cta>a{display:inline-flex;align-items:center;justify-content:center;min-height:48px;padding:10px 20px;border-radius:999px;background:#b6904d;color:#fff;text-decoration:none;font-weight:900}.actions .outline{background:rgba(255,255,255,.06);border:1px solid rgba(255,255,255,.35)}.wound-visual{position:relative;width:min(38vw,470px);aspect-ratio:1;justify-self:center;display:grid;place-items:center}.wound-visual>span{position:absolute;border-radius:50%;border:1px solid rgba(218,192,136,.22)}.wound-visual>span:nth-child(1){inset:0}.wound-visual>span:nth-child(2){inset:52px;border-style:dashed}.wound-visual>span:nth-child(3){inset:104px;border-color:rgba(255,255,255,.18)}.wound-visual>div{width:132px;height:132px;border-radius:50%;display:grid;place-items:center;background:rgba(255,255,255,.08);border:1px solid rgba(218,192,136,.5);font-size:34px;font-weight:900;color:#ddc58d;backdrop-filter:blur(8px)}
  .wound-types,.science{padding:clamp(62px,8vw,112px) clamp(20px,7vw,110px);background:#fff}.section-head{display:grid;grid-template-columns:1fr minmax(280px,.7fr);gap:60px;align-items:end;margin-bottom:34px}.section-head h2,.wound-path h2,.warning h2,.wound-cta h2{font-size:clamp(28px,4vw,52px);line-height:1.45;margin:10px 0}.section-head p{color:#65717b;margin:0}.condition-grid{display:grid;grid-template-columns:repeat(2,1fr);gap:12px}.condition-grid article{padding:28px;border:1px solid #e0e4e1;border-radius:20px;background:#fafaf8}.condition-grid span{color:#a77e39;font-size:11px;font-weight:900}.condition-grid h3{font-size:23px;margin:22px 0 8px}.condition-grid p{color:#5e6b74;font-size:14px}
  .wound-path{padding:clamp(68px,9vw,122px) clamp(20px,7vw,110px);background:#071720;color:#fff;display:grid;grid-template-columns:.72fr 1.28fr;gap:70px}.wound-path>div>p{color:#b9c8cc}.wound-path ol{list-style:none;padding:0;margin:0;display:grid;gap:10px}.wound-path li{display:grid;grid-template-columns:48px 1fr;gap:16px;padding:19px 20px;border:1px solid rgba(255,255,255,.12);background:rgba(255,255,255,.04);border-radius:16px}.wound-path li>span{color:#d6bb81;font-weight:900}.wound-path li p{color:#b8c6ca;margin:4px 0 0;font-size:13px}.warning{padding:clamp(58px,7vw,90px) clamp(20px,7vw,110px);display:grid;grid-template-columns:100px 1fr;gap:30px;align-items:center;background:#f2f0e9}.warning-mark{width:78px;height:78px;border-radius:50%;display:grid;place-items:center;background:#fff;border:1px solid #c6a76a;color:#986f2d;font-size:34px;font-weight:900}.warning p{max-width:920px;color:#56616b}.science{padding-top:48px;padding-bottom:48px}.wound-cta{padding:clamp(62px,8vw,112px) clamp(20px,7vw,110px);background:#0b2630;color:#fff;display:flex;justify-content:space-between;align-items:end;gap:40px}.wound-cta p{max-width:820px;color:#c1d0d3}
  @media(max-width:900px){.wound-hero{grid-template-columns:1fr;min-height:auto}.wound-visual{width:min(70vw,420px)}.section-head,.wound-path{grid-template-columns:1fr;gap:28px}.wound-cta{align-items:flex-start;flex-direction:column}}
  @media(max-width:620px){.wound-hero{padding-top:90px}.wound-copy h1{font-size:42px}.wound-visual{width:78vw}.condition-grid{grid-template-columns:1fr}.warning{grid-template-columns:1fr}.wound-cta>a{width:100%}.actions{flex-direction:column}.actions a{width:100%}}
</style>
