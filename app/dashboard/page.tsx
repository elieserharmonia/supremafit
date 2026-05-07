import Link from "next/link";
import { Bell, CalendarCheck, Dumbbell, Flame, Search, TrendingUp, WalletCards } from "lucide-react";
import { AppLogo } from "../../components/AppLogo";
import { FeedCard } from "../../components/FeedCard";
import { Sidebar } from "../../components/Sidebar";

export default function DashboardPage() {
  return (
    <main className="dashboard-layout">
      <Sidebar />
      <section className="dashboard-main">
        <div className="mobile-only" style={{ marginBottom: 16 }}><AppLogo /></div>
        <div className="dashboard-top">
          <div className="search-field"><Search size={18} color="var(--muted)" /><input placeholder="Buscar treino, aluno, post..." /></div>
          <div style={{ display: "flex", gap: 10, alignItems: "center" }}>
            <button className="icon-button"><Bell size={18} /><span className="badge">12</span></button>
            <Link className="secondary-btn" href="/perfil">João Pedro</Link>
          </div>
        </div>

        <div>
          <span className="eyebrow">Dashboard SUPREMA FIT</span>
          <h1 className="page-title">Bem-vindo de volta, João!</h1>
          <p className="muted">Pronto para mais um dia de evolução?</p>
        </div>

        <section className="stats-grid">
          <div className="stat-card"><CalendarCheck color="var(--orange)" /><small>Treinos esta semana</small><h3>5/6</h3><span className="muted">Mantenha o ritmo</span></div>
          <div className="stat-card"><Dumbbell color="var(--orange)" /><small>Volume total</small><h3>18.240 kg</h3><span className="orange">+12%</span></div>
          <div className="stat-card"><Flame color="var(--orange)" /><small>Calorias queimadas</small><h3>2.450</h3><span className="orange">+8%</span></div>
          <div className="stat-card"><TrendingUp color="var(--orange)" /><small>Sequência</small><h3>12 dias</h3><span className="muted">Continue firme</span></div>
        </section>

        <div className="dashboard-grid">
          <div className="panel">
            <h2>Feed da Comunidade</h2>
            <FeedCard post={{ id: 'dash', author: 'Marcos Silva', initials: 'MS', time: '2 h', category: 'Treino de Costas', caption: 'Costas fortes, mente forte. Bora evoluir junto na SUPREMA FIT!', likes: 96, comments: 18 }} />
          </div>
          <div>
            <section className="panel">
              <h2>Resumo do treino de hoje</h2>
              <div className="summary-grid">
                <div>
                  <span className="muted">Divisão</span>
                  <h3>Peito e Tríceps</h3>
                </div>
                <div>
                  <span className="muted">Objetivo</span>
                  <h3>Hipertrofia</h3>
                </div>
                <div className="progress-ring" style={{ ['--p' as any]: 72 }}><span>72%</span></div>
              </div>
              <Link className="primary-btn full" href="/treinos" style={{ marginTop: 12 }}>Ver treino completo</Link>
            </section>
            <section className="panel">
              <h2>Pagamento</h2>
              <p className="muted">Plano Mensal <span className="status">Ativo</span></p>
              <h3 style={{ fontSize: 28, letterSpacing: '-0.05em' }}>R$ 129,90</h3>
              <p className="muted">Próxima cobrança: 20/06/2024</p>
              <Link className="secondary-btn full" href="/financeiro"><WalletCards size={18} /> Gerenciar plano</Link>
            </section>
          </div>
        </div>
      </section>
    </main>
  );
}
