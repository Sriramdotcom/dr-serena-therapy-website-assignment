"use client";
import { faqs } from "@/data/faq";
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "@/components/ui/accordion";

export default function FAQ() {
  return (
    <section className="bg-white py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <h2 className="font-heading text-3xl md:text-4xl text-center mb-10 text-[#46607c]">Frequently Asked Questions</h2>
        <Accordion type="single" collapsible className="w-full">
          {faqs.map((faq, i) => (
            <AccordionItem key={i} value={String(i)}>
              <AccordionTrigger className="text-lg text-[#46607c] hover:underline">{faq.question}</AccordionTrigger>
              <AccordionContent className="text-base text-[#46607c] bg-[#f7fafd] border-l-4 border-[#b7ccc7] px-4 py-2">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
} 