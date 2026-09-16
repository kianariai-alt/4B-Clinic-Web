<script>
  let { kind = 'biology', label = '' } = $props();
</script>

<div class="visual" aria-hidden="true">
  <svg viewBox="0 0 640 420" role="presentation">
    <defs>
      <linearGradient id="bg" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0" stop-color="#17395f" />
        <stop offset=".55" stop-color="#0b213c" />
        <stop offset="1" stop-color="#061426" />
      </linearGradient>
      <linearGradient id="gold" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0" stop-color="#f0d185" />
        <stop offset=".5" stop-color="#caa45d" />
        <stop offset="1" stop-color="#9f772f" />
      </linearGradient>
      <radialGradient id="glow">
        <stop offset="0" stop-color="#d0b374" stop-opacity=".32" />
        <stop offset="1" stop-color="#d0b374" stop-opacity="0" />
      </radialGradient>
      <filter id="soft"><feGaussianBlur stdDeviation="10" /></filter>
    </defs>

    <rect width="640" height="420" rx="30" fill="url(#bg)" />
    <circle cx="470" cy="92" r="150" fill="url(#glow)" filter="url(#soft)" />
    <circle cx="94" cy="335" r="130" fill="url(#glow)" opacity=".55" filter="url(#soft)" />
    <g fill="none" stroke="#ffffff" stroke-opacity=".08">
      <circle cx="490" cy="105" r="90" />
      <circle cx="490" cy="105" r="122" />
      <path d="M20 350 C170 285 270 405 430 328 S610 300 640 320" />
    </g>

    {#if kind === 'knee'}
      <g transform="translate(170 45)" fill="none" stroke-linecap="round" stroke-linejoin="round">
        <path d="M142 18 C98 50 88 105 104 156 C116 194 108 222 74 256" stroke="url(#gold)" stroke-width="19" />
        <path d="M226 18 C269 55 279 106 262 157 C250 194 258 222 292 255" stroke="url(#gold)" stroke-width="19" />
        <path d="M74 257 C105 240 139 238 169 250" stroke="#f8fafc" stroke-opacity=".75" stroke-width="9" />
        <path d="M292 257 C260 240 226 238 196 250" stroke="#f8fafc" stroke-opacity=".75" stroke-width="9" />
        <path d="M140 285 C158 267 207 267 225 285" stroke="url(#gold)" stroke-width="12" />
        <circle cx="183" cy="244" r="36" stroke="#d0b374" stroke-opacity=".75" stroke-width="3" />
        <circle cx="183" cy="244" r="7" fill="#d0b374" stroke="none" />
      </g>
    {:else if kind === 'shoulder'}
      <g transform="translate(145 58)" fill="none" stroke-linecap="round" stroke-linejoin="round">
        <path d="M75 95 C136 44 203 50 239 102 C271 150 251 211 193 229" stroke="url(#gold)" stroke-width="12" />
        <circle cx="264" cy="132" r="62" stroke="#f5f7fa" stroke-opacity=".78" stroke-width="12" />
        <path d="M268 194 C288 237 298 273 306 319" stroke="url(#gold)" stroke-width="18" />
        <path d="M118 104 C146 156 153 220 131 278" stroke="#d0b374" stroke-opacity=".7" stroke-width="5" />
        <path d="M198 88 C233 91 254 104 269 126" stroke="#d0b374" stroke-width="7" stroke-dasharray="8 10" />
      </g>
    {:else if kind === 'hair'}
      <g transform="translate(80 55)">
        <path d="M25 222 C150 175 330 176 480 220" fill="none" stroke="#f2d9c6" stroke-opacity=".55" stroke-width="46" stroke-linecap="round" />
        {#each [70,135,200,270,345,415] as x, i}
          <path d={`M${x} 210 C${x - 10} ${145 - i * 3} ${x + 18} ${78 + i * 5} ${x + (i % 2 ? 5 : -8)} 20`} fill="none" stroke="url(#gold)" stroke-width="7" stroke-linecap="round" />
          <ellipse cx={x} cy="232" rx="16" ry="27" fill="#d0b374" fill-opacity=".18" stroke="#d0b374" stroke-opacity=".7" />
        {/each}
        <g fill="#d0b374" opacity=".75">
          <circle cx="112" cy="98" r="4" /><circle cx="245" cy="77" r="5" /><circle cx="365" cy="118" r="4" />
        </g>
      </g>
    {:else if kind === 'skin'}
      <g transform="translate(55 70)" fill="none" stroke-linecap="round">
        <path d="M10 80 C115 45 205 112 310 76 S505 55 530 78" stroke="#efd5c3" stroke-width="38" stroke-opacity=".82" />
        <path d="M12 132 C125 102 205 158 320 126 S490 112 532 129" stroke="#c99780" stroke-width="42" stroke-opacity=".72" />
        <path d="M18 192 C137 165 218 212 328 187 S487 171 526 188" stroke="#8d5d54" stroke-width="55" stroke-opacity=".52" />
        <g stroke="url(#gold)" stroke-width="3" opacity=".8">
          <path d="M100 45 C91 95 94 132 115 180" /><path d="M252 47 C245 90 248 140 266 190" /><path d="M412 39 C404 92 407 141 430 187" />
        </g>
        <g fill="#d0b374">
          <circle cx="155" cy="114" r="5" /><circle cx="340" cy="101" r="5" /><circle cx="455" cy="147" r="4" />
        </g>
      </g>
    {:else if kind === 'wound'}
      <g transform="translate(110 55)">
        <path d="M22 207 C92 158 246 145 389 194 C446 213 455 270 391 294 C252 345 94 326 29 269 C5 248 4 226 22 207Z" fill="#c99780" fill-opacity=".42" stroke="#f0d2c0" stroke-opacity=".5" />
        <ellipse cx="235" cy="238" rx="118" ry="64" fill="#7a3f3f" fill-opacity=".72" stroke="#d0b374" stroke-opacity=".7" stroke-width="3" />
        <ellipse cx="235" cy="238" rx="67" ry="34" fill="#341a22" fill-opacity=".8" />
        <g fill="none" stroke="url(#gold)" stroke-width="4" stroke-linecap="round">
          <path d="M52 202 C88 190 112 181 142 173" /><path d="M418 208 C384 196 357 188 330 179" /><path d="M80 286 C116 276 139 271 166 267" /><path d="M390 294 C356 279 332 272 307 267" />
        </g>
        <g fill="#d0b374"><circle cx="145" cy="173" r="6" /><circle cx="329" cy="179" r="6" /><circle cx="167" cy="267" r="6" /><circle cx="306" cy="267" r="6" /></g>
      </g>
    {:else if kind === 'sexual'}
      <g transform="translate(140 62)" fill="none" stroke-linecap="round">
        <path d="M90 42 C42 97 49 187 112 235 C151 264 213 264 252 235 C315 187 322 97 274 42" stroke="#f5f7fa" stroke-opacity=".68" stroke-width="8" />
        <path d="M117 80 C151 118 160 170 143 220" stroke="url(#gold)" stroke-width="8" />
        <path d="M247 80 C213 118 204 170 221 220" stroke="url(#gold)" stroke-width="8" />
        <circle cx="182" cy="154" r="62" stroke="#d0b374" stroke-opacity=".5" stroke-width="3" />
        <g fill="#d0b374"><circle cx="182" cy="154" r="8" /><circle cx="144" cy="124" r="4" /><circle cx="220" cy="124" r="4" /><circle cx="182" cy="207" r="4" /></g>
      </g>
    {:else}
      <g transform="translate(110 55)" fill="none">
        {#each [[95,95,52],[240,150,70],[385,88,42],[410,245,62],[170,260,48]] as c}
          <circle cx={c[0]} cy={c[1]} r={c[2]} stroke="url(#gold)" stroke-width="3" stroke-opacity=".7" />
          <circle cx={c[0]} cy={c[1]} r={c[2] * .22} fill="#d0b374" fill-opacity=".8" />
        {/each}
        <path d="M95 95 C156 127 184 137 240 150 S332 116 385 88 M240 150 C298 192 349 221 410 245 M240 150 C220 202 202 229 170 260" stroke="#f5f7fa" stroke-opacity=".35" stroke-width="2" stroke-dasharray="7 9" />
      </g>
    {/if}
  </svg>
  {#if label}<span>{label}</span>{/if}
</div>

<style>
  .visual{position:relative;overflow:hidden;border-radius:24px;box-shadow:0 26px 70px rgba(7,23,43,.16);background:#07172b}.visual svg{display:block;width:100%;height:auto}.visual>span{position:absolute;right:18px;bottom:15px;padding:5px 10px;border-radius:999px;background:rgba(5,13,24,.72);border:1px solid rgba(208,179,116,.35);color:#e7d2a1;font-size:10px;letter-spacing:.06em;backdrop-filter:blur(8px)}
</style>
