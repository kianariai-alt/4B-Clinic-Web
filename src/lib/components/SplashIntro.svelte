<script>
  import { onMount } from 'svelte';

  let visible = false;
  let timer = 0;

  onMount(() => {
    const key = '4b-splash-seen';
    if (sessionStorage.getItem(key) === '1') return;

    visible = true;
    sessionStorage.setItem(key, '1');
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    timer = window.setTimeout(() => {
      visible = false;
      document.body.style.overflow = previousOverflow;
    }, 3000);

    return () => {
      window.clearTimeout(timer);
      document.body.style.overflow = previousOverflow;
    };
  });
</script>

{#if visible}
  <div class="splash" aria-hidden="true">
    <div class="ambient-glow"></div>
    <div class="brand-stage">
      <img src="/brand/4b-logo-mark-navy.webp" alt="" class="brand-mark" />
      <div class="light-sweep"></div>
    </div>
    <div class="splash-copy">
      <strong>4B</strong>
      <span class="descriptor">AUTOLOGOUS ORTHOBIOLOGICS</span>
      <i></i>
      <span class="english">Build your Body By your Body</span>
      <span class="persian">بدن خودت رو با بدن خودت بساز</span>
    </div>
  </div>
{/if}

<style>
  .splash{position:fixed;inset:0;z-index:9999;display:grid;place-items:center;align-content:center;gap:12px;background:#020d29;color:#fff;overflow:hidden;animation:splash-exit 3s cubic-bezier(.4,0,.2,1) forwards}.ambient-glow{position:absolute;width:min(86vw,640px);height:min(86vw,640px);border-radius:50%;background:radial-gradient(circle,rgba(185,150,81,.16) 0,rgba(185,150,81,.05) 35%,transparent 68%);filter:blur(14px);animation:glow 2.2s ease-in-out infinite alternate}.brand-stage{position:relative;z-index:1;width:min(48vw,340px);display:grid;place-items:center;overflow:hidden;animation:logo-arrive .9s cubic-bezier(.2,.85,.25,1) both}.brand-mark{display:block;width:100%;height:auto;filter:drop-shadow(0 18px 46px rgba(0,0,0,.26));user-select:none;-webkit-user-drag:none}.light-sweep{position:absolute;inset:8% -35%;background:linear-gradient(105deg,transparent 39%,rgba(255,235,178,0) 45%,rgba(255,235,178,.62) 50%,rgba(255,235,178,0) 55%,transparent 61%);transform:translateX(-70%) rotate(-4deg);mix-blend-mode:screen;animation:sweep 1.35s .55s ease-out both;pointer-events:none}.splash-copy{position:relative;z-index:2;display:grid;justify-items:center;text-align:center;gap:2px;animation:copy-in .8s .38s ease both}.splash-copy strong{font-family:Georgia,'Times New Roman',serif;font-size:clamp(27px,4vw,40px);font-weight:500;line-height:1;color:#d9b665;letter-spacing:.08em}.descriptor{font-size:clamp(8px,1.2vw,11px);letter-spacing:.31em;color:#d8b25e;margin-top:1px}.splash-copy i{display:block;width:min(250px,48vw);height:1px;margin:8px 0 6px;background:linear-gradient(90deg,transparent,#d1aa57,transparent);box-shadow:0 0 10px rgba(208,179,116,.35)}.english{font-family:Georgia,'Times New Roman',serif;font-size:clamp(14px,2.1vw,20px);letter-spacing:.05em;color:#e1c27a}.persian{font-size:clamp(13px,2vw,19px);color:#d6b260;margin-top:3px}@keyframes logo-arrive{0%{opacity:0;transform:scale(.86) translateY(12px);filter:blur(5px)}58%{opacity:1;filter:blur(0)}100%{opacity:1;transform:scale(1) translateY(0);filter:blur(0)}}@keyframes sweep{0%{opacity:0;transform:translateX(-75%) rotate(-4deg)}18%{opacity:.65}100%{opacity:0;transform:translateX(75%) rotate(-4deg)}}@keyframes glow{from{transform:scale(.95);opacity:.58}to{transform:scale(1.06);opacity:1}}@keyframes copy-in{0%{opacity:0;transform:translateY(10px)}100%{opacity:1;transform:translateY(0)}}@keyframes splash-exit{0%,82%{opacity:1;visibility:visible}100%{opacity:0;visibility:hidden}}@media(max-width:600px){.splash{gap:8px}.brand-stage{width:min(68vw,310px)}.descriptor{letter-spacing:.22em}.splash-copy i{margin:6px 0 5px}.english{font-size:14px}.persian{font-size:14px}}@media(prefers-reduced-motion:reduce){.ambient-glow,.light-sweep,.brand-stage,.splash-copy{animation:none}.splash{animation:splash-exit 3s linear forwards}}
</style>
