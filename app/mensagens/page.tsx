import { MessageCircle } from "lucide-react";
import { BottomNav } from "../../components/BottomNav";
import { MessagesCenter } from "../../components/MessagesCenter";
import { MobileHeader } from "../../components/MobileHeader";

export default function MensagensPage() {
  return <main className="app-shell"><section className="mobile-page"><MobileHeader postAction={false} /><div className="content-pad"><div className="section-title-row"><div><span className="eyebrow">Comunicação</span><h1 className="page-title">Mensagens</h1></div><MessageCircle color="var(--orange)" /></div><MessagesCenter /></div><BottomNav /></section></main>;
}
