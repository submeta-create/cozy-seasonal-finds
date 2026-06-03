import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Imprint",
  description: "Imprint for Cozy Seasonal Finds."
};

export default function ImprintPage() {
  return (
    <section className="page">
      <div className="content">
        <h1>Imprint</h1>
        <p>
          This imprint page is a placeholder and should be completed with the
          required publisher information before launch.
        </p>
      </div>
    </section>
  );
}

