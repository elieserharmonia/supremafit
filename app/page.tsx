import { Plus } from "lucide-react";
import { BottomNav } from "../components/BottomNav";
import { FeedCard } from "../components/FeedCard";
import { MobileHeader } from "../components/MobileHeader";
import { StoryList } from "../components/StoryList";

const posts = [
  {
    id: "1",
    author: "Marcos Silva",
    initials: "MS",
    time: "12 min",
    category: "Treino de Peito",
    caption: "Peito com intensidade máxima! Foco, disciplina e evolução todos os dias.",
    likes: 128,
    comments: 24
  },
  {
    id: "2",
    author: "Julia Bianchi",
    initials: "JB",
    time: "1 h",
    category: "Treino de Pernas",
    caption: "Hoje foi dia de perna. Leg press, extensora e muita constância. A evolução vem no detalhe.",
    likes: 96,
    comments: 18
  },
  {
    id: "3",
    author: "Coach Leo",
    initials: "CL",
    time: "2 h",
    category: "Dica do Personal",
    caption: "Não aumente a carga antes de dominar a execução. Movimento limpo vale mais que ego.",
    likes: 211,
    comments: 31
  }
];

export default function HomePage() {
  return (
    <main className="app-shell">
      <section className="mobile-page">
        <MobileHeader />
        <div className="content-pad">
          <StoryList />
          <div className="section-title-row">
            <div>
              <span className="eyebrow">Comunidade Suprema</span>
              <h1 className="page-title">Feed</h1>
            </div>
          </div>
          <div className="feed-list">
            {posts.map((post) => <FeedCard key={post.id} post={post} />)}
          </div>
        </div>
        <button className="fab"><Plus size={18} /> Postar treino</button>
        <BottomNav />
      </section>
    </main>
  );
}
