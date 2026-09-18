<script>
  import { site } from '$lib/data/site.js';
</script>

<footer class="v2-footer">
  <div class="v2-footer-top">
    <div class="v2-footer-brand">
      <strong>4B Clinic</strong>
      <span>{site.sloganEn}</span>
      <p>{site.sloganFa}</p>
    </div>
    <div class="v2-footer-links">
      <a href="/orthopedics">ارتوپدی و مفاصل</a>
      <a href="/hair">مو</a>
      <a href="/skin">پوست و جوانسازی</a>
      <a href="/wounds">زخم‌های مزمن</a>
      <a href="/sexual-health">سلامت جنسی</a>
      <a href="/doctors">پزشکان همکار</a>
      <a href="/articles">مقالات</a>
      <a href="/contact">تماس و نوبت</a>
      <a href="/editorial-policy">سیاست تحریریه</a>
    </div>
  </div>

  <div class="v2-footer-contact">
    <div class="v2-footer-phones">
      {#each site.contact.phones as phone}
        <a href={phone.href}><small>{phone.label}</small><strong dir="ltr">{phone.display}</strong></a>
      {/each}
    </div>
    <div class="v2-address"><small>آدرس کلینیک</small><p>{site.contact.address}</p></div>
  </div>

  <div class="v2-footer-bottom">
    <div class="v2-socials">
      {#each site.socials as social}
        {#if social.href}<a href={social.href} target="_blank" rel="noreferrer">{social.label}</a>{:else}<span>{social.label}</span>{/if}
      {/each}
    </div>
    <small>© {new Date().getFullYear()} 4B Clinic</small>
  </div>
</footer>

<style>
  .v2-footer{background:#050d17;color:#e6ebef;padding:clamp(48px,7vw,86px) clamp(20px,7vw,110px) 30px}.v2-footer-top{display:grid;grid-template-columns:.75fr 1.25fr;gap:70px;padding-bottom:36px}.v2-footer-brand{display:grid;align-content:start}.v2-footer-brand strong{font-size:32px}.v2-footer-brand span{color:#d4b778;font-size:11px;letter-spacing:.08em;margin-top:3px}.v2-footer-brand p{color:#8f9aa5;margin:14px 0 0}.v2-footer-links{display:grid;grid-template-columns:repeat(2,1fr);gap:8px 24px}.v2-footer-links a{color:#c5ced6;text-decoration:none;padding:7px 0;border-bottom:1px solid #172536;font-size:13px}.v2-footer-links a:hover{color:#d8bd83}.v2-footer-contact{display:grid;grid-template-columns:auto 1fr;gap:34px;padding:24px 0;border-top:1px solid #172536;border-bottom:1px solid #172536}.v2-footer-phones{display:flex;gap:10px;flex-wrap:wrap}.v2-footer-phones a{display:grid;min-width:160px;padding:11px 14px;border:1px solid #24364a;border-radius:14px;text-decoration:none;background:#0a1624}.v2-footer-phones small,.v2-address small{color:#7f8d9a;font-size:10px}.v2-footer-phones strong{color:#ddc28a;font-size:15px;margin-top:2px}.v2-address p{margin:4px 0 0;color:#aeb9c3;max-width:720px;font-size:13px}.v2-footer-bottom{display:flex;justify-content:space-between;align-items:center;gap:20px;padding-top:24px}.v2-socials{display:flex;gap:7px;flex-wrap:wrap}.v2-socials a,.v2-socials span{border:1px solid #24364a;border-radius:999px;padding:4px 10px;color:#93a0ac;font-size:10px;text-decoration:none}.v2-footer-bottom>small{color:#64717d}
  @media(max-width:820px){.v2-footer-top{grid-template-columns:1fr;gap:30px}.v2-footer-contact{grid-template-columns:1fr}.v2-footer-bottom{align-items:flex-start;flex-direction:column}.v2-footer-links{grid-template-columns:1fr 1fr}}
  @media(max-width:520px){.v2-footer-links{grid-template-columns:1fr}.v2-footer-phones{display:grid;grid-template-columns:1fr 1fr}.v2-footer-phones a{min-width:0}}
</style>
