"use client";
import { specsList } from "@/data/data";
import { Laptop } from "@/lib/interfaces/interfaces";
import { StarIcon } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";

export default function HeroSection({
  reccomendations,
}: {
  reccomendations: Laptop[];
}) {
  return (
    <div className="bg-gradient-to-b from-background to-muted">
      <div className="container px-4 py-16 space-y-8">
        {/* Title Section */}
        <div className="space-y-4">
          <Badge variant="secondary" className="h-8">
            <StarIcon className="mr-2 h-4 w-4 text-yellow-500" />
            {reccomendations.length} Perfect Matches Found
          </Badge>
          <h1 className="text-4xl font-bold tracking-tight lg:text-6xl">
            Your Ideal Laptops
            <br />
            <span className="text-muted-foreground">Handpicked Just For You</span>
          </h1>
        </div>

        <div className="grid gap-6 lg:grid-cols-12">
          {/* Price Range Card */}
          <Card className="lg:col-span-4">
            <CardHeader>
              <CardTitle>Price Range</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div>
                <div className="flex justify-between mb-2">
                  <span className="text-3xl  md:text-2xl font-bold">
                    KSH.{Math.min(...reccomendations.map((l) => l.priceRange)).toLocaleString()}
                  </span>
                  <span className="text-3xl md:text-2xl font-bold">
                  KSH.{Math.max(...reccomendations.map((l) => l.priceRange)).toLocaleString()}
                  </span>
                </div>

                <div className="relative mt-4">
                  <div className="h-2 bg-secondary rounded-full">
                    <div className="absolute inset-0 bg-primary/50 rounded-full" />
                  </div>
                  <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-4 h-4 bg-primary rounded-full" />
                </div>

                <div className="flex justify-between mt-2">
                  <span className="text-sm text-muted-foreground">Entry Level</span>
                  <span className="text-sm text-muted-foreground">Premium</span>
                </div>
              </div>

              <Separator />
              
              <p className="text-sm text-muted-foreground">
                Range includes options balancing performance with value. Higher
                prices typically indicate premium features and better performance.
              </p>
            </CardContent>
          </Card>

          {/* Specs Grid */}
          <div className="lg:col-span-8 space-y-6">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {specsList.map((item, index) => (
                <Card key={index} className="border-none shadow-none bg-card/50">
                  <CardContent className="p-4">
                    <div className="bg-secondary/50 w-10 h-10 rounded-lg flex items-center justify-center mb-3">
                      {item.icon}
                    </div>
                    <h3 className="font-medium mb-1">{item.title}</h3>
                    <p className="text-sm text-muted-foreground">{item.desc}</p>
                  </CardContent>
                </Card>
              ))}
            </div>

            <Card className="border-none shadow-none bg-card/50">
              <CardContent className="flex items-center gap-4 p-6">
                <StarIcon className="h-5 w-5 text-yellow-500 flex-shrink-0" />
                <div className="space-y-1">
                  <p className="font-medium">
                    Recommendations are ordered by match quality, with best matches first
                  </p>
                  <p className="text-sm text-muted-foreground">
                    Each laptop is scored based on how well it matches your
                    requirements for performance, budget, and features. The first
                    recommendations will most closely align with your needs.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
