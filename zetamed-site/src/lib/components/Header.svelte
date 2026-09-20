<script lang="ts">
  import BrandMark from './BrandMark.svelte';
  import { nav, clinic, clinicHref } from '$lib/data/site';
  let open = $state(false);
</script>

<header class="shell">
  <div class="bar container">
    <BrandMark />
    <nav class:open aria-label="ناوبری اصلی">
      {#each nav as item}
        <a href={item.href} onclick={() => open = false}>{item.label}</a>
      {/each}
      <a class="cta" href={clinicHref(clinic.routes.home, 'zetamed_header')} rel="external" onclick={() => open = false}>
        <span>دریافت خدمات</span><b>4B Clinic ↗</b>
      </a>
    </nav>
    <button class="menu" aria-label="باز کردن منو" aria-expanded={open} onclick={() => open = !open}>
      <span></span><span></span><span></span>
    </button>
  </div>
</header>

<style>
  .shell{position:sticky;top:0;z-index:50;border-bottom:1px solid rgba(255,255,255,.055);background:rgba(7,7,8,.8);backdrop-filter:blur(18px)}
  .bar{height:74px;display:flex;align-items:center;justify-content:space-between}
  nav{display:flex;align-items:center;gap:1.35rem}
  nav>a{color:#c7c2b8;text-decoration:none;font-size:.83rem;transition:.2s ease}
  nav>a:hover{color:#fff}
  .cta{display:flex;align-items:center;gap:.45rem;padding:.68rem .9rem;border:1px solid rgba(222,184,87,.42);border-radius:999px;color:#e9d59f!important;background:linear-gradient(180deg,rgba(222,184,87,.1),rgba(222,184,87,.02))}
  .cta span{color:#a9a294;font-size:.72rem}.cta b{font-size:.76rem;font-weight:650;color:var(--gold-1)}
  .menu{display:none;background:none;border:0;padding:.5rem}.menu span{display:block;width:24px;height:1px;background:#e3d7bd;margin:5px}
  @media(max-width:980px){.menu{display:block}nav{display:none;position:absolute;top:73px;right:0;left:0;padding:1.3rem 5vw 1.6rem;background:#0b0b0d;border-bottom:1px solid rgba(255,255,255,.06);flex-direction:column;align-items:stretch}.open{display:flex}.cta{justify-content:center;margin-top:.5rem}}
</style>
