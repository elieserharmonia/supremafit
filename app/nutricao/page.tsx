import { Droplets, Salad } from "lucide-react";
import { BottomNav } from "../../components/BottomNav";
import { MobileHeader } from "../../components/MobileHeader";

const blocks = [
  { title: "Hipertrofia", text: "Proteína ao longo do dia, carboidrato bem distribuído e sono para recuperação." },
  { title: "Perda de peso urgente", text: "Déficit calórico orientado, proteína magra, menos ultraprocessados e acompanhamento nutricional." },
  { title: "Saúde e exercício", text: "Rotina sustentável, hidratação, frutas, legumes e refeições simples." }
];
export default function NutricaoPage() {
  return <main className="app-shell"><section className="mobile-page"><MobileHeader postAction={false} /><div className="content-pad">
    <div className="section-title-row"><div><span className="eyebrow">Sugestões educativas</span><h1 className="page-title">Nutrição</h1><p className="muted">Orientações gerais. Dieta individual deve ser feita por nutricionista.</p></div><Salad color="var(--orange)" /></div>
    {blocks.map(block=><section className="card finance-card" key={block.title}><h2>{block.title}</h2><p className="muted">{block.text}</p></section>)}
    <div className="alert-card"><Droplets color="var(--orange)" /><div><strong>Hidratação sempre</strong><p>Leve água para o treino e beba pequenos goles durante a sessão.</p></div></div>
  </div><BottomNav /></section></main>;
}
