<script lang="ts">
  import { clinicHref, clinic, type ClinicRoute } from '$lib/data/site';

  let {
    route,
    compact = false,
    eyebrow = 'خدمات بالینی در 4B Clinic'
  }: {
    route?: ClinicRoute;
    compact?: boolean;
    eyebrow?: string;
  } = $props();

  const fallback: ClinicRoute = {
    href: clinicHref(clinic.routes.contact, 'zetamed_general_cta'),
    title: 'برای دریافت خدمات بالینی به 4B Clinic مراجعه کنید',
    text: 'زتامد برای مطالعه و دسترسی به محتوای علمی طراحی شده است. ارزیابی بالینی و خدمات درمانی از طریق 4B Clinic انجام می‌شود.',
    kicker: 'ZetaMed → 4B Clinic',
    campaign: 'general'
  };

  const cta = route || fallback;
</script>

<aside class:compact class="clinic-cta" aria-label="ارجاع به خدمات بالینی 4B Clinic">
  <div class="glow"></div>
  <div class="copy">
    <div class="kicker">{eyebrow}</div>
    <h2>{cta.title}</h2>
    <p>{cta.text}</p>
  </div>
  <a href={cta.href} rel="external">
    <span>ورود به 4B Clinic</span>
    <span class="arrow" aria-hidden="true">↗</span>
  </a>
</aside>

<style>
  .clinic-cta{position:relative;isolation:isolate;overflow:hidden;display:flex;align-items:center;justify-content:space-between;gap:2rem;padding:2rem 2.1rem;border:1px solid rgba(231,197,110,.21);border-radius:24px;background:linear-gradient(135deg,rgba(18,16,12,.98),rgba(9,9,10,.98));box-shadow:0 26px 80px rgba(0,0,0,.28)}
  .glow{position:absolute;z-index:-1;width:300px;height:300px;right:-110px;top:-150px;border-radius:50%;background:radial-gradient(circle,rgba(231,197,110,.17),rgba(231,197,110,.02) 45%,transparent 70%);filter:blur(3px)}
  .copy{max-width:760px}.kicker{font-size:.72rem;color:var(--gold-1);letter-spacing:.04em;margin-bottom:.65rem}.copy h2{font-size:clamp(1.25rem,2.4vw,2rem);font-weight:560;line-height:1.55;margin:0 0 .55rem}.copy p{color:#9f9a8f;line-height:1.95;margin:0;font-size:.88rem}
  a{display:inline-flex;align-items:center;gap:.7rem;white-space:nowrap;padding:.85rem 1.05rem;border-radius:999px;text-decoration:none;color:#0b0a08;background:linear-gradient(120deg,#ba8d30,#efd27c);font-size:.82rem;font-weight:650;box-shadow:0 10px 28px rgba(195,149,51,.12)}a:hover{transform:translateY(-2px)}.arrow{font-size:1rem}
  .compact{padding:1.4rem 1.5rem;border-radius:18px}.compact .copy h2{font-size:1.15rem}.compact .copy p{font-size:.8rem}.compact a{padding:.72rem .9rem}
  @media(max-width:720px){.clinic-cta{align-items:flex-start;flex-direction:column;padding:1.6rem}.clinic-cta a{width:100%;justify-content:center}}
</style>
