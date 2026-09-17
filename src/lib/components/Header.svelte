<script>
  import { site } from '$lib/data/site.js';
</script>

<header class="header">
  <a class="brand" href="/" aria-label="صفحه اصلی 4B Clinic">
    <span class="mark" aria-hidden="true">
      <svg class="header-logo" viewBox="0 0 180 200" role="presentation" focusable="false">
        <defs>
          <linearGradient id="header-gold" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stop-color="#f7df98" />
            <stop offset="42%" stop-color="#d8b45f" />
            <stop offset="100%" stop-color="#a97624" />
          </linearGradient>
        </defs>
        <path d="M36 116 L84 43 L84 116 M36 116 H102" fill="none" stroke="url(#header-gold)" stroke-width="9" stroke-linecap="round" stroke-linejoin="round" />
        <path d="M98 47 V151 M98 48 C149 48 151 87 110 96 M98 97 C153 97 154 149 105 150" fill="none" stroke="url(#header-gold)" stroke-width="9" stroke-linecap="round" stroke-linejoin="round" />
        <path d="M91 50 C77 68 77 88 91 106 C105 124 105 145 91 165" fill="none" stroke="url(#header-gold)" stroke-width="4" stroke-linecap="round" />
        <path d="M91 50 C105 68 105 88 91 106 C77 124 77 145 91 165" fill="none" stroke="url(#header-gold)" stroke-width="4" stroke-linecap="round" />
        <g stroke="url(#header-gold)" stroke-width="2.4" stroke-linecap="round">
          <line x1="84" y1="65" x2="98" y2="65" />
          <line x1="80" y1="81" x2="102" y2="81" />
          <line x1="83" y1="97" x2="99" y2="97" />
          <line x1="80" y1="113" x2="102" y2="113" />
          <line x1="83" y1="129" x2="99" y2="129" />
          <line x1="84" y1="145" x2="98" y2="145" />
        </g>
      </svg>
    </span>
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

<style>
  .header-logo{display:block;width:34px;height:38px;overflow:visible}
  @media(max-width:1080px){
    .mobile-menu{margin-right:auto}
    .desktop-cta{margin-right:0}
  }
  @media(max-width:680px){
    .header-logo{width:32px;height:36px}
  }
</style>
