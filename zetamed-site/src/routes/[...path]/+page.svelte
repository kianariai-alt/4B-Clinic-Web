<script lang="ts">
  import ClinicCTA from '$lib/components/ClinicCTA.svelte';
  import { clinicRouteForContent } from '$lib/data/site';

  let { data } = $props();
  const item = data.item;
  const clinicRoute = clinicRouteForContent(item);
</script>

<svelte:head>
  <title>{item.title} | ZetaMed</title>
  {#if item.excerptText}<meta name="description" content={item.excerptText.slice(0,155)}/>{/if}
  <link rel="canonical" href={`https://zetamed.org${item.path}`}/>
</svelte:head>

<article>
  <header class="container article-head">
    <div class="eyebrow">{item.categories?.[0] || (item.type === 'page' ? 'ZETAMED' : 'کتابخانه')}</div>
    <h1>{item.title}</h1>
    <div class="meta">
      {#if item.author}<span>{item.author}</span>{/if}
      {#if item.date}<time>{new Date(item.date).toLocaleDateString('fa-IR')}</time>{/if}
    </div>
  </header>

  {#if item.featuredImage}
    <div class="container cover"><img src={item.featuredImage} alt={item.title}/></div>
  {/if}

  <div class="container reading">
    <div class="role-note">
      <span>مرجع علمی</span>
      <p>این صفحه برای آموزش و انتقال دانش است. مسیر دریافت خدمات بالینی در انتهای مطلب به 4B Clinic متصل شده است.</p>
    </div>
    <div class="article-body">{@html item.contentHtml}</div>
    <div class="clinical-handoff"><ClinicCTA route={clinicRoute}/></div>
  </div>
</article>

<style>
  .article-head{padding:6rem 0 2rem;max-width:960px}.article-head h1{font-size:clamp(2.2rem,5vw,4.6rem);line-height:1.35;font-weight:560;margin:.8rem 0 1.2rem}.meta{display:flex;gap:1rem;color:#74716a;font-size:.74rem}.cover{max-width:1100px}.cover img{width:100%;max-height:560px;object-fit:cover;border-radius:24px;border:1px solid var(--line)}.reading{max-width:900px;padding-top:2.4rem}
  .role-note{display:flex;align-items:flex-start;gap:1rem;margin:0 0 2.2rem;padding:.9rem 1rem;border:1px solid rgba(231,197,110,.12);border-radius:14px;background:rgba(231,197,110,.025)}.role-note span{white-space:nowrap;color:var(--gold-1);font-size:.68rem;padding-top:.2rem}.role-note p{margin:0;color:#807c74;font-size:.74rem;line-height:1.8}.clinical-handoff{margin-top:4rem}
  @media(max-width:620px){.article-head{padding-top:4rem}.role-note{flex-direction:column;gap:.4rem}}
</style>
