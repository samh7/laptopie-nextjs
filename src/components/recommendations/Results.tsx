import { FaArrowRight, FaCheckCircle, FaRegStar } from "react-icons/fa";
import Link from "next/link";
import { BiChip, BiCog, BiLaptop, BiMemoryCard } from "react-icons/bi";
import { Laptop } from "@/lib/interfaces/interfaces";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export default function Results({
  reccomendations,
  laptopImages,
}: {
  reccomendations: Laptop[];
  laptopImages: { [key: string]: string };
}) {
  return (
    <div className="container py-8 bg-white">
      <Card className="shadow-lg">
        <CardHeader className="border-b ">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-primary/10 rounded-full">
              <FaRegStar className="text-primary text-2xl" />
            </div>
            <span className="text-lg font-medium">
              {reccomendations.length} matches found based on your preferences
            </span>
          </div>
        </CardHeader>

        <CardContent className="p-0">
          <div className="divide-y">
            {reccomendations.map((laptop, index) => (
              <Link
                href={{
                  pathname: "info/",
                  query: {
                    id: index,
                    image: laptopImages[laptop.name] || "/laptop_brands/generic.jpg",
                  },
                }}
                key={index}
                className="block"
              >
                <div className="p-6 hover:bg-accent/50 transition-all duration-300 group">
                  <div className="flex flex-col md:flex-row gap-8">
                    {/* Laptop Image */}
                    <div className="md:w-1/3">
                      <div className="aspect-[4/3] rounded-xl overflow-hidden border bg-background shadow-sm group-hover:shadow-md transition-all">
                        <img
                          src={laptopImages[laptop.name] || "/laptop_brands/generic.jpg"}
                          alt={laptop.name}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        />
                      </div>
                    </div>

                    {/* Details */}
                    <div className="md:w-2/3 space-y-6">
                      <div>
                        <div className="flex items-start justify-between gap-4 mb-3">
                          <h2 className="text-2xl font-semibold group-hover:text-primary transition-colors">
                            {laptop.name}
                          </h2>
                          <div className="flex flex-col items-end">
                            <span className="text-sm text-muted-foreground">Starting at</span>
                            <span className="text-2xl font-bold text-primary">
                              ${laptop.priceRange}
                            </span>
                          </div>
                        </div>
                        <p className="text-muted-foreground leading-relaxed">{laptop.summary}</p>
                      </div>

                      {/* Key Features */}
                      <div className="bg-gradient-to-r from-accent to-accent/30 rounded-xl p-5">
                        <div className="text-sm font-medium mb-3 text-muted-foreground">Key Specifications</div>
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                          <div className="flex items-center gap-2 bg-background/60 rounded-lg p-2">
                            <BiChip className="text-primary text-xl" />
                            <span className="text-sm font-medium">
                              {laptop.specs.cpu.split(" ").slice(0)[0]}
                              <br />
                              {laptop.specs.cpu.split(" ").slice(-1)[0]}
                            </span>
                          </div>
                          <div className="flex items-center gap-2 bg-background/60 rounded-lg p-2">
                            <BiMemoryCard className="text-primary text-xl" />
                            <span className="text-sm font-medium">{laptop.specs.ram}GB RAM</span>
                          </div>
                          <div className="flex items-center gap-2 bg-background/60 rounded-lg p-2">
                            <BiCog className="text-primary text-xl" />
                            <span className="text-sm font-medium">{laptop.specs.storage}GB</span>
                          </div>
                          <div className="flex items-center gap-2 bg-background/60 rounded-lg p-2">
                            <BiLaptop className="text-primary text-xl" />
                            <span className="text-sm font-medium">{laptop.specs.weight}</span>
                          </div>
                        </div>
                      </div>

                      {/* Pros and View Details */}
                      <div className="flex flex-col md:flex-row items-center justify-between gap-4">
                        <div className="w-full md:w-auto">
                          <div className="text-sm font-medium mb-2 text-muted-foreground">Highlights</div>
                          <div className="flex flex-wrap gap-2">
                            {laptop.pros.slice(0, 3).map((pro, idx) => (
                              <Badge 
                                key={idx} 
                                variant="outline" 
                                className="flex items-center gap-1.5 py-1.5 px-3 border-primary/20 hover:bg-primary/5 transition-colors"
                              >
                                <FaCheckCircle className="text-xs text-primary" />
                                <span className="truncate max-w-[200px] text-foreground">{pro}</span>
                              </Badge>
                            ))}
                          </div>
                        </div>
                        <div className="flex items-center gap-2 text-primary font-medium group-hover:translate-x-2 transition-all duration-300">
                          <span>View Details</span>
                          <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center">
                            <FaArrowRight className="text-sm" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
