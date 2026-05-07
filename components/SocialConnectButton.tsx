"use client";

import { useEffect, useState } from "react";
import { Check, Lock, UserPlus, Users } from "lucide-react";
import type { AccountPrivacy, RelationshipStatus } from "../lib/social";

const STORAGE_KEY = "suprema_social_connections_v1";
function getStoredStatus(userId: string, fallback: RelationshipStatus) {
  if (typeof window === "undefined") return fallback;
  try { return (JSON.parse(localStorage.getItem(STORAGE_KEY) || "{}")[userId] as RelationshipStatus) || fallback; } catch { return fallback; }
}
function saveStoredStatus(userId: string, status: RelationshipStatus) {
  if (typeof window === "undefined") return;
  try { const data = JSON.parse(localStorage.getItem(STORAGE_KEY) || "{}"); data[userId] = status; localStorage.setItem(STORAGE_KEY, JSON.stringify(data)); } catch { localStorage.setItem(STORAGE_KEY, JSON.stringify({ [userId]: status })); }
}
export function SocialConnectButton({ userId, privacy, initialStatus, compact = false, onStatusChange }: { userId: string; privacy: AccountPrivacy; initialStatus: RelationshipStatus; compact?: boolean; onStatusChange?: (status: RelationshipStatus) => void; }) {
  const [status, setStatus] = useState<RelationshipStatus>(initialStatus);
  useEffect(() => setStatus(getStoredStatus(userId, initialStatus)), [userId, initialStatus]);
  function update(next: RelationshipStatus) { setStatus(next); saveStoredStatus(userId, next); onStatusChange?.(next); }
  if (status === "friend") return <button type="button" className={compact ? "tiny-btn done" : "secondary-btn full success-action"} onClick={() => update("none")}><Users size={15} /> {compact ? "Amigo" : "Amigos"}</button>;
  if (status === "following") return <button type="button" className={compact ? "tiny-btn done" : "secondary-btn full success-action"} onClick={() => update("none")}><Check size={15} /> Seguindo</button>;
  if (status === "requested") return <button type="button" className={compact ? "tiny-btn" : "secondary-btn full"} onClick={() => update("none")}><Lock size={15} /> {compact ? "Solicitado" : "Solicitação enviada"}</button>;
  if (status === "pending_approval") return <button type="button" className={compact ? "tiny-btn orange" : "primary-btn full"} onClick={() => update("friend")}><UserPlus size={15} /> {compact ? "Aprovar" : "Aprovar conexão"}</button>;
  return <button type="button" className={compact ? "tiny-btn orange" : "primary-btn full"} onClick={() => update(privacy === "public" ? "following" : "requested")}>{privacy === "public" ? <UserPlus size={15} /> : <Lock size={15} />}{privacy === "public" ? (compact ? "Seguir" : "Seguir aluno") : (compact ? "Solicitar" : "Solicitar conexão")}</button>;
}
