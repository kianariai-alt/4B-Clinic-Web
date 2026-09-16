<script>
  import { onMount } from 'svelte';

  const logoSrc = '/brand/4b-symbol-transparent.webp?v=5';
  let visible = false;
  let timer = 0;

  onMount(() => {
    const key = '4b-splash-seen-v5';
    if (sessionStorage.getItem(key) === '1') return;

    const previousOverflow = document.body.style.overflow;
    let started = false;

    const startSplash = () => {
      if (started) return;
      started = true;
      visible = true;
      sessionStorage.setItem(key, '1');
      document.body.style.overflow = 'hidden';

      timer = window.setTimeout(() => {
        visible = false;
        document.body.style.overflow = previousOverflow;
      }, 3000);
    };

    const preload = new Image();
    preload.decoding = 'sync';
    preload.fetchPriority = 'high';
    preload.onload = startSplash;
    preload.onerror = startSplash;
    preload.src = logoSrc;

    if (preload.complete) startSplash();

    return () => {
      window.clearTimeout(timer);
      document.body.style.overflow = previousOverflow;
    };
  });
</script>

<svelte:head>
  <link rel="preload" as="image" href={logoSrc} type="image/webp" />
</svelte:head>

{#if visible}
  <div class="splash" aria-hidden="true">
    <div class="splash-glow"></div>
    <div class="splash-logo" role="presentation">
      <span class="orbit orbit-one"></span>
      <span class="orbit orbit-two"></span>
      <span class="orbit orbit-three"></span>
      <div class="logo-core">
        <img
          src={logoSrc}
          alt=""
          class="brand-core-mark"
          loading="eager"
          decoding="sync"
          fetchpriority="high"
        />
      </div>
    </div>
    <div class="splash-copy">
      <strong>4B Clinic</strong>
      <span>Build your Body By your Body</span>
    </div>
  </div>
{/if}

<style>
  .splash{position:fixed;inset:0;z-index:9999;display:grid;place-items:center;align-content:center;gap:34px;background:radial-gradient(circle at 50% 42%,#17395f 0,#0a2039 34%,#061426 62%,#030a12 100%);color:#fff;overflow:hidden;animation:splash-exit 3s cubic-bezier(.4,0,.2,1) forwards}.splash-glow{position:absolute;width:min(92vw,700px);height:min(92vw,700px);border-radius:50%;background:radial-gradient(circle,#b9965124 0,#b996510d 35%,transparent 68%);filter:blur(6px);animation:glow 2.2s ease-in-out infinite alternate}.splash-logo{position:relative;width:170px;height:170px;display:grid;place-items:center;animation:logo-arrive .85s cubic-bezier(.2,.9,.25,1) both}.orbit{position:absolute;border-radius:50%;border:1px solid rgba(208,179,116,.42)}.orbit-one{inset:0;animation:spin 3s linear infinite}.orbit-two{inset:16px;border-style:dashed;animation:spin-reverse 2.5s linear infinite}.orbit-three{inset:32px;border-color:rgba(255,255,255,.18);animation:pulse-ring 1.5s ease-in-out infinite}.orbit-one:before,.orbit-one:after,.orbit-two:before,.orbit-two:after{content:"";position:absolute;width:8px;height:8px;border-radius:50%;background:#d0b374;box-shadow:0 0 18px #d0b37488}.orbit-one:before{top:-4px;left:50%}.orbit-one:after{bottom:-4px;right:50%}.orbit-two:before{right:-4px;top:50%}.orbit-two:after{left:-4px;bottom:50%}.logo-core{position:absolute;left:50%;top:50%;width:110px;height:120px;display:grid;place-items:center;transform:translate(-50%,-50%);animation:core-breathe 1.8s ease-in-out infinite;z-index:2}.brand-core-mark{display:block;width:100%;height:100%;object-fit:contain;filter:drop-shadow(0 0 12px rgba(208,179,116,.3));user-select:none;-webkit-user-drag:none}.splash-copy{position:relative;z-index:2;display:grid;text-align:center;gap:4px;animation:copy-in .9s .45s ease both}.splash-copy strong{font-size:27px;letter-spacing:.04em}.splash-copy span{font-size:11px;letter-spacing:.12em;color:#d0b374;text-transform:uppercase}@keyframes logo-arrive{0%{opacity:0;transform:scale(.72) rotate(-8deg)}100%{opacity:1;transform:scale(1) rotate(0)}}@keyframes spin{to{transform:rotate(360deg)}}@keyframes spin-reverse{to{transform:rotate(-360deg)}}@keyframes pulse-ring{0%,100%{transform:scale(.96);opacity:.55}50%{transform:scale(1.04);opacity:1}}@keyframes core-breathe{0%,100%{transform:translate(-50%,-50%) scale(.98)}50%{transform:translate(-50%,-50%) scale(1.03)}}@keyframes glow{from{transform:scale(.94);opacity:.55}to{transform:scale(1.06);opacity:1}}@keyframes copy-in{0%{opacity:0;transform:translateY(12px)}100%{opacity:1;transform:translateY(0)}}@keyframes splash-exit{0%,82%{opacity:1;visibility:visible}100%{opacity:0;visibility:hidden}}@media(max-width:600px){.splash{gap:28px}.splash-logo{width:148px;height:148px}.logo-core{width:96px;height:105px}.splash-copy strong{font-size:24px}.splash-copy span{font-size:9px}}@media(prefers-reduced-motion:reduce){.orbit,.splash-glow,.logo-core{animation:none}.splash-logo,.splash-copy{animation:none}.splash{animation:splash-exit 3s linear forwards}}
</style>
