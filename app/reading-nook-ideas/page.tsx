import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { site } from "@/app/data/site";

const pageUrl = `${site.url}/reading-nook-ideas`;

const internalLinks = [
  { href: "/halloween-decor-ideas", label: "Halloween Decor Ideas" },
  { href: "/gift-guides", label: "Gift Guides" },
  { href: "/finds", label: "Finds" },
  { href: "/fall", label: "Fall Decor" },
  { href: "/christmas", label: "Christmas Decor" }
];

const editorFavorites = [
  {
    category: "SMALL SPACES",
    title: "7 Reading Nook Ideas for Small Spaces",
    href: "#small-reading-nook-ideas"
  },
  {
    category: "LIGHTING",
    title: "10 Cozy Reading Lamps Worth Saving",
    href: "#reading-nook-lighting"
  },
  {
    category: "BUDGET PICK",
    title: "Reading Chair Ideas Under $200",
    href: "#reading-nook-finds"
  },
  {
    category: "BOOKISH DECOR",
    title: "Bookshelf Styling for Cozy Corners",
    href: "#bookshelf-side-table-styling"
  }
];

const nookSections = [
  {
    id: "small-reading-nook-ideas",
    title: "Small Reading Nook Ideas",
    text: "Use an empty bedroom corner, hallway landing, window area, or living room wall. A compact chair, slim lamp, small table, and soft throw can turn even a tiny space into a cozy reading spot."
  },
  {
    id: "reading-nook-lighting",
    title: "Reading Nook Lighting",
    text: "Layer a warm floor lamp, table lamp, or plug-in wall sconce with natural window light. Choose soft white bulbs so the corner feels cozy on weeknights and easy to photograph for Pinterest."
  },
  {
    id: "cozy-chair-throw-ideas",
    title: "Cozy Chair and Throw Ideas",
    text: "Look for an upholstered accent chair, small swivel chair, chaise, or cushioned bench. Add a knit throw, lumbar pillow, and washable blanket for a cozy, lived-in look."
  },
  {
    id: "bookshelf-side-table-styling",
    title: "Bookshelf and Side Table Styling",
    text: "Style shelves with books, baskets, framed art, candles, and one or two seasonal accents. A side table should hold a mug, current book, lamp, and small catchall tray."
  }
];

const recommendedFinds = [
  "Upholstered accent chair or small swivel chair",
  "Warm floor lamp, table lamp, or plug-in sconce",
  "Chunky knit throw blanket and lumbar pillow",
  "Slim side table for books, mugs, and candles",
  "Small bookshelf, wall shelves, or woven book basket"
];

const faqs = [
  {
    question: "How do you make a small reading nook cozy?",
    answer:
      "Start with one comfortable seat, a warm light source, a small surface for a book or mug, and soft textiles like a throw blanket and pillow. Keep the palette calm and add a basket or shelf for books."
  },
  {
    question: "What should every reading nook have?",
    answer:
      "A useful reading nook usually needs comfortable seating, good lighting, a side table or shelf, a blanket, a pillow, and easy access to books. Seasonal decor can be added in small amounts."
  },
  {
    question: "What kind of lighting is best for a reading nook?",
    answer:
      "A floor lamp, table lamp, or wall sconce with a warm white bulb works best. The light should be close enough for reading but soft enough to keep the corner cozy."
  },
  {
    question: "Can I create a reading nook without a lot of space?",
    answer:
      "Yes. A bedroom corner, window seat, hallway landing, closet nook, or unused living room wall can work. Choose narrow furniture, vertical shelving, and one strong light source."
  }
];

export const metadata: Metadata = {
  title: "Reading Nook Ideas for Cozy Corners, Small Spaces, and Book Lovers",
  description:
    "Pinterest-friendly reading nook ideas for cozy corners, small spaces, book lovers, lighting, chairs, shelves, side tables, and placeholder finds to source later.",
  alternates: {
    canonical: pageUrl
  },
  openGraph: {
    title: "Reading Nook Ideas for Cozy Corners, Small Spaces, and Book Lovers",
    description:
      "Cozy reading nook inspiration for US homes with lighting ideas, chair and throw styling, bookshelf tips, and placeholder recommended finds.",
    url: pageUrl,
    siteName: site.name,
    images: [
      {
        url: "/images/home/reading-nook-card.webp",
        width: 720,
        height: 720,
        alt: "Cozy reading nook with chair, books, throw blanket, lamp, and side table"
      }
    ],
    type: "article"
  }
};

export default function ReadingNookIdeasPage() {
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
            <p className="eyebrow">Reading nook ideas</p>
            <h1>Reading Nook Ideas for Cozy Corners, Small Spaces, and Book Lovers</h1>
            <p className="lede">
              Create a cozy reading corner with warm lighting, comfortable
              seating, soft throws, styled shelves, and bookish home finds to
              source later.
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
              src="/images/home/reading-nook-card.webp"
              alt="Cozy reading nook with upholstered chair, books, throw blanket, warm lamp, and side table"
              width={720}
              height={720}
              priority
              unoptimized
            />
          </div>
        </section>

        <section className="reading-favorites" aria-labelledby="reading-favorites-heading">
          <div className="reading-favorites-header">
            <p className="section-kicker">EDITOR&apos;S FAVORITES</p>
            <h2 id="reading-favorites-heading">Fresh Reading Nook Ideas Worth Saving</h2>
          </div>
          <div className="reading-favorites-grid">
            {editorFavorites.map((favorite) => (
              <Link key={favorite.title} href={favorite.href} className="reading-favorite-card">
                <p>{favorite.category}</p>
                <h3>{favorite.title}</h3>
              </Link>
            ))}
          </div>
        </section>

        <section className="editorial-section editorial-intro">
          <p className="section-kicker">Cozy corner formula</p>
          <div className="editorial-two-column">
            <h2>A good reading nook starts with comfort, light, and one clear place to land.</h2>
            <p>
              Think of a reading nook as a small lifestyle zone: a chair you
              actually want to sit in, a lamp that makes reading easy, a surface
              for coffee or tea, and a few cozy details that feel personal.
            </p>
          </div>
        </section>

        <section className="editorial-section" aria-labelledby="nook-ideas-heading">
          <div className="section-heading">
            <p className="section-kicker">Pinterest-friendly ideas</p>
            <h2 id="nook-ideas-heading">Reading nook inspiration for small spaces and cozy homes</h2>
          </div>
          <div className="idea-grid">
            {nookSections.map((section) => (
              <div key={section.title} id={section.id} className="idea-card">
                <h3>{section.title}</h3>
                <p>{section.text}</p>
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
            <p className="section-kicker">Style note</p>
            <h2>Make it feel shoppable, but not crowded.</h2>
            <p>
              For an affiliate-ready reading nook hub, keep the styling easy to
              understand: one chair, one lamp, one throw, one table, and one
              simple shelf or basket moment. Each piece should feel useful and
              easy to source later.
            </p>
          </div>
        </section>

        <section
          id="reading-nook-finds"
          className="editorial-section recommended-section"
          aria-labelledby="finds-heading"
        >
          <div className="section-heading">
            <p className="section-kicker">Reading Nook Finds to Source Later</p>
            <h2 id="finds-heading">Placeholder finds for future shopping guides</h2>
          </div>
          <p className="recommended-note">
            No affiliate links have been added yet. These are placeholder
            product categories for future reading nook finds.
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
            <h2 id="faq-heading">Reading nook questions</h2>
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
            <h2 id="related-heading">More cozy seasonal guides</h2>
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
