"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/src/component/ui/accordion";

const faqs = [
  {
    question: "Bagaimana cara menyimpan healthy cookies?",
    answer:
      "Simpan cookies pada tempat tertutup rapat pada suhu ruang di tempat yang sejuk dan kering. Anda juga bisa menyimpannya di dalam kulkas.",
  },
  {
    question: "Berapa lama masa simpan healthy cookies?",
    answer:
      "Masa simpan cookies kami adalah 2 minggu pada suhu ruang dan 1 bulan jika disimpan dalam kulkas.",
  },
  {
    question: "Apakah healthy cookies cocok untuk diet tertentu?",
    answer:
      "Ya, cookies kami cocok untuk berbagai jenis diet karena menggunakan bahan-bahan alami dan rendah kalori.",
  },
  {
    question: "Apakah ada alergi yang harus diperhatikan?",
    answer:
      "Cookies kami mengandung kacang dan gluten. Harap perhatikan jika Anda memiliki alergi terhadap bahan-bahan tersebut.",
  },
  {
    question: "Bagaimana cara memesan?",
    answer:
      "Anda dapat memesan melalui WhatsApp kami dengan mengklik tombol Order Now di bawah.",
  },
];

export function FAQ() {
  return (
    <section className="py-20 bg-[#F7C94B]">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-[#00584D] text-center mb-12">
          Frequently Asked Question
        </h2>
        <div className="max-w-2xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="bg-white rounded-lg"
              >
                <AccordionTrigger className="px-6 text-[#00584D] hover:text-[#00584D]/90">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="px-6 text-gray-600">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
}
