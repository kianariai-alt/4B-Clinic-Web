<script>
  let { title, subtitle, description, bullets = [] } = $props();
</script>
<section class="service-hero section"><div class="eyebrow">4B CLINIC</div><h1>{title}</h1><p>{subtitle}</p></section>
<section class="service-body section"><div><h2>رویکرد 4B</h2><p>{description}</p></div><ul>{#each bullets as item}<li>{item}</li>{/each}</ul></section>
<style>.service-hero{background:#07172b;color:#fff}.service-hero h1{font-size:clamp(38px,6vw,76px);margin:12px 0}.service-hero p{max-width:780px;color:#cbd5df;font-size:19px}.service-body{display:grid;grid-template-columns:1.2fr 1fr;gap:70px}.service-body h2{font-size:36px}.service-body p{color:#52606d;font-size:18px}.service-body ul{margin:0;padding:26px;background:#fff;border-radius:20px;border:1px solid #e5e8ea}.service-body li{margin:12px 20px}@media(max-width:800px){.service-body{grid-template-columns:1fr}}</style>
