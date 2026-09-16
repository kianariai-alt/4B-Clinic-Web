<script>
  let {
    eyebrow,
    title,
    titleAccent = '',
    intro,
    canonical,
    conditions = [],
    pathwayTitle = 'مسیر ارزیابی و درمان',
    pathwayIntro = '',
    steps = [],
    noteTitle = 'نکته مهم',
    note = '',
    ctaTitle = 'قدم بعدی',
    ctaText = '',
    ctaLabel = 'درخواست ارزیابی',
    backHref = '/',
    backLabel = 'بازگشت'
  } = $props();
</script>

<section class="clinical-hero section">
  <div class="eyebrow">{eyebrow}</div>
  <h1>{title}{#if titleAccent}<br/><span>{titleAccent}</span>{/if}</h1>
  <p>{intro}</p>
  <div class="actions"><a class="button" href="/contact">{ctaLabel}</a><a class="ghost" href={backHref}>{backLabel}</a></div>
</section>

<section class="section clinical-grid">
  {#each conditions as condition}
    <article class="clinical-card">
      {#if condition.en}<small>{condition.en}</small>{/if}
      <h2>{condition.title}</h2>
      <p>{condition.text}</p>
    </article>
  {/each}
</section>

<section class="section clinical-pathway">
  <div>
    <div class="eyebrow">CLINICAL PATHWAY</div>
    <h2>{pathwayTitle}</h2>
    {#if pathwayIntro}<p>{pathwayIntro}</p>{/if}
  </div>
  <ol>
    {#each steps as step}
      <li><strong>{step.title}:</strong> {step.text}</li>
    {/each}
  </ol>
</section>

{#if note}
<section class="section clinical-note">
  <strong>{noteTitle}</strong>
  <p>{note}</p>
</section>
{/if}

<section class="section clinical-cta">
  <div><div class="eyebrow">NEXT STEP</div><h2>{ctaTitle}</h2><p>{ctaText}</p></div>
  <a class="button" href="/contact">{ctaLabel}</a>
</section>

<style>
  .clinical-hero{background:radial-gradient(circle at 10% 20%,#1b3658 0,#07172b 46%,#050d18 100%);color:#fff}.clinical-hero h1{font-size:clamp(40px,6vw,80px);line-height:1.2;margin:16px 0}.clinical-hero h1 span{color:#c9aa6b}.clinical-hero p{max-width:860px;font-size:clamp(16px,2vw,19px);color:#d5dce5}.clinical-grid{display:grid;grid-template-columns:repeat(2,1fr);gap:18px}.clinical-card{background:#fff;border:1px solid #e3e7e9;border-radius:22px;padding:30px}.clinical-card small{color:#9b7735;letter-spacing:.06em}.clinical-card h2{margin:10px 0 8px;font-size:clamp(23px,3vw,30px)}.clinical-card p{color:#596673}.clinical-pathway{display:grid;grid-template-columns:.8fr 1.2fr;gap:70px;background:#eef2f3}.clinical-pathway h2,.clinical-cta h2{font-size:clamp(30px,4vw,48px);line-height:1.45}.clinical-pathway>div>p{color:#5d6976}.clinical-pathway ol{margin:0;padding:0;list-style:none;counter-reset:step}.clinical-pathway li{counter-increment:step;background:#fff;border:1px solid #e2e7e9;border-radius:16px;padding:20px 24px;margin-bottom:12px}.clinical-pathway li::before{content:counter(step,decimal-leading-zero);color:#b99651;font-weight:900;margin-left:12px}.clinical-note{padding-top:48px;padding-bottom:48px;background:#fff}.clinical-note strong{font-size:20px;color:#8f6c2f}.clinical-note p{max-width:920px;color:#53606d}.clinical-cta{display:flex;justify-content:space-between;align-items:end;gap:40px;background:#07172b;color:#fff}.clinical-cta p{max-width:820px;color:#c6d0da}@media(max-width:800px){.clinical-grid,.clinical-pathway{grid-template-columns:1fr}.clinical-cta{align-items:flex-start;flex-direction:column}.clinical-cta .button{width:100%}}@media(max-width:620px){.clinical-grid{gap:12px}.clinical-card{padding:24px}.clinical-pathway{gap:28px}}
</style>
