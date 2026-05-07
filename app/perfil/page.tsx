import { Award, Dumbbell, Flame, Gauge, Instagram, Link as LinkIcon, PenLine, Zap } from "lucide-react";
import { BottomNav } from "../../components/BottomNav";
import { FeedCard } from "../../components/FeedCard";
import { MobileHeader } from "../../components/MobileHeader";

export default function PerfilPage() {
  return (
    <main className="app-shell">
      <section className="mobile-page">
        <MobileHeader right="settings" />
        <div className="content-pad">
          <section className="profile-hero instagram-profile">
            <div className="profile-row">
              <div className="avatar profile-avatar">JP</div>
              <div style={{ flex: 1 }}>
                <div className="profile-name-row">
                  <h1 style={{ margin: 0 }}>João Pedro</h1>
                  <button className="tiny-icon-btn"><PenLine size={15} /></button>
                </div>
                <p className="profile-username">@joaopedro.fit</p>
                <span className="badge-soft"><Award size={14} /> Nível Bronze</span>
                <div className="xp-bar"><span style={{ width: "62%" }} /></div>
                <small className="muted">620 / 1.000 XP</small>
              </div>
            </div>

            <div className="bio-box">
              <strong>BIO</strong>
              <p>Foco, disciplina e evolução todos os dias. Treinando na SUPREMA FIT ACADEMIA.</p>
              <div className="bio-links">
                <a href="https://instagram.com" target="_blank"><Instagram size={15} /> Instagram</a>
                <a href="https://facebook.com" target="_blank"><LinkIcon size={15} /> Facebook</a>
                <a href="https://wa.me/5500000000000" target="_blank"><LinkIcon size={15} /> WhatsApp</a>
              </div>
            </div>
          </section>

          <section className="card finance-card edit-bio-card">
            <h2 style={{ marginTop: 0 }}>Editar perfil</h2>
            <label className="field-label">Bio<textarea className="field" defaultValue="Foco, disciplina e evolução todos os dias. Treinando na SUPREMA FIT ACADEMIA." /></label>
            <label className="field-label" style={{ marginTop: 12 }}>Link do Instagram<input className="field" defaultValue="https://instagram.com/joaopedro.fit" /></label>
            <label className="field-label" style={{ marginTop: 12 }}>Link do Facebook<input className="field" defaultValue="https://facebook.com/joaopedro" /></label>
            <label className="field-label" style={{ marginTop: 12 }}>Outro link<input className="field" placeholder="Site, WhatsApp, TikTok, loja ou portfólio" /></label>
            <button className="primary-btn full" style={{ marginTop: 14 }}>Salvar bio e links</button>
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
          <FeedCard post={{ id: 'p1', author: 'João Pedro', initials: 'JP', time: 'hoje', category: 'Treino de Peito', caption: 'Mais um treino concluído na SUPREMA FIT. Evolução guiada.', likes: 64, comments: 9, mediaVariant: 'progress', mediaTitle: 'Post do perfil' }} />
        </div>
        <BottomNav />
      </section>
    </main>
  );
}
