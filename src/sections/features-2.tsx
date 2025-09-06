'use client'

import Badge from "@/components/badge"
import Card from "@/components/card"
import FadeEffect from "@/components/fade-effect"
import SlideEffect from "@/components/slide-effect"
import Image from "next/image"

const settings = {
  badge: {
    number: 3,
    text: 'INSTANT SUPERPOWERS',
  },
  title: 'Unlock Automated Intelligence',
  description: 'Use AI-powered insights to understand your customers, automate key workflows, and take action — instantly. BotBuddy connects your data, decisions, and operations in one intelligent dashboard.',
  card_1: {
    title: 'Understand What Drives Revenue',
    content: 'BotBuddy analyzes customer behavior, store activity, and campaign data to surface what truly moves your business. No more guesswork — just actionable signals.',
    image: 'https://framerusercontent.com/images/X87jAlbYbJ0hdTyTZ6QIMoQoOo.svg'
  },
  card_2: {
    title: 'Take Action with One Click',
    content: 'Go beyond tracking — automate. BotBuddy lets you act on insights instantly: segment customers, launch campaigns, notify teams, or schedule reports — all powered by intelligent AI agents.',
    image: 'https://framerusercontent.com/images/A718dQKmWnJEhhnu0SJfCGxzDM.svg'
  },
}

export default function Features2() {
  return (
    <div className="space-y-6 sm:space-y-7 md:space-y-8 lg:space-y-10 mx-auto text-center">
      {/* Badge */}
      <SlideEffect>
        <Badge number={settings.badge.number} text={settings.badge.text} />
      </SlideEffect>

      {/* Title */}
      <SlideEffect>
        <h2 className="text-2xl md:text-4xl lg:text-header capitalize text-transparent bg-clip-text bg-gradient-to-b from-black to-black/60 font-medium leading-normal">{settings.title}</h2>
      </SlideEffect>

      {/* Description */}
      <SlideEffect className="px-2 sm:px-10 md:px-0 w-full md:max-w-3/4 mx-auto text-sm lg:text-base">{settings.description}</SlideEffect>

      {/* Cards */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* card 1 */}
        <SlideEffect direction="right" className="col-span-1 h-full" isSpring={false}>
          <Card>
            <h3 className="text-xl md:text-title text-black font-medium">{settings.card_1.title}</h3>
            <p className="mb-4">{settings.card_1.content}</p>
            <Image src={settings.card_1.image} alt={settings.card_1.title} width={512} height={512} />
          </Card>
        </SlideEffect>

        {/* card 2 */}
        <SlideEffect direction="left" duration={1.3} className="col-span-1 h-full" isSpring={false}>
          <Card>
            <h3 className="text-xl md:text-title text-black font-medium">{settings.card_2.title}</h3>
            <p>{settings.card_2.content}</p>
            <div className="relative">
              <Image src={settings.card_2.image} alt={settings.card_1.title} width={512} height={512} />
              <FadeEffect color='secondary' />
            </div>
          </Card>
        </SlideEffect>
      </div>
    </div>
  )
}