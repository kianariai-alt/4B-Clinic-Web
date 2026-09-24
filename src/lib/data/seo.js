import { site } from '$lib/data/site.js';

export const clinicSchema = {
  '@context': 'https://schema.org',
  '@type': 'MedicalClinic',
  '@id': `${site.domain}/#clinic`,
  name: site.name,
  url: site.domain,
  description: site.description,
  slogan: site.sloganFa,
  logo: `${site.domain}/brand/4b-logo-mark-navy.webp`,
  image: `${site.domain}/images/services/knee.webp`,
  telephone: '+982122239702',
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'خیابان شریعتی، بالاتر از مترو قیطریه، بعد از بلوار صبا، کوچه سینا، مجتمع پل رومی ۲، طبقه اول، واحد ۶',
    addressLocality: 'تهران',
    addressRegion: 'تهران',
    addressCountry: 'IR'
  },
  areaServed: [
    { '@type': 'City', name: 'تهران' },
    { '@type': 'Country', name: 'ایران' }
  ],
  contactPoint: [
    {
      '@type': 'ContactPoint',
      telephone: '+982122239702',
      contactType: 'appointments',
      availableLanguage: ['fa']
    },
    {
      '@type': 'ContactPoint',
      telephone: '+989112989313',
      contactType: 'appointments',
      availableLanguage: ['fa']
    }
  ],
  availableService: [
    { '@type': 'MedicalTherapy', name: 'ارزیابی و درمان‌های ارتوبیولوژیک زانو و شانه' },
    { '@type': 'MedicalTherapy', name: 'درمان‌های اتولوگ منتخب برای پوست و مو' },
    { '@type': 'MedicalTherapy', name: 'ارزیابی و مراقبت زخم‌های مزمن' },
    { '@type': 'MedicalTherapy', name: 'ارزیابی سلامت جنسی بانوان و آقایان' }
  ]
};

export const websiteSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  '@id': `${site.domain}/#website`,
  url: site.domain,
  name: site.name,
  description: site.description,
  inLanguage: 'fa-IR',
  publisher: { '@id': `${site.domain}/#clinic` }
};

export const organizationAuthor = {
  '@type': 'Organization',
  '@id': `${site.domain}/#clinic`,
  name: site.name,
  url: site.domain,
  logo: {
    '@type': 'ImageObject',
    url: `${site.domain}/brand/4b-logo-mark-navy.webp`
  }
};


/**
 * Serialize JSON-LD as a complete script tag for Svelte head injection.
 * Escaping "<" prevents accidental script termination while preserving valid JSON.
 * @param {unknown} schema
 */
export function serializeJsonLd(schema) {
  const json = JSON.stringify(schema).replace(/</g, '\\u003c');
  return `<script type="application/ld+json">${json}</script>`;
}


/** Build reusable BreadcrumbList JSON-LD for public routes. */
/** @param {Array<{name: string, path: string}>} items */
export function breadcrumbSchema(items) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: item.path ? `${site.domain}${item.path}` : site.domain
    }))
  };
}

/** Build a conservative WebPage schema for patient-intent guides. */
/** @param {{name: string, description: string, path: string}} guide */
export function patientGuideSchema(guide) {
  const { name, description, path } = guide;
  return {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    '@id': `${site.domain}${path}#webpage`,
    url: `${site.domain}${path}`,
    name,
    description,
    inLanguage: 'fa-IR',
    isPartOf: { '@id': `${site.domain}/#website` },
    publisher: { '@id': `${site.domain}/#clinic` }
  };
}
