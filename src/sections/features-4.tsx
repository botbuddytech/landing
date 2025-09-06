'use client'

import Badge from "@/components/badge"
import Card from "@/components/card"
import SlideEffect from "@/components/slide-effect"
import Spinner from "@/components/spinner"
import TextRevealEffect from "@/components/text-reveal-effect"
import { Button } from "@/components/ui/button"
import Link from "next/link"

const settings = {
  badge: {
    number: 4,
    text: 'Data + Ai bots = Magic',
  },
  title: 'Operate Leaner - Grow Faster',
  description: 'Reduce overhead, eliminate repetitive tasks, and scale effortlessly with BotBuddy`s AI agents. Automate what humans shouldn`t be doing — and refocus your team on what truly drives business growth.',
  card_1: {
    title: 'Automate Core Business Tasks',
    content: "AI Bots That Work Like Employees — But Better From handling customer queries and managing inventory to sending follow-ups and segmenting users — BotBuddy agents take over the time-consuming work, 24/7.",
    CTA: {
      content: 'Free 30 mins Consultation',
      href: '#'
    },
    labels: [
      '🚫No breaks',
      '🚫No human error',
      '✅ROI Driven',
      '✅consistent performance',
    ],
    avatars: [
      '/singlebot.svg',
      '/doublebot.svg',
      '/singlebot.svg',
      '/doublebot.svg',
      '/singlebot.svg',
      '/doublebot.svg'
    ]
  },
  card_2: {
    title: 'Stay Informed Effortlessly',
    content: 'Automated Reports That Come to You - Let AI compile the reports. Get daily or weekly updates on sales, customer trends, and campaign performance — delivered directly to your inbox.',
  },
  card_3: {
    title: 'Cut operational costs by up to 40%',
    content: '⚡ BotBuddy helps businesses cut operational costs by up to 40% by replacing manual tasks with intelligent agents — trained to act, respond, and scale with your growth.',
  },
}

export default function Features4() {
  return (
    <div className="space-y-6 sm:space-y-7 md:space-y-8 lg:space-y-10 mx-auto text-center">
      {/* Badge */}
      <SlideEffect>
        <Badge number={settings.badge.number} text={settings.badge.text} />
      </SlideEffect>

      {/* Title */}
      <TextRevealEffect className="text-2xl md:text-4xl lg:text-header text-transparent bg-clip-text bg-gradient-to-b from-black to-black/60 font-medium leading-normal">{settings.title}</TextRevealEffect>

      {/* Description */}
      <SlideEffect className="px-2 sm:px-10 md:px-0 w-full md:max-w-3/4 mx-auto text-sm lg:text-base">{settings.description}</SlideEffect>

      {/* Cards */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* card 1 */}
        <SlideEffect direction="top" className="grid-cols-1 lg:col-span-2 h-full" isSpring={false}>
          <Card className="flex flex-col lg:flex-row justify-center items-center">
            <div className="space-y-3 md:space-y-5 flex-1">
              <h3 className="text-xl md:text-title text-black font-medium">{settings.card_1.title}</h3>
              <p className="mb-8 lg:mb-16">{settings.card_1.content}</p>
              <Link href={settings.card_1.CTA.href}>
                <Button size="lg">{settings.card_1.CTA.content}</Button>
              </Link>
            </div>

            <Spinner labels={settings.card_1.labels} avatars={settings.card_1.avatars} />
          </Card>
        </SlideEffect>

        {/* card 2 */}
        <SlideEffect direction="right" className="col-span-1 h-full" isSpring={false}>
          <Card>
            <h3 className="text-xl md:text-title text-black font-medium">{settings.card_2.title}</h3>
            <p>{settings.card_2.content}</p>
          </Card>
        </SlideEffect>

        {/* card 3 */}
        <SlideEffect direction="left" delay={0.2} className="col-span-1 h-full" isSpring={false}>
          <Card>
            <h3 className="text-xl md:text-title text-black font-medium">{settings.card_3.title}</h3>
            <p>{settings.card_3.content}</p>
          </Card>
        </SlideEffect>
      </div>
    </div>
  )
}