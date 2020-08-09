import { c as a, j as e, i as o, e as s, o as t } from './app-2d068019.js'

const l = { class: 'prose prose-sm m-auto text-left' }; const p = s('div', { class: 'text-center' }, [s('div', { 'i-carbon-dicom-overlay': '', 'class': 'text-4xl -mb-6 m-auto' }), s('h3', null, 'About')], -1); const r = e(`<p><a href="https://github.com/antfu/vitesse" target="_blank" rel="noopener">Vitesse</a> is an opinionated <a href="https://github.com/vitejs/vite" target="_blank" rel="noopener">Vite</a> starter template made by <a href="https://github.com/antfu" target="_blank" rel="noopener">@antfu</a> for mocking apps swiftly. With <strong>file-based routing</strong>, <strong>components auto importing</strong>, <strong>markdown support</strong>, I18n, PWA and uses <strong>UnoCSS</strong> for styling and icons.</p><pre hidden></pre><div class="shiki-container language-js"><pre class="shiki shiki-dark vitesse-dark" style="background-color:#121212;" tabindex="0"><code><span class="line"><span style="color:#758575DD;">// syntax highlighting example</span></span>
<span class="line"><span style="color:#CB7676;">function</span><span style="color:#DBD7CAEE;"> </span><span style="color:#80A665;">vitesse</span><span style="color:#666666;">()</span><span style="color:#DBD7CAEE;"> </span><span style="color:#666666;">{</span></span>
<span class="line"><span style="color:#DBD7CAEE;">  </span><span style="color:#CB7676;">const</span><span style="color:#DBD7CAEE;"> </span><span style="color:#BD976A;">foo</span><span style="color:#DBD7CAEE;"> </span><span style="color:#666666;">=</span><span style="color:#DBD7CAEE;"> </span><span style="color:#C98A7D99;">&#39;</span><span style="color:#C98A7D;">bar</span><span style="color:#C98A7D99;">&#39;</span></span>
<span class="line"><span style="color:#DBD7CAEE;">  </span><span style="color:#BD976A;">console</span><span style="color:#666666;">.</span><span style="color:#80A665;">log</span><span style="color:#666666;">(</span><span style="color:#BD976A;">foo</span><span style="color:#666666;">)</span></span>
<span class="line"><span style="color:#666666;">}</span></span>
<span class="line"></span></code></pre><pre class="shiki shiki-light vitesse-light" style="background-color:#ffffff;" tabindex="0"><code><span class="line"><span style="color:#A0ADA0;">// syntax highlighting example</span></span>
<span class="line"><span style="color:#AB5959;">function</span><span style="color:#393A34;"> </span><span style="color:#59873A;">vitesse</span><span style="color:#999999;">()</span><span style="color:#393A34;"> </span><span style="color:#999999;">{</span></span>
<span class="line"><span style="color:#393A34;">  </span><span style="color:#AB5959;">const</span><span style="color:#393A34;"> </span><span style="color:#B07D48;">foo</span><span style="color:#393A34;"> </span><span style="color:#999999;">=</span><span style="color:#393A34;"> </span><span style="color:#B5695999;">&#39;</span><span style="color:#B56959;">bar</span><span style="color:#B5695999;">&#39;</span></span>
<span class="line"><span style="color:#393A34;">  </span><span style="color:#B07D48;">console</span><span style="color:#999999;">.</span><span style="color:#59873A;">log</span><span style="color:#999999;">(</span><span style="color:#B07D48;">foo</span><span style="color:#999999;">)</span></span>
<span class="line"><span style="color:#999999;">}</span></span>
<span class="line"></span></code></pre></div><p>Check out the <a href="https://github.com/antfu/vitesse" target="_blank" rel="noopener">GitHub repo</a> for more details.</p>`, 4); const c = [p, r]; const d = 'About'; const f = [{ property: 'og:title', content: 'About' }, { name: 'twitter:title', content: 'About' }]; const m = { __name: 'about', setup(i, { expose: n }) { return n({ frontmatter: { title: 'About', meta: [{ property: 'og:title', content: 'About' }, { name: 'twitter:title', content: 'About' }] } }), o({ title: 'About', meta: [{ property: 'og:title', content: 'About' }, { name: 'twitter:title', content: 'About' }] }), (u, g) => (t(), a('div', l, c)) } }; export { m as default, f as meta, d as title }
