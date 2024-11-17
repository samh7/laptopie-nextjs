"use client";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Plus, Search, History } from "lucide-react";
import Link from "next/link";

interface HeroSectionProps {
  title: string;
  description: string;
  imageSrc: string;
}

export function HeroSection({
  title,
  description,
  imageSrc,
}: HeroSectionProps) {
  return (
    <div className="relative bg-background border-b">
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          {/* Welcome Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex-1 space-y-4"
          >
            <h1 className="text-3xl font-semibold tracking-tight">{title}</h1>
            <p className="text-muted-foreground">{description}</p>

            {/* Quick Action Buttons */}
            <div className="flex flex-wrap gap-3">
              <Button asChild>
                <Link href="#recommendations" className="group">
                  <Plus className="mr-2 h-4 w-4" />
                  New Recommendation
                </Link>
              </Button>
              <Button variant="outline" asChild>
                <Link href="/home#recommendations">
                  <Search className="mr-2 h-4 w-4" />
                  Browse Laptops
                </Link>
              </Button>
              <Button variant="secondary" asChild>
                <Link href="/home#recommendations">
                  <History className="mr-2 h-4 w-4" />
                  View History
                </Link>
              </Button>
            </div>
          </motion.div>

          {/* Stats or Recent Activity */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex-shrink-0 w-full md:w-auto"
          >
            <div className="bg-card rounded-lg p-6 shadow-sm border">
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center">
                  <div className="text-2xl font-bold">0</div>
                  <div className="text-sm text-muted-foreground">
                    Saved Laptops
                  </div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold">0</div>
                  <div className="text-sm text-muted-foreground">
                    Comparisons
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
