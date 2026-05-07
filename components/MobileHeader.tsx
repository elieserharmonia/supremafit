import Link from "next/link";
import { Bell, Plus, Settings } from "lucide-react";
import { AppLogo } from "./AppLogo";

export function MobileHeader({ right = "bell", postAction = true }: { right?: "bell" | "settings" | "none"; postAction?: boolean }) {
  return (
    <header className="mobile-header">
      {postAction ? (
        <Link className="top-post-button" href="/postar" aria-label="Criar novo post">
          <Plus size={19} />
        </Link>
      ) : <span />}
      <AppLogo />
      {right === "bell" && (
        <Link className="icon-button" href="/notificacoes" aria-label="Notificações">
          <Bell size={19} />
          <span className="badge">12</span>
        </Link>
      )}
      {right === "settings" && (
        <Link className="icon-button" href="/configuracoes" aria-label="Configurações">
          <Settings size={19} />
        </Link>
      )}
      {right === "none" && <span />}
    </header>
  );
}
