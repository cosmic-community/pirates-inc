'use client'

import { useState } from 'react'
import Link from 'next/link'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="bg-primary text-white shadow-lg sticky top-0 z-50">
      <nav className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link href="/" className="flex items-center space-x-2">
            <span className="text-3xl">⚓</span>
            <span className="text-2xl font-bold font-pirate">Pirates Inc</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#services" className="hover:text-accent transition-colors">Services</a>
            <a href="#case-studies" className="hover:text-accent transition-colors">Case Studies</a>
            <a href="#team" className="hover:text-accent transition-colors">Team</a>
            <a href="#testimonials" className="hover:text-accent transition-colors">Testimonials</a>
            <a 
              href="#contact" 
              className="bg-accent hover:bg-accent-dark text-primary font-bold py-2 px-6 rounded transition-colors"
            >
              Contact
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-white focus:outline-none"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {isMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4">
            <div className="flex flex-col space-y-4">
              <a 
                href="#services" 
                className="hover:text-accent transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Services
              </a>
              <a 
                href="#case-studies" 
                className="hover:text-accent transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Case Studies
              </a>
              <a 
                href="#team" 
                className="hover:text-accent transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Team
              </a>
              <a 
                href="#testimonials" 
                className="hover:text-accent transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Testimonials
              </a>
              <a 
                href="#contact" 
                className="bg-accent hover:bg-accent-dark text-primary font-bold py-2 px-6 rounded transition-colors inline-block text-center"
                onClick={() => setIsMenuOpen(false)}
              >
                Contact
              </a>
            </div>
          </div>
        )}
      </nav>
    </header>
  )
}