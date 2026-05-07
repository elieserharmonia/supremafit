import { BottomNav } from "../../components/BottomNav";
import { MobileHeader } from "../../components/MobileHeader";
import { TrainingExperience } from "../../components/TrainingExperience";

export default function TreinosPage() {
  return (
    <main className="app-shell">
      <section className="mobile-page">
        <MobileHeader right="bell" />
        <div className="content-pad">
          <TrainingExperience />
        </div>
        <BottomNav />
      </section>
    </main>
  );
}
