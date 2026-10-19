import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { cn } from "@/lib/utils";
import type { Faq } from "@/types";

/** Accordion of questions, with the first one open by default. */
export function FaqList({
  faqs,
  className,
}: {
  faqs: Faq[];
  className?: string;
}) {
  return (
    <Accordion
      defaultValue={[faqs[0]?.question]}
      className={cn("gap-3", className)}
    >
      {faqs.map((faq) => (
        <AccordionItem
          key={faq.question}
          value={faq.question}
          className="rounded-xl border-none bg-card px-5 not-last:border-b-0"
        >
          <AccordionTrigger className="py-5 font-heading text-base font-semibold hover:text-primary hover:no-underline">
            {faq.question}
          </AccordionTrigger>
          <AccordionContent className="pb-5 text-[15px] leading-relaxed text-muted-foreground">
            <p>{faq.answer}</p>
          </AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  );
}
