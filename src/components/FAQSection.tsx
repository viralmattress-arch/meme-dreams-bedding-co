import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "Will this mattress actually make me go viral?",
    answer: "While we can't guarantee internet fame, we can guarantee you'll sleep like a celebrity. Viral status depends on your content creation skills, but comfort is 100% guaranteed."
  },
  {
    question: "How long does shipping take?",
    answer: "Your mattress ships faster than your last relationship ended. Typically 3-5 business days, compressed in a box that's smaller than your hopes and dreams."
  },
  {
    question: "What if I don't like it?",
    answer: "We offer a 30-night trial because we're confident you'll love it more than your morning coffee. If not, we'll take it back and you can go back to sleeping on whatever you were sleeping on before (no judgment)."
  },
  {
    question: "Is assembly required?",
    answer: "Nope! Just unbox, unwrap, and let it expand. It's easier than explaining TikTok to your parents. The mattress does all the work while you stand there and look impressed."
  },
  {
    question: "Does it work with my current bed frame?",
    answer: "Yes! It works with any bed frame, platform, or even the floor if you're going for that minimalist aesthetic. We don't judge your life choices."
  },
  {
    question: "Can I finance this mattress?",
    answer: "Absolutely! We offer payment plans because we understand that adulting is expensive. Split it into manageable payments and sleep easy knowing you're not broke."
  },
  {
    question: "What makes this different from other mattresses?",
    answer: "Besides the viral branding? It's the perfect balance of comfort, support, and meme-ability. Plus, it comes with built-in conversation starters for your next house party."
  }
];

const FAQSection = () => {
  return (
    <section className="py-16 bg-muted/30" id="faq">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-black mb-4">Frequently Asked Questions</h2>
          <p className="text-xl text-muted-foreground">
            All the questions you're too afraid to ask (but we'll answer anyway)
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger className="text-left font-semibold">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>

        <div className="text-center mt-12">
          <p className="text-lg font-semibold mb-2">Still have questions?</p>
          <p className="text-muted-foreground">
            DM us on social media or send smoke signals. We're surprisingly responsive.
          </p>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;