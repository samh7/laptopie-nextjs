"use client";
import { FaShoppingCart } from "react-icons/fa";
import { Laptop } from "@/lib/interfaces/interfaces";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export default function ShoppingLinks({
  reccomendedLaptop,
}: {
  reccomendedLaptop: Laptop;
}) {
  return (
    <Card>
      <CardHeader className="bg-muted/50 border-b">
        <div className="flex items-center justify-between">
          <h3 className="text-xl font-semibold">Purchase Options</h3>
          <span className="text-sm text-muted-foreground">
            Best prices from trusted retailers
          </span>
        </div>
      </CardHeader>

      <CardContent className="p-0">
        <div className="divide-y">
          {reccomendedLaptop?.shoppingLinks?.map((link: string, index: number) => (
            <a
              key={index}
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              className="block p-6 hover:bg-muted/50 transition-colors group"
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-6">
                  <div className="w-12 h-12 bg-primary/5 rounded-lg flex items-center justify-center group-hover:bg-primary/10 transition-colors">
                    <FaShoppingCart className="text-primary text-xl" />
                  </div>
                  <div>
                    <div className="text-lg font-medium mb-1">
                      Retailer {index + 1}
                    </div>
                    <div className="text-sm text-muted-foreground">
                      {link.includes("amazon")
                        ? "Amazon.com"
                        : link.includes("smartprix")
                        ? "Smartprix.com"
                        : "Official Store"}
                    </div>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <Badge variant="secondary" className="bg-emerald-500/15 text-emerald-600 hover:bg-emerald-500/20">
                    In Stock
                  </Badge>
                  <div className="w-8 h-8 rounded-full flex items-center justify-center bg-muted group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                    →
                  </div>
                </div>
              </div>
            </a>
          )) || []}
        </div>
      </CardContent>

      <CardFooter className="bg-muted/50 justify-center py-4">
        <p className="text-sm text-muted-foreground">
          Prices and availability may vary by region
        </p>
      </CardFooter>
    </Card>
  );
}
