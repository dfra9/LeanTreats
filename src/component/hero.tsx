"use client";

import { Button } from "@/src/component/ui/button";

export function Hero() {
  const handleOrderNow = () => {
    // Add your order logic here
    console.log("Order Now clicked");
  };

  return (
    <section className="relative h-[600px] bg-[url('/cookies-hero.jpg')] bg-cover bg-center">
      <div className="absolute inset-0 bg-black/20" />
      <div className="relative container mx-auto px-4 h-full flex flex-col justify-center">
        <h1 className="text-6xl font-bold text-white mb-6">
          GUILT-FREE
          <br />
          COOKIES!
        </h1>
        <Button
          className="w-fit bg-[#00584D] hover:bg-[#00584D]/90"
          //   onClick={handleOrderNow}
        >
          Order Now
        </Button>
      </div>
    </section>
  );
}
