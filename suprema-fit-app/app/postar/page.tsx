import { Camera, Send } from "lucide-react";
import { BottomNav } from "../../components/BottomNav";
import { MobileHeader } from "../../components/MobileHeader";

export default function PostarPage() {
  return (
    <main className="app-shell">
      <section className="mobile-page">
        <MobileHeader right="none" />
        <div className="content-pad">
          <span className="eyebrow">Comunidade Suprema</span>
          <h1 className="page-title">Criar post</h1>
          <p className="muted">Compartilhe seu treino, evolução ou check-in com a comunidade.</p>
          <section className="card finance-card">
            <div className="media-card" style={{ margin: 0, height: 260 }}>
              <div className="play-badge"><Camera size={26} /></div>
              <div className="media-label"><b>Foto ou vídeo</b><small>Adicione sua mídia do treino</small></div>
            </div>
            <label className="field-label" style={{ marginTop: 14 }}>Legenda<textarea className="field" placeholder="Ex: treino concluído com foco e disciplina..." /></label>
            <label className="field-label" style={{ marginTop: 14 }}>Categoria
              <select className="select-field">
                <option>Treino de Peito</option>
                <option>Treino de Perna</option>
                <option>Treino de Braço</option>
                <option>Cardio</option>
                <option>Evolução</option>
              </select>
            </label>
            <button className="primary-btn full" style={{ marginTop: 14 }}><Send size={18} /> Publicar</button>
          </section>
        </div>
        <BottomNav />
      </section>
    </main>
  );
}
