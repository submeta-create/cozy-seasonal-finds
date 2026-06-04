import Image from "next/image";
import Link from "next/link";

const stories = [
  {
    title: "Halloween decor ideas that feel cozy, not cluttered",
    href: "/halloween-decor-ideas",
    image: "/images/home/halloween-decor-card.webp",
    alt: "Warm Halloween console table with ceramic pumpkins, candles, and autumn branches",
    kicker: "Halloween decor",
    text: "Warm pumpkins, candlelight, moody accents, and styling ideas for a polished October home."
  },
  {
    title: "Christmas gift ideas and festive home details",
    href: "/gift-guides",
    image: "/images/home/christmas-mantel-card.webp",
    alt: "Cozy Christmas mantel with garland, stockings, candles, and wrapped gifts",
    kicker: "Holiday gifts",
    text: "Giftable home pieces, stocking ideas, candles, cozy textiles, and thoughtful seasonal finds."
  }
];

const heroLinks = [
  {
    title: "Halloween Decor Ideas",
    href: "/halloween-decor-ideas",
    text: "Cozy pumpkins, candles, mantel styling, and entryway inspiration."
  },
  {
    title: "Cozy Fall Decor",
    href: "/fall",
    text: "Warm textures, autumn colors, and easy seasonal room updates."
  },
  {
    title: "Christmas Gift Ideas",
    href: "/gift-guides",
    text: "Thoughtful gifts for hosts, readers, decorators, and homebodies."
  },
  {
    title: "Reading Nook Finds",
    href: "/reading-nook-ideas",
    text: "Chairs, lamps, throws, shelves, and bookish cozy corners."
  }
];

const editorFavorites = [
  {
    label: "Editor's pick",
    title: "7 Cozy Halloween Mantel Ideas",
    href: "/halloween-decor-ideas",
    image: "/images/home/halloween-decor-card.webp",
    alt: "Cozy Halloween decor with pumpkins, branches, and candlelight"
  },
  {
    label: "Worth saving",
    title: "12 Reading Nook Lamps Worth Saving",
    href: "/reading-nook-ideas",
    image: "/images/home/reading-nook-card.webp",
    alt: "Reading nook with warm lamp, books, chair, and throw blanket"
  },
  {
    label: "Budget edit",
    title: "Fall Decor Under $50",
    href: "/fall",
    image: "/images/home/seasonal-living-room-hero.webp",
    alt: "Warm seasonal living room with cozy textiles, candles, and fall colors"
  },
  {
    label: "Holiday styling",
    title: "Cozy Christmas Mantel Styling",
    href: "/christmas",
    image: "/images/home/christmas-mantel-card.webp",
    alt: "Cozy Christmas mantel with stockings, garland, candles, and gifts"
  }
];

const startHereLinks = [
  {
    title: "Seasonal decor ideas",
    href: "/halloween-decor-ideas",
    text: "Browse Halloween, fall, Christmas, and Valentines inspiration."
  },
  {
    title: "Gift guides",
    href: "/gift-guides",
    text: "Save thoughtful ideas for holidays, hosts, readers, and cozy homes."
  },
  {
    title: "Reading nook ideas",
    href: "/reading-nook-ideas",
    text: "Build a soft, practical corner for books and slow evenings."
  },
  {
    title: "Cozy home finds",
    href: "/finds",
    text: "Placeholder product ideas to research before affiliate links are added."
  }
];

const moodFinds = [
  {
    title: "Warm Halloween accents",
    href: "/halloween-decor-ideas",
    image: "/images/home/halloween-decor-card.webp",
    alt: "Ceramic pumpkins, candles, and warm Halloween decor on a console table",
    text: "Pumpkins, lanterns, taper candles, and moody styling details."
  },
  {
    title: "Christmas mantel pieces",
    href: "/christmas",
    image: "/images/home/christmas-mantel-card.webp",
    alt: "Christmas mantel with stockings, garland, candles, and cozy gifts",
    text: "Garland, stockings, brass bells, candlelight, and soft seasonal layers."
  },
  {
    title: "Giftable cozy details",
    href: "/gift-guides",
    image: "/images/home/gift-guide-card.webp",
    alt: "Wrapped gifts with ribbons, candles, and warm seasonal styling",
    text: "Candles, throws, pretty trays, wrapping ideas, and small home gifts."
  },
  {
    title: "Reading nook staples",
    href: "/reading-nook-ideas",
    image: "/images/home/reading-nook-card.webp",
    alt: "Reading nook with chair, books, throw blanket, lamp, and side table",
    text: "Lamps, chairs, throws, shelves, mugs, and bookish decor."
  }
];

const seasonalRooms = [
  {
    title: "Fall rooms",
    href: "/fall",
    text: "Rust, walnut, linen, and low golden light."
  },
  {
    title: "Christmas corners",
    href: "/christmas",
    text: "Evergreen, cream stockings, candles, and wrapped gifts."
  },
  {
    title: "Valentines at home",
    href: "/valentines",
    text: "Muted rose, pretty trays, soft textiles, and small romantic details."
  }
];

const giftIdeas = [
  "For the host who lights candles before guests arrive",
  "For the reader who wants one perfect chair",
  "For the decorator who starts planning a season early"
];

export default function Home() {
  return (
    <>
      <section className="magazine-hero">
        <Image
          src="/images/home/seasonal-living-room-hero.webp"
          alt="Warm seasonal living room with candles, books, pillows, cozy textiles, and subtle holiday styling"
          fill
          priority
          sizes="100vw"
          className="magazine-hero-image"
        />
        <div className="magazine-hero-shade" />
        <div className="magazine-hero-copy">
          <p className="eyebrow">Seasonal decor, gift guides, and cozy home finds</p>
          <h1>Cozy Decor Ideas &amp; Seasonal Finds for Every Season</h1>
          <p className="lede">
            Browse Halloween decor ideas, cozy fall styling, Christmas gift
            guides, reading nook inspiration, and curated cozy home finds.
          </p>
          <Link href="/halloween-decor-ideas" className="mobile-hero-cta">
            Explore ideas
          </Link>
          <div className="hero-link-grid" aria-label="Popular cozy seasonal guides">
            {heroLinks.map((link) => (
              <Link key={link.href} href={link.href} className="hero-link-card">
                <span>{link.title}</span>
                <p>{link.text}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="mobile-hero-links" aria-label="Popular cozy seasonal guides">
        {heroLinks.map((link) => (
          <Link key={link.href} href={link.href} className="hero-link-card">
            <span>{link.title}</span>
            <p>{link.text}</p>
          </Link>
        ))}
      </section>

      <section className="favorites-strip" aria-labelledby="favorites-heading">
        <div className="favorites-header">
          <p className="section-kicker">Editor&apos;s Favorites</p>
          <h2 id="favorites-heading">Fresh ideas to save before you decorate or shop.</h2>
        </div>
        <div className="favorites-track">
          {editorFavorites.map((favorite) => (
            <Link key={favorite.title} href={favorite.href} className="favorite-card">
              <Image
                src={favorite.image}
                alt={favorite.alt}
                width={720}
                height={720}
                loading="eager"
                unoptimized
                sizes="(max-width: 760px) 72vw, 25vw"
              />
              <div>
                <p>{favorite.label}</p>
                <h3>{favorite.title}</h3>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <section className="magazine-section start-section" aria-labelledby="start-heading">
        <div className="magazine-heading">
          <p className="section-kicker">Start Here</p>
          <h2 id="start-heading">Find decor ideas, gift inspiration, and cozy home finds by mood.</h2>
        </div>
        <div className="start-grid">
          {startHereLinks.map((link) => (
            <Link key={link.href} href={link.href} className="start-card">
              <h3>{link.title}</h3>
              <p>{link.text}</p>
            </Link>
          ))}
        </div>
      </section>

      <section className="magazine-section story-section" aria-labelledby="stories-heading">
        <div className="magazine-heading">
          <p className="section-kicker">Featured Seasonal Stories</p>
          <h2 id="stories-heading">Seasonal decorating ideas to save before you shop.</h2>
        </div>
        <div className="story-layout">
          {stories.map((story, index) => (
            <Link
              key={story.href}
              href={story.href}
              className={index === 0 ? "story-tile story-tile-large" : "story-tile"}
            >
              <Image
                src={story.image}
                alt={story.alt}
                width={900}
                height={900}
                loading="eager"
                unoptimized
                sizes={index === 0 ? "(max-width: 900px) 100vw, 58vw" : "(max-width: 900px) 100vw, 32vw"}
              />
              <div>
                <p>{story.kicker}</p>
                <h3>{story.title}</h3>
                <span>{story.text}</span>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <section className="magazine-band mood-section" aria-labelledby="mood-heading">
        <div className="mood-copy">
          <p className="section-kicker">Shop the Mood</p>
          <h2 id="mood-heading">Image-led find ideas for future shopping guides.</h2>
          <p>
            No affiliate links yet. These are placeholder shopping directions
            for cozy decor, seasonal accents, gifts, and reading nook finds.
          </p>
          <Link href="/finds" className="text-link">
            View finds
          </Link>
        </div>
        <div className="mood-board" aria-label="Placeholder mood finds and shopping guide ideas">
          {moodFinds.map((find) => (
            <Link key={find.href} href={find.href} className="mood-card">
              <Image
                src={find.image}
                alt={find.alt}
                width={720}
                height={720}
                loading="eager"
                unoptimized
                sizes="(max-width: 900px) 50vw, 240px"
              />
              <span>{find.title}</span>
              <p>{find.text}</p>
            </Link>
          ))}
        </div>
      </section>

      <section className="magazine-section rooms-section" aria-labelledby="rooms-heading">
        <div className="magazine-heading magazine-heading-split">
          <div>
            <p className="section-kicker">Cozy Rooms by Season</p>
            <h2 id="rooms-heading">Room ideas for fall, Christmas, Valentines, and cozy everyday living.</h2>
          </div>
          <Image
            src="/images/home/reading-nook-card.webp"
            alt="Cozy reading corner with upholstered chair, throw, books, warm lamp, and soft neutrals"
            width={720}
            height={720}
            loading="eager"
            unoptimized
            sizes="(max-width: 900px) 100vw, 360px"
          />
        </div>
        <div className="room-row">
          {seasonalRooms.map((room) => (
            <Link key={room.href} href={room.href} className="room-link">
              <h3>{room.title}</h3>
              <p>{room.text}</p>
            </Link>
          ))}
        </div>
      </section>

      <section className="magazine-section gift-section" aria-labelledby="gifts-heading">
        <Image
          src="/images/home/gift-guide-card.webp"
          alt="Thoughtfully wrapped gifts on a linen table with ribbon, candles, and soft seasonal styling"
          width={900}
          height={900}
          loading="eager"
          unoptimized
          sizes="(max-width: 900px) 100vw, 46vw"
        />
        <div className="gift-copy">
          <p className="section-kicker">Gift Ideas Worth Saving</p>
          <h2 id="gifts-heading">Gift guides for hosts, readers, decorators, and cozy home lovers.</h2>
          <div className="gift-list">
            {giftIdeas.map((idea) => (
              <p key={idea}>{idea}</p>
            ))}
          </div>
          <Link href="/gift-guides" className="text-link">
            Browse gift guides
          </Link>
        </div>
      </section>

      <section className="magazine-section nook-section" aria-labelledby="nook-heading">
        <div className="nook-copy">
          <p className="section-kicker">Reading Nook Inspiration</p>
          <h2 id="nook-heading">Reading nook ideas for chairs, lamps, shelves, throws, and bookish decor.</h2>
          <p>
            The reading nook is the quiet heart of Cozy Seasonal Finds:
            layered light, tactile throws, warm shelves, and small rituals
            that make every season feel more personal.
          </p>
          <Link href="/reading-nook-ideas" className="text-link">
            Explore reading nooks
          </Link>
        </div>
        <div className="nook-image-stack">
          <Image
            src="/images/home/reading-nook-card.webp"
            alt="Soft neutral reading nook with chair, throw, books, and warm lamp"
            width={720}
            height={720}
            loading="eager"
            unoptimized
            sizes="(max-width: 900px) 100vw, 440px"
          />
          <Image
            src="/images/home/christmas-mantel-card.webp"
            alt="Cozy mantel with winter garland, stockings, candles, and warm holiday styling"
            width={720}
            height={720}
            loading="eager"
            unoptimized
            sizes="(max-width: 900px) 70vw, 260px"
          />
        </div>
      </section>
    </>
  );
}
