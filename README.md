# Simply'Moh Furniture Concept — site

## Structure
- index.html — Home
- furniture.html — full catalogue with search, filter, sort
- collections.html — 5 curated collections (Haven, Terra, Noir, Solace, Atelier)
- product.html — single reusable product page, e.g. product.html?id=aurel-lounge
- about.html — the story, process, values, and stats
- inspiration.html — the Lumora Journal (featured article + article grid)
- contact.html — contact methods, message form, WhatsApp CTA, and map
- css/style.css — all shared styles
- js/products.js — PRODUCTS (16 pieces, with description/materials/dimensions/care) and COLLECTIONS
- js/main.js — wishlist, mobile menu, search, product-card rendering, WhatsApp link logic
- images/ — drop your photos here; nothing breaks until they exist

## Product page
Every product card (Home, Furniture, Collections) links to product.html?id=<product-id>.
That one file renders differently depending on the id — you don't need a separate HTML
file per product. Each product's copy (description, materials, dimensions, care) lives
in js/products.js and is starter text — replace with your real specs before launch.

## Before going live
1. In js/main.js, replace WHATSAPP_NUMBER with your real number (no + or spaces).
2. Add your photos to /images using these exact file names (or edit the src in the
   code if you'd rather name them differently):
   - images/logo.png — your logo
   - images/hero.jpg — the big Home page hero photo
   - images/living-room.jpg, bedroom.jpg, dining.jpg, office.jpg, outdoor.jpg, decor.jpg — room grid
   - images/showcase-living-room.jpg, showcase-dining-room.jpg, showcase-bedroom.jpg — Home page's styled-room gallery
   - images/furniture-hero.jpg, images/collections-hero.jpg — the two inner-page hero banners
   - images/collection-haven.jpg, collection-terra.jpg, collection-noir.jpg, collection-solace.jpg, collection-atelier.jpg
   - images/about-hero.jpg, about-workshop.jpg, about-strip-1.jpg through -4.jpg — About Us page
   - images/journal-featured.jpg, journal-small-space.jpg, journal-natural-wood.jpg,
     journal-minimalist-bedroom.jpg, journal-dining-table.jpg, journal-trends.jpg — Inspiration page
   - Each product's main image path is set on its entry in js/products.js (e.g. images/aurel-lounge.jpg).
     For extra gallery angles on the product page, add images/<id>-2.jpg, -3.jpg, -4.jpg — optional,
     the gallery just shows fewer photos until those exist.
   Until a file exists at a given path, that spot just shows an empty placeholder —
   nothing breaks, so you can add photos gradually.
3. On about.html: the founding story avoids inventing a specific year, and the stats bar
   (years of craft, pieces created, happy customers) is left as "X+" placeholders on purpose —
   fill in your real numbers before this page goes live.
4. Update the social links (href="#") in every footer with your real Facebook/Instagram/TikTok URLs.
5. Update the map + address on contact.html once it's built (currently a placeholder page).
6. The 6 articles on inspiration.html (titles, excerpts, dates) are sample blog post ideas,
   not real published content — the "Read Article" links don't go anywhere yet since there
   are no full article pages. Replace with your real posts, or ask Claude to build a real
   article template once you have content.
7. On contact.html: the Phone and WhatsApp cards both read from the same WHATSAPP_NUMBER
   in js/main.js, so you only need to update that one number for both to be correct.
   The email (hello@yourdomain.com), showroom address, and opening hours are placeholders —
   update them directly in contact.html.
8. There's no backend on this site, so the contact form doesn't email anyone. On submit,
   it opens WhatsApp with all the form fields filled into one message — the same
   WHATSAPP_NUMBER as everywhere else. If you'd rather it send a real email, that needs a
   form backend (e.g. Formspree, or a small serverless function) — ask Claude to wire that
   up whenever you're ready.

## Status
Every page is now built: Home, Furniture, Collections, About Us, Inspiration, and Contact.
Real business details are now wired in: WhatsApp/phone (0812 523 6606), email
(bolajiidris858@gmail.com), Instagram and TikTok, and "Lagos, Ajah — also delivers
interstate" wherever location comes up. Brand name is "Simply'Moh Furniture Concept"
throughout. What's left is mostly photos — your logo and product/room images — plus,
optionally, real blog posts and a form backend if you want the contact form to send
actual emails instead of opening WhatsApp.