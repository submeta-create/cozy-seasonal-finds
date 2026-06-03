import Link from "next/link";
import type { Hub } from "@/app/data/hubs";

type HubGridProps = {
  items: Hub[];
};

export function HubGrid({ items }: HubGridProps) {
  return (
    <div className="hub-grid">
      {items.map((item) => (
        <Link key={item.href} href={item.href} className="hub-card">
          <h2>{item.title}</h2>
          <p>{item.description}</p>
        </Link>
      ))}
    </div>
  );
}

