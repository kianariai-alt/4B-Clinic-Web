<script lang="ts">
  import MolecularVisual from '$lib/components/MolecularVisual.svelte';
  import ServiceIcon from '$lib/components/ServiceIcon.svelte';
  import ClinicCTA from '$lib/components/ClinicCTA.svelte';
  import { services, featuredArticles, site, clinic, clinicHref } from '$lib/data/site';
</script>

<svelte:head>
  <title>{site.title} | ZetaMed</title>
  <meta name="description" content="زتامد؛ پلتفرم علمی پزشکی سلولی مولکولی، ارتوبیولوژی، ژنتیک، پزشکی بازساختی، کلینیک زخم و IVF." />
  <link rel="canonical" href="https://zetamed.org/" />
</svelte:head>

<section class="hero container">
  <div class="copy">
    <div class="eyebrow">ZETAMED • SCIENCE PLATFORM</div>
    <h1>پزشکی، در مقیاس <span class="gold-text">سلول و مولکول</span></h1>
    <p>پلتفرمی برای شناخت عمیق‌تر پزشکی سلولی مولکولی و پیوند آن با پزشکی بازساختی، ژنتیک، درمان‌های ارتوبیولوژیک و پژوهش‌های آینده‌محور.</p>
    <div class="actions"><a class="primary" href="/مقدمه-ای-بر-پزشکی-سلولی-مولکولی/">شروع مطالعه</a><a class="ghost" href="/blog/">ورود به کتابخانه</a><a class="clinic-action" href={clinicHref(clinic.routes.home, 'zetamed_home_hero')} rel="external">خدمات در 4B Clinic ↗</a></div>
    <div class="facts"><div><b>05</b><span>حوزه اصلی</span></div><div><b>علمی</b><span>محتوای تخصصی فارسی</span></div><div><b>2025</b><span>شروع زتامد</span></div></div>
  </div>
  <MolecularVisual />
</section>

<section class="container role-bridge">
  <div class="role-card science">
    <span>01 / KNOWLEDGE</span>
    <h2>ZetaMed</h2>
    <p>مرجع علمی برای مطالعه، پژوهش و شناخت پزشکی سلولی مولکولی و پزشکی بازساختی.</p>
  </div>
  <div class="connector" aria-hidden="true"><span>→</span></div>
  <div class="role-card clinic">
    <span>02 / CLINICAL CARE</span>
    <h2>4B Clinic</h2>
    <p>مسیر دریافت خدمات، ارزیابی بالینی و آشنایی با درمان‌های قابل ارائه در کلینیک.</p>
    <a href={clinicHref(clinic.routes.home, 'zetamed_home_bridge')} rel="external">ورود به سایت کلینیک ↗</a>
  </div>
</section>

<section class="manifesto">
  <div class="container manifesto-grid">
    <div><div class="eyebrow">CELLULAR • MOLECULAR</div><h2 class="section-title">سومین عصر دانش پزشکی</h2></div>
    <p class="section-copy">زتامد با تمرکز بر سطح سلولی و مولکولی، مسیرهای نوین درمان، پیشگیری و توان‌افزایی را دنبال می‌کند؛ جایی که زیست‌شناسی، محاسبات، ژنتیک و مهندسی بافت به یک زبان مشترک می‌رسند.</p>
  </div>
</section>

<section id="services" class="container services-section">
  <div class="eyebrow">حوزه‌های اصلی</div>
  <div class="heading-row"><h2 class="section-title">از دانش پایه تا کاربرد بالینی</h2><p>ساختار محتوا حفظ شده، اما هر حوزه به شکل یک مسیر علمی مستقل و قابل پیمایش ارائه می‌شود.</p></div>
  <div class="services">
    {#each services as s, i}
      <article class="service panel">
        <div class="top"><ServiceIcon type={s.icon}/><span>0{i+1}</span></div>
        <h3>{s.title}</h3><p>{s.kicker}</p>
        <div class="service-links">
          <a href={s.href}>مطالعه علمی</a>
          <a class="clinical" href={s.clinicHref} rel="external">خدمات 4B ↗</a>
        </div>
      </article>
    {/each}
  </div>
</section>

<section class="research-wrap">
  <div class="container research">
    <div class="research-copy"><div class="eyebrow">تحقیقات در دست انجام</div><h2 class="section-title">پرسش‌هایی که هنوز پاسخ کامل ندارند</h2><p class="section-copy">بخش تحقیقاتی برای موضوعات میان‌رشته‌ای و پروژه‌هایی طراحی شده که قرار است از مرور دانش موجود به طرح مسئله و پژوهش واقعی برسند.</p><a href="/category/research-underway/">مشاهده بخش تحقیقات ←</a></div>
    <div class="research-list">
      <article><span>01</span><div><h3>ترمیم دژنریشن منیسک</h3><p>پیشگیری از آرتروز و بازسازی بافت</p></div></article>
      <article><span>02</span><div><h3>پوشش‌های آزادکننده آنتی‌بیوتیک</h3><p>مواد زیستی و کنترل عفونت</p></div></article>
      <article><span>03</span><div><h3>آنالیز گیت</h3><p>بیومکانیک، حرکت و داده</p></div></article>
    </div>
  </div>
</section>

<section class="container library-section">
  <div class="eyebrow">مجله سلامت و کتابخانه</div>
  <div class="heading-row"><h2 class="section-title">دانش عمیق، بدون ظاهر خسته‌کننده</h2><a class="all" href="/blog/">همه مطالب ←</a></div>
  <div class="articles">
    {#each featuredArticles as a, i}
      <a class="article" href={a.href}>
        <div class="thumb t{i%3}"><span>{a.category}</span></div>
        <div class="article-copy"><small>{a.category}</small><h3>{a.title}</h3><span>مطالعه مطلب ←</span></div>
      </a>
    {/each}
  </div>
</section>

<section class="container home-clinical">
  <ClinicCTA eyebrow="ZetaMed برای دانش؛ 4B Clinic برای خدمات"/>
</section>

<section class="container cta-block panel">
  <div><div class="eyebrow">همکاری علمی</div><h2>زتامد برای مشارکت ساخته شده است.</h2><p>ارسال مقاله، ایده تحقیقاتی، پیشنهاد همکاری و ارتباط با مجموعه علمی از بخش تماس در دسترس است.</p></div>
  <a href="/contact/">ارتباط با زتامد</a>
</section>

<style>
  .hero{min-height:calc(100vh - 74px);display:grid;grid-template-columns:1.02fr .98fr;align-items:center;gap:2rem;padding-block:3rem 4rem}.copy{padding-top:1rem}.copy h1{font-size:clamp(3rem,6.3vw,6.5rem);line-height:1.14;letter-spacing:-.045em;margin:1rem 0 1.7rem;font-weight:530}.copy>p{max-width:650px;color:#aaa69d;line-height:2.1;font-size:1.02rem}.actions{display:flex;gap:.8rem;margin:2.2rem 0}.actions a{padding:.85rem 1.25rem;border-radius:999px;text-decoration:none;font-size:.88rem}.primary{background:linear-gradient(120deg,#c69a3c,#f0d37f);color:#0c0b08}.ghost{border:1px solid rgba(255,255,255,.12);color:#d5d1c8}.clinic-action{border:1px solid rgba(231,197,110,.3);color:#e9cb78;background:rgba(231,197,110,.045)}.facts{display:flex;gap:2rem;margin-top:3.2rem;padding-top:1.5rem;border-top:1px solid var(--line)}.facts div{display:flex;flex-direction:column;gap:.2rem}.facts b{font-size:1rem;color:#eee6d4}.facts span{font-size:.7rem;color:#73716d}
  .role-bridge{display:grid;grid-template-columns:1fr 72px 1fr;gap:1rem;align-items:stretch;padding-bottom:5rem}.role-card{position:relative;padding:1.5rem;border:1px solid var(--line);border-radius:20px;background:linear-gradient(145deg,rgba(255,255,255,.025),rgba(255,255,255,.008))}.role-card>span{font:500 .65rem monospace;color:#756a50}.role-card h2{font-size:1.55rem;margin:.7rem 0 .45rem}.role-card p{color:#8c887f;line-height:1.9;font-size:.82rem;margin:0}.role-card.clinic{border-color:rgba(231,197,110,.22);background:radial-gradient(circle at 80% 20%,rgba(231,197,110,.09),transparent 34%),#0c0c0e}.role-card.clinic h2{color:var(--gold-1)}.role-card a{display:inline-block;margin-top:1rem;color:#d8b85d;text-decoration:none;font-size:.78rem}.connector{display:flex;align-items:center;justify-content:center;color:#8d733c}.connector span{width:44px;height:44px;display:grid;place-items:center;border:1px solid rgba(231,197,110,.16);border-radius:50%}
  .manifesto{padding:6rem 0;border-block:1px solid var(--line);background:linear-gradient(90deg,rgba(192,145,40,.035),transparent 48%)}.manifesto-grid{display:grid;grid-template-columns:1fr 1fr;gap:5rem;align-items:end}.manifesto h2{margin-bottom:0}
  .services-section,.library-section{padding-top:7rem}.heading-row{display:flex;justify-content:space-between;align-items:end;gap:2rem;margin-bottom:2.4rem}.heading-row>p{max-width:450px;color:var(--muted);font-size:.86rem;line-height:1.9}.services{display:grid;grid-template-columns:repeat(5,1fr);gap:.8rem}.service{min-height:280px;border-radius:20px;padding:1.15rem;display:flex;flex-direction:column;text-decoration:none;color:inherit;position:relative;overflow:hidden}.service:after{content:"";position:absolute;inset:auto -30% -55% -30%;height:70%;background:radial-gradient(circle,rgba(214,169,66,.12),transparent 62%);opacity:0;transition:.3s}.service:hover{transform:translateY(-5px);border-color:rgba(226,188,93,.28)}.service:hover:after{opacity:1}.top{display:flex;justify-content:space-between;align-items:start}.top>span{font:500 .7rem/1 monospace;color:#55524c}.service h3{margin:auto 0 .6rem;font-size:1.15rem;font-weight:520}.service p{margin:0;color:#79766f;font-size:.78rem;line-height:1.7}.service-links{display:flex;gap:.5rem;margin-top:1.25rem}.service-links a{flex:1;text-align:center;text-decoration:none;padding:.6rem .55rem;border:1px solid var(--line);border-radius:999px;color:#b9b4aa;font-size:.68rem}.service-links a:hover{color:#fff;border-color:rgba(255,255,255,.16)}.service-links .clinical{color:#d8b85d;border-color:rgba(231,197,110,.17);background:rgba(231,197,110,.035)}
  .research-wrap{margin-top:8rem;padding:7rem 0;background:linear-gradient(145deg,#0b0b0d,#09090a);border-block:1px solid var(--line)}.research{display:grid;grid-template-columns:.9fr 1.1fr;gap:6rem;align-items:center}.research-copy>a,.all{display:inline-block;margin-top:1rem;color:var(--gold-1);text-decoration:none;font-size:.84rem}.research-list{border-top:1px solid var(--line)}.research-list article{display:flex;gap:2rem;padding:1.6rem .2rem;border-bottom:1px solid var(--line);align-items:center}.research-list article>span{font:500 .7rem monospace;color:#6e592e}.research-list h3{font-size:1rem;font-weight:500;margin:0 0 .3rem}.research-list p{font-size:.75rem;color:#77736b;margin:0}
  .articles{display:grid;grid-template-columns:repeat(3,1fr);gap:1rem}.article{border:1px solid var(--line);border-radius:20px;overflow:hidden;text-decoration:none;color:inherit;background:#0b0b0d}.thumb{height:180px;position:relative;background:radial-gradient(circle at 30% 30%,rgba(231,197,110,.3),transparent 25%),radial-gradient(circle at 66% 56%,rgba(160,120,40,.2),transparent 27%),linear-gradient(140deg,#17150f,#070708)}.thumb:before,.thumb:after{content:"";position:absolute;border:1px solid rgba(228,187,89,.17);border-radius:50%}.thumb:before{width:110px;height:110px;left:20%;top:18%}.thumb:after{width:50px;height:50px;left:52%;top:38%}.thumb span{position:absolute;bottom:1rem;right:1rem;font-size:.65rem;color:#d4b566;background:rgba(7,7,8,.7);padding:.35rem .5rem;border:1px solid rgba(222,184,87,.15);border-radius:999px}.t1{background:radial-gradient(circle at 65% 28%,rgba(231,197,110,.25),transparent 22%),linear-gradient(135deg,#0a0a0b,#1b170c)}.t2{background:linear-gradient(40deg,#070708,#16120a 48%,#09090a)}.article-copy{padding:1.25rem}.article-copy small{color:#766b52;font-size:.68rem}.article-copy h3{font-size:1rem;line-height:1.75;font-weight:520;min-height:3.5em}.article-copy span{font-size:.74rem;color:#a98a45}.article:hover{transform:translateY(-4px);border-color:rgba(222,184,87,.2)}
  .home-clinical{margin-top:7rem}.cta-block{margin-top:3rem;padding:2.4rem;border-radius:24px;display:flex;align-items:center;justify-content:space-between;gap:2rem;background:radial-gradient(circle at 15% 20%,rgba(207,162,59,.11),transparent 35%),#0c0c0e}.cta-block h2{font-size:1.55rem;margin:.6rem 0}.cta-block p{color:var(--muted);margin:0}.cta-block>a{white-space:nowrap;text-decoration:none;background:var(--gold-1);color:#100e09;border-radius:999px;padding:.85rem 1.2rem;font-size:.82rem}
  @media(max-width:1000px){.hero{grid-template-columns:1fr}.copy{padding-top:3rem}.services{grid-template-columns:repeat(3,1fr)}.research{gap:3rem}.articles{grid-template-columns:1fr 1fr}}
  @media(max-width:720px){.role-bridge{grid-template-columns:1fr;padding-bottom:3rem}.connector{height:44px}.connector span{transform:rotate(90deg)}.manifesto-grid,.research{grid-template-columns:1fr;gap:2rem}.services{grid-template-columns:1fr 1fr}.heading-row{align-items:start;flex-direction:column}.articles{grid-template-columns:1fr}.facts{gap:1rem;justify-content:space-between}.cta-block{align-items:flex-start;flex-direction:column}.copy h1{font-size:clamp(2.8rem,15vw,5.4rem)}}
  @media(max-width:480px){.services{grid-template-columns:1fr}.service{min-height:220px}}
</style>
