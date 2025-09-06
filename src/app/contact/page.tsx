'use client'

import { useState } from 'react'
import { Mail, Phone, MapPin, Clock, Send, MessageSquare } from 'lucide-react'
import { Button } from '@/components/ui/button'
import SlideEffect from '@/components/slide-effect'
import TextRevealEffect from '@/components/text-reveal-effect'
import Navbar from '@/components/navbar'
import Footer from '@/sections/footer'

export default function ContactPage() {
  const [contactForm, setContactForm] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  })

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setContactForm(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Here you would typically send the form data to your backend
    console.log('Contact form submitted:', contactForm)
    alert('Thank you for your message! We\'ll get back to you soon.')
    setContactForm({
      name: '',
      email: '',
      phone: '',
      subject: '',
      message: ''
    })
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Navbar */}
      <div className="max-w-6xl mx-auto px-4 py-6">
        <Navbar />
      </div>

      {/* Header */}
      <div className="max-w-6xl mx-auto px-4 py-16">
        <SlideEffect>
          <div className="text-center mb-16">
            <TextRevealEffect className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Get In Touch
            </TextRevealEffect>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Have questions about our AI automation solutions? We&apos;d love to hear from you. Send us a message and we&apos;ll respond as soon as possible.
            </p>
          </div>
        </SlideEffect>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <SlideEffect>
            <div className="bg-gray-50 p-8 rounded-lg">
              <h2 className="text-2xl font-bold mb-6">Send us a Message</h2>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={contactForm.name}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#a4c464] focus:border-transparent"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Email *
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={contactForm.email}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#a4c464] focus:border-transparent"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={contactForm.phone}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#a4c464] focus:border-transparent"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Subject *
                    </label>
                    <select
                      name="subject"
                      value={contactForm.subject}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#a4c464] focus:border-transparent"
                    >
                      <option value="">Select a subject</option>
                      <option value="General Inquiry">General Inquiry</option>
                      <option value="Product Demo">Product Demo</option>
                      <option value="Support">Support</option>
                      <option value="Partnership">Partnership</option>
                      <option value="Other">Other</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Message *
                  </label>
                  <textarea
                    name="message"
                    value={contactForm.message}
                    onChange={handleInputChange}
                    rows={6}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#a4c464] focus:border-transparent"
                    placeholder="Tell us how we can help you..."
                  />
                </div>

                <Button type="submit" className="w-full" size="lg">
                  <Send size={16} className="mr-2" />
                  Send Message
                </Button>
              </form>
            </div>
          </SlideEffect>

          {/* Contact Information */}
          <SlideEffect>
            <div className="space-y-8">
              <div>
                <h2 className="text-2xl font-bold mb-6">Contact Information</h2>
                <p className="text-gray-600 mb-8">
                  Ready to transform your business with AI automation? Get in touch with our team and let&apos;s discuss how we can help you achieve your goals.
                </p>
              </div>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-[#a4c464]/10 rounded-lg">
                    <Mail className="text-[#a4c464]" size={20} />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Email</h3>
                    <p className="text-gray-600">team@botbuddy.com</p>
                    <p className="text-gray-600">support@botbuddy.com</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="p-3 bg-[#a4c464]/10 rounded-lg">
                    <Phone className="text-[#a4c464]" size={20} />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Phone</h3>
                    <p className="text-gray-600">+(91) 9669664421</p>
                    <p className="text-gray-600">Mon-Fri: 9AM-6PM IST</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="p-3 bg-[#a4c464]/10 rounded-lg">
                    <MapPin className="text-[#a4c464]" size={20} />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Address</h3>
                    <p className="text-gray-600">
                      PNB Building<br />
                      Hill Cart Road, Siliguri<br />
                      West Bengal, India
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="p-3 bg-[#a4c464]/10 rounded-lg">
                    <Clock className="text-[#a4c464]" size={20} />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Business Hours</h3>
                    <p className="text-gray-600">Monday - Friday: 9:00 AM - 6:00 PM IST</p>
                    <p className="text-gray-600">Saturday: 10:00 AM - 2:00 PM IST</p>
                    <p className="text-gray-600">Sunday: Closed</p>
                  </div>
                </div>
              </div>

              {/* Quick Actions */}
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="font-semibold mb-4">Quick Actions</h3>
                <div className="space-y-3">
                  <Button variant="outline" className="w-full justify-start">
                    <MessageSquare size={16} className="mr-2" />
                    Schedule a Demo
                  </Button>
                  <Button variant="outline" className="w-full justify-start">
                    <Mail size={16} className="mr-2" />
                    Free 30 Min Consultation
                  </Button>
                  <Button variant="outline" className="w-full justify-start">
                    <Phone size={16} className="mr-2" />
                    Call Us Now
                  </Button>
                </div>
              </div>
            </div>
          </SlideEffect>
        </div>

        {/* FAQ Section */}
        <div className="mt-20">
          <SlideEffect>
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Frequently Asked Questions</h2>
              <p className="text-gray-600">Find quick answers to common questions about our services.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="font-semibold mb-2">How does BotBuddy work?</h3>
                <p className="text-gray-600">
                  BotBuddy uses advanced AI technology to automate customer service, sales, and business processes. Our platform integrates seamlessly with your existing systems.
                </p>
              </div>

              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="font-semibold mb-2">What platforms do you support?</h3>
                <p className="text-gray-600">
                  We support all major e-commerce platforms including Shopify, WooCommerce, Magento, and custom solutions. We can integrate with any system via API.
                </p>
              </div>

              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="font-semibold mb-2">How long does setup take?</h3>
                <p className="text-gray-600">
                  Most implementations are completed within 1-2 weeks. Our team works closely with you to ensure a smooth transition and optimal configuration.
                </p>
              </div>

              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="font-semibold mb-2">Do you offer support?</h3>
                <p className="text-gray-600">
                  Yes! We provide 24/7 technical support, regular updates, and dedicated account managers to ensure your success with our platform.
                </p>
              </div>
            </div>
          </SlideEffect>
        </div>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  )
} 