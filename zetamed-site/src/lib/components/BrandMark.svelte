<script lang="ts">
  let { compact = false } = $props<{ compact?: boolean }>();
</script>

<a class:compact class="brand" href="/" aria-label="ZetaMed home">
  <span class="orb" aria-hidden="true">
    <svg viewBox="0 0 48 48" role="presentation">
      <circle cx="24" cy="24" r="20.5" fill="none" stroke="currentColor" stroke-width="1.2" opacity=".9" />
      <path d="M16 12c12 5 4 19 16 24M32 12c-12 5-4 19-16 24M17 17h14M15.5 24h17M17 31h14" fill="none" stroke="currentColor" stroke-width="1.4" stroke-linecap="round"/>
    </svg>
  </span>
  <span class="word">
    <strong>ZETA</strong><i>MED</i>
    {#if !compact}<small>Cellular • Molecular Medicine</small>{/if}
  </span>
</a>

<style>
  .brand{display:inline-flex;align-items:center;gap:.75rem;text-decoration:none;color:var(--gold-1)}
  .orb{display:grid;place-items:center;width:2.7rem;height:2.7rem;border-radius:50%;background:linear-gradient(145deg,rgba(238,205,120,.12),rgba(0,0,0,.1));box-shadow:inset 0 0 0 1px rgba(233,193,94,.14),0 0 30px rgba(215,177,76,.09)}
  svg{width:2.15rem;height:2.15rem}
  .word{display:flex;align-items:baseline;gap:.17rem;position:relative;letter-spacing:.08em;direction:ltr}
  strong{font-size:1rem;letter-spacing:.2em;font-weight:650}
  i{font-style:normal;font-size:1rem;font-weight:300;color:#fff}
  small{position:absolute;top:1.45rem;left:0;font-size:.48rem;letter-spacing:.13em;color:var(--muted);white-space:nowrap}
  .compact .orb{width:2.3rem;height:2.3rem}.compact svg{width:1.8rem;height:1.8rem}
  @media(max-width:640px){small{display:none}.word{gap:.1rem}}
</style>
