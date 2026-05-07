import { AppLogo } from "../../components/AppLogo";
import { OnboardingForm } from "../../components/OnboardingForm";

export default function OnboardingPage() {
  return (
    <main className="onboarding-shell">
      <div style={{ width: "100%", maxWidth: 820 }}>
        <div style={{ display: "flex", justifyContent: "center", marginBottom: 18 }}><AppLogo /></div>
        <OnboardingForm />
      </div>
    </main>
  );
}
