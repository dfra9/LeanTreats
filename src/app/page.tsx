import { Hero } from "@/src/component/hero";
import { About } from "@/src/component/about";
import { Menu } from "@/src/component/menu";
import { FAQ } from "@/src/component/faq";
import { OrderNow } from "@/src/component/order-now";

export default function Home() {
  return (
    <div className="pt-16">
      <Hero />
      <About />
      <Menu />
      <FAQ />
      <OrderNow />
    </div>
  );
}
