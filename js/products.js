// ---- Product catalogue used across Home, Furniture, Collections, and the product page ----
// Edit freely. "image" is the main photo; the product page also looks for
// images/<id>-2.jpg, -3.jpg, -4.jpg for its gallery — add those files if you
// want more angles, otherwise the gallery just shows the one photo.
const PRODUCTS = [
  { id: "aurel-lounge", name: "Aurel Lounge Chair", material: "Solid oak, boucle upholstery", room: "Living Room", image: "images/Aurel Lounge Chair.webp",
    description: "The Aurel Lounge Chair pairs a solid oak frame with a deep boucle seat, built for the corner of a room you actually want to sit in. The gently curved back and wide arms make it as comfortable for a book as it is for company.",
    materialsLong: "The frame is cut from solid oak and reinforced at every joint, so the chair holds its shape under daily use. The boucle upholstery is woven for texture and durability, and sits over a foam-and-spring seat that keeps its bounce for years.",
    care: "Vacuum the boucle weekly with a soft brush attachment and blot spills immediately rather than rubbing. Keep the frame out of direct sunlight to preserve the oak's natural tone.",
    dimensions: { width: 82, height: 88, depth: 85, weight: 22 } },

  { id: "solace-sofa", name: "Solace Sofa", material: "Walnut frame, linen upholstery", room: "Living Room", image: "images/WhatsApp Image 2026-09-17 at 23.46.01 (2).jpeg",
    description: "The Solace Sofa is a three-seat piece built around a solid walnut frame, upholstered in a woven linen that softens with use. It's sized for a real living room — wide enough for a nap, not so deep you sink and can't get up.",
    materialsLong: "A kiln-dried walnut frame sits under pocket-spring cushions wrapped in a durable linen blend. Every joint is doweled and glued rather than stapled, which is what lets the sofa hold its shape for a decade or more.",
    care: "Rotate and fluff the cushions weekly to spread out wear. Spot-clean the linen with a mild detergent and cold water, and avoid soaking the fabric.",
    dimensions: { width: 210, height: 82, depth: 92, weight: 58 } },

  { id: "halden-console", name: "Halden Console", material: "Walnut veneer, brass inlay", room: "Living Room", image: "images/Halden Console.jfif",
    description: "The Halden Console brings a quiet bit of shine to an entryway or living room wall, with a walnut veneer body and a thin brass inlay running along each edge.",
    materialsLong: "Built on a plywood core faced in walnut veneer for stability, with hand-set brass inlay along the visible edges. The two drawers run on soft-close runners.",
    care: "Dust with a dry microfiber cloth and wipe the brass inlay occasionally with a dry cloth to keep it from dulling. Avoid placing wet items directly on the veneer.",
    dimensions: { width: 140, height: 78, depth: 38, weight: 34 } },

  { id: "ives-armchair", name: "Ives Armchair", material: "Beechwood, wool upholstery", room: "Living Room", image: "images/WhatsApp Image 2026-09-17 at 23.45.57 (1).jpeg",
    description: "The Ives Armchair is a smaller-scale seat for rooms where space is tight but comfort still matters, with slim beechwood legs and a wool-upholstered seat and back.",
    materialsLong: "Solid beechwood legs are joined to a plywood-and-foam seat shell, upholstered in a tightly woven wool that resists pilling. The compact frame is light enough to move between rooms.",
    care: "Brush the wool seat weekly to lift dust, and treat spills with a dry cloth first before spot-cleaning. Wipe the legs with a barely damp cloth only.",
    dimensions: { width: 68, height: 80, depth: 72, weight: 14 } },

  { id: "nesta-bed", name: "Bed Frame", material: "Solid ash, natural oil finish", room: "Bedroom", image: "images/WhatsApp Image 2026-09-17 at 23.46.03.jpeg",
    description: "The Bed Frame is a low, simple platform bed in solid ash, finished with a natural oil that lets the grain show through rather than covering it up.",
    materialsLong: "Solid ash slats and frame, finished with a food-safe natural oil rather than a lacquer, so small scratches can be buffed out rather than chipping. No box spring required.",
    care: "Dust regularly and re-oil the frame once a year to keep the finish even. Use felt pads under the legs if placing on hard flooring.",
    dimensions: { width: 160, height: 35, depth: 210, weight: 42 } },

  { id: "linden-dresser", name: "Linden Dresser", material: "Walnut, brass handles", room: "Bedroom", image: "images/Linden Dresser.jfif",
    description: "The Linden Dresser is a six-drawer walnut piece with simple brass handles, sized to actually hold a wardrobe rather than just look good empty.",
    materialsLong: "Solid walnut drawer fronts sit on a plywood carcass for long-term stability, with brass handles fixed through the front rather than glued. Drawers are dovetailed at the corners.",
    care: "Dust with a dry cloth and avoid dragging items across the top surface. Keep drawers from overloading past their runner capacity.",
    dimensions: { width: 130, height: 80, depth: 48, weight: 46 } },

  { id: "marlow-nightstand", name: "Marlow Nightstand", material: "Solid ash, brass pull", room: "Bedroom", image: "images/Marlow Nightstand.webp",
    description: "The Marlow Nightstand is a small single-drawer piece in solid ash with one brass pull, built to sit quietly beside the bed or on its own.",
    materialsLong: "Solid ash construction throughout, with a single soft-close drawer and a brass pull fixed through the front panel.",
    care: "Dust regularly and wipe up spills immediately to avoid water rings on the ash top.",
    dimensions: { width: 45, height: 52, depth: 38, weight: 9 } },

  { id: "bedroom-decor", name: "Bedroom Accent Piece", material: "Mixed materials — confirm with client", room: "Bedroom", image: "images/WhatsApp Image 2026-09-17 at 23.46.01.jpeg",
    description: "A decorative accent piece that finishes off a bedroom without overwhelming it — pairs well with the Bed Frame and Linden Dresser for a styled look.",
    materialsLong: "Exact materials and finish depend on the piece pictured — update this once you've confirmed the details.",
    care: "Dust regularly with a soft, dry cloth.",
    dimensions: { width: 30, height: 40, depth: 20, weight: 3 } },

  { id: "marlowe-table", name: "Marlowe Dining Table", material: "Reclaimed teak", room: "Dining", image: "images/Marlowe Dining Table.jfif",
    description: "The Marlowe Dining Table is built from reclaimed teak, so every table carries slightly different grain and knot patterns from the wood's first life.",
    materialsLong: "Reclaimed teak boards are kiln-dried and joined into a single tabletop, then finished with a hardwax oil that's easy to spot-repair. The base is solid teak as well, not veneer.",
    care: "Wipe with a damp cloth after meals and dry immediately. Use coasters and trivets for hot dishes, and re-oil the top once a year.",
    dimensions: { width: 200, height: 75, depth: 95, weight: 52 } },

  { id: "row-dining-chair", name: "Dining Chair", material: "Ash, woven cane back", room: "Dining", image: "images/Dining Chair.webp",
    description: "The Dining Chair pairs a solid ash frame with a woven cane back panel, light enough to pull in and out of the table without a fuss.",
    materialsLong: "Solid ash legs and seat frame, with a hand-woven cane back panel set into a routed groove rather than stapled on.",
    care: "Wipe the ash frame with a dry cloth and avoid leaning weight on the cane back. Keep cane away from prolonged direct sun to prevent brittleness.",
    dimensions: { width: 46, height: 82, depth: 52, weight: 6 } },

  { id: "aster-bench", name: "Aster Dining Bench", material: "Solid oak", room: "Dining", image: "images/Aster Dining Bench.jfif",
    description: "The Aster Dining Bench seats two comfortably along one side of the table, built from solid oak with the same finish as the rest of the Terra Collection.",
    materialsLong: "A single oak seat plank sits on a mortise-and-tenon oak base, finished to highlight the grain.",
    care: "Wipe with a dry or barely damp cloth. Avoid sliding the bench across unprotected flooring.",
    dimensions: { width: 140, height: 46, depth: 36, weight: 18 } },

  { id: "dune-daybed", name: "Dune Daybed", material: "Teak, weatherproof rope weave", room: "Outdoor", image: "images/Dune Daybed.webp",
    description: "The Dune Daybed is built for a covered patio or balcony, with a solid teak frame and a hand-woven weatherproof rope base that dries quickly after rain.",
    materialsLong: "Solid teak frame, naturally resistant to moisture and rot, paired with a marine-grade rope weave that won't sag or mildew outdoors.",
    care: "Hose down periodically to clear dust and let air dry. Teak will silver over time outdoors unless treated with a protective oil.",
    dimensions: { width: 200, height: 70, depth: 110, weight: 38 } },

  { id: "palma-lounge-set", name: "Lounge Set", material: "Teak, all-weather wicker", room: "Outdoor", image: "images/Palma Lounge Set.jfif",
    description: "The Lounge Set is a two-seat outdoor arrangement in teak and all-weather wicker, built to stay outside through the rainy season without falling apart.",
    materialsLong: "Teak frames paired with synthetic all-weather wicker that won't crack or fade the way natural rattan does outdoors.",
    care: "Wipe down with mild soap and water as needed. Store cushions indoors during extended heavy rain.",
    dimensions: { width: 160, height: 75, depth: 80, weight: 30 } },

  { id: "verlin-desk", name: "Writing Desk", material: "Ash, powder-coated steel legs", room: "Office", image: "images/Verlin Writing Desk.avif",
    description: "The Writing Desk pairs a solid ash top with slim powder-coated steel legs, sized for a laptop and a notebook rather than a full home office setup.",
    materialsLong: "Solid ash top on a welded steel frame, powder-coated for a finish that resists scratching and chipping.",
    care: "Wipe the ash top with a dry cloth and avoid placing hot items directly on the surface. Clean steel legs with a barely damp cloth.",
    dimensions: { width: 120, height: 74, depth: 55, weight: 19 } },

  { id: "bramble-bookshelf", name: "Bramble Bookshelf", material: "Solid oak", room: "Office", image: "images/WhatsApp Image 2026-09-17 at 23.45.59 (2).jpeg",
    description: "The Bramble Bookshelf is a five-shelf solid oak unit, built to actually hold books rather than just decor.",
    materialsLong: "Solid oak sides and shelves, joined with hidden fasteners for a clean look and rated to hold a genuinely full shelf of books per level.",
    care: "Dust shelves regularly and avoid overloading beyond the stated weight per shelf.",
    dimensions: { width: 90, height: 180, depth: 32, weight: 48 } },

  { id: "amara-vase-set", name: "Vase Set", material: "Stoneware", room: "Decor", image: "images/WhatsApp Image 2026-09-17 at 23.46.02.jpeg",
    description: "Three hand-thrown stoneware vessels in varying heights, each one slightly different since no two are thrown exactly alike.",
    materialsLong: "Hand-thrown stoneware, fired at high temperature for durability, finished in a matte glaze.",
    care: "Hand wash only. Keep away from direct impact since stoneware can chip.",
    dimensions: { width: 18, height: 32, depth: 18, weight: 3 } },

  { id: "solstice-lamp", name: "Floor Lamp", material: "Brass, linen shade", room: "Decor", image: "images/WhatsApp Image 2026-09-17 at 23.46.02 (2).jpeg",
    description: "The Floor Lamp pairs a slim brass frame with a linen drum shade, giving off a warm, diffused light rather than a harsh overhead glow.",
    materialsLong: "Solid brass rod construction with a linen shade over a steel frame, using a standard E27 bulb socket.",
    care: "Dust the shade with a soft brush and wipe the brass frame with a dry cloth. Use a warm-white bulb rated under 60W.",
    dimensions: { width: 40, height: 150, depth: 40, weight: 5 } },

  { id: "kitchen-lamp", name: "Table Lamp", material: "Brass, fabric shade", room: "Decor", image: "images/WhatsApp Image 2026-09-17 at 23.46.02 (1).jpeg",
    description: "A smaller companion to the Floor Lamp, using the same warm brass-and-fabric styling but sized for a side table or console instead of the floor.",
    materialsLong: "Solid brass base with a fabric shade over a steel frame, using a smaller E14 bulb socket.",
    care: "Dust the shade with a soft brush and wipe the brass base with a dry cloth.",
    dimensions: { width: 22, height: 45, depth: 22, weight: 2 } }
];

// ---- Curated collections shown on the Collections page ----
// productIds reference the PRODUCTS above. Rewrite the copy freely —
// this is starter text, not final marketing copy.
const COLLECTIONS = [
  { id: "haven", number: "01", name: "The Haven Collection", tagline: "Warm, soft, comfortable living room furniture",
    description: "The Haven Collection is built for slowing down. Deep seats, soft textures, and modular pieces adapt to movie nights, guests, or a quiet afternoon alone — furniture meant to be lived on, not just looked at.",
    productIds: ["aurel-lounge", "solace-sofa", "halden-console", "ives-armchair"], image: "images/Solace Sofa.jfif" },

  { id: "terra", number: "02", name: "The Terra Collection", tagline: "Natural wood, earthy tones, organic shapes",
    description: "The Terra Collection celebrates solid wood in its most honest form. Each piece is finished to show the grain rather than hide it, bringing warm, earthy tones into dining rooms and workspaces alike.",
    productIds: ["marlowe-table", "row-dining-chair", "aster-bench", "bramble-bookshelf"], image: "images/Marlowe Dining Table.jfif" },

  { id: "noir", number: "03", name: "The Noir Collection", tagline: "Dark, sophisticated, contemporary furniture",
    description: "The Noir Collection is for rooms that want a little drama. Dark finishes and bold, sculptural silhouettes give these pieces enough presence to anchor a space instead of blending into it.",
    productIds: ["halden-console", "verlin-desk", "marlow-nightstand", "solstice-lamp"], image: "images/Marlow Nightstand.webp" },

  { id: "solace", number: "04", name: "The Solace Collection", tagline: "Bedroom furniture focused on calm and relaxation",
    description: "The Solace Collection turns the bedroom into an actual retreat. Low profiles, soft materials, and quiet details work together to make winding down feel automatic, night after night.",
    productIds: ["nesta-bed", "linden-dresser", "marlow-nightstand", "amara-vase-set"], image: "images/Linden Dresser.jfif" },

  { id: "atelier", number: "05", name: "The Atelier Collection", tagline: "Statement pieces for refined interiors",
    description: "The Atelier Collection is where our workshop takes the most risks — sculptural forms, unexpected materials, and finishes that reward a closer look. For pieces that double as conversation starters.",
    productIds: ["dune-daybed", "palma-lounge-set", "amara-vase-set", "solstice-lamp"], image: "images/Palma Lounge Set.jfif" }
];