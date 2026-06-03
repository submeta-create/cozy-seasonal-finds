import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Finds",
  description: "Cozy seasonal finds curated for the home."
};

export default function FindsPage() {
  return (
    <section className="page">
      <div className="content">
        <p className="eyebrow">Affiliate content</p>
        <h1>Finds</h1>
        <p className="lede">
          A simple home for future seasonal product finds. Affiliate links have
          not been added yet.
        </p>
      </div>
    </section>
  );
}

