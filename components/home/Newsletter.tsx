"use client"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export function Newsletter() {
  return (
    <section className="container mx-auto px-4 py-16">
      <div className="max-w-xl mx-auto text-center">
        <div className="mb-8">
          <img
            src="/placeholder.svg?height=100&width=100"
            alt="Newsletter"
            className="mx-auto"
          />
        </div>
        <h2 className="text-3xl font-bold mb-4">Subscribe Our Newsletter</h2>
        <p className="text-gray-600 mb-8">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis.
        </p>
        <form className="flex flex-col md:flex-row gap-4">
          <Input
            type="email"
            placeholder="Your E-mail here..."
            className="flex-1"
          />
          <Button className="bg-primary text-white hover:bg-primary/90">
            Subscribe Newsletter
          </Button>
        </form>
      </div>
    </section>
  )
}

