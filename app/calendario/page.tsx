import Link from "next/link";
import { CalendarDays, CheckCircle2 } from "lucide-react";
import { BottomNav } from "../../components/BottomNav";
import { MobileHeader } from "../../components/MobileHeader";

const days = ["Seg Peito", "Ter Perna", "Qua Costas", "Qui Braço", "Sex Ombro", "Sáb Cardio", "Dom Descanso"];
export default function CalendarioPage() {
  return (
    <main className="app-shell"><section className="mobile-page"><MobileHeader postAction={false} /><div className="content-pad">
      <div className="section-title-row"><div><span className="eyebrow">Agenda de treino</span><h1 className="page-title">Calendário</h1></div><CalendarDays color="var(--orange)" /></div>
      <section className="card finance-card"><h2>Semana sugerida</h2>{days.map((day, index)=><Link href="/treinos" className="history-row clickable-card" key={day}><span>{day}</span>{index < 3 ? <CheckCircle2 color="var(--green)" /> : <span className="muted">Abrir</span>}</Link>)}</section>
    </div><BottomNav /></section></main>
  );
}
