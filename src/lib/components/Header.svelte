<script>
  import { site } from '$lib/data/site.js';
</script>

<header class="v2-header">
  <a class="v2-brand" href="/" aria-label="صفحه اصلی 4B Clinic">
    <span class="v2-mark" aria-hidden="true">
      <svg viewBox="0 0 180 200" role="presentation" focusable="false">
        <defs>
          <linearGradient id="v2-header-gold" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stop-color="#f5dc96" />
            <stop offset="45%" stop-color="#d6b15f" />
            <stop offset="100%" stop-color="#9f7229" />
          </linearGradient>
        </defs>
        <path d="M36 116 L84 43 L84 116 M36 116 H102" fill="none" stroke="url(#v2-header-gold)" stroke-width="9" stroke-linecap="round" stroke-linejoin="round" />
        <path d="M98 47 V151 M98 48 C149 48 151 87 110 96 M98 97 C153 97 154 149 105 150" fill="none" stroke="url(#v2-header-gold)" stroke-width="9" stroke-linecap="round" stroke-linejoin="round" />
        <path d="M91 50 C77 68 77 88 91 106 C105 124 105 145 91 165" fill="none" stroke="url(#v2-header-gold)" stroke-width="4" stroke-linecap="round" />
        <path d="M91 50 C105 68 105 88 91 106 C77 124 77 145 91 165" fill="none" stroke="url(#v2-header-gold)" stroke-width="4" stroke-linecap="round" />
      </svg>
    </span>
    <span class="v2-brand-copy"><strong>4B Clinic</strong><small>{site.sloganFa}</small></span>
  </a>

  <nav class="v2-nav" aria-label="ناوبری اصلی">
    {#each site.nav as item}
      <a href={item.href}>{item.label}</a>
    {/each}
  </nav>

  <a class="v2-cta" href="/contact">مشاوره و نوبت</a>

  <details class="v2-mobile-menu">
    <summary aria-label="باز کردن منو"><span></span><span></span><span></span></summary>
    <div class="v2-mobile-panel">
      <div class="v2-mobile-title"><strong>4B Clinic</strong><small>خدمات و مسیر درمان</small></div>
      {#each site.nav as item}
        <a href={item.href}>{item.label}</a>
      {/each}
      <a class="v2-mobile-contact" href="/contact">مشاوره و رزرو نوبت</a>
    </div>
  </details>
</header>

<style>
  .v2-header{position:sticky;top:0;z-index:80;min-height:76px;display:flex;align-items:center;gap:22px;padding:10px clamp(18px,5vw,72px);background:rgba(251,248,241,.95);border-bottom:1px solid rgba(173,134,67,.16);backdrop-filter:blur(18px);box-shadow:0 10px 36px rgba(4,13,24,.035)}.v2-header:after{content:"";position:absolute;right:clamp(18px,5vw,72px);left:clamp(18px,5vw,72px);bottom:-1px;height:1px;background:linear-gradient(90deg,transparent,rgba(173,134,67,.42),transparent);pointer-events:none}
  .v2-brand{display:flex;align-items:center;gap:11px;margin-left:auto;text-decoration:none;color:#0b1c2e;flex:none}.v2-mark{width:48px;height:48px;border-radius:50%;display:grid;place-items:center;background:#07172b;border:1px solid rgba(185,150,81,.62);box-shadow:0 8px 24px rgba(7,23,43,.12)}.v2-mark svg{width:34px;height:38px;overflow:visible}.v2-brand-copy{display:grid;line-height:1.18}.v2-brand-copy strong{font-size:17px}.v2-brand-copy small{font-size:10px;color:#746b5d;margin-top:5px;letter-spacing:0;font-weight:700}
  .v2-nav{display:flex;align-items:center;gap:5px;font-size:12px}.v2-nav a{color:#34414e;text-decoration:none;transition:.18s;padding:8px 10px;border-radius:999px;font-weight:700}.v2-nav a:hover{color:#8a6529;background:#f2eadc}
  .v2-cta{display:inline-flex;align-items:center;justify-content:center;min-height:42px;padding:8px 17px;border-radius:999px;background:#ad8643;color:white;text-decoration:none;font-size:12px;font-weight:900;border:1px solid #ad8643;flex:none}.v2-cta:hover{background:#977331}
  .v2-mobile-menu{display:none;position:relative;margin-right:auto}.v2-mobile-menu summary{width:44px;height:44px;border-radius:50%;display:grid;place-content:center;gap:4px;border:1px solid #d8ddda;background:#fff;cursor:pointer;list-style:none}.v2-mobile-menu summary::-webkit-details-marker{display:none}.v2-mobile-menu summary span{display:block;width:18px;height:1.5px;background:#07172b}.v2-mobile-panel{position:absolute;left:0;top:54px;width:min(86vw,350px);padding:20px;background:#fffdf8;border:1px solid #e7dcc9;border-radius:20px;box-shadow:0 24px 70px rgba(7,23,43,.2);display:grid;gap:2px}.v2-mobile-title{display:grid;border-bottom:1px solid #e6e8e6;padding-bottom:13px;margin-bottom:7px}.v2-mobile-title small{font-size:10px;color:#77818b;margin-top:4px}.v2-mobile-panel>a{padding:10px 2px;border-bottom:1px solid #f0f1ef;text-decoration:none;color:#263340;font-size:14px}.v2-mobile-panel .v2-mobile-contact{margin-top:10px;border:0;text-align:center;background:#07172b;color:#fff;border-radius:12px;padding:11px 14px;font-weight:800}
  @media(max-width:1120px){.v2-nav{display:none}.v2-mobile-menu{display:block}.v2-cta{margin-right:0}.v2-brand{margin-left:0}}
  @media(max-width:680px){.v2-header{min-height:68px;padding:9px 16px;gap:10px}.v2-mark{width:43px;height:43px}.v2-mark svg{width:30px;height:34px}.v2-brand-copy strong{font-size:17px}.v2-brand-copy small{display:none}.v2-cta{display:none}.v2-mobile-menu{margin-right:auto}.v2-mobile-menu summary{width:42px;height:42px}}
</style>
