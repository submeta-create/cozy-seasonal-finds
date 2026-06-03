import { HubGrid } from "@/app/components/HubGrid";
import { hubs } from "@/app/data/hubs";

export default function Home() {
  return (
    <section className="page">
      <div className="hero">
        <p className="eyebrow">Seasonal decor and cozy finds</p>
        <h1>Make every season feel a little warmer.</h1>
        <p className="lede">
          Curated ideas for seasonal decorating, thoughtful gifts, reading
          corners, and small comforts that make home feel special.
        </p>
      </div>
      <HubGrid items={hubs} />
    </section>
  );
}

