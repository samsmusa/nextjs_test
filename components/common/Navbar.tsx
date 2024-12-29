"use client"

import Link from "next/link"
import {Button} from "@/components/ui/button"

export function Navbar() {
    return (
        <nav className="container mx-auto px-4 py-4 flex items-center justify-between">
            <Link href="/" className="flex items-center">
                <span className="text-2xl font-bold">
                  <span className="text-primary">pixel</span>
                  <span>lab</span>
                </span>
            </Link>
            <div className="hidden md:flex items-center space-x-8">
                <Link href="/" className="text-gray-700 hover:tebg-primary">
                    Home
                </Link>
                <Link href="/about" className="text-gray-700 hover:tebg-primary">
                    About Us
                </Link>
                <Link href="/app" className="text-gray-700 hover:tebg-primary">
                    Our App
                </Link>
                <Link href="/contact" className="text-gray-700 hover:tebg-primary">
                    Contacts
                </Link>
            </div>

            <div className="flex items-center space-x-4">
                <Button variant="ghost" className="text-gray-700">
                    Log In
                </Button>
                <Button className="bg-primary text-white hover:bg-primary/90">
                    Sign Up
                </Button>
            </div>
        </nav>
    )
}

