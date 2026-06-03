import Image from "next/image";
import Link from "next/link";

const imageCards = [
  {
    title: "Halloween",
    href: "/halloween",
    image: "/images/home/halloween-decor-card.webp",
    alt: "Cozy Halloween console table with ceramic pumpkins and candles",
    description: "Tasteful October atmosphere with candlelight, texture, and a little drama."
  },
  {
    title: "Christmas",
    href: "/christmas",
    image: "/images/home/christmas-mantel-card.webp",
    alt: "Cozy Christmas mantel with garland, stockings, gifts, and candles",
    description: "Quiet holiday layers: garland, stockings, brass details, and winter warmth."
  },
  {
    title: "Reading Nooks",
    href: "/reading-nooks",
    image: "/images/home/reading-nook-card.webp",
    alt: "Cozy reading nook with an upholstered chair, books, throw, and warm lamp",
    description: "Comfortable corners for books, soft light, and unhurried evenings."
  },
  {
    title: "Gift Guides",
    href: "/gift-guides",
    image: "/images/home/gift-guide-card.webp",
    alt: "Thoughtfully wrapped gifts on a linen table with ribbon and dried flowers",
    description: "Considered gifts for hosts, readers, homebodies, and seasonal decorators."
  }
];

const collections = [
  {
    title: "Fall Texture Edit",
    href: "/fall",
    label: "Now gathering",
    description:
      "Wool throws, warm ceramics, amber glass, soft lighting, and earthy seasonal accents."
  },
  {
    title: "Valentines At Home",
    href: "/valentines",
    label: "Soft seasonal",
    description:
      "Romantic details with restraint: muted rose, candlelight, pretty trays, and small gifts."
  },
  {
    title: "Cozy Finds",
    href: "/finds",
    label: "Affiliate content",
    description:
      "A simple place for curated pieces once product research and affiliate links are ready."
  }
];

export default function Home() {
  return (
    <>
      <section className="home-hero">
        <Image
          src="/images/home/seasonal-living-room-hero.webp"
          alt="Warm cozy living room styled with books, candles, textiles, and seasonal decor"
          fill
          priority
          sizes="100vw"
          className="home-hero-image"
        />
        <div className="home-hero-overlay" />
        <div className="home-hero-content">
          <p className="eyebrow">Seasonal living, softly edited</p>
          <h1>Cozy finds for the rituals of home.</h1>
          <p className="lede">
            Warm decor ideas, thoughtful gifts, reading corners, and seasonal
            details gathered with an editorial eye.
          </p>
        </div>
      </section>

      <section className="home-section intro-section" aria-label="Editorial introduction">
        <p className="section-kicker">Inspired by the season</p>
        <div className="intro-grid">
          <h2>Start with a feeling, then find the pieces that bring it home.</h2>
          <p>
            Cozy Seasonal Finds is built around seasonal hubs first: Halloween,
            Fall, Christmas, Valentines, Gift Guides, Reading Nooks, and Finds.
            Each space is designed for browsing ideas before shopping decisions.
          </p>
        </div>
      </section>

      <section className="home-section" aria-labelledby="category-heading">
        <div className="section-heading">
          <p className="section-kicker">Browse the mood</p>
          <h2 id="category-heading">Seasonal inspiration</h2>
        </div>
        <div className="image-card-grid">
          {imageCards.map((card) => (
            <Link key={card.href} href={card.href} className="image-card">
              <Image
                src={card.image}
                alt={card.alt}
                width={720}
                height={720}
                unoptimized
                sizes="(max-width: 760px) 100vw, (max-width: 1120px) 50vw, 25vw"
              />
              <span>{card.title}</span>
              <p>{card.description}</p>
            </Link>
          ))}
        </div>
      </section>

      <section className="home-section collection-section" aria-labelledby="collections-heading">
        <div className="section-heading">
          <p className="section-kicker">Featured collections</p>
          <h2 id="collections-heading">Quietly seasonal, never overdone.</h2>
        </div>
        <div className="collection-grid">
          {collections.map((collection) => (
            <Link key={collection.href} href={collection.href} className="collection-card">
              <p>{collection.label}</p>
              <h3>{collection.title}</h3>
              <span>{collection.description}</span>
            </Link>
          ))}
        </div>
      </section>

      <section className="home-section finds-teaser" aria-labelledby="finds-heading">
        <div>
          <p className="section-kicker">Coming into focus</p>
          <h2 id="finds-heading">Finds will stay curated, calm, and useful.</h2>
        </div>
        <Link href="/finds" className="text-link">
          View finds
        </Link>
      </section>
    </>
  );
}
