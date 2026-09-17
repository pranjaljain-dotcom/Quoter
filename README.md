# Quoter — Agent Portal Quote & Application Prototype

React + Vite + Tailwind prototype of the Ethos agent portal's Quote & Application flow — product selection, basic information intake, and a live quote estimate panel for Final Expense / Term Life / IUL products. Originally generated in Figma Make.

---

## Structure

```
Quoter/
├── public/
│   └── assets/              ← Sidebar/nav icons, radio dots, benefit icons, profile photo
├── src/
│   ├── App.tsx              ← Entire app: Sidebar, TopNav, QuoteForm, QuotePanel, side panels
│   ├── fonts/                ← Theinhardt font files (bundled by Vite, not in public/)
│   ├── index.css             ← Tailwind entrypoint + @font-face declarations
│   ├── main.tsx               ← React entrypoint, mounts <App /> into #root
│   └── imports/               ← Original Figma Make component exports (reference only)
├── .figma/                   ← Figma Make project metadata (site config, deploy scripts)
├── .github/workflows/deploy.yml  ← Builds + deploys to GitHub Pages on push to main
├── index.html
├── vite.config.ts
└── package.json
```

---

## Live Preview (GitHub Pages)

**https://pranjaljain-dotcom.github.io/Quoter/**

Redeploys automatically on every push to `main` via GitHub Actions.

---

## Viewing the Prototype Locally

Requires Node 22+ and pnpm.

```bash
pnpm install
pnpm run dev
```

Then open `http://localhost:8443` (port is set via the `PORT` env var, falls back to 8443).

To sanity-check a production build (e.g. before pushing):

```bash
pnpm run build
pnpm run preview
```

---

## App Flow

```
Sidebar (nav) → Quote & Application
  → Product header (title + "Change Product")
      → Change Product opens a slide-in panel (grouped by TERM LIFE / IUL / WHOLE LIFE)
  → Sub-product tabs (segmented pill control) — only for products with variants
  → Resource links row (Underwriting Guide / Knockout Guide / Rx Red Flags)
      — reflects the active sub-product tab when tabs are present
  → Basic Information form (Sex, Birth date, Smoking, Residence, [Health class,
    Credit estimate], [BMI: Height/Weight]) — fields shown depend on the product
      → Credit estimate "How it works" opens a slide-in panel (Strong / Average /
        Building Credit History criteria)
  → Generate Quote
      → Right panel: Coverage/Premium dial, AD coverage toggle + multiplier,
        Included Benefits grid, Estimated totals, Agent earnings
      → Share estimate / Start application
```

Changing product resets the right panel back to its empty state.

---

## Key Components (`src/App.tsx`)

| Component | Description |
|---|---|
| `Sidebar` | Collapsible left nav, primary + secondary (collapsed under "More") nav groups |
| `QuoteForm` | Left column: product header, sub-product tabs, resource links, and the Basic Information form |
| `SelectField` / `TextField` | Form field primitives; `SelectField` supports an optional `labelLink` (external `href` or in-app `onClick`, used by Credit estimate's "How it works") |
| `CoverageSlider` | Reusable range slider; takes `min`/`max`/`step`/`minLabel`/`maxLabel` so it can dial either coverage ($15K–$300K) or premium ($30–$779/mo) |
| `QuotePanel` | Right column: coverage/premium card, AD coverage card, Included Benefits, totals, agent earnings |
| `ChangeProductPanel` | Slide-in panel for switching the top-level product, grouped by `PRODUCT_GROUPS` |
| `CreditEstimateInfoPanel` | Slide-in panel explaining the `CREDIT_TIERS` criteria |
| `ResourceLinksRow` | Compact link chips (Underwriting/Knockout/Rx guides), swapped per sub-product tab via `RESOURCE_LINKS_BY_TAB` |

---

## Where to Change Things

| To change... | Edit... |
|---|---|
| Which products show sub-product tabs | `PRODUCTS_WITH_TABS` |
| Which fields show per product (BMI, Health class/Credit estimate) | `PRODUCT_FIELD_CONFIG` / `getProductConfig` |
| Resource link labels/URLs | `DEFAULT_RESOURCE_LINKS`, `RESOURCE_LINKS_BY_TAB` |
| Change Product panel groupings | `PRODUCT_GROUPS` |
| Included Benefits icons/labels | `BENEFIT_ITEMS` (icons sourced from the [Ethos Brand Icons](https://www.figma.com/design/yYKI6F7eDlWNrhYkhj9FEm/Brand-Icons) Figma library, saved locally under `public/assets/benefit-*.svg`) |
| Credit estimate tiers/criteria | `CREDIT_TIERS` |
| Coverage/premium math (base rate, AD multiplier, agent earnings) | Top of `QuotePanel` |

---

## Deployment Notes

GitHub Pages serves this repo under a subpath (`/Quoter/`), so:

- `vite.config.ts` reads a `GITHUB_PAGES_BASE` env var (set to `/Quoter/` in the deploy workflow) to set Vite's `base`.
- All `public/assets/*` references in `App.tsx` are **document-relative** (`"assets/x.svg"`, not `"/assets/x.svg"`) so they resolve correctly regardless of the base path.
- Fonts live in `src/fonts/` (not `public/fonts/`) so Vite bundles and base-prefixes them automatically via CSS `url()` — a plain `public/fonts/` reference can't be made subpath-safe in CSS the way JS string paths can.

If you fork this or add new local assets, keep both conventions in mind or the built site will 404 on GitHub Pages while still working fine in local dev (which is served from the domain root).
