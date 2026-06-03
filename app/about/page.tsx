import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About",
  description: "About Cozy Seasonal Finds."
};

export default function AboutPage() {
  return (
    <section className="page">
      <div className="content">
        <h1>About</h1>
        <p className="lede">
          Cozy Seasonal Finds curates seasonal decor ideas, cozy home
          inspiration, gift guides, reading nook finds, and simple ways to make
          each season feel special.
        </p>
      </div>
    </section>
  );
}

