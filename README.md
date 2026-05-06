# Misha Evans — Personal Site

Static personal site for [mishaevans.com](https://mishaevans.com).
No build step — open `index.html` or deploy the folder anywhere static.

## Files
- `index.html` — page structure and content
- `styles.css` — styling, responsive layout, dark/light themes
- `script.js` — theme toggle, smooth scroll, footer year
- `CNAME` — tells GitHub Pages to serve the site at `mishaevans.com`
- `robots.txt`, `sitemap.xml` — basic SEO
- `resume.pdf` — drop your resume PDF here for the "Download resume" button

## Deploy to GitHub Pages with `mishaevans.com`

### 1. Enable Pages on the repo
GitHub repo → **Settings** → **Pages**:
- **Source**: Deploy from a branch
- **Branch**: `main` / root (merge the feature branch into `main` first)
- **Custom domain**: `mishaevans.com` (the `CNAME` file in this repo already does this automatically — GitHub will pick it up)
- Tick **Enforce HTTPS** once the cert provisions (a few minutes after DNS propagates)

### 2. Point the domain at GitHub (Namecheap)
Namecheap dashboard → **Domain List** → **Manage** on `mishaevans.com` → **Advanced DNS**.

Delete any default parking records, then add:

**A records** (apex `mishaevans.com`):
| Type | Host | Value | TTL |
|------|------|-------|-----|
| A | @ | 185.199.108.153 | Automatic |
| A | @ | 185.199.109.153 | Automatic |
| A | @ | 185.199.110.153 | Automatic |
| A | @ | 185.199.111.153 | Automatic |

**CNAME** (for `www.mishaevans.com`):
| Type | Host | Value | TTL |
|------|------|-------|-----|
| CNAME | www | `mknubsgit.github.io.` | Automatic |

> Replace `mknubsgit.github.io` if your GitHub username differs. The trailing dot is fine — Namecheap will accept it without.

### 3. Wait for propagation
DNS usually flips in 5–30 minutes (occasionally up to a few hours). Check with:
```
dig mishaevans.com +short
```
You should see the four GitHub IPs above.

### 4. Done
Visit https://mishaevans.com — you should see the site over HTTPS.

## Editing
Open `index.html` and replace placeholder text:
- Hero tagline
- Social URLs (GitHub, LinkedIn, X, Instagram, YouTube, Twitch — currently all guess at `@mknubs`)
- About paragraph + interests
- Resume entries
- Projects grid

## Local preview
```
python3 -m http.server
```
Then visit http://localhost:8000.
