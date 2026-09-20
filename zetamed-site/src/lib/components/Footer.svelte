<script lang="ts">
  import BrandMark from './BrandMark.svelte';
  import { site, services, clinic, clinicHref } from '$lib/data/site';
</script>

<footer>
  <div class="container clinic-bridge">
    <div>
      <small>ZETAMED → 4B CLINIC</small>
      <h2>مطالعه در زتامد؛ دریافت خدمات در 4B Clinic</h2>
      <p>زتامد نقش مرجع علمی و آموزشی را دارد. برای ارزیابی بالینی، آشنایی با خدمات و ارتباط با مجموعه درمانی به 4B Clinic مراجعه کنید.</p>
    </div>
    <a href={clinicHref(clinic.routes.home, 'zetamed_footer')} rel="external">ورود به 4B Clinic ↗</a>
  </div>

  <div class="container grid">
    <div class="lead">
      <BrandMark />
      <p>پلتفرمی علمی برای پزشکی سلولی مولکولی، پزشکی بازساختی، ژنتیک و انتقال دانش به کاربردهای واقعی پزشکی.</p>
    </div>
    <div>
      <h3>حوزه‌ها</h3>
      {#each services.slice(0,4) as s}<a href={s.href}>{s.title}</a>{/each}
    </div>
    <div>
      <h3>کتابخانه</h3>
      <a href="/blog/">نوشته‌های علمی</a>
      <a href="/category/articles/">مقالات</a>
      <a href="/category/research-underway/">تحقیقات</a>
      <a href="/category/members/faculty-members/">اعضای هیئت علمی</a>
    </div>
    <div>
      <h3>ارتباط علمی</h3>
      <a href={`tel:${site.phone}`} dir="ltr">{site.phone}</a>
      <a href={`mailto:${site.email}`}>{site.email}</a>
      <a href="/contact/">تماس با زتامد</a>
      <a class="clinic-link" href={clinicHref(clinic.routes.contact, 'zetamed_footer_contact')} rel="external">خدمات بالینی در 4B Clinic ↗</a>
    </div>
  </div>
  <div class="container bottom"><span>© ZetaMed</span><span>مرجع علمی مستقل؛ خدمات بالینی از طریق 4B Clinic</span></div>
</footer>

<style>
  footer{margin-top:7rem;border-top:1px solid rgba(255,255,255,.06);background:linear-gradient(180deg,#09090a,#050506);padding:0 0 1.6rem}
  .clinic-bridge{transform:translateY(-50%);display:flex;align-items:center;justify-content:space-between;gap:2rem;padding:1.7rem 1.8rem;border:1px solid rgba(231,197,110,.2);border-radius:22px;background:radial-gradient(circle at 13% 20%,rgba(220,176,75,.1),transparent 36%),#0c0c0e;box-shadow:0 25px 70px rgba(0,0,0,.28)}
  .clinic-bridge small{color:var(--gold-1);font-size:.66rem;letter-spacing:.08em}.clinic-bridge h2{font-size:1.2rem;margin:.35rem 0}.clinic-bridge p{margin:0;color:#858179;font-size:.78rem;line-height:1.8}.clinic-bridge>a{margin:0;white-space:nowrap;padding:.75rem 1rem;border-radius:999px;background:var(--gold-1);color:#100e09;font-weight:650}
  .grid{display:grid;grid-template-columns:2fr repeat(3,1fr);gap:3rem;padding-top:1rem}.lead p{max-width:36rem;color:var(--muted);line-height:2;margin-top:1.7rem}
  h3{font-size:.82rem;color:var(--gold-1);font-weight:500;margin:0 0 1.1rem;letter-spacing:.04em}a{display:block;color:#9e9a92;text-decoration:none;font-size:.86rem;margin:.7rem 0}a:hover{color:#fff}.clinic-link{color:#d9bb70}
  .bottom{display:flex;justify-content:space-between;margin-top:3.6rem;padding-top:1.2rem;border-top:1px solid rgba(255,255,255,.045);color:#696762;font-size:.72rem}
  @media(max-width:850px){.clinic-bridge{transform:translateY(-35%);align-items:flex-start;flex-direction:column}.clinic-bridge>a{width:100%;text-align:center}.grid{grid-template-columns:1fr 1fr}.lead{grid-column:1/-1}}
  @media(max-width:520px){.clinic-bridge{transform:translateY(-22%)}.grid{grid-template-columns:1fr}.lead{grid-column:auto}.bottom{gap:1rem;flex-direction:column}}
</style>
