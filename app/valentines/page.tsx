import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Valentines",
  description: "Valentines decor, romantic gift ideas, and sweet cozy finds."
};

export default function ValentinesPage() {
  return (
    <section className="page">
      <div className="content">
        <p className="eyebrow">Seasonal hub</p>
        <h1>Valentines</h1>
        <p className="lede">
          Soft decor, thoughtful gifts, romantic details, and sweet seasonal
          inspiration.
        </p>
      </div>
    </section>
  );
}

