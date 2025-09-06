'use client'

import { memo, useState } from "react"
import Badge from "@/components/badge"
import Card from "@/components/card"
import SlideEffect from "@/components/slide-effect"
import { Button } from "@/components/ui/button"

const ShopifyBadgeButton = memo(function ShopifyBadgeButton() {
  return (
  <div className="relative">
    <span className="absolute -top-6 left-0 text-xs text-gray-500 font-medium tracking-wide">FIND IT ON THE</span>
    <a
      href="https://apps.shopify.com/"
      target="_blank"
      rel="noopener noreferrer"
      style={{ textDecoration: "none" }}
    >
      <Button
        size="lg"
        variant="outline"
        className="flex items-center gap-4 px-6 py-4 rounded-xl border border-gray-300 bg-white shadow-sm hover:bg-gray-50"
        style={{ height: "72px" }}
      >
                                {/* Custom SVG Icon */}
               <img src="/shopify.svg" width="48" height="48" alt="Shopify" loading="lazy" />
         <div className="flex flex-col items-start text-left">
      <span className="text-lg font-semibold text-black leading-tight mb-3">Shopify App Store</span>
      <span className="flex items-center">
       {/* 5 stars */}
       {[...Array(5)].map((_, i) => (
         <svg key={i} width="16" height="16" viewBox="0 0 20 20" fill="#FFB829" style={{ marginRight: 2 }}>
           <polygon points="10,1 12.59,7.36 19.51,7.36 13.96,11.64 16.55,18 10,13.72 3.45,18 6.04,11.64 0.49,7.36 7.41,7.36"/>
         </svg>
       ))}
       <span className="ml-2 text-sm text-gray-700 font-semibold">5.0</span>
     </span>
   </div>
      </Button>
    </a>
  </div>
  );
});

const settings = {
  badge: {
    number: 1,
    text: 'AI-POWERED SOLUTIONS',
  },
  title: 'Shopify Apps That Work Like Agents',
  description: 'Harness the power of AI agents to automate operations, understand customers, and create seamless shopping experiences.',
  card_1: {
    title: 'AI Audience Insights',
    content: 'Unlock deep customer segmentation using behavior & AI clustering.',
    videoThumbnail: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=225&fit=crop&crop=center'
  },
  card_2: {
    title: 'AI Voice Pilot',
    content: 'Let customers interact with your store via voice commands.',
    videoThumbnail: 'https://images.unsplash.com/photo-1589254065878-42c9da997008?w=400&h=225&fit=crop&crop=center'
  },
  card_3: {
    title: 'AI Store Co-Pilot',
    content: 'Automate store operations like inventory, support & orders.',
    videoThumbnail: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=225&fit=crop&crop=center'
  },
}

const Features3 = memo(function Features3() {
  const [loadedVideos, setLoadedVideos] = useState<Set<number>>(new Set());

  const handleVideoLoad = (index: number) => {
    setLoadedVideos(prev => new Set(prev).add(index));
  };

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
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* card 1 */}
        <SlideEffect direction="top" className="col-span-1 h-full" isSpring={false}>
          <Card className="overflow-hidden">
                         <div className="relative mb-4">
               {!loadedVideos.has(0) ? (
                 <div 
                   className="w-full h-48 rounded-lg cursor-pointer group relative overflow-hidden"
                   onClick={() => handleVideoLoad(0)}
                 >
                   <img
                     src="https://img.youtube.com/vi/xNUx-rMGvvw/maxresdefault.jpg"
                     alt={settings.card_1.title}
                     className="w-full h-full object-cover"
                   />
                   <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center group-hover:bg-opacity-40 transition-all duration-300">
                     <div className="w-12 h-12 bg-[#a4c464] rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                       <svg className="w-6 h-6 text-white ml-1" fill="currentColor" viewBox="0 0 24 24">
                         <path d="M8 5v14l11-7z"/>
                       </svg>
                     </div>
                   </div>
                 </div>
               ) : (
                 <iframe
                   src="https://www.youtube.com/embed/xNUx-rMGvvw?modestbranding=1&rel=0&showinfo=0"
                   title={settings.card_1.title}
                   width="100%"
                   height="225"
                   className="w-full h-48 rounded-lg"
                   frameBorder="0"
                   allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                   allowFullScreen
                   loading="lazy"
                 ></iframe>
               )}
             </div>
            <h3 className="text-xl md:text-title text-black font-medium mb-3">{settings.card_1.title}</h3>
            <p className="text-gray-600">{settings.card_1.content}</p>
            <div className="mt-4 flex flex-col items-center gap-3">
              <ShopifyBadgeButton />
              <a href="#cta">
                <Button size="lg">Learn More</Button>
              </a>
            </div>
          </Card>
        </SlideEffect>

        {/* card 2 */}
        <SlideEffect direction="top" delay={0.2} className="col-span-1 h-full" isSpring={false}>
          <Card className="overflow-hidden">
                         <div className="relative mb-4">
               {!loadedVideos.has(1) ? (
                 <div 
                   className="w-full h-48 rounded-lg cursor-pointer group relative overflow-hidden"
                   onClick={() => handleVideoLoad(1)}
                 >
                   <img
                     src="https://img.youtube.com/vi/xNUx-rMGvvw/maxresdefault.jpg"
                     alt={settings.card_2.title}
                     className="w-full h-full object-cover"
                   />
                   <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center group-hover:bg-opacity-40 transition-all duration-300">
                     <div className="w-12 h-12 bg-[#a4c464] rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                       <svg className="w-6 h-6 text-white ml-1" fill="currentColor" viewBox="0 0 24 24">
                         <path d="M8 5v14l11-7z"/>
                       </svg>
                     </div>
                   </div>
                 </div>
               ) : (
                 <iframe
                   src="https://www.youtube.com/embed/xNUx-rMGvvw?modestbranding=1&rel=0&showinfo=0"
                   title={settings.card_2.title}
                   width="100%"
                   height="225"
                   className="w-full h-48 rounded-lg"
                   frameBorder="0"
                   allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                   allowFullScreen
                   loading="lazy"
                 ></iframe>
               )}
             </div>
            <h3 className="text-xl md:text-title text-black font-medium mb-3">{settings.card_2.title}</h3>
            <p className="text-gray-600">{settings.card_2.content}</p>
            <div className="mt-4 flex flex-col items-center gap-3">
              <ShopifyBadgeButton />
              <a href="#cta">
                <Button size="lg">Learn More</Button>
              </a>
            </div>
          </Card>
        </SlideEffect>

        {/* card 3 */}
        <SlideEffect direction="top" delay={0.3} className="col-span-1 h-full" isSpring={false}>
          <Card className="overflow-hidden">
                         <div className="relative mb-4">
               {!loadedVideos.has(2) ? (
                 <div 
                   className="w-full h-48 rounded-lg cursor-pointer group relative overflow-hidden"
                   onClick={() => handleVideoLoad(2)}
                 >
                   <img
                     src="https://img.youtube.com/vi/xNUx-rMGvvw/maxresdefault.jpg"
                     alt={settings.card_3.title}
                     className="w-full h-full object-cover"
                   />
                   <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center group-hover:bg-opacity-40 transition-all duration-300">
                     <div className="w-12 h-12 bg-[#a4c464] rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                       <svg className="w-6 h-6 text-white ml-1" fill="currentColor" viewBox="0 0 24 24">
                         <path d="M8 5v14l11-7z"/>
                       </svg>
                     </div>
                   </div>
                 </div>
               ) : (
                 <iframe
                   src="https://www.youtube.com/embed/xNUx-rMGvvw?modestbranding=1&rel=0&showinfo=0"
                   title={settings.card_3.title}
                   width="100%"
                   height="225"
                   className="w-full h-48 rounded-lg"
                   frameBorder="0"
                   allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                   allowFullScreen
                   loading="lazy"
                 ></iframe>
               )}
             </div>
            <h3 className="text-xl md:text-title text-black font-medium mb-3">{settings.card_3.title}</h3>
            <p className="text-gray-600">{settings.card_3.content}</p>
            <div className="mt-4 flex flex-col items-center gap-3">
              <ShopifyBadgeButton />
              <a href="#cta">
                <Button size="lg">Learn More</Button>
              </a>
            </div>
          </Card>
        </SlideEffect>
      </div>
    </div>
  )
});

export default Features3;