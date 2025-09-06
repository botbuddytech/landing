'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Search, Calendar, User, ArrowRight } from 'lucide-react'
import Card from '@/components/card'
import SlideEffect from '@/components/slide-effect'
import Image from 'next/image'
import Navbar from '@/components/navbar'
import Footer from '@/sections/footer'

const blogPosts = [
  {
    id: 1,
    title: "How AI Automation is Revolutionizing E-commerce",
    excerpt: "Discover how artificial intelligence is transforming the way businesses handle customer service, inventory management, and sales optimization.",
    category: "AI & Automation",
    author: "BotBuddy Team",
    date: "2024-01-15",
    readTime: "5 min read",
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&h=400&fit=crop",
    slug: "ai-automation-ecommerce-revolution"
  },
  {
    id: 2,
    title: "10 Shopify Apps Every Store Owner Needs",
    excerpt: "Essential Shopify applications that can boost your store's performance, increase sales, and improve customer experience.",
    category: "Shopify",
    author: "Sarah Chen",
    date: "2024-01-12",
    readTime: "7 min read",
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&h=400&fit=crop",
    slug: "10-shopify-apps-store-owners-need"
  },
  {
    id: 3,
    title: "Building Customer Loyalty with AI Chatbots",
    excerpt: "Learn how intelligent chatbots can enhance customer engagement and build lasting relationships with your audience.",
    category: "Customer Service",
    author: "Mike Johnson",
    date: "2024-01-10",
    readTime: "6 min read",
    image: "https://images.unsplash.com/photo-1551434678-e076c223a692?w=800&h=400&fit=crop",
    slug: "building-customer-loyalty-ai-chatbots"
  },
  {
    id: 4,
    title: "The Future of E-commerce: Trends to Watch in 2024",
    excerpt: "Explore the latest trends shaping the e-commerce landscape and how businesses can adapt to stay competitive.",
    category: "E-commerce",
    author: "Lisa Wang",
    date: "2024-01-08",
    readTime: "8 min read",
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&h=400&fit=crop",
    slug: "future-ecommerce-trends-2024"
  },
  {
    id: 5,
    title: "Automating Your Business: A Complete Guide",
    excerpt: "A comprehensive guide to implementing automation in your business processes for maximum efficiency and growth.",
    category: "Automation",
    author: "David Kim",
    date: "2024-01-05",
    readTime: "10 min read",
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&h=400&fit=crop",
    slug: "automating-business-complete-guide"
  },
  {
    id: 6,
    title: "Customer Support Automation: Best Practices",
    excerpt: "Discover the best practices for implementing automated customer support systems that actually improve customer satisfaction.",
    category: "Customer Service",
    author: "Emma Davis",
    date: "2024-01-03",
    readTime: "9 min read",
    image: "https://images.unsplash.com/photo-1551434678-e076c223a692?w=800&h=400&fit=crop",
    slug: "customer-support-automation-best-practices"
  }
]

const categories = [
  "All",
  "AI & Automation",
  "Shopify",
  "Customer Service",
  "E-commerce",
  "Automation"
]

export default function BlogPage() {
  const [selectedCategory, setSelectedCategory] = useState("All")
  const [searchQuery, setSearchQuery] = useState("")

  const filteredPosts = blogPosts.filter(post => {
    const matchesCategory = selectedCategory === "All" || post.category === selectedCategory
    const matchesSearch = post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         post.excerpt.toLowerCase().includes(searchQuery.toLowerCase())
    return matchesCategory && matchesSearch
  })

  return (
    <div className="min-h-screen bg-white">
      {/* Navbar */}
      <div className="max-w-6xl mx-auto px-4 py-6">
        <Navbar />
      </div>


      {/* Search and Filter */}
      <div className="max-w-6xl mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row gap-4 mb-8">
          {/* Search */}
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
            <input
              type="text"
              placeholder="Search articles..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#a4c464] focus:border-transparent"
            />
          </div>

          {/* Category Filter */}
          <div className="flex gap-2 overflow-x-auto pb-2 md:pb-0">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-lg whitespace-nowrap transition-colors ${
                  selectedCategory === category
                    ? 'bg-[#a4c464] text-black'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Blog Posts Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredPosts.map((post, index) => (
            <SlideEffect key={post.id} delay={index * 0.1}>
              <Card className="overflow-hidden hover:shadow-lg transition-shadow">
                <Link href={`/blog/${post.slug}`}>
                  <div className="aspect-video overflow-hidden">
                    <Image
                      src={post.image}
                      alt={post.title}
                      width={400}
                      height={225}
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                      priority={index < 3}
                    />
                  </div>
                  <div className="p-6">
                    <div className="flex items-center gap-2 mb-3">
                      <span className="px-3 py-1 bg-[#a4c464]/10 text-[#a4c464] text-sm rounded-full">
                        {post.category}
                      </span>
                      <span className="text-gray-500 text-sm">{post.readTime}</span>
                    </div>
                    <h3 className="text-xl font-semibold mb-3 line-clamp-2 hover:text-[#a4c464] transition-colors">
                      {post.title}
                    </h3>
                    <p className="text-gray-600 mb-4 line-clamp-3">
                      {post.excerpt}
                    </p>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-4 text-sm text-gray-500">
                        <div className="flex items-center gap-1">
                          <User size={14} />
                          {post.author}
                        </div>
                        <div className="flex items-center gap-1">
                          <Calendar size={14} />
                          {new Date(post.date).toLocaleDateString()}
                        </div>
                      </div>
                      <ArrowRight size={16} className="text-[#a4c464]" />
                    </div>
                  </div>
                </Link>
              </Card>
            </SlideEffect>
          ))}
        </div>

        {filteredPosts.length === 0 && (
          <div className="text-center py-16">
            <h3 className="text-xl font-semibold mb-2">No articles found</h3>
            <p className="text-gray-600">Try adjusting your search or filter criteria.</p>
          </div>
        )}
      </div>

      {/* Footer */}
      <Footer />
    </div>
  )
} 