'use client'

import { useState, useEffect, useRef } from 'react'
import { MessageCircle, X, Send, Bot, User } from 'lucide-react'
import { Button } from './ui/button'
import * as motion from "motion/react-m"
import { AnimatePresence } from 'motion/react'

interface Message {
  id: string
  type: 'bot' | 'user'
  content: string
  timestamp: Date
  options?: string[]
}

interface ChatbotProps {
  className?: string
}

const questionnaire = [
  {
    id: 'welcome',
          message: "👋 Hi! I'm your AI assistant from BotBuddy. I'm here to help you find the perfect AI solution for your Shopify store. What's your main goal?",
    options: [
      "Increase sales & conversions",
      "Automate customer support", 
      "Better understand my customers",
      "Streamline store operations"
    ]
  },
  {
    id: 'store_size',
    message: "Great choice! To recommend the best solution, what's your store size?",
    options: [
      "Just starting out (0-100 orders/month)",
      "Growing business (100-1000 orders/month)",
      "Established store (1000+ orders/month)",
      "Enterprise level"
    ]
  },
  {
    id: 'current_challenges',
    message: "What's your biggest challenge right now?",
    options: [
      "Too much manual work",
      "Poor customer insights",
      "Slow customer response times",
      "Inventory management issues"
    ]
  },
  {
    id: 'budget',
    message: "What's your monthly budget for AI tools?",
    options: [
      "Under $50/month",
      "$50-200/month",
      "$200-500/month",
      "I need a custom quote"
    ]
  },
  {
    id: 'contact',
    message: "Perfect! Based on your answers, I'd love to connect you with our team for a personalized demo. What's the best way to reach you?",
    options: [
      "Schedule a call",
      "Send me an email",
      "I'll contact you later"
    ]
  }
]

export default function Chatbot({ className }: ChatbotProps) {
  const [isOpen, setIsOpen] = useState(false)
  const [messages, setMessages] = useState<Message[]>([])
  const [currentStep, setCurrentStep] = useState(0)
  const [userResponses, setUserResponses] = useState<string[]>([])
  const [isTyping, setIsTyping] = useState(false)
  const messagesEndRef = useRef<HTMLDivElement>(null)

  const scrollToBottom = () => {
    setTimeout(() => {
      messagesEndRef.current?.scrollIntoView({ behavior: "smooth", block: "end" })
    }, 100)
  }

  useEffect(() => {
    scrollToBottom()
  }, [messages])

  useEffect(() => {
    if (isOpen && messages.length === 0) {
      // Start conversation
      setTimeout(() => {
        addBotMessage(questionnaire[0].message, questionnaire[0].options)
      }, 500)
    }
  }, [isOpen])

  const addBotMessage = (content: string, options?: string[]) => {
    setIsTyping(true)
    setTimeout(() => {
      const newMessage: Message = {
        id: Date.now().toString(),
        type: 'bot',
        content,
        timestamp: new Date(),
        options
      }
      setMessages(prev => [...prev, newMessage])
      setIsTyping(false)
    }, 1000)
  }

  const addUserMessage = (content: string) => {
    const newMessage: Message = {
      id: Date.now().toString(),
      type: 'user',
      content,
      timestamp: new Date()
    }
    setMessages(prev => [...prev, newMessage])
  }

  const handleOptionClick = (option: string) => {
    addUserMessage(option)
    setUserResponses(prev => [...prev, option])
    
    const nextStep = currentStep + 1
    setCurrentStep(nextStep)

    if (nextStep < questionnaire.length) {
      setTimeout(() => {
        addBotMessage(questionnaire[nextStep].message, questionnaire[nextStep].options)
      }, 1500)
    } else {
      // End of questionnaire
      setTimeout(() => {
        addBotMessage("Thank you for your responses! Our team will be in touch soon with personalized recommendations for your store. 🚀")
      }, 1500)
    }
  }

  const resetChat = () => {
    setMessages([])
    setCurrentStep(0)
    setUserResponses([])
    setTimeout(() => {
      addBotMessage(questionnaire[0].message, questionnaire[0].options)
    }, 500)
  }

  return (
    <>
      {/* Chat Toggle Button */}
      <motion.div
        className={`fixed bottom-6 right-6 z-[9999] ${className}`}
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 2, type: "spring", stiffness: 260, damping: 20 }}
      >
        <Button
          onClick={() => setIsOpen(!isOpen)}
          size="lg"
          className="rounded-full w-14 h-14 shadow-lg bg-[#a4c464] hover:opacity-95 border-0"
        >
          <AnimatePresence mode="wait">
            {isOpen ? (
              <motion.div
                key="close"
                initial={{ rotate: -90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: 90, opacity: 0 }}
                transition={{ duration: 0.2 }}
              >
                <X size={24} />
              </motion.div>
            ) : (
              <motion.div
                key="open"
                initial={{ rotate: 90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: -90, opacity: 0 }}
                transition={{ duration: 0.2 }}
              >
                <MessageCircle size={24} />
              </motion.div>
            )}
          </AnimatePresence>
        </Button>
      </motion.div>

      {/* Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 100, scale: 0.8 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 100, scale: 0.8 }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
            className="fixed bottom-24 right-6 w-96 max-w-[calc(100vw-3rem)] h-[500px] max-h-[calc(100vh-8rem)] bg-white rounded-2xl shadow-2xl border border-gray-200 z-[9998] flex flex-col"
          >
            {/* Header */}
            <div className="bg-[#a4c464] text-black p-4 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center">
                  <Bot size={18} />
                </div>
                <div>
                  <h3 className="font-medium">AI Assistant</h3>
                  <p className="text-xs opacity-90">BotBuddy</p>
                </div>
              </div>
              <Button
                variant="ghost"
                size="sm"
                onClick={resetChat}
                className="text-white hover:bg-white/20 text-xs"
              >
                Reset
              </Button>
            </div>

            {/* Messages */}
            <div className="flex-1 overflow-y-auto overflow-x-hidden p-4 space-y-4 min-h-0">
              {messages.map((message) => (
                <motion.div
                  key={message.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3 }}
                  className={`flex ${message.type === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  <div className={`flex items-start gap-2 max-w-[80%] ${message.type === 'user' ? 'flex-row-reverse' : ''}`}>
                    <div className={`w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 ${
                      message.type === 'bot'
                        ? 'bg-[#a4c464]/20 text-[#a4c464]'
                        : 'bg-gray-100 text-gray-600'
                    }`}>
                      {message.type === 'bot' ? <Bot size={14} /> : <User size={14} />}
                    </div>
                    <div>
                      <div className={`rounded-2xl px-4 py-2 ${
                        message.type === 'bot'
                          ? 'bg-gray-100 text-gray-800'
                          : 'bg-[#a4c464] text-black'
                      }`}>
                        <p className="text-sm">{message.content}</p>
                      </div>
                      {message.options && (
                        <div className="mt-3 space-y-2">
                          {message.options.map((option, index) => (
                            <motion.button
                              key={index}
                              initial={{ opacity: 0, x: -20 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{ delay: index * 0.1 }}
                              onClick={() => handleOptionClick(option)}
                              className="block w-full text-left p-3 text-sm border border-gray-200 rounded-xl hover:bg-gray-50 hover:border-[#a4c464] transition-colors"
                            >
                              {option}
                            </motion.button>
                          ))}
                        </div>
                      )}
                    </div>
                  </div>
                </motion.div>
              ))}
              
              {isTyping && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="flex justify-start"
                >
                  <div className="flex items-center gap-2">
                    <div className="w-6 h-6 rounded-full bg-[#a4c464]/20 text-[#a4c464] flex items-center justify-center">
                      <Bot size={14} />
                    </div>
                    <div className="bg-gray-100 rounded-2xl px-4 py-2">
                      <div className="flex space-x-1">
                        <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                        <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                        <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              )}
              <div ref={messagesEndRef} className="h-4" />
            </div>

            {/* Footer */}
            <div className="p-4 border-t border-gray-100">
              <p className="text-xs text-gray-500 text-center">
                Powered by BotBuddy AI
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
