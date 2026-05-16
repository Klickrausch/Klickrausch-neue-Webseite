# Technisches SEO-Audit – Klickrausch (index.html)

## Ergebnis-Übersicht

| Punkt              | Status | Priorität |
|--------------------|--------|-----------|
| `<title>`          | ⚠️ Verbesserbar | Hoch |
| `<meta description>` | ⚠️ Zu kurz, kein Ort | Hoch |
| H1                 | ⚠️ Kein „Google Ads" im H1-Text | Hoch |
| H2/H3 Struktur     | ✅ Gut strukturiert | — |
| Alt-Texte          | ⚠️ 2 zu generisch | Mittel |
| Canonical Tag      | ❌ Fehlt | Hoch |
| Open Graph Tags    | ❌ Fehlen | Mittel |
| JSON-LD Schema     | ❌ Fehlt | Hoch |
| Interne Links      | ✅ Vorhanden (Anchor-Links) | — |
| URL-Struktur       | ✅ index.html = Root | — |
| Ort / Lokal-SEO    | ❌ Kein Standort genannt | Hoch |

---

## Detailfunde

### `<title>`
**Aktuell:** `Klickrausch | Google Ads Expertin Nadine Dross-Buetow` (56 Zeichen)  
**Problem:** Brand steht vorne, Keyword kommt zu spät. Kein Standort.  
**Ziel:** Keyword-first, 50–60 Zeichen, ggf. Stadt ergänzen.

### `<meta description>`
**Aktuell:** „Als zertifizierte Google Ads Expertin helfe ich dir, die richtigen Kunden zu erreichen, ohne Streuverluste, ohne Zeitverschwendung." (131 Zeichen)  
**Problem:** 9 Zeichen zu kurz, kein Ort, kein direkter CTA.

### H1
**Aktuell:** „Mehr Anfragen von Kundinnen, die wirklich zu dir passen."  
**Problem:** Das Wort „Google Ads" kommt nicht vor — verschenkt SEO-Relevanz.

### Alt-Texte mit Verbesserungsbedarf
- `foto-faq.jpg` → alt="Nadine Dross-Buetow" → zu generisch
- `foto-intro.jpg` → alt="Nadine arbeitet mit ihrem Handy" → kein Keyword-Bezug
- `foto-kontakt.jpg` → alt="Nadine Dross-Buetow lächelt" → ok, aber ausbaubar

### Canonical Tag → Fehlt komplett
→ Muss hinzugefügt werden: `<link rel="canonical" href="https://klickrausch.github.io/Klickrausch-neue-Webseite/" />`

### Open Graph Tags → Fehlen
→ Wichtig für Social Sharing (LinkedIn, Instagram etc.)

### JSON-LD Structured Data → Fehlt
→ `Person` + `ProfessionalService` Schema empfohlen für Rich Results

### Kein Standort
→ Lokal-SEO komplett ungenutzt. Sobald Ort bekannt: in Title, Description, H2, Schema einbauen.
