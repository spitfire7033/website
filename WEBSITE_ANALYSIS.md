# Website Analysis Report — Alfons Walker Portfolio

This report consolidates all findings from the website audit. Topics are ordered by priority. Check off items as they are completed.

---

## 🔴 Do Now (High Impact, Low Effort)

### 1. Czech Grammar & Typography Fixes
- [ ] **Missing conjunction:** `certificates.cambridge.description` reads: "...znalost anglického jazyka plynulou komunikaci..." → Add "a" → "...anglického jazyka **a** plynulou komunikaci..."
- [ ] **Case error:** `projects.frydryskova.description` reads: "...na tvorbě webové stránce..." → Change locative to genitive → "na tvorbě webové **stránky**"
- [ ] **Pleonasm:** `certificates.elementsai.description` reads: "...praktické využití v praxi." → Remove redundancy → "...praktické využití."
- [ ] **Typography:** Project title uses mixed quotes: `„Staň se politikem\"` → Use proper Czech curly quotes on both sides: `„Staň se politikem"`

### 2. English Translation Polish
- [ ] `certificates.cambridge.description`: "...fluent client communication" → "...enabling fluent communication with clients."
- [ ] `projects.frydryskova.description`: "...therapist for relationships with food..." → "...a therapist specializing in relationships with food, body, and self."
- [ ] `projects.politics.title`: "Organization of event..." → "Co-organizer of the 'Become a Politician' event..."

### 3. SEO — `og:image` & Canonical Tag
- [ ] **`og:image`:** Create a social card image (~1200×630px) and add `<meta property="og:image" content="...">`. Without this, sharing the portfolio link on LinkedIn/Discord shows no visual preview.
- [ ] **Canonical tag:** Add `<link rel="canonical" href="https://alfonswalker.com/">` to prevent duplicate content penalties between the custom domain and the default `*.appspot.com` URL.

---

## 🟠 Quick Wins (Medium Impact, Low Effort)

### 4. GAE `app.yaml` — Static Handlers & Warmup
- [ ] **Static handlers:** Add explicit static handlers in `app.yaml` so Google's edge network serves CSS/JS/images directly instead of routing through Flask/Gunicorn. This improves load times and reduces GAE costs.
  ```yaml
  runtime: python311
  instance_class: F1

  handlers:
  - url: /static
    static_dir: static
    secure: always
    expiration: "30d"

  - url: /.*
    script: auto
    secure: always
  ```
- [ ] **Instance warmup:** Enable `inbound_services: - warmup` in `app.yaml` and add a `/_ah/warmup` route in Flask to avoid 3-5 second cold starts.

### 5. Theme FOUC Fix (Flash of Unstyled Content)
- [ ] The dark/light theme is applied via JS on `DOMContentLoaded`, causing a visible "snap" from dark to light for returning users. Fix by adding a tiny blocking inline `<script>` in the `<head>` **before** CSS links:
  ```html
  <script>
    if (localStorage.getItem('theme') === 'light')
      document.documentElement.classList.add('light-mode');
  </script>
  ```

### 6. ARIA Labels on Icon-Only Elements
- [ ] Add `aria-label="GitHub Profile"` to the GitHub social link
- [ ] Add `aria-label="LinkedIn Profile"` to the LinkedIn social link
- [ ] Add `aria-label="Instagram Profile"` to the Instagram social link
- [ ] Add `aria-label="Toggle Navigation"` to the sidebar toggle button

### 7. Formspree AJAX Submission
- [ ] The contact form does a standard `POST` that navigates the user away to a generic Formspree page. Intercept the `submit` event in `main.js`, send the data via `fetch()`, and display a clean success message inline without leaving the portfolio.

---

## 🟡 Nice to Have (Lower Priority)

### 8. Subresource Integrity (SRI) for CDN Links
- [ ] Add `integrity` and `crossorigin="anonymous"` attributes to Bootstrap CSS (`bootstrap@5.3.0-alpha1/dist/css/bootstrap.min.css`)
- [ ] Add `integrity` and `crossorigin="anonymous"` attributes to Bootstrap JS (`bootstrap@5.3.0-alpha1/dist/js/bootstrap.bundle.min.js`)
- [ ] Add `integrity` and `crossorigin="anonymous"` attributes to Font Awesome (`font-awesome/6.4.0/css/all.min.css`)
- Note: SRI does **not** work with Google Fonts (dynamic CSS per user-agent). Skip that one.

### 9. Image Rename
- [ ] Rename `IMG_20260419_215743_241_web.jpg` to something semantic (e.g., `politics-event.jpg`). Update references in `index.html`.

---

## ⚪ Skip (Not Worth Doing)

These were flagged in the analysis but provide negligible benefit for the effort:

- **Legacy content migration (Timeline, Participations, Flappy Bird, Motivational Letter):** The old website is being fully deprecated in the coming months. No point migrating content from it.
- **`cz` → `cs` internal key rename:** It's an internal JS variable, no user or crawler sees it. Functionally irrelevant.
- **Flask `url_for` refactor:** Only matters if the app is mounted at a sub-path. The site runs at root — hardcoded `/static/...` paths work identically.
- **Old template footer year:** The old site is being deprecated. Not worth a dedicated fix.
- **`/minimal.html` route rename:** Legacy route, nobody bookmarks it.
- **`sitemap.xml` / `robots.txt`:** Overkill for a 3-page personal site.
- **Image WebP conversion:** Both images are already under 25KB. Negligible savings.
- **Server-side i18n (Flask-Babel):** Major refactor for minimal gain on a link-shared portfolio.
