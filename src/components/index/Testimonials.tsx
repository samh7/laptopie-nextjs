"use client";
import { Card, CardContent } from "@/components/ui/card"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { QuoteIcon } from "lucide-react"

export default function Testimonials() {
  return (
    <section className="container space-y-8 py-16 md:py-20">
      <div className="mx-auto flex max-w-[58rem] flex-col items-center space-y-4 text-center">
        <h2 className="font-heading text-3xl leading-[1.1] sm:text-3xl md:text-6xl">
          What Our Users Say
        </h2>
        <p className="max-w-[85%] leading-normal text-muted-foreground sm:text-lg sm:leading-7">
          Discover how Laptopie has helped others find their perfect laptop
        </p>
      </div>

      <div className="mx-auto flex flex-col  items-center md:grid gap-4 sm:grid-cols-2   md:max-w-[64rem]">
        {[
          {
            name: "Brad Justin",
            role: "Software Developer",
            text: "I highly recommend Laptopie. As a developer, I was having challenges choosing between laptop specifications but Laptopie helped me.",
          },
          {
            name: "Edith Cooper",
            role: "Video Editor",
            text: "The recommendations are so accurate. I have been using the laptop for my video editing tasks for about 3 years now and it's still a beast. Laptopie is the best.",
          },
        ].map((testimonial) => (
          <Card key={testimonial.name} className="flex w-[80vw] md:w-[35vw] flex-col">
            <CardContent className="grid gap-4 p-6">
              <QuoteIcon className="h-5 w-5 text-muted-foreground" />
              <p className="text-sm leading-normal">{testimonial.text}</p>
              <div className="flex items-center gap-4">
                <Avatar>
                  <AvatarFallback className="bg-muted">
                    {testimonial.name.charAt(0)}
                  </AvatarFallback>
                </Avatar>
                <div className="grid gap-1">
                  <p className="text-sm font-medium leading-none">
                    {testimonial.name}
                  </p>
                  <p className="text-sm text-muted-foreground">
                    {testimonial.role}
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  )
}
