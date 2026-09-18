<script>
  import '../styles.css';
  import SplashIntro from '$lib/components/SplashIntro.svelte';
  import Header from '$lib/components/Header.svelte';
  import Footer from '$lib/components/Footer.svelte';
  import { clinicSchema, websiteSchema } from '$lib/data/seo.js';
  let { children } = $props();
</script>

<svelte:head>
  <meta property="og:site_name" content="4B Clinic" />
  <meta property="og:locale" content="fa_IR" />
  <meta name="twitter:card" content="summary_large_image" />
  <script type="application/ld+json">{JSON.stringify([clinicSchema, websiteSchema])}</script>
</svelte:head>

<SplashIntro />
<Header />
<main>{@render children()}</main>
<Footer />
