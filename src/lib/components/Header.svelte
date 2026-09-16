<script>
  import { site } from '$lib/data/site.js';
</script>

<header class="header">
  <a class="brand" href="/" aria-label="صفحه اصلی 4B Clinic">
    <span class="mark">4B</span>
    <span><strong>4B Clinic</strong><small>{site.sloganEn}</small></span>
  </a>

  <nav class="desktop-nav" aria-label="ناوبری اصلی">
    {#each site.nav as item}
      <a href={item.href}>{item.label}</a>
    {/each}
  </nav>

  <a class="cta desktop-cta" href="/contact">ارزیابی اولیه</a>

  <details class="mobile-menu">
    <summary aria-label="باز کردن منو"><span></span><span></span><span></span></summary>
    <div class="mobile-menu-panel">
      <div class="mobile-menu-title"><strong>4B Clinic</strong><small>مسیرهای درمانی</small></div>
      {#each site.nav as item}
        <a href={item.href}>{item.label}</a>
      {/each}
      <a class="mobile-contact" href="/contact">درخواست ارزیابی اولیه</a>
    </div>
  </details>
</header>
