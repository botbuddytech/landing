'use client'

import Badge from "@/components/badge"
import Card from "@/components/card"
import Carousel from "@/components/carousel"
import SlideEffect from "@/components/slide-effect"
import Image from "next/image"

const settings = {
  badge: {
    number: 2,
    text: 'get started in Seconds',
  },
  title: 'Set Up AI Automation in Minutes',
  description: 'Whether youre running a Shopify store or looking for SaaS solutions, BotBuddy’s AI agentic Apps integrate seamlessly into your workflows. Launch pre-built automations, train custom bots, or deploy end-to-end systems — all without dev bottlenecks.',
  card_1: {
    title: 'Effortless Integration',
    content: 'Tech stacks evolve — BotBuddy adapts. Our AI agents work out of the box with Shopify, React, Node.js, Chatgpt, N8n and custom APIs to get your automation running in minutes.',
    carousel_images: [
      'https://cdn.worldvectorlogo.com/logos/react-2.svg',
      'https://cdn.worldvectorlogo.com/logos/shopify.svg',
      'https://cdn.worldvectorlogo.com/logos/chatgpt-6.svg',
      'https://cdn.worldvectorlogo.com/logos/nodejs-2.svg',
      'https://cdn.worldvectorlogo.com/logos/python-5.svg',
      'https://cdn.worldvectorlogo.com/logos/google-cloud-1.svg',
      'https://cdn.worldvectorlogo.com/logos/aws-2.svg',
      'https://cdn.worldvectorlogo.com/logos/firebase-2.svg',
    ]
  },
  card_2: {
    title: 'Seamless Migration',
    content: 'Still relying on manual tasks or clunky automations? BotBuddy helps you move from legacy systems, n8n flows with Dashboards — to intelligent Ai agents in just a few clicks.'
  },
  card_3: {
    title: '24/7 AI Support',
    content: 'From customer chats to order follow-ups and inventory alerts — your BotBuddy agents run 24/7 without missing a beat. No sick days. No delay. Just results.'
  },
  card_4: {
    title: 'Designed for ROI',
    content: 'very AI agent is built to deliver measurable impact. Automate operations, reduce overhead, and grow revenue faster — all while staying secure and privacy-compliant.',
    image: 'https://cdn.worldvectorlogo.com/logos/trust-pilot-stacked-black.svg',
  },
}

export default function Features1() {
  return (
    <div id='features' className="space-y-6 sm:space-y-7 md:space-y-8 lg:space-y-10 mx-auto text-center">
      {/* Badge */}
      <SlideEffect>
        <Badge number={settings.badge.number} text={settings.badge.text} />
      </SlideEffect>

      {/* Title */}
      <SlideEffect>
        <h2 className="text-2xl md:text-4xl lg:text-header capitalize font-medium leading-none text-transparent bg-clip-text bg-gradient-to-b from-black to-black/60">{settings.title}</h2>
      </SlideEffect>

      {/* Description */}
      <SlideEffect className="px-2 sm:px-10 md:px-0 w-full md:max-w-3/4 mx-auto text-sm lg:text-base">{settings.description}</SlideEffect>

      {/* Cards */}
      <div className="grid grid-cols-1 lg:grid-cols-5 gap-6">
        {/* card 1 */}
        <SlideEffect direction="right" className="col-span-1 lg:col-span-3 h-full" isSpring={false}>
          <Card>
            <h3 className="text-xl md:text-title text-black font-medium">{settings.card_1.title}</h3>
            <p className="mb-4">{settings.card_1.content}</p>
            <Carousel images={settings.card_1.carousel_images} />
          </Card>
        </SlideEffect>

        {/* card 2 */}
        <SlideEffect direction="left" duration={1.3} className="col-span-1 lg:col-span-2 h-full" isSpring={false}>
          <Card>
            <h3 className="text-xl md:text-title text-black font-medium">{settings.card_2.title}</h3>
            <p>{settings.card_2.content}</p>
          </Card>
        </SlideEffect>

        {/* card 3 */}
        <SlideEffect direction="right" duration={1} className="col-span-1 lg:col-span-2 h-full" isSpring={false}>
          <Card>
            <h3 className="text-xl md:text-title text-black font-medium">{settings.card_3.title}</h3>
            <p>{settings.card_3.content}</p>
          </Card>
        </SlideEffect>

        {/* card 4 */}
        <SlideEffect direction="left" className="col-span-1 lg:col-span-3 h-full" isSpring={false}>
          <Card className="flex flex-col lg:flex-row justify-center items-center">
            <div className="space-y-3 md:space-y-5">
              <h3 className="text-xl md:text-title text-black font-medium">{settings.card_4.title}</h3>
              <p>{settings.card_4.content}</p>
            </div>

            <Image className="w-32 my-auto mx-auto" src={settings.card_4.image} alt={settings.card_4.title} width={512} height={512} />
          </Card>
        </SlideEffect>
      </div>
    </div>
  )
}