'use client'

import Navbar from "@/components/navbar";
import SlideEffect from "@/components/slide-effect";
import TextBlurEffect from "@/components/text-blur-effect";
import { Button } from "@/components/ui/button";
import { ArrowRight, Star } from "lucide-react";
import Link from "next/link";
import { AnimatedTooltip } from "@/components/ui/animated-tooltip";
import { useState } from "react";

const settings = {
  headline: 'We Build AI Bots - With You',
  subheadline: 'BotBuddy is a AI Automation agency creating AI-powered Agents that helps you build bots to run and automate your business.',
  mainCTA: {
    content: 'Explore Our Shopify Apps & Saas Products',
    href: '#features'
  },
  secondaryCTA: {
    content: 'Book Consultation',
    href: '#contact'
  },
  illustration: '/illustration.svg',
  reviews: [
    {
      name: "John Doe",
      designation: "Software Engineer",
      image:
        "https://images.unsplash.com/photo-1599566150163-29194dcaad36?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3387&q=80",
    },
    {
      name: "Robert Johnson",
      designation: "Product Manager",
      image:
        "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YXZhdGFyfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
    },
    {
      name: "Jane Smith",
      designation: "Data Scientist",
      image:
        "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8YXZhdGFyfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
    },
    {
      name: "Emily Davis",
      designation: "UX Designer",
      image:
        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGF2YXRhcnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
    },
    {
      name: "Tyler Durden",
      designation: "Soap Developer",
      image:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3540&q=80",
    }
  ]
}

export default function Hero() {
  const [videoLoaded, setVideoLoaded] = useState(false);

  return (
    <div className="space-y-12 md:space-y-20 lg:space-y-28 z-50 relative">
      <Navbar />

      <section className="flex flex-col gap-8 lg:gap-11 items-center text-center">
        {/* Headline */}
        <h1 className="text-black text-4xl md:text-6xl lg:text-hero font-medium tracking-tight leading-none xl:max-w-3/4">
          <TextBlurEffect className='text-transparent bg-clip-text bg-gradient-to-b from-black to-black/60'>{settings.headline}</TextBlurEffect>
        </h1>

        {/* Sub-headline */}
        <SlideEffect
          delay={0}
          className="text-sm lg:text-base px-6 sm:px-10 md:px-0 md:max-w-3/4 mx-auto"
        >
          {settings.subheadline}
        </SlideEffect>

        {/* CTA */}
        <SlideEffect
          className="flex flex-col gap-8 md:gap-5 items-center justify-center w-full md:w-fit"
        >
          {/* Buttons */}
          <div className="flex flex-col md:flex-row items-center w-full justify-center gap-3 md:gap-4 mt-1">
            <Link href={settings.mainCTA.href} className="w-full">
              <Button size='lg' className="capitalize w-full hidden lg:flex">
                {settings.mainCTA.content}
                <ArrowRight />
              </Button>

              <Button size='default' className="capitalize w-full flex lg:hidden">
                {settings.mainCTA.content}
                <ArrowRight />
              </Button>
            </Link>

            <Link href={settings.secondaryCTA.href} className="w-full">
              <Button size='lg' className="capitalize w-full hidden lg:flex" variant='outline'>
                {settings.secondaryCTA.content}
              </Button>

              <Button size='default' className="capitalize w-full flex lg:hidden" variant='outline'>
                {settings.secondaryCTA.content}
              </Button>
            </Link>
          </div>

          {/* Reviews */}
          <div className="flex flex-col md:flex-row gap-2 md:gap-5 justify-center">
            <AnimatedTooltip items={settings.reviews} />

            <div className="flex flex-col justify-center items-center md:items-start gap-1 md:gap-2">
              <div className="flex gap-px">
                <Star size={16} fill='oklch(0.795 0.184 86.047)' className="text-yellow-500" />
                <Star size={16} fill='oklch(0.795 0.184 86.047)' className="text-yellow-500" />
                <Star size={16} fill='oklch(0.795 0.184 86.047)' className="text-yellow-500" />
                <Star size={16} fill='oklch(0.795 0.184 86.047)' className="text-yellow-500" />
                <Star size={16} fill='oklch(0.795 0.184 86.047)' className="text-yellow-500" />
              </div>

              <span className="text-xs">Trusted by 500+ Customers</span>
            </div>
          </div>
        </SlideEffect>

        {/* Illustration - Lazy-loaded YouTube video */}
        <div className="fade-in" style={{ position: "relative", width: "100%", paddingBottom: "56.25%", borderRadius: "1rem", overflow: "hidden" }}>
          {!videoLoaded && (
            <div 
              className="absolute inset-0 cursor-pointer group"
              onClick={() => setVideoLoaded(true)}
            >
              <img
                src="https://img.youtube.com/vi/jX4dLxiso6A/maxresdefault.jpg"
                alt="Video thumbnail"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center group-hover:bg-opacity-40 transition-all duration-300">
                <div className="w-16 h-16 bg-[#a4c464] rounded-full flex items-center justify-center mx-auto group-hover:scale-110 transition-transform duration-300">
                  <svg className="w-8 h-8 text-white ml-1" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M8 5v14l11-7z"/>
                  </svg>
                </div>
              </div>
            </div>
          )}
          {videoLoaded && (
            <iframe
              src="https://www.youtube.com/embed/jX4dLxiso6A?modestbranding=1&rel=0&showinfo=0"
              title="YouTube video"
              style={{
                position: "absolute",
                top: 0,
                left: 0,
                width: "100%",
                height: "100%",
                border: 0
              }}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              loading="lazy"
            ></iframe>
          )}
        </div>

        {/* Add fade-in CSS */}
        <style jsx>{`
          .fade-in {
            opacity: 0;
            animation: fadeIn 1.2s ease-in 0.2s forwards;
          }
          @keyframes fadeIn {
            to {
              opacity: 1;
            }
          }
        `}</style>
        {/* <SlideEffect className="relative" isSpring={false} duration={1.3}>
          <div style={{ position: "relative", width: "100%", paddingBottom: "56.25%", borderRadius: "1rem", overflow: "hidden" }}>
            <iframe ... />
          </div>
          <FadeEffect />
        </SlideEffect> */}
      </section>
    </div>
  )
}