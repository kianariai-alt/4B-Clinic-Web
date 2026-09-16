<script>
  import { site } from '$lib/data/site.js';
</script>
<footer>
  <div><strong>{site.name}</strong><p>{site.sloganFa}</p></div>
  <div class="links"><a href="/about">درباره ما</a><a href="/contact">تماس و نوبت</a><a href="/articles">مقالات</a><a href="/orthopedics/shoulder">شانه</a></div>
  <div class="social-footer" aria-label="شبکه‌های اجتماعی">
    {#each site.socials as social}
      {#if social.href}<a href={social.href} target="_blank" rel="noreferrer">{social.label}</a>{:else}<span>{social.label}</span>{/if}
    {/each}
  </div>
  <small>© {new Date().getFullYear()} 4B Clinic</small>
</footer>
