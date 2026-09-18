<script>
  import { articles } from '$lib/data/articles.js';
</script>

<svelte:head>
  <title>مقالات و راهنمای بیماران | 4B Clinic</title>
  <meta name="description" content="راهنمای بیمارمحور 4B Clinic درباره درد زانو، ارتوبیولوژیک، درمان‌های اتولوگ، فاکتورهای رشد و زخم مزمن؛ همراه با لینک مطالعه علمی بیشتر در Zetamed." />
  <link rel="canonical" href="https://4b-clinic.com/articles" />
</svelte:head>

<section class="articles-v2-hero"><div class="eyebrow light">4B KNOWLEDGE</div><h1>علمی، اما به زبان قابل‌فهم؛<br/><span>برای تصمیم بهتر بیمار</span></h1><p>مقالات 4B با ترکیبی از توضیح علمی و زبان بیمارمحور نوشته شده‌اند. هر موضوع صفحه مستقل داخل 4B دارد و برای مطالعه عمیق‌تر سلولی و مولکولی، مسیر علمی آن در Zetamed حفظ شده است.</p></section>

<section class="article-intro-v2"><div><div class="eyebrow">PATIENT FIRST</div><h2>دو لایه محتوا، برای دو نیاز متفاوت</h2></div><p><strong>4B Clinic</strong> کاربرد، شواهد، محدودیت و معنای بالینی هر روش را برای بیمار توضیح می‌دهد. <strong>Zetamed</strong> لایه عمیق‌تر علمی، مکانیزم‌های سلولی و مولکولی و مبانی پزشکی بازساختی را ادامه می‌دهد.</p></section>

<section class="article-grid-v2">
  {#each articles as article}
    <article class="article-v2-card">
      <a class="article-image" href={`/articles/${article.slug}`} aria-label={article.title}>
        <img src={article.image} alt={article.imageAlt} loading="lazy"/>
        <span></span>
      </a>
      <div class="article-copy-v2">
        <span class="tag">{article.tag}</span>
        <h2><a class="title-link" href={`/articles/${article.slug}`}>{article.title}</a></h2>
        <p>{article.excerpt}</p>
        <div class="article-links">
          <a class="read-link" href={`/articles/${article.slug}`}>خواندن مقاله در 4B ←</a>
          <a class="science-link" href={article.zetaHref} target="_blank" rel="noopener noreferrer">مطالعه علمی در Zetamed ↗</a>
        </div>
      </div>
    </article>
  {/each}
</section>

<section class="editorial-v2"><div><div class="eyebrow light">EDITORIAL PRINCIPLE</div><h2>محتوای سایت جایگزین ویزیت پزشکی نیست.</h2><p>مطالب این بخش برای آشنایی و تصمیم‌گیری بهتر طراحی شده‌اند. تشخیص و انتخاب درمان به شرح حال، معاینه، تصویربرداری و شرایط هر بیمار وابسته است.</p></div><a href="/contact">درخواست ارزیابی</a></section>

<style>
  .eyebrow{font-size:10px;letter-spacing:.16em;color:#9a7331;font-weight:900}.eyebrow.light{color:#ddc287}.articles-v2-hero{padding:clamp(100px,13vw,180px) clamp(20px,7vw,110px);background:linear-gradient(135deg,#07172b,#12385f);color:#fff}.articles-v2-hero h1{font-size:clamp(46px,6.6vw,90px);line-height:1.12;margin:12px 0 20px}.articles-v2-hero h1 span{color:#ddc287}.articles-v2-hero p{max-width:900px;color:#d0d9e1;font-size:18px}.article-intro-v2{padding:clamp(66px,8vw,112px) clamp(20px,7vw,110px);display:grid;grid-template-columns:.8fr 1.2fr;gap:70px;background:#f7f7f4}.article-intro-v2 h2,.editorial-v2 h2{font-size:clamp(30px,4.4vw,58px);line-height:1.42;margin:10px 0}.article-intro-v2>p{font-size:17px;color:#56616b;margin:0}.article-grid-v2{padding:10px clamp(20px,7vw,110px) clamp(70px,8vw,112px);display:grid;grid-template-columns:repeat(2,1fr);gap:16px;background:#f7f7f4}.article-v2-card{overflow:hidden;border-radius:24px;background:#fff;border:1px solid #e0e4e1;box-shadow:0 18px 50px rgba(7,23,43,.055);transition:.22s}.article-v2-card:hover{transform:translateY(-4px);box-shadow:0 26px 70px rgba(7,23,43,.1)}.article-image{position:relative;height:280px;overflow:hidden;background:#07172b;display:block}.article-image img{width:100%;height:100%;object-fit:cover;transition:.45s}.article-image>span{position:absolute;inset:0;background:linear-gradient(0deg,rgba(4,13,24,.42),transparent 56%)}.article-v2-card:hover .article-image img{transform:scale(1.025)}.article-copy-v2{padding:26px 28px 30px}.article-copy-v2 .tag{display:inline-flex;padding:4px 10px;border-radius:999px;background:#f1eee6;color:#8e692d;font-size:10px;font-weight:900}.article-copy-v2 h2{font-size:clamp(22px,2.6vw,31px);line-height:1.5;margin:13px 0 8px}.title-link{color:#142a35;text-decoration:none}.article-copy-v2 p{color:#5d6976;font-size:14px;line-height:1.9}.article-links{display:flex;flex-wrap:wrap;gap:9px;margin-top:20px}.article-links a{display:inline-flex;align-items:center;justify-content:center;min-height:38px;padding:7px 12px;border-radius:999px;font-size:11px;font-weight:900;text-decoration:none}.read-link{background:#0d2d39;color:#fff}.science-link{border:1px solid #d8c49a;color:#80602a;background:#fff}.editorial-v2{padding:clamp(62px,8vw,112px) clamp(20px,7vw,110px);background:#07172b;color:#fff;display:flex;justify-content:space-between;align-items:end;gap:40px}.editorial-v2 p{max-width:820px;color:#c5ced7}.editorial-v2>a{display:inline-flex;align-items:center;justify-content:center;min-height:48px;padding:10px 20px;border-radius:999px;background:#b58d48;color:#fff;text-decoration:none;font-weight:900;flex:none}
  @media(max-width:900px){.article-intro-v2,.article-grid-v2{grid-template-columns:1fr}.editorial-v2{align-items:flex-start;flex-direction:column}.article-intro-v2{gap:24px}}
  @media(max-width:620px){.articles-v2-hero h1{font-size:44px}.article-image{height:230px}.article-copy-v2{padding:22px}.editorial-v2>a{width:100%}}
</style>
