import Link from "next/link";

export function Footer() {
  return (
    <footer className="site-footer">
      <p>Cozy Seasonal Finds</p>
      <nav aria-label="Legal navigation">
        <Link href="/about">About</Link>
        <Link href="/privacy">Privacy</Link>
        <Link href="/affiliate-disclosure">Affiliate Disclosure</Link>
        <Link href="/imprint">Imprint</Link>
      </nav>
    </footer>
  );
}

