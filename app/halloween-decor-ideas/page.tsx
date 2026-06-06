import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { site } from "@/app/data/site";

const pageUrl = `${site.url}/halloween-decor-ideas`;

const internalLinks = [
  { href: "/halloween", label: "Halloween" },
  { href: "/fall", label: "Fall" },
  { href: "/reading-nook-ideas", label: "Reading Nooks" },
  { href: "/gift-guides", label: "Gift Guides" }
];

const halloweenSections = [
  {
    title: "Cozy Halloween Living Room Ideas",
    shortTitle: "Living Room",
    slug: "cozy-halloween-living-room-ideas",
    image: "/images/halloween-decor/living-room.webp",
    imageAlt:
      "Cozy Halloween living room with ceramic pumpkins, candles, warm pillows, blankets, and fall stems",
    intro:
      "A cozy Halloween living room works best when the seasonal pieces feel layered into the room you already love. Keep the sofa calm with soft throws, a few Halloween throw pillows, and one or two sculptural pumpkins on the coffee table or sideboard. Instead of covering every surface, create a few small moments: a lantern beside the fireplace, battery candles on a tray, fall stems in a ceramic vase, and a stack of books in warm autumn tones. The goal is a room that feels ready for October movie nights without looking like it was decorated all at once. If your palette is mostly neutral, add depth with matte black, smoked amber, rust, olive, or antique brass. If your home already has color, choose pumpkins and textiles that repeat those tones so the Halloween pieces look intentional.",
    tryThis: [
      "Style one tray with pumpkins, candles, and a small vase of fall stems.",
      "Swap only two pillow covers instead of replacing every textile.",
      "Use lanterns near the fireplace, TV console, or reading chair."
    ],
    shopSoon: [
      "Halloween throw pillows",
      "Cozy blankets",
      "Ceramic pumpkins",
      "Lanterns",
      "Battery candles",
      "Fall stems"
    ]
  },
  {
    title: "Halloween Coffee Bar Ideas",
    shortTitle: "Coffee Bar",
    slug: "halloween-coffee-bar-ideas",
    image: "/images/halloween-decor/coffee-bar.webp",
    imageAlt:
      "Cozy Halloween coffee bar with pumpkin mugs, amber syrup bottles, mini pumpkins, and a tiered tray",
    intro:
      "A Halloween coffee bar is one of the easiest places to create a Pinterest-friendly seasonal moment because it can be small, useful, and styled in layers. Start with the everyday pieces you already reach for: mugs, coffee pods, syrups, stirrers, and a tray. Then add cozy Halloween details around them, such as pumpkin mugs, mini pumpkins, amber syrup bottles, a simple sign, or a small tiered tray. Keep the color story warm so the setup feels more like a fall kitchen corner than a party display. Cream, cinnamon, black, brass, and wood tones are especially easy to style. If your counter space is limited, use a mug rack or wall shelf to bring the look upward. A few practical items, displayed well, will feel more expensive than a crowded counter full of tiny decorations.",
    tryThis: [
      "Group mugs, syrups, and mini pumpkins on one tray.",
      "Use matching bottles for coffee syrups to make the bar feel polished.",
      "Add one small sign or framed print instead of several themed pieces."
    ],
    shopSoon: [
      "Pumpkin mugs",
      "Syrup bottles",
      "Mug racks",
      "Mini pumpkins",
      "Tiered trays",
      "Coffee bar signs"
    ]
  },
  {
    title: "Halloween Mantel Decor Ideas",
    shortTitle: "Mantel",
    slug: "halloween-mantel-decor-ideas",
    image: "/images/halloween-decor/mantel.webp",
    imageAlt:
      "Cozy Halloween mantel with garland, candlesticks, pumpkins, black lanterns, and dried fall stems",
    intro:
      "A Halloween mantel can carry the whole mood of a room, especially when it has height, glow, and a restrained palette. Begin with one anchor piece, such as framed Halloween prints, a mirror, or art you already own. Add garlands or dried fall stems for movement, then layer candlesticks, faux pumpkins, black lanterns, and a few smaller accents across the mantel. The trick is to vary the height without making the line feel busy. Place taller pieces near the ends or behind shorter pumpkins, then let the center breathe. Warm candlelight keeps black accents from feeling too harsh, while cream pumpkins and natural stems soften the spooky details. For a more elevated look, repeat materials: brass with brass, black with black, ceramic with ceramic. Repetition makes budget pieces look collected instead of random.",
    tryThis: [
      "Use one garland as the base layer, then add candles and pumpkins.",
      "Lean framed prints instead of hanging them for a relaxed look.",
      "Mix tall candlesticks with low pumpkins to create movement."
    ],
    shopSoon: [
      "Garlands",
      "Candlesticks",
      "Faux pumpkins",
      "Framed Halloween prints",
      "Black lanterns",
      "Dried fall stems"
    ]
  },
  {
    title: "Halloween Entryway Decor Ideas",
    shortTitle: "Entryway",
    slug: "halloween-entryway-decor-ideas",
    image: "/images/halloween-decor/entryway.webp",
    imageAlt:
      "Warm Halloween entryway with console table decor, wreath, woven baskets, lanterns, and pumpkins",
    intro:
      "The entryway is the first place Halloween decor can feel welcoming instead of overwhelming. Think of it as a small seasonal greeting: a wreath on the door, a lantern near the console, a woven basket with a throw, and a few pumpkin sets tucked near the base of a table or bench. If you have a console table, keep the surface edited with one tray, one vase, and one seasonal focal point. A welcome sign can work well, but it should match the tone of the rest of your home rather than shouting for attention. Natural textures help the entry feel warm for a US fall home: wicker, wood, jute, brass, and creamy ceramic pieces all pair nicely with Halloween black or rust. Leave enough open space for keys, mail, bags, and real life.",
    tryThis: [
      "Place matching lanterns at different heights near the door or console.",
      "Add a wreath first, then keep the table decor simple.",
      "Use baskets to make seasonal throws and extra pumpkins feel useful."
    ],
    shopSoon: [
      "Wreaths",
      "Console table decor",
      "Woven baskets",
      "Lanterns",
      "Welcome signs",
      "Pumpkin sets"
    ]
  },
  {
    title: "Halloween Lighting Ideas",
    shortTitle: "Lighting",
    slug: "halloween-lighting-ideas",
    image: "/images/halloween-decor/lighting.webp",
    imageAlt:
      "Cozy Halloween lighting vignette with fairy lights, lanterns, battery candles, and warm candle holders",
    intro:
      "Lighting is what makes Halloween decor feel cozy instead of flat. Before adding more themed pieces, add a warmer glow to the spaces you already use at night. Battery candles on a mantel, fairy lights inside glass lanterns, warm string lights along a shelf, and flameless candles on a coffee table can completely change the mood of a room. Keep bulbs warm white rather than cool white so the light flatters pumpkins, wood, brass, and fall textiles. Candle holders also matter: amber glass, antique brass, matte black, and simple ceramic holders all feel seasonal without being too loud. For safety and convenience, flameless candles are especially useful in entryways, on bookcases, in apartments, and near soft textiles. The best Halloween lighting feels quiet, layered, and easy to leave on through a cozy evening.",
    tryThis: [
      "Use flameless candles in clusters of three or five.",
      "Tuck fairy lights inside lanterns for a softer glow.",
      "Choose warm white bulbs so the room feels cozy in photos."
    ],
    shopSoon: [
      "Fairy lights",
      "Battery candles",
      "Lanterns",
      "Candle holders",
      "Warm string lights",
      "Flameless candles"
    ]
  },
  {
    title: "Small Apartment Halloween Decor Ideas",
    shortTitle: "Small Apartment",
    slug: "small-apartment-halloween-decor-ideas",
    image: "/images/halloween-decor/small-apartment.webp",
    imageAlt:
      "Small apartment Halloween decor with peel-and-stick bats, small pumpkins, compact lanterns, and cozy pillow covers",
    intro:
      "Small apartment Halloween decor should work harder because every piece is visible. Instead of bringing in bulky decorations, focus on vertical space, textiles, and compact accents. Peel-and-stick bats can create a big seasonal impact above a sofa, mirror, shelf, or coffee bar without taking up storage space. Small pumpkins, mini wreaths, shelf decor, and compact lanterns add the Halloween mood while keeping surfaces functional. Pillow covers are especially apartment-friendly because they store flat and can change the feeling of a sofa quickly. If your apartment has an open layout, repeat the same palette across the living room, kitchen corner, and entry so the decor feels connected. Try warm neutrals, black accents, soft rust, and candlelight. A few repeated details will make the whole apartment feel styled without crowding the floor.",
    tryThis: [
      "Decorate up the wall with removable bats or a mini wreath.",
      "Use pillow covers and throws because they store easily.",
      "Choose small pumpkins in one color family for a cleaner look."
    ],
    shopSoon: [
      "Peel-and-stick bats",
      "Small pumpkins",
      "Mini wreaths",
      "Shelf decor",
      "Compact lanterns",
      "Cozy throw pillow covers"
    ]
  },
  {
    title: "Renter-Friendly Halloween Decor",
    shortTitle: "Renter Friendly",
    slug: "renter-friendly-halloween-decor",
    image: "/images/halloween-decor/renter-friendly.webp",
    imageAlt:
      "Renter-friendly Halloween decor with removable bats, lightweight garland, tabletop pumpkins, and battery candles",
    intro:
      "Renter-friendly Halloween decor is all about impact without damage. Use command hooks for lightweight garlands, removable bats for walls or mirrors, tabletop pumpkins for shelves and consoles, and battery candles anywhere you want a warm glow. No-damage wall decor can still feel elevated if you keep the styling intentional. For example, a cluster of bats above a bar cart looks cleaner when the shapes move in one direction and the rest of the surface stays simple. Lightweight garlands can frame a mirror, doorway, headboard, or mantel shelf without nails. Tabletop pieces are also your friend: pumpkins, trays, candles, jars, mugs, and small framed prints can create a full seasonal feeling with no permanent changes. When you move, the best renter-friendly decor packs down easily and works in different rooms next year.",
    tryThis: [
      "Hang lightweight pieces with removable hooks rated for the weight.",
      "Style tabletops and shelves before adding anything to the walls.",
      "Use battery candles where open flame is not allowed."
    ],
    shopSoon: [
      "Command hooks",
      "Removable bats",
      "Tabletop pumpkins",
      "Lightweight garlands",
      "Battery candles",
      "No-damage wall decor"
    ]
  },
  {
    title: "Budget Halloween Decor That Looks Expensive",
    shortTitle: "Budget",
    slug: "budget-halloween-decor-that-looks-expensive",
    image: "/images/halloween-decor/budget.webp",
    imageAlt:
      "Budget Halloween decor vignette with neutral pumpkins, affordable lanterns, faux stems, candle holders, and decorative tray",
    intro:
      "Budget Halloween decor looks more expensive when the palette is edited and the materials feel calm. Skip anything that reads too shiny, flimsy, or overly bright unless it is part of a playful kids' space. Instead, look for neutral pumpkins, affordable lanterns, faux stems, pillow covers, candle holders, and decorative trays that can be used again for fall. A tray is one of the best budget styling tools because it makes small items look grouped and intentional. Pillow covers are another smart buy because they refresh the room without replacing inserts. For a Pottery Barn Halloween look for less, lean into symmetry, warm lighting, black accents, oversized pumpkins where you can, and natural texture. Use fewer pieces, repeat the same colors, and leave breathing room around each vignette.",
    tryThis: [
      "Choose two or three colors and repeat them across the room.",
      "Use trays to make affordable pumpkins and candles look collected.",
      "Mix one larger statement piece with smaller budget accents."
    ],
    shopSoon: [
      "Neutral pumpkins",
      "Affordable lanterns",
      "Faux stems",
      "Pillow covers",
      "Candle holders",
      "Decorative trays"
    ]
  }
];

const getTeaser = (text: string) => text.split(".")[0] + ".";

const moodCategories = [
  { title: "Pumpkins & Gourds", href: "#cozy-halloween-living-room-ideas" },
  { title: "Lanterns & Candles", href: "#halloween-lighting-ideas" },
  { title: "Halloween Pillows", href: "#cozy-halloween-living-room-ideas" },
  { title: "Cozy Throws", href: "#small-apartment-halloween-decor-ideas" },
  { title: "Coffee Bar Decor", href: "#halloween-coffee-bar-ideas" },
  { title: "Mantel Styling", href: "#halloween-mantel-decor-ideas" },
  { title: "Entryway Finds", href: "#halloween-entryway-decor-ideas" },
  { title: "Small Space Decor", href: "#small-apartment-halloween-decor-ideas" }
];

const faqs = [
  {
    question: "How can I decorate for Halloween without making my home look cluttered?",
    answer:
      "Choose one or two focal areas, use a limited color palette, and leave open space on tables, shelves, and counters. Warm lighting, pumpkins, pillows, and a few edited accents usually feel cozier than decorating every surface."
  },
  {
    question: "What colors work best for cozy Halloween decor?",
    answer:
      "Cream, warm white, soft black, walnut, terracotta, rust, antique brass, smoked amber, olive, and deep cranberry all work well for cozy Halloween decor that still feels like fall."
  },
  {
    question: "How do I make Halloween decor look expensive on a budget?",
    answer:
      "Use fewer pieces, repeat the same colors, and choose items with texture such as ceramic pumpkins, lanterns, woven baskets, faux stems, pillow covers, and candle holders. Styling items together on trays also makes budget decor feel more polished."
  },
  {
    question: "What are easy renter-friendly Halloween decor ideas?",
    answer:
      "Try removable bats, command hooks, lightweight garlands, tabletop pumpkins, battery candles, mini wreaths, and no-damage wall decor. Focus on shelves, consoles, doors, mirrors, and coffee bars for strong impact without permanent changes."
  },
  {
    question: "When should I start decorating for Halloween?",
    answer:
      "Many people start with subtle fall decor in early September, then add Halloween pieces from late September through early October. If you prefer a shorter season, decorating the first weekend of October still gives you plenty of time to enjoy it."
  }
];

export const metadata: Metadata = {
  title: "Cozy Halloween Decor Ideas for a Warm Fall Home",
  description:
    "Browse cozy Halloween decor ideas for living rooms, coffee bars, mantels, entryways, small apartments, lighting, and budget-friendly seasonal styling.",
  alternates: {
    canonical: pageUrl
  },
  openGraph: {
    title: "Cozy Halloween Decor Ideas for a Warm Fall Home | Cozy Seasonal Finds",
    description:
      "Browse cozy Halloween living room ideas, coffee bars, mantels, entryways, lighting tips, small apartment decor, and budget-friendly seasonal styling.",
    url: pageUrl,
    siteName: site.name,
    images: [
      {
        url: "/images/home/halloween-decor-card.webp",
        width: 720,
        height: 720,
        alt: "Cozy Halloween decor with ceramic pumpkins, candles, and warm styling"
      }
    ],
    type: "article"
  }
};

export default function HalloweenDecorIdeasPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer
      }
    }))
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <article className="editorial-page">
        <section className="editorial-hero">
          <div className="editorial-hero-copy">
            <p className="eyebrow">Halloween decor ideas</p>
            <h1>Cozy Halloween Decor Ideas for a Warm, Stylish Fall Home</h1>
            <p className="lede">
              Browse cozy Halloween living room ideas, coffee bars, mantel
              styling, entryway decor, lighting tips, and budget-friendly
              seasonal finds for a home that feels festive without looking
              cluttered.
            </p>
            <div className="editorial-cta-row">
              <Link href="#cozy-halloween-living-room-ideas" className="primary-cta">
                Explore Halloween Ideas
              </Link>
              <Link href="#shop-the-cozy-halloween-mood" className="secondary-cta">
                Shop the Mood Soon
              </Link>
            </div>
            <nav aria-label="Related cozy seasonal hubs" className="editorial-link-row">
              {internalLinks.map((link) => (
                <Link key={link.href} href={link.href}>
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>
          <div className="editorial-hero-media">
            <Image
              src="/images/home/halloween-decor-card.webp"
              alt="Cozy Halloween console table with ceramic pumpkins, lanterns, candles, and warm neutral decor"
              width={720}
              height={720}
              priority
              unoptimized
            />
          </div>
        </section>

        <section className="editorial-section inspiration-grid-section" aria-label="Cozy Halloween inspiration by space">
          <div className="inspiration-grid">
            {halloweenSections.map((section) => (
              <Link key={section.slug} href={`#${section.slug}`} className="inspiration-card">
                <Image
                  src={section.image}
                  alt={section.imageAlt}
                  width={900}
                  height={675}
                  unoptimized
                  className="inspiration-card-image"
                />
                <div className="inspiration-card-copy">
                  <h3>{section.shortTitle}</h3>
                  <p>{getTeaser(section.intro)}</p>
                </div>
              </Link>
            ))}
          </div>
        </section>

        <section className="editorial-section editorial-intro">
          <p className="section-kicker">The cozy formula</p>
          <div className="editorial-two-column">
            <h2>Halloween decor can feel warm, polished, and easy to live with.</h2>
            <div className="intro-copy">
              <p>
                Halloween decorating does not have to mean bright orange
                plastic, crowded tabletops, or a room that feels more chaotic
                than cozy. The most inviting October homes usually begin with
                the same pieces that make fall feel good: warm lights, layered
                throws, textured pillows, ceramic pumpkins, taper candles,
                lanterns, woven baskets, and a few natural stems in autumn
                colors.
              </p>
              <p>
                From there, you can add the Halloween mood in small, intentional
                ways. A cluster of matte black candlesticks, a few peel-and-stick
                bats, a pumpkin mug on the coffee bar, or a simple mantel garland
                can make the whole space feel festive without taking over the
                room. This hub is designed as a starting point for cozy Halloween
                living rooms, coffee bars, mantels, entryways, apartments,
                lighting ideas, and budget-friendly looks that are easy to
                recreate. Product picks will be added over time, but the styling
                ideas here are meant to help you save the mood now and shop
                thoughtfully later.
              </p>
            </div>
          </div>
        </section>

        <section
          id="shop-the-cozy-halloween-mood"
          className="editorial-section mood-hub-section"
          aria-labelledby="shop-mood-heading"
        >
          <div className="section-heading">
            <p className="section-kicker">Shop the Mood</p>
            <h2 id="shop-mood-heading">Shop the Cozy Halloween Mood</h2>
          </div>
          <p className="recommended-note">
            Real product roundups are coming soon. For now, use these categories
            to jump to the cozy Halloween looks that match your room, budget, or
            small-space decorating plans.
          </p>
          <div className="mood-category-grid">
            {moodCategories.map((category) => (
              <Link key={category.title} href={category.href} className="mood-category-card">
                {category.title}
              </Link>
            ))}
          </div>
        </section>

        <section className="editorial-section" aria-labelledby="ideas-heading">
          <div className="section-heading">
            <p className="section-kicker">Room-by-room inspiration</p>
            <h2 id="ideas-heading">Cozy Halloween styling ideas to save before you shop</h2>
          </div>
          <div className="decor-section-list">
            {halloweenSections.map((section) => (
              <section
                key={section.slug}
                id={section.slug}
                className="decor-detail-card"
                aria-labelledby={`${section.slug}-heading`}
              >
                <Image
                  src={section.image}
                  alt={section.imageAlt}
                  width={1400}
                  height={1050}
                  unoptimized
                  className="decor-detail-image"
                />
                <div className="decor-detail-body">
                  <div className="decor-detail-copy">
                    <h2 id={`${section.slug}-heading`}>{section.title}</h2>
                    <p>{section.intro}</p>
                  </div>
                  <div className="try-this-block">
                    <h3>Try this look</h3>
                    <ul>
                      {section.tryThis.map((item) => (
                        <li key={item}>{item}</li>
                      ))}
                    </ul>
                  </div>
                  <aside className="shop-soon-card" aria-label={`Shop the look: ${section.title}`}>
                    <p className="section-kicker">Shop the look</p>
                    <p className="shop-soon-note">Product picks coming soon</p>
                    <ul className="shop-chip-list">
                      {section.shopSoon.map((item) => (
                        <li key={item}>{item}</li>
                      ))}
                    </ul>
                  </aside>
                </div>
              </section>
            ))}
          </div>
        </section>

        <section className="editorial-section image-feature">
          <Image
            src="/images/home/seasonal-living-room-hero.webp"
            alt="Warm living room with cozy textiles, candles, books, and seasonal styling"
            width={1774}
            height={887}
            loading="eager"
            unoptimized
            sizes="(max-width: 760px) 100vw, 1184px"
            className="image-feature-photo"
          />
          <div className="image-feature-copy">
            <p className="section-kicker">Pinterest landing note</p>
            <h2>Saved a Halloween Decor Pin? Start Here</h2>
            <p>
              If you arrived from Pinterest, this page gathers the main cozy
              Halloween looks in one place: living rooms, entryways, coffee bars,
              mantels, lighting ideas, small apartments, renter-friendly decor,
              and expensive-looking budget finds. Shoppable finds will be added
              as the guide grows, so you can use the ideas now and come back
              when product roundups are ready.
            </p>
          </div>
        </section>

        <section className="editorial-section faq-section" aria-labelledby="faq-heading">
          <div className="section-heading">
            <p className="section-kicker">FAQ</p>
            <h2 id="faq-heading">Halloween decor questions</h2>
          </div>
          <div className="faq-list">
            {faqs.map((faq) => (
              <div key={faq.question} className="faq-item">
                <h3>{faq.question}</h3>
                <p>{faq.answer}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="editorial-section related-section" aria-labelledby="related-heading">
          <div>
            <p className="section-kicker">Explore next</p>
            <h2 id="related-heading">More cozy seasonal hubs</h2>
          </div>
          <div className="related-grid">
            {internalLinks.map((link) => (
              <Link key={link.href} href={link.href}>
                {link.label}
              </Link>
            ))}
          </div>
        </section>
      </article>
    </>
  );
}
