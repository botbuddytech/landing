'use client'

import { useState } from 'react'
import { Search, MapPin, Clock, DollarSign, Briefcase, Mail, Phone, User, Send } from 'lucide-react'
import { Button } from '@/components/ui/button'
import Card from '@/components/card'
import SlideEffect from '@/components/slide-effect'
import TextRevealEffect from '@/components/text-reveal-effect'
import Navbar from '@/components/navbar'
import Footer from '@/sections/footer'

const jobListings = [
  {
    id: 1,
    title: "Senior AI Developer",
    company: "BotBuddy",
    location: "Remote",
    type: "Full-time",
    salary: "$80,000 - $120,000",
    experience: "3-5 years",
    description: "We're looking for a Senior AI Developer to join our team and help build cutting-edge automation solutions for e-commerce businesses. You'll work on developing AI-powered chatbots, automation workflows, and machine learning models.",
    requirements: [
      "Strong experience with Python, JavaScript, and React",
      "Experience with AI/ML frameworks (TensorFlow, PyTorch)",
      "Knowledge of natural language processing",
      "Experience with cloud platforms (AWS, Google Cloud)",
      "Excellent problem-solving skills"
    ],
    responsibilities: [
      "Develop and maintain AI-powered automation systems",
      "Design and implement chatbot solutions",
      "Optimize machine learning models for performance",
      "Collaborate with cross-functional teams",
      "Mentor junior developers"
    ]
  },
  {
    id: 2,
    title: "Frontend Developer",
    company: "BotBuddy",
    location: "Remote",
    type: "Full-time",
    salary: "$60,000 - $90,000",
    experience: "2-4 years",
    description: "Join our frontend team to create beautiful, responsive user interfaces for our automation platform. You'll work with modern technologies and help shape the user experience.",
    requirements: [
      "Proficient in React, TypeScript, and Next.js",
      "Experience with Tailwind CSS and modern CSS",
      "Knowledge of responsive design principles",
      "Experience with state management (Redux, Zustand)",
      "Strong attention to detail and UI/UX skills"
    ],
    responsibilities: [
      "Build responsive and accessible user interfaces",
      "Implement modern design systems",
      "Optimize application performance",
      "Collaborate with designers and backend developers",
      "Write clean, maintainable code"
    ]
  },
  // {
  //   id: 3,
  //   title: "DevOps Engineer",
  //   company: "BotBuddy",
  //   location: "Remote",
  //   type: "Full-time",
  //   salary: "$70,000 - $110,000",
  //   experience: "3-5 years",
  //   description: "Help us build and maintain robust infrastructure for our automation platform. You'll work on deployment pipelines, monitoring, and ensuring high availability.",
  //   requirements: [
  //     "Experience with Docker and Kubernetes",
  //     "Knowledge of cloud platforms (AWS, Azure, GCP)",
  //     "Experience with CI/CD pipelines",
  //     "Knowledge of monitoring and logging tools",
  //     "Strong Linux administration skills"
  //   ],
  //   responsibilities: [
  //     "Design and maintain cloud infrastructure",
  //     "Implement and manage CI/CD pipelines",
  //     "Monitor system performance and reliability",
  //     "Automate deployment processes",
  //     "Ensure security best practices"
  //   ]
  // }
]

export default function JobsPage() {
  const [selectedJob, setSelectedJob] = useState<number | null>(null)
  const [searchQuery, setSearchQuery] = useState("")
  const [applicationForm, setApplicationForm] = useState({
    name: '',
    email: '',
    phone: '',
    position: '',
    experience: '',
    message: '',
    resume: null as File | null
  })

  const filteredJobs = jobListings.filter(job =>
    job.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    job.description.toLowerCase().includes(searchQuery.toLowerCase())
  )

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setApplicationForm(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0] || null
    setApplicationForm(prev => ({
      ...prev,
      resume: file
    }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Here you would typically send the form data to your backend
    console.log('Application submitted:', applicationForm)
    alert('Application submitted successfully! We\'ll get back to you soon.')
    setApplicationForm({
      name: '',
      email: '',
      phone: '',
      position: '',
      experience: '',
      message: '',
      resume: null
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
          <div className="text-center mb-12">
            <TextRevealEffect className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Join Our Team
            </TextRevealEffect>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Help us revolutionize Business automation. We&apos;re looking for talented individuals who are passionate about AI, automation, and building the future of business technology.
            </p>
          </div>
        </SlideEffect>

        {/* Search */}
        <div className="max-w-2xl mx-auto mb-12">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
            <input
              type="text"
              placeholder="Search jobs..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#a4c464] focus:border-transparent"
            />
          </div>
        </div>

        {/* Job Listings */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          {filteredJobs.map((job, index) => (
            <SlideEffect key={job.id} delay={index * 0.1}>
              <div className="p-6 hover:shadow-lg transition-shadow cursor-pointer" onClick={() => setSelectedJob(job.id)}>
                <Card>
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="text-xl font-semibold mb-2">{job.title}</h3>
                    <p className="text-gray-600">{job.company}</p>
                  </div>
                  <span className="px-3 py-1 bg-[#a4c464]/10 text-[#a4c464] text-sm rounded-full">
                    {job.type}
                  </span>
                </div>

                <div className="flex items-center gap-4 text-sm text-gray-500 mb-4">
                  <div className="flex items-center gap-1">
                    <MapPin size={14} />
                    {job.location}
                  </div>
                  <div className="flex items-center gap-1">
                    <Clock size={14} />
                    {job.experience}
                  </div>
                  <div className="flex items-center gap-1">
                    <DollarSign size={14} />
                    {job.salary}
                  </div>
                </div>

                <p className="text-gray-600 mb-4 line-clamp-3">
                  {job.description}
                </p>

                <Button 
                  onClick={(e) => {
                    e.stopPropagation()
                    setSelectedJob(job.id)
                  }}
                  className="w-full"
                >
                  View Details
                </Button>
                </Card>
              </div>
            </SlideEffect>
          ))}
        </div>

        {/* Job Details Modal */}
        {selectedJob && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
            <div className="bg-white rounded-lg max-w-4xl w-full max-h-[90vh] overflow-y-auto">
              <div className="p-6">
                <div className="flex items-center justify-between mb-6">
                  <h2 className="text-2xl font-bold">
                    {jobListings.find(job => job.id === selectedJob)?.title}
                  </h2>
                  <button
                    onClick={() => setSelectedJob(null)}
                    className="text-gray-500 hover:text-gray-700"
                  >
                    ✕
                  </button>
                </div>

                {(() => {
                  const job = jobListings.find(job => job.id === selectedJob)
                  if (!job) return null

                  return (
                    <div className="space-y-6">
                      <div className="flex items-center gap-4 text-sm text-gray-500">
                        <div className="flex items-center gap-1">
                          <MapPin size={16} />
                          {job.location}
                        </div>
                        <div className="flex items-center gap-1">
                          <Clock size={16} />
                          {job.experience}
                        </div>
                        <div className="flex items-center gap-1">
                          <DollarSign size={16} />
                          {job.salary}
                        </div>
                      </div>

                      <div>
                        <h3 className="text-lg font-semibold mb-2">Job Description</h3>
                        <p className="text-gray-600">{job.description}</p>
                      </div>

                      <div>
                        <h3 className="text-lg font-semibold mb-2">Requirements</h3>
                        <ul className="list-disc pl-6 space-y-1 text-gray-600">
                          {job.requirements.map((req, index) => (
                            <li key={index}>{req}</li>
                          ))}
                        </ul>
                      </div>

                      <div>
                        <h3 className="text-lg font-semibold mb-2">Responsibilities</h3>
                        <ul className="list-disc pl-6 space-y-1 text-gray-600">
                          {job.responsibilities.map((resp, index) => (
                            <li key={index}>{resp}</li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  )
                })()}
              </div>
            </div>
          </div>
        )}

        {/* Application Form */}
        <div className="max-w-2xl mx-auto">
          <SlideEffect>
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold mb-4">Apply Now</h2>
              <p className="text-gray-600">
                Ready to join our team? Fill out the application form below and we&apos;ll get back to you soon.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={applicationForm.name}
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
                    value={applicationForm.email}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#a4c464] focus:border-transparent"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={applicationForm.phone}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#a4c464] focus:border-transparent"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Position *
                  </label>
                  <select
                    name="position"
                    value={applicationForm.position}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#a4c464] focus:border-transparent"
                  >
                    <option value="">Select a position</option>
                    {jobListings.map(job => (
                      <option key={job.id} value={job.title}>{job.title}</option>
                    ))}
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Years of Experience *
                </label>
                <select
                  name="experience"
                  value={applicationForm.experience}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#a4c464] focus:border-transparent"
                >
                  <option value="">Select experience level</option>
                  <option value="0-1">0-1 years</option>
                  <option value="1-3">1-3 years</option>
                  <option value="3-5">3-5 years</option>
                  <option value="5-10">5-10 years</option>
                  <option value="10+">10+ years</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Resume/CV *
                </label>
                <input
                  type="file"
                  accept=".pdf,.doc,.docx"
                  onChange={handleFileChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#a4c464] focus:border-transparent"
                />
                <p className="text-sm text-gray-500 mt-1">Accepted formats: PDF, DOC, DOCX (max 5MB)</p>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Cover Letter / Why you&apos;re interested in this position
                </label>
                <textarea
                  name="message"
                  value={applicationForm.message}
                  onChange={handleInputChange}
                  rows={4}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#a4c464] focus:border-transparent"
                  placeholder="Tell us why you'd be a great fit for this role..."
                />
              </div>

              <Button type="submit" className="w-full" size="lg">
                <Send size={16} className="mr-2" />
                Submit Application
              </Button>
            </form>
          </SlideEffect>
        </div>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  )
} 