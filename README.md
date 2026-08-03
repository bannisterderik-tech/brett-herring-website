# Brett Herring — Lane County, Oregon Real Estate

356-page static SEO/AEO site for Brett Herring, The Operative Group at Real Broker, LLC.

- `gen/` — Node static site generator (`node gen/build.mjs` rebuilds everything)
- `gen/data/` — all content: locations (39 areas), services (7), guides (12), journal (10)
- `assets/images/` — real licensed photography (credits in `gen/data/photo-credits.json`)
- `docs/` — built site, served by GitHub Pages

Priority areas: **1 Thurston · 2 Pleasant Hill · 3 Springfield**.

Every statistic on an area page carries its source inline. No unsourced numbers.
To change the domain: edit `SITE` in `gen/lib/site.mjs`, rebuild, add a CNAME file to `docs/`.
