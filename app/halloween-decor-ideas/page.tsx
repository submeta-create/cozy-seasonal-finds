import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { site } from "@/app/data/site";

const pageUrl = `${site.url}/halloween-decor-ideas`;

const internalLinks = [
  { href: "/halloween", label: "Halloween" },
  { href: "/fall", label: "Fall" },
  { href: "/christmas", label: "Christmas" },
  { href: "/gift-guides", label: "Gift Guides" },
  { href: "/reading-nooks", label: "Reading Nooks" },
  { href: "/finds", label: "Finds" }
];

const decorIdeas = [
  {
    title: "Start with a warm neutral base",
    text: "Cream pumpkins, walnut wood, linen runners, and woven baskets make Halloween decor feel intentional instead of loud."
  },
  {
    title: "Layer candlelight and soft shadows",
    text: "Use taper candles, lanterns, amber glass, and small lamps to create a cozy October glow before adding spooky details."
  },
  {
    title: "Choose one moody accent color",
    text: "Matte black, oxblood, smoked amber, or antique brass can make a room feel seasonal without overwhelming the palette."
  },
  {
    title: "Style vignettes instead of decorating everything",
    text: "A mantel, console table, entry bench, or reading corner can carry the whole Halloween mood when the pieces are edited well."
  }
];

const recommendedFinds = [
  "Ceramic pumpkins in cream, black, or muted terracotta",
  "Battery taper candles and antique brass candlesticks",
  "Amber glass votives, lanterns, or hurricane candle holders",
  "Textured throw blankets in oatmeal, rust, charcoal, or sage",
  "Dried branches, eucalyptus, or dark berry stems"
];

const faqs = [
  {
    question: "How can I make Halloween decor look cozy instead of kitschy?",
    answer:
      "Use a restrained palette, natural materials, warm lighting, and a few edited seasonal accents. Ceramic pumpkins, candlelight, dried branches, and textured textiles usually feel more elevated than bright plastic decorations."
  },
  {
    question: "What colors work best for stylish Halloween decor?",
    answer:
      "Cream, walnut, terracotta, matte black, antique brass, smoked amber, sage, and deep cranberry work well for a cozy and stylish Halloween home."
  },
  {
    question: "Where should I start decorating for Halloween?",
    answer:
      "Start with one visible focal point such as a mantel, console table, entryway, dining table, or reading nook. A focused vignette is easier to style and often feels more premium."
  },
  {
    question: "Can Halloween decor transition into fall decor?",
    answer:
      "Yes. Keep the base pieces autumnal, such as pumpkins, throws, candles, branches, baskets, and warm ceramics. After Halloween, remove bats, skulls, or spooky accents and keep the cozy fall layers."
  }
];

export const metadata: Metadata = {
  title: "Halloween Decor Ideas for a Cozy and Stylish Home",
  description:
    "Warm Halloween decor ideas for a cozy, stylish home with candlelight, ceramic pumpkins, moody accents, and placeholder recommended finds.",
  alternates: {
    canonical: pageUrl
  },
  openGraph: {
    title: "Halloween Decor Ideas for a Cozy and Stylish Home",
    description:
      "Editorial Halloween decor inspiration with cozy styling ideas, warm palettes, FAQ answers, and placeholder recommended finds.",
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
            <h1>Halloween Decor Ideas for a Cozy and Stylish Home</h1>
            <p className="lede">
              A warm, editorial guide to Halloween decorating with candlelight,
              natural textures, moody accents, and polished seasonal vignettes.
            </p>
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

        <section className="editorial-section editorial-intro">
          <p className="section-kicker">The cozy formula</p>
          <div className="editorial-two-column">
            <h2>Halloween feels most stylish when the spooky pieces are softened by texture.</h2>
            <p>
              Think of Halloween decor as a seasonal layer, not a full room
              reset. Start with the cozy pieces you already love, then add
              pumpkins, candlelight, branches, dark accents, and a few playful
              details that feel intentional.
            </p>
          </div>
        </section>

        <section className="editorial-section" aria-labelledby="ideas-heading">
          <div className="section-heading">
            <p className="section-kicker">Room-by-room inspiration</p>
            <h2 id="ideas-heading">Cozy Halloween styling ideas</h2>
          </div>
          <div className="idea-grid">
            {decorIdeas.map((idea) => (
              <div key={idea.title} className="idea-card">
                <h3>{idea.title}</h3>
                <p>{idea.text}</p>
              </div>
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
            <p className="section-kicker">Editorial note</p>
            <h2>Let the room stay livable.</h2>
            <p>
              The most saved Halloween rooms often leave space for real life:
              a sofa that still feels calm, a coffee table that can hold mugs
              and books, and decor that works after October 31 with only a few
              pieces removed.
            </p>
          </div>
        </section>

        <section className="editorial-section recommended-section" aria-labelledby="finds-heading">
          <div className="section-heading">
            <p className="section-kicker">Recommended finds</p>
            <h2 id="finds-heading">Placeholder finds to source later</h2>
          </div>
          <p className="recommended-note">
            No affiliate links have been added yet. These are planning
            placeholders for future product research.
          </p>
          <div className="recommended-grid">
            {recommendedFinds.map((find) => (
              <div key={find} className="recommended-card">
                <span>{find}</span>
                <p>Placeholder item</p>
              </div>
            ))}
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
