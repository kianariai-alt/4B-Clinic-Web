<script>
  import { browser } from '$app/environment';
  import { afterNavigate } from '$app/navigation';
  import { env } from '$env/dynamic/public';
  import { onMount } from 'svelte';

  const measurementId = env.PUBLIC_GA4_MEASUREMENT_ID || '';

  function getGaWindow() {
    return /** @type {any} */ (window);
  }

  function initGtag() {
    if (!browser || !measurementId) return;
    const ga = getGaWindow();
    ga.dataLayer = ga.dataLayer || [];

    if (!ga.gtag) {
      ga.gtag = (...args) => {
        ga.dataLayer.push(args);
      };
    }

    if (!ga.__fourBGA4Initialized) {
      ga.__fourBGA4Initialized = true;
      ga.gtag('js', new Date());
      ga.gtag('config', measurementId, {
        send_page_view: false
      });
    }
  }

  initGtag();

  afterNavigate(() => {
    if (!browser || !measurementId) return;
    const ga = getGaWindow();
    if (!ga.gtag) return;

    ga.gtag('event', 'page_view', {
      page_title: document.title,
      page_location: window.location.origin + window.location.pathname,
      page_path: window.location.pathname
    });
  });

  onMount(() => {
    if (!measurementId) return;

    if (!document.querySelector('script[data-4b-ga4]')) {
      const script = document.createElement('script');
      script.async = true;
      script.src = `https://www.googletagmanager.com/gtag/js?id=${encodeURIComponent(measurementId)}`;
      script.setAttribute('data-4b-ga4', 'true');
      document.head.appendChild(script);
    }

    /** @param {MouseEvent} event */
    function handleClick(event) {
      const target = event.target;
      const ga = getGaWindow();
      if (!(target instanceof Element) || !ga.gtag) return;

      const link = target.closest('a');
      if (!link) return;
      const href = link.getAttribute('href') || '';

      if (href.startsWith('tel:')) {
        ga.gtag('event', 'phone_click', {
          event_category: 'conversion',
          link_url: href
        });
        return;
      }

      if (href === '/contact' || href.startsWith('/contact?')) {
        ga.gtag('event', 'appointment_click', {
          event_category: 'conversion',
          link_url: '/contact'
        });
        return;
      }

      if (href.includes('wa.me') || href.includes('whatsapp')) {
        ga.gtag('event', 'whatsapp_click', {
          event_category: 'conversion'
        });
      }
    }

    document.addEventListener('click', handleClick);
    return () => document.removeEventListener('click', handleClick);
  });
</script>
