# Assets needed

Real images to replace the placeholder frames on the site. Drop files into the
folders below using the given names, then wire them into `index.html` (each
placeholder is marked with `image pending` / `image-pending` text).

**Format:** export as **WebP** (quality ~80–85) when possible; PNG is fine for
screenshots, JPG acceptable for photos. Keep the longest edge around the size
noted. Add `loading="lazy"` for anything below the first screen. Always set
`width`/`height` on the `<img>`.

**Do not include:** children's faces in sensitive contexts, legible badges/name
tags, documents, personal data, or anything that needs someone's permission.

---

## `assets/images/profile/` — **DONE**
`portrait.webp` (Home polaroid) is in place — a real photo of Giovanna, pulled
from the Drive `Fotos` folder. `flower-avatar.png` now only serves as the
apple-touch-icon (the About passport that used it was removed).

## `assets/images/about/` — About photo fan — **DONE**
7 photos in the fanned collection at the top of About: `portrait`, `talk`
(workshop/mic), `team` (Diretoria da Mulher), `oab` (OAB Paraná), `dce`
(DCE PUCPR event), `dusk` + `shore` (her photography). Pulled from the Drive
`Voluntariados` / `Fotografias` folders. Swap or add more freely — any
`assets/images/about/*.webp` referenced from the `.about__fan` block.

## `assets/images/playground/` — Playground gallery — **DONE**
Populated from Giovanna's Google Drive (2026‑09‑07). 23 WebP images, long edge
≤1500px, in `design/` (digital art + graphic design), `illustration/` (ink
sketches), `photography/`, `food/`, `volunteering/`. Filter chips + staggered
reveal + lightbox are wired in `index.html` / `style.css` / `script.js`.

Still optional here:
- a couple more **photography** frames (only one in the folder so far)
- short concept notes for the digital‑art pieces (REACHING, WHAT REMAINS, etc.)
  — shown in the lightbox once provided; nothing is invented
- confirm captions for the two identifiable volunteering photos
  (currently "Diretoria da Mulher — PUCPR" and "TEIA do Bem — social media")

## `assets/images/coffee-code/` — Coffee & Code — **DONE (2 of 3)**
`terminal.webp` (the ASCII / 418 identity card) and `logo.webp` (the 418 mug mark)
are in place, both provided by Giovanna. Optional: one real **session photo** or
**poster** to add a third, more human tile.

## `assets/images/community/` — Community & social impact (section 08)
| file | use | orientation | size |
|---|---|---|---|
| `ddm.webp` | Diretoria da Mulher — one strong photo of an action/event | landscape | ~1600px |
| `teia-do-bem.webp` | Teia do Bem — one photo | landscape or square | ~1400px |
| `volunteer.webp` | Interact / environmental / volunteer work | landscape | ~1600px |

## `assets/images/beyond/` — Beyond the screen (section 10)
| file | use | orientation | size |
|---|---|---|---|
| `bread.webp` | a loaf | portrait | ~1200px |
| `cookies.webp` | cookies | square | ~1200px |
| `dessert.webp` | a dessert | square | ~1200px |
| `photography.webp` | one photograph you like | landscape | ~1800px wide |

## `assets/og/`
| file | use | size |
|---|---|---|
| `og.png` | social share image (link previews) | 1200×630 | a generated version is committed; replace with a designed one if you want |

---

## Already in place (real assets)
- `assets/images/tech/datasus-dashboard.webp` — real Streamlit dashboard
- `assets/images/tech/health-data-before-after.webp`, `netflix-before-after.webp` — real data before/after
- `assets/images/tech/pibble-dashboard.webp`, `pibble-funcionarios.webp` — real app screenshots
- `assets/images/tech/game-start-screen.webp`, `game-win-screen.webp` — real game art (AI-generated, noted on the site)
