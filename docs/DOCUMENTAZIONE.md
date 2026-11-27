# Documentazione Tecnica e SEO del Portfolio

Questa documentazione descrive l’architettura, la strategia commerciale freelance, la configurazione SEO completa e le istruzioni di manutenzione del portfolio di **Filippo Alotta**.

---

## 1. Obiettivo del Sito & Posizionamento Commerciale

Il sito è progettato per convertire visitatori e ricerche locali/nazionali in **richieste di preventivo freelance** per:

- **Siti Web Professionali & Aziendali** (`/servizi/siti-web-palermo`)
- **Landing Page ad Alta Conversione** (`/servizi/landing-page-palermo`)
- **E-Commerce & Negozi Online** (`/servizi/ecommerce-palermo`)
- **Software Web & Gestionali Su Misura** (`/servizi/software-su-misura-palermo`)

Target geografico principale: **Palermo e Sicilia** (presenza locale + incontri dal vivo), con apertura a collaborazioni **da remoto in tutta Italia**.

### Elementi chiave di conversione integrati
1. **Barra di navigazione fissa (`components/Navbar.tsx`)**:
   - Navigazione immediata tra le sezioni (`Servizi`, `Progetti`, `Metodo`, `Percorso`, `FAQ`) su desktop e mobile, con pulsante CTA sempre accessibile (`Richiedi Preventivo`).
2. **Hero pulita & Foto profilo (`components/HeroSection.tsx`)**:
   - Badge di disponibilità attiva (`Disponibile per nuovi progetti freelance · Palermo & Italia`).
   - Titolo orientato ai benefici per il cliente, CTA primaria (`Richiedi un preventivo gratuito`), link rapidi e foto profilo (`public/images/filippo-alotta.jpg`) ottimizzata con `next/image` e `priority`.
   - Fascia sintetica di credibilità (`3+ Anni`, `SEO-First`, `Palermo`).
3. **Catalogo Servizi (`components/ServicesList.tsx`)**:
   - Griglia 2×2 chiara con target ideale, tempi medi di consegna, deliverables inclusi e collegamento alla pagina SEO dedicata.
4. **Casi Studio Reali (`components/ProjectsList.tsx` e `components/ProjectCard.tsx`)**:
   - Griglia visiva dei progetti software/web con anteprima, categoria e risultato ottenuto (`outcome`), più box secondario dedicato alla robotica/ricerca.
5. **Metodo di Lavoro & Garanzie (`components/ProcessSection.tsx`)**:
   - Processo trasparente in 4 fasi + garanzie di collaborazione diretta.
6. **Percorso & Competenze (`ExperiencesList`, `EducationsList`, `CertificationsList`)**:
   - Struttura a due colonne pulita e leggibile con esperienze professionali, formazione accademica e certificazioni.
7. **FAQ Interattive (`components/FaqSection.tsx`)**:
   - Risposte chiare a dubbi su prezzi, tempistiche, SEO locale a Palermo, proprietà del codice e manutenzione.
8. **Modulo Richiesta Preventivo (`components/ContactSection.tsx`)**:
   - Selezione servizio, fascia di budget indicativa, apertura client email precompilato (`mailto:alottafilippo@gmail.com`) e copia rapida dell’indirizzo email.

---

## 2. Architettura del Progetto

Stack tecnologico: **Next.js 15 (App Router)**, **React 19**, **TypeScript**, **Tailwind CSS v4**, **Lucide React**, **Biome** e **Vercel Analytics**.

### Struttura delle directory principali

```text
├── app/
│   ├── globals.css                 # Tema chiaro su sfondo bianco (/ e /servizi/*) + .developer-theme scura (/developer)
│   ├── layout.tsx                  # RootLayout (font Plus Jakarta Sans & Rubik), metadata SEO, Analytics
│   ├── manifest.ts                 # Web App Manifest (/manifest.webmanifest)
│   ├── opengraph-image.tsx         # Immagine OpenGraph dinamica 1200x630 per /
│   ├── twitter-image.tsx           # Immagine Twitter/X card dinamica per /
│   ├── page.tsx                    # Homepage commerciale freelance (/) con JSON-LD (@graph)
│   ├── developer/
│   │   ├── page.tsx                # Portfolio tecnico originale Software & Robotics (/developer) con SEO e JSON-LD
│   │   ├── opengraph-image.tsx     # OpenGraph dedicata per /developer
│   │   └── twitter-image.tsx       # Twitter/X card dedicata per /developer
│   ├── robots.ts                   # Direttive crawler e link sitemap (/robots.txt)
│   ├── sitemap.ts                  # Sitemap XML dinamica (/, /servizi/*, /developer)
│   └── servizi/[slug]/page.tsx     # Landing page statiche dedicate per ogni servizio
├── components/
│   ├── SiteShell.tsx               # Wrapper con Navbar e container per / e /servizi/*
│   ├── Navbar.tsx                  # Barra di navigazione sticky responsive con CTA
│   ├── HeroSection.tsx             # Hero commerciale, foto profilo, CTA e trust bar
│   ├── ServicesList.tsx            # Griglia 2×2 dei 4 servizi principali
│   ├── ProjectsList.tsx            # Griglia progetti software e sezione ricerca
│   ├── ProjectCard.tsx             # Card progetto con anteprima, risultato e tag
│   ├── ProcessSection.tsx          # Metodo di lavoro in 4 fasi e garanzie
│   ├── ExperiencesList.tsx         # Esperienze lavorative
│   ├── ExperienceCard.tsx          # Card esperienza
│   ├── EducationsList.tsx          # Formazione accademica e bootcamp
│   ├── EducationCard.tsx           # Card formazione
│   ├── CertificationsList.tsx      # Certificazioni e premi
│   ├── CertificationCard.tsx       # Card certificazione/premio
│   ├── FaqSection.tsx              # Accordion FAQ accessibile
│   ├── ContactSection.tsx          # Form preventivo + copia email
│   ├── IconsLinkSection.tsx        # Link GitHub, LinkedIn, Email, CV PDF
│   ├── Footer.tsx                  # Link interni ai servizi, /developer e copyright
│   └── developer/                  # Componenti originali HUD/tecnici usati su /developer
├── lib/
│   ├── seo.ts                      # URL base, configurazione brand e generatori JSON-LD
│   ├── data/
│   │   ├── developer.ts            # Dati originali in inglese dedicati a /developer
│   │   ├── services.ts             # Dati commerciali, SEO, deliverables e FAQ dei servizi
│   │   ├── faqs.ts                 # FAQ generali della homepage
│   │   ├── projects.ts             # Progetti software e hardware
│   │   ├── experiences.ts          # Esperienze lavorative
│   │   ├── educations.ts           # Percorso formativo
│   │   └── certifications.ts       # Premi e certificati
│   └── types/                      # Definizioni TypeScript dei modelli dati
├── public/
│   ├── images/filippo-alotta.jpg   # Foto profilo utilizzata nella hero
│   ├── projects/                   # Thumbnail dei progetti
│   ├── icons/                      # Icone SVG/PNG
│   ├── favicon/                    # Favicon multi-risoluzione
│   ├── certificates/               # PDF certificati
│   └── cv/cv.pdf                   # Curriculum Vitae scaricabile
└── docs/
    └── DOCUMENTAZIONE.md           # Questo file di documentazione
```

---

## 3. Strategia SEO Implementata

### 3.1 SEO On-Page & Semantica
- **Lingua documento**: `<html lang="it">` in `app/layout.tsx`, allineata al mercato italiano e alle query locali su Palermo.
- **Gerarchia titoli**: un solo `<h1>` per pagina seguito da `<h2>` per le sezioni e `<h3>` per schede/progetti/esperienze.
- **URL dedicati ad alto intento di ricerca (`app/servizi/[slug]/page.tsx`)**:
  - `/servizi/siti-web-palermo`
  - `/servizi/landing-page-palermo`
  - `/servizi/ecommerce-palermo`
  - `/servizi/software-su-misura-palermo`
  Ogni pagina è pre-renderizzata staticamente tramite `generateStaticParams()`, possiede `title`, `description`, `keywords`, `canonical` e link incrociati verso gli altri servizi.

### 3.2 Dati Strutturati (JSON-LD Schema.org)
In `lib/seo.ts`:
- **Homepage (`buildHomeJsonLd`)** genera un `@graph` contenente:
  - `WebSite`
  - `Person` (identità professionale, `alumniOf` Università di Palermo, `sameAs` GitHub/LinkedIn, `knowsAbout`)
  - `ProfessionalService` (`address` Palermo, `geo` coordinate `38.1157, 13.3615`, `areaServed` Palermo/Sicilia/Italia, `hasOfferCatalog` dei 4 servizi)
  - `FAQPage` (collegata alle domande frequenti della homepage)
- **Pagine Servizio (`buildServiceJsonLd`)** generano:
  - `WebPage`
  - `BreadcrumbList`
  - `Service`
  - `FAQPage` specifica del servizio
- **Portfolio Developer (`/developer`, `buildDeveloperJsonLd`)** genera:
  - `ProfilePage` (collegata a `#person` e `#website`)
  - `BreadcrumbList`
  - Metadati dedicati (`canonical: /developer`, OpenGraph `profile`, Twitter Card dedicata) e indicizzazione in `sitemap.xml`.

### 3.3 SEO Tecnica & Indicizzazione
- **URL Canonico centralizzato**: `SITE_URL` in `lib/seo.ts` legge `NEXT_PUBLIC_SITE_URL` (fallback `https://www.filippoalotta.com`).
- **Sitemap XML (`/sitemap.xml`)**: generata da `app/sitemap.ts` con homepage e tutte le route `/servizi/*`.
- **Robots (`/robots.txt`)**: generato da `app/robots.ts`, consente l’indicizzazione completa e dichiara la sitemap.
- **Google Site Verification**: meta tag configurato tramite `metadata.verification.google` in `app/layout.tsx`.
- **Social Sharing**: OpenGraph e Twitter Card generati dinamicamente via `app/opengraph-image.tsx` e `app/twitter-image.tsx` (1200×630 px).
- **Performance & Sicurezza**: `next.config.ts` abilita formati immagine `avif`/`webp` e header HTTP (`X-Content-Type-Options`, `X-Frame-Options`, `Referrer-Policy`).

---

## 4. Come Aggiornare i Contenuti

Tutti i contenuti principali sono separati dalla UI dentro `lib/data/`:

- **Servizi e pagine SEO**: modifica `lib/data/services.ts` (aggiungendo un oggetto si crea automaticamente sia la card in home sia la pagina `/servizi/<slug>` e la voce in `sitemap.xml`).
- **Progetti / Casi studio**: modifica `lib/data/projects.ts` (salva le eventuali nuove immagini in `public/projects/`).
- **FAQ homepage**: modifica `lib/data/faqs.ts` (aggiorna automaticamente sia la UI sia lo schema JSON-LD `FAQPage`).
- **Esperienze, Formazione, Certificazioni**: modifica `lib/data/experiences.ts`, `lib/data/educations.ts` e `lib/data/certifications.ts`.
- **Foto profilo**: sostituisci `public/images/filippo-alotta.jpg` mantenendo proporzioni verticali/ritratto, oppure aggiorna `SITE_CONFIG.profileImage` in `lib/seo.ts`.

---

## 5. Comandi Principali (Sviluppo & Verifica)

```bash
# Avvio ambiente di sviluppo
npm run dev

# Controllo tipi TypeScript
npx tsc --noEmit

# Controllo formattazione e linting con Biome
npx @biomejs/biome check .

# Build di produzione e verifica route statiche
npm run build
```

---

## 6. Checklist Post-Deploy per Massima Visibilità su Google

Per sfruttare al 100% la base SEO implementata nel codice:

1. **Dominio personalizzato (Consigliato)**: collega un dominio proprio su Vercel (es. `filippoalotta.it`) e imposta la variabile d’ambiente `NEXT_PUBLIC_SITE_URL=https://filippoalotta.it` su Vercel prima di fare il redeploy, così canonical, sitemap, `robots.txt` e JSON-LD useranno il dominio ufficiale.
2. **Google Search Console**: verifica la proprietà del dominio/URL e invia `https://<tuo-dominio>/sitemap.xml`, poi richiedi l’indicizzazione manuale della homepage e delle 4 pagine `/servizi/*`.
3. **Google Business Profile (Fondamentale per Palermo)**: crea/ottimizza una scheda Attività su Google Maps come sviluppatore/consulente web a Palermo collegandola al sito e raccogliendo recensioni reali dai clienti soddisfatti.
4. **Backlink & Coerenza NAP**: inserisci il link del sito sui profili LinkedIn, GitHub, Start2Impact e nei footer o crediti (dove concordato) dei siti realizzati per i clienti.
5. **Verifica Rich Results & Performance**: dopo il deploy controlla il sito su Google Rich Results Test e PageSpeed Insights.
