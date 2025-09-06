'use client'

import Card from "@/components/card"
import SlideEffect from "@/components/slide-effect"
import { Button } from "@/components/ui/button"
import { CircleCheck } from "lucide-react"

const settings = {
  title: 'Pricing',
  description: 'Discover the benefits of AI-powered Shopify automation with a free 30-day trial with no credit card required. Starting at only $29 per month for unlimited customer interactions.',
  plan_1: {
    planName: 'Starter',
    price: 29,
    currency: '$',
    description: 'Perfect for small Shopify stores getting started with AI automation.',
    cta: 'start your free trial',
    features: [
      '1 Shopify Store',
      'Basic AI Customer Support',
      'Order Status Updates',
      'Product Recommendations',
      'Email Integration',
      'Basic Analytics Dashboard',
      '24/7 AI Availability',
      'Shopify App Integration',
      'Standard Support'
    ]
  },
  plan_2: {
    planName: 'Professional',
    price: 79,
    currency: '$',
    description: 'Ideal for growing businesses that need advanced AI automation features.',
    cta: 'start your free trial',
    features: [
      'Up to 5 Shopify Stores',
      'Advanced AI Customer Support',
      'Sales Automation',
      'Inventory Management',
      'Multi-channel Integration',
      'Advanced Analytics & Reports',
      'Custom AI Training',
      'Priority Support',
      'API Access'
    ]
  },
  plan_3: {
    planName: 'Enterprise',
    price: 199,
    currency: '$',
    description: 'For large enterprises requiring custom AI solutions and dedicated support.',
    cta: 'contact sales',
    features: [
      'Unlimited Shopify Stores',
      'Custom AI Development',
      'Dedicated Account Manager',
      'White-label Solutions',
      'Advanced Security & Compliance',
      'Custom Integrations',
      '24/7 Phone Support',
      'On-site Training',
      'SLA Guarantee'
    ]
  },
}

export default function Pricing() {
  return (
    <div id='pricing' className="space-y-6 sm:space-y-7 md:space-y-8 lg:space-y-10 mx-auto text-center">
      {/* Title */}
      <SlideEffect>
        <h2 className="text-2xl md:text-4xl lg:text-header capitalize text-transparent bg-clip-text bg-gradient-to-b from-black to-black/60 font-medium leading-normal">{settings.title}</h2>
      </SlideEffect>

      {/* Description */}
      <SlideEffect className="px-2 sm:px-10 md:px-0 w-full md:max-w-3/4 mx-auto text-sm lg:text-base">{settings.description}</SlideEffect>

      {/* Pricing Plans */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* plan 1 */}
        <SlideEffect isSpring={false} delay={0.1} className="text-base">
          <Card className="bg-white">
            <div className="capitalize text-start text-black">{settings.plan_1.planName}</div>
            <div className="flex items-baseline gap-1">
              <span className="font-medium text-4xl text-black">{settings.plan_1.currency}{settings.plan_1.price}</span>
              <span className="text-sm">/month</span>
            </div>
            <Button className="w-full">{settings.plan_1.cta}</Button>
            <div className="text-start space-y-6">
              <p className="text-black text-sm">{settings.plan_1.description}</p>

              <div className="flex flex-col items-start gap-4 text-sm">
                {settings.plan_1.features.map((feature, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <CircleCheck className="text-[#a4c464]" size={16} />
                    <span>{feature}</span>
                  </div>
                ))}
              </div>
            </div>
          </Card>
        </SlideEffect>

        {/* plan 2 */}
        <SlideEffect isSpring={false} delay={0.2} className="flex flex-col gap-6 text-base">
          <Card className="bg-secondary">
            <div className="w-full flex items-center gap-2 justify-between">
              <div className="capitalize text-start text-black">{settings.plan_2.planName}</div>
              <div className="text-xs bg-accent px-2 py-1 rounded-full text-black capitalize">most popular</div>
            </div>
            <div className="flex items-baseline gap-1">
              <span className="font-medium text-4xl text-black">{settings.plan_2.currency}{settings.plan_2.price}</span>
              <span className="text-sm">/month</span>
            </div>
            <Button className="w-full">{settings.plan_2.cta}</Button>
            <div className="text-start space-y-6">
              <p className="text-black text-sm">{settings.plan_2.description}</p>

              <div className="flex flex-col items-start gap-4 text-sm">
                {settings.plan_2.features.map((feature, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <CircleCheck className="text-[#a4c464]" size={16} />
                    <span>{feature}</span>
                  </div>
                ))}
              </div>
            </div>
          </Card>
        </SlideEffect>

        {/* plan 3 */}
        <SlideEffect isSpring={false} delay={0.3} className="flex flex-col gap-6 text-base">
          <Card className="bg-white">
            <div className="capitalize text-start text-black">{settings.plan_3.planName}</div>
            <div className="flex items-baseline gap-1">
              <span className="font-medium text-4xl text-black">{settings.plan_3.currency}{settings.plan_3.price}</span>
              <span className="text-sm">/month</span>
            </div>
            <Button className="w-full">{settings.plan_3.cta}</Button>
            <div className="text-start space-y-6">
              <p className="text-black text-sm">{settings.plan_3.description}</p>

              <div className="flex flex-col items-start gap-4 text-sm">
                {settings.plan_3.features.map((feature, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <CircleCheck className="text-[#a4c464]" size={16} />
                    <span>{feature}</span>
                  </div>
                ))}
              </div>
            </div>
          </Card>
        </SlideEffect>
      </div>
    </div>
  )
}