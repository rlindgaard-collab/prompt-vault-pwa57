
# Prompt Vault (JSON PWA)
React + Vite + Tailwind PWA der loader **kun** `public/prompts.json`.
- Installerbar (manifest + service worker)
- Offline-first: `prompts.json` caches + data gemmes i localStorage
- UI: Sidebar, sektioner/kategorier, global søgning, klik=kopi + toast
- Farver: accent #00c16a, tekst #0f172a, dark/light

## Kom i gang
```bash
npm install
npm run dev
```
Opdater prompts ved at erstatte `public/prompts.json`.

## Favoritter
- Klik på ☆ på et kort for at tilføje til favoritter (bliver til ★).
- Ny fane: ⭐ Favorites viser alle dine favoritter på tværs af faner.
- Favoritter gemmes i localStorage og virker offline.
