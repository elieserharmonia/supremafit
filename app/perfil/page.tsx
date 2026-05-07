import { Award, Dumbbell, Flame, Gauge, Zap } from "lucide-react";
import { BottomNav } from "../../components/BottomNav";
import { FeedCard } from "../../components/FeedCard";
import { MobileHeader } from "../../components/MobileHeader";

export default function PerfilPage() {
  return (
    <main className="app-shell">
      <section className="mobile-page">
        <MobileHeader right="settings" />
        <div className="content-pad">
          <section className="profile-hero">
            <div className="profile-row">
              <div className="avatar profile-avatar">JP</div>
              <div style={{ flex: 1 }}>
                <h1 style={{ margin: 0 }}>João Pedro</h1>
                <p style={{ margin: "6px 0", lineHeight: 1.35 }}>Foco, disciplina e evolução todos os dias.</p>
                <span className="badge-soft"><Award size={14} /> Nível Bronze</span>
                <div className="xp-bar"><span style={{ width: "62%" }} /></div>
                <small className="muted">620 / 1.000 XP</small>
              </div>
            </div>
          </section>

          <div className="metric-grid">
            <div className="metric-mini"><Flame color="var(--orange)" size={18} /><small>Sequência</small><b>12 dias</b></div>
            <div className="metric-mini"><Dumbbell color="var(--orange)" size={18} /><small>Semana</small><b>5 treinos</b></div>
            <div className="metric-mini"><Gauge color="var(--orange)" size={18} /><small>Volume</small><b>18.240 kg</b></div>
          </div>

          <section className="card finance-card">
            <h2 style={{ marginTop: 0 }}>Conquistas</h2>
            <div className="pill-row">
              {['Constância 7 dias','Primeiro treino','Peito completo','Volume 10k','Cardio 20min'].map((badge) => <span key={badge} className="pill active"><Zap size={14} /> {badge}</span>)}
            </div>
          </section>

          <div className="section-title-row"><h2>Posts recentes</h2></div>
          <FeedCard post={{ id: 'p1', author: 'João Pedro', initials: 'JP', time: 'hoje', category: 'Treino de Peito', caption: 'Mais um treino concluído na SUPREMA FIT. Evolução guiada.', likes: 64, comments: 9 }} />
        </div>
        <BottomNav />
      </section>
    </main>
  );
}
