import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Halloween",
  description: "Cozy Halloween decor, gifts, and spooky seasonal finds."
};

export default function HalloweenPage() {
  return (
    <section className="page">
      <div className="content">
        <p className="eyebrow">Seasonal hub</p>
        <h1>Halloween</h1>
        <p className="lede">
          Spooky-cute decorations, moody accents, October hosting ideas, and
          cozy Halloween finds.
        </p>
      </div>
    </section>
  );
}

