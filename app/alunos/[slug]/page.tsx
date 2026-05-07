import { BottomNav } from "../../../components/BottomNav";
import { MobileHeader } from "../../../components/MobileHeader";
import { StudentProfile } from "../../../components/StudentProfile";

export default function AlunoProfilePage({ params }: { params: { slug: string } }) {
  return <main className="app-shell"><section className="mobile-page"><MobileHeader right="settings" postAction={false} /><StudentProfile slug={params.slug} /><BottomNav /></section></main>;
}
