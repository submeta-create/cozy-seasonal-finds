"use client";

import { useState } from "react";
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
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="site-header">
      <Link href="/" className="brand">
        Cozy Seasonal Finds
      </Link>
      <button
        type="button"
        className="menu-toggle"
        aria-controls="main-navigation"
        aria-expanded={isMenuOpen}
        onClick={() => setIsMenuOpen((open) => !open)}
      >
        <span aria-hidden="true" />
        Menu
      </button>
      <nav
        id="main-navigation"
        aria-label="Main navigation"
        className={isMenuOpen ? "site-nav site-nav-open" : "site-nav"}
      >
        {navItems.map((item) => (
          <Link key={item.href} href={item.href} onClick={() => setIsMenuOpen(false)}>
            {item.label}
          </Link>
        ))}
      </nav>
    </header>
  );
}
