import Link from "next/link";
import { AppLogo } from "./AppLogo";
import { BarChart3, CalendarDays, CreditCard, Dumbbell, Home, MessageCircle, Settings, Trophy, Users, Utensils } from "lucide-react";

const menu = [
  { href: "/dashboard", label: "Início", icon: Home, active: true },
  { href: "/treinos", label: "Treinos", icon: Dumbbell },
  { href: "/dashboard", label: "Calendário", icon: CalendarDays },
  { href: "/dashboard", label: "Nutrição", icon: Utensils },
  { href: "/financeiro", label: "Financeiro", icon: CreditCard },
  { href: "/dashboard", label: "Evolução", icon: BarChart3 },
  { href: "/", label: "Comunidade", icon: Users },
  { href: "/dashboard", label: "Mensagens", icon: MessageCircle },
  { href: "/perfil", label: "Configurações", icon: Settings }
];

export function Sidebar() {
  return (
    <aside className="sidebar">
      <AppLogo />
      <nav className="side-nav">
        {menu.map((item) => {
          const Icon = item.icon;
          return <Link key={item.label} className={`side-link ${item.active ? "active" : ""}`} href={item.href}><Icon size={20} />{item.label}</Link>;
        })}
      </nav>
      <div className="referral">
        <Trophy color="var(--orange)" />
        <h3>Indique um amigo</h3>
        <p className="muted">Ganhe benefícios e ajude alguém a evoluir junto com você.</p>
        <Link className="primary-btn full" href="/">Indicar agora</Link>
      </div>
    </aside>
  );
}
