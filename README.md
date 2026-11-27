# Filippo Alotta — Portfolio Freelance & Servizi Digitali a Palermo

Portfolio personale e vetrina commerciale per attività freelance di sviluppo **Siti Web**, **Landing Page**, **E-Commerce** e **Software Web Su Misura** a **Palermo** e da remoto in tutta Italia.

Costruito con **Next.js 15 (App Router)**, **React 19**, **TypeScript**, **Tailwind CSS v4** e ottimizzato per **SEO locale e tecnica**.

## Funzionalità principali

- **Posizionamento Freelance & Conversione**: proposta di valore orientata ai clienti, servizi dettagliati, metodo di lavoro trasparente, FAQ e modulo richiesta preventivo.
- **SEO Avanzata**:
  - Pagine dedicate pre-renderizzate per ogni servizio (`/servizi/siti-web-palermo`, `/servizi/landing-page-palermo`, `/servizi/ecommerce-palermo`, `/servizi/software-su-misura-palermo`).
  - Dati strutturati JSON-LD (`WebSite`, `Person`, `ProfessionalService`, `Service`, `BreadcrumbList`, `FAQPage`).
  - `sitemap.xml`, `robots.txt`, `manifest.webmanifest`, `opengraph-image` e `twitter-image` generati nativamente da Next.js.
- **Casi Studio Reali**: progetti software B2B/startup e progetti di robotica/embedded.

## Avvio rapido

```bash
npm install
npm run dev
```

Apri [http://localhost:3000](http://localhost:3000) nel browser.

## Variabili d'ambiente

Per collegare un dominio personalizzato in produzione (es. su Vercel), imposta:

```bash
NEXT_PUBLIC_SITE_URL=https://tuodominio.it
```

In assenza della variabile viene usato `https://www.filippoalotta.com`.

## Documentazione completa

Consulta [docs/DOCUMENTAZIONE.md](docs/DOCUMENTAZIONE.md) per la guida completa su architettura, strategia SEO, modifica dei contenuti e checklist post-deploy.
