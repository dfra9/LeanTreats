"use client";
import { Button } from "@/src/component/ui/button";
import { MessageCircle } from "lucide-react";

export function OrderNow() {
  return (
    <section className="py-20 bg-[#00584D] text-white text-center">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold mb-6">ORDER NOW!</h2>
        <p className="mb-8">
          We&apos;re open order from Monday-Saturday
          <br />
          08.00 AM - 10.00 AM
        </p>
        <Button
          className="bg-[#25D366] hover:bg-[#25D366]/90 text-white"
          size="large"
          //   onClick={() => window.open("https://wa.me/085183066469", "_blank")}
        >
          <MessageCircle className="mr-2" />
          Direct To WhatsApp
        </Button>
      </div>
    </section>
  );
}
