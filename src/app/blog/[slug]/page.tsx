'use client'

import { useParams } from 'next/navigation'
import Link from 'next/link'
import { Calendar, User, Clock, Facebook, Twitter, Linkedin } from 'lucide-react'
import { Button } from '@/components/ui/button'
import SlideEffect from '@/components/slide-effect'
import TextRevealEffect from '@/components/text-reveal-effect'
import Image from 'next/image'
import Navbar from '@/components/navbar'
import Footer from '@/sections/footer'

const blogPosts = [
  {
    id: 1,
    title: "How AI Automation is Revolutionizing E-commerce",
    content: `
      <p class="mb-6">The e-commerce landscape is undergoing a dramatic transformation, driven by the rapid adoption of artificial intelligence and automation technologies. As businesses strive to meet the ever-increasing demands of modern consumers, AI has emerged as a game-changing solution that's reshaping how we think about online retail.</p>
      
      <h2 class="text-2xl font-bold mb-4 mt-8">The Rise of AI in E-commerce</h2>
      <p class="mb-6">Artificial intelligence is no longer a futuristic concept—it's here, and it's fundamentally changing how e-commerce businesses operate. From personalized shopping experiences to automated customer service, AI is becoming an integral part of successful online retail strategies.</p>
      
      <h3 class="text-xl font-semibold mb-3 mt-6">Key Areas Where AI is Making an Impact</h3>
      <ul class="list-disc pl-6 mb-6 space-y-2">
        <li><strong>Customer Service Automation:</strong> AI-powered chatbots are handling customer inquiries 24/7, providing instant responses and reducing wait times.</li>
        <li><strong>Personalized Recommendations:</strong> Machine learning algorithms analyze customer behavior to suggest products that match individual preferences.</li>
        <li><strong>Inventory Management:</strong> Predictive analytics help businesses optimize stock levels and reduce waste.</li>
        <li><strong>Dynamic Pricing:</strong> AI systems adjust prices in real-time based on market conditions and demand.</li>
      </ul>
      
      <h2 class="text-2xl font-bold mb-4 mt-8">Benefits for Business Owners</h2>
      <p class="mb-6">The implementation of AI automation in e-commerce offers numerous advantages that directly impact the bottom line:</p>
      
      <div class="bg-gray-50 p-6 rounded-lg mb-6">
        <h4 class="font-semibold mb-3">Increased Efficiency</h4>
        <p class="mb-4">Automated processes reduce manual workload, allowing teams to focus on strategic initiatives rather than repetitive tasks.</p>
        
        <h4 class="font-semibold mb-3">Enhanced Customer Experience</h4>
        <p class="mb-4">AI-powered personalization creates more engaging shopping experiences that drive customer loyalty and repeat purchases.</p>
        
        <h4 class="font-semibold mb-3">Cost Reduction</h4>
        <p class="mb-4">Automation reduces operational costs while improving service quality and response times.</p>
      </div>
      
      <h2 class="text-2xl font-bold mb-4 mt-8">Looking Ahead</h2>
      <p class="mb-6">As AI technology continues to evolve, we can expect even more sophisticated automation solutions that will further revolutionize the e-commerce industry. Businesses that embrace these technologies early will have a significant competitive advantage.</p>
      
      <p class="mb-6">The future of e-commerce is automated, intelligent, and customer-centric. Are you ready to join the revolution?</p>
    `,
    category: "AI & Automation",
    author: "BotBuddy Team",
    date: "2024-01-15",
    readTime: "5 min read",
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=1200&h=600&fit=crop",
    slug: "ai-automation-ecommerce-revolution",
    excerpt: "Discover how artificial intelligence is transforming the way businesses handle customer service, inventory management, and sales optimization."
  },
  {
    id: 2,
    title: "10 Shopify Apps Every Store Owner Needs",
    content: `
      <p class="mb-6">Running a successful Shopify store requires more than just great products—you need the right tools to optimize your operations, enhance customer experience, and drive sales growth.</p>
      
      <h2 class="text-2xl font-bold mb-4 mt-8">Essential Shopify Applications</h2>
      <p class="mb-6">Here are the top 10 Shopify apps that can transform your store's performance and help you achieve your business goals.</p>
      
      <h3 class="text-xl font-semibold mb-3 mt-6">1. Customer Service Automation</h3>
      <p class="mb-4">Implement AI-powered chatbots to handle customer inquiries around the clock, reducing response times and improving customer satisfaction.</p>
      
      <h3 class="text-xl font-semibold mb-3 mt-6">2. Email Marketing Automation</h3>
      <p class="mb-4">Set up automated email campaigns to nurture leads, recover abandoned carts, and keep customers engaged with your brand.</p>
      
      <h3 class="text-xl font-semibold mb-3 mt-6">3. Inventory Management</h3>
      <p class="mb-4">Track stock levels, set up low-stock alerts, and automate reorder processes to prevent stockouts and optimize inventory.</p>
      
      <h3 class="text-xl font-semibold mb-3 mt-6">4. Social Proof & Reviews</h3>
      <p class="mb-4">Display customer reviews, ratings, and social proof to build trust and increase conversion rates.</p>
      
      <h3 class="text-xl font-semibold mb-3 mt-6">5. Advanced Analytics</h3>
      <p class="mb-4">Gain deep insights into customer behavior, sales patterns, and performance metrics to make data-driven decisions.</p>
      
      <h2 class="text-2xl font-bold mb-4 mt-8">Implementation Strategy</h2>
      <p class="mb-6">When implementing these apps, consider your business needs and start with the most critical applications for your specific use case.</p>
    `,
    category: "Shopify",
    author: "Sarah Chen",
    date: "2024-01-12",
    readTime: "7 min read",
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=1200&h=600&fit=crop",
    slug: "10-shopify-apps-store-owners-need",
    excerpt: "Essential Shopify applications that can boost your store's performance, increase sales, and improve customer experience."
  }
]

const relatedPosts = [
  {
    id: 3,
    title: "Building Customer Loyalty with AI Chatbots",
    excerpt: "Learn how intelligent chatbots can enhance customer engagement and build lasting relationships with your audience.",
    category: "Customer Service",
    author: "Mike Johnson",
    date: "2024-01-10",
    readTime: "6 min read",
    image: "https://images.unsplash.com/photo-1551434678-e076c223a692?w=400&h=200&fit=crop",
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
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=400&h=200&fit=crop",
    slug: "future-ecommerce-trends-2024"
  }
]

export default function BlogPostPage() {
  const params = useParams()
  const slug = params.slug as string
  
  const post = blogPosts.find(p => p.slug === slug)
  
  if (!post) {
    return (
      <div className="min-h-screen bg-white">
        {/* Navbar */}
        <div className="max-w-6xl mx-auto px-4 py-6">
          <Navbar />
        </div>
        
        <div className="flex items-center justify-center min-h-[60vh]">
          <div className="text-center">
            <h1 className="text-2xl font-bold mb-4">Article Not Found</h1>
            <p className="text-gray-600 mb-6">The article you&apos;re looking for doesn&apos;t exist.</p>
            <Link href="/blog">
              <Button>Back to Blog</Button>
            </Link>
          </div>
        </div>

        {/* Footer */}
        <Footer />
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Navbar */}
      <div className="max-w-6xl mx-auto px-4 py-6">
        <Navbar />
      </div>

      {/* Article Header */}
      <div className="max-w-4xl mx-auto px-4 mb-12">
        <SlideEffect>
          <div className="mb-8">
            <span className="px-3 py-1 bg-[#a4c464]/10 text-[#a4c464] text-sm rounded-full">
              {post.category}
            </span>
          </div>
          
          <TextRevealEffect className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            {post.title}
          </TextRevealEffect>
          
          <p className="text-xl text-gray-600 mb-8">
            {post.excerpt}
          </p>
          
          <div className="flex items-center gap-6 text-sm text-gray-500 mb-8">
            <div className="flex items-center gap-2">
              <User size={16} />
              {post.author}
            </div>
            <div className="flex items-center gap-2">
              <Calendar size={16} />
              {new Date(post.date).toLocaleDateString()}
            </div>
            <div className="flex items-center gap-2">
              <Clock size={16} />
              {post.readTime}
            </div>
          </div>
        </SlideEffect>
      </div>

      {/* Featured Image */}
      <div className="max-w-4xl mx-auto px-4 mb-12">
        <SlideEffect>
          <div className="aspect-video overflow-hidden rounded-lg">
            <Image
              src={post.image}
              alt={post.title}
              width={800}
              height={450}
              className="w-full h-full object-cover"
              priority
            />
          </div>
        </SlideEffect>
      </div>

      {/* Article Content */}
      <div className="max-w-4xl mx-auto px-4 mb-16">
        <div className="prose prose-lg max-w-none">
          <div dangerouslySetInnerHTML={{ __html: post.content }} />
        </div>
      </div>

      {/* Share Section */}
      <div className="max-w-4xl mx-auto px-4 mb-16">
        <div className="border-t border-gray-200 pt-8">
          <div className="flex items-center justify-between">
            <h3 className="text-lg font-semibold">Share this article</h3>
            <div className="flex gap-3">
              <button className="p-2 rounded-full bg-gray-100 hover:bg-[#a4c464] hover:text-white transition-colors">
                <Facebook size={16} />
              </button>
              <button className="p-2 rounded-full bg-gray-100 hover:bg-[#a4c464] hover:text-white transition-colors">
                <Twitter size={16} />
              </button>
              <button className="p-2 rounded-full bg-gray-100 hover:bg-[#a4c464] hover:text-white transition-colors">
                <Linkedin size={16} />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Related Posts */}
      <div className="max-w-4xl mx-auto px-4 mb-16">
        <h3 className="text-2xl font-bold mb-8">Related Articles</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {relatedPosts.map((relatedPost, index) => (
            <SlideEffect key={relatedPost.id} delay={index * 0.1}>
              <Link href={`/blog/${relatedPost.slug}`} className="block group">
                <div className="aspect-video overflow-hidden rounded-lg mb-4">
                  <Image
                    src={relatedPost.image}
                    alt={relatedPost.title}
                    width={400}
                    height={225}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="mb-3">
                  <span className="px-3 py-1 bg-[#a4c464]/10 text-[#a4c464] text-sm rounded-full">
                    {relatedPost.category}
                  </span>
                </div>
                <h4 className="text-xl font-semibold mb-2 group-hover:text-[#a4c464] transition-colors">
                  {relatedPost.title}
                </h4>
                <p className="text-gray-600 mb-3 line-clamp-2">
                  {relatedPost.excerpt}
                </p>
                <div className="flex items-center gap-4 text-sm text-gray-500">
                  <span>{relatedPost.author}</span>
                  <span>{new Date(relatedPost.date).toLocaleDateString()}</span>
                </div>
              </Link>
            </SlideEffect>
          ))}
        </div>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  )
} 