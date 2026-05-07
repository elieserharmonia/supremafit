import { CreditCard, ShieldCheck, WalletCards } from "lucide-react";
import { BottomNav } from "../../components/BottomNav";
import { MobileHeader } from "../../components/MobileHeader";

export default function FinanceiroPage() {
  return (
    <main className="app-shell">
      <section className="mobile-page">
        <MobileHeader right="settings" />
        <div className="content-pad">
          <div className="section-title-row">
            <div>
              <span className="eyebrow">Financeiro</span>
              <h1 className="page-title">Meu plano</h1>
            </div>
          </div>

          <section className="profile-hero">
            <div className="profile-row">
              <div className="avatar profile-avatar">JP</div>
              <div style={{ flex: 1 }}>
                <h2 style={{ margin: 0 }}>João Pedro</h2>
                <p className="muted" style={{ margin: "4px 0 8px" }}>Aluno desde Jan 2024</p>
                <span className="badge-soft">Nível Bronze</span>
                <div className="xp-bar"><span style={{ width: "62%" }} /></div>
                <small className="muted">620 / 1.000 XP</small>
              </div>
            </div>
          </section>

          <section className="card finance-card">
            <div className="plan-head">
              <div>
                <span className="muted">Plano atual</span>
                <h2 style={{ margin: "4px 0" }}>Plano Mensal</h2>
              </div>
              <span className="status">ATIVO</span>
            </div>
            <p className="muted">Próxima cobrança: <strong style={{ color: "white" }}>20/06/2024</strong></p>
            <div className="price">R$ 129,90 <span className="muted" style={{ fontSize: 16 }}>/ mês</span></div>
            <div className="payment-methods">
              <button className="method active"><WalletCards size={17} /> Pix</button>
              <button className="method"><CreditCard size={17} /> Cartão</button>
            </div>
            <button className="primary-btn full"><ShieldCheck size={18} /> Pagar com Pix</button>
          </section>

          <section className="card finance-card">
            <h2 style={{ marginTop: 0 }}>Histórico de pagamentos</h2>
            {[
              ["20/05/2024", "R$ 129,90"],
              ["20/04/2024", "R$ 129,90"],
              ["20/03/2024", "R$ 129,90"]
            ].map(([date, price]) => (
              <div className="history-row" key={date}>
                <div><strong>{date}</strong><br /><span className="muted">Plano mensal</span></div>
                <div style={{ textAlign: "right" }}><strong>{price}</strong><br /><span className="status">Pago</span></div>
              </div>
            ))}
          </section>
        </div>
        <BottomNav />
      </section>
    </main>
  );
}
