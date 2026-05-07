import Link from "next/link";
import { Bell, Droplets, Flame, Trophy } from "lucide-react";
import { BottomNav } from "../../components/BottomNav";
import { MobileHeader } from "../../components/MobileHeader";

const notifications = [
  { icon: Droplets, title: "Hidratação", text: "Beba água antes, durante e depois do treino de hoje." },
  { icon: Flame, title: "Volte para o ritmo", text: "Você está a um treino de manter sua sequência ativa." },
  { icon: Trophy, title: "Destaque da Semana", text: "Treine hoje para aparecer entre os alunos mais constantes da SUPREMA FIT." }
];

export default function NotificacoesPage() {
  return (
    <main className="app-shell">
      <section className="mobile-page">
        <MobileHeader postAction={false} />
        <div className="content-pad">
          <div className="section-title-row">
            <div>
              <span className="eyebrow">Central de avisos</span>
              <h1 className="page-title">Notificações</h1>
              <p className="muted">Lembretes de treino, hidratação, constância e mensagens da academia.</p>
            </div>
            <Bell color="var(--orange)" />
          </div>
          <div className="feed-list">
            {notifications.map((item) => {
              const Icon = item.icon;
              return (
                <Link className="card finance-card clickable-card" href="/treinos" key={item.title}>
                  <div className="nutrition-head">
                    <Icon color="var(--orange)" />
                    <div><strong>{item.title}</strong><p>{item.text}</p></div>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
        <BottomNav />
      </section>
    </main>
  );
}
