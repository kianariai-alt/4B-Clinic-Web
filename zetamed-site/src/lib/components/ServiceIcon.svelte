<script lang="ts">let { type } = $props<{type:string}>();</script>
<div class="icon" aria-hidden="true">
{#if type === 'dna'}
<svg viewBox="0 0 48 48"><path d="M15 8c20 8-2 24 18 32M33 8C13 16 35 32 15 40M17 14h14M15 24h18M17 34h14"/></svg>
{:else if type === 'joint' || type === 'knee'}
<svg viewBox="0 0 48 48"><path d="M18 7c-1 9 3 11 7 15-5 4-7 10-6 19M31 7c1 9-3 11-7 15 5 4 7 10 6 19M17 22h14M18 27h12"/></svg>
{:else if type === 'wound'}
<svg viewBox="0 0 48 48"><path d="M24 7v34M7 24h34M13 13l22 22M35 13 13 35"/><circle cx="24" cy="24" r="8"/></svg>
{:else}
<svg viewBox="0 0 48 48"><circle cx="24" cy="24" r="15"/><circle cx="20" cy="21" r="5"/><circle cx="29" cy="28" r="4"/><path d="M24 9v30M9 24h30"/></svg>
{/if}
</div>
<style>.icon{width:3.1rem;height:3.1rem;border-radius:15px;display:grid;place-items:center;color:var(--gold-1);background:rgba(208,166,67,.06);border:1px solid rgba(222,184,87,.13)}svg{width:1.65rem;fill:none;stroke:currentColor;stroke-width:1.3;stroke-linecap:round;stroke-linejoin:round}</style>
