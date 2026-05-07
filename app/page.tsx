import Link from "next/link";
import { Droplets, Flame, Plus, ShoppingBag, Trophy, Users, Zap } from "lucide-react";
import { BottomNav } from "../components/BottomNav";
import { FeedCard, Post } from "../components/FeedCard";
import { MobileHeader } from "../components/MobileHeader";
import { StoryList } from "../components/StoryList";

const posts: Post[] = [
  {
    id: "1",
    author: "Marcos Silva",
    initials: "MS",
    time: "12 min",
    category: "Treino de Peito",
    caption: "Peito com intensidade máxima! Foco, disciplina e evolução todos os dias.",
    likes: 128,
    comments: 24,
    mediaVariant: "gym",
    mediaTitle: "Supino + Crossover",
    mediaSubtitle: "Treino registrado hoje"
  },
  {
    id: "2",
    author: "Julia Bianchi",
    initials: "JB",
    time: "1 h",
    category: "Foto aleatória",
    caption: "Cafezinho pós-treino e aquela sensação de missão cumprida. Nem todo post precisa ser treino, aqui também é comunidade.",
    likes: 96,
    comments: 18,
    mediaVariant: "random",
    mediaTitle: "Momento Suprema",
    mediaSubtitle: "Post social"
  },
  {
    id: "3",
    author: "Coach Leo",
    initials: "CL",
    time: "2 h",
    category: "Dica do Personal",
    caption: "Água também faz parte do treino. Hidrate antes, durante e depois, principalmente nos treinos de perna e cardio.",
    likes: 211,
    comments: 31,
    mediaVariant: "cardio",
    mediaTitle: "Hidratação + foco",
    mediaSubtitle: "Dica SUPREMA FIT"
  },
  {
    id: "4",
    author: "Ana Paula",
    initials: "AP",
    time: "3 h",
    category: "Evolução",
    caption: "Mais um dia na sequência. A meta não é perfeição, é constância.",
    likes: 154,
    comments: 27,
    mediaVariant: "progress",
    mediaTitle: "Evolução real",
    mediaSubtitle: "12 dias de constância"
  }
];

const champions = [
  { name: "Ana Paula", streak: "18 dias", initials: "AP", href: "/alunos/ana-paula" },
  { name: "Marcos Silva", streak: "14 dias", initials: "MS", href: "/alunos/marcos-silva" },
  { name: "João Pedro", streak: "12 dias", initials: "JP", href: "/perfil" }
];

export default function HomePage() {
  return (
    <main className="app-shell">
      <section className="mobile-page">
        <MobileHeader />
        <div className="content-pad">
          <StoryList />

          <section className="weekly-highlights" aria-label="Destaque da semana">
            <div className="weekly-title-row">
              <span>Destaque da Semana</span>
              <Trophy size={14} color="var(--gold)" />
            </div>
            <div className="champion-scroll">
              {champions.map((person, index) => (
                <Link href={person.href} className="champion-pill" key={person.name}>
                  <span className="champion-rank">#{index + 1}</span>
                  <span className="avatar small-avatar">{person.initials}</span>
                  <span className="champion-text">
                    <strong>{person.name}</strong>
                    <small>{person.streak}</small>
                  </span>
                </Link>
              ))}
            </div>
          </section>

          <section className="home-quick-grid">
            <Link href="/postar" className="quick-card orange-card"><Plus size={18} />Postar foto ou treino</Link>
            <Link href="/loja" className="quick-card"><ShoppingBag size={18} />SUPREMA POWER</Link>
            <Link href="/treinos" className="quick-card"><Zap size={18} />Treino inteligente</Link>
            <Link href="/notificacoes" className="quick-card"><Droplets size={18} />Beba água hoje</Link>
            <Link href="/conexoes" className="quick-card"><Users size={18} />Conectar alunos</Link>
          </section>

          <div className="alert-card hydration-alert">
            <Droplets color="var(--orange)" />
            <div>
              <strong>Hidratação é parte da evolução.</strong>
              <p>Leve sua garrafa para o treino. Um bom alvo inicial é beber água ao longo do dia e reforçar durante a atividade.</p>
            </div>
          </div>

          <div className="section-title-row">
            <div>
              <span className="eyebrow">Comunidade Suprema</span>
              <h1 className="page-title">Feed</h1>
            </div>
            <Flame color="var(--orange)" />
          </div>
          <div className="feed-list">
            {posts.map((post) => <FeedCard key={post.id} post={post} />)}
          </div>
        </div>
        <BottomNav />
      </section>
    </main>
  );
}
