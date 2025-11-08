'use client'

import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Home, ChevronDown } from 'lucide-react'

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto flex h-14 max-w-screen-2xl items-center px-4">
        <div className="mr-4 hidden md:flex">
          <Link className="mr-6 flex items-center space-x-2" href="/">
            <Home className="h-6 w-6" />
            <span className="hidden font-bold sm:inline-block">PropertyWise</span>
          </Link>
        </div>

        <nav className="flex items-center gap-4 text-sm lg:gap-6">
          {/* Our Services Dropdown */}
          <div className="relative group">
            <div className="flex items-center gap-1 cursor-pointer transition-colors hover:text-foreground/80 text-foreground/60">
              <span>Our Services</span>
              <ChevronDown className="h-3 w-3 transition-transform group-hover:rotate-180" />
            </div>

            {/* Dropdown Menu */}
            <div className="absolute top-full left-0 mt-2 w-64 bg-white border rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
              <div className="p-2">
                <Link
                  href="/consultancy"
                  className="block px-3 py-2 text-sm text-gray-700 hover:bg-gray-100 rounded-md transition-colors"
                >
                  <div className="font-medium">Consultancy Services</div>
                  <div className="text-xs text-gray-500">Valuation, land administration, asset management</div>
                </Link>
                <Link
                  href="/litigation-support"
                  className="block px-3 py-2 text-sm text-gray-700 hover:bg-gray-100 rounded-md transition-colors"
                >
                  <div className="font-medium">Litigation Support Services</div>
                  <div className="text-xs text-gray-500">Expert witness and dispute resolution</div>
                </Link>
                <Link
                  href="/shopping-mall"
                  className="block px-3 py-2 text-sm text-gray-700 hover:bg-gray-100 rounded-md transition-colors"
                >
                  <div className="font-medium">Shopping Mall</div>
                  <div className="text-xs text-gray-500">Commercial property development</div>
                </Link>
                <Link
                  href="/due-diligence"
                  className="block px-3 py-2 text-sm text-gray-700 hover:bg-gray-100 rounded-md transition-colors"
                >
                  <div className="font-medium">Due Diligence</div>
                  <div className="text-xs text-gray-500">Property investigation services</div>
                </Link>
              </div>
            </div>
          </div>

          <Link
            className="transition-colors hover:text-foreground/80 text-foreground/60"
            href="/about"
          >
            About
          </Link>
          <Link
            className="transition-colors hover:text-foreground/80 text-foreground/60"
            href="/contact"
          >
            Contact
          </Link>
        </nav>

        <div className="flex flex-1 items-center justify-between space-x-2 md:justify-end">
          <div className="flex items-center gap-2">
            <Button variant="default" size="sm">
              Get Quote
            </Button>
            <Button variant="outline" size="sm">
              Contact Us
            </Button>
          </div>
        </div>
      </div>
    </header>
  )
}