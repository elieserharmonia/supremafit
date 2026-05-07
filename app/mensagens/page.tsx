import { MessageCircle, Send } from "lucide-react";
import { BottomNav } from "../../components/BottomNav";
import { MobileHeader } from "../../components/MobileHeader";

const messages = ["Coach Leo: hoje foque na execução do supino.", "SUPREMA FIT: parabéns pela sequência de treinos!", "Grupo 6h: amanhã tem cardio coletivo."];
export default function MensagensPage() {
  return <main className="app-shell"><section className="mobile-page"><MobileHeader postAction={false} /><div className="content-pad">
    <div className="section-title-row"><div><span className="eyebrow">Comunicação</span><h1 className="page-title">Mensagens</h1></div><MessageCircle color="var(--orange)" /></div>
    <section className="card finance-card">{messages.map(m=><div className="history-row" key={m}><span>{m}</span><Send size={16} color="var(--orange)" /></div>)}</section>
  </div><BottomNav /></section></main>;
}
