// Shared design system + layout for Brett Herring — Lane County, Oregon.
// Look: high-contrast athletic editorial. Black, bone white, one green (#80bf42).
// Heavy condensed display type, hairline rules, full-bleed color photography.
// Deliberately NOT the cream/serif look — this is the gym, not the parlor.

export const SITE = 'https://bannisterderik-tech.github.io/brett-herring-website';
export const BRAND = 'Brett Herring';
export const PHONE = '541-968-9422';
export const PHONE_TEL = '5419689422';
export const EMAIL = 'brett@theoperativegroup.com';
export const IG = 'https://www.instagram.com/youreugenerealtorbrett/';
export const TEAM = 'The Operative Group';
export const BROKERAGE = 'Real Broker, LLC';

export const esc = (s) => String(s)
  .replaceAll('&', '&amp;').replaceAll('<', '&lt;').replaceAll('>', '&gt;')
  .replaceAll('"', '&quot;');

// ---------------------------------------------------------------- CSS
export const css = /* css */`
:root{
  --ink:#0B0B0C; --ink2:#3F4145; --ink3:#6E7176;
  --bone:#F6F6F3; --bone2:#EDEDE8; --card:#FFFFFF; --line:#DFDFD9;
  --green:#80bf42; --green-d:#5F9430; --green-l:#9BD35E; --green-wash:#F0F7E6;
  --black:#0B0B0C; --black2:#151517; --on-black:#F6F6F3; --on-black2:#A7ABA6;
  --r:4px; --rl:10px;
  --fd:'Archivo',-apple-system,system-ui,sans-serif;
  --fb:'Inter',-apple-system,system-ui,sans-serif;
  --fm:'JetBrains Mono',ui-monospace,monospace;
}
*{margin:0;padding:0;box-sizing:border-box}
html{scroll-behavior:smooth}
body{background:var(--bone);color:var(--ink);font-family:var(--fb);font-size:1.05rem;
  line-height:1.65;-webkit-font-smoothing:antialiased;overflow-x:hidden}
img{max-width:100%;display:block}
a{color:var(--green-d);text-decoration:none}
a:hover{color:var(--ink)}
h1,h2,h3,h4{font-family:var(--fd);font-weight:800;line-height:1.02;letter-spacing:-.028em;text-wrap:balance}
h1{font-size:clamp(2.7rem,7vw,5.4rem);text-transform:uppercase}
h2{font-size:clamp(1.95rem,4vw,3.2rem);text-transform:uppercase}
h3{font-size:clamp(1.15rem,1.9vw,1.42rem);letter-spacing:-.015em}
em{font-style:normal;color:var(--green-d)}
.wrap{max-width:1240px;margin:0 auto;padding:0 clamp(1.1rem,4vw,2.4rem)}
section{padding:clamp(3.4rem,7.5vw,6.2rem) 0;position:relative}
.eyebrow{font-family:var(--fm);font-weight:600;font-size:.73rem;letter-spacing:.22em;
  text-transform:uppercase;color:var(--ink3);display:flex;align-items:center;gap:.65rem}
.eyebrow::before{content:'';width:9px;height:9px;background:var(--green);flex-shrink:0}

/* ---- nav ---- */
.nav{position:sticky;top:0;z-index:100;background:rgba(11,11,12,.94);backdrop-filter:blur(12px);
  border-bottom:1px solid rgba(255,255,255,.1)}
.nav-in{max-width:1400px;margin:0 auto;padding:.7rem clamp(1rem,3vw,2rem);display:flex;align-items:center;gap:1.4rem}
.logo{display:flex;align-items:center;gap:.7rem;flex-shrink:0;color:var(--on-black)}
.logo:hover{color:var(--on-black)}
.logo img{width:42px;height:42px;border-radius:50%;object-fit:cover;object-position:center top;
  border:2px solid var(--green);flex-shrink:0}
.logo-t{font-family:var(--fd);font-weight:800;font-size:1.06rem;letter-spacing:-.01em;text-transform:uppercase;line-height:1.05}
.logo-t span{display:block;font-family:var(--fm);font-weight:400;font-size:.6rem;letter-spacing:.16em;
  color:var(--on-black2);text-transform:uppercase;margin-top:2px}
.nav-links{display:flex;gap:1.25rem;margin-left:auto;align-items:center;flex-wrap:wrap}
.nav-links a{color:var(--on-black);font-weight:600;font-size:.9rem;letter-spacing:.01em}
.nav-links a:hover,.nav-links a[aria-current]{color:var(--green-l)}
.nav-burger{display:none;margin-left:auto;background:none;border:none;font-size:1.6rem;color:var(--on-black);cursor:pointer}
@media(max-width:1040px){
  .nav-links{display:none;position:absolute;top:100%;left:0;right:0;background:var(--black);
    flex-direction:column;align-items:flex-start;padding:1.1rem 1.5rem 1.5rem;gap:.95rem;border-bottom:1px solid rgba(255,255,255,.12)}
  .nav-links.open{display:flex}
  .nav-burger{display:block}
}

/* ---- buttons ---- */
.btn{display:inline-flex;align-items:center;gap:.5rem;background:var(--green);color:#0B0B0C!important;
  font-family:var(--fd);font-weight:800;text-transform:uppercase;letter-spacing:.03em;
  padding:.82rem 1.6rem;border-radius:var(--r);font-size:.92rem;border:none;cursor:pointer;
  transition:transform .16s,background .16s}
.btn:hover{background:var(--green-l);transform:translateY(-2px);color:#0B0B0C!important}
.btn.ghost{background:transparent;color:var(--ink)!important;box-shadow:inset 0 0 0 2px var(--ink)}
.btn.ghost:hover{background:var(--ink);color:var(--bone)!important}
.btn.big{padding:1.05rem 2.1rem;font-size:1.02rem}
.on-dark .btn.ghost,.hero .btn.ghost,.cta .btn.ghost{color:#fff!important;box-shadow:inset 0 0 0 2px rgba(255,255,255,.8)}
.on-dark .btn.ghost:hover,.hero .btn.ghost:hover,.cta .btn.ghost:hover{background:#fff;color:var(--ink)!important}
.cta-row{display:flex;gap:.8rem;margin-top:1.7rem;flex-wrap:wrap}

/* ---- hero ---- */
.hero{position:relative;min-height:min(92vh,860px);display:flex;align-items:flex-end;
  color:#fff;overflow:hidden;padding:0;background:var(--black)}
.hero-bg{position:absolute;inset:0}
.hero-bg img{width:100%;height:100%;object-fit:cover;animation:kb 20s ease-out both}
@keyframes kb{from{transform:scale(1.1)}to{transform:scale(1)}}
.hero::after{content:'';position:absolute;inset:0;
  background:linear-gradient(180deg,rgba(11,11,12,.55) 0%,rgba(11,11,12,.2) 38%,rgba(11,11,12,.92) 100%)}
.hero-in{width:100%;padding:9rem 0 3.2rem;position:relative;z-index:2}
.hero .eyebrow{color:rgba(255,255,255,.7)}
.hero h1{color:#fff;margin:1rem 0 1.1rem;max-width:16ch}
.hero h1 em{color:var(--green-l)}
.hero p{max-width:54ch;font-size:1.13rem;color:rgba(246,246,243,.9)}
.hero-strip{position:absolute;left:0;right:0;bottom:0;height:6px;
  background:linear-gradient(90deg,var(--green) 0 33%,#fff 33% 66%,var(--ink) 66% 100%);z-index:3}

/* ---- page hero ---- */
.phero{background:var(--black);color:var(--on-black);padding:clamp(3.2rem,6.5vw,5rem) 0 clamp(2.6rem,5vw,3.6rem);
  position:relative;overflow:hidden;border-bottom:5px solid var(--green)}
.phero::before{content:'';position:absolute;inset:0;opacity:.5;
  background-image:linear-gradient(rgba(255,255,255,.045) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,.045) 1px,transparent 1px);
  background-size:56px 56px}
.phero>.wrap{position:relative}
.phero h1{color:#fff;max-width:20ch;margin:.85rem 0 1rem;font-size:clamp(2.1rem,5vw,3.9rem)}
.phero h1 em{color:var(--green-l)}
.phero p{max-width:64ch;color:var(--on-black2);font-size:1.08rem}
.phero .eyebrow{color:rgba(255,255,255,.62)}
.crumbs{font-family:var(--fm);font-size:.76rem;color:#7C807C;margin-bottom:1.3rem;letter-spacing:.03em}
.crumbs a{color:#A7ABA6}
.crumbs a:hover{color:var(--green-l)}
.crumbs span{margin:0 .4rem;color:#4B4E4B}

/* ---- ticker ---- */
.ticker{background:var(--green);color:#0B0B0C;overflow:hidden;padding:.85rem 0}
.ticker-track{display:flex;gap:2.2rem;white-space:nowrap;animation:tick 34s linear infinite;width:max-content}
.ticker-track span{font-family:var(--fd);font-weight:800;text-transform:uppercase;font-size:.95rem;letter-spacing:.02em}
.ticker-track b{opacity:.5}
@keyframes tick{to{transform:translateX(-50%)}}

/* ---- grids/cards ---- */
.grid{display:grid;gap:1.3rem}
.g2{grid-template-columns:repeat(auto-fit,minmax(320px,1fr))}
.g3{grid-template-columns:repeat(auto-fit,minmax(285px,1fr))}
.g4{grid-template-columns:repeat(auto-fit,minmax(232px,1fr))}
.card{background:var(--card);border:1px solid var(--line);border-radius:var(--rl);overflow:hidden;
  display:flex;flex-direction:column;transition:transform .2s,box-shadow .2s,border-color .2s}
.card:hover{transform:translateY(-4px);border-color:var(--green);box-shadow:0 16px 34px -20px rgba(11,11,12,.35)}
.card img{height:206px;width:100%;object-fit:cover}
.card-b{padding:1.2rem 1.3rem 1.4rem;display:flex;flex-direction:column;gap:.45rem;flex:1}
.card h3 a{color:var(--ink)}
.card:hover h3 a{color:var(--green-d)}
.card p{color:var(--ink2);font-size:.95rem}
.card .more{margin-top:auto;padding-top:.65rem;font-family:var(--fm);font-weight:600;font-size:.76rem;
  letter-spacing:.12em;text-transform:uppercase;color:var(--green-d)}
.card.rank{position:relative}
.card.rank::before{content:attr(data-rank);position:absolute;top:0;left:0;z-index:2;
  background:var(--green);color:#0B0B0C;font-family:var(--fd);font-weight:800;font-size:.72rem;
  letter-spacing:.1em;padding:.32rem .7rem;text-transform:uppercase}

/* ---- split ---- */
.split{display:grid;grid-template-columns:1fr 1fr;gap:clamp(1.8rem,4.5vw,3.8rem);align-items:center}
@media(max-width:900px){.split{grid-template-columns:1fr}}
.split.wide-l{grid-template-columns:6fr 5fr}
@media(max-width:900px){.split.wide-l{grid-template-columns:1fr}}
.split h2{margin:.8rem 0 1rem}
.split p{color:var(--ink2)}
.split p+p{margin-top:.85rem}
.shot{position:relative;border-radius:var(--rl);overflow:hidden;background:var(--black)}
.shot img{width:100%;height:100%;object-fit:cover}
.shot figcaption{position:absolute;left:0;right:0;bottom:0;padding:2.2rem .95rem .75rem;color:#fff;
  font-family:var(--fm);font-size:.74rem;letter-spacing:.05em;
  background:linear-gradient(transparent,rgba(11,11,12,.88))}
.shot.tall{aspect-ratio:4/5}
.shot.wide{aspect-ratio:4/3}

/* ---- stats ---- */
.stats{display:grid;grid-template-columns:repeat(auto-fit,minmax(140px,1fr));gap:1px;background:var(--line);
  border:1px solid var(--line);margin-top:1.7rem;border-radius:var(--rl);overflow:hidden}
.stats div{background:var(--card);padding:1.15rem 1.05rem}
.stats b{font-family:var(--fd);font-weight:800;font-size:1.7rem;display:block;color:var(--ink);line-height:1.05}
.stats span{font-family:var(--fm);font-size:.7rem;letter-spacing:.09em;text-transform:uppercase;color:var(--ink3);
  display:block;margin-top:.35rem}

/* ---- data table ---- */
table.meta{border-collapse:collapse;width:100%;margin:1.3rem 0;font-size:.95rem}
table.meta td{padding:.62rem .3rem;border-bottom:1px solid var(--line);color:var(--ink2);vertical-align:top}
table.meta tr:first-child td{border-top:1px solid var(--line)}
table.meta td:first-child{font-family:var(--fm);font-size:.75rem;letter-spacing:.07em;text-transform:uppercase;
  color:var(--ink);width:44%;font-weight:500}
.src{font-family:var(--fm);font-size:.68rem;color:var(--ink3);letter-spacing:.03em;display:block;margin-top:.2rem}

/* ---- checks ---- */
.checks{list-style:none;margin:1.1rem 0;display:grid;gap:.62rem}
.checks li{padding-left:1.85rem;position:relative;color:var(--ink2)}
.checks li::before{content:'';position:absolute;left:0;top:.62em;width:11px;height:11px;background:var(--green)}

/* ---- steps ---- */
.steps{counter-reset:s;display:grid;gap:1rem;margin-top:1.6rem}
.step{background:var(--card);border:1px solid var(--line);border-left:4px solid var(--green);
  border-radius:0 var(--rl) var(--rl) 0;padding:1.25rem 1.4rem;counter-increment:s}
.step h3{display:flex;align-items:baseline;gap:.7rem;margin-bottom:.4rem}
.step h3::before{content:counter(s,decimal-leading-zero);font-family:var(--fm);font-size:.82rem;
  color:var(--green-d);font-weight:600;letter-spacing:.06em}
.step p{color:var(--ink2);font-size:.97rem}

/* ---- pills ---- */
.pills{display:flex;flex-wrap:wrap;gap:.5rem}
.pills a{background:var(--card);border:1px solid var(--line);padding:.45rem .95rem;border-radius:99px;
  font-weight:600;font-size:.89rem;color:var(--ink);transition:all .14s}
.pills a:hover{background:var(--ink);border-color:var(--ink);color:#fff}
.pills a.hot{border-color:var(--green);background:var(--green-wash)}
.pills a.hot:hover{background:var(--green);border-color:var(--green);color:#0B0B0C}

/* ---- prose ---- */
.prose{max-width:70ch}
.prose h2{margin:2.5rem 0 .9rem;font-size:clamp(1.5rem,2.6vw,2.05rem)}
.prose h2:first-child{margin-top:0}
.prose h3{margin:1.9rem 0 .6rem}
.prose p{color:#33363A;margin-bottom:1.05rem}
.prose ul{margin:0 0 1.15rem 1.15rem;color:#33363A}
.prose li{margin-bottom:.45rem}
.prose strong{color:var(--ink);font-weight:700}
.prose blockquote{border-left:4px solid var(--green);padding:.3rem 0 .3rem 1.2rem;margin:1.6rem 0;
  font-family:var(--fd);font-weight:600;font-size:1.16rem;line-height:1.4;color:var(--ink)}
.lede{font-size:1.2rem;color:var(--ink)!important;font-weight:500;line-height:1.55}

/* ---- faq ---- */
.faq{max-width:840px}
.faq details{background:var(--card);border:1px solid var(--line);border-radius:var(--rl);margin-bottom:.7rem;overflow:hidden}
.faq details[open]{border-color:var(--green)}
.faq summary{cursor:pointer;padding:1.05rem 1.3rem;font-weight:700;font-size:1rem;list-style:none;
  display:flex;justify-content:space-between;gap:1rem;align-items:center}
.faq summary::-webkit-details-marker{display:none}
.faq summary::after{content:'+';font-family:var(--fd);font-size:1.35rem;color:var(--green-d);flex-shrink:0;transition:transform .2s}
.faq details[open] summary::after{transform:rotate(45deg)}
.faq details p{padding:0 1.3rem 1.15rem;color:var(--ink2)}

/* ---- gallery ---- */
.masonry{columns:3 290px;column-gap:1.1rem}
.masonry figure{margin-bottom:1.1rem;border-radius:var(--rl);overflow:hidden;position:relative;break-inside:avoid;background:var(--black)}
.masonry img{width:100%;transition:transform .5s}
.masonry figure:hover img{transform:scale(1.04)}
.masonry figcaption{position:absolute;left:0;right:0;bottom:0;padding:2rem .95rem .75rem;color:#fff;
  font-family:var(--fm);font-size:.73rem;letter-spacing:.04em;background:linear-gradient(transparent,rgba(11,11,12,.88))}

/* ---- quote band ---- */
.quote{background:var(--black);color:#fff;text-align:center}
.quote blockquote{font-family:var(--fd);font-weight:800;text-transform:uppercase;
  font-size:clamp(1.7rem,4.2vw,3.1rem);line-height:1.06;max-width:20ch;margin:0 auto;letter-spacing:-.025em}
.quote blockquote em{color:var(--green-l)}
.quote cite{display:block;margin-top:1.5rem;font-family:var(--fm);font-style:normal;font-size:.76rem;
  letter-spacing:.2em;text-transform:uppercase;color:var(--on-black2)}

/* ---- cta band ---- */
.cta{background:var(--green);color:#0B0B0C;text-align:center}
.cta h2{max-width:19ch;margin:0 auto 1rem;color:#0B0B0C}
.cta h2 em{color:#fff}
.cta p{max-width:56ch;margin:0 auto;color:rgba(11,11,12,.78)}
.cta .cta-row{justify-content:center}
.cta .btn{background:#0B0B0C;color:#fff!important}
.cta .btn:hover{background:#fff;color:#0B0B0C!important}
.cta .btn.ghost{background:transparent;color:#0B0B0C!important;box-shadow:inset 0 0 0 2px #0B0B0C}
.cta .btn.ghost:hover{background:#0B0B0C;color:#fff!important}
.cta .phone-big{display:block;margin-top:1.5rem;font-family:var(--fd);font-weight:800;
  font-size:clamp(1.6rem,4vw,2.5rem);color:#0B0B0C;letter-spacing:-.02em}
.cta .phone-big:hover{color:#fff}

/* ---- footer ---- */
footer{background:var(--black);color:var(--on-black2);padding:3.6rem 0 2rem;font-size:.92rem}
.foot-grid{display:grid;grid-template-columns:1.7fr 1fr 1fr 1fr;gap:2.2rem;margin-bottom:2.4rem}
@media(max-width:900px){.foot-grid{grid-template-columns:1fr 1fr}}
@media(max-width:560px){.foot-grid{grid-template-columns:1fr}}
footer h4{color:#fff;font-family:var(--fd);font-size:.82rem;letter-spacing:.14em;text-transform:uppercase;margin-bottom:.85rem}
footer a{color:var(--on-black2);display:block;padding:.16rem 0}
footer a:hover{color:var(--green-l)}
.foot-brand{display:flex;align-items:center;gap:.65rem;margin-bottom:.75rem}
.foot-brand img{width:44px;height:44px;border-radius:50%;object-fit:cover;object-position:center top;border:2px solid var(--green)}
.foot-brand b{font-family:var(--fd);font-weight:800;font-size:1.12rem;color:#fff;text-transform:uppercase;letter-spacing:-.01em}
.foot-legal{border-top:1px solid rgba(255,255,255,.12);padding-top:1.4rem;font-size:.78rem;color:#71756F;
  display:flex;justify-content:space-between;gap:1rem;flex-wrap:wrap}
.foot-legal a{display:inline;color:#8D918B}
.eho{display:inline-block;width:13px;height:13px;vertical-align:-2px;margin-right:.25rem}

/* ---- misc ---- */
.sec-head{max-width:730px;margin-bottom:2.3rem}
.sec-head h2{margin:.7rem 0 .85rem}
.sec-head p{color:var(--ink2)}
.bone2{background:var(--bone2)}
.dark{background:var(--black);color:var(--on-black)}
.dark h2,.dark h3{color:#fff}
.dark p{color:var(--on-black2)}
.dark .card{background:var(--black2);border-color:rgba(255,255,255,.12)}
.dark .card h3 a{color:#fff}
.dark .card p{color:var(--on-black2)}
.dark table.meta td{border-color:rgba(255,255,255,.14);color:var(--on-black2)}
.dark table.meta td:first-child{color:#fff}
.center{text-align:center}
.center .sec-head{margin-left:auto;margin-right:auto}
.center .eyebrow{justify-content:center}
.mt{margin-top:2rem}
.note{background:var(--green-wash);border-left:4px solid var(--green);padding:1rem 1.2rem;
  border-radius:0 var(--r) var(--r) 0;font-size:.94rem;color:var(--ink2);margin:1.4rem 0}
.note b{color:var(--ink)}
.rv{opacity:0;transform:translateY(14px);transition:opacity .4s ease,transform .4s ease}
.rv.on{opacity:1;transform:none}
@media(prefers-reduced-motion:reduce){
  .rv{opacity:1;transform:none;transition:none}
  .hero-bg img,.ticker-track{animation:none}
}
`;

// ---------------------------------------------------------------- JS
export const js = /* js */`
document.addEventListener('DOMContentLoaded',()=>{
  const io=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting){e.target.classList.add('on');io.unobserve(e.target)}}),{threshold:0,rootMargin:'0px 0px 25% 0px'});
  document.querySelectorAll('.rv').forEach(el=>io.observe(el));
  const fall=()=>document.querySelectorAll('.rv:not(.on)').forEach(el=>{const r=el.getBoundingClientRect();if(r.top<innerHeight*1.3)el.classList.add('on')});
  addEventListener('scroll',fall,{passive:true});setTimeout(fall,250);
  const b=document.querySelector('.nav-burger'),l=document.querySelector('.nav-links');
  if(b)b.addEventListener('click',()=>l.classList.toggle('open'));
});
function askBrett(kind){
  const n=document.getElementById('f-name')?.value||'';
  const p=document.getElementById('f-phone')?.value||'';
  const m=document.getElementById('f-msg')?.value||'';
  const s=encodeURIComponent((kind==='sell'?'Selling':'Buying')+' inquiry from '+n);
  const b=encodeURIComponent('Name: '+n+'\\nPhone: '+p+'\\n\\n'+m);
  location.href='mailto:${EMAIL}?subject='+s+'&body='+b;
}
`;

export const ASSET_V = [...(css + js)].reduce((a, c) => (a * 33 + c.charCodeAt(0)) >>> 0, 5381).toString(36);

// Equal Housing Opportunity mark
export const ehoSvg = `<svg class="eho" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M12 3 2 10h3v9h5v-6h4v6h5v-9h3L12 3Z"/></svg>`;

// ---------------------------------------------------------------- layout
export function page({ path, title, desc, ogImg = 'images/hero-lane-county.jpg', schema = [], body, active = '' }) {
  const canon = SITE + path;
  const depth = path.split('/').length - 2;
  const R = depth <= 0 ? './' : '../'.repeat(depth);
  const navLink = (href, label, key) =>
    `<a href="${R}${href}"${active === key ? ' aria-current="page"' : ''}>${label}</a>`;

  const agentSchema = {
    '@context': 'https://schema.org', '@type': 'RealEstateAgent',
    '@id': SITE + '/#brett',
    name: 'Brett Herring — Lane County Real Estate',
    url: SITE, telephone: '+1-541-968-9422', email: EMAIL,
    image: SITE + '/images/brett.jpg',
    address: { '@type': 'PostalAddress', addressLocality: 'Springfield', addressRegion: 'OR', addressCountry: 'US' },
    areaServed: [
      { '@type': 'AdministrativeArea', name: 'Lane County, Oregon' },
      { '@type': 'City', name: 'Springfield, Oregon' },
      { '@type': 'City', name: 'Eugene, Oregon' },
      { '@type': 'Place', name: 'Thurston, Springfield, Oregon' },
      { '@type': 'Place', name: 'Pleasant Hill, Oregon' },
    ],
    knowsAbout: ['Rural property', 'Acreage', 'First-time home buying', 'Relocation to Lane County', 'Springfield Oregon real estate', 'Wells and septic systems'],
    memberOf: [{ '@type': 'Organization', name: TEAM }, { '@type': 'Organization', name: BROKERAGE }],
    sameAs: [IG],
  };

  const schemas = [agentSchema, ...schema]
    .map(s => `<script type="application/ld+json">${JSON.stringify(s)}</script>`).join('\n');

  return `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>${esc(title)}</title>
<meta name="description" content="${esc(desc)}">
<link rel="canonical" href="${canon}">
<meta property="og:type" content="website">
<meta property="og:site_name" content="Brett Herring — Lane County Real Estate">
<meta property="og:title" content="${esc(title)}">
<meta property="og:description" content="${esc(desc)}">
<meta property="og:image" content="${SITE}/${ogImg}">
<meta property="og:url" content="${canon}">
<meta name="twitter:card" content="summary_large_image">
<meta name="geo.region" content="US-OR">
<meta name="geo.placename" content="Springfield, Oregon">
<link rel="icon" href="data:image/svg+xml,${encodeURIComponent(`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><rect width="32" height="32" fill="#0B0B0C"/><path d="M16 6 5 15h3.4v11h6v-7h3.2v7h6V15H27L16 6Z" fill="#80bf42"/></svg>`)}">
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Archivo:wght@600;700;800;900&family=Inter:wght@400;500;600;700&family=JetBrains+Mono:wght@400;500;600&display=swap" rel="stylesheet">
<link rel="stylesheet" href="${R}assets/style.css?v=${ASSET_V}">
${schemas}
</head>
<body>
<nav class="nav">
  <div class="nav-in">
    <a class="logo" href="${R}index.html">
      <img src="${R}images/brett.jpg" alt="Brett Herring" width="42" height="42">
      <span class="logo-t">Brett Herring<span>${TEAM} · ${BROKERAGE}</span></span>
    </a>
    <button class="nav-burger" aria-label="Menu" aria-expanded="false">☰</button>
    <div class="nav-links">
      ${navLink('buy/index.html', 'Buy', 'buy')}
      ${navLink('sell/index.html', 'Sell', 'sell')}
      ${navLink('areas/index.html', 'Areas', 'areas')}
      ${navLink('services/index.html', 'Specialties', 'services')}
      ${navLink('first-time-buyers/index.html', 'First-Time Buyers', 'ftb')}
      ${navLink('guides/index.html', 'Guides', 'guides')}
      ${navLink('journal/index.html', 'Journal', 'journal')}
      ${navLink('about/index.html', 'About', 'about')}
      <a class="btn" href="tel:${PHONE_TEL}">${PHONE}</a>
    </div>
  </div>
</nav>
${body}
<section class="cta">
  <div class="wrap">
    <h2 class="rv">Let's talk about <em>your move.</em></h2>
    <p class="rv">Buying your first place, selling acreage out east, or landing here from out of state — start with a conversation. No pressure, no script, no disappearing act.</p>
    <div class="cta-row rv">
      <a class="btn big" href="tel:${PHONE_TEL}">Call or text ${PHONE}</a>
      <a class="btn big ghost" href="mailto:${EMAIL}">Email Brett</a>
    </div>
    <a class="phone-big rv" href="tel:${PHONE_TEL}">${PHONE}</a>
  </div>
</section>
<footer>
  <div class="wrap">
    <div class="foot-grid">
      <div>
        <div class="foot-brand"><img src="${R}images/brett.jpg" alt="Brett Herring" width="44" height="44"><b>Brett Herring</b></div>
        <p>Real estate agent serving Springfield, Thurston, Pleasant Hill, Eugene, and all of Lane County, Oregon. ${TEAM} · ${BROKERAGE}.</p>
        <p style="margin-top:.7rem"><a href="tel:${PHONE_TEL}">${PHONE}</a><a href="mailto:${EMAIL}">${EMAIL}</a><a href="${IG}" rel="noopener">Instagram — @youreugenerealtorbrett</a></p>
      </div>
      <div>
        <h4>Top Areas</h4>
        <a href="${R}areas/thurston/index.html">Thurston</a>
        <a href="${R}areas/pleasant-hill/index.html">Pleasant Hill</a>
        <a href="${R}areas/springfield/index.html">Springfield</a>
        <a href="${R}areas/eugene/index.html">Eugene</a>
        <a href="${R}areas/creswell/index.html">Creswell</a>
        <a href="${R}areas/cottage-grove/index.html">Cottage Grove</a>
        <a href="${R}areas/index.html"><b>All areas →</b></a>
      </div>
      <div>
        <h4>Specialties</h4>
        <a href="${R}services/rural-acreage/index.html">Rural &amp; Acreage</a>
        <a href="${R}services/first-time-buyers/index.html">First-Time Buyers</a>
        <a href="${R}services/selling/index.html">Selling</a>
        <a href="${R}services/relocation/index.html">Relocation</a>
        <a href="${R}services/land/index.html">Land &amp; Lots</a>
        <a href="${R}services/index.html"><b>All specialties →</b></a>
      </div>
      <div>
        <h4>Learn</h4>
        <a href="${R}first-time-buyers/index.html">First-Time Buyer Programs</a>
        <a href="${R}guides/index.html">Guides</a>
        <a href="${R}journal/index.html">Journal</a>
        <a href="${R}about/index.html">About Brett</a>
        <a href="${R}contact/index.html">Contact</a>
      </div>
    </div>
    <div class="foot-legal">
      <span>${ehoSvg}© 2026 Brett Herring · Licensed Oregon Real Estate Broker · ${TEAM} · ${BROKERAGE} · Equal Housing Opportunity</span>
      <span>Springfield, Oregon</span>
    </div>
    <div class="foot-legal" style="border-top:none;padding-top:.35rem">
      <span><a href="${R}privacy-policy/index.html">Privacy</a> · <a href="${R}terms-of-service/index.html">Terms</a> · <a href="${R}accessibility/index.html">Accessibility</a> · <a href="${R}fair-housing/index.html">Fair Housing</a> · <a href="${R}photo-credits/index.html">Photo Credits</a> · <a href="${R}sitemap.xml">Sitemap</a></span>
    </div>
  </div>
</footer>
<script src="${R}assets/site.js?v=${ASSET_V}"></script>
</body>
</html>`;
}

// ---------------------------------------------------------------- components
export const ticker = (items) => `
<div class="ticker" aria-hidden="true"><div class="ticker-track">
${[...items, ...items].map(i => `<span>${i}</span><b>/</b>`).join('')}
</div></div>`;

export const faqBlock = (faqs, title = 'Straight answers') => faqs?.length ? `
<section class="bone2"><div class="wrap">
  <div class="sec-head rv"><div class="eyebrow">FAQ</div><h2>${esc(title)}</h2></div>
  <div class="faq">
    ${faqs.map(f => `<details class="rv"><summary>${esc(f.q)}</summary><p>${esc(f.a)}</p></details>`).join('\n')}
  </div>
</div></section>` : '';

export const faqSchema = (faqs) => ({
  '@context': 'https://schema.org', '@type': 'FAQPage',
  mainEntity: faqs.map(f => ({
    '@type': 'Question', name: f.q,
    acceptedAnswer: { '@type': 'Answer', text: f.a },
  })),
});

export const breadcrumbSchema = (items) => ({
  '@context': 'https://schema.org', '@type': 'BreadcrumbList',
  itemListElement: items.map((it, i) => ({
    '@type': 'ListItem', position: i + 1, name: it[0], item: SITE + it[1],
  })),
});

export const crumbs = (R, items) => `<div class="crumbs">${
  items.map((it, i) => i === items.length - 1
    ? `<b>${esc(it[0])}</b>`
    : `<a href="${R}${it[1]}">${esc(it[0])}</a><span>/</span>`).join('')
}</div>`;

/** Data table row with an optional source note (keeps every stat attributable). */
export const dataRow = (label, value, src) =>
  `<tr><td>${esc(label)}</td><td>${esc(value)}${src ? `<span class="src">${esc(src)}</span>` : ''}</td></tr>`;
