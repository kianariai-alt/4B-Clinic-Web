<div class="visual" aria-hidden="true">
  <div class="halo h1"></div><div class="halo h2"></div>
  <svg viewBox="0 0 620 620" role="presentation">
    <defs>
      <linearGradient id="gold" x1="0" x2="1"><stop stop-color="#765b1e"/><stop offset=".46" stop-color="#f1d17c"/><stop offset="1" stop-color="#9b792c"/></linearGradient>
      <radialGradient id="cell"><stop stop-color="#f5dc99" stop-opacity=".85"/><stop offset=".45" stop-color="#ad8534" stop-opacity=".3"/><stop offset="1" stop-color="#1a160d" stop-opacity="0"/></radialGradient>
      <filter id="glow"><feGaussianBlur stdDeviation="3" result="b"/><feMerge><feMergeNode in="b"/><feMergeNode in="SourceGraphic"/></feMerge></filter>
    </defs>
    <circle cx="310" cy="310" r="240" fill="none" stroke="#d5ab4d" stroke-opacity=".1" />
    <circle cx="310" cy="310" r="180" fill="none" stroke="#d5ab4d" stroke-opacity=".08" stroke-dasharray="4 10" />
    <g transform="rotate(-25 310 310)" fill="none" stroke="url(#gold)" stroke-width="4" stroke-linecap="round" filter="url(#glow)">
      <path d="M210 105 C470 175 165 320 410 510"/>
      <path d="M410 105 C150 175 455 320 210 510"/>
      {#each [140,178,216,254,292,330,368,406,444,482] as y, i}
        <path d={`M${i%2?238:260} ${y} Q310 ${y+(i%2?18:-14)} ${i%2?382:360} ${y}`} stroke-width="1.5" opacity=".82"/>
      {/each}
    </g>
    {#each [{x:126,y:220,r:35},{x:485,y:205,r:28},{x:455,y:420,r:42},{x:175,y:445,r:22}] as c}
      <circle cx={c.x} cy={c.y} r={c.r} fill="url(#cell)" />
      <circle cx={c.x} cy={c.y} r={c.r*.52} fill="none" stroke="#e4bc61" stroke-opacity=".36" />
    {/each}
  </svg>
</div>

<style>
  .visual{position:relative;min-height:560px;display:grid;place-items:center;isolation:isolate}.visual:before{content:"";position:absolute;width:70%;height:70%;border-radius:50%;background:radial-gradient(circle,rgba(198,151,49,.13),transparent 67%);filter:blur(28px);z-index:-1}
  svg{width:min(100%,620px);height:auto;filter:drop-shadow(0 30px 80px rgba(0,0,0,.55))}.halo{position:absolute;border:1px solid rgba(222,184,87,.08);border-radius:50%;animation:spin 24s linear infinite}.h1{width:78%;height:78%}.h2{width:58%;height:58%;animation-direction:reverse;animation-duration:16s}.halo:after{content:"";position:absolute;left:12%;top:6%;width:5px;height:5px;border-radius:50%;background:#e2bd62;box-shadow:0 0 16px #e2bd62}
  @keyframes spin{to{transform:rotate(360deg)}}
  @media(max-width:860px){.visual{min-height:420px}}
</style>
