"use client"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { useCases } from "@/data/data"
import { useEffect, useRef } from "react"

export default function UseCases() {
  const firstRow = useCases.slice(0, Math.ceil(useCases.length / 2))
  const secondRow = useCases.slice(Math.ceil(useCases.length / 2))
  
  const firstRowRef = useRef<HTMLDivElement>(null)
  const secondRowRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (firstRowRef.current) {
      const scrollWidth = firstRowRef.current.scrollWidth
      firstRowRef.current.scrollLeft = 0
    }
    if (secondRowRef.current) {
      const scrollWidth = secondRowRef.current.scrollWidth
      secondRowRef.current.scrollLeft = (scrollWidth - 10)
    }
  }, [])

  return (
    <section className="py-16 sm:py-20 bg-background overflow-hidden w-full">
      <div className="w-full px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center justify-center text-center">
          <h2 className="font-heading text-3xl leading-[1.1] sm:text-3xl md:text-6xl mb-6">
            Find Your Perfect Laptop
          </h2>
          
          {/* Show grid on large screens */}
          <div className="hidden lg:flex lg:flex-wrap lg:justify-center lg:gap-6 w-full">
            {useCases.map(({ icon: Icon, title, description }) => (
              <Card 
                key={title} 
                className="border-primary transition-colors flex-[1_1_300px] max-w-[400px]"
              >
                <CardHeader>
                  <Icon className="w-8 h-8 text-primary mb-4" />
                  <CardTitle className="text-xl">{title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{description}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Scrolling rows for small screens */}
          <div className="lg:hidden w-full max-w-[100vw]">
            {/* First Row */}
            <div className="mb-6 overflow-hidden w-full">
              <div 
                ref={firstRowRef}
                className="flex overflow-x-auto scrollbar-hide snap-x snap-mandatory scroll-smooth w-full"
              >
                {[...firstRow, ...firstRow, ...firstRow].map(({ icon: Icon, title, description }, index) => (
                  <Card 
                    key={`${title}-${index}`}
                    className="border-primary transition-colors flex-none w-[300px] mx-3 snap-center"
                  >
                    <CardHeader>
                      <Icon className="w-8 h-8 text-primary mb-4" />
                      <CardTitle className="text-xl">{title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground">{description}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            {/* Second Row */}
            <div className="overflow-hidden w-full">
              <div 
                ref={secondRowRef}
                className="flex overflow-x-auto scrollbar-hide snap-x snap-mandatory scroll-smooth w-full"
              >
                {[...secondRow, ...secondRow, ...secondRow].map(({ icon: Icon, title, description }, index) => (
                  <Card 
                    key={`${title}-${index}`}
                    className="border-primary transition-colors flex-none w-[300px] mx-3 snap-center"
                  >
                    <CardHeader>
                      <Icon className="w-8 h-8 text-primary mb-4" />
                      <CardTitle className="text-xl">{title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground">{description}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
