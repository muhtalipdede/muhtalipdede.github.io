# muhtalipdede.github.io

Personal site and **hosted Play privacy policies**. Live: https://muhtalipdede.github.io

| App | Path | Package on the page |
|-----|------|---------------------|
| Walk | `public/apps/walk/privacy.html` | `com.muhtalipdede.walk` |
| Quran Companion | `public/apps/quran-companion/privacy.html` | `com.muhtalipdede.qurancompanion` |
| Don't Blink | `public/apps/dont-blink/privacy.html` | `com.muhtalipdede.dontblink` |
| Merge Colors | `public/apps/merge-colors/privacy.html` | `com.muhtalipdede.mergecolors` |
| Cargo Jam | `public/apps/cargo-jam/privacy.html` | `com.muhtalipdede.cargojam` |

Apps index: `app/apps/page.tsx` → https://muhtalipdede.github.io/apps

Play Console privacy URL must stay public HTTPS, no login. Source of truth is `public/apps/...` on `main`.

**Deploy note (Nov 2026):** GitHub Actions Pages deploy is blocked while the account has a billing lock. Live site currently publishes from the **`gh-pages`** branch (static `next export` output). After editing a privacy page on `main`:

1. `npm run build` with temporary `output: 'export'` (or the workflow’s configure-pages inject), then publish `out/` to `gh-pages`, **or**
2. Fix Actions billing and switch Pages back to **GitHub Actions** workflow deploy.

Do not put `com.sftech.*` on these pages.
