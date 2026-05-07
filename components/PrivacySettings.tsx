"use client";
import { useEffect, useState } from "react";
import { Bell, Lock, ShieldCheck, User } from "lucide-react";
const PRIVACY_KEY = "suprema_account_privacy_v1";
export function PrivacySettings() {
  const [privacy, setPrivacy] = useState<"public" | "private">("public");
  const [notifications, setNotifications] = useState(true);
  useEffect(() => { const stored = localStorage.getItem(PRIVACY_KEY); if (stored === "private" || stored === "public") setPrivacy(stored); }, []);
  function changePrivacy(next: "public" | "private") { setPrivacy(next); localStorage.setItem(PRIVACY_KEY, next); }
  return <section className="card finance-card"><h2>Preferências</h2><button type="button" className="settings-row-button" onClick={() => setNotifications((value) => !value)}><span><Bell size={18} color="var(--orange)" /> Notificações de treino</span><span className="status">{notifications ? "Ativo" : "Pausado"}</span></button><button type="button" className="settings-row-button" onClick={() => changePrivacy("public")}><span><User size={18} color="var(--orange)" /> Perfil público</span><span className={privacy === "public" ? "status" : "muted-status"}>{privacy === "public" ? "Ativo" : "Inativo"}</span></button><button type="button" className="settings-row-button" onClick={() => changePrivacy("private")}><span><Lock size={18} color="var(--orange)" /> Conta privada</span><span className={privacy === "private" ? "status" : "muted-status"}>{privacy === "private" ? "Ativo" : "Inativo"}</span></button><div className="privacy-info-card"><ShieldCheck size={18} color="var(--orange)" /><p>{privacy === "private" ? "Sua conta está privada. Novos alunos precisam solicitar conexão e aguardar sua aprovação." : "Sua conta está pública. Outros alunos podem seguir seu perfil diretamente."}</p></div></section>;
}
