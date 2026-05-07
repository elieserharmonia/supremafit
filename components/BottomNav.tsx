"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Dumbbell, Home, ShoppingBag, User, WalletCards } from "lucide-react";

const items = [
  { href: "/", label: "Início", icon: Home },
  { href: "/treinos", label: "Treinos", icon: Dumbbell },
  { href: "/loja", label: "Loja", icon: ShoppingBag },
  { href: "/financeiro", label: "Financeiro", icon: WalletCards },
  { href: "/perfil", label: "Perfil", icon: User }
];

export function BottomNav() {
  const pathname = usePathname();
  return (
    <nav className="bottom-nav" aria-label="Navegação principal">
      {items.map((item) => {
        const Icon = item.icon;
        const active = pathname === item.href || (item.href !== "/" && pathname.startsWith(item.href));
        return (
          <Link key={item.label} className={`nav-item ${active ? "active" : ""}`} href={item.href}>
            <Icon size={19} />
            <span>{item.label}</span>
          </Link>
        );
      })}
    </nav>
  );
}
