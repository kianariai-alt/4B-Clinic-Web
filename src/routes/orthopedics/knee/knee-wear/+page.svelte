<script>
import { breadcrumbSchema, patientGuideSchema, serializeJsonLd } from '$lib/data/seo.js';
  const seoBreadcrumb = breadcrumbSchema([{ name: 'خانه', path: '' }, { name: 'زانو', path: '/orthopedics/knee' }, { name: 'ساییدگی و آرتروز زانو', path: '/orthopedics/knee/knee-wear' }]);
  const seoPage = patientGuideSchema({ name: 'ساییدگی و آرتروز زانو', description: 'ساییدگی و آرتروز زانو؛ راهنمای بیمارمحور 4B Clinic با رویکرد تشخیص‌محور و شواهد محتاطانه.', path: '/orthopedics/knee/knee-wear' });
const sections = [["ساییدگی زانو یعنی چه؟",["در آرتروز، تغییرات می‌توانند غضروف، استخوان زیرغضروفی، سینوویوم و سایر ساختارهای مفصل را درگیر کنند. درد، خشکی، تورم و کاهش تحمل فعالیت از علائم شایع‌اند.","شدت تصویر همیشه شدت علائم را پیش‌بینی نمی‌کند؛ بعضی افراد با تغییرات تصویری زیاد درد کمتری دارند و برعکس."]],["علائم مهم",["درد هنگام راه‌رفتن یا پله، خشکی پس از استراحت، تورم دوره‌ای، کاهش دامنه حرکت و محدودشدن فعالیت می‌توانند دیده شوند. درد ناگهانی شدید یا قفل‌شدن نیاز به بررسی علل دیگر هم دارد."]],["درمان چگونه انتخاب می‌شود؟",["درمان معمولاً مرحله‌ای است: اصلاح عوامل قابل تغییر، تمرین و بازتوانی، کنترل درد و در صورت اندیکاسیون گزینه‌های تزریقی. شدت بیماری و هدف بیمار تعیین می‌کند کدام مرحله منطقی‌تر است.","در 4B روش‌های اتولوگ و ارتوبیولوژیک فقط پس از ارزیابی بیمار و در صورت تناسب با وضعیت مفصل بررسی می‌شوند."]],["آیا ساییدگی زانو قابل برگشت است؟",["وعده بازسازی کامل یک مفصل دچار آرتروز با یک تزریق واقع‌بینانه نیست. درمان می‌تواند بر کاهش علائم، بهبود عملکرد و مدیریت روند بیماری تمرکز کند؛ در مراحل پیشرفته ممکن است جراحی مناسب‌ترین گزینه باشد."]]];
</script>

<svelte:head>
  <title>ساییدگی زانو چیست؟ علائم و درمان | 4B Clinic</title>
  <meta name="description" content="ساییدگی زانو یا آرتروز زانو چیست، چه علائمی دارد و درمان آن چگونه بر اساس شدت بیماری انتخاب می‌شود؟ راهنمای بیمار 4B Clinic." />
  <link rel="canonical" href="https://4b-clinic.com/orthopedics/knee/knee-wear" />
  <meta property="og:url" content="https://4b-clinic.com/orthopedics/knee/knee-wear" />
  {@html serializeJsonLd([seoPage, seoBreadcrumb])}
</svelte:head>
<article class="guide">
  <header><a href="/orthopedics/knee">مرکز درمان زانو 4B ←</a><h1>ساییدگی زانو چیست و چه درمان‌هایی دارد؟</h1><p>«ساییدگی زانو» اصطلاح رایجی برای تغییرات دژنراتیو مفصل است، اما وضعیت واقعی زانو پیچیده‌تر از کم‌شدن فاصله مفصلی در یک عکس است.</p></header>
  <main>{#each sections as s}<section><h2>{s[0]}</h2>{#each s[1] as p}<p>{p}</p>{/each}</section>{/each}
    <aside><strong>مسیر بعدی</strong><p>انتخاب درمان به معاینه، شدت آسیب، تصویربرداری و هدف بیمار وابسته است.</p><a href="/orthopedics/knee">بررسی مسیر درمان زانو</a><a href="/contact">درخواست ارزیابی</a></aside>
  </main>
</article>
<style>.guide{background:#f7f7f4;color:#17313c;min-height:100vh}.guide header{padding:130px max(22px,8vw) 70px;background:linear-gradient(135deg,#07172b,#12385f);color:white}.guide header a{color:#ddc287;text-decoration:none;font-weight:800}.guide h1{font-size:clamp(38px,6vw,72px);line-height:1.35;max-width:1000px}.guide header p{font-size:18px;line-height:2;max-width:850px;color:#d5dee6}.guide main{max-width:920px;margin:auto;padding:70px 22px}.guide section{margin-bottom:50px}.guide h2{font-size:clamp(26px,4vw,42px)}.guide p{line-height:2.15;color:#45545e}.guide aside{padding:28px;border-radius:24px;background:#fff;border:1px solid #dfe4e1}.guide aside a{display:inline-block;margin:10px 0 0 10px;padding:10px 16px;border-radius:999px;background:#0b2b3a;color:white;text-decoration:none}</style>