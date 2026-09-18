<script>
  import { organizationAuthor } from '$lib/data/seo.js';

  let { data } = $props();
  let article = $derived(data.article);
  let canonical = $derived(`https://4b-clinic.com/articles/${article.slug}`);
  let imageUrl = $derived(`https://4b-clinic.com${article.image}`);
  let updatedLabel = $derived(
    article.updatedAt
      ? new Intl.DateTimeFormat('fa-IR', { year: 'numeric', month: 'long', day: 'numeric' }).format(new Date(article.updatedAt))
      : ''
  );
  let articleSchema = $derived({
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: article.title,
    description: article.metaDescription,
    image: [imageUrl],
    mainEntityOfPage: canonical,
    inLanguage: 'fa-IR',
    author: organizationAuthor,
    publisher: organizationAuthor,
    ...(article.createdAt ? { datePublished: article.createdAt } : {}),
    ...(article.updatedAt ? { dateModified: article.updatedAt } : {})
  });
  let breadcrumbSchema = $derived({
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: '4B Clinic', item: 'https://4b-clinic.com' },
      { '@type': 'ListItem', position: 2, name: 'مقالات', item: 'https://4b-clinic.com/articles' },
      { '@type': 'ListItem', position: 3, name: article.title, item: canonical }
    ]
  });
</script>

<svelte:head>
  <title>{article.metaTitle}</title>
  <meta name="description" content={article.metaDescription} />
  <link rel="canonical" href={canonical} />
  <meta property="og:type" content="article" />
  <meta property="og:title" content={article.metaTitle} />
  <meta property="og:description" content={article.metaDescription} />
  <meta property="og:url" content={canonical} />
  <meta property="og:image" content={imageUrl} />
  <meta name="twitter:title" content={article.metaTitle} />
  <meta name="twitter:description" content={article.metaDescription} />
  <meta name="twitter:image" content={imageUrl} />
  {#if article.updatedAt}<meta property="article:modified_time" content={article.updatedAt} />{/if}
  <script type="application/ld+json">{JSON.stringify([articleSchema, breadcrumbSchema])}</script>
</svelte:head>

<article class="article-page">
  <header class="article-hero">
    <div class="hero-copy">
      <nav aria-label="مسیر صفحه"><a href="/">4B Clinic</a><span>←</span><a href="/articles">مقالات</a></nav>
      <div class="tag">{article.tag}</div>
      <div class="article-meta">
        <span>تهیه و تدوین: تیم محتوای علمی 4B Clinic</span>
        {#if updatedLabel}<span>آخرین به‌روزرسانی: {updatedLabel}</span>{/if}
      </div>
      <h1>{article.title}</h1>
      <p>{article.excerpt}</p>
      <div class="hero-actions">
        <a class="zeta-link" href={article.zetaHref} target="_blank" rel="noopener noreferrer">مطالعه علمی‌تر در Zetamed ↗</a>
        <a class="consult-link" href="/contact">درخواست ارزیابی</a>
      </div>
    </div>
    <figure>
      <img src={article.image} alt={article.imageAlt} loading="eager" fetchpriority="high" />
    </figure>
  </header>

  <div class="article-layout">
    <aside>
      <div class="toc">
        <strong>در این مقاله</strong>
        {#each article.sections as section, i}
          <a href={`#section-${i + 1}`}>{section.heading}</a>
        {/each}
        <a href="#faq">سؤالات رایج</a>
      </div>
    </aside>

    <main class="article-body">
      <div class="editorial-note">
        <strong>راهنمای بیمار + توضیح علمی</strong>
        <p>این مقاله برای آشنایی و تصمیم‌گیری بهتر نوشته شده و جایگزین معاینه، تشخیص یا نسخه پزشکی نیست. سطح شواهد درمان‌های بازساختی در کاربردهای مختلف یکسان نیست.</p>
      </div>

      {#each article.sections as section, i}
        <section id={`section-${i + 1}`}>
          <h2>{section.heading}</h2>
          {#each section.paragraphs as paragraph}
            <p>{paragraph}</p>
          {/each}
        </section>
      {/each}

      <section class="keywords-block" aria-label="موضوعات مرتبط">
        <strong>موضوعات مرتبط با این مقاله</strong>
        <div>{#each article.keywords as keyword}<span>{keyword}</span>{/each}</div>
      </section>

      <section class="faq" id="faq">
        <div class="eyebrow">FAQ</div>
        <h2>سؤالات رایج</h2>
        {#each article.faq as item}
          <details>
            <summary>{item[0]}</summary>
            <p>{item[1]}</p>
          </details>
        {/each}
      </section>

      <section class="zeta-box">
        <div>
          <div class="eyebrow light">DEEP SCIENCE • ZETAMED</div>
          <h2>برای مطالعه علمی‌تر وارد Zetamed شوید</h2>
          <p>4B Clinic موضوع را برای بیمار و تصمیم بالینی توضیح می‌دهد. برای جزئیات سلولی، مولکولی، مکانیزم‌ها و مباحث علمی عمیق‌تر، مسیر مطالعه در Zetamed ادامه پیدا می‌کند.</p>
        </div>
        <a href={article.zetaHref} target="_blank" rel="noopener noreferrer">{article.zetaLabel} ↗</a>
      </section>

      <div class="back-row"><a href="/articles">← بازگشت به همه مقالات</a><a href="/contact">درخواست ارزیابی در 4B Clinic</a></div>
    </main>
  </div>
</article>

<style>
  .article-page{background:#f7f7f4;color:#132538}.article-hero{min-height:620px;padding:clamp(100px,12vw,160px) clamp(20px,7vw,110px) clamp(60px,8vw,100px);display:grid;grid-template-columns:1.02fr .98fr;gap:clamp(34px,6vw,84px);align-items:center;background:linear-gradient(135deg,#07172b,#12385f);color:#fff}.hero-copy{max-width:820px}.hero-copy nav{display:flex;gap:8px;align-items:center;font-size:11px;margin-bottom:24px}.hero-copy nav a{color:#c8d2dc;text-decoration:none}.tag{display:inline-flex;padding:5px 11px;border:1px solid rgba(221,194,135,.38);border-radius:999px;color:#ddc287;font-size:10px;font-weight:900}.article-meta{display:flex;gap:10px;flex-wrap:wrap;margin-top:12px;color:#aebbc6;font-size:10px}.article-meta span{display:inline-flex;padding:4px 8px;border-radius:999px;background:rgba(255,255,255,.05)}.hero-copy h1{font-size:clamp(38px,5.2vw,70px);line-height:1.35;margin:16px 0 18px}.hero-copy>p{font-size:clamp(16px,1.55vw,19px);line-height:2;color:#d4dde5;max-width:760px}.hero-actions{display:flex;gap:10px;flex-wrap:wrap;margin-top:28px}.hero-actions a,.zeta-box>a,.back-row a{display:inline-flex;align-items:center;justify-content:center;min-height:46px;padding:9px 18px;border-radius:999px;text-decoration:none;font-weight:900;font-size:12px}.zeta-link,.zeta-box>a{background:#b58d48;color:#fff}.consult-link{border:1px solid rgba(255,255,255,.35);color:#fff}.article-hero figure{margin:0;border-radius:28px;overflow:hidden;box-shadow:0 28px 80px rgba(0,0,0,.3);border:1px solid rgba(255,255,255,.15)}.article-hero img{width:100%;aspect-ratio:16/10;object-fit:cover;display:block}
  .article-layout{max-width:1320px;margin:0 auto;padding:clamp(56px,7vw,90px) 22px;display:grid;grid-template-columns:260px minmax(0,820px);gap:clamp(34px,5vw,70px);justify-content:center}.toc{position:sticky;top:96px;display:grid;gap:8px;padding:22px;border:1px solid #dfe4e1;border-radius:20px;background:#fff}.toc strong{font-size:13px;margin-bottom:5px}.toc a{color:#66727b;text-decoration:none;font-size:12px;line-height:1.55;padding:6px 0;border-bottom:1px solid #eef0ed}.toc a:hover{color:#8c682d}.article-body{min-width:0}.editorial-note{padding:20px 22px;border-radius:18px;background:#eef2ef;border:1px solid #dce2de;margin-bottom:38px}.editorial-note strong{color:#815f29}.editorial-note p{margin:6px 0 0;font-size:13px;color:#5e6972;line-height:1.9}.article-body section{scroll-margin-top:100px;margin:0 0 46px}.article-body h2{font-size:clamp(26px,3.2vw,40px);line-height:1.5;margin:0 0 17px;color:#0c2b38}.article-body p{font-size:16px;line-height:2.25;color:#3f4c56;margin:0 0 17px}.keywords-block{padding:22px;border-radius:18px;border:1px solid #e0e4e1;background:#fff}.keywords-block strong{display:block;margin-bottom:13px}.keywords-block>div{display:flex;flex-wrap:wrap;gap:7px}.keywords-block span{padding:6px 10px;border-radius:999px;background:#f1eee6;color:#7f602c;font-size:11px}.eyebrow{font-size:10px;letter-spacing:.16em;color:#9a7331;font-weight:900}.eyebrow.light{color:#ddc287}.faq details{border-top:1px solid #dbe0dc;padding:17px 0}.faq details:last-child{border-bottom:1px solid #dbe0dc}.faq summary{cursor:pointer;font-weight:900;color:#18313b}.faq details p{font-size:14px;margin:10px 0 0}.zeta-box{padding:clamp(28px,4vw,46px);border-radius:26px;background:linear-gradient(135deg,#07172b,#12385f);color:#fff;display:flex;align-items:end;justify-content:space-between;gap:30px}.zeta-box h2{color:#fff;margin:8px 0;font-size:clamp(26px,3.6vw,42px)}.zeta-box p{color:#c7d1da;margin:0;max-width:620px;font-size:14px}.zeta-box>a{flex:none}.back-row{display:flex;justify-content:space-between;gap:10px;flex-wrap:wrap;margin-top:40px}.back-row a{border:1px solid #ccd3cf;color:#17313c;background:#fff}
  @media(max-width:950px){.article-hero{grid-template-columns:1fr;min-height:auto}.article-hero figure{max-width:760px}.article-layout{grid-template-columns:1fr}.article-layout aside{display:none}.zeta-box{align-items:flex-start;flex-direction:column}}
  @media(max-width:620px){.article-hero{padding:92px 18px 48px}.hero-copy h1{font-size:36px}.hero-actions{flex-direction:column}.hero-actions a{width:100%}.article-hero figure{border-radius:18px}.article-layout{padding:42px 18px}.article-body p{font-size:15px;line-height:2.15}.zeta-box>a,.back-row a{width:100%}.back-row{display:grid}}
</style>
