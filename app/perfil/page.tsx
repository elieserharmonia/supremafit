import { Award, Dumbbell, Flame, Gauge, PenLine, Zap } from "lucide-react";
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
              <div className="bio-links social-icon-links" aria-label="Links sociais">
                <a href="https://instagram.com" target="_blank" rel="noreferrer" aria-label="Abrir Instagram"><SocialIcon type="instagram" /></a>
                <a href="https://facebook.com" target="_blank" rel="noreferrer" aria-label="Abrir Facebook"><SocialIcon type="facebook" /></a>
                <a href="https://wa.me/5500000000000" target="_blank" rel="noreferrer" aria-label="Abrir WhatsApp"><SocialIcon type="whatsapp" /></a>
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


function SocialIcon({ type }: { type: "instagram" | "facebook" | "whatsapp" }) {
  if (type === "instagram") {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <rect x="4" y="4" width="16" height="16" rx="5" />
        <circle cx="12" cy="12" r="3.6" />
        <circle cx="17" cy="7" r="1" />
      </svg>
    );
  }
  if (type === "facebook") {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M14 8h2V5h-2.4C10.9 5 10 6.8 10 8.8V11H8v3h2v6h3v-6h2.4l.6-3h-3V8.9c0-.6.2-.9 1-.9Z" />
      </svg>
    );
  }
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M12 4a8 8 0 0 0-6.9 12.1L4 20l4-1.1A8 8 0 1 0 12 4Z" />
      <path d="M9.2 8.3c.2-.4.4-.4.7-.4h.5c.2 0 .4.1.5.4l.7 1.7c.1.2.1.4-.1.6l-.4.5c-.1.2-.1.3 0 .5.4.8 1.2 1.6 2.1 2 .2.1.3.1.5-.1l.6-.6c.2-.2.4-.2.6-.1l1.6.7c.3.1.4.3.4.6 0 .8-.7 1.7-1.5 1.8-1.3.2-3.7-.5-5.4-2.2-1.7-1.7-2.4-4-2.2-5.3.1-.7.6-1.2.9-1.7Z" />
    </svg>
  );
}
