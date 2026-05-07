import { HeartPulse, Pill, Shirt, ShoppingBag, Star } from "lucide-react";
import { BottomNav } from "../../components/BottomNav";
import { MobileHeader } from "../../components/MobileHeader";

const products = [
  { name: "Whey Protein Suprema", type: "Suplemento", price: "R$ 149,90", icon: Pill, tag: "Massa muscular" },
  { name: "Creatina Power", type: "Suplemento", price: "R$ 89,90", icon: HeartPulse, tag: "Força" },
  { name: "Multivitamínico", type: "Vitaminas", price: "R$ 59,90", icon: Pill, tag: "Rotina" },
  { name: "Camiseta SUPREMA FIT", type: "Vestiário", price: "R$ 79,90", icon: Shirt, tag: "Estilo" },
  { name: "Coqueteleira Laranja", type: "Acessório", price: "R$ 34,90", icon: ShoppingBag, tag: "Hidratação" },
  { name: "Pré-treino Power", type: "Suplemento", price: "R$ 119,90", icon: Star, tag: "Energia" }
];

export default function LojaPage() {
  return (
    <main className="app-shell">
      <section className="mobile-page">
        <MobileHeader />
        <div className="content-pad">
          <section className="store-hero">
            <span className="eyebrow">Loja oficial</span>
            <h1>SUPREMA <span>POWER</span></h1>
            <p>Suplementos, vitaminas, camisetas e acessórios para apoiar sua evolução dentro e fora da academia.</p>
            <button className="primary-btn">Ver ofertas de hoje</button>
          </section>

          <div className="alert-card">
            <ShoppingBag color="var(--orange)" />
            <div>
              <strong>Compra integrada ao app</strong>
              <p>Na próxima fase, conectaremos Pix/cartão, estoque, retirada na academia e entrega.</p>
            </div>
          </div>

          <div className="store-grid">
            {products.map((product) => {
              const Icon = product.icon;
              return (
                <article className="store-card" key={product.name}>
                  <div className="store-product-img"><Icon size={38} /></div>
                  <span className="tag orange-tag">{product.tag}</span>
                  <h3>{product.name}</h3>
                  <small>{product.type}</small>
                  <strong className="store-price">{product.price}</strong>
                  <button className="secondary-btn full">Adicionar</button>
                </article>
              );
            })}
          </div>
        </div>
        <BottomNav />
      </section>
    </main>
  );
}
