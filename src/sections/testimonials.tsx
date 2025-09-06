'use client'

import Badge from "@/components/badge"
import SlideEffect from "@/components/slide-effect"
import TextRevealEffect from "@/components/text-reveal-effect"
import { AnimatedTestimonials } from "@/components/ui/animated-testimonials"

const settings = {
  badge: {
    number: 5,
    text: 'Hear from Real People',
  },
  title: 'Join Happy Customers',
  description: 'Hundreds of customer processes are automated with BotBuddy each month — see what our customers have to say.',
  testimonials: [
    {
      quote:
        "Before BotBuddy, we were losing dozens of customers every week to cart abandonment. Their WhatsApp AI agent recovered 23% of lost sales in the first month — and we didn't have to lift a finger. It's like having a smart salesperson working 24/7.",
      name: "Ria Patel",
      designation: "Co-Founder, UrbanTrove.in",
      src: "/iphone.svg",
      videoUrl: "https://www.youtube.com/embed/q2eLoouukxI?modestbranding=1&rel=0&controls=1&showinfo=0"
    },
    {
      quote:
        "We constantly ran into issues where fast-moving inventory would run out before we noticed. BotBuddy set up a smart inventory bot that alerts our team in real-time and automatically notifies suppliers. Stockouts dropped by 67% — and our operations feel 10x smoother.",
      name: "Manish Kumar",
      designation: "Ops Head, DailyFit Supplies",
      src: "/iphone.svg",
      videoUrl: "https://www.youtube.com/embed/9QomIT-N-xE?modestbranding=1&rel=0&controls=1&showinfo=0"
    },
    {
      quote:
        "Our email campaigns used to feel like guesswork. BotBuddy helped us create AI-generated customer segments and trigger hyper-personalized emails based on behavior. We saw a 42% boost in conversions from our next campaign. Game-changer.",
      name: "Shreya Jain",
      designation: "Head of Marketing, KarmaWear",
      src: "/iphone.svg",
      videoUrl: "https://www.youtube.com/embed/xaaKOkTEKz4?modestbranding=1&rel=0&controls=1&showinfo=0"
    },
    {
      quote:
        "Every Monday used to start with 2 hours of manual reporting. BotBuddy now sends a smart dashboard summary to my inbox and Slack — automatically. We saved hours a week and started spotting trends earlier.",
      name: "Dhruv Taneja",
      designation: "Director, Lucent Digital",
      src: "/iphone.svg",
      videoUrl: "https://www.youtube.com/embed/BrAdW81u94Y?modestbranding=1&rel=0&controls=1&showinfo=0"
    },
    {
      quote:
        "We wanted to scale but didn't want to double our customer support staff. BotBuddy deployed a multilingual AI chat agent that handles 80% of queries. Our response time improved, and we didn't have to hire anyone.",
      name: "Aastha Mehra",
      designation: "Founder, Bloomy Skincare",
      src: "/iphone.svg",
      videoUrl: "https://www.youtube.com/embed/9cxU3ACkP44?modestbranding=1&rel=0&controls=1&showinfo=0"
    },
  ]
}

export default function Testimonials() {
  return (
    <div id='testimonials' className="space-y-6 sm:space-y-7 md:space-y-8 lg:space-y-10 mx-auto text-center">
      {/* Badge */}
      <SlideEffect>
        <Badge number={settings.badge.number} text={settings.badge.text} />
      </SlideEffect>

      {/* Title */}
      <TextRevealEffect className="text-2xl md:text-4xl lg:text-header text-transparent bg-clip-text bg-gradient-to-b from-black to-black/60 font-medium leading-normal">{settings.title}</TextRevealEffect>

      {/* Description */}
      <SlideEffect className="px-2 sm:px-10 md:px-0 w-full md:max-w-3/4 mx-auto text-sm lg:text-base">{settings.description}</SlideEffect>

      {/* Testimonials */}
      <SlideEffect>
        <AnimatedTestimonials autoplay testimonials={settings.testimonials} />
      </SlideEffect>
    </div>
  )
}