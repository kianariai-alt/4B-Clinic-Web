<script>
  import { browser } from '$app/environment';
  import { afterNavigate } from '$app/navigation';
  import { env } from '$env/dynamic/public';
  import { onMount } from 'svelte';

  const measurementId = env.PUBLIC_GA4_MEASUREMENT_ID || '';

  function initGtag() {
    if (!browser || !measurementId) return;
    window.dataLayer = window.dataLayer || [];
    if (!window.gtag) {
      window.gtag = function (...args) {
        window.dataLayer.push(args);
      };
    }
    if (!window.__fourBGA4Initialized) {
      window.__fourBGA4Initialized = true;
      window.gtag('js', new Date());
      window.gtag('config', measurementId, {
        send_page_view: false
      });
    }
  }

  initGtag();

  afterNavigate(() => {
    if (!browser || !measurementId || !window.gtag) return;
    window.gtag('event', 'page_view', {
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
      script.dataset['4bGa4'] = 'true';
      document.head.appendChild(script);
    }

    const handleClick = (event) => {
      const target = event.target;
      if (!(target instanceof Element) || !window.gtag) return;
      const link = target.closest('a');
      if (!link) return;

      const href = link.getAttribute('href') || '';

      if (href.startsWith('tel:')) {
        window.gtag('event', 'phone_click', {
          event_category: 'conversion',
          link_url: href
        });
        return;
      }

      if (href === '/contact' || href.startsWith('/contact?')) {
        window.gtag('event', 'appointment_click', {
          event_category: 'conversion',
          link_url: '/contact'
        });
        return;
      }

      if (href.includes('wa.me') || href.includes('whatsapp')) {
        window.gtag('event', 'whatsapp_click', {
          event_category: 'conversion'
        });
      }
    };

    document.addEventListener('click', handleClick);
    return () => document.removeEventListener('click', handleClick);
  });
</script>
