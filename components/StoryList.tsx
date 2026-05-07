import Link from "next/link";
const stories = [
  { name: "Seu story", initials: "JP", href: "/postar", plus: true },
  { name: "Coach Leo", initials: "CL", href: "/alunos/coach-leo" },
  { name: "Julia B.", initials: "JB", href: "/alunos/julia-bianchi" },
  { name: "Marcos S.", initials: "MS", href: "/alunos/marcos-silva" },
  { name: "Ana P.", initials: "AP", href: "/alunos/ana-paula" },
  { name: "Turma 6h", initials: "6H", href: "/mensagens" }
];
export function StoryList() {
  return <section><div className="section-title-row"><h2>Stories</h2><Link className="link-orange" href="/conexoes">Ver todos</Link></div><div className="stories">{stories.map((story) => <Link className="story" key={story.name} href={story.href} aria-label={`Abrir ${story.name}`}><div className="story-ring"><div className="story-avatar">{story.initials}</div>{story.plus && <span className="story-plus">+</span>}</div><div className="story-label">{story.name}</div></Link>)}</div></section>;
}
