'use client'

import { Facebook, Github, Instagram, Youtube } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

const settings = {
  links: [
    { title: 'About', href: '/' },
    { title: 'Blog', href: '/blog' },
    { title: 'Jobs', href: '/jobs' },
    { title: 'Resources', href: '/resources' },
    // { title: 'Affiliate', href: '/' },
    { title: 'Contact Us', href: '/contact' },
  ],
  socialMedia: [
    { title: 'Facebook', icon: Facebook, href: '/' },
    { title: 'Instagram', icon: Instagram, href: '/' },
    { title: 'Github', icon: Github, href: '/' },
    { title: 'Youtube', icon: Youtube, href: '/' },
  ],
  copyright: '© 2024 BotBuddy. All rights reserved.'
}

export default function Footer() {
  return (
    <footer className="w-full py-8 md:py-16 flex flex-col items-center justify-center gap-7 md:gap-10 text-sm border-t border-border">
      {/* Logo */}
              <Link href='/' title="BotBuddy">
          <Image src="/logo.svg" alt="BotBuddy" width={100} height={24} />
      </Link>

      {/* Nav Links */}
      <div className="flex flex-wrap md:flex-row items-center justify-center gap-7 md:gap-10">
        {settings.links.map(link => (
          <Link key={link.title} href={link.href}>{link.title}</Link>
        ))}
      </div>

      {/* Social links */}
      <div className="flex flex-wrap md:flex-row items-center justify-center gap-7 md:gap-10">
        {settings.socialMedia.map((social, index) => (
          <Link title={social.title} key={index} href={social.href}><social.icon /></Link>
        ))}
      </div>

      {/* copyright */}
      <p className="text-center">{settings.copyright}</p>
    </footer>
  )
}