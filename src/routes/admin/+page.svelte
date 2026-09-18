<script>
  let { data } = $props();

  let configured = $state(data.configured);
  let authenticated = $state(data.authenticated);
  let articles = $state(structuredClone(data.articles || []));
  let selectedIndex = $state(articles.length ? 0 : -1);
  let password = $state('');
  let search = $state('');
  let busy = $state(false);
  let uploadBusy = $state(false);
  let notice = $state('');
  let error = $state('');

  const selected = $derived(selectedIndex >= 0 ? articles[selectedIndex] : null);
  const filtered = $derived(
    articles
      .map((article, index) => ({ article, index }))
      .filter(({ article }) => {
        const q = search.trim().toLowerCase();
        if (!q) return true;
        return [article.title, article.tag, article.slug]
          .filter(Boolean)
          .some((value) => String(value).toLowerCase().includes(q));
      })
  );

  function blankArticle() {
    const id = Date.now();
    return {
      slug: `new-article-${id}`,
      status: 'draft',
      tag: 'مقاله جدید',
      title: 'عنوان مقاله جدید',
      metaTitle: '',
      metaDescription: '',
      excerpt: '',
      image: '/images/services/knee.webp',
      imageAlt: '',
      keywords: [],
      zetaHref: 'https://zetamed.org/blog/',
      zetaLabel: 'مطالعه علمی در Zetamed',
      sections: [
        { heading: 'مقدمه', paragraphs: ['متن این بخش را وارد کنید.'] }
      ],
      faq: [
        ['سؤال رایج', 'پاسخ کوتاه و روشن']
      ],
      updatedAt: new Date().toISOString()
    };
  }

  function addArticle() {
    articles.push(blankArticle());
    selectedIndex = articles.length - 1;
    search = '';
    notice = 'مقاله جدید به‌صورت پیش‌نویس ساخته شد. برای ثبت نهایی «ذخیره تغییرات» را بزنید.';
    error = '';
  }

  function removeArticle() {
    if (!selected) return;
    if (!confirm(`مقاله «${selected.title}» حذف شود؟ این کار پس از ذخیره در GitHub ثبت می‌شود.`)) return;
    articles.splice(selectedIndex, 1);
    selectedIndex = Math.min(selectedIndex, articles.length - 1);
    notice = 'مقاله از فهرست محلی حذف شد. برای ثبت حذف، «ذخیره تغییرات» را بزنید.';
  }

  function addSection() {
    selected?.sections?.push({ heading: 'عنوان بخش جدید', paragraphs: [''] });
  }

  /** @param {number} index */
  function removeSection(index) {
    if (!selected || selected.sections.length <= 1) return;
    selected.sections.splice(index, 1);
  }

  /** @param {number} index @param {number} direction */
  function moveSection(index, direction) {
    if (!selected) return;
    const target = index + direction;
    if (target < 0 || target >= selected.sections.length) return;
    const [item] = selected.sections.splice(index, 1);
    selected.sections.splice(target, 0, item);
  }

  /** @param {{ paragraphs: string[] }} section @param {string} value */
  function updateParagraphs(section, value) {
    section.paragraphs = value
      .split(/\n\s*\n/)
      .map((/** @type {string} */ item) => item.trim())
      .filter(Boolean);
    if (!section.paragraphs.length) section.paragraphs = [''];
  }

  function addFaq() {
    selected?.faq?.push(['سؤال جدید', 'پاسخ']);
  }

  /** @param {number} index */
  function removeFaq(index) {
    selected?.faq?.splice(index, 1);
  }

  /** @param {SubmitEvent} event */
  async function login(event) {
    event.preventDefault();
    busy = true;
    error = '';
    notice = '';
    try {
      const res = await fetch('/admin/api/login', {
        method: 'POST',
        headers: { 'content-type': 'application/json' },
        body: JSON.stringify({ password })
      });
      const body = await res.json();
      if (!res.ok) throw new Error(body.error || 'ورود ناموفق بود.');
      location.reload();
    } catch (e) {
      error = e instanceof Error ? e.message : 'خطا در ورود';
    } finally {
      busy = false;
    }
  }

  async function logout() {
    await fetch('/admin/api/logout', { method: 'POST' });
    location.reload();
  }

  async function saveAll() {
    error = '';
    notice = '';
    if (!selected?.title?.trim() || !selected?.slug?.trim()) {
      error = 'عنوان و Slug مقاله نمی‌توانند خالی باشند.';
      return;
    }
    busy = true;
    try {
      const res = await fetch('/admin/api/articles', {
        method: 'PUT',
        headers: { 'content-type': 'application/json' },
        body: JSON.stringify({ articles })
      });
      const body = await res.json();
      if (!res.ok) throw new Error(body.error || 'ذخیره انجام نشد.');
      notice = body.commit
        ? `ذخیره شد. Commit: ${body.commit.slice(0, 8)} — Deploy خودکار Cloudflare آغاز می‌شود.`
        : body.message || 'ذخیره شد.';
    } catch (e) {
      error = e instanceof Error ? e.message : 'خطا در ذخیره';
    } finally {
      busy = false;
    }
  }

  /** @param {Event & { currentTarget: HTMLInputElement }} event */
  async function uploadImage(event) {
    const file = event.currentTarget.files?.[0];
    if (!file || !selected) return;
    uploadBusy = true;
    error = '';
    try {
      const form = new FormData();
      form.append('file', file);
      form.append('slug', selected.slug);
      const res = await fetch('/admin/api/upload', { method: 'POST', body: form });
      const body = await res.json();
      if (!res.ok) throw new Error(body.error || 'آپلود انجام نشد.');
      selected.image = body.path;
      notice = `تصویر آپلود شد: ${body.path}. برای ثبت مسیر تصویر در مقاله، «ذخیره تغییرات» را بزنید.`;
    } catch (e) {
      error = e instanceof Error ? e.message : 'خطا در آپلود تصویر';
    } finally {
      uploadBusy = false;
      event.currentTarget.value = '';
    }
  }
</script>

<svelte:head>
  <title>مدیریت مقالات | 4B Clinic</title>
  <meta name="robots" content="noindex,nofollow,noarchive" />
</svelte:head>

{#if !configured}
  <main class="auth-shell">
    <section class="setup-card">
      <div class="brand">4B CLINIC • CMS</div>
      <h1>پنل ساخته شده؛ اتصال امن هنوز باید فعال شود.</h1>
      <p>برای اینکه پنل بتواند بدون نمایش توکن در مرورگر به GitHub بنویسد، سه Secret باید در Cloudflare تعریف شوند:</p>
      <code>ADMIN_PASSWORD</code>
      <code>ADMIN_SESSION_SECRET</code>
      <code>GITHUB_ADMIN_TOKEN</code>
      <p class="muted">بعد از تعریف این سه مقدار و Deploy مجدد، همین آدرس <b>/admin</b> به صفحه ورود تبدیل می‌شود.</p>
    </section>
  </main>
{:else if !authenticated}
  <main class="auth-shell">
    <form class="login-card" onsubmit={login}>
      <div class="brand">4B CLINIC • CONTENT MANAGER</div>
      <h1>مدیریت مقالات</h1>
      <p>این بخش عمومی نیست. رمز مدیریت را وارد کنید.</p>
      <label>
        <span>رمز عبور</span>
        <input type="password" bind:value={password} autocomplete="current-password" required />
      </label>
      {#if error}<div class="error">{error}</div>{/if}
      <button type="submit" disabled={busy}>{busy ? 'در حال بررسی…' : 'ورود به پنل'}</button>
    </form>
  </main>
{:else}
  <main class="admin-shell">
    <header class="admin-topbar">
      <div>
        <div class="brand">4B CLINIC • ARTICLE CMS</div>
        <h1>مدیریت مقالات</h1>
      </div>
      <div class="top-actions">
        <a href="/articles" target="_blank" rel="noreferrer">مشاهده سایت ↗</a>
        <button class="ghost" onclick={logout}>خروج</button>
        <button class="save" onclick={saveAll} disabled={busy}>{busy ? 'در حال ذخیره…' : 'ذخیره تغییرات'}</button>
      </div>
    </header>

    {#if notice}<div class="notice">{notice}</div>{/if}
    {#if error}<div class="error global">{error}</div>{/if}

    <div class="workspace">
      <aside class="article-list">
        <div class="list-head">
          <strong>مقالات</strong>
          <button onclick={addArticle}>+ مقاله جدید</button>
        </div>
        <input class="search" placeholder="جست‌وجوی عنوان، تگ یا slug…" bind:value={search} />
        <div class="list-scroll">
          {#each filtered as item}
            <button class:active={item.index === selectedIndex} class="article-item" onclick={() => selectedIndex = item.index}>
              <span class:published={item.article.status !== 'draft'} class="status-dot"></span>
              <div>
                <b>{item.article.title}</b>
                <small>{item.article.status === 'draft' ? 'پیش‌نویس' : 'منتشرشده'} • {item.article.tag}</small>
              </div>
            </button>
          {/each}
        </div>
      </aside>

      <section class="editor">
        {#if selected}
          <div class="editor-head">
            <div>
              <span class="state" class:live={selected.status !== 'draft'}>{selected.status === 'draft' ? 'پیش‌نویس' : 'منتشرشده'}</span>
              <h2>{selected.title}</h2>
            </div>
            <div class="editor-actions">
              {#if selected.status !== 'draft'}<a href={`/articles/${selected.slug}`} target="_blank" rel="noreferrer">پیش‌نمایش ↗</a>{/if}
              <button class="danger" onclick={removeArticle}>حذف مقاله</button>
            </div>
          </div>

          <section class="panel">
            <div class="panel-title"><span>01</span><div><h3>اطلاعات اصلی</h3><p>عنوان، آدرس صفحه، وضعیت انتشار و خلاصه کارت مقاله</p></div></div>
            <div class="form-grid two">
              <label class="wide"><span>عنوان مقاله</span><input bind:value={selected.title} /></label>
              <label><span>وضعیت</span><select bind:value={selected.status}><option value="draft">پیش‌نویس</option><option value="published">منتشرشده</option></select></label>
              <label><span>دسته / Tag</span><input bind:value={selected.tag} /></label>
              <label class="wide"><span>Slug انگلیسی</span><div class="slug-wrap"><span>/articles/</span><input dir="ltr" bind:value={selected.slug} /></div></label>
              <label class="wide"><span>خلاصه مقاله</span><textarea rows="4" bind:value={selected.excerpt}></textarea></label>
            </div>
          </section>

          <section class="panel">
            <div class="panel-title"><span>02</span><div><h3>تصویر مقاله</h3><p>WEBP، JPG یا PNG؛ حداکثر ۵ مگابایت</p></div></div>
            <div class="image-manager">
              <div class="image-preview"><img src={selected.image} alt={selected.imageAlt || ''} /></div>
              <div class="image-fields">
                <label><span>مسیر تصویر</span><input dir="ltr" bind:value={selected.image} /></label>
                <label><span>Alt تصویر برای SEO و دسترس‌پذیری</span><input bind:value={selected.imageAlt} /></label>
                <label class="upload-button">
                  <span>{uploadBusy ? 'در حال آپلود…' : 'آپلود تصویر جدید'}</span>
                  <input type="file" accept="image/webp,image/jpeg,image/png" onchange={uploadImage} disabled={uploadBusy} />
                </label>
              </div>
            </div>
          </section>

          <section class="panel">
            <div class="panel-title"><span>03</span><div><h3>SEO گوگل</h3><p>عنوان و توضیح نتیجه جست‌وجو و عبارت‌های هدف</p></div></div>
            <div class="form-grid">
              <label><span>SEO Title</span><input bind:value={selected.metaTitle} /><small>{selected.metaTitle?.length || 0} کاراکتر</small></label>
              <label><span>Meta Description</span><textarea rows="3" bind:value={selected.metaDescription}></textarea><small>{selected.metaDescription?.length || 0} کاراکتر</small></label>
              <label><span>عبارت‌های جست‌وجوی هدف، با ویرگول جدا شوند</span><textarea rows="3" value={(selected.keywords || []).join('، ')} oninput={(e) => selected.keywords = e.currentTarget.value.split(/[،,]/).map((x) => x.trim()).filter(Boolean)}></textarea></label>
            </div>
          </section>

          <section class="panel">
            <div class="panel-title"><span>04</span><div><h3>لینک علمی Zetamed</h3><p>این ساختار در تمام مقالات 4B حفظ می‌شود.</p></div></div>
            <div class="form-grid two">
              <label><span>آدرس Zetamed</span><input dir="ltr" bind:value={selected.zetaHref} /></label>
              <label><span>متن دکمه</span><input bind:value={selected.zetaLabel} /></label>
            </div>
          </section>

          <section class="panel">
            <div class="panel-title row">
              <div><span>05</span><div><h3>متن مقاله</h3><p>هر بخش H2 مستقل دارد؛ پاراگراف‌ها را با یک خط خالی از هم جدا کنید.</p></div></div>
              <button onclick={addSection}>+ افزودن بخش</button>
            </div>

            <div class="sections">
              {#each selected.sections as section, i}
                <article class="section-editor">
                  <div class="section-toolbar">
                    <b>بخش {i + 1}</b>
                    <div>
                      <button onclick={() => moveSection(i, -1)} disabled={i === 0}>↑</button>
                      <button onclick={() => moveSection(i, 1)} disabled={i === selected.sections.length - 1}>↓</button>
                      <button class="danger-text" onclick={() => removeSection(i)} disabled={selected.sections.length <= 1}>حذف</button>
                    </div>
                  </div>
                  <label><span>عنوان بخش</span><input bind:value={section.heading} /></label>
                  <label><span>پاراگراف‌ها</span><textarea rows="10" value={(section.paragraphs || []).join('\n\n')} oninput={(e) => updateParagraphs(section, e.currentTarget.value)}></textarea></label>
                </article>
              {/each}
            </div>
          </section>

          <section class="panel">
            <div class="panel-title row">
              <div><span>06</span><div><h3>سؤالات رایج</h3><p>برای خوانایی بیمار و پوشش سؤال‌های پرتکرار جست‌وجو</p></div></div>
              <button onclick={addFaq}>+ افزودن سؤال</button>
            </div>
            <div class="faq-list">
              {#each selected.faq as item, i}
                <article>
                  <label><span>سؤال</span><input bind:value={item[0]} /></label>
                  <label><span>پاسخ</span><textarea rows="3" bind:value={item[1]}></textarea></label>
                  <button class="danger-text" onclick={() => removeFaq(i)}>حذف سؤال</button>
                </article>
              {/each}
            </div>
          </section>

          <div class="sticky-save">
            <span>{selected.status === 'draft' ? 'این مقاله در سایت عمومی نمایش داده نمی‌شود.' : 'این مقاله پس از Deploy در سایت عمومی نمایش داده می‌شود.'}</span>
            <button onclick={saveAll} disabled={busy}>{busy ? 'در حال ذخیره…' : 'ذخیره تغییرات در GitHub'}</button>
          </div>
        {:else}
          <div class="empty">مقاله‌ای انتخاب نشده است.</div>
        {/if}
      </section>
    </div>
  </main>
{/if}

<style>
  :global(body){background:#eef1ee}.brand{font-size:10px;letter-spacing:.16em;color:#a47b38;font-weight:900}.auth-shell{min-height:100vh;display:grid;place-items:center;padding:30px;background:radial-gradient(circle at 70% 20%,#173d55,#07172b 60%)}.login-card,.setup-card{width:min(520px,100%);padding:38px;border-radius:28px;background:#fff;box-shadow:0 30px 100px rgba(0,0,0,.28)}.login-card h1,.setup-card h1{font-size:34px;margin:12px 0}.login-card p,.setup-card p{color:#65717b}.login-card label,.form-grid label,.image-fields label,.section-editor label,.faq-list label{display:grid;gap:7px}.login-card label span,.form-grid label>span,.image-fields label>span,.section-editor label>span,.faq-list label>span{font-size:11px;font-weight:900;color:#45535d}.login-card input,.form-grid input,.form-grid textarea,.form-grid select,.image-fields input,.section-editor input,.section-editor textarea,.faq-list input,.faq-list textarea,.search{width:100%;border:1px solid #d5dcd8;border-radius:12px;background:#fff;padding:11px 12px;font:inherit;color:#182c36;outline:none}.login-card input:focus,.form-grid input:focus,.form-grid textarea:focus,.image-fields input:focus,.section-editor input:focus,.section-editor textarea:focus,.faq-list input:focus,.faq-list textarea:focus,.search:focus{border-color:#a9874e;box-shadow:0 0 0 3px rgba(169,135,78,.1)}.login-card button,.save,.sticky-save button{margin-top:22px;width:100%;border:0;border-radius:999px;padding:13px 18px;background:#b58d48;color:#fff;font-weight:900;cursor:pointer}.setup-card code{display:block;margin:8px 0;padding:10px 12px;background:#f3f4f1;border-radius:9px;color:#0b2a35}.muted{font-size:13px}.error{margin-top:14px;padding:12px 14px;border-radius:12px;background:#fff0f0;color:#9b2f2f;border:1px solid #f0cccc;font-size:13px}.admin-shell{min-height:100vh}.admin-topbar{position:sticky;top:0;z-index:30;padding:16px 26px;display:flex;align-items:center;justify-content:space-between;gap:20px;background:rgba(7,23,43,.96);backdrop-filter:blur(15px);color:#fff;border-bottom:1px solid rgba(255,255,255,.1)}.admin-topbar h1{font-size:22px;margin:4px 0 0}.top-actions{display:flex;gap:8px;align-items:center}.top-actions a,.top-actions button,.list-head button,.panel-title button,.editor-actions a,.editor-actions button,.section-toolbar button{border:1px solid #d3d9d5;border-radius:999px;padding:8px 13px;background:#fff;color:#1b313c;text-decoration:none;font-size:11px;font-weight:900;cursor:pointer}.top-actions .save{width:auto;margin:0;background:#b58d48;color:#fff;border-color:#b58d48}.top-actions .ghost{background:transparent;color:#fff;border-color:#526679}.notice,.global{margin:14px 26px 0;padding:12px 14px;border-radius:12px}.notice{background:#edf7ee;border:1px solid #cce4ce;color:#38643e;font-size:13px}.global{background:#fff0f0}.workspace{display:grid;grid-template-columns:310px minmax(0,1fr);gap:0;max-width:1700px;margin:16px auto 0;padding:0 18px 40px}.article-list{position:sticky;top:96px;height:calc(100vh - 116px);border:1px solid #dce2de;border-radius:20px 0 0 20px;background:#f8f9f7;overflow:hidden;display:flex;flex-direction:column}.list-head{display:flex;justify-content:space-between;align-items:center;padding:17px;border-bottom:1px solid #e1e5e2}.list-head button{color:#775924;border-color:#d7c499}.search{margin:12px;width:calc(100% - 24px);font-size:12px}.list-scroll{overflow:auto;padding:0 8px 12px}.article-item{width:100%;display:grid;grid-template-columns:10px 1fr;gap:10px;text-align:right;align-items:start;padding:12px;border:0;border-radius:13px;background:transparent;cursor:pointer}.article-item:hover,.article-item.active{background:#e9eeea}.article-item b{display:block;font-size:12px;line-height:1.55}.article-item small{display:block;color:#77828a;font-size:9px;margin-top:3px}.status-dot{width:8px;height:8px;border-radius:50%;background:#c0a66c;margin-top:5px}.status-dot.published{background:#4d9a64}.editor{background:#fff;border:1px solid #dce2de;border-right:0;border-radius:0 20px 20px 0;padding:clamp(18px,3vw,36px);min-width:0}.editor-head{display:flex;justify-content:space-between;align-items:flex-start;gap:20px;padding-bottom:26px;border-bottom:1px solid #e1e5e2}.editor-head h2{font-size:clamp(24px,3vw,38px);margin:8px 0 0}.state{display:inline-flex;padding:5px 9px;border-radius:999px;background:#f2e8ce;color:#7f6028;font-size:9px;font-weight:900}.state.live{background:#e7f2e9;color:#3d754b}.editor-actions{display:flex;gap:7px;flex-wrap:wrap;justify-content:flex-end}.editor-actions .danger{color:#a33e3e;border-color:#e6c6c6}.panel{margin-top:24px;padding:24px;border:1px solid #e0e5e1;border-radius:20px;background:#fbfcfa}.panel-title{display:flex;gap:13px;align-items:flex-start;margin-bottom:22px}.panel-title.row{justify-content:space-between}.panel-title.row>div{display:flex;gap:13px}.panel-title>span,.panel-title.row>div>span{color:#9c7532;font-size:10px;font-weight:900}.panel-title h3{font-size:19px;margin:0}.panel-title p{font-size:11px;color:#78838a;margin:4px 0 0}.form-grid{display:grid;gap:15px}.form-grid.two{grid-template-columns:1fr 1fr}.form-grid .wide{grid-column:1/-1}.form-grid small{font-size:9px;color:#8a949a}.slug-wrap{display:flex;align-items:center;border:1px solid #d5dcd8;border-radius:12px;background:#f3f5f2;overflow:hidden;direction:ltr}.slug-wrap span{font-size:11px;color:#718087;padding-left:12px}.slug-wrap input{border:0;border-radius:0;background:#fff}.image-manager{display:grid;grid-template-columns:280px 1fr;gap:22px}.image-preview{border-radius:18px;overflow:hidden;background:#0a2230;align-self:start}.image-preview img{width:100%;aspect-ratio:16/10;object-fit:cover;display:block}.image-fields{display:grid;gap:13px}.upload-button{border:1px dashed #c2ab7d;border-radius:13px;padding:12px;cursor:pointer;color:#795a25;background:#fffaf1;text-align:center}.upload-button input{display:none}.sections{display:grid;gap:16px}.section-editor,.faq-list article{padding:18px;border:1px solid #e2e6e3;border-radius:16px;background:#fff}.section-editor{display:grid;gap:13px}.section-toolbar{display:flex;align-items:center;justify-content:space-between;gap:12px}.section-toolbar>div{display:flex;gap:5px}.section-toolbar button{padding:5px 9px}.section-toolbar .danger-text,.danger-text{color:#a34646;border:0;background:transparent;padding:5px;cursor:pointer;font-weight:900;font-size:10px}.faq-list{display:grid;gap:12px}.faq-list article{display:grid;gap:12px}.sticky-save{position:sticky;bottom:12px;margin-top:26px;padding:14px 16px;border-radius:18px;background:rgba(7,23,43,.96);backdrop-filter:blur(15px);color:#d6e0e6;display:flex;align-items:center;justify-content:space-between;gap:18px;box-shadow:0 20px 50px rgba(7,23,43,.24)}.sticky-save span{font-size:11px}.sticky-save button{width:auto;margin:0;flex:none}.empty{padding:70px;text-align:center;color:#849098}
  @media(max-width:1000px){.workspace{grid-template-columns:1fr}.article-list{position:relative;top:auto;height:auto;max-height:380px;border-radius:20px 20px 0 0}.editor{border:1px solid #dce2de;border-top:0;border-radius:0 0 20px 20px}.image-manager{grid-template-columns:1fr}.image-preview{max-width:500px}.form-grid.two{grid-template-columns:1fr}.admin-topbar{align-items:flex-start}.top-actions{flex-wrap:wrap;justify-content:flex-end}}
  @media(max-width:680px){.admin-topbar{position:relative;flex-direction:column;padding:16px}.top-actions{width:100%;display:grid;grid-template-columns:1fr 1fr}.top-actions .save{grid-column:1/-1}.workspace{padding:0 10px 30px;margin-top:10px}.editor{padding:14px}.panel{padding:17px}.editor-head{flex-direction:column}.editor-actions{justify-content:flex-start}.panel-title.row{align-items:flex-start;flex-direction:column}.sticky-save{align-items:stretch;flex-direction:column}.sticky-save button{width:100%}}
</style>
