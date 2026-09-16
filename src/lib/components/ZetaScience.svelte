<script>
  let {
    href = 'https://zetamed.org/',
    title = 'مطالعه علمی بیشتر',
    text = 'برای توضیحات عمیق‌تر درباره مبانی سلولی و مولکولی این موضوع می‌توانید محتوای علمی Zetamed را بخوانید.',
    label = 'اطلاعات علمی بیشتر در Zetamed'
  } = $props();
</script>

<section class="zeta-science">
  <div>
    <span>ZETAMED • SCIENCE LIBRARY</span>
    <h2>{title}</h2>
    <p>{text}</p>
  </div>
  <a href={href} target="_blank" rel="noopener noreferrer">{label} ↗</a>
</section>

<style>
  .zeta-science{display:flex;align-items:end;justify-content:space-between;gap:36px;padding:34px;border:1px solid #dfe5e4;border-radius:24px;background:linear-gradient(135deg,#fff,#f1f4f3);box-shadow:0 18px 55px rgba(7,23,43,.06)}.zeta-science span{display:block;color:#9b7735;font-size:10px;font-weight:900;letter-spacing:.14em}.zeta-science h2{font-size:clamp(24px,3vw,36px);line-height:1.45;margin:8px 0}.zeta-science p{max-width:760px;margin:0;color:#596673}.zeta-science a{flex:none;display:inline-flex;align-items:center;justify-content:center;padding:11px 16px;border-radius:999px;background:#07172b;color:#fff;font-size:12px;font-weight:800;border:1px solid #07172b}.zeta-science a:hover{background:#0d294a;border-color:#0d294a}@media(max-width:760px){.zeta-science{align-items:flex-start;flex-direction:column;padding:25px}.zeta-science a{width:100%}}
</style>
