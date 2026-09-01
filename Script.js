/* ============================================================
   MAHIR FRISEUR — site interactions
   Language switch, mobile nav, scroll header, reveal-on-scroll,
   before/after slider.
   ============================================================ */

/* ---------- i18n ---------- */
const translations = {
  de: {
    "meta.title": "Mahir Friseur — Friseursalon in Berlin",
    "meta.desc": "Mahir Friseur: Haarschnitt, Coloration, Bart & Styling in Berlin. Termine bequem online buchen. Meisterhandwerk seit über 12 Jahren.",
    "nav.services": "Leistungen",
    "nav.gallery": "Galerie",
    "nav.reviews": "Bewertungen",
    "nav.location": "Standort",
    "nav.book": "Termin buchen",
    "hero.kicker": "Friseursalon in Berlin",
    "hero.h1.line1": "Handwerk,",
    "hero.h1.line2": "das man <em>sieht</em>.",
    "hero.lede": "Präzise Schnitte, natürliche Farben und ehrliche Beratung. Bei Mahir Friseur bekommt jeder Kopf die Zeit, die er verdient.",
    "hero.cta.book": "Termin buchen",
    "hero.cta.insta": "Auf Instagram ansehen",
    "hero.stat1.num": "12+",
    "hero.stat1.label": "Jahre Erfahrung",
    "hero.stat2.num": "4,9",
    "hero.stat2.label": "⌀ Bewertung",
    "hero.stat3.num": "3.000+",
    "hero.stat3.label": "zufriedene Gäste",
    "hero.badge.title": "Jetzt geöffnet",
    "hero.badge.text": "Walk-ins willkommen, Termine bevorzugt.",

    "services.kicker": "Leistungen & Preise",
    "services.h2": "Für jeden Anlass der richtige Schnitt",
    "services.p": "Alle Preise inkl. Beratung. Änderungen je nach Haarlänge und Aufwand möglich.",
    "services.col1.title": "Damen",
    "services.col1.s1.name": "Waschen, Schneiden, Föhnen",
    "services.col1.s1.desc": "Inkl. Kopfhautmassage",
    "services.col1.s1.price": "ab 45 €",
    "services.col1.s2.name": "Coloration",
    "services.col1.s2.desc": "Einfarbig, inkl. Pflege",
    "services.col1.s2.price": "ab 65 €",
    "services.col1.s3.name": "Balayage / Strähnen",
    "services.col1.s3.desc": "Freihandtechnik",
    "services.col1.s3.price": "ab 95 €",
    "services.col1.s4.name": "Föhnen & Styling",
    "services.col1.s4.desc": "Ohne Schnitt",
    "services.col1.s4.price": "ab 28 €",
    "services.col2.title": "Herren",
    "services.col2.s1.name": "Herrenschnitt",
    "services.col2.s1.desc": "Schere & Maschine",
    "services.col2.s1.price": "ab 28 €",
    "services.col2.s2.name": "Bartpflege",
    "services.col2.s2.desc": "Konturen & Trimm",
    "services.col2.s2.price": "ab 16 €",
    "services.col2.s3.name": "Schnitt & Bart komplett",
    "services.col2.s3.desc": "Unser Klassiker",
    "services.col2.s3.price": "ab 40 €",
    "services.col2.s4.name": "Kids Haarschnitt",
    "services.col2.s4.desc": "Bis 12 Jahre",
    "services.col2.s4.price": "ab 18 €",
    "services.note": "Alle Leistungen auf Anfrage auch als Hochzeits- oder Eventtermin buchbar.",

    "booking.kicker": "Online-Buchung",
    "booking.h2": "Buchen Sie Ihren Termin in 60 Sekunden",
    "booking.p": "Wählen Sie Ihren Stylisten, Ihre Leistung und Ihre Wunschzeit — direkt online, rund um die Uhr verfügbar.",
    "booking.cta": "Jetzt Termin buchen",
    "booking.hint": "Sichere Online-Terminverwaltung · jederzeit stornierbar",

    "gallery.kicker": "Galerie",
    "gallery.h2": "Aus dem Salon",
    "gallery.p": "Ein Einblick in unsere Arbeit und unseren Alltag.",

    "ba.kicker": "Ergebnisse",
    "ba.h2": "Vorher & Nachher",
    "ba.p": "Ziehen Sie den Regler, um den Unterschied zu sehen.",
    "ba.caption": "Beispielbild — Regler zum Vergleichen ziehen",
    "ba.before": "VORHER",
    "ba.after": "NACHHER",

    "testi.kicker": "Bewertungen",
    "testi.h2": "Was unsere Gäste sagen",
    "testi.p": "Echtes Feedback von echten Terminen.",
    "testi1.quote": "Endlich ein Salon, der genau zuhört. Mein Schnitt sitzt drei Wochen später noch perfekt.",
    "testi1.name": "Elena K.",
    "testi1.role": "Stammkundin seit 2022",
    "testi2.quote": "Bart und Fade in einem Termin, sauberer als überall sonst in der Stadt.",
    "testi2.name": "Jonas R.",
    "testi2.role": "Google Rezension",
    "testi3.quote": "Balayage war genau die Farbe, die ich mir vorgestellt hatte. Sehr geduldige Beratung.",
    "testi3.name": "Fatma S.",
    "testi3.role": "Instagram Kommentar",

    "location.kicker": "Standort & Öffnungszeiten",
    "location.h2": "Besuchen Sie uns",
    "location.address.title": "Adresse",
    "location.address.text": "Musterstraße 12, 10115 Berlin",
    "hours.mon": "Montag",
    "hours.tue": "Dienstag",
    "hours.wed": "Mittwoch",
    "hours.thu": "Donnerstag",
    "hours.fri": "Freitag",
    "hours.sat": "Samstag",
    "hours.sun": "Sonntag",
    "hours.closed": "Geschlossen",
    "contact.whatsapp": "WhatsApp schreiben",
    "contact.call": "Anrufen",
    "contact.insta": "Instagram",

    "footer.about": "Friseursalon für Damen, Herren & Kinder in Berlin. Präzision, Ehrlichkeit und ein gutes Gespräch bei jedem Termin.",
    "footer.nav.title": "Navigation",
    "footer.legal.title": "Rechtliches",
    "footer.legal.impressum": "Impressum",
    "footer.legal.privacy": "Datenschutz",
    "footer.contact.title": "Kontakt",
    "footer.rights": "Alle Rechte vorbehalten.",
    "footer.made": "Musterwebsite",

    "call.chip": "Anrufen",

    "legal.back": "Zurück zur Startseite",
    "impressum.h1": "Impressum",
    "impressum.s1.title": "Angaben gemäß § 5 TMG",
    "impressum.s2.title": "Kontakt",
    "impressum.s3.title": "Umsatzsteuer-ID",
    "impressum.s3.text": "Umsatzsteuer-Identifikationsnummer gemäß § 27 a Umsatzsteuergesetz: DE 000000000 (Platzhalter)",
    "impressum.s4.title": "Verantwortlich für den Inhalt nach § 55 Abs. 2 RStV",
    "impressum.s5.title": "Streitschlichtung",
    "impressum.s5.text": "Die Europäische Kommission stellt eine Plattform zur Online-Streitbeilegung (OS) bereit: https://ec.europa.eu/consumers/odr/. Wir sind zur Teilnahme an einem Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle nicht verpflichtet und nicht bereit.",
    "impressum.s6.title": "Haftung für Inhalte",
    "impressum.s6.text": "Als Diensteanbieter sind wir gemäß § 7 Abs. 1 TMG für eigene Inhalte auf diesen Seiten nach den allgemeinen Gesetzen verantwortlich. Diese Musterseite dient ausschließlich zu Demonstrationszwecken.",

    "datenschutz.h1": "Datenschutzerklärung",
    "datenschutz.s1.title": "1. Verantwortlicher",
    "datenschutz.s2.title": "2. Erhebung und Verarbeitung von Daten",
    "datenschutz.s2.text": "Wir verarbeiten personenbezogene Daten, die Sie uns bei einer Terminbuchung, telefonisch oder per WhatsApp mitteilen (z. B. Name, Telefonnummer, gewünschte Leistung), ausschließlich zur Durchführung und Verwaltung Ihres Termins.",
    "datenschutz.s3.title": "3. Kontaktaufnahme (WhatsApp, Telefon, Instagram)",
    "datenschutz.s3.text": "Wenn Sie über WhatsApp, Telefon oder Instagram Kontakt mit uns aufnehmen, gelten zusätzlich die Datenschutzbestimmungen des jeweiligen Anbieters (Meta Platforms Ireland Ltd.).",
    "datenschutz.s4.title": "4. Online-Terminbuchung",
    "datenschutz.s4.text": "Für die Online-Terminbuchung nutzen wir einen externen Buchungsdienst. Die dort eingegebenen Daten werden gemäß der Datenschutzerklärung dieses Anbieters verarbeitet.",
    "datenschutz.s5.title": "5. Cookies und Google Maps",
    "datenschutz.s5.text": "Diese Seite bindet eine Karte von Google Maps ein. Beim Aufruf der Karte können Daten an Google LLC übertragen werden. Weitere Informationen finden Sie in der Datenschutzerklärung von Google.",
    "datenschutz.s6.title": "6. Ihre Rechte",
    "datenschutz.s6.li1": "Auskunft über die zu Ihrer Person gespeicherten Daten",
    "datenschutz.s6.li2": "Berichtigung unrichtiger Daten",
    "datenschutz.s6.li3": "Löschung Ihrer Daten, soweit keine Aufbewahrungspflicht besteht",
    "datenschutz.s6.li4": "Widerspruch gegen die Verarbeitung Ihrer Daten",
    "datenschutz.note": "Diese Datenschutzerklärung ist eine Platzhalter-Vorlage für diese Musterwebsite und ersetzt keine individuelle Rechtsberatung."
  },
  en: {
    "meta.title": "Mahir Friseur — Hair Salon in Berlin",
    "meta.desc": "Mahir Friseur: haircuts, colour, beard grooming & styling in Berlin. Book your appointment online. Master craftsmanship for over 12 years.",
    "nav.services": "Services",
    "nav.gallery": "Gallery",
    "nav.reviews": "Reviews",
    "nav.location": "Location",
    "nav.book": "Book now",
    "hero.kicker": "Hair salon in Berlin",
    "hero.h1.line1": "Craft you can",
    "hero.h1.line2": "<em>see</em>.",
    "hero.lede": "Precise cuts, natural colour and honest advice. At Mahir Friseur, every head gets the time it deserves.",
    "hero.cta.book": "Book appointment",
    "hero.cta.insta": "View on Instagram",
    "hero.stat1.num": "12+",
    "hero.stat1.label": "years of experience",
    "hero.stat2.num": "4.9",
    "hero.stat2.label": "avg. rating",
    "hero.stat3.num": "3,000+",
    "hero.stat3.label": "happy guests",
    "hero.badge.title": "Open now",
    "hero.badge.text": "Walk-ins welcome, appointments preferred.",

    "services.kicker": "Services & prices",
    "services.h2": "The right cut for every occasion",
    "services.p": "All prices include consultation. May vary with hair length and effort.",
    "services.col1.title": "Women",
    "services.col1.s1.name": "Wash, cut & blow-dry",
    "services.col1.s1.desc": "Includes scalp massage",
    "services.col1.s1.price": "from €45",
    "services.col1.s2.name": "Colour",
    "services.col1.s2.desc": "Single tone, incl. care",
    "services.col1.s2.price": "from €65",
    "services.col1.s3.name": "Balayage / highlights",
    "services.col1.s3.desc": "Freehand technique",
    "services.col1.s3.price": "from €95",
    "services.col1.s4.name": "Blow-dry & styling",
    "services.col1.s4.desc": "Without cut",
    "services.col1.s4.price": "from €28",
    "services.col2.title": "Men",
    "services.col2.s1.name": "Men's haircut",
    "services.col2.s1.desc": "Scissor & clipper work",
    "services.col2.s1.price": "from €28",
    "services.col2.s2.name": "Beard grooming",
    "services.col2.s2.desc": "Line-up & trim",
    "services.col2.s2.price": "from €16",
    "services.col2.s3.name": "Cut & beard combo",
    "services.col2.s3.desc": "Our classic",
    "services.col2.s3.price": "from €40",
    "services.col2.s4.name": "Kids haircut",
    "services.col2.s4.desc": "Up to age 12",
    "services.col2.s4.price": "from €18",
    "services.note": "All services can also be booked for weddings or events on request.",

    "booking.kicker": "Online booking",
    "booking.h2": "Book your appointment in 60 seconds",
    "booking.p": "Choose your stylist, your service and your preferred time — directly online, available around the clock.",
    "booking.cta": "Book appointment now",
    "booking.hint": "Secure online scheduling · cancel anytime",

    "gallery.kicker": "Gallery",
    "gallery.h2": "From the salon",
    "gallery.p": "A look at our work and everyday life at the salon.",

    "ba.kicker": "Results",
    "ba.h2": "Before & after",
    "ba.p": "Drag the slider to see the difference.",
    "ba.caption": "Sample image — drag the slider to compare",
    "ba.before": "BEFORE",
    "ba.after": "AFTER",

    "testi.kicker": "Reviews",
    "testi.h2": "What our guests say",
    "testi.p": "Real feedback from real appointments.",
    "testi1.quote": "Finally a salon that actually listens. My cut still looks perfect three weeks later.",
    "testi1.name": "Elena K.",
    "testi1.role": "Regular guest since 2022",
    "testi2.quote": "Beard and fade in one appointment, cleaner than anywhere else in the city.",
    "testi2.name": "Jonas R.",
    "testi2.role": "Google review",
    "testi3.quote": "The balayage was exactly the colour I had in mind. Very patient consultation.",
    "testi3.name": "Fatma S.",
    "testi3.role": "Instagram comment",

    "location.kicker": "Location & hours",
    "location.h2": "Come visit us",
    "location.address.title": "Address",
    "location.address.text": "Musterstraße 12, 10115 Berlin",
    "hours.mon": "Monday",
    "hours.tue": "Tuesday",
    "hours.wed": "Wednesday",
    "hours.thu": "Thursday",
    "hours.fri": "Friday",
    "hours.sat": "Saturday",
    "hours.sun": "Sunday",
    "hours.closed": "Closed",
    "contact.whatsapp": "Message on WhatsApp",
    "contact.call": "Call now",
    "contact.insta": "Instagram",

    "footer.about": "Hair salon for women, men & kids in Berlin. Precision, honesty and good conversation at every appointment.",
    "footer.nav.title": "Navigation",
    "footer.legal.title": "Legal",
    "footer.legal.impressum": "Legal notice",
    "footer.legal.privacy": "Privacy policy",
    "footer.contact.title": "Contact",
    "footer.rights": "All rights reserved.",
    "footer.made": "Sample website",

    "call.chip": "Call",

    "legal.back": "Back to homepage",
    "impressum.h1": "Legal notice",
    "impressum.s1.title": "Information according to § 5 TMG",
    "impressum.s2.title": "Contact",
    "impressum.s3.title": "VAT ID",
    "impressum.s3.text": "VAT identification number according to §27a of the German VAT act: DE 000000000 (placeholder)",
    "impressum.s4.title": "Responsible for content according to § 55 (2) RStV",
    "impressum.s5.title": "Dispute resolution",
    "impressum.s5.text": "The European Commission provides a platform for online dispute resolution (ODR): https://ec.europa.eu/consumers/odr/. We are not obliged or willing to participate in dispute resolution proceedings before a consumer arbitration board.",
    "impressum.s6.title": "Liability for content",
    "impressum.s6.text": "As a service provider, we are responsible for our own content on these pages under general law in accordance with § 7 (1) TMG. This sample page is for demonstration purposes only.",

    "datenschutz.h1": "Privacy policy",
    "datenschutz.s1.title": "1. Data controller",
    "datenschutz.s2.title": "2. Collection and processing of data",
    "datenschutz.s2.text": "We process personal data you provide when booking an appointment, by phone or via WhatsApp (e.g. name, phone number, requested service), solely to carry out and manage your appointment.",
    "datenschutz.s3.title": "3. Contacting us (WhatsApp, phone, Instagram)",
    "datenschutz.s3.text": "If you contact us via WhatsApp, phone or Instagram, the privacy policy of the respective provider (Meta Platforms Ireland Ltd.) also applies.",
    "datenschutz.s4.title": "4. Online booking",
    "datenschutz.s4.text": "For online appointment booking we use an external booking service. Data entered there is processed according to that provider's own privacy policy.",
    "datenschutz.s5.title": "5. Cookies and Google Maps",
    "datenschutz.s5.text": "This page embeds a Google Maps map. When the map is loaded, data may be transmitted to Google LLC. See Google's privacy policy for details.",
    "datenschutz.s6.title": "6. Your rights",
    "datenschutz.s6.li1": "Access to the data stored about you",
    "datenschutz.s6.li2": "Correction of inaccurate data",
    "datenschutz.s6.li3": "Deletion of your data, unless a retention obligation applies",
    "datenschutz.s6.li4": "Objection to the processing of your data",
    "datenschutz.note": "This privacy policy is a placeholder template for this sample website and does not replace individual legal advice."
  }
};

const STORAGE_KEY = "mahir-lang";

function getLang(){
  return localStorage.getItem(STORAGE_KEY) || document.documentElement.lang || "de";
}

function applyLang(lang){
  const dict = translations[lang];
  if(!dict) return;
  document.documentElement.lang = lang;

  document.querySelectorAll("[data-i18n]").forEach(el => {
    const key = el.getAttribute("data-i18n");
    if(dict[key] !== undefined){
      el.innerHTML = dict[key];
    }
  });

  document.querySelectorAll("[data-i18n-attr]").forEach(el => {
    const pairs = el.getAttribute("data-i18n-attr").split(",");
    pairs.forEach(pair => {
      const [attr, key] = pair.split(":").map(s => s.trim());
      if(dict[key] !== undefined){
        el.setAttribute(attr, dict[key]);
      }
    });
  });

  const titleEl = document.querySelector("title");
  if(titleEl && dict["meta.title"]) titleEl.textContent = dict["meta.title"];
  const metaDesc = document.querySelector('meta[name="description"]');
  if(metaDesc && dict["meta.desc"]) metaDesc.setAttribute("content", dict["meta.desc"]);

  document.querySelectorAll(".lang-switch button").forEach(btn => {
    btn.classList.toggle("is-active", btn.dataset.lang === lang);
  });

  try{ localStorage.setItem(STORAGE_KEY, lang); }catch(e){}
}

function initLangSwitch(){
  document.querySelectorAll(".lang-switch button").forEach(btn => {
    btn.addEventListener("click", () => applyLang(btn.dataset.lang));
  });
  applyLang(getLang());
}

/* ---------- Header scroll state + mobile nav ---------- */
function initHeader(){
  const header = document.querySelector(".site-header");
  if(!header) return;
  const toggle = header.querySelector(".nav-toggle");
  const onScroll = () => header.classList.toggle("is-scrolled", window.scrollY > 30);
  onScroll();
  window.addEventListener("scroll", onScroll, { passive: true });

  if(toggle){
    toggle.addEventListener("click", () => {
      const open = header.classList.toggle("nav-open");
      toggle.classList.toggle("is-open", open);
      toggle.setAttribute("aria-expanded", open ? "true" : "false");
    });
    header.querySelectorAll(".main-nav a").forEach(a => {
      a.addEventListener("click", () => {
        header.classList.remove("nav-open");
        toggle.classList.remove("is-open");
      });
    });
  }
}

/* ---------- Reveal on scroll ---------- */
function initReveal(){
  const items = document.querySelectorAll(".reveal");
  if(!items.length) return;
  if(!("IntersectionObserver" in window)){
    items.forEach(el => el.classList.add("is-visible"));
    return;
  }
  const io = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if(entry.isIntersecting){
        entry.target.classList.add("is-visible");
        io.unobserve(entry.target);
      }
    });
  }, { threshold: 0.15 });
  items.forEach(el => io.observe(el));
}

/* ---------- Before / after slider ---------- */
function initBeforeAfter(){
  const wrap = document.querySelector(".ba-wrap");
  if(!wrap) return;
  const beforeWrap = wrap.querySelector(".ba-before-wrap");
  const handle = wrap.querySelector(".ba-handle");

  function setPos(percent){
    const p = Math.min(100, Math.max(0, percent));
    beforeWrap.style.width = p + "%";
    handle.style.left = p + "%";
  }
  setPos(50);

  let dragging = false;

  function posFromEvent(e){
    const rect = wrap.getBoundingClientRect();
    const x = (e.touches ? e.touches[0].clientX : e.clientX) - rect.left;
    return (x / rect.width) * 100;
  }

  function start(e){ dragging = true; move(e); }
  function move(e){
    if(!dragging) return;
    setPos(posFromEvent(e));
    e.preventDefault();
  }
  function end(){ dragging = false; }

  handle.addEventListener("mousedown", start);
  wrap.addEventListener("mousedown", start);
  window.addEventListener("mousemove", move);
  window.addEventListener("mouseup", end);

  handle.addEventListener("touchstart", start, { passive: true });
  wrap.addEventListener("touchstart", start, { passive: true });
  window.addEventListener("touchmove", move, { passive: false });
  window.addEventListener("touchend", end);

  handle.setAttribute("tabindex", "0");
  handle.setAttribute("role", "slider");
  handle.setAttribute("aria-valuemin", "0");
  handle.setAttribute("aria-valuemax", "100");
  handle.setAttribute("aria-valuenow", "50");
  handle.addEventListener("keydown", (e) => {
    const current = parseFloat(beforeWrap.style.width) || 50;
    if(e.key === "ArrowLeft"){ setPos(current - 5); e.preventDefault(); }
    if(e.key === "ArrowRight"){ setPos(current + 5); e.preventDefault(); }
  });
}

document.addEventListener("DOMContentLoaded", () => {
  initLangSwitch();
  initHeader();
  initReveal();
  initBeforeAfter();
});