import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Fall",
  description: "Cozy fall decor, autumn gifts, and warm seasonal finds."
};

export default function FallPage() {
  return (
    <section className="page">
      <div className="content">
        <p className="eyebrow">Seasonal hub</p>
        <h1>Fall</h1>
        <p className="lede">
          Warm textures, autumn color, soft lighting, seasonal tables, and cozy
          everyday finds.
        </p>
      </div>
    </section>
  );
}

