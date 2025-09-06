'use client'

import SlideEffect from "@/components/slide-effect"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

const settings = {
  title: 'Frequently asked questions',
  faqs: [
    {
      question: 'What even is BotBuddy? Is it for someone like me?',
      answer: 'Totally! BotBuddy is your behind-the-scenes tech partner. We build AI bots and automation tools that help businesses like yours handle tasks you probably don’t love doing — like follow-ups, sending emails, segmenting customers, recovering abandoned carts, and even talking to customers with voice bots.',
    },
    {
      question: 'Do I need to be a techie to use this?',
      answer: 'Nope! You don’t need to write a single line of code. We’ve designed everything to be plug-and-play — choose a template, connect your accounts, and you’re off. And if you ever get stuck, we’re right here to help. It’s automation, made beginner-friendly.',
    },
    {
      question: 'Can this really help me reduce costs or make more money?',
      answer: 'Absolutely. Most of our clients either: a) Cut down on manual staff hours or b) Recovered sales they were missing before. Whether it`s an AI voice bot calling customers who abandoned carts, or smart campaigns triggered at the perfect moment — our bots help you earn more while doing less.',
    },
    {
      question: 'What are voice bots and why should I care?',
      answer: 'Great question. Voice bots are like your 24/7 call agents. They can call customers, follow up, remind them about deliveries or sales, or collect reviews — all in natural human-like voice. No burnout, no break time. They’re powerful, cost-effective, and honestly… kind of magical when you see them in action.',
    },
    {
      question: "Can I try it before paying?",
      answer: 'Yes! We offer and introductory call and a 7-day free trials on all our bots — no pressure. Try out the bots, test the automations, and only stay if you’re impressed (which, we’re pretty sure you will be 😉).',
    },
  ]
}

export default function FAQ() {
  return (
    <div id='faq' className="space-y-6 sm:space-y-7 md:space-y-8 lg:space-y-10 mx-auto text-center">
      {/* Title */}
      <SlideEffect>
        <h2 className="text-2xl md:text-4xl lg:text-header capitalize text-transparent bg-clip-text bg-gradient-to-b from-black to-black/60 font-medium leading-normale">{settings.title}</h2>
      </SlideEffect>

      {/* Accordion */}
      <SlideEffect>
        <Accordion type="single" collapsible className="max-w-2xl mx-auto text-base text-black">
          {settings.faqs.map((faq, index) => (
            <AccordionItem key={index} value={index + '-item'}>
              <AccordionTrigger>{faq.question}</AccordionTrigger>
              <AccordionContent>{faq.answer}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </SlideEffect>
    </div>
  )
}