import Promobanner from "./components/promo-banner";
import Categories from "./components/categories";
import SectionTitle from "@/components/ui/sectionTitle";

export default function Home() {
  return (
    <div className="home-container  flex  flex-col  px-[20px] gap-8 py-8  lg:px-0">
      <header className="w-full py-8">
        <Promobanner
          src="/images/banner.home2.png"
          alt="Até 25% de desconto"
        />
      </header>

      <section className="home-categories w-full px-5">
        <Categories />
      </section>

      <section>
        <SectionTitle>Ofertas</SectionTitle>
      </section>
    </div>
  );
}
