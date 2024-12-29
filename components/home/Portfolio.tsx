import { Card, CardContent } from "@/components/ui/card"

export function Portfolio() {
  return (
    <section className="container mx-auto px-4 py-16">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <div>
          <h2 className="text-3xl font-bold mb-4">Many Books and Components</h2>
          <p className="text-gray-600 mb-8">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis.
          </p>
          <button className="text-primary hover:text-primary/80">
            Explore
          </button>
        </div>
        <Card>
          <CardContent className="p-0">
            <img
              src="/placeholder.svg?height=300&width=400"
              alt="Portfolio"
              className="w-full h-auto rounded-lg"
            />
          </CardContent>
        </Card>
      </div>
    </section>
  )
}

