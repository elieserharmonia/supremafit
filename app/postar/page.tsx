import { Camera, ImagePlus, Send } from "lucide-react";
import { BottomNav } from "../../components/BottomNav";
import { MobileHeader } from "../../components/MobileHeader";

export default function PostarPage() {
  return (
    <main className="app-shell">
      <section className="mobile-page">
        <MobileHeader right="none" postAction={false} />
        <div className="content-pad">
          <span className="eyebrow">Comunidade Suprema</span>
          <h1 className="page-title">Criar post</h1>
          <p className="muted">Publique treinos, fotos aleatórias, bastidores, evolução, refeição, check-in ou conteúdo social como no Instagram.</p>
          <section className="card finance-card">
            <label className="upload-zone">
              <ImagePlus color="var(--orange)" size={32} />
              <strong>Adicionar foto ou vídeo</strong>
              <small>Use fotos do treino, selfies, rotina, evolução, alimentação ou momentos da academia.</small>
              <input type="file" accept="image/*,video/*" />
            </label>
            <div className="media-card media-random" style={{ margin: "14px 0 0", height: 230 }}>
              <div className="fake-photo-person" />
              <div className="play-badge"><Camera size={26} /></div>
              <div className="media-label"><b>Prévia do post</b><small>SUPREMA FIT ACADEMIA</small></div>
            </div>
            <label className="field-label" style={{ marginTop: 14 }}>Legenda<textarea className="field" placeholder="Ex: treino concluído, foto aleatória, evolução, refeição, dica ou bastidor..." /></label>
            <label className="field-label" style={{ marginTop: 14 }}>Categoria
              <select className="select-field">
                <option>Foto aleatória</option>
                <option>Treino de Peito</option>
                <option>Treino de Perna</option>
                <option>Treino de Braço</option>
                <option>Cardio</option>
                <option>Evolução</option>
                <option>Alimentação</option>
                <option>Check-in na academia</option>
                <option>Dica do Personal</option>
              </select>
            </label>
            <button className="primary-btn full" style={{ marginTop: 14 }}><Send size={18} /> Publicar</button>
            <p className="disclaimer">Quando o post for compartilhado fora do app, a imagem receberá a marca “SUPREMA FIT ACADEMIA” no canto inferior direito.</p>
          </section>
        </div>
        <BottomNav />
      </section>
    </main>
  );
}
