export const site = {
  name: 'ZetaMed',
  faName: 'زتامد',
  title: 'پزشکی سلولی مولکولی',
  phone: '09112989313',
  email: 'info@zetamed.org',
  url: 'https://zetamed.org'
};

export const clinic = {
  name: '4B Clinic',
  faName: 'کلینیک 4B',
  url: 'https://4b-clinic.com',
  routes: {
    home: '/',
    contact: '/contact',
    knee: '/orthopedics/knee',
    shoulder: '/orthopedics/shoulder',
    hair: '/hair',
    skin: '/skin',
    wounds: '/wounds',
    sexualHealth: '/sexual-health',
    technologies: '/technologies',
    bioHarmony: '/bio-harmony'
  }
};

export function clinicHref(path = clinic.routes.home, campaign = 'general') {
  const normalized = path.startsWith('/') ? path : `/${path}`;
  const params = new URLSearchParams({
    utm_source: 'zetamed',
    utm_medium: 'referral',
    utm_campaign: campaign
  });
  return `${clinic.url}${normalized}?${params.toString()}`;
}

export type ClinicRoute = {
  href: string;
  title: string;
  text: string;
  kicker: string;
  campaign: string;
};

export function clinicRouteForContent(item: {
  title?: string;
  path?: string;
  categories?: string[];
  excerptText?: string;
}): ClinicRoute {
  const haystack = [item.title, item.path, ...(item.categories || []), item.excerptText]
    .filter(Boolean)
    .join(' ')
    .toLocaleLowerCase('fa-IR');

  const match = (...terms: string[]) => terms.some((term) => haystack.includes(term.toLocaleLowerCase('fa-IR')));

  if (match('شانه', 'روتاتور', 'shoulder', 'rotator')) {
    return {
      href: clinicHref(clinic.routes.shoulder, 'zetamed_shoulder'),
      title: 'ارزیابی و خدمات شانه در 4B Clinic',
      text: 'برای بررسی بالینی مشکلات شانه و مسیرهای درمانی مرتبط، وارد صفحه تخصصی شانه در 4B Clinic شوید.',
      kicker: 'از دانش به ارزیابی بالینی',
      campaign: 'shoulder'
    };
  }

  if (match('مو', 'ریزش', 'hair', 'alopecia')) {
    return {
      href: clinicHref(clinic.routes.hair, 'zetamed_hair'),
      title: 'ارزیابی ریزش مو در 4B Clinic',
      text: 'برای بررسی علت ریزش مو و مشاهده خدمات بیولوژیک و بازساختی مرتبط، به بخش تخصصی مو در 4B Clinic بروید.',
      kicker: 'خدمات بالینی مو',
      campaign: 'hair'
    };
  }

  if (match('پوست', 'جوانسازی', 'skin', 'rejuvenation')) {
    return {
      href: clinicHref(clinic.routes.skin, 'zetamed_skin'),
      title: 'خدمات جوانسازی پوست در 4B Clinic',
      text: 'برای مشاهده روش‌های بالینی جوانسازی و ارزیابی مناسب بودن درمان‌های تزریقی یا غیرتهاجمی، وارد بخش پوست شوید.',
      kicker: 'خدمات بالینی پوست',
      campaign: 'skin'
    };
  }

  if (match('زخم', 'wound', 'دیابتی', 'diabetic foot')) {
    return {
      href: clinicHref(clinic.routes.wounds, 'zetamed_wounds'),
      title: 'ارزیابی زخم‌های مزمن در 4B Clinic',
      text: 'برای ارزیابی بالینی زخم مزمن و مشاهده خدمات درمانی مرتبط، مستقیماً وارد بخش زخم 4B Clinic شوید.',
      kicker: 'خدمات بالینی زخم',
      campaign: 'wounds'
    };
  }

  if (match('جنسی', 'p-shot', 'o-shot', 'sexual')) {
    return {
      href: clinicHref(clinic.routes.sexualHealth, 'zetamed_sexual_health'),
      title: 'خدمات سلامت جنسی در 4B Clinic',
      text: 'برای آشنایی با ارزیابی و خدمات بالینی مرتبط با سلامت جنسی زنان و مردان، وارد بخش تخصصی 4B Clinic شوید.',
      kicker: 'خدمات بالینی سلامت جنسی',
      campaign: 'sexual-health'
    };
  }

  if (match('acs', 'سرم شرایط', 'platelet lysate', 'پلاکت لیزیت', 'prgf', 'اگزوز', 'exosome', 'svf', 'msc', 'سلول بنیادی', 'هیالورونیک')) {
    return {
      href: clinicHref(clinic.routes.technologies, 'zetamed_technologies'),
      title: 'کاربرد بالینی فناوری‌های بازساختی در 4B Clinic',
      text: 'برای مشاهده فناوری‌ها و فرآورده‌های مورد استفاده در خدمات بالینی 4B Clinic و موارد کاربرد آن‌ها، وارد بخش فناوری‌ها شوید.',
      kicker: 'فناوری و کاربرد بالینی',
      campaign: 'technologies'
    };
  }

  if (match('زانو', 'آرتروز', 'منیسک', 'رباط', 'غضروف', 'knee', 'osteoarthritis', 'orthobiolog')) {
    return {
      href: clinicHref(clinic.routes.knee, 'zetamed_knee'),
      title: 'ارزیابی زانو و آرتروز در 4B Clinic',
      text: 'برای بررسی بالینی درد زانو، آرتروز، آسیب منیسک و مسیرهای درمانی غیرجراحی، وارد صفحه تخصصی زانو شوید.',
      kicker: 'خدمات بالینی ارتوبیولوژی',
      campaign: 'knee'
    };
  }

  return {
    href: clinicHref(clinic.routes.contact, 'zetamed_general_clinical'),
    title: 'برای دریافت خدمات بالینی به 4B Clinic مراجعه کنید',
    text: 'زتامد مرجع علمی و آموزشی است. برای بررسی خدمات قابل ارائه، ارزیابی بالینی و ارتباط با مجموعه درمانی، وارد 4B Clinic شوید.',
    kicker: 'ZetaMed → 4B Clinic',
    campaign: 'general'
  };
}

export const nav = [
  { label: 'صفحه اصلی', href: '/' },
  { label: 'حوزه‌های علمی', href: '/#services' },
  { label: 'کتابخانه', href: '/library/' },
  { label: 'تحقیقات', href: '/category/research-underway/' },
  { label: 'اعضای علمی', href: '/category/members/faculty-members/' },
  { label: 'درباره زتامد', href: '/معرفی-سایت/' }
];

export const services = [
  { slug: 'orthobiological', title: 'ارتوبیولوژیک', kicker: 'بازسازی بافت‌های اسکلتی عضلانی', href: '/services/orthobiological/', icon: 'joint', clinicHref: clinicHref(clinic.routes.knee, 'zetamed_service_orthobiology') },
  { slug: 'wound-clinic', title: 'کلینیک زخم', kicker: 'رویکردهای نوین زخم‌های مزمن', href: '/services/wound-clinic/', icon: 'wound', clinicHref: clinicHref(clinic.routes.wounds, 'zetamed_service_wounds') },
  { slug: 'genetics', title: 'ژنتیک', kicker: 'از ژنوم تا پزشکی شخصی', href: '/services/genetics/', icon: 'dna', clinicHref: clinicHref(clinic.routes.contact, 'zetamed_service_genetics') },
  { slug: 'ivf', title: 'IVF و فرزند سالم', kicker: 'ناباروری و تشخیص ژنتیکی', href: '/services/ivf/', icon: 'cell', clinicHref: clinicHref(clinic.routes.contact, 'zetamed_service_ivf') },
  { slug: 'knee-clinic', title: 'درمانگاه زانو', kicker: 'آرتروز، منیسک و رباط', href: '/knee-clinic/', icon: 'knee', clinicHref: clinicHref(clinic.routes.knee, 'zetamed_service_knee') }
];

export const featuredArticles = [
  { title: 'درمان نارسایی زودرس تخمدان (POI) با روش‌های بیولوژیک‌های بازسازی‌کننده', href: '/poi-treatment-regenerative-medicine/', category: 'پزشکی بازساختی' },
  { title: 'درمان اندومتر نازک با روش‌های بیولوژیک بازسازی‌کننده', href: '/درمان-اندومتر-نازک-با-روشهای-بیولوژی/', category: 'IVF' },
  { title: 'تعویض مفصل زانو و اقدامات لازم قبل و بعد از جراحی', href: '/tka/', category: 'درمانگاه زانو' },
  { title: 'درد زانو', href: '/knee-pain/', category: 'درمانگاه زانو' },
  { title: 'مقدمه ای بر پزشکی سلولی مولکولی', href: '/مقدمه-ای-بر-پزشکی-سلولی-مولکولی/', category: 'پزشکی سلولی مولکولی' },
  { title: 'سرم شرایط یافته اتولوگ (ACS)', href: '/5-سرم-شرایط-یافته-اتولوگ-autologous-conditioned-serum/', category: 'ارتوبیولوژیک' }
];
