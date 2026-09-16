<script>
  import '../styles.css';
  import SplashIntro from '$lib/components/SplashIntro.svelte';
  import Header from '$lib/components/Header.svelte';
  import Footer from '$lib/components/Footer.svelte';
  let { children } = $props();
</script>

<SplashIntro />
<Header />
<main>{@render children()}</main>
<Footer />
