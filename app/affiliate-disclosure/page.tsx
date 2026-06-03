import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Affiliate Disclosure",
  description: "Affiliate disclosure for Cozy Seasonal Finds."
};

export default function AffiliateDisclosurePage() {
  return (
    <section className="page">
      <div className="content">
        <h1>Affiliate Disclosure</h1>
        <p>
          Cozy Seasonal Finds may earn a commission from qualifying purchases
          through affiliate links. Affiliate links have not been added yet.
        </p>
      </div>
    </section>
  );
}

