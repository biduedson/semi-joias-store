import Image from "next/image";
import Promobanner from "./components/promo-banner";
import Categories from "../category/[slug]/page";

export default function Home() {
  return (
    <div className=" home-container w-full flex  flex-col items-center px-[20px]  lg:px-0">
      <header className="w-full py-8">
        <Promobanner
          src="/images/601174-necklaces-wallpaper.jpg"
          alt="Até 25% de desconto"
        />
      </header>
      <section className="home-categories px-5">
        <Categories />
      </section>
    </div>
  );
}
