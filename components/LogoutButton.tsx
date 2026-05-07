"use client";

import { LogOut } from "lucide-react";
import { useAuth } from "./AuthProvider";

export function LogoutButton({ compact = false }: { compact?: boolean }) {
  const { logout } = useAuth();
  return (
    <button className={compact ? "tiny-icon-btn" : "secondary-btn full"} onClick={logout} type="button" aria-label="Sair da conta">
      <LogOut size={compact ? 15 : 18} />
      {!compact && "Sair da conta"}
    </button>
  );
}
