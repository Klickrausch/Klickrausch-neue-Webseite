# Technisches SEO-Audit – Klickrausch

> Geprüft: 28.05.2026 · Seiten: index.html, impressum.html, datenschutz.html

---

## index.html (Hauptseite) — Die einzige rankingkritische Seite

### Title-Tag
- **Status:** ❌ ZU LANG
- **Ist:** `Google Ads Freelancerin Düsseldorf – Mehr Anfragen, weniger Streuverlust | Klickrausch`
- **Zeichenanzahl:** ~87 Zeichen (Ziel: 50–60)
- **Keyword vorne:** ✅ Ja – „Google Ads Freelancerin Düsseldorf" steht am Anfang
- **Problem:** Zu lang → Google kürzt ab, wichtige Botschaft verschwindet
- **Empfehlung:** Auf max. 60 Zeichen kürzen (→ Schritt 5)

### Meta Description
- **Status:** ❌ ZU LANG
- **Ist:** `Google Ads Expertin aus Düsseldorf – ich helfe Coaches, Fotografinnen und Unternehmerinnen, ihre Wunschkundinnen bei Google zu erreichen. Persönlich, messbar, kostenloses Erstgespräch.`
- **Zeichenanzahl:** ~185 Zeichen (Ziel: 140–155)
- **Ton:** ✅ Passt gut zur Voice
- **Problem:** Google kürzt nach ~155 Zeichen → CTA geht verloren
- **Empfehlung:** Um ~30 Zeichen kürzen (→ Schritt 5)

### H1
- **Status:** ⚠️ KEIN KEYWORD
- **Ist:** `Mehr Anfragen von Kund:innen, die wirklich zu dir passen.`
- **Anzahl H1:** ✅ Genau eine – korrekt
- **Problem:** Focus-Keyword „Google Ads" kommt in der H1 nicht vor
- **Empfehlung:** Keyword organisch einbauen, ohne den Ton zu zerstören (→ Schritt 4)

### H2 / H3-Struktur
- **Status:** ✅ GUT
- Vorhanden und sinnvoll strukturiert:
  - H2: „Mit Google Ads die richtigen Kunden erreichen…"  ✅ Keyword vorhanden
  - H2: „Diese Zusammenarbeit ist für dich…"
  - H2: „Erfolgreiches Online-Marketing in 3 Schritten."
  - H2: „Was ich für dich tue — und was es kostet."
  - H2: „Hi, ich bin Nadine…"
  - H2: „Was Kund:innen über die Zusammenarbeit sagen."
  - H2: „Du hast Fragen? Ich habe Antworten."
  - H2: „Bereit für Anfragen, die wirklich zu dir passen?"
  - H2: „Lass uns ins Gespräch kommen."

### Bilder & Alt-Texte
- **Status:** ✅ ALLE VORHANDEN
- foto-hero.jpg: „Nadine Dross-Buetow, Google Ads Expertin" ✅
- foto-intro.jpg: „Nadine Dross-Buetow, Google Ads Expertin, analysiert Kampagnendaten auf dem Handy" ✅
- foto-nadine.jpg: „Nadine Dross-Buetow, Google Ads Expertin" ✅
- foto-faq.jpg: „Nadine Dross-Buetow, Google Ads Freelancerin, beantwortet Fragen persönlich" ✅
- foto-kontakt.jpg: „Nadine Dross-Buetow, Google Ads Expertin und Freelancerin, freut sich auf deine Nachricht" ✅
- badge-google-ads-certified.jpg: „Google Ads Search Certified" ✅

### Interne Links / Anker
- **Status:** ❌ GEBROCHENER ANKER
- `#leistungen` wird 3× verlinkt (Hero-Button „Mein Angebot ansehen", Footer Menü 4× Links)
- Ein `<section id="leistungen">` existiert **nicht** im HTML
- Die richtige Section heißt `id="angebot"`
- **Empfehlung:** Alle `href="#leistungen"` → `href="#angebot"` korrigieren

### Canonical Tag
- **Status:** ✅ VORHANDEN
- `<link rel="canonical" href="https://klickrausch.github.io/Klickrausch-neue-Webseite/" />`

### Structured Data (JSON-LD)
- **Status:** ✅ VORHANDEN & VOLLSTÄNDIG
- Type: ProfessionalService ✅
- Name, Telefon, E-Mail, Adresse ✅
- Gründerin mit Bild ✅
- serviceType, priceRange, areaServed ✅
- aggregateRating (5★, 5 Bewertungen) ✅

### Open Graph
- **Status:** ✅ VORHANDEN
- og:type, og:title, og:description, og:url, og:image, og:locale ✅

---

## impressum.html

| Prüfpunkt | Status | Anmerkung |
|---|---|---|
| Title | ✅ | „Impressum \| Klickrausch" – kurz, klar |
| Meta robots | ✅ | noindex, nofollow – korrekt für Rechtseiten |
| H1 | ✅ | „Impressum" |
| Canonical | ➖ | Nicht nötig bei noindex |

---

## datenschutz.html

| Prüfpunkt | Status | Anmerkung |
|---|---|---|
| Title | ✅ | „Datenschutz \| Klickrausch" – kurz, klar |
| Meta robots | ✅ | noindex, nofollow – korrekt |
| H1 | ✅ | „Datenschutzerklärung" |
| Canonical | ➖ | Nicht nötig bei noindex |

---

## Zusammenfassung – Prioritätenliste

| Priorität | Problem | Seite | Aufwand |
|---|---|---|---|
| 🔴 HOCH | Gebrochener Anker `#leistungen` (3–5 Stellen) | index.html | gering |
| 🔴 HOCH | Title-Tag zu lang (~87 Zeichen) | index.html | gering |
| 🔴 HOCH | Meta Description zu lang (~185 Zeichen) | index.html | gering |
| 🟡 MITTEL | H1 enthält kein Focus-Keyword | index.html | mittel |
| 🟢 GUT | Alt-Texte, Canonical, JSON-LD, OG-Tags | alle | — |
