<script>
  import { site } from '$lib/data/site.js';
</script>
<header class="header">
  <a class="brand" href="/" aria-label="4B Clinic home">
    <span class="mark">4B</span>
    <span><strong>4B Clinic</strong><small>{site.sloganEn}</small></span>
  </a>
  <nav aria-label="ناوبری اصلی">
    {#each site.nav as item}
      <a href={item.href}>{item.label}</a>
    {/each}
  </nav>
  <a class="cta" href="/contact">رزرو مشاوره</a>
</header>
