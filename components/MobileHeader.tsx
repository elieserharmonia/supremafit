import Link from "next/link";
import { Bell, MessageCircle, Plus, Settings } from "lucide-react";
import { AppLogo } from "./AppLogo";

export function MobileHeader({ right = "bell", postAction = true }: { right?: "bell" | "settings" | "none"; postAction?: boolean }) {
  return (
    <header className="mobile-header">
      {postAction ? (
        <Link className="top-post-button" href="/postar" aria-label="Criar novo post" title="Postar">
          <Plus size={19} />
        </Link>
      ) : <span />}
      <AppLogo />
      <div className="header-actions" aria-label="Acoes rapidas">
        {right !== "none" && (
          <Link className="header-action-button" href="/mensagens" aria-label="Abrir mensagens" title="Mensagens">
            <MessageCircle size={17} />
            <span>Msg</span>
            <strong className="header-count">3</strong>
          </Link>
        )}
        {right === "bell" && (
          <Link className="header-action-button alert-action" href="/notificacoes" aria-label="Abrir notificacoes" title="Notificacoes">
            <Bell size={17} />
            <span>Avisos</span>
            <strong className="header-count">12</strong>
          </Link>
        )}
        {right === "settings" && (
          <Link className="header-action-button" href="/configuracoes" aria-label="Abrir configuracoes" title="Configuracoes">
            <Settings size={17} />
            <span>Ajustes</span>
          </Link>
        )}
      </div>
    </header>
  );
}
