import { BarChart3, Flame, Gauge, TrendingUp } from "lucide-react";
import { BottomNav } from "../../components/BottomNav";
import { MobileHeader } from "../../components/MobileHeader";

export default function EvolucaoPage() {
  return <main className="app-shell"><section className="mobile-page"><MobileHeader postAction={false} /><div className="content-pad">
    <div className="section-title-row"><div><span className="eyebrow">Acompanhe seu progresso</span><h1 className="page-title">Evolução</h1></div><BarChart3 color="var(--orange)" /></div>
    <div className="metric-grid"><div className="metric-mini"><Flame color="var(--orange)" /><small>Sequência</small><b>12 dias</b></div><div className="metric-mini"><Gauge color="var(--orange)" /><small>Volume</small><b>18.240 kg</b></div><div className="metric-mini"><TrendingUp color="var(--orange)" /><small>Melhora</small><b>+12%</b></div></div>
    <section className="card finance-card"><h2>Resumo</h2><p className="muted">Registre cargas, medidas e frequência para o app sugerir o próximo passo com mais precisão.</p></section>
  </div><BottomNav /></section></main>;
}
