<script>
  import { site } from '$lib/data/site.js';
</script>
<footer>
  <div class="footer-brand"><strong>{site.name}</strong><p>{site.sloganFa}</p></div>
  <div class="links"><a href="/about">درباره ما</a><a href="/doctors">پزشکان همکار</a><a href="/contact">تماس و نوبت</a><a href="/articles">مقالات</a><a href="/orthopedics/shoulder">شانه</a></div>
  <div class="footer-contact" aria-label="راه‌های تماس">
    <div class="footer-phones">
      {#each site.contact.phones as phone}
        <a href={phone.href}><span>{phone.label}</span><strong dir="ltr">{phone.display}</strong></a>
      {/each}
    </div>
    <p>{site.contact.address}</p>
  </div>
  <div class="social-footer" aria-label="شبکه‌های اجتماعی">
    {#each site.socials as social}
      {#if social.href}<a href={social.href} target="_blank" rel="noreferrer">{social.label}</a>{:else}<span>{social.label}</span>{/if}
    {/each}
  </div>
  <small>© {new Date().getFullYear()} 4B Clinic</small>
</footer>

<style>
  .footer-contact{grid-column:1/-1;display:grid;grid-template-columns:auto 1fr;gap:26px;align-items:start;padding:18px 0;border-top:1px solid #162335;border-bottom:1px solid #162335}.footer-phones{display:flex;gap:10px;flex-wrap:wrap}.footer-phones a{display:grid;padding:9px 13px;border:1px solid #26384c;border-radius:12px;min-width:150px}.footer-phones span{font-size:10px;color:#8997a5}.footer-phones strong{font-size:14px;color:#d7bf8b}.footer-contact p{margin:0;color:#aeb9c4;max-width:720px;font-size:13px}@media(max-width:760px){.footer-contact{grid-template-columns:1fr}.footer-phones{display:grid;grid-template-columns:1fr 1fr}}@media(max-width:480px){.footer-phones{grid-template-columns:1fr}}
</style>
