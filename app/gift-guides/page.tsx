import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Gift Guides",
  description: "Curated cozy gift guides for seasonal shoppers."
};

export default function GiftGuidesPage() {
  return (
    <section className="page">
      <div className="content">
        <p className="eyebrow">Evergreen hub</p>
        <h1>Gift Guides</h1>
        <p className="lede">
          Curated gifts for cozy homes, readers, hosts, seasonal decorators, and
          people who appreciate thoughtful details.
        </p>
      </div>
    </section>
  );
}

