"use client";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { LucideIcon, Brain, Zap, Sparkles, Users, Laptop, Filter } from "lucide-react"

interface FeatureCardProps {
  icon: LucideIcon
  title: string
  description: string
}

const FeatureCard = ({ icon: Icon, title, description }: FeatureCardProps) => {
  return (
    <Card className="border-none w-full  shadow-none">
      <CardHeader>
        <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
          <Icon className="h-6 w-6 text-primary" />
        </div>
        <CardTitle className="mt-4">{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <CardDescription>{description}</CardDescription>
      </CardContent>
    </Card>
  )
}

const features = [
  {
    icon: Brain,
    title: "AI-Powered Recommendations",
    description: "Smart algorithm that analyzes your requirements to suggest the perfect laptop matches."
  },
  {
    icon: Zap,
    title: "Instant Results",
    description: "Get personalized laptop recommendations in seconds, no waiting required."
  },
  {
    icon: Sparkles,
    title: "Up-to-date Specs",
    description: "Access current laptop specifications and features to make informed decisions."
  },
  {
    icon: Users,
    title: "User-Friendly Interface",
    description: "Simple and intuitive design that makes finding your ideal laptop effortless."
  },
  {
    icon: Laptop,
    title: "Comprehensive Database",
    description: "Extensive collection of laptops across different brands, prices, and specifications."
  },
  {
    icon: Filter,
    title: "Smart Filtering",
    description: "Advanced filtering options to narrow down choices based on your specific needs."
  }
]

export default function FeaturesSection() {
  return (
    <section className="container py-20">
      <div className="text-center mb-12">
        <h2 className="font-heading text-3xl leading-[1.1] sm:text-3xl md:text-6xl">
          Key Features
        </h2>
        <p className="mx-auto mt-4 max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
          Find your perfect laptop with our intelligent recommendation system
        </p>
      </div>
      <div className="flex flex-col justify-center items-center md:grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {features.map((feature, index) => (
          <FeatureCard key={index} {...feature} />
        ))}
      </div>
    </section>
  )
}
