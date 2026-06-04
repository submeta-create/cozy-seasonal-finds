import Link from "next/link";

const navItems = [
  { href: "/halloween-decor-ideas", label: "Halloween" },
  { href: "/fall", label: "Fall" },
  { href: "/christmas", label: "Christmas" },
  { href: "/valentines", label: "Valentines" },
  { href: "/gift-guides", label: "Gift Guides" },
  { href: "/reading-nook-ideas", label: "Reading Nooks" },
  { href: "/finds", label: "Finds" }
];

export function Header() {
  return (
    <header className="site-header">
      <Link href="/" className="brand">
        Cozy Seasonal Finds
      </Link>
      <nav aria-label="Main navigation" className="site-nav">
        {navItems.map((item) => (
          <Link key={item.href} href={item.href}>
            {item.label}
          </Link>
        ))}
      </nav>
    </header>
  );
}
