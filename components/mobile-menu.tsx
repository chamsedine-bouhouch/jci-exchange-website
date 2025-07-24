"use client"

import { useState } from "react"
import { Button } from "./button"
import { Menu, X } from "lucide-react"
import Link from "next/link"

export function MobileMenu() {
  const [isOpen, setIsOpen] = useState(false)

  const toggleMenu = () => setIsOpen(!isOpen)

  const menuItems = [
    { href: "#about", label: "About" },
    { href: "#program", label: "Program" },
    { href: "#offers", label: "Registration" },
    { href: "#sousse", label: "JCI Sousse" },
  ]

  return (
    <div className="md:hidden">
      <Button variant="ghost" size="sm" onClick={toggleMenu} aria-label="Toggle menu">
        {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
      </Button>

      {isOpen && (
        <div className="absolute top-full left-0 right-0 bg-white border-b shadow-lg z-50">
          <nav className="container mx-auto px-4 py-4">
            <ul className="space-y-4">
              {menuItems.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="block text-sm font-medium hover:text-[#0097D7] transition-colors"
                    onClick={() => setIsOpen(false)}
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
              <li>
                <Button className="w-full bg-[#0097D7] hover:bg-[#3A67B1] text-white">Join Now</Button>
              </li>
            </ul>
          </nav>
        </div>
      )}
    </div>
  )
}
