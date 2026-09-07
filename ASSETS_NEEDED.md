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
7 photos in the fanned collection (opens from one centred photo). Currently:
`aquarium`, `talk` (workshop/mic), `bouquet`, `portrait` (centre), `team`
(Diretoria da Mulher), `snow`, `dusk` (her photography). `oab` / `dce` / `shore`
also sit in the folder, unused — swap any in by editing the `.about__fan` block.

## `assets/images/playground/` — Playground gallery — **DONE**
From Giovanna's Drive (2026‑09‑07, 2nd pull). `design/` (digital art + graphic
design + `borboleta` awareness campaign), `illustration/` (ink `sketch-*` +
traditional pencil `trad-*`), `photography/` (`photo-01..07` incl. NYC trip),
`food/`, `volunteering/` (`volunteering-01..06`). Filter chips + reveal + lightbox
wired.

Still optional: short concept notes for the digital‑art pieces (shown in the
lightbox once provided); confirm the identifiable volunteering captions.

## `assets/images/coffee-code/` — Coffee & Code — **DONE (2 of 3)**
`terminal.webp` + `logo.webp` (both provided by Giovanna). Optional third: a real
session photo or poster.

## `assets/images/tech/` — project screenshots — **DONE**
Added: `iot-dashboard.webp` (Blynk Smart City), `iot-hardware.webp` (ESP32 wiring,
unused for now), `bpmn-vet.webp` (Bizagi stock-management diagram). Projects 04
and 05 no longer have placeholders.

## Community / volunteering by organisation — still thin
The user wants **Teia do Bem, Interact, Diretoria da Mulher, Projeto Borboleta
Menarca** each represented. Have: Diretoria da Mulher (team photo, in the fan +
Playground), Borboleta Menarca (one awareness post, `playground/design/borboleta`
— a messy IG screenshot, a clean export would be better). **Missing clean photos
for Teia do Bem and Interact.**

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
