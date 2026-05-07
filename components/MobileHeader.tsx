import { Bell, Settings } from "lucide-react";
import { AppLogo } from "./AppLogo";

export function MobileHeader({ right = "bell" }: { right?: "bell" | "settings" | "none" }) {
  return (
    <header className="mobile-header">
      <span />
      <AppLogo />
      {right === "bell" && (
        <button className="icon-button" aria-label="Notificações">
          <Bell size={19} />
          <span className="badge">12</span>
        </button>
      )}
      {right === "settings" && (
        <button className="icon-button" aria-label="Configurações">
          <Settings size={19} />
        </button>
      )}
      {right === "none" && <span />}
    </header>
  );
}
