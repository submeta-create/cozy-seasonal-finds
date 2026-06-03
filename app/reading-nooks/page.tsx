import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Reading Nooks",
  description: "Reading nook ideas, bookish decor, lighting, and cozy finds."
};

export default function ReadingNooksPage() {
  return (
    <section className="page">
      <div className="content">
        <p className="eyebrow">Evergreen hub</p>
        <h1>Reading Nooks</h1>
        <p className="lede">
          Comfortable corners, layered lighting, bookish decor, cozy seating,
          shelves, and quiet little rituals.
        </p>
      </div>
    </section>
  );
}

