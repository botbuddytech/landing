'use client'

import { useState, useRef } from 'react'
import { Search, Play, Download, TrendingUp, ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react'
import { Button } from '@/components/ui/button'
import Card from '@/components/card'
import SlideEffect from '@/components/slide-effect'
import TextBlurEffect from '@/components/text-blur-effect'
import Image from 'next/image'
import Navbar from '@/components/navbar'
import Footer from '@/sections/footer'

const resourceCategories = [
  {
    id: 'ecommerce',
    title: 'Ecommerce',
    description: 'Shopify apps, marketing strategies, and ecommerce optimization',
    icon: '🛒',
    color: 'bg-blue-50 border-blue-200',
    videos: [
      {
        id: 1,
        title: 'Shopify Apps Review - Top 10 Must-Have Apps',
        description: 'Discover the best Shopify apps that can transform your store performance',
        thumbnail: 'https://img.youtube.com/vi/dQw4w9WgXcQ/maxresdefault.jpg',
        videoId: 'dQw4w9WgXcQ',
        duration: '12:34',
        views: '2.5K',
        date: '2024-01-15'
      },
      {
        id: 2,
        title: 'Shopify Marketing Strategies That Actually Work',
        description: 'Learn proven marketing strategies to boost your Shopify store sales',
        thumbnail: 'https://img.youtube.com/vi/dQw4w9WgXcQ/maxresdefault.jpg',
        videoId: 'dQw4w9WgXcQ',
        duration: '18:45',
        views: '1.8K',
        date: '2024-01-10'
      },
      {
        id: 3,
        title: 'Latest Shopify Updates & New Features',
        description: 'Stay updated with the newest Shopify features and development updates',
        thumbnail: 'https://img.youtube.com/vi/dQw4w9WgXcQ/maxresdefault.jpg',
        videoId: 'dQw4w9WgXcQ',
        duration: '15:22',
        views: '3.2K',
        date: '2024-01-08'
      }
    ],
    offers: [
      { title: 'FREE Shopify Site Audit', type: 'audit' },
      { title: '30 Days Action Plan', type: 'plan' },
      // { title: 'Download our Shopify Apps', type: 'download' },
      { title: 'Consult for AI transformation', type: 'consultation' }
    ]
  },
  {
    id: 'saas',
    title: 'SaaS & Automation',
    description: 'N8N flows, prompts engineering, and automation tools',
    icon: '⚙️',
    color: 'bg-green-50 border-green-200',
    videos: [
      {
        id: 4,
        title: 'N8N Flows for Ecommerce Automation',
        description: 'Build powerful automation workflows with N8N for your business',
        thumbnail: 'https://img.youtube.com/vi/dQw4w9WgXcQ/maxresdefault.jpg',
        videoId: 'dQw4w9WgXcQ',
        duration: '25:10',
        views: '1.2K',
        date: '2024-01-12'
      },
      {
        id: 5,
        title: 'SEO AI Tools - Complete Guide',
        description: 'Master SEO with the latest AI-powered tools and techniques',
        thumbnail: 'https://img.youtube.com/vi/dQw4w9WgXcQ/maxresdefault.jpg',
        videoId: 'dQw4w9WgXcQ',
        duration: '22:15',
        views: '2.1K',
        date: '2024-01-05'
      },
      {
        id: 6,
        title: 'Prompt Engineering for Business',
        description: 'Learn how to write effective prompts for AI tools',
        thumbnail: 'https://img.youtube.com/vi/dQw4w9WgXcQ/maxresdefault.jpg',
        videoId: 'dQw4w9WgXcQ',
        duration: '19:30',
        views: '1.5K',
        date: '2024-01-03'
      }
    ],
    offers: []
  },
  {
    id: 'marketing',
    title: 'Marketing & Advertising',
    description: 'Video marketing, Facebook ads, and ROAS optimization',
    icon: '📈',
    color: 'bg-purple-50 border-purple-200',
    videos: [
      {
        id: 7,
        title: 'Video Marketing Strategies That Convert',
        description: 'Create compelling video content that drives sales and engagement',
        thumbnail: 'https://img.youtube.com/vi/dQw4w9WgXcQ/maxresdefault.jpg',
        videoId: 'dQw4w9WgXcQ',
        duration: '16:45',
        views: '2.8K',
        date: '2024-01-14'
      },
      {
        id: 8,
        title: 'Facebook Ads Champion - Complete Guide',
        description: 'Master Facebook advertising with proven strategies and techniques',
        thumbnail: 'https://img.youtube.com/vi/dQw4w9WgXcQ/maxresdefault.jpg',
        videoId: 'dQw4w9WgXcQ',
        duration: '28:20',
        views: '3.5K',
        date: '2024-01-11'
      },
      {
        id: 9,
        title: 'ROAS Optimization Strategies',
        description: 'Maximize your return on ad spend with these proven techniques',
        thumbnail: 'https://img.youtube.com/vi/dQw4w9WgXcQ/maxresdefault.jpg',
        videoId: 'dQw4w9WgXcQ',
        duration: '21:15',
        views: '2.3K',
        date: '2024-01-09'
      },
      {
        id: 10,
        title: 'Advanced Targeting Strategies',
        description: 'Learn advanced audience targeting techniques for better ad performance',
        thumbnail: 'https://img.youtube.com/vi/dQw4w9WgXcQ/maxresdefault.jpg',
        videoId: 'dQw4w9WgXcQ',
        duration: '24:30',
        views: '1.9K',
        date: '2024-01-07'
      }
    ],
    offers: []
  },
  {
    id: 'crm',
    title: 'CRM & Data Management',
    description: 'Zoho use cases, data collection, and CRM software',
    icon: '👥',
    color: 'bg-orange-50 border-orange-200',
    videos: [
      {
        id: 11,
        title: 'Zoho CRM Use Cases for Ecommerce',
        description: 'Discover how to use Zoho CRM effectively for your online business',
        thumbnail: 'https://img.youtube.com/vi/dQw4w9WgXcQ/maxresdefault.jpg',
        videoId: 'dQw4w9WgXcQ',
        duration: '20:45',
        views: '1.6K',
        date: '2024-01-13'
      },
      {
        id: 12,
        title: 'Data Collection for AI - Best Practices',
        description: 'Learn what data to collect and how to structure it for AI applications',
        thumbnail: 'https://img.youtube.com/vi/dQw4w9WgXcQ/maxresdefault.jpg',
        videoId: 'dQw4w9WgXcQ',
        duration: '18:20',
        views: '1.4K',
        date: '2024-01-06'
      },
      {
        id: 13,
        title: 'Free CRM Software Comparison',
        description: 'Compare the best free CRM solutions for small businesses',
        thumbnail: 'https://img.youtube.com/vi/dQw4w9WgXcQ/maxresdefault.jpg',
        videoId: 'dQw4w9WgXcQ',
        duration: '14:30',
        views: '2.7K',
        date: '2024-01-04'
      }
    ],
    offers: []
  },
  {
    id: 'accounting',
    title: 'Accounting & Compliance',
    description: 'Tally ERP, Zoho Books, GDPR, and business registrations',
    icon: '📊',
    color: 'bg-red-50 border-red-200',
    videos: [
      {
        id: 14,
        title: 'Tally ERP for Ecommerce Businesses',
        description: 'Set up and manage your accounting with Tally ERP',
        thumbnail: 'https://img.youtube.com/vi/dQw4w9WgXcQ/maxresdefault.jpg',
        videoId: 'dQw4w9WgXcQ',
        duration: '26:15',
        views: '1.8K',
        date: '2024-01-16'
      },
      {
        id: 15,
        title: 'Zoho Books - Complete Setup Guide',
        description: 'Learn how to set up and use Zoho Books for your business',
        thumbnail: 'https://img.youtube.com/vi/dQw4w9WgXcQ/maxresdefault.jpg',
        videoId: 'dQw4w9WgXcQ',
        duration: '22:40',
        views: '1.3K',
        date: '2024-01-12'
      },
      {
        id: 16,
        title: 'GDPR Compliance for Ecommerce',
        description: 'Ensure your online store complies with GDPR regulations',
        thumbnail: 'https://img.youtube.com/vi/dQw4w9WgXcQ/maxresdefault.jpg',
        videoId: 'dQw4w9WgXcQ',
        duration: '19:55',
        views: '2.0K',
        date: '2024-01-10'
      },
      {
        id: 17,
        title: 'Company Registration Process',
        description: 'Step-by-step guide to registering your business',
        thumbnail: 'https://img.youtube.com/vi/dQw4w9WgXcQ/maxresdefault.jpg',
        videoId: 'dQw4w9WgXcQ',
        duration: '17:25',
        views: '1.7K',
        date: '2024-01-08'
      }
    ],
    offers: []
  }
]

export default function ResourcesPage() {
  const [selectedCategory, setSelectedCategory] = useState('all')
  const [searchQuery, setSearchQuery] = useState("")
  const scrollRefs = useRef<{ [key: string]: HTMLDivElement | null }>({})

  const filteredCategories = resourceCategories.filter(category => {
    if (selectedCategory !== 'all' && category.id !== selectedCategory) return false
    if (searchQuery) {
      const matchesSearch = category.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          category.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          category.videos.some(video => 
                            video.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                            video.description.toLowerCase().includes(searchQuery.toLowerCase())
                          )
      return matchesSearch
    }
    return true
  })

  const handleVideoClick = (videoId: string) => {
    window.open(`https://www.youtube.com/watch?v=${videoId}`, '_blank')
  }

  const handleOfferClick = (offer: any) => {
    // Handle different offer types
    switch (offer.type) {
      case 'audit':
        alert('Redirecting to Shopify Site Audit form...')
        break
      case 'plan':
        alert('Redirecting to 30 Days Action Plan...')
        break
      case 'download':
        alert('Downloading Shopify Apps...')
        break
      case 'consultation':
        alert('Redirecting to AI transformation consultation...')
        break
      default:
        alert('Processing your request...')
    }
  }

  const scrollLeft = (categoryId: string) => {
    const scrollContainer = scrollRefs.current[categoryId]
    if (scrollContainer) {
      const cardWidth = 320 // w-80 = 320px
      const gap = 24 // gap-6 = 24px
      const scrollAmount = cardWidth + gap
      scrollContainer.scrollBy({ left: -scrollAmount, behavior: 'smooth' })
    }
  }

  const scrollRight = (categoryId: string) => {
    const scrollContainer = scrollRefs.current[categoryId]
    if (scrollContainer) {
      const cardWidth = 320 // w-80 = 320px
      const gap = 24 // gap-6 = 24px
      const scrollAmount = cardWidth + gap
      scrollContainer.scrollBy({ left: scrollAmount, behavior: 'smooth' })
    }
  }

  return (
    <>
      <div className="px-4 xl:px-0 max-w-5xl mx-auto space-y-12 sm:space-y-16 md:space-y-20 lg:space-y-24 scroll-smooth">
        {/* Header Section */}
        <div className="space-y-8 md:space-y-12 lg:space-y-16 z-50 relative">
          <Navbar />

          <section className="flex flex-col gap-6 lg:gap-8 items-center text-center">
            {/* Badge */}
            {/* <SlideEffect>
              <Badge number={1} text="LEARNING RESOURCES" />
            </SlideEffect> */}

            {/* Headline */}
            <h1 className="text-black text-4xl md:text-6xl lg:text-hero font-medium tracking-tight leading-none xl:max-w-3/4">
              <TextBlurEffect className='text-transparent bg-clip-text bg-gradient-to-b from-black to-black/60'>
                Resources Hub
              </TextBlurEffect>
            </h1>

            {/* Sub-headline */}
            <SlideEffect
              delay={0}
              className="text-sm lg:text-base px-6 sm:px-10 md:px-0 md:max-w-3/4 mx-auto"
            >
              Access our comprehensive library of YouTube videos, tutorials, and free resources to help you master ecommerce, automation, and business growth.
            </SlideEffect>

            {/* Search and Filter */}
            <SlideEffect className="w-full max-w-4xl">
              <div className="flex flex-col md:flex-row gap-4">
                <div className="relative flex-1">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
                  <input
                    type="text"
                    placeholder="Search videos and resources..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#a4c464] focus:border-transparent"
                  />
                </div>

                <select
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                  className="px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#a4c464] focus:border-transparent"
                >
                  <option value="all">All Categories</option>
                  {resourceCategories.map(category => (
                    <option key={category.id} value={category.id}>{category.title}</option>
                  ))}
                </select>
              </div>
            </SlideEffect>

            {/* Free Offers & Downloads */}
            <SlideEffect>
              <div className="w-full max-w-4xl">
                <h3 className="text-xl font-semibold mb-6 text-center">Free Offers & Downloads</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {resourceCategories.flatMap(category => category.offers).map((offer, index) => (
                    <Button
                      key={index}
                      variant="outline"
                      className="group h-auto p-4 border-2 border-gray-200 hover:border-[#a4c464] hover:bg-[#a4c464] hover:text-white transition-all duration-300 hover:scale-105 hover:shadow-lg"
                      onClick={() => handleOfferClick(offer)}
                    >
                      <div className="flex items-center gap-4 w-full">
                        <div className="flex-shrink-0">
                          <div className="w-12 h-12 bg-[#a4c464]/10 group-hover:bg-white/20 rounded-lg flex items-center justify-center transition-colors">
                            <Download size={20} className="text-[#a4c464] group-hover:text-white transition-colors" />
                          </div>
                        </div>
                        <div className="flex-1 text-left">
                          <span className="text-sm font-medium block">{offer.title}</span>
                          <span className="text-xs text-gray-500 group-hover:text-white/80 transition-colors">
                            Click to access
                          </span>
                        </div>
                        <div className="flex-shrink-0">
                          <ArrowRight size={16} className="text-gray-400 group-hover:text-white transition-colors" />
                        </div>
                      </div>
                    </Button>
                  ))}
                </div>
              </div>
            </SlideEffect>
          </section>
        </div>

        {/* Resource Categories */}
        <div className="space-y-8 sm:space-y-10 md:space-y-12 lg:space-y-16">
          {filteredCategories.map((category, categoryIndex) => (
            <SlideEffect key={category.id} delay={categoryIndex * 0.1}>
              <div className="space-y-6 sm:space-y-8 md:space-y-10 lg:space-y-12">
                {/* Category Header */}
                <div className="text-center">
                  <div className="flex items-center justify-center gap-4 mb-4">
                    <span className="text-4xl">{category.icon}</span>
                    <h2 className="text-2xl md:text-4xl lg:text-header capitalize text-transparent bg-clip-text bg-gradient-to-b from-black to-black/60 font-medium leading-normal">
                      {category.title}
                    </h2>
                  </div>
                  <SlideEffect className="px-2 sm:px-10 md:px-0 w-full md:max-w-3/4 mx-auto text-sm lg:text-base">
                    {category.description}
                  </SlideEffect>
                </div>

                {/* Videos Grid - Horizontal Scroll with Navigation */}
                <div className="relative group/slider">
                  {/* Navigation Buttons */}
                  <button
                    onClick={() => scrollLeft(category.id)}
                    className="absolute left-2 top-1/2 transform -translate-y-1/2 z-10 bg-white hover:bg-gray-50 shadow-lg rounded-full p-3 opacity-0 group-hover/slider:opacity-100 transition-all duration-300 hover:scale-110"
                  >
                    <ChevronLeft size={20} className="text-gray-700" />
                  </button>
                  
                  <button
                    onClick={() => scrollRight(category.id)}
                    className="absolute right-2 top-1/2 transform -translate-y-1/2 z-10 bg-white hover:bg-gray-50 shadow-lg rounded-full p-3 opacity-0 group-hover/slider:opacity-100 transition-all duration-300 hover:scale-110"
                  >
                    <ChevronRight size={20} className="text-gray-700" />
                  </button>

                  {/* Scrollable Container */}
                  <div 
                    ref={(el) => {
                      scrollRefs.current[category.id] = el
                    }}
                    className="overflow-x-auto scrollbar-hide scroll-smooth"
                  >
                    <div className="flex gap-6 pb-4 min-w-max">
                      {category.videos.map((video, index) => (
                        <SlideEffect key={video.id} direction="top" className="flex-shrink-0 w-80" isSpring={false}>
                          <Card className="overflow-hidden hover:shadow-lg transition-shadow h-full">
                            <div className="relative group/video cursor-pointer" onClick={() => handleVideoClick(video.videoId)}>
                              <div className="aspect-video overflow-hidden">
                                <Image
                                  src={video.thumbnail}
                                  alt={video.title}
                                  width={320}
                                  height={180}
                                  className="w-full h-full object-cover group-hover/video:scale-105 transition-transform duration-300"
                                  priority={index < 3}
                                />
                                <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover/video:opacity-100 transition-opacity">
                                  <Play className="text-white" size={48} />
                                </div>
                              </div>
                            </div>
                            
                            <div className="p-4">
                              <h3 className="font-semibold line-clamp-2">{video.title}</h3>
                            </div>
                          </Card>
                        </SlideEffect>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Offers Section */}
                {/* Removed individual offers section */}
              </div>
            </SlideEffect>
          ))}
        </div>

        {/* Call to Action */}
        <div className="space-y-6 sm:space-y-8 md:space-y-10 lg:space-y-12">
          <SlideEffect>
            <div className="text-center">
              <h2 className="text-2xl md:text-4xl lg:text-header capitalize text-transparent bg-clip-text bg-gradient-to-b from-black to-black/60 font-medium leading-normal mb-6">
                Ready to Transform Your Business?
              </h2>
              <SlideEffect className="px-2 sm:px-10 md:px-0 w-full md:max-w-3/4 mx-auto text-sm lg:text-base mb-8">
                Get personalized consultation and custom automation solutions for your business.
              </SlideEffect>
              
              <SlideEffect className="flex flex-col md:flex-row items-center w-full justify-center gap-3 md:gap-4">
                <Button size='lg' className="capitalize w-full md:w-auto bg-[#a4c464] hover:bg-[#8ab84a]">
                  Book Free Consultation
                  <ArrowRight />
                </Button>
                <Button size='lg' className="capitalize w-full md:w-auto" variant='outline'>
                  View All Videos
                  <TrendingUp size={16} />
                </Button>
              </SlideEffect>
            </div>
          </SlideEffect>
        </div>

        <Footer />
      </div>
    </>
  )
} 