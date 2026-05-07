"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import { Check, Lock, MessageCircle, Search, Send, ShieldCheck, Users, X } from "lucide-react";
import { socialUsers, type RelationshipStatus, type SocialUser } from "../lib/social";
import { SocialConnectButton } from "./SocialConnectButton";

export function MessagesCenter() {
  const [tab, setTab] = useState<"friends" | "pending" | "discover">("friends");
  const [query, setQuery] = useState("");
  const [statusMap, setStatusMap] = useState<Record<string, RelationshipStatus>>(() => Object.fromEntries(socialUsers.map((user) => [user.id, user.status])) as Record<string, RelationshipStatus>);
  const [activeThread, setActiveThread] = useState<SocialUser | null>(socialUsers.find((user) => user.status === "friend") || null);

  function updateStatus(userId: string, status: RelationshipStatus) { setStatusMap((current) => ({ ...current, [userId]: status })); }
  const usersWithStatus = useMemo(() => socialUsers.map((user) => ({ ...user, status: statusMap[user.id] || user.status })), [statusMap]);
  const friends = usersWithStatus.filter((user) => user.status === "friend" || user.status === "following");
  const pending = usersWithStatus.filter((user) => user.status === "pending_approval" || user.status === "requested");
  const discover = usersWithStatus.filter((user) => user.status === "none" || user.status === "requested");
  const list = (tab === "friends" ? friends : tab === "pending" ? pending : discover).filter((user) => `${user.name} ${user.handle} ${user.goal}`.toLowerCase().includes(query.toLowerCase()));

  return (
    <>
      <section className="card social-connection-hero">
        <div><span className="eyebrow">Rede Suprema</span><h2>Conecte-se como no Instagram</h2><p>Amigos aparecem na caixa principal. Quem ainda não foi aprovado fica separado em aguardando aprovação.</p></div>
        <div className="privacy-note"><ShieldCheck size={16} /> contas públicas e privadas</div>
      </section>
      <section className="message-tabs" aria-label="Abas de mensagens">
        <button type="button" className={tab === "friends" ? "active" : ""} onClick={() => setTab("friends")}><MessageCircle size={16} /> Amigos</button>
        <button type="button" className={tab === "pending" ? "active" : ""} onClick={() => setTab("pending")}><Lock size={16} /> Aguardando aprovação</button>
        <button type="button" className={tab === "discover" ? "active" : ""} onClick={() => setTab("discover")}><Users size={16} /> Conectar</button>
      </section>
      <label className="search-box" aria-label="Buscar alunos"><Search size={17} /><input value={query} onChange={(event) => setQuery(event.target.value)} placeholder="Buscar aluno, @usuário ou objetivo" /></label>
      <section className="message-layout">
        <div className="message-list-card card">
          {list.length === 0 && <p className="empty-state">Nenhum aluno encontrado nessa aba.</p>}
          {list.map((user) => (
            <article key={user.id} className={`message-row ${activeThread?.id === user.id ? "active" : ""}`}>
              <Link href={`/alunos/${user.slug}`} className="photo-avatar" aria-label={`Abrir perfil de ${user.name}`}>{user.initials}</Link>
              <button type="button" className="message-row-main" onClick={() => setActiveThread(user)}>
                <span className="message-name-line"><strong>{user.name}</strong><small>{user.lastMessageTime}</small></span>
                <span className="message-handle-line">{user.handle} · {user.privacy === "private" ? "Conta privada" : "Conta pública"}</span>
                <span className="message-preview">{user.lastMessage}</span>
              </button>
              <div className="message-row-actions">
                {tab === "pending" && user.status === "pending_approval" ? <><button type="button" className="tiny-btn orange" onClick={() => updateStatus(user.id, "friend")}><Check size={14} /> Aprovar</button><button type="button" className="tiny-btn" onClick={() => updateStatus(user.id, "none")}><X size={14} /> Recusar</button></> : <SocialConnectButton userId={user.id} privacy={user.privacy} initialStatus={user.status} compact onStatusChange={(status) => updateStatus(user.id, status)} />}
              </div>
            </article>
          ))}
        </div>
        <div className="card chat-preview-card">
          {activeThread ? <><div className="chat-head"><Link href={`/alunos/${activeThread.slug}`} className="photo-avatar big">{activeThread.initials}</Link><div><h3>{activeThread.name}</h3><p>{activeThread.handle} · {activeThread.privacy === "private" ? "Conta privada" : "Conta pública"}</p></div></div><div className="chat-bubble incoming">{activeThread.lastMessage}</div><div className="chat-bubble outgoing">Vamos treinar juntos na SUPREMA FIT hoje?</div><div className="input-row"><input placeholder="Escrever mensagem..." /><button type="button" className="primary-btn"><Send size={17} /></button></div></> : <p className="empty-state">Selecione uma conversa para visualizar.</p>}
        </div>
      </section>
      <section className="card finance-card"><h2 style={{ marginTop: 0 }}>Regra de conexão</h2><div className="history-row"><span><Users size={18} color="var(--orange)" /> Conta pública</span><span className="status">Seguir direto</span></div><div className="history-row"><span><Lock size={18} color="var(--orange)" /> Conta privada</span><span className="status pending-status">Precisa aprovar</span></div></section>
    </>
  );
}
