import { Bell, Lock, Settings, User } from "lucide-react";
import { BottomNav } from "../../components/BottomNav";
import { MobileHeader } from "../../components/MobileHeader";

export default function ConfiguracoesPage() {
  return (
    <main className="app-shell">
      <section className="mobile-page">
        <MobileHeader right="none" postAction={false} />
        <div className="content-pad">
          <div className="section-title-row"><div><span className="eyebrow">Conta Suprema</span><h1 className="page-title">Configurações</h1></div><Settings color="var(--orange)" /></div>
          <section className="card finance-card">
            <h2>Preferências</h2>
            <div className="history-row"><span><Bell size={18} color="var(--orange)" /> Notificações de treino</span><span className="status">Ativo</span></div>
            <div className="history-row"><span><User size={18} color="var(--orange)" /> Perfil público</span><span className="status">Ativo</span></div>
            <div className="history-row"><span><Lock size={18} color="var(--orange)" /> Privacidade de evolução</span><span className="status">Privado</span></div>
          </section>
          <button className="primary-btn full">Salvar configurações</button>
        </div>
        <BottomNav />
      </section>
    </main>
  );
}
