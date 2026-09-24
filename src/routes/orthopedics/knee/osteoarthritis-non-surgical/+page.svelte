<script>
import { breadcrumbSchema, patientGuideSchema, serializeJsonLd } from '$lib/data/seo.js';
  const seoBreadcrumb = breadcrumbSchema([{ name: 'خانه', path: '' }, { name: 'زانو', path: '/orthopedics/knee' }, { name: 'درمان غیرجراحی آرتروز زانو', path: '/orthopedics/knee/osteoarthritis-non-surgical' }]);
  const seoPage = patientGuideSchema({ name: 'درمان غیرجراحی آرتروز زانو', description: 'درمان غیرجراحی آرتروز زانو؛ راهنمای بیمارمحور 4B Clinic با رویکرد تشخیص‌محور و شواهد محتاطانه.', path: '/orthopedics/knee/osteoarthritis-non-surgical' });
const sections = [["آرتروز زانو فقط ساییدگی غضروف نیست",["درد آرتروز می‌تواند از غضروف، سینوویوم، استخوان زیرغضروفی، مینیسک و عضلات اطراف مفصل تأثیر بگیرد. به همین دلیل شدت درد همیشه با تصویر رادیولوژی یکسان نیست.","ارزیابی درست باید علاوه بر تصویر، دامنه حرکت، تورم، قدرت عضلات، محور اندام، وزن و سطح فعالیت را در نظر بگیرد."]],["درمان غیرجراحی از کجا شروع می‌شود؟",["برای بسیاری از بیماران، برنامه درمان با آموزش، اصلاح فعالیت، کاهش وزن در صورت نیاز، تمرین درمانی و تقویت عضلات آغاز می‌شود. دارو یا روش‌های کنترل درد نیز بسته به شرایط فرد بررسی می‌شوند.","اگر پاسخ کافی نباشد، پزشک می‌تواند گزینه‌های تزریقی یا ارتوبیولوژیک را بر اساس تشخیص و سطح شواهد بررسی کند."]],["تزریق‌ها و درمان‌های ارتوبیولوژیک",["روش‌هایی مانند PRGF، Platelet Lysate و ACS در بیماران منتخب بررسی می‌شوند. HA نیز در برخی شرایط یک گزینه تزریقی است. این روش‌ها از نظر ترکیب و شواهد یکسان نیستند.","هیچ تزریقی نباید به عنوان تضمین بازسازی کامل غضروف معرفی شود. هدف واقع‌بینانه معمولاً کاهش علائم، بهبود عملکرد و کمک به حفظ فعالیت است."]],["چه زمانی جراحی مطرح می‌شود؟",["آرتروز پیشرفته، تغییر شکل قابل توجه، درد و محدودیت شدید یا شکست درمان‌های مناسب غیرجراحی می‌تواند ارزیابی جراحی را ضروری کند. تلاش برای درمان غیرجراحی نباید باعث تأخیر ناموجه در درمان لازم شود."]]];
</script>

<svelte:head>
  <title>درمان آرتروز زانو بدون جراحی | راهنمای بیمار 4B Clinic</title>
  <meta name="description" content="درمان آرتروز زانو بدون جراحی چگونه انتخاب می‌شود؟ از ورزش و کاهش وزن تا تزریق‌های منتخب و درمان‌های ارتوبیولوژیک؛ راهنمای بیمار 4B Clinic." />
  <link rel="canonical" href="https://4b-clinic.com/orthopedics/knee/osteoarthritis-non-surgical" />
  <meta property="og:url" content="https://4b-clinic.com/orthopedics/knee/osteoarthritis-non-surgical" />
  {@html serializeJsonLd([seoPage, seoBreadcrumb])}
</svelte:head>
<article class="guide">
  <header><a href="/orthopedics/knee">مرکز درمان زانو 4B ←</a><h1>درمان آرتروز زانو بدون جراحی؛ چه گزینه‌هایی داریم؟</h1><p>آرتروز زانو همیشه به معنی جراحی فوری نیست. درمان مناسب به شدت بیماری، علت درد، عملکرد مفصل و شرایط هر بیمار بستگی دارد.</p></header>
  <main>{#each sections as s}<section><h2>{s[0]}</h2>{#each s[1] as p}<p>{p}</p>{/each}</section>{/each}
    <aside><strong>مسیر بعدی</strong><p>انتخاب درمان به معاینه، شدت آسیب، تصویربرداری و هدف بیمار وابسته است.</p><a href="/orthopedics/knee">بررسی مسیر درمان زانو</a><a href="/contact">درخواست ارزیابی</a></aside>
  </main>
</article>
<style>.guide{background:#f7f7f4;color:#17313c;min-height:100vh}.guide header{padding:130px max(22px,8vw) 70px;background:linear-gradient(135deg,#07172b,#12385f);color:white}.guide header a{color:#ddc287;text-decoration:none;font-weight:800}.guide h1{font-size:clamp(38px,6vw,72px);line-height:1.35;max-width:1000px}.guide header p{font-size:18px;line-height:2;max-width:850px;color:#d5dee6}.guide main{max-width:920px;margin:auto;padding:70px 22px}.guide section{margin-bottom:50px}.guide h2{font-size:clamp(26px,4vw,42px)}.guide p{line-height:2.15;color:#45545e}.guide aside{padding:28px;border-radius:24px;background:#fff;border:1px solid #dfe4e1}.guide aside a{display:inline-block;margin:10px 0 0 10px;padding:10px 16px;border-radius:999px;background:#0b2b3a;color:white;text-decoration:none}</style>