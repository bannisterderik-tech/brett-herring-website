// Static site generator for Brett Herring — Lane County, Oregon.
// Usage: node gen/build.mjs  → writes everything into docs/
import { mkdirSync, writeFileSync, readFileSync, existsSync, cpSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';
import {
  SITE, PHONE, PHONE_TEL, EMAIL, IG, TEAM, BROKERAGE,
  esc, css, js, page, ticker, faqBlock, faqSchema, breadcrumbSchema, crumbs, dataRow,
} from './lib/site.mjs';
import { locations } from './data/locations.mjs';
import { services } from './data/services.mjs';
import { guides } from './data/guides.mjs';
import { journal } from './data/journal.mjs';
import { attrs, comboSections } from './data/attrs.mjs';

const ROOT = join(dirname(fileURLToPath(import.meta.url)), '..');
const OUT = join(ROOT, 'docs');
const urls = [];
let count = 0;

function write(path, html) {
  const file = join(OUT, path.replace(/^\//, ''), 'index.html');
  mkdirSync(dirname(file), { recursive: true });
  writeFileSync(file, html);
  urls.push(SITE + path);
  count++;
}

const hash = (s) => [...s].reduce((a, c) => (a * 31 + c.charCodeAt(0)) >>> 0, 7);
const pick = (arr, seed) => arr[hash(seed) % arr.length];
const trunc = (s, n) => (s.length <= n ? s : s.slice(0, s.lastIndexOf(' ', n)) + '…');
const clean = (s) => String(s).replace(/\s+/g, ' ').trim();
// Trim to whole sentences so an intro never ends mid-thought.
const sentences = (s, n) => {
  const parts = String(s).match(/[^.!?]+[.!?]+/g) || [s];
  return parts.slice(0, n).join(' ').trim();
};

const ranked = locations.filter((l) => l.rank).sort((a, b) => a.rank - b.rank);
const rest = locations.filter((l) => !l.rank);
const IMG = (l) => l.img || 'willamette-valley-1.jpg';

// ============================================================ HOME
write('/', page({
  path: '/', active: 'home',
  title: 'Brett Herring | Springfield & Lane County Oregon Real Estate Agent',
  desc: `Real estate in Springfield, Thurston, Pleasant Hill and all of Lane County, Oregon. Rural acreage, first-time buyers, relocation. The Operative Group at Real Broker, LLC. Call or text ${PHONE}.`,
  ogImg: 'images/gen-lane-county-wide.jpg',
  body: `
<header class="hero">
  <div class="hero-bg"><img src="images/gen-lane-county-wide.jpg" alt="Willamette Valley farm country, a small town and the Cascade foothills, Lane County, Oregon" fetchpriority="high"></div>
  <div class="wrap hero-in">
    <div class="eyebrow">Springfield · Thurston · Pleasant Hill · Lane County</div>
    <h1>Straight answers about <em>Lane County</em> real estate.</h1>
    <p>I moved here from Southern California in 2014 and never found a reason to leave. Now I help people buy and sell across Springfield, the east county, and everywhere in between. No script, no pressure, no disappearing after the contract is signed.</p>
    <div class="cta-row">
      <a class="btn big" href="tel:${PHONE_TEL}">Call or text ${PHONE}</a>
      <a class="btn big ghost" href="areas/index.html">Explore the areas</a>
    </div>
  </div>
  <div class="hero-strip"></div>
</header>
${ticker(['Thurston', 'Pleasant Hill', 'Springfield', 'Rural & Acreage', 'First-Time Buyers', 'Relocation', 'Lane County', 'The Operative Group'])}

<section><div class="wrap split wide-l">
  <div class="rv">
    <div class="eyebrow">Where I work hardest</div>
    <h2>Three areas I know <em>street by street.</em></h2>
    <p>I cover all of Lane County, but these three are where I spend the most time, know the most people, and can tell you what a place is actually like instead of reading you the listing description.</p>
    <div class="grid g3 mt">
      ${ranked.map((l) => `<article class="card rank rv" data-rank="No. ${l.rank}"><a href="areas/${l.slug}/index.html"><img src="images/${IMG(l)}" alt="${esc(l.name)}, Lane County, Oregon" loading="lazy"></a>
        <div class="card-b"><h3><a href="areas/${l.slug}/index.html">${esc(l.name)}</a></h3>
        <p>${esc(l.tagline)}</p><span class="more">See ${esc(l.name)} →</span></div></article>`).join('\n')}
    </div>
  </div>
  <div class="rv"><figure class="shot tall"><img src="images/brett-full.jpg" alt="Brett Herring, real estate agent in Springfield, Oregon"><figcaption>Brett Herring · ${TEAM} · ${BROKERAGE}</figcaption></figure></div>
</div></section>

<section class="bone2"><div class="wrap">
  <div class="sec-head rv"><div class="eyebrow">What I do</div>
    <h2>Seven ways I <em>actually help.</em></h2>
    <p>Not a menu of services. Just the situations people call me about, and what I do differently in each one.</p>
  </div>
  <div class="grid g4">
    ${services.map((s) => `<article class="card rv"><a href="services/${s.slug}/index.html"><img src="images/${s.img}" alt="${esc(s.name)} in Lane County, Oregon" loading="lazy"></a>
      <div class="card-b"><h3><a href="services/${s.slug}/index.html">${esc(s.short)}</a></h3>
      <p>${esc(trunc(s.heroLine, 92))}</p><span class="more">Read more →</span></div></article>`).join('\n')}
  </div>
</div></section>

<section class="quote"><div class="wrap">
  <blockquote class="rv">Show up. Do the work. <em>Repeat.</em></blockquote>
  <cite class="rv">It works in the gym and it works here</cite>
</div></section>

<section><div class="wrap split">
  <div class="rv">
    <div class="eyebrow">Every area</div>
    <h2>All of Lane County, <em>not just the easy parts.</em></h2>
    <p>From a starter home in Springfield to forty acres up the Mohawk Valley to a cabin on the McKenzie. ${locations.length} areas, each with its own page, because "Eugene-Springfield" is not a useful answer when you are trying to figure out where to live.</p>
    <div class="pills mt">
      ${locations.map((l) => `<a href="areas/${l.slug}/index.html"${l.rank ? ' class="hot"' : ''}>${esc(l.name)}</a>`).join('\n')}
    </div>
  </div>
  <div class="rv"><figure class="shot wide"><img src="images/willamette-valley-1.jpg" alt="Farm country in the Willamette Valley, Lane County, Oregon" loading="lazy"><figcaption>Valley farm ground, Lane County</figcaption></figure></div>
</div></section>

<section class="bone2"><div class="wrap">
  <div class="sec-head rv"><div class="eyebrow">Free guides</div>
    <h2>Everything I would tell you <em>over coffee.</em></h2>
    <p>Wells, septic, zoning, first-time buyer programs, what an inspection really covers. Written out so you can read it at 11pm when you are actually thinking about it.</p>
  </div>
  <div class="grid g3">
    ${guides.slice(0, 6).map((g) => `<article class="card rv"><a href="guides/${g.slug}/index.html"><img src="images/${g.img}" alt="${esc(g.title)}" loading="lazy"></a>
      <div class="card-b"><h3><a href="guides/${g.slug}/index.html">${esc(g.title)}</a></h3><p>${esc(trunc(g.desc, 110))}</p><span class="more">Read the guide →</span></div></article>`).join('\n')}
  </div>
  <div class="center mt rv"><a class="btn ghost" href="guides/index.html">All ${guides.length} guides</a></div>
</div></section>`,
}));

// ============================================================ ABOUT
write('/about/', page({
  path: '/about/', active: 'about',
  title: 'About Brett Herring | Springfield, Oregon Real Estate Agent',
  desc: `Brett Herring moved to Eugene from Southern California in 2014. Real estate agent with The Operative Group at Real Broker, LLC, serving Springfield, Thurston, Pleasant Hill and Lane County.`,
  ogImg: 'images/brett-full.jpg',
  schema: [breadcrumbSchema([['Home', '/'], ['About', '/about/']])],
  body: `
<div class="phero"><div class="wrap">
  ${crumbs('../', [['Home', 'index.html'], ['About', '']])}
  <div class="eyebrow">About</div>
  <h1>Came for a visit. <em>Stayed for good.</em></h1>
  <p>I am a real estate agent in Springfield, Oregon. Before that I spent my whole career in customer service, which turns out to be most of this job.</p>
</div></div>

<section><div class="wrap split">
  <div class="rv"><figure class="shot tall"><img src="../images/brett-full.jpg" alt="Brett Herring, real estate agent, Springfield Oregon"><figcaption>Brett Herring · ${TEAM} · ${BROKERAGE}</figcaption></figure></div>
  <div class="rv">
    <div class="eyebrow">The short version</div>
    <h2>Southern California to Lane County, <em>2014.</em></h2>
    <p>I moved up from Southern California in 2014 and fell for this place fast. The beauty is the obvious part. The part that actually kept me here is the community, which is a word people throw around until they live somewhere it is true.</p>
    <p>Everything I did before real estate was customer service in one form or another. That sounds like a small thing on a bio page. In practice it is the entire job. Returning calls. Saying the hard thing early. Making sure you never wonder where your deal stands. Most of what goes wrong in a transaction goes wrong because somebody stopped communicating.</p>
    <p>Outside of work I lift, and I spend time with the people closest to me. The gym is where I learned the thing I bring to every client: consistency beats intensity. Nobody hits a personal record on day one. You show up, you do the boring work correctly, and the result takes care of itself. Buying and selling houses is the same game.</p>
    <ul class="checks">
      <li>Real estate agent with ${TEAM} at ${BROKERAGE}</li>
      <li>Based in Springfield, serving all of Lane County</li>
      <li>Rural and acreage property, including wells, septic, and zoning diligence</li>
      <li>First-time buyers and Oregon assistance programs</li>
      <li>Relocation, because I made the same move you are making</li>
    </ul>
    <div class="cta-row"><a class="btn" href="tel:${PHONE_TEL}">Call or text ${PHONE}</a><a class="btn ghost" href="mailto:${EMAIL}">Email me</a></div>
  </div>
</div></section>

<section class="bone2"><div class="wrap">
  <div class="sec-head rv"><div class="eyebrow">How I work</div><h2>Four things you can <em>count on.</em></h2></div>
  <div class="steps">
    <div class="step rv"><h3>You hear from me first</h3><p>You should never have to ask where your transaction stands. If something changed, you find out from me, not from a portal notification at ten at night.</p></div>
    <div class="step rv"><h3>I tell you what I actually think</h3><p>Including when the answer is that this house is a bad idea, or that you should wait a year, or that the repair you want to make is not worth the money. An agent who only ever agrees with you is not working for you.</p></div>
    <div class="step rv"><h3>I do the unglamorous part</h3><p>Well logs. Septic records. Zoning verification. Reading the inspection twice. The stuff that decides whether your purchase is a good one, long after the photos stop mattering.</p></div>
    <div class="step rv"><h3>The relationship outlasts the deal</h3><p>I live here. My reputation in this county is worth more than any single commission, and it shows up in how I treat both sides of every transaction.</p></div>
  </div>
</div></section>
${faqBlock([
  { q: 'What areas does Brett Herring serve?', a: `All of Lane County, Oregon, with the deepest focus on Springfield, the Thurston area on the east end, and Pleasant Hill and the rural communities along Highway 58. That also includes Eugene, Creswell, Cottage Grove, Junction City, Coburg, Veneta, the McKenzie River corridor, and the coast at Florence.` },
  { q: 'What kind of properties does Brett work with?', a: `Everything from first homes in town to rural acreage with wells and septic systems. Rural property, first-time buyers, and relocation are the three areas where the specialized knowledge matters most, so those are where I have put the most work in.` },
  { q: 'How do I get in touch?', a: `Call or text ${PHONE}, or email ${EMAIL}. I answer my own phone. If you get voicemail, I am probably standing in someone's crawlspace and I will call you back.` },
  { q: 'Who is Brett Herring with?', a: `${TEAM}, a Lane County real estate team, at ${BROKERAGE}.` },
], 'About Brett, answered')}`,
}));

// ============================================================ CONTACT
write('/contact/', page({
  path: '/contact/', active: 'contact',
  title: `Contact Brett Herring | Springfield & Lane County Realtor | ${PHONE}`,
  desc: `Call or text ${PHONE}, or email ${EMAIL}. Real estate help across Springfield, Thurston, Pleasant Hill, Eugene and Lane County, Oregon.`,
  schema: [breadcrumbSchema([['Home', '/'], ['Contact', '/contact/']])],
  body: `
<div class="phero"><div class="wrap">
  ${crumbs('../', [['Home', 'index.html'], ['Contact', '']])}
  <div class="eyebrow">Contact</div>
  <h1>Call, text, or email. <em>I answer.</em></h1>
  <p>No call center, no assistant screening you. The person who picks up is the person who will walk the property with you.</p>
</div></div>
<section><div class="wrap split">
  <div class="rv">
    <div class="eyebrow">Direct</div>
    <h2>Reach me <em>here.</em></h2>
    <table class="meta">
      <tr><td>Phone / Text</td><td><a href="tel:${PHONE_TEL}">${PHONE}</a></td></tr>
      <tr><td>Email</td><td><a href="mailto:${EMAIL}">${EMAIL}</a></td></tr>
      <tr><td>Instagram</td><td><a href="${IG}" rel="noopener">@youreugenerealtorbrett</a></td></tr>
      <tr><td>Team</td><td>${TEAM}</td></tr>
      <tr><td>Brokerage</td><td>${BROKERAGE}</td></tr>
      <tr><td>Serving</td><td>Springfield, Eugene &amp; all of Lane County, Oregon</td></tr>
    </table>
    <p>Buying, selling, or just thinking about it a year out. Early conversations are free and they are the most useful ones.</p>
  </div>
  <div class="rv">
    <div class="card"><div class="card-b">
      <h3>Send a note</h3>
      <p style="margin-bottom:.7rem">This opens an email to me with your details filled in.</p>
      <label>Name<br><input id="f-name" style="width:100%;padding:.7rem;border:1px solid var(--line);border-radius:6px;margin:.3rem 0 .9rem;font:inherit"></label>
      <label>Phone<br><input id="f-phone" style="width:100%;padding:.7rem;border:1px solid var(--line);border-radius:6px;margin:.3rem 0 .9rem;font:inherit"></label>
      <label>What are you trying to do?<br><textarea id="f-msg" rows="5" style="width:100%;padding:.7rem;border:1px solid var(--line);border-radius:6px;margin:.3rem 0 1rem;font:inherit"></textarea></label>
      <button class="btn big" onclick="askBrett('buy')" style="width:100%;justify-content:center">Send to Brett</button>
    </div></div>
  </div>
</div></section>`,
}));

// ============================================================ BUY / SELL / FTB hubs
write('/buy/', page({
  path: '/buy/', active: 'buy',
  title: 'Buying a Home in Lane County, Oregon | Brett Herring',
  desc: `Buying a house in Springfield, Thurston, Pleasant Hill or anywhere in Lane County. Straight guidance on lenders, offers, inspections and closing. Call ${PHONE}.`,
  schema: [breadcrumbSchema([['Home', '/'], ['Buy', '/buy/']]), faqSchema(services[0].faqs)],
  body: `
<div class="phero"><div class="wrap">
  ${crumbs('../', [['Home', 'index.html'], ['Buy', '']])}
  <div class="eyebrow">Buying</div>
  <h1>Buy the right house, <em>not the easiest one to find.</em></h1>
  <p>Anyone can email you listings. The job is knowing which ones deserve your Saturday, what the inspection will probably turn up, and what the place two streets over actually closed for.</p>
</div></div>
<section><div class="wrap">
  <div class="sec-head rv"><div class="eyebrow">The process</div><h2>Six steps, <em>no mysteries.</em></h2></div>
  <div class="steps">
    <div class="step rv"><h3>Talk to a lender</h3><p>Before anything else, and it is free. Your real number is almost never the number in your head, and everything downstream depends on it.</p></div>
    <div class="step rv"><h3>Pick the area honestly</h3><p>City lot or acreage. Ten-minute commute or twenty-five. The house is changeable, the location is not. We sort this before we tour.</p></div>
    <div class="step rv"><h3>Tour with intent</h3><p>Three to five good options beats twelve. After the fourth house they blur together anyway.</p></div>
    <div class="step rv"><h3>Write a smart offer</h3><p>Price is one lever. Timeline, terms, earnest money, and a lender who performs are the others, and they win deals more often than people expect.</p></div>
    <div class="step rv"><h3>Inspect everything</h3><p>General inspection always. Sewer scope on older homes. Well and septic on rural property. Knowledge is leverage and it is cheap at the price.</p></div>
    <div class="step rv"><h3>Close and settle in</h3><p>Appraisal, underwriting, walkthrough, keys. Then you get the list of local trades worth calling, which matters more in year one than anyone tells you.</p></div>
  </div>
  <div class="center mt rv"><a class="btn big" href="tel:${PHONE_TEL}">Start with a call · ${PHONE}</a></div>
</div></section>
${faqBlock(services[0].faqs, 'Buyer questions')}`,
}));

write('/sell/', page({
  path: '/sell/', active: 'sell',
  title: 'Selling Your Home in Lane County, Oregon | Brett Herring',
  desc: `Selling a house or acreage in Springfield, Pleasant Hill or Lane County. Free walk-through, prep list, honest pricing. Call ${PHONE}.`,
  schema: [breadcrumbSchema([['Home', '/'], ['Sell', '/sell/']]), faqSchema(services[1].faqs)],
  body: `
<div class="phero"><div class="wrap">
  ${crumbs('../', [['Home', 'index.html'], ['Sell', '']])}
  <div class="eyebrow">Selling</div>
  <h1>Your house gets one first week. <em>Spend it well.</em></h1>
  <p>Prepared, priced right, photographed properly, and it moves. Rushed onto the market to see what happens, and you spend two months chasing it down in price.</p>
</div></div>
<section><div class="wrap">
  <div class="sec-head rv"><div class="eyebrow">The listing system</div><h2>What I do <em>before the sign goes up.</em></h2></div>
  <div class="steps">
    <div class="step rv"><h3>Free walk-through, prioritized list</h3><p>I go through the house and tell you what to fix, what to skip, and what order to do it in. This conversation routinely pays for itself several times over.</p></div>
    <div class="step rv"><h3>Kill the fear items</h3><p>Roof, water heater, electrical, drainage, anything involving water where it should not be. Buyers discount hard for uncertainty and barely notice your backsplash.</p></div>
    <div class="step rv"><h3>Price from real sales</h3><p>Closed comparable sales plus the features that actually move price in your specific area. Not an online estimate, which cannot see your shop, your view, or your septic.</p></div>
    <div class="step rv"><h3>Photograph it properly</h3><p>Almost every buyer sees your house on a screen first and decides in about four seconds. This is not where you save money.</p></div>
    <div class="step rv"><h3>Market to the actual buyer</h3><p>A Springfield starter home and forty acres in Pleasant Hill do not share a buyer. Acreage gets drone coverage, mapped boundaries, and documented water and septic.</p></div>
    <div class="step rv"><h3>Hold it together through inspection</h3><p>This is where most deals die. Sellers who prepared answer with paperwork. Sellers who did not negotiate against a report they are reading for the first time.</p></div>
  </div>
  <div class="center mt rv"><a class="btn big" href="tel:${PHONE_TEL}">Book a free walk-through</a></div>
</div></section>
${faqBlock(services[1].faqs, 'Seller questions')}`,
}));

const ftb = services.find((s) => s.slug === 'first-time-buyers');
write('/first-time-buyers/', page({
  path: '/first-time-buyers/', active: 'ftb',
  title: 'First-Time Home Buyer Programs in Lane County, Oregon | Brett Herring',
  desc: `Oregon bond loans, down payment assistance, homebuyer education and USDA options for first-time buyers in Springfield, Eugene and Lane County. Call ${PHONE}.`,
  schema: [breadcrumbSchema([['Home', '/'], ['First-Time Buyers', '/first-time-buyers/']]), faqSchema(ftb.faqs)],
  body: `
<div class="phero"><div class="wrap">
  ${crumbs('../', [['Home', 'index.html'], ['First-Time Buyers', '']])}
  <div class="eyebrow">First-Time Buyers</div>
  <h1>You probably qualify for <em>more help than you think.</em></h1>
  <p>Oregon runs real programs for first-time buyers. Most renters never find out, because nobody ever walked them through it and they had already decided the answer was no.</p>
</div></div>
<section><div class="wrap">
  <div class="sec-head rv"><div class="eyebrow">What exists</div><h2>The programs, <em>in plain language.</em></h2></div>
  <div class="grid g2">
    <div class="card rv"><div class="card-b"><h3>OHCS Flex Lending</h3><p>Oregon's current state program, through approved local lenders. FirstHome is for first-time buyers; NextStep does not require you to be one at all. Both carry down payment assistance. The older Oregon Bond program that many websites still describe is being phased out.</p></div></div>
    <div class="card rv"><div class="card-b"><h3>Down payment assistance</h3><p>Assistance is attached to Flex Lending, and there is a separate larger program for first-time and first-generation buyers at or below the area median income. In Lane County it is administered by DevNW, which has a Springfield office. Funding cycles change, so ask what is open today.</p></div></div>
    <div class="card rv"><div class="card-b"><h3>Homebuyer education</h3><p>Required by most assistance programs and genuinely useful regardless. A few hours covering escrow, closing costs, and how not to get taken. DevNW runs classes locally and approved online courses also count.</p></div></div>
    <div class="card rv"><div class="card-b"><h3>USDA rural loans</h3><p>Zero down for eligible buyers at eligible addresses, and a lot of Lane County outside the metro core has historically qualified. Check the specific address, not the town name.</p></div></div>
  </div>
  <div class="note rv"><b>Worth saying plainly:</b> program names, funding, and income limits change, and city-level programs in particular go in and out of funding. Everything here is orientation, not a qualification decision, and I am an agent rather than a lender. Confirm current details with a participating lender, with DevNW, or with the program directly before you plan around any of it.</div>
  <div class="center mt rv"><a class="btn big" href="tel:${PHONE_TEL}">Ask me where to start</a></div>
</div></section>
${faqBlock(ftb.faqs, 'First-time buyer questions')}
<section class="bone2"><div class="wrap">
  <div class="sec-head rv"><div class="eyebrow">Go deeper</div><h2>Guides for <em>first-time buyers.</em></h2></div>
  <div class="grid g3">
    ${guides.filter((g) => /first-time|usda|timeline|buying-a-house/.test(g.slug)).map((g) => `<article class="card rv"><a href="../guides/${g.slug}/index.html"><img src="../images/${g.img}" alt="${esc(g.title)}" loading="lazy"></a><div class="card-b"><h3><a href="../guides/${g.slug}/index.html">${esc(g.title)}</a></h3><p>${esc(trunc(g.desc, 100))}</p><span class="more">Read →</span></div></article>`).join('\n')}
  </div>
</div></section>`,
}));

// ============================================================ SERVICES
write('/services/', page({
  path: '/services/', active: 'services',
  title: 'Real Estate Specialties in Lane County, Oregon | Brett Herring',
  desc: 'Rural and acreage, first-time buyers, selling, land, relocation and investment property across Springfield, Pleasant Hill, Eugene and Lane County.',
  schema: [breadcrumbSchema([['Home', '/'], ['Specialties', '/services/']])],
  body: `
<div class="phero"><div class="wrap">
  ${crumbs('../', [['Home', 'index.html'], ['Specialties', '']])}
  <div class="eyebrow">Specialties</div>
  <h1>Seven situations I <em>know cold.</em></h1>
  <p>Not a service menu. These are the things people actually call me about, and what I do differently in each.</p>
</div></div>
<section><div class="wrap"><div class="grid g3">
  ${services.map((s) => `<article class="card rv"><a href="${s.slug}/index.html"><img src="../images/${s.img}" alt="${esc(s.name)}" loading="lazy"></a>
    <div class="card-b"><h3><a href="${s.slug}/index.html">${esc(s.short)}</a></h3><p>${esc(s.heroLine)}</p><span class="more">Read more →</span></div></article>`).join('\n')}
</div></div></section>`,
}));

for (const s of services) {
  write(`/services/${s.slug}/`, page({
    path: `/services/${s.slug}/`, active: 'services',
    title: `${s.name} in Lane County, Oregon | Brett Herring`,
    desc: trunc(`${s.heroLine} ${clean(s.intro)}`, 150),
    ogImg: `images/${s.img}`,
    schema: [
      breadcrumbSchema([['Home', '/'], ['Specialties', '/services/'], [s.short, `/services/${s.slug}/`]]),
      faqSchema(s.faqs),
      { '@context': 'https://schema.org', '@type': 'Service', name: s.name, provider: { '@type': 'RealEstateAgent', name: 'Brett Herring' }, areaServed: 'Lane County, Oregon', description: clean(s.intro) },
    ],
    body: `
<div class="phero"><div class="wrap">
  ${crumbs('../../', [['Home', 'index.html'], ['Specialties', 'services/index.html'], [s.short, '']])}
  <div class="eyebrow">${esc(s.short)}</div>
  <h1>${esc(s.heroLine.replace(/\.$/, ''))}<em>.</em></h1>
  <p>${esc(s.intro)}</p>
</div></div>
<section><div class="wrap split">
  <div class="rv"><figure class="shot tall"><img src="../../images/${s.img}" alt="${esc(s.name)} in Lane County, Oregon"><figcaption>${esc(s.short)} · Lane County</figcaption></figure></div>
  <div class="rv">
    <div class="eyebrow">What you get</div>
    <h2>The specifics, <em>not the slogan.</em></h2>
    <ul class="checks">${s.bullets.map((b) => `<li>${esc(b)}</li>`).join('')}</ul>
    <div class="cta-row"><a class="btn" href="tel:${PHONE_TEL}">Call ${PHONE}</a><a class="btn ghost" href="mailto:${EMAIL}">Email Brett</a></div>
  </div>
</div></section>
<section class="bone2"><div class="wrap"><div class="prose">
  ${s.body.map((sec) => `<h2 class="rv">${esc(sec.h)}</h2><p class="rv">${esc(sec.p)}</p>`).join('\n')}
</div></div></section>
${faqBlock(s.faqs, `${s.short}: straight answers`)}
<section><div class="wrap">
  <div class="sec-head rv"><div class="eyebrow">By area</div><h2>${esc(s.short)} <em>near you.</em></h2>
  <p>Every Lane County area I serve has its own page for this.</p></div>
  <div class="pills rv">${locations.map((l) => `<a href="../../areas/${l.slug}/${s.slug}/index.html"${l.rank ? ' class="hot"' : ''}>${esc(l.name)}</a>`).join('\n')}</div>
</div></section>`,
  }));
}

// ============================================================ AREAS
write('/areas/', page({
  path: '/areas/', active: 'areas',
  title: 'Lane County Oregon Areas & Communities | Brett Herring',
  desc: `All ${locations.length} Lane County communities: Thurston, Pleasant Hill, Springfield, Eugene, Creswell, Cottage Grove, Veneta, the McKenzie corridor and more.`,
  schema: [breadcrumbSchema([['Home', '/'], ['Areas', '/areas/']])],
  body: `
<div class="phero"><div class="wrap">
  ${crumbs('../', [['Home', 'index.html'], ['Areas', '']])}
  <div class="eyebrow">Areas</div>
  <h1>Lane County, <em>community by community.</em></h1>
  <p>"Eugene-Springfield" is not a useful answer when you are deciding where to live. Here is the actual map, with what each place is really like.</p>
</div></div>
<section><div class="wrap">
  <div class="sec-head rv"><div class="eyebrow">Where I focus</div><h2>The three I know <em>best.</em></h2></div>
  <div class="grid g3">
    ${ranked.map((l) => `<article class="card rank rv" data-rank="No. ${l.rank}"><a href="${l.slug}/index.html"><img src="../images/${IMG(l)}" alt="${esc(l.name)}, Oregon" loading="lazy"></a>
      <div class="card-b"><h3><a href="${l.slug}/index.html">${esc(l.name)}</a></h3><p><b>${esc(l.tagline)}</b></p>
      <p>${esc(trunc(clean(l.character), 150))}</p><span class="more">Explore ${esc(l.name)} →</span></div></article>`).join('\n')}
  </div>
</div></section>
<section class="bone2"><div class="wrap">
  <div class="sec-head rv"><div class="eyebrow">Everywhere else</div><h2>The rest of <em>the county.</em></h2></div>
  <div class="grid g3">
    ${rest.map((l) => `<article class="card rv"><div class="card-b">
      <h3><a href="${l.slug}/index.html">${esc(l.name)}</a></h3><p><b style="color:var(--green-d)">${esc(l.tagline)}</b></p>
      <p>${esc(trunc(clean(l.character), 130))}</p><span class="more">Explore →</span></div></article>`).join('\n')}
  </div>
</div></section>`,
}));

for (const l of locations) {
  const nearby = locations.filter((x) => x.slug !== l.slug).slice(0, 14);
  const areaFaqs = [
    { q: `What is ${l.name}, Oregon like?`, a: `${clean(l.tagline)}. ${clean(l.character).split('. ').slice(0, 2).join('. ')}.` },
    { q: `What kind of property is available in ${l.name}?`, a: clean(l.propertyNotes) },
    { q: `What schools serve ${l.name}?`, a: clean(l.schools) },
    { q: `Is ${l.name} a good place to buy?`, a: `It depends entirely on what you want out of a day. ${clean(l.lifestyle)} I would rather ask you a few questions than guess. Call or text ${PHONE} and I will give you an honest read, including if the answer is that another area fits you better.` },
  ];
  write(`/areas/${l.slug}/`, page({
    path: `/areas/${l.slug}/`, active: 'areas',
    title: `${l.name}, Oregon Real Estate & Area Guide | Brett Herring`,
    desc: trunc(`${l.name}, Oregon: ${clean(l.tagline)}. ${clean(l.character)}`, 150),
    ogImg: `images/${IMG(l)}`,
    schema: [
      breadcrumbSchema([['Home', '/'], ['Areas', '/areas/'], [l.name, `/areas/${l.slug}/`]]),
      faqSchema(areaFaqs),
      { '@context': 'https://schema.org', '@type': 'Place', name: `${l.name}, Oregon`, description: clean(l.character), containedInPlace: { '@type': 'AdministrativeArea', name: 'Lane County, Oregon' } },
    ],
    body: `
<div class="phero"><div class="wrap">
  ${crumbs('../../', [['Home', 'index.html'], ['Areas', 'areas/index.html'], [l.name, '']])}
  <div class="eyebrow">${esc(l.name)}, Oregon${l.rank ? ` · Priority Area No. ${l.rank}` : ''}</div>
  <h1>${esc(l.name)}: <em>${esc(l.tagline.toLowerCase())}</em></h1>
  <p>${esc(sentences(clean(l.character), 2))}</p>
  <div class="facts">
    <div><b>${l.zips.join(' · ')}</b><span>ZIP</span></div>
    <div><b>${esc(({ intown: 'In town', edge: 'Town edge', rural: 'Rural', remote: 'Remote' })[attrs[l.slug]?.setting] || 'Lane County')}</b><span>Setting</span></div>
    <div><b>${esc(attrs[l.slug]?.septic === true ? 'Well &amp; septic' : attrs[l.slug]?.septic === false ? 'City services' : 'Mixed')}</b><span>Water &amp; waste</span></div>
    <div><b>${esc(trunc(clean(attrs[l.slug]?.district || 'Lane County'), 34))}</b><span>Schools</span></div>
  </div>
</div></div>

<section><div class="wrap split">
  <div class="rv"><figure class="shot wide"><img src="../../images/${IMG(l)}" alt="${esc(l.name)}, Lane County, Oregon"><figcaption>${esc(l.name)}, Lane County</figcaption></figure></div>
  <div class="rv">
    <div class="eyebrow">The property picture</div>
    <h2>What you will <em>actually find.</em></h2>
    <p>${esc(l.propertyNotes)}</p>
    <h3 style="margin:1.5rem 0 .5rem">Living here</h3>
    <p style="color:var(--ink2)">${esc(l.lifestyle)}</p>
    <h3 style="margin:1.5rem 0 .5rem">Schools</h3>
    <p style="color:var(--ink2)">${esc(l.schools)}</p>
    <div class="cta-row"><a class="btn" href="tel:${PHONE_TEL}">Talk ${esc(l.name)} property</a></div>
  </div>
</div></section>

${l.data && l.data.length ? `
<section class="dark"><div class="wrap">
  <div class="sec-head rv"><div class="eyebrow">By the numbers</div><h2>${esc(l.name)} <em>housing data.</em></h2>
  <p>Published figures only, with the source on every line. Where I do not have a sourced number, I do not print one.</p></div>
  <table class="meta rv" style="max-width:760px">
    ${l.data.map(([k, v, src]) => dataRow(k, v, src)).join('\n')}
  </table>
  ${l.dataNote ? `<p class="rv" style="max-width:760px;font-size:.9rem;color:var(--on-black2)">${esc(l.dataNote)}</p>` : ''}
</div></section>` : ''}

<section class="${l.data && l.data.length ? 'bone2' : ''}"><div class="wrap split">
  <div class="rv">
    <div class="eyebrow">Local knowledge</div>
    <h2>Things you learn <em>by living here.</em></h2>
    <ul class="checks">${l.insider.map((i) => `<li>${esc(i)}</li>`).join('')}</ul>
  </div>
  <div class="rv">
    <div class="card"><div class="card-b">
      <h3>${esc(l.name)} at a glance</h3>
      <table class="meta">
        <tr><td>County</td><td>Lane County, Oregon</td></tr>
        <tr><td>ZIP codes</td><td>${l.zips.join(', ')}</td></tr>
        <tr><td>Known for</td><td>${l.landmarks.slice(0, 4).map(esc).join(' · ')}</td></tr>
      </table>
      <h3 style="margin-top:1.2rem">What I help with here</h3>
      ${services.map((s) => `<a href="${s.slug}/index.html" style="display:block;padding:.5rem 0;border-bottom:1px solid var(--line);font-weight:600">${esc(s.short)} in ${esc(l.name)} →</a>`).join('\n')}
    </div></div>
  </div>
</div></section>
${faqBlock(areaFaqs, `${l.name} questions`)}
<section><div class="wrap">
  <div class="sec-head rv"><div class="eyebrow">Nearby</div><h2>Other <em>Lane County areas.</em></h2></div>
  <div class="pills rv">${nearby.map((x) => `<a href="../${x.slug}/index.html"${x.rank ? ' class="hot"' : ''}>${esc(x.name)}</a>`).join('\n')}
  <a href="../index.html"><b>All ${locations.length} areas →</b></a></div>
</div></section>`,
  }));

  // ---------------- area × service combo pages
  for (const s of services) {
    const a = attrs[l.slug] || attrs.springfield;
    const sections = comboSections(l, s, a);
    const seed = l.slug + s.slug;
    const opener = pick([
      `Looking to ${s.verb} in ${l.name}? Start with someone who has actually been down these roads.`,
      `${l.name} has a character all its own, and if your plan is to ${s.verb} here, that character changes the whole approach.`,
      `Plenty of agents will work ${l.name}. Fewer of them can tell you what makes ${s.short.toLowerCase()} different in this specific part of Lane County.`,
      `If you are trying to ${s.verb} around ${l.name}, local knowledge is not a bonus. It is most of the job.`,
    ], seed);
    const bridge = `${clean(l.propertyNotes)}`;
    const closer = pick([
      `Layer the specialty on top of that. ${clean(s.intro)}`,
      `Then there is the ${s.short.toLowerCase()} side of it. ${clean(s.intro)}`,
      `And the part I do everywhere: ${clean(s.intro)}`,
    ], seed + 'c');
    const comboFaqs = [
      { q: `Who is a good ${s.short.toLowerCase()} agent in ${l.name}, Oregon?`, a: `You want someone who combines real ${s.short.toLowerCase()} experience with parcel-level knowledge of ${l.name}. Brett Herring works ${l.name} as part of his core Lane County territory with ${TEAM} at ${BROKERAGE}, and lives in Springfield. Call or text ${PHONE} for a straight local conversation with no pressure attached.` },
      { q: `What should I know about ${s.short.toLowerCase()} specifically in ${l.name}?`, a: `${clean(l.propertyNotes)}` },
      ...s.faqs.slice(0, 3),
    ];
    write(`/areas/${l.slug}/${s.slug}/`, page({
      path: `/areas/${l.slug}/${s.slug}/`, active: 'areas',
      title: `${s.short} in ${l.name}, Oregon | Brett Herring`,
      desc: trunc(`${s.short} in ${l.name}, Lane County Oregon. ${clean(l.tagline)}. Local guidance from Brett Herring, ${TEAM}. Call ${PHONE}.`, 155),
      ogImg: `images/${s.img}`,
      schema: [
        breadcrumbSchema([['Home', '/'], ['Areas', '/areas/'], [l.name, `/areas/${l.slug}/`], [s.short, `/areas/${l.slug}/${s.slug}/`]]),
        faqSchema(comboFaqs),
        { '@context': 'https://schema.org', '@type': 'Service', name: `${s.name} — ${l.name}, Oregon`, provider: { '@type': 'RealEstateAgent', name: 'Brett Herring', telephone: '+1-541-968-9422' }, areaServed: { '@type': 'Place', name: `${l.name}, Oregon` }, description: `${s.short} real estate services in ${l.name}, Lane County, Oregon.` },
      ],
      body: `
<div class="phero"><div class="wrap">
  ${crumbs('../../../', [['Home', 'index.html'], ['Areas', 'areas/index.html'], [l.name, `areas/${l.slug}/index.html`], [s.short, '']])}
  <div class="eyebrow">${esc(s.short)} · ${esc(l.name)}, Oregon</div>
  <h1>${esc(s.short)} in <em>${esc(l.name)}.</em></h1>
  <p>${esc(opener)}</p>
</div></div>
<section><div class="wrap split">
  <div class="rv"><figure class="shot tall"><img src="../../../images/${s.img}" alt="${esc(s.name)} near ${esc(l.name)}, Oregon"><figcaption>${esc(s.short)} · ${esc(l.name)}</figcaption></figure></div>
  <div class="rv">
    <div class="eyebrow">${esc(l.name)} + ${esc(s.short)}</div>
    <h2>Local ground, <em>specialist eyes.</em></h2>
    <p>${esc(bridge)}</p>
    <p>${esc(closer)}</p>
    <ul class="checks">${s.bullets.slice(0, 4).map((b) => `<li>${esc(b)}</li>`).join('')}</ul>
    <div class="cta-row"><a class="btn" href="tel:${PHONE_TEL}">Call ${PHONE}</a><a class="btn ghost" href="../../../services/${s.slug}/index.html">Full ${esc(s.short.toLowerCase())} guide</a></div>
  </div>
</div></section>
<section class="bone2"><div class="wrap">
  <div class="sec-head rv"><div class="eyebrow">${esc(l.name)} specifics</div><h2>What changes <em>here.</em></h2>
  <p>Generic advice is worthless on a decision this size. This is what ${esc(s.short.toLowerCase())} actually involves in ${esc(l.name)}, as opposed to anywhere else in the county.</p></div>
  <div class="prose rv">
    ${sections.map((sec) => `<h3>${esc(sec.h)}</h3><p>${esc(sec.p)}</p>`).join('\n')}
  </div>
</div></section>
<section><div class="wrap split">
  <div class="rv">
    <div class="eyebrow">The area itself</div>
    <h2>${esc(l.name)}, <em>briefly.</em></h2>
    <p>${esc(trunc(clean(l.character), 340))}</p>
    <table class="meta">
      <tr><td>ZIP codes</td><td>${l.zips.join(', ')}</td></tr>
      <tr><td>Known for</td><td>${l.landmarks.slice(0, 4).map(esc).join(' · ')}</td></tr>
      <tr><td>Schools</td><td>${esc(trunc(clean(l.schools), 190))}</td></tr>
      <tr><td>Getting to town</td><td>${esc(a.commute.charAt(0).toUpperCase() + a.commute.slice(1))}</td></tr>
    </table>
    <p><a href="../index.html"><b>Full ${esc(l.name)} area guide →</b></a></p>
  </div>
  <div class="rv"><figure class="shot wide"><img src="../../../images/${IMG(l)}" alt="${esc(l.name)}, Lane County, Oregon" loading="lazy"><figcaption>${esc(l.name)}, Lane County</figcaption></figure></div>
</div></section>
${faqBlock(comboFaqs, `${s.short} in ${l.name}: FAQ`)}
<section><div class="wrap">
  <div class="sec-head rv"><div class="eyebrow">Nearby</div><h2>${esc(s.short)} in <em>other areas.</em></h2></div>
  <div class="pills rv">${locations.filter((x) => x.slug !== l.slug).slice(0, 16).map((x) => `<a href="../../${x.slug}/${s.slug}/index.html"${x.rank ? ' class="hot"' : ''}>${esc(x.name)}</a>`).join('\n')}</div>
</div></section>`,
    }));
  }
}

// ============================================================ GUIDES
write('/guides/', page({
  path: '/guides/', active: 'guides',
  title: 'Lane County Real Estate Guides | Brett Herring',
  desc: `${guides.length} free guides to buying and selling in Lane County, Oregon: wells and septic, first-time buyer programs, rural property, taxes, inspections and timelines.`,
  schema: [breadcrumbSchema([['Home', '/'], ['Guides', '/guides/']])],
  body: `
<div class="phero"><div class="wrap">
  ${crumbs('../', [['Home', 'index.html'], ['Guides', '']])}
  <div class="eyebrow">Free Guides</div>
  <h1>Everything I would tell you <em>over coffee.</em></h1>
  <p>Written out, free, no email required. Informed clients make better decisions and are more pleasant to work with, so this is entirely self-interested.</p>
</div></div>
<section><div class="wrap"><div class="grid g3">
  ${guides.map((g) => `<article class="card rv"><a href="${g.slug}/index.html"><img src="../images/${g.img}" alt="${esc(g.title)}" loading="lazy"></a>
    <div class="card-b"><h3><a href="${g.slug}/index.html">${esc(g.title)}</a></h3><p>${esc(g.desc)}</p><span class="more">Read the guide →</span></div></article>`).join('\n')}
</div></div></section>`,
}));

for (const g of guides) {
  write(`/guides/${g.slug}/`, page({
    path: `/guides/${g.slug}/`, active: 'guides',
    title: `${g.title} | Brett Herring`,
    desc: trunc(g.desc, 155),
    ogImg: `images/${g.img}`,
    schema: [
      breadcrumbSchema([['Home', '/'], ['Guides', '/guides/'], [g.title, `/guides/${g.slug}/`]]),
      faqSchema(g.faqs),
      { '@context': 'https://schema.org', '@type': 'Article', headline: g.title, description: g.desc, image: `${SITE}/images/${g.img}`, author: { '@type': 'Person', name: 'Brett Herring' }, publisher: { '@type': 'Organization', name: `Brett Herring — ${TEAM}` } },
    ],
    body: `
<div class="phero"><div class="wrap">
  ${crumbs('../../', [['Home', 'index.html'], ['Guides', 'guides/index.html'], [trunc(g.title, 40), '']])}
  <div class="eyebrow">Free Guide</div>
  <h1>${esc(g.title)}</h1>
  <p>${esc(g.desc)}</p>
</div></div>
<section><div class="wrap"><div class="prose">
  ${g.sections.map((sec, i) => `<h2 class="rv">${esc(sec.h)}</h2><p class="rv"${i === 0 ? ' style="font-size:1.14rem"' : ''}>${esc(sec.p)}</p>`).join('\n')}
  ${g.note ? `<div class="note rv"><b>Please verify before you plan around this:</b> ${esc(g.note)}</div>` : ''}
</div></div></section>
${faqBlock(g.faqs, 'Questions this raises')}
<section><div class="wrap center">
  <div class="sec-head rv"><h2>Still have questions?</h2><p>I will answer them for your specific property and your specific situation. That conversation is free and it is the useful one.</p></div>
  <a class="btn big rv" href="tel:${PHONE_TEL}">Call or text ${PHONE}</a>
</div></section>
<section class="bone2"><div class="wrap">
  <div class="sec-head rv"><div class="eyebrow">Keep reading</div><h2>More <em>guides.</em></h2></div>
  <div class="grid g3">
    ${guides.filter((x) => x.slug !== g.slug).slice(0, 3).map((x) => `<article class="card rv"><a href="../${x.slug}/index.html"><img src="../../images/${x.img}" alt="${esc(x.title)}" loading="lazy"></a><div class="card-b"><h3><a href="../${x.slug}/index.html">${esc(x.title)}</a></h3><span class="more">Read →</span></div></article>`).join('\n')}
  </div>
</div></section>`,
  }));
}

// ============================================================ JOURNAL
const fmtDate = (d) => new Date(d + 'T12:00:00').toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' });
write('/journal/', page({
  path: '/journal/', active: 'journal',
  title: 'Journal | Lane County Real Estate Notes | Brett Herring',
  desc: 'Notes on buying, selling and living in Lane County, Oregon. Written by Brett Herring, Springfield real estate agent.',
  schema: [breadcrumbSchema([['Home', '/'], ['Journal', '/journal/']])],
  body: `
<div class="phero"><div class="wrap">
  ${crumbs('../', [['Home', 'index.html'], ['Journal', '']])}
  <div class="eyebrow">Journal</div>
  <h1>Notes from <em>the field.</em></h1>
  <p>Things I keep explaining in person, written down so you can read them first.</p>
</div></div>
<section><div class="wrap"><div class="grid g3">
  ${journal.map((b) => `<article class="card rv"><a href="${b.slug}/index.html"><img src="../images/${b.img}" alt="${esc(b.title)}" loading="lazy"></a>
    <div class="card-b"><p style="font-family:var(--fm);font-size:.72rem;letter-spacing:.1em;color:var(--green-d);text-transform:uppercase">${fmtDate(b.date)}</p>
    <h3><a href="${b.slug}/index.html">${esc(b.title)}</a></h3><p>${esc(b.desc)}</p><span class="more">Read →</span></div></article>`).join('\n')}
</div></div></section>`,
}));

for (const b of journal) {
  write(`/journal/${b.slug}/`, page({
    path: `/journal/${b.slug}/`, active: 'journal',
    title: `${b.title} | Brett Herring`,
    desc: trunc(b.desc, 155),
    ogImg: `images/${b.img}`,
    schema: [
      breadcrumbSchema([['Home', '/'], ['Journal', '/journal/'], [b.title, `/journal/${b.slug}/`]]),
      { '@context': 'https://schema.org', '@type': 'BlogPosting', headline: b.title, description: b.desc, datePublished: b.date, image: `${SITE}/images/${b.img}`, author: { '@type': 'Person', name: 'Brett Herring' } },
    ],
    body: `
<div class="phero"><div class="wrap">
  ${crumbs('../../', [['Home', 'index.html'], ['Journal', 'journal/index.html'], [trunc(b.title, 38), '']])}
  <div class="eyebrow">${fmtDate(b.date)} · Brett Herring</div>
  <h1>${esc(b.title)}</h1>
</div></div>
<section><div class="wrap"><div class="prose">
  <p class="lede rv">${esc(b.body[0])}</p>
  ${b.body.slice(1).map((p) => `<p class="rv">${esc(p)}</p>`).join('\n')}
</div></div></section>
<section class="bone2"><div class="wrap">
  <div class="sec-head rv"><div class="eyebrow">Keep reading</div><h2>More from the <em>journal.</em></h2></div>
  <div class="grid g3">
    ${journal.filter((x) => x.slug !== b.slug).slice(0, 3).map((x) => `<article class="card rv"><a href="../${x.slug}/index.html"><img src="../../images/${x.img}" alt="${esc(x.title)}" loading="lazy"></a><div class="card-b"><h3><a href="../${x.slug}/index.html">${esc(x.title)}</a></h3><span class="more">Read →</span></div></article>`).join('\n')}
  </div>
</div></section>`,
  }));
}

// ============================================================ LEGAL + CREDITS
const credits = existsSync(join(ROOT, 'gen/data/photo-credits.json'))
  ? JSON.parse(readFileSync(join(ROOT, 'gen/data/photo-credits.json'), 'utf8')) : [];

write('/photo-credits/', page({
  path: '/photo-credits/', active: '',
  title: 'Photo Credits | Brett Herring',
  desc: 'Attribution for the freely-licensed photography used on this site.',
  schema: [breadcrumbSchema([['Home', '/'], ['Photo Credits', '/photo-credits/']])],
  body: `
<div class="phero"><div class="wrap">
  ${crumbs('../', [['Home', 'index.html'], ['Photo Credits', '']])}
  <div class="eyebrow">Credits</div>
  <h1>Photo <em>credits.</em></h1>
  <p>Site photography is real photography, used under Creative Commons and public domain licenses. Every image and its source is listed here.</p>
</div></div>
<section><div class="wrap">
  <table class="meta" style="max-width:100%">
    ${credits.map((c) => `<tr><td>${esc(c.file)}</td><td>${esc(c.title.replace(/^File:/, ''))}<span class="src">${esc(c.license)}${c.artist ? ` · ${esc(c.artist)}` : ''} · <a href="${esc(c.source)}" rel="noopener nofollow">source</a></span></td></tr>`).join('\n')}
  </table>
  <p style="margin-top:1.5rem;color:var(--ink2)">Portraits of Brett Herring are his own. If you believe an image is used incorrectly, email ${EMAIL} and it will be corrected or removed promptly.</p>
</div></section>`,
}));

const legalPages = [
  { slug: 'privacy-policy', title: 'Privacy Policy', desc: 'How this site handles your information, in plain language.', sections: [
    { h: 'The short version', p: `This is an informational website for Brett Herring's real estate services. There are no accounts, no tracking cookies of my own, and no third-party advertising. When you call, text, or email, whatever you choose to share is used to respond to you and to provide real estate services. Nothing else.` },
    { h: 'What gets collected', p: `If you reach out, I receive what you send: usually your name, contact details, and what you are trying to do. The site itself collects nothing automatically. The hosting provider, like essentially all web hosts, keeps standard server logs for security and operations.` },
    { h: 'How it is used', p: `To reply to you, provide real estate services, and stay in touch about your transaction or search. Your information is never sold. It is shared only as needed to serve you, for example with a lender or title company in a transaction you are part of, or where the law requires it.` },
    { h: 'Texting and email', p: `If you text or email me, expect a reply on the same channel. You can ask me to stop contacting you at any time and that is the end of it, no hard feelings and no retention campaign.` },
    { h: 'Links out', p: `This site links to outside services such as Instagram and Google Fonts. Those services have their own privacy practices, which I do not control.` },
    { h: 'Your rights and how to ask', p: `You can ask what information I hold, ask for corrections, or ask for deletion, subject to records Oregon requires licensees to retain. Email ${EMAIL} or call ${PHONE}. Last updated August 2026.` },
  ] },
  { slug: 'terms-of-service', title: 'Terms of Service', desc: 'The terms that govern use of this website.', sections: [
    { h: 'Using this site', p: `By using this website you agree to these terms. It exists to share information about real estate in Lane County, Oregon and about my services. Use it lawfully and do not misrepresent its content as your own.` },
    { h: 'Not professional advice', p: `Everything here, including guides about zoning, wells, septic systems, financing, taxes and insurance, is general information rather than legal, tax, engineering, or financial advice. Rules change and every property is different. Verify specifics with Lane County, the State of Oregon, and the appropriate licensed professionals before relying on anything on this site.` },
    { h: 'Program and market information', p: `First-time buyer programs, loan products, and market conditions change frequently. Any program described here should be confirmed as currently available, and on current terms, with a participating lender or the administering agency before you make plans around it.` },
    { h: 'No guarantees', p: `Nothing here is a promise about property values, sale prices, timelines, loan approval, or the availability of any property or program.` },
    { h: 'Brokerage relationship', p: `Brett Herring is a licensed Oregon real estate broker with ${TEAM} at ${BROKERAGE}. Viewing this site does not create an agency relationship. In Oregon those are established through written disclosure and agreement, which I will review with you at the right time.` },
    { h: 'Content and photography', p: `Text on this site is mine. Photography is either mine or used under Creative Commons and public domain licenses, credited on the photo credits page. Please link rather than republish.` },
    { h: 'Changes', p: `These terms may be updated; the current version always lives here. Questions: ${EMAIL} or ${PHONE}. Last updated August 2026.` },
  ] },
  { slug: 'accessibility', title: 'Accessibility Statement', desc: 'The commitment to an accessible site, and how to tell me when something is not working.', sections: [
    { h: 'The commitment', p: `Everyone deserves full access to information about buying and selling property. This site is built to follow the Web Content Accessibility Guidelines 2.1 Level AA as closely as practical, and accessibility gets considered on every update.` },
    { h: 'What has been done', p: `Semantic HTML with proper heading order, descriptive alternative text on meaningful images, color contrast that clears AA on body text, keyboard-navigable menus and controls, relative font units that respect browser zoom, reduced-motion support that disables animation when your system asks for it, and labeled form fields.` },
    { h: 'Known limitations', p: `Some photography is decorative by nature. Third-party services linked from this site have their own accessibility practices I do not control.` },
    { h: 'The alternative that always works', p: `Every piece of information on this site is available directly from me by phone, text, or email, usually faster than any website. If a page is not working with your assistive technology, call ${PHONE} and you will get the same information, human to human.` },
    { h: 'Tell me', p: `If you hit a barrier anywhere on this site, email ${EMAIL} or call ${PHONE}. Reports get fixed, not filed. Last reviewed August 2026.` },
  ] },
  { slug: 'fair-housing', title: 'Fair Housing', desc: 'Equal opportunity in housing is the law and the standard here.', sections: [
    { h: 'The commitment', p: `I am committed to the letter and the spirit of the federal Fair Housing Act and Oregon fair housing law. Services are provided without regard to race, color, religion, sex, disability, familial status, national origin, sexual orientation, gender identity, marital status, or source of income.` },
    { h: 'What that means in practice', p: `I will not steer you toward or away from any neighborhood based on the characteristics of the people who live there. If you ask me what an area is "like" in those terms, I will decline and redirect to facts I can actually speak to: housing stock, schools by name and district, commute, amenities, published data, and the character of the place itself.` },
    { h: 'Data on this site', p: `Area pages carry published housing and economic figures from sources such as the U.S. Census Bureau's American Community Survey, with the source named on every line. Those figures describe housing and local economies. They are not, and must not be used as, a description of who lives somewhere.` },
    { h: 'Accessibility in housing', p: `If you need accessible housing features or reasonable accommodations in the buying or renting process, tell me early and I will work to find properties that genuinely fit rather than properties that technically qualify.` },
    { h: 'If something goes wrong', p: `If you believe you have experienced housing discrimination, you can file a complaint with the U.S. Department of Housing and Urban Development or the Oregon Bureau of Labor and Industries Civil Rights Division. If it involved me, I want to hear about it directly as well: ${EMAIL} or ${PHONE}.` },
  ] },
];

for (const lp of legalPages) {
  write(`/${lp.slug}/`, page({
    path: `/${lp.slug}/`, active: '',
    title: `${lp.title} | Brett Herring`,
    desc: lp.desc,
    schema: [breadcrumbSchema([['Home', '/'], [lp.title, `/${lp.slug}/`]])],
    body: `
<div class="phero"><div class="wrap">
  ${crumbs('../', [['Home', 'index.html'], [lp.title, '']])}
  <div class="eyebrow">${lp.slug === 'fair-housing' ? 'Equal Housing Opportunity' : 'Legal'}</div>
  <h1>${esc(lp.title)}</h1>
  <p>${esc(lp.desc)}</p>
</div></div>
<section><div class="wrap"><div class="prose">
  ${lp.sections.map((sec) => `<h2>${esc(sec.h)}</h2><p>${esc(sec.p)}</p>`).join('\n')}
</div></div></section>`,
  }));
}

// ============================================================ assets, sitemap, robots, 404
mkdirSync(join(OUT, 'assets'), { recursive: true });
writeFileSync(join(OUT, 'assets/style.css'), css);
writeFileSync(join(OUT, 'assets/site.js'), js);

const imgSrc = join(ROOT, 'assets/images');
if (existsSync(imgSrc)) cpSync(imgSrc, join(OUT, 'images'), { recursive: true });

writeFileSync(join(OUT, 'sitemap.xml'),
  `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n` +
  urls.map((u) => `  <url><loc>${u}</loc></url>`).join('\n') + '\n</urlset>\n');

writeFileSync(join(OUT, 'robots.txt'), `User-agent: *\nAllow: /\nSitemap: ${SITE}/sitemap.xml\n`);
writeFileSync(join(OUT, '.nojekyll'), '');

writeFileSync(join(OUT, '404.html'), page({
  path: '/404/', title: 'Page not found | Brett Herring',
  desc: 'That page does not exist.',
  body: `<div class="phero"><div class="wrap"><div class="eyebrow">404</div>
  <h1>This one's a <em>dead end.</em></h1>
  <p>Happens. Head back and I will get you where you were going.</p>
  <div class="cta-row"><a class="btn big" href="/index.html">Back home</a><a class="btn big ghost" href="tel:${PHONE_TEL}">Call ${PHONE}</a></div>
</div></div>`,
}).replace(/(src|href)="\.\/?/g, '$1="/').replace(/(src|href)="\.\.\//g, '$1="/'));

console.log(`Built ${count} pages · ${urls.length} sitemap URLs · ${locations.length} areas × ${services.length} specialties.`);
