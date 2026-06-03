import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Christmas",
  description: "Cozy Christmas decor, holiday gift ideas, and festive finds."
};

export default function ChristmasPage() {
  return (
    <section className="page">
      <div className="content">
        <p className="eyebrow">Seasonal hub</p>
        <h1>Christmas</h1>
        <p className="lede">
          Festive decor, meaningful gifts, winter hosting touches, ornaments,
          stockings, and cozy holiday details.
        </p>
      </div>
    </section>
  );
}

