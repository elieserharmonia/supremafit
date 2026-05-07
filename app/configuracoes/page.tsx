import { Settings } from "lucide-react";
import { BottomNav } from "../../components/BottomNav";
import { MobileHeader } from "../../components/MobileHeader";
import { PrivacySettings } from "../../components/PrivacySettings";

export default function ConfiguracoesPage() {
  return <main className="app-shell"><section className="mobile-page"><MobileHeader right="none" postAction={false} /><div className="content-pad"><div className="section-title-row"><div><span className="eyebrow">Conta Suprema</span><h1 className="page-title">Configurações</h1></div><Settings color="var(--orange)" /></div><PrivacySettings /><button type="button" className="primary-btn full" style={{ marginTop: 14 }}>Salvar configurações</button></div><BottomNav /></section></main>;
}
