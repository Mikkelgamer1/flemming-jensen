// Al HTML til sitet. Tekster rettes her; tal, heste og resultater kommer fra data/travinfo.json.

export const SITE = {
  // ← Bekræft domænet før lancering (kan også sættes med miljøvariablen SITE_URL). På Vercel bruges projektets adresse.
  url: (process.env.SITE_URL || (process.env.VERCEL_PROJECT_PRODUCTION_URL && 'https://' + process.env.VERCEL_PROJECT_PRODUCTION_URL) || 'https://www.flemmingjensen.dk').replace(/\/$/, ''),
  navn: 'Flemming Jensen',
  person: 'Flemming Jensen',
  fornavn: 'Flemming',
  hold: 'Team Jensen', // holdets navn ifølge travet.dk (september 2026)
  licens: 5149,
  telefon: '+45 20 45 80 41', // første nummer hos Dansk Hestevæddeløb
  email: '', // ← ingen offentlig e-mail fundet; sættes den, vises den overalt
  gade: 'Frederikshvilevej 9',
  postnr: '9320',
  by: 'Hjallerup',
  facebook: '', // har ingen Facebook-side
  instagram: '',
  travinfo: 'https://travinfo.dk/licenseholder-tabs/5149',
  hjemmebane: 'https://www.aav.dk/',
  kort: 'https://www.google.com/maps/search/?api=1&query=Frederikshvilevej+9%2C+9320+Hjallerup',
};

const PARTNERE = []; // Samarbejdspartnere med logo. Tom liste = ingen sektion.

// Hæder og rekorder. Kilder: travservice.dk (17.8.2021), travet.dk (3.11.2025, 17.8.2025, 11.10.2026), kmfoto.dk (2.2.2022), danskhv.dk (19.6.2024).
const HAEDER = [
  ['2009–15', 'Årets Travtræner', '2009, 2010, 2013, 2014 og 2015'],
  ['2010', 'Årets Travkusk', 'Hestesportens Galla'],
  ['2 ×', 'Dansk Trav Derby', 'Esterel Sunset 2001 og Okay Bee 2010'],
  ['2024', 'Danmarksmester i monté', 'med Eros Zola på Skive'],
];

const VEJEN = [
  ['1980’erne', 'Amatør med succes', 'Lærer faget hos amatørtræner Erik Nielsen i Lemb og får tidligt succes i V65-løbene – bl.a. med hoppen Enjoy Engholm.'],
  ['1986', 'Danmarksmester', 'Vinder Danmarksmesterskabet for amatører.'],
  ['1994', 'Professionel træner', 'Starter som træner i Skive og er fra 1. maj 1994 træner i Aalborg. Samme år vinder Sleipner Jydsk 4-årings Grand Prix.'],
  ['1999–2007', 'Sverige', 'Træner først på Axevalla og siden på Åby, inden familien flytter hjem til Aalborg i 2007.'],
  ['2001', 'Første Derby', 'Vinder Dansk Trav Derby med Esterel Sunset.'],
  ['2009–10', 'Årets Travtræner', 'Kåres to år i træk – og i 2010 også som Årets Travkusk. Samme år vinder han Derbyet som kusk på Bent O. Pedersen-trænede Okay Bee.'],
  ['2013', '10 millioner', 'Bliver den første danske træner med over 10 millioner kroner indkørt på én sæson. Året efter bliver det til 11,1 millioner.'],
  ['2024', 'DM i monté', 'Vinder Danmarksmesterskabet i monté med Eros Zola på BioCirc Trav Arena Skive.'],
  ['2026', 'Mesterskab for Danmark', 'Kører selv Just Hans til sejr på Charlottenlund i 1.12,1a over 2.000 meter.'],
];

// Heste, der har gjort Flemming Jensen kendt (fra kilderne ovenfor).
const STOREHESTE = [
  ['Enjoy Engholm', 'V65-succes i 1980’erne'],
  ['Sleipner', 'Jydsk 4-årings Grand Prix 1994'],
  ['Esterel Sunset', 'Dansk Trav Derby 2001'],
  ['Okay Bee', 'Derby 2010 – som kusk'],
  ['Tøjeksperten', 'Harper Hanovers Løb'],
  ['Sun Esterel', 'sejren, der gav 10 mio. i 2013'],
  ['Local Conch', ''],
  ['Slide So Easy', ''],
  ['Obi Wan', ''],
  ['O’Grady', ''],
  ['Montgomery Hill', ''],
  ['Mathilde Trøjborg', ''],
];

// Billeder fra Travet.dk, KM Foto, Dansk Hestevæddeløb og TV2 Nord: navn → [forhold, bredder…]
const BILLEDER = {
  'portraet': [0.763, 700, 1100, 1600],
  'smil': [1.515, 800],
  'aftensejr': [1.594, 800, 1400, 2048],
  'monte': [1.5, 800, 1400, 2048],
  'i-sulkyen': [1.5, 800, 1400, 2048],
  'vindercirkel': [1.778, 800, 1400],
  'just-hans': [1.515, 800],
  'just-hans-2023': [1.515, 800],
  'ina-crown': [1.501, 800],
  'lookerbie-diamond': [1.413, 800],
  'ninjago': [1.501, 800],
  'hjemmebane': [1.501, 800],
  'blomster': [1.501, 800],
  'loeb-2': [1.515, 800],
  'loeb-felt': [1.515, 800],
};
const FOTO = { // fotograf pr. billede
  'portraet': 'Kjeld Mikkelsen / KM Foto', 'aftensejr': 'Kjeld Mikkelsen / KM Foto', 'smil': 'Burt Seeger', 'monte': 'Dansk Hestevæddeløb', 'i-sulkyen': 'Martin Timm Holmstav',
  'vindercirkel': 'TV2 Nord', 'just-hans': 'Burt Seeger', 'just-hans-2023': 'Burt Seeger', 'ina-crown': 'Hesselberg Foto', 'lookerbie-diamond': 'Travet.dk', 'ninjago': 'Travet.dk',
  'hjemmebane': 'Hesselberg Foto', 'blomster': 'Hesselberg Foto', 'loeb-2': 'Burt Seeger', 'loeb-felt': 'Burt Seeger',
};
// Hestekort: hest-id → [billede, tekst fra kilden]
const HESTEKORT = {
  649712: ['just-hans', 'Vandt Mesterskab for Danmark 2026 på Charlottenlund'],
  654669: ['ina-crown', 'Vandt 32 dage efter, hun kom i træning – første sejr siden januar 2024'],
  658664: ['ninjago', 'Vandt som 2-årig – »ikke hverdagskost« i stalden, skrev Travet.dk'],
  654558: ['lookerbie-diamond', ''],
};

const BANER = { Sk: 'Skive', 'Ål': 'Aalborg', 'År': 'Aarhus', Od: 'Odense', Ch: 'Charlottenlund', Bi: 'Billund', Bh: 'Bornholm', Ny: 'Nykøbing F.', Bs: 'Skovbo', Kl: 'Klampenborg', 'Åb': 'Åby', 'Jæ': 'Jägersro', Ax: 'Axevalla' };
// Banernes omtrentlige placering [længdegrad, breddegrad] til det skematiske Danmarkskort (svenske baner og Bornholm vises ikke).
const BANE_POS = { Sk: [9.06, 56.56], 'Ål': [9.87, 57.05], 'År': [10.2, 56.14], Od: [10.36, 55.4], Ch: [12.58, 55.75], Bi: [9.12, 55.73], Ny: [11.87, 54.77], Bs: [12.03, 55.46], Kl: [12.59, 55.77] };
const HJEM = 'Ål';
const SVENSKE = ['Åb', 'Jæ', 'Ax'];
const NAV = [['om-flemming/', 'Om Flemming'], ['stalden/', 'Stalden'], ['heste/', 'Heste'], ['resultater/', 'Resultater']];

// ---------- små hjælpere ----------

let R = ''; // sti tilbage til roden fra den side, der bygges
let V = ''; // versionsmærke til css/js
let KORT;   // Danmarks omrids og projektionstal fra data/danmark.json

const esc = (s) => String(s ?? '').replace(/[&<>"]/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]));
const nf = (n) => Number(n).toLocaleString('da-DK');
const kr = (n) => `${nf(n)}&nbsp;kr.`;
const d = (iso) => new Date(`${String(iso).slice(0, 10)}T12:00:00Z`);
const langDato = (iso) => new Intl.DateTimeFormat('da-DK', { day: 'numeric', month: 'long', year: 'numeric', timeZone: 'UTC' }).format(d(iso));
const kortDato = (iso) => new Intl.DateTimeFormat('da-DK', { day: 'numeric', month: 'short', timeZone: 'UTC' }).format(d(iso));
const ugedag = (iso) => new Intl.DateTimeFormat('da-DK', { weekday: 'long', timeZone: 'UTC' }).format(d(iso));
const dkListe = (a) => (a.length < 2 ? a.join('') : `${a.slice(0, -1).join(', ')} og ${a.at(-1)}`);
// API'et giver kun en kode. Ukendte koder er udenlandske baner (alle danske står i BANER), så de vises som Udlandet.
const bane = (kode) => BANER[kode] ?? 'Udlandet';
const tlfLink = SITE.telefon.replace(/\s/g, '');

/** "16,0a" → "1.16,0a". Tomt, hvis der ikke er en tid (fx galop uden tid). */
export const tid = (t) => (/^\d\d,\d/.test(t ?? '') ? `1.${t}` : '');

/** Hurtigste tid i en rekordstreng som "18,7k 14,3m *12,2am" → "1.12,2am". */
export const bedsteRekord = (mark) => {
  const tider = String(mark ?? '').replace(/\*/g, '').split(/\s+/).filter((x) => /^\d\d,\d/.test(x));
  tider.sort((a, b) => parseFloat(a.replace(',', '.')) - parseFloat(b.replace(',', '.')));
  return tider.length ? `1.${tider[0]}` : '';
};

/** Placering som den vises: 1, 2, 3 … "–" for uplaceret, "disk." for diskvalificeret. */
export const plac = (p) => (/^[1-9]\d*$/.test(p) ? p : p === 'd' ? 'disk.' : '–');

const pil = '<svg class="pil" viewBox="0 0 22 10" width="22" height="10" aria-hidden="true"><path d="M0 5h20M16 1l4 4-4 4" fill="none" stroke="currentColor" stroke-width="1.8"/></svg>';
const ud = '<svg class="ud" viewBox="0 0 10 10" width="10" height="10" aria-hidden="true"><path d="M1 9 9 1M3 1h6v6" fill="none" stroke="currentColor" stroke-width="1.6"/></svg>';
const nyFane = '<span class="sr"> (åbner i ny fane)</span>';
const ekstern = (href, tekst, cls = 'link') => `<a class="${cls}" href="${href}" target="_blank" rel="noopener">${tekst} ${ud}${nyFane}</a>`;
const knap = (href, tekst, cls = '') => `<a class="knap ${cls}" href="${R}${href}">${tekst} ${pil}</a>`;
const link = (href, tekst, cls = '') => `<a class="link ${cls}" href="${R}${href}">${tekst} ${pil}</a>`;
const ring = (cls = '') => `<a class="knap ${cls}" href="tel:${tlfLink}">Ring til ${SITE.fornavn} ${pil}</a>`;

const billede = (navn, alt, { sizes = '100vw', lazy = true, cls = '' } = {}) => {
  const [forhold, ...bredder] = BILLEDER[navn];
  const max = bredder.at(-1);
  return `<img${cls ? ` class="${cls}"` : ''} src="${R}assets/img/${navn}-${bredder[0]}.webp" srcset="${bredder.map((w) => `${R}assets/img/${navn}-${w}.webp ${w}w`).join(', ')}" sizes="${sizes}" width="${max}" height="${Math.round(max / forhold)}" alt="${esc(alt)}"${lazy ? ' loading="lazy" decoding="async"' : ' fetchpriority="high"'}>`;
};
const foto = (navn) => `<span class="kredit">Foto: ${esc(FOTO[navn])}</span>`;
const etiket = (tekst, attr = '') => `<p class="etiket"${attr}>${tekst}</p>`;
// Ternet bånd i dragtens hvid og grøn.
const tern = (cls = '') => `<div class="tern ${cls}" aria-hidden="true"></div>`;

// ---------- afledte tal ----------

function afled(data, idag) {
  const heste = [...data.heste].sort((a, b) => b.praemier - a.praemier || a.navn.localeCompare(b.navn, 'da'));
  const navne = new Map(heste.map((h) => [h.id, h.navn]));
  const medNavn = (r) => ({ ...r, hest: navne.get(r.hestId) ?? r.hest });
  const saeson = data.traenerStatistik.find((s) => s.sejre > 0) ?? data.traenerStatistik.find((s) => s.starter > 0) ?? data.traenerStatistik[0];
  const kusk = data.kuskStatistik.find((s) => s.aar === saeson.aar) ?? data.kuskStatistik[0];
  const iAar = data.resultater.filter((r) => r.dato.startsWith(String(saeson.aar)));
  const prNavn = {};
  for (const r of iAar) (prNavn[bane(r.bane)] ??= { kode: r.bane, navn: bane(r.bane), antal: 0 }).antal++;
  const banetal = Object.values(prNavn).sort((a, b) => b.antal - a.antal);
  const traenerAar = data.traenerStatistik.filter((s) => s.starter > 0);
  return {
    heste,
    saeson,
    kusk,
    opdateret: langDato(data.opdateret),
    seneste: data.resultater.slice(0, 10).map(medNavn),
    kommende: data.kommende.filter((k) => k.dato >= idag).map(medNavn),
    banetal,
    banerIAar: [...banetal.filter((b) => b.navn !== 'Udlandet').map((b) => b.navn), ...(prNavn.Udlandet ? ['udenlandske baner'] : [])],
    svenske: banetal.filter((b) => SVENSKE.includes(b.kode)).map((b) => b.navn),
    hjemmestarter: prNavn[bane(HJEM)]?.antal ?? 0,
    ungheste: heste.filter((h) => h.alder <= 2),
    aldre: [Math.min(...heste.map((h) => h.alder)), Math.max(...heste.map((h) => h.alder))],
    femAar: { aar: traenerAar.length, sejre: traenerAar.reduce((s, x) => s + x.sejre, 0) },
    fb: (data.facebook ?? []).slice(0, 5),
    kortheste: heste.filter((h) => HESTEKORT[h.id]),
  };
}

// ---------- fælles dele ----------

const maerke = (cls = '') => `<span class="maerke ${cls}"><i aria-hidden="true">FJ</i><span>Flemming<b>Jensen</b></span></span>`;

const top = (sti) => `
<header class="top">
  <div class="top__inner wrap">
    <a class="top__logo" href="${R || './'}" aria-label="${SITE.navn} – til forsiden">${maerke()}</a>
    <nav class="top__nav" aria-label="Primær navigation">
      ${NAV.map(([href, navn]) => `<a href="${R}${href}"${sti.startsWith(href) ? ' aria-current="page"' : ''}>${navn}</a>`).join('\n      ')}
    </nav>
    <a class="knap knap--lille top__cta" href="tel:${tlfLink}"><span class="sr">Ring til ${SITE.fornavn}: </span>${SITE.telefon}</a>
    <button class="burger" type="button" aria-haspopup="dialog" aria-controls="menu" commandfor="menu" command="show-modal"><span>Menu</span><i aria-hidden="true"></i></button>
  </div>
</header>
<dialog class="menu" id="menu" aria-label="Menu">
  <div class="menu__top wrap">
    ${maerke()}
    <button class="burger burger--luk" type="button" data-luk commandfor="menu" command="close"><span>Luk</span><i aria-hidden="true"></i></button>
  </div>
  <nav class="menu__nav wrap" aria-label="Menu">
    <ul>
      ${[['', 'Forside'], ...NAV, ['kontakt/', 'Kontakt']].map(([href, navn], i) => `<li style="--i:${i}"><a href="${R}${href || (R ? '' : './')}"${(href ? sti.startsWith(href) : sti === '') ? ' aria-current="page"' : ''}>${navn}</a></li>`).join('\n      ')}
    </ul>
  </nav>
  <div class="menu__bund wrap">
    <a href="tel:${tlfLink}">${SITE.telefon}</a>
    ${SITE.email ? `<a href="mailto:${SITE.email}">${SITE.email}</a>` : ''}
  </div>
</dialog>`;

const kontaktbaand = () => `
<section class="cta">
  ${tern()}
  <div class="wrap cta__inner">
    <div>
      ${etiket('Kontakt', ' data-vis')}
      <h2 data-vis style="--i:1">En hest til Hjallerup?</h2>
      <p data-vis style="--i:2">Ring til ${SITE.fornavn} og tag en snak om din hest – unghest, løbshest eller en, der skal i gang igen.</p>
    </div>
    <div class="cta__valg" data-vis style="--i:3">
      <a class="cta__tlf" href="tel:${tlfLink}">${SITE.telefon}</a>
      <p class="valg">${ring('knap--is')} ${link('kontakt/', 'Adresse og kontakt', 'link--lys')}</p>
    </div>
  </div>
</section>`;

const partnere = () => (PARTNERE.length ? `
<section class="sek sek--smal">
  <div class="wrap partnere">
    <div>${etiket('Samarbejdspartnere', ' data-vis')}<h2 data-vis style="--i:1">Med på holdet.</h2></div>
    <ul class="partnere__liste">${PARTNERE.map((p, i) => `
      <li data-vis style="--i:${i + 1}"><a href="${p.url}" target="_blank" rel="noopener"><img src="${R}assets/img/${p.logo}" width="${p.b}" height="${p.h}" alt="${esc(p.navn)}" loading="lazy"><span>${esc(p.tekst)} ${ud}</span>${nyFane}</a></li>`).join('')}
    </ul>
  </div>
</section>` : '');

const bund = (o) => `
<footer class="bund">
  ${tern('tern--tynd')}
  <div class="wrap bund__gitter">
    <div class="bund__brand">
      ${maerke('maerke--stor')}
      <p>Professionel travtræner, kusk og montéryter. Stald og træningsbaner i ${SITE.by} – Spar Nord Arena Aalborg som hjemmebane.</p>
    </div>
    <nav aria-label="Sider">
      <h2>Sider</h2>
      <ul>
        ${[...NAV, ['kontakt/', 'Kontakt']].map(([href, navn]) => `<li><a href="${R}${href}">${navn}</a></li>`).join('')}
      </ul>
    </nav>
    <div>
      <h2>Kontakt</h2>
      <ul>
        <li><a href="tel:${tlfLink}">${SITE.telefon}</a></li>
        ${SITE.email ? `<li><a href="mailto:${SITE.email}">${SITE.email}</a></li>` : ''}
        <li><address>${SITE.gade}<br>${SITE.postnr} ${SITE.by}</address></li>
      </ul>
    </div>
    <div>
      <h2>Følg med</h2>
      <ul>
        <li>${ekstern(SITE.travinfo, 'Travinfo', '')}</li>
        <li>${ekstern(SITE.hjemmebane, 'Spar Nord Arena Aalborg', '')}</li>
      </ul>
    </div>
  </div>
  <div class="wrap bund__linje">
    <p>Resultater og statistik: Dansk Hestevæddeløb · opdateret ${o.opdateret}</p>
    <p>Fotos: Kjeld Mikkelsen/KM Foto, Burt Seeger, Hesselberg Foto, Martin Timm Holmstav, Dansk Hestevæddeløb, TV2 Nord – via Travet.dk m.fl.</p>
    <p>© ${new Date().getFullYear()} ${SITE.navn}</p>
  </div>
</footer>`;

const organisation = () => ({
  '@type': ['LocalBusiness', 'SportsOrganization'],
  '@id': `${SITE.url}/#stald`,
  name: `${SITE.navn} – travtræner`,
  alternateName: SITE.hold,
  description: 'Professionel travtræner med stald og træningsbaner i Hjallerup og Spar Nord Arena Aalborg som hjemmebane.',
  url: `${SITE.url}/`,
  telephone: tlfLink,
  ...(SITE.email ? { email: SITE.email } : {}),
  image: `${SITE.url}/assets/img/og.jpg`,
  logo: `${SITE.url}/assets/img/ikon-512.png`,
  sport: 'Travsport',
  address: { '@type': 'PostalAddress', streetAddress: SITE.gade, postalCode: SITE.postnr, addressLocality: SITE.by, addressCountry: 'DK' },
  founder: { '@id': `${SITE.url}/#person` },
  sameAs: [SITE.travinfo],
});
const person = () => ({
  '@type': 'Person',
  '@id': `${SITE.url}/#person`,
  name: SITE.person,
  alternateName: 'Ismanden',
  jobTitle: 'Professionel travtræner, kusk og montéryter',
  birthDate: '1961-08-17',
  url: `${SITE.url}/om-flemming/`,
  image: `${SITE.url}/assets/img/portraet-1100.webp`,
  award: ['Årets Travtræner 2009, 2010, 2013, 2014 og 2015', 'Årets Travkusk 2010', 'DM i monté 2024'],
  worksFor: { '@id': `${SITE.url}/#stald` },
  sameAs: [SITE.travinfo],
});

function layout({ sti, titel, beskrivelse, indhold, o, klasse = '', noindex = false }) {
  const kanonisk = `${SITE.url}/${sti}`;
  const sideNavn = [...NAV, ['kontakt/', 'Kontakt']].find(([href]) => href === sti)?.[1];
  const graf = [
    { '@type': 'WebSite', '@id': `${SITE.url}/#website`, url: `${SITE.url}/`, name: SITE.navn, inLanguage: 'da-DK' },
    organisation(),
    person(),
    ...(sideNavn ? [{ '@type': 'BreadcrumbList', itemListElement: [{ '@type': 'ListItem', position: 1, name: 'Forside', item: `${SITE.url}/` }, { '@type': 'ListItem', position: 2, name: sideNavn, item: kanonisk }] }] : []),
  ];
  return `<!doctype html>
<html lang="da">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>${esc(titel)}</title>
<meta name="description" content="${esc(beskrivelse)}">
${noindex ? '<meta name="robots" content="noindex">' : '<link rel="canonical" href="' + kanonisk + '">'}
<meta name="theme-color" content="#0c2a20">
<meta property="og:type" content="website">
<meta property="og:locale" content="da_DK">
<meta property="og:site_name" content="${SITE.navn}">
<meta property="og:title" content="${esc(titel)}">
<meta property="og:description" content="${esc(beskrivelse)}">
<meta property="og:url" content="${kanonisk}">
<meta property="og:image" content="${SITE.url}/assets/img/og.jpg">
<meta property="og:image:width" content="1200">
<meta property="og:image:height" content="630">
<meta property="og:image:alt" content="Flemming Jensen – travtræner i Hjallerup">
<meta name="twitter:card" content="summary_large_image">
<link rel="icon" type="image/png" sizes="48x48" href="${R}assets/img/ikon-48.png">
<link rel="apple-touch-icon" href="${R}assets/img/ikon-180.png">
<link rel="preload" href="${R}assets/fonts/unbounded.woff2" as="font" type="font/woff2" crossorigin>
<link rel="preload" href="${R}assets/fonts/manrope.woff2" as="font" type="font/woff2" crossorigin>
<link rel="stylesheet" href="${R}assets/css/site.css?v=${V}">
<script>document.documentElement.classList.add('js');setTimeout(function(){window.__klar||document.documentElement.classList.remove('js')},2500)</script>
<script type="application/ld+json">${JSON.stringify({ '@context': 'https://schema.org', '@graph': graf }).replace(/</g, '\\u003c')}</script>
</head>
<body class="${klasse}">
<a class="skip" href="#indhold">Spring til indhold</a>
${top(sti)}
<main id="indhold">
${indhold}
</main>
${bund(o)}
<script src="${R}assets/js/site.js?v=${V}" defer></script>
</body>
</html>
`;
}

// Sidehoved på undersider: mørkt grønt felt, titel til venstre, billede med ternet kant til højre.
const sidehoved = ({ sti, h1, tekst, foto: f, alt = '', pos = '50% 50%', chips = [] }) => `
<section class="sidehoved">
  <div class="wrap sidehoved__gitter">
    <div>
      <nav class="sti" aria-label="Brødkrumme"><a href="${R}">Forside</a><span aria-hidden="true">/</span><span aria-current="page">${sti}</span></nav>
      <h1>${h1}</h1>
      <p class="indled">${tekst}</p>
      ${chips.length ? `<ul class="chips">${chips.map(([tal, tekst]) => `<li><b>${tal}</b>${tekst}</li>`).join('')}</ul>` : ''}
    </div>
    <figure class="sidehoved__foto" style="--pos:${pos}">${billede(f, alt, { sizes: '(min-width: 901px) 44vw, 92vw', lazy: false })}${foto(f)}</figure>
  </div>
</section>
${tern()}`;

/**
 * Skematisk Danmarkskort. `punkter` er [{ kode, navn, antal? }]: med antal tegnes en boble med tallet i,
 * uden antal en lille prik. Hjemmebanen får en ring, og der tegnes linjer derfra til de andre baner.
 */
function danmarkskort(punkter, beskrivelse) {
  const { bredde, hoejde, lon0, lat1, kx, ky, sti } = KORT;
  const max = Math.max(1, ...punkter.map((p) => p.antal ?? 0));
  const vist = punkter.filter((p) => BANE_POS[p.kode]).map((p) => {
    const [lon, lat] = BANE_POS[p.kode];
    const r = p.antal ? +(8 + 6 * Math.sqrt(p.antal / max)).toFixed(1) : 7;
    return { ...p, x: +((lon - lon0) * kx).toFixed(1), y: +((lat1 - lat) * ky).toFixed(1), r, ydre: p.kode === HJEM ? r + (p.antal ? 4 : 6) : r };
  });
  const hjem = vist.find((p) => p.kode === HJEM);
  const ruter = hjem ? vist.filter((p) => p !== hjem) : [];

  // Navnet sættes dér, hvor det bedst holder sig inden for kortet og fri af ruter og andre baner.
  const navn = (p) => {
    const w = p.navn.length * 6.4, m = p.ydre + 6;
    const steder = [['start', p.x + m, p.y + 3.7], ['middle', p.x, p.y + m + 9], ['end', p.x - m, p.y + 3.7], ['end', Math.min(p.x + p.ydre, bredde - 4), p.y + m + 9], ['middle', p.x, p.y - m - 2]];
    const straf = ([anker, x, y]) => { // 100 for at stikke ud over kortet, 10 for at ramme en rute eller en anden bane
      const x0 = (anker === 'start' ? x : anker === 'end' ? x - w : x - w / 2) - 3, x1 = x0 + w + 6, y0 = y - 12, y1 = y + 4;
      const inde = (px, py, luft = 0) => px > x0 - luft && px < x1 + luft && py > y0 - luft && py < y1 + luft;
      const udenfor = x0 < 0 || x1 > bredde || y0 < 0 || y1 > hoejde;
      const rammer = vist.some((q) => q !== p && inde(q.x, q.y, q.ydre))
        || ruter.some((q) => { for (let t = 0; t <= 1; t += 0.02) if (inde(hjem.x + (q.x - hjem.x) * t, hjem.y + (q.y - hjem.y) * t)) return true; return false; });
      return (udenfor ? 100 : 0) + (rammer ? 10 : 0);
    };
    // Hjemmebanen helst til venstre, uden for viften af ruter. Ved lige straf vinder det første sted på listen.
    const [anker, x, y] = (p === hjem ? [steder[2], ...steder] : steder).map((sted, i) => [straf(sted) + i / 100, sted]).sort((a, b) => a[0] - b[0])[0][1];
    return `<text class="kort__navn" x="${+x.toFixed(1)}" y="${+y.toFixed(1)}" text-anchor="${anker}">${esc(p.navn)}</text>`;
  };

  return `<svg class="kort__svg" viewBox="0 0 ${bredde} ${hoejde}" role="img" aria-label="${esc(beskrivelse)}">
        <path class="kort__land" d="${sti}"/>${ruter.map((p, i) => `
        <path class="kort__rute" pathLength="1" d="M${hjem.x},${hjem.y}L${p.x},${p.y}" style="--n:${i}"/>`).join('')}${vist.map((p, i) => `
        <g class="kort__bane" style="--n:${i}">${p === hjem ? `<circle class="kort__ring" cx="${p.x}" cy="${p.y}" r="${p.ydre}"/>` : ''}<circle class="kort__prik" cx="${p.x}" cy="${p.y}" r="${p.r}"/>${p.antal ? `<text class="kort__tal" x="${p.x}" y="${+(p.y + 3.3).toFixed(1)}" text-anchor="middle">${p.antal}</text>` : ''}${navn(p)}</g>`).join('')}
      </svg>`;
}

// ---------- genbrugte blokke ----------

const plKlasse = (p) => (p === '1' ? ' pl--1' : /^[23]$/.test(p) ? ' pl--23' : p === 'd' ? ' pl--tekst' : '');

const resultatRaekke = (r) => `
      <li class="res__r">
        <span class="pl${plKlasse(r.placering)}"><span class="sr">Placering: </span>${plac(r.placering)}</span>
        <span class="res__hest">${esc(r.hest)}</span>
        <span class="res__info"><time datetime="${r.dato}">${kortDato(r.dato)}</time> · ${esc(bane(r.bane))} · ${r.loeb}. løb · ${nf(r.distance)}&nbsp;m</span>
        <span class="res__tid">${tid(r.tid) || '<span aria-hidden="true">–</span><span class="sr">ingen tid</span>'}</span>
        <span class="res__kr">${r.praemie ? kr(r.praemie) : '<span aria-hidden="true">–</span><span class="sr">ingen præmie</span>'}</span>
      </li>`;
const resultatliste = (liste) => `<ol class="res">${liste.map(resultatRaekke).join('')}
    </ol>`;

const kommendeListe = (liste) => `<ul class="kom">${liste.map((k) => `
      <li>
        <time datetime="${k.dato}"><b>${new Date(`${k.dato}T12:00:00Z`).getUTCDate()}</b>${kortDato(k.dato).replace(/^\d+\.\s*/, '')}</time>
        <span class="kom__hest">${esc(k.hest)}</span>
        <span class="kom__bane">${ugedag(k.dato)} · ${esc(bane(k.bane))} · ${k.loeb}. løb${k.kusk ? ` · ${esc(k.kusk)}` : ''}</span>
      </li>`).join('')}
    </ul>`;
const ingenStarter = () => `<p class="tom">Ingen af staldens heste er startmeldt lige nu. Nye startlister kommer på ${ekstern(SITE.travinfo, 'Travinfo')}.</p>`;

const omHest = (h) => `${h.alder}-årig ${esc(h.koen.toLowerCase())}`;
const afstamning = (h) => (h.far ? `e. ${esc(h.far)} – ${esc(h.mor)}` : '');
const sejre = (h) => Number(h.placeringer.split('-')[0]) || 0;

// Hestekort med foto og en linje fra kilden.
const hestekort = (heste) => `<ul class="hestekort">${heste.map((h, i) => `
      <li data-vis style="--i:${i}">
        <a href="https://travinfo.dk/horse_tabs/${h.id}" target="_blank" rel="noopener">
          <figure>${billede(HESTEKORT[h.id][0], `${h.navn} i løb`, { sizes: '(min-width: 1100px) 24vw, (min-width: 600px) 46vw, 92vw' })}${foto(HESTEKORT[h.id][0])}</figure>
          <h3>${esc(h.navn)}</h3>
          <p class="hestekort__om">${omHest(h)} · ${sejre(h)} sejre i ${h.starter} starter</p>
          ${HESTEKORT[h.id][1] ? `<p class="hestekort__tekst">${esc(HESTEKORT[h.id][1])}</p>` : ''}
          ${nyFane}
        </a>
      </li>`).join('')}
    </ul>`;

// Rangliste over de mest vindende heste.
const rangliste = (heste) => `<ol class="rang">${heste.map((h, i) => `
      <li data-vis style="--i:${i % 6}"><a href="https://travinfo.dk/horse_tabs/${h.id}" target="_blank" rel="noopener">
        <span class="rang__nr">${i + 1}</span>
        <span class="rang__navn"><b>${esc(h.navn)}</b><small>${omHest(h)}${h.far ? ` · e. ${esc(h.far)}` : ''}</small></span>
        <span class="rang__tal"><b>${kr(h.praemier)}</b><small>${h.starter} starter · ${esc(h.placeringer)} · ${bedsteRekord(h.rekord) || '–'}</small></span>
        ${nyFane}
      </a></li>`).join('')}
    </ol>`;

// Hesterække til den fulde træningsliste.
const hesteraekke = (h, i) => `
      <li class="hest" data-vis style="--i:${i % 6}">
        <div class="hest__navn">
          <h3><a href="https://travinfo.dk/horse_tabs/${h.id}" target="_blank" rel="noopener">${esc(h.navn)}${nyFane}</a></h3>
          <p>${omHest(h)}${afstamning(h) ? ` · ${afstamning(h)}` : ''}</p>
        </div>
        ${h.starter ? `<dl class="hest__tal">
          <div><dt>Starter</dt><dd>${h.starter} <small>${esc(h.placeringer)}</small></dd></div>
          <div><dt>Indkørt</dt><dd>${kr(h.praemier)}</dd></div>
          <div><dt>Rekord</dt><dd>${bedsteRekord(h.rekord) || '–'}</dd></div>
        </dl>` : '<p class="hest__tal hest__tal--tom">Ustartet</p>'}
      </li>`;
const hestegruppe = (titel, heste) => (heste.length ? `
    <div class="gruppe">
      <h2 class="gruppe__titel" data-vis>${titel} <span>${heste.length}</span></h2>
      <ul class="hesteliste">${heste.map(hesteraekke).join('')}
      </ul>
    </div>` : '');

const haeder = () => `
<section class="haeder" aria-label="Hæder">
  <div class="wrap">
    <ul>${HAEDER.map(([tal, titel, tekst], i) => `
      <li data-vis style="--i:${i}"><b>${tal}</b><span>${titel}</span><small>${tekst}</small></li>`).join('')}
    </ul>
  </div>
</section>`;

const rekord = () => `
<section class="rekord">
  <div class="wrap rekord__inner">
    <div data-vis>
      ${etiket('Rekorden')}
      <p class="rekord__tal">10.289.726<small>kr.</small></p>
    </div>
    <div data-vis style="--i:1">
      <h2>Først over 10 millioner.</h2>
      <p>I december 2013 blev Flemming Jensen den første danske træner, der kørte over 10 millioner kroner ind på én sæson – sejren med Sun Esterel på Åby sikrede milepælen. Året efter blev det til 11.123.781 kroner.</p>
      <p class="kilde">Kilde: Travet.dk, 3. november 2025</p>
    </div>
  </div>
</section>`;

const tidslinje = () => `<ol class="vej">${VEJEN.map(([naar, titel, tekst], i) => `
      <li data-vis style="--i:${i % 3}"><time>${naar}</time><div><h3>${titel}</h3><p>${tekst}</p></div></li>`).join('')}
    </ol>`;

const storeheste = () => `<ul class="store">${STOREHESTE.map(([navn, tekst], i) => `
      <li data-vis style="--i:${i % 6}"><b>${navn}</b>${tekst ? `<span>${tekst}</span>` : ''}</li>`).join('')}
    </ul>`;

const ydelser = (o) => `
    <ul class="ydelser">
      <li data-vis>
        <h3>Træning af løbsheste</h3>
        <p>Stald og træningsbaner på gården i ${SITE.by}. I ${o.saeson.aar} har staldens heste været til start i ${dkListe(o.banerIAar)}.</p>
      </li>
      <li data-vis style="--i:1">
        <h3>Ridetræning</h3>
        <p>${SITE.fornavn} rider selv heste hver dag i træningen – og er kendt for at puste nyt liv i heste, der har haft svært ved at finde vinderformen.</p>
      </li>
      <li data-vis style="--i:2">
        <h3>Ungheste</h3>
        <p>${o.ungheste.length > 1 ? `Lige nu står ${o.ungheste.length} åringer og 2-årige på træningslisten.` : 'Ungheste køres til og bygges op mod deres første starter.'}</p>
      </li>
      <li data-vis style="--i:3">
        <h3>Kusk og montéryter</h3>
        <p>I ${o.kusk.aar} har ${SITE.fornavn} kørt ${o.kusk.starter} løb og vundet ${o.kusk.sejre} – og han rider også monté.</p>
      </li>
    </ul>`;

const FOTOS = [
  ['aftensejr', 'Sejr i aftenløb på Spar Nord Arena Aalborg'],
  ['i-sulkyen', 'Flemming Jensen i sulkyen før start'],
  ['monte', 'DM i monté 2024 på BioCirc Trav Arena Skive'],
  ['just-hans-2023', 'Just Hans i løb'],
  ['hjemmebane', 'Fejring i vindercirklen på hjemmebanen'],
  ['loeb-2', 'Travløb foran tribunen'],
  ['blomster', 'Kusk i staldens farver med blomsterne efter en sejr'],
  ['vindercirkel', 'Hædring i vindercirklen'],
  ['loeb-felt', 'Feltet i opløbet'],
];
const galleri = (n = FOTOS.length) => `<ul class="galleri">${FOTOS.slice(0, n).map(([navn, alt], i) => `
      <li data-vis style="--i:${i % 3}"><figure>${billede(navn, alt, { sizes: '(min-width: 1000px) 31vw, (min-width: 600px) 46vw, 92vw' })}<figcaption>${esc(alt)}<small>Foto: ${esc(FOTO[navn])}</small></figcaption></figure></li>`).join('')}
    </ul>`;

const banebjaelker = (banetal) => {
  const max = Math.max(1, ...banetal.map((b) => b.antal));
  return `<ul class="baner">${banetal.map((b) => `
        <li style="--w:${Math.round((b.antal / max) * 100)}%"><span>${esc(b.navn)}</span><b>${b.antal}</b></li>`).join('')}
      </ul>`;
};

const kortfigur = (o) => `<figure class="kort" data-vis style="--i:2">
      ${danmarkskort(o.banetal, `Danmarkskort med staldens starter pr. bane i ${o.saeson.aar}: ${o.banetal.map((b) => `${b.navn} ${b.antal}`).join(', ')}.`)}
      <figcaption>Staldens starter pr. dansk bane i ${o.saeson.aar}. Ringen markerer hjemmebanen.</figcaption>
    </figure>`;

const statTabel = (titel, raekker) => `
      <div class="tabelboks" role="region" aria-label="${titel}" tabindex="0">
        <table class="tabel">
          <caption>${titel}</caption>
          <thead><tr><th scope="col">År</th><th scope="col">Starter</th><th scope="col">1.–2.–3.</th><th scope="col">Sejrs&shy;procent</th><th scope="col">Præmiesum</th></tr></thead>
          <tbody>${raekker.filter((s) => s.starter > 0).map((s) => `
            <tr><th scope="row">${s.aar}</th><td>${s.starter}</td><td>${s.sejre}–${s.toer}–${s.treer}</td><td>${s.procent}&nbsp;%</td><td>${kr(s.praemier)}</td></tr>`).join('')}
          </tbody>
        </table>
      </div>`;

const formkurve = (liste) => `<ol class="form" aria-label="Placeringer i de seneste ${liste.length} starter, nyeste først">${liste.map((r) => `<li class="pl${plKlasse(r.placering)}"><span class="sr">${esc(r.hest)}: </span>${plac(r.placering)}</li>`).join('')}</ol>`;

const monte = () => `
<section class="sek sek--is">
  <div class="wrap monte">
    <figure class="monte__foto" data-vis>${billede('monte', 'DM i monté 2024 på BioCirc Trav Arena Skive', { sizes: '(min-width: 901px) 56vw, 92vw' })}${foto('monte')}</figure>
    <div data-vis style="--i:1">
      ${etiket('Monté')}
      <h2>I sadlen hver dag.</h2>
      <blockquote><p>»Jeg kan bedst lide at ride – man er i bedre kontakt med hestene og kan bedre udvikle dem.«</p><cite>Flemming Jensen til danskhv.dk, juni 2024</cite></blockquote>
      <p>Ridetræning har altid været en del af metoden. I 2024 vandt ${SITE.fornavn} Danmarksmesterskabet i monté med Eros Zola.</p>
    </div>
  </div>
</section>`;

// ---------- sider ----------

const forside = (o, data) => `
<section class="hero">
  <div class="wrap hero__gitter">
    <div class="hero__tekst">
      ${etiket('Travtræner · kusk · montéryter')}
      <h1>Flemming<span>Jensen</span></h1>
      <p class="hero__kaelenavn">»Ismanden fra Aalborg«</p>
      <p class="hero__indled">En af dansk travsports førende trænere gennem mange år. Stald og træningsbaner i ${SITE.by}, Spar Nord Arena Aalborg som hjemmebane – og ${o.heste.length} heste i træning.</p>
      <p class="valg">${ring()} ${knap('heste/', 'Se hestene', 'knap--kant')}</p>
    </div>
    <figure class="hero__foto">${billede('portraet', 'Flemming Jensen i sulkyen i staldens hvid-grønne farver', { sizes: '(min-width: 901px) 40vw, 92vw', lazy: false })}${foto('portraet')}</figure>
  </div>
</section>
${tern()}
${haeder()}

<section class="sek">
  <div class="wrap">
    <div class="saeson" data-vis>
      <div>
        ${etiket(`Sæson ${o.saeson.aar}`)}
        <h2>Lige nu.</h2>
        <p>Opdateret ${o.opdateret} fra Dansk Hestevæddeløb.</p>
      </div>
      <dl class="saeson__tal">
        <div><dt>Sejre som træner</dt><dd>${o.saeson.sejre}</dd></div>
        <div><dt>Starter</dt><dd>${o.saeson.starter}</dd></div>
        <div><dt>Sejrsprocent</dt><dd>${o.saeson.procent}<small>%</small></dd></div>
        <div><dt>Indkørt</dt><dd>${nf(o.saeson.praemier)}<small>kr.</small></dd></div>
        <div><dt>Sejre som kusk</dt><dd>${o.kusk.sejre}</dd></div>
        <div class="saeson__naeste"><dt>Næste start</dt><dd>${o.kommende.length ? `${esc(o.kommende[0].hest)}<small>${ugedag(o.kommende[0].dato)} ${kortDato(o.kommende[0].dato)} · ${esc(bane(o.kommende[0].bane))}</small>` : 'Ingen startmeldte<small>Startlister på Travinfo</small>'}</dd></div>
      </dl>
    </div>
  </div>
</section>
${rekord()}

<section class="sek sek--moerk">
  <div class="wrap">
    <div class="sekhoved">
      <div>
        ${etiket('Hestene', ' data-vis')}
        <h2 data-vis style="--i:1">Holdet lige nu.</h2>
      </div>
      <p data-vis style="--i:2">${o.heste.length} heste på træningslisten – fra ${o.aldre[0]}-årige til ${o.aldre[1]}-årige.</p>
    </div>
    ${o.kortheste.length ? hestekort(o.kortheste) : ''}
    <h3 class="mini" data-vis>Mest vindende på listen</h3>
    ${rangliste(o.heste.slice(0, 6))}
    <p class="midt" data-vis>${knap('heste/', `Hele træningslisten (${o.heste.length})`, 'knap--is')}</p>
  </div>
</section>

<section class="sek">
  <div class="wrap">
    <div class="sekhoved">
      <div>
        ${etiket('Karrieren', ' data-vis')}
        <h2 data-vis style="--i:1">Fire årtier i sulkyen.</h2>
      </div>
      <p data-vis style="--i:2">Født i ${data.traener.foedt} og opvokset i Nordjylland. Kælenavnet »Ismanden« fik han for sin rolige og koldblodige kørestil.</p>
    </div>
    ${tidslinje()}
    <p class="valg" data-vis>${link('om-flemming/', 'Hele historien')}</p>
  </div>
</section>
${monte()}

<section class="sek">
  <div class="wrap">
    <div class="sekhoved">
      <div>
        ${etiket('Fra banen', ' data-vis')}
        <h2 data-vis style="--i:1">Billeder.</h2>
      </div>
      <p data-vis style="--i:2">Fotos fra Travet.dk, KM Foto, Dansk Hestevæddeløb og TV2 Nord.</p>
    </div>
    ${galleri(6)}
  </div>
</section>

<section class="sek sek--is">
  <div class="wrap">
    <div class="sekhoved">
      <div>
        ${etiket('Resultater', ' data-vis')}
        <h2 data-vis style="--i:1">Seneste starter.</h2>
      </div>
      <p data-vis style="--i:2">Opdateret ${o.opdateret} fra Dansk Hestevæddeløb.</p>
    </div>
    <div class="resgitter">
      <div class="panel" data-vis>
        ${resultatliste(o.seneste.slice(0, 6))}
        <p class="valg">${link('resultater/', 'Alle resultater og statistik')}</p>
      </div>
      <div class="panel panel--moerk" data-vis style="--i:1">
        <h3 class="mini">Kommende starter</h3>
        ${o.kommende.length ? kommendeListe(o.kommende.slice(0, 5)) : ingenStarter()}
        <h3 class="mini mini--luft">Formkurve</h3>
        ${formkurve(o.seneste)}
      </div>
    </div>
  </div>
</section>

<section class="sek">
  <div class="wrap duo">
    <div>
      ${etiket('Banerne', ' data-vis')}
      <h2 data-vis style="--i:1">Fra Aalborg til Åby.</h2>
      <p class="indled" data-vis style="--i:2">Spar Nord Arena Aalborg er hjemmebanen${o.hjemmestarter ? ` med ${o.hjemmestarter} starter i ${o.saeson.aar}` : ''}.${o.svenske.length ? ` Stalden kører også jævnligt i Sverige – i år bl.a. på ${dkListe(o.svenske)}.` : ''}</p>
      <div data-vis style="--i:3">${banebjaelker(o.banetal)}</div>
    </div>
    ${kortfigur(o)}
  </div>
</section>
${partnere()}
${kontaktbaand()}`;

const omFlemming = (o, data) => `
${sidehoved({
  sti: 'Om Flemming',
  h1: 'Ismanden fra Aalborg',
  tekst: `${SITE.person} er født i ${data.traener.foedt}, professionel træner siden 1994 og en af de førende i dansk travsport – med flere titler som Årets Travtræner og to Derbysejre.`,
  foto: 'smil',
  alt: 'Flemming Jensen smiler i hjelm og løbsdragt',
  pos: '50% 35%',
  chips: [['2009–15', 'Årets Travtræner'], ['2 ×', 'Derby'], [esc(data.traener.licens), 'licens']],
})}

<section class="sek">
  <div class="wrap artikel">
    <aside class="fakta" data-vis>
      <dl>
        <div><dt>Født</dt><dd>17. august ${data.traener.foedt}</dd></div>
        <div><dt>Licens</dt><dd>${esc(data.traener.licens)} – træner, kusk og montéryter</dd></div>
        <div><dt>Træner siden</dt><dd>1. maj 1994</dd></div>
        <div><dt>Hjemmebane</dt><dd>${esc(data.traener.hjemmebane)}</dd></div>
        <div><dt>Stald</dt><dd>${SITE.gade}, ${SITE.by}</dd></div>
        <div><dt>Løbsfarver</dt><dd>Hvid og grøn</dd></div>
        <div><dt>Heste i træning</dt><dd>${o.heste.length}</dd></div>
      </dl>
    </aside>
    <div class="prosa">
      ${etiket('Historien', ' data-vis')}
      <h2 data-vis>Fra amatør til rekordholder.</h2>
      <p class="indled" data-vis>${SITE.person} er født og opvokset i Nordjylland og lærte meget af faget hos amatørtræneren Erik Nielsen i Lemb, hvor han kom fra han var helt ung.</p>
      <p data-vis>Han begyndte som amatørkusk i starten af 1980’erne og fik hurtigt succes i V65-løbene – bl.a. med hoppen Enjoy Engholm. I 1986 vandt han Danmarksmesterskabet for amatører.</p>
      <p data-vis>Som professionel startede han i Skive og har siden 1. maj 1994 været træner i Aalborg. Samme år vandt Sleipner Jydsk 4-årings Grand Prix, og op gennem 90’erne blev han kendt som træneren, der kunne puste liv i heste, andre havde opgivet – bl.a. gennem ridetræning.</p>
      <p data-vis>I slutningen af 1999 flyttede familien til Sverige, hvor han var træner på Axevalla og siden Åby. I 2007 kom de hjem til Aalborg igen.</p>
      <figure class="prosa__foto" data-vis>${billede('aftensejr', 'Sejr i aftenløb på Spar Nord Arena Aalborg', { sizes: '(min-width: 1000px) 60vw, 92vw' })}<figcaption>Foto: ${FOTO.aftensejr}</figcaption></figure>
      <h2 data-vis>Årets Travtræner.</h2>
      <p data-vis>I 2009 blev han for første gang kåret som Årets Travtræner ved Hestesportens Galla. Året efter gentog han det – og blev samtidig Årets Travkusk. Titlen som Årets Travtræner fulgte igen i 2013, 2014 og 2015.</p>
      <p data-vis>Dansk Trav Derby har han vundet to gange: som træner med Esterel Sunset i 2001 og som kusk på Bent O. Pedersen-trænede Okay Bee i 2010 – hesten, der vandt både Dansk Opdrætningsløb, Dansk Trav Kriterium og Derbyet. Hertil kommer bl.a. Dansk Hoppe Derby og Harper Hanovers Løb med Tøjeksperten.</p>
      <p data-vis>I 2013 blev han den første danske træner med over 10 millioner kroner indkørt på én sæson, og i 2014 blev det til 11,1 millioner.</p>
      <blockquote data-vis><p>»Vi forsøgte bare at gøre det så godt som muligt med alle hestene.«</p><cite>Om 10-millionersæsonen – gengivet af Travet.dk efter Ekstra Bladet</cite></blockquote>
      <h2 data-vis>Hestens præmisser.</h2>
      <p data-vis>Han har sine egne meninger om træning og er inspireret af Erik Nielsen og Takter-familien med Bo W. Takter i front. I alt, han siger om sporten, går det igen, at det hele skal ske på hestens præmisser. Blandt kollegerne bliver han fremhævet som en, man trygt kan henvende sig til for råd.</p>
      <p data-vis>I dag driver han ${SITE.hold} fra gården på ${SITE.gade} i ${SITE.by} med stalde og træningsbaner – og han rider selv heste i træningen hver dag.</p>
      <p class="valg" data-vis>${ekstern(SITE.travinfo, `Se ${SITE.fornavn}s profil på Travinfo`)}</p>
      <p class="note" data-vis>Kilder: travservice.dk (17. august 2021), kmfoto.dk (2. februar 2022), travet.dk (17. august 2025, 3. november 2025, 11. oktober 2026), danskhv.dk (19. juni 2024), tf1909.dk og Dansk Hestevæddeløb.</p>
    </div>
  </div>
</section>

<section class="sek sek--is">
  <div class="wrap">
    <div class="sekhoved">
      <div>
        ${etiket('Store heste', ' data-vis')}
        <h2 data-vis style="--i:1">Nogle af navnene.</h2>
      </div>
      <p data-vis style="--i:2">Et udvalg af heste, der har været med til at skrive Flemming Jensens historie.</p>
    </div>
    ${storeheste()}
  </div>
</section>

<section class="sek sek--moerk">
  <div class="wrap">
    <div class="sekhoved">
      <div>
        ${etiket('Statistik', ' data-vis')}
        <h2 data-vis style="--i:1">Sæson for sæson.</h2>
      </div>
      <p data-vis style="--i:2">Officielle tal fra Dansk Hestevæddeløb, opdateret ${o.opdateret}.</p>
    </div>
    <div class="tabeller" data-vis>
      ${statTabel('Som træner', data.traenerStatistik)}
      ${statTabel('Som kusk', data.kuskStatistik)}
    </div>
  </div>
</section>
${kontaktbaand()}`;

const stalden = (o) => `
${sidehoved({
  sti: 'Stalden',
  h1: `Gården i ${SITE.by}`,
  tekst: `${SITE.hold} holder til på ${SITE.gade} i ${SITE.by} med stalde og træningsbaner – og Spar Nord Arena Aalborg som hjemmebane.`,
  foto: 'hjemmebane',
  alt: 'Fejring i vindercirklen på hjemmebanen',
  pos: '50% 50%',
  chips: [[o.heste.length, 'heste i træning'], [`${o.aldre[0]}–${o.aldre[1]}`, 'år gamle'], [o.banetal.length, `baner i ${o.saeson.aar}`]],
})}

<section class="sek">
  <div class="wrap">
    <div class="sekhoved">
      <div>
        ${etiket('Det tilbyder stalden', ' data-vis')}
        <h2 data-vis style="--i:1">Erfaring på alle hesteniveauer.</h2>
      </div>
      <p data-vis style="--i:2">Ring til ${SITE.fornavn} for pris og en snak om din hest.</p>
    </div>
    ${ydelser(o)}
  </div>
</section>
${monte()}

<section class="sek">
  <div class="wrap">
    <div class="sekhoved">
      <div>
        ${etiket('Fra banen', ' data-vis')}
        <h2 data-vis style="--i:1">Billeder.</h2>
      </div>
      <p data-vis style="--i:2">Fotos fra Travet.dk, KM Foto, Dansk Hestevæddeløb og TV2 Nord.</p>
    </div>
    ${galleri()}
  </div>
</section>

<section class="sek sek--is">
  <div class="wrap duo">
    <div>
      ${etiket('Hjemmebanen', ' data-vis')}
      <h2 data-vis style="--i:1">Spar Nord Arena Aalborg.</h2>
      <p class="indled" data-vis style="--i:2">Aalborg Væddeløbsbane – i dag Spar Nord Arena Aalborg – har været ${SITE.fornavn}s hjemmebane siden 1994 – kun afbrudt af årene i Sverige${o.hjemmestarter ? `, og i ${o.saeson.aar} har stalden haft ${o.hjemmestarter} starter her` : ''}.</p>
      <div data-vis style="--i:3">${banebjaelker(o.banetal)}</div>
      <p class="valg" data-vis style="--i:4">${ekstern(SITE.hjemmebane, 'aav.dk')}</p>
    </div>
    ${kortfigur(o)}
  </div>
</section>

<section class="sek">
  <div class="wrap">
    <div class="adresse" data-vis>
      <div>
        ${etiket('Adresse')}
        <address class="adresse__stor">${SITE.navn}<br>${SITE.gade}<br>${SITE.postnr} ${SITE.by}</address>
      </div>
      <p>${ekstern(SITE.kort, 'Åbn i Google Maps', 'knap')}</p>
    </div>
  </div>
</section>
${kontaktbaand()}`;

const heste = (o) => `
${sidehoved({
  sti: 'Heste',
  h1: 'Heste i træning',
  tekst: 'Træningslisten kommer direkte fra Dansk Hestevæddeløb og følger automatisk med, når heste kommer til eller rejser videre.',
  foto: 'just-hans',
  alt: 'Just Hans efter sejren i Mesterskab for Danmark 2026',
  pos: '50% 40%',
  chips: [[o.heste.length - o.ungheste.length, 'løbsheste'], [o.ungheste.length, 'ungheste']],
})}

${o.kortheste.length ? `
<section class="sek sek--moerk sek--smal">
  <div class="wrap">
    ${etiket('I nyhederne', ' data-vis')}
    ${hestekort(o.kortheste)}
  </div>
</section>` : ''}

<section class="sek">
  <div class="wrap">
    ${hestegruppe('Løbsheste', o.heste.filter((h) => h.alder >= 3))}
    ${hestegruppe('2-årige', o.heste.filter((h) => h.alder === 2))}
    ${hestegruppe('Åringer', o.heste.filter((h) => h.alder <= 1))}
    <p class="note" data-vis>Starter, placeringer (1.–2.–3.), præmiesum og rekord er livstal. Rekorden er hestens hurtigste kilometertid; a = autostart, k/m/l = kort, mellem og lang distance. Klik på en hest for at se den på Travinfo. Kilde: Dansk Hestevæddeløb, opdateret ${o.opdateret}.</p>
  </div>
</section>
${kontaktbaand()}`;

const resultater = (o, data) => `
${sidehoved({
  sti: 'Resultater',
  h1: 'Resultater',
  tekst: `Staldens seneste starter, kommende løb og sæsonens tal. Data kommer fra Dansk Hestevæddeløb og er senest opdateret ${o.opdateret}.`,
  foto: 'ina-crown',
  alt: 'Ina Crown i løb',
  pos: '50% 50%',
  chips: [[o.saeson.sejre, `sejre i ${o.saeson.aar}`], [`${o.saeson.procent} %`, 'sejrsprocent'], [o.kusk.sejre, 'sejre som kusk']],
})}

<section class="sek">
  <div class="wrap">
    ${etiket(`Sæson ${o.saeson.aar} som træner`, ' data-vis')}
    <dl class="kpi" data-vis>
      <div><dt>Starter</dt><dd>${o.saeson.starter}</dd></div>
      <div><dt>Sejre</dt><dd>${o.saeson.sejre}</dd></div>
      <div><dt>2.-pladser</dt><dd>${o.saeson.toer}</dd></div>
      <div><dt>3.-pladser</dt><dd>${o.saeson.treer}</dd></div>
      <div><dt>Sejrsprocent</dt><dd>${o.saeson.procent}<small>%</small></dd></div>
      <div><dt>Indkørt</dt><dd>${nf(o.saeson.praemier)}<small>kr.</small></dd></div>
    </dl>
    <div class="formboks" data-vis style="--i:1">
      <h3 class="mini">Formkurve – de seneste ${o.seneste.length} starter</h3>
      ${formkurve(o.seneste)}
    </div>
  </div>
</section>

<section class="sek sek--is">
  <div class="wrap resgitter">
    <div class="panel" data-vis>
      <h2 class="mini">De seneste ${o.seneste.length} starter</h2>
      ${resultatliste(o.seneste)}
      <p class="note">Tider er kilometertider. a = autostart, g = galop undervejs. – = uplaceret, disk. = diskvalificeret.</p>
    </div>
    <div class="panel panel--moerk" data-vis style="--i:1">
      <h2 class="mini">Kommende starter</h2>
      ${o.kommende.length ? kommendeListe(o.kommende) : ingenStarter()}
    </div>
  </div>
</section>

<section class="sek sek--moerk">
  <div class="wrap">
    <div class="sekhoved">
      <div>
        ${etiket('Statistik', ' data-vis')}
        <h2 data-vis style="--i:1">Sæson for sæson.</h2>
      </div>
      <p data-vis style="--i:2">Alle resultater og detaljer findes hos Dansk Hestevæddeløb. ${ekstern(SITE.travinfo, 'Åbn Travinfo')}</p>
    </div>
    <div class="tabeller" data-vis>
      ${statTabel('Som træner', data.traenerStatistik)}
      ${statTabel('Som kusk', data.kuskStatistik)}
    </div>
  </div>
</section>
${kontaktbaand()}`;

const kontakt = () => `
${sidehoved({
  sti: 'Kontakt',
  h1: `Kontakt ${SITE.fornavn}`,
  tekst: 'Har du en hest, der skal i træning, eller et spørgsmål til stalden? Ring eller send en sms.',
  foto: 'i-sulkyen',
  alt: 'Flemming Jensen i sulkyen før start',
  pos: '50% 40%',
})}

<section class="sek">
  <div class="wrap kontakt">
    <div class="kontakt__felt kontakt__felt--tlf" data-vis>
      <h2 class="mini">Telefon</h2>
      <p class="kontakt__stor"><a href="tel:${tlfLink}">${SITE.telefon}</a></p>
      <p class="valg">${ring('knap--is')} <a class="link link--lys" href="sms:${tlfLink}">Send en sms ${pil}</a></p>
    </div>
    <div class="kontakt__felt" data-vis style="--i:1">
      <h2 class="mini">${SITE.email ? 'E-mail' : 'Stalden'}</h2>
      ${SITE.email ? `<p class="kontakt__stor kontakt__stor--mail"><a href="mailto:${SITE.email}">${SITE.email}</a></p>` : `<address class="kontakt__adr">${SITE.navn}<br>${SITE.gade}<br>${SITE.postnr} ${SITE.by}</address><p class="valg">${ekstern(SITE.kort, 'Find vej')}</p>`}
    </div>
    <div class="kontakt__felt kontakt__felt--kort" data-vis style="--i:2">
      <div>
        <h2 class="mini">Hjemmebane</h2>
        <p class="kontakt__adr">Spar Nord Arena Aalborg<br>Skydebanevej 25, 9000 Aalborg</p>
        <p class="valg">${ekstern(SITE.hjemmebane, 'aav.dk')}</p>
      </div>
      <div class="kort kort--mini">${danmarkskort([{ kode: HJEM, navn: 'Aalborg' }], 'Danmarkskort, hvor Aalborg er markeret')}</div>
    </div>
  </div>
</section>`;

const ikkeFundet = () => `
${sidehoved({
  sti: 'Fejl 404',
  h1: 'Siden findes ikke',
  tekst: `Adressen er forkert, eller siden er flyttet. <a class="link link--lys" href="${R}">Til forsiden ${pil}</a>`,
  foto: 'loeb-felt',
  pos: '50% 50%',
})}`;

/** Alle sider som [{ sti, html }]. `idag` er YYYY-MM-DD, `v` et versionsmærke til css/js. */
export function sider(data, { v, idag, kort }) {
  V = v;
  KORT = kort;
  const o = afled(data, idag);
  const side = (sti, def) => {
    R = sti === '404.html' ? new URL(SITE.url + '/').pathname : sti ? '../' : '';
    return { sti: sti.endsWith('.html') ? sti : `${sti}index.html`, url: sti, html: layout({ sti, o, ...def() }) };
  };
  return [
    side('', () => ({
      titel: `${SITE.navn} – travtræner i Hjallerup og Aalborg`,
      beskrivelse: `${SITE.person}, »Ismanden fra Aalborg«: flere gange Årets Travtræner, to Derbysejre og første danske træner over 10 mio. kr. på en sæson. ${o.heste.length} heste i træning i Hjallerup.`,
      klasse: 'forside',
      indhold: forside(o, data),
    })),
    side('om-flemming/', () => ({
      titel: `Om ${SITE.person} – Ismanden fra Aalborg | ${SITE.navn}`,
      beskrivelse: `Historien om ${SITE.person}: fra amatør i 1980’erne til flere titler som Årets Travtræner, to Derbysejre, årene i Sverige og DM i monté 2024.`,
      indhold: omFlemming(o, data),
    })),
    side('stalden/', () => ({
      titel: `Stalden i ${SITE.by} | ${SITE.navn}`,
      beskrivelse: `${SITE.hold} holder til på ${SITE.gade}, ${SITE.postnr} ${SITE.by}, med stalde og træningsbaner og Spar Nord Arena Aalborg som hjemmebane.`,
      indhold: stalden(o),
    })),
    side('heste/', () => ({
      titel: `Heste i træning | ${SITE.navn}`,
      beskrivelse: `Se de ${o.heste.length} travheste, der lige nu er i træning hos ${SITE.person} – med afstamning, starter, præmiesum og rekord.`,
      indhold: heste(o),
    })),
    side('resultater/', () => ({
      titel: `Resultater og statistik | ${SITE.navn}`,
      beskrivelse: `Seneste resultater, kommende starter og sæsonstatistik for travtræner ${SITE.person}: ${o.saeson.sejre} sejre på ${o.saeson.starter} starter i ${o.saeson.aar}.`,
      indhold: resultater(o, data),
    })),
    side('kontakt/', () => ({
      titel: `Kontakt ${SITE.person} – travtræner i ${SITE.by}`,
      beskrivelse: `Kontakt travtræner ${SITE.person} på telefon ${SITE.telefon}. Stalden ligger på ${SITE.gade}, ${SITE.postnr} ${SITE.by}.`,
      indhold: kontakt(),
    })),
    side('404.html', () => ({
      titel: `Siden findes ikke | ${SITE.navn}`,
      beskrivelse: `Siden findes ikke. Gå til forsiden for travtræner ${SITE.person} i ${SITE.by} ved Aalborg.`,
      noindex: true,
      indhold: ikkeFundet(),
    })),
  ];
}
