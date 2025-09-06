'use client'

import SlideEffect from "@/components/slide-effect"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { useState } from "react"

const settings = {
  title: 'Start automating your Business today.',
  description: 'Join thousands of merchants who are already using BotBuddy to increase sales, reduce support tickets, and grow their business with AI-powered automation.',
  CTA: {
    content: 'Book your 30 min free Consultation',
    href: '#contact'
  },
  form: {
    namePlaceholder: 'Your Name',
    emailPlaceholder: 'Your Email Address', 
    phonePlaceholder: 'Your Phone Number',
    buttonText: 'Book your 30 min free Consultation'
  }
}

const handleSubmit = (e: React.FormEvent) => {
  e.preventDefault()
  // Handle form submission here
}

export default function CTA() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: ''
  })

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission here
    console.log('Form submitted:', formData)
  }

  return (
    <SlideEffect isSpring={false} className="space-y-6 sm:space-y-7 md:space-y-8 lg:space-y-10 mx-auto text-center p-8 md:p-16 flex flex-col items-center justify-center rounded-2xl bg-secondary">
      {/* Title */}
      <h2 className="text-2xl md:text-4xl lg:text-header capitalize font-medium leading-normal text-transparent bg-clip-text bg-gradient-to-b from-black to-black/60">{settings.title}</h2>

      {/* Description */}
      <p className="px-0 sm:px-10 md:px-0 w-full max-w-full md:max-w-3/4 mx-auto text-sm lg:text-base">{settings.description}</p>

      {/* Contact Form */}
      <form onSubmit={handleFormSubmit} className="w-full max-w-md space-y-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <input
            type="text"
            name="name"
            placeholder={settings.form.namePlaceholder}
            value={formData.name}
            onChange={handleInputChange}
            required
            className="px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
          />
          <input
            type="email"
            name="email"
            placeholder={settings.form.emailPlaceholder}
            value={formData.email}
            onChange={handleInputChange}
            required
            className="px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
          />
          <input
            type="tel"
            name="phone"
            placeholder={settings.form.phonePlaceholder}
            value={formData.phone}
            onChange={handleInputChange}
            required
            className="px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
          />
        </div>
        
        {/* CTA Button */}
        <Button type="submit" className="w-full" size='lg'>
          {settings.form.buttonText}
        </Button>
      </form>
    </SlideEffect>
  )
}