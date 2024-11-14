import { FaInfoCircle } from "react-icons/fa";
import { Laptop, LaptopSpecs } from "@/lib/interfaces/interfaces";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

export default function DetailedSpecs({
  reccomendedLaptop,
}: {
  reccomendedLaptop: Laptop;
}) {
  return (
    <Card className="mb-16">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <FaInfoCircle className="text-primary" />
          Technical Specifications
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid md:grid-cols-2 gap-x-12 gap-y-2">
          {Object.entries((reccomendedLaptop?.specs as LaptopSpecs) || {}).map(
            ([key, value]) => (
              <div key={key} className="flex flex-col space-y-2">
                <div className="flex justify-between items-center py-2">
                  <span className="text-muted-foreground capitalize">{key}</span>
                  <span className="font-medium text-right break-words max-w-[60%]">
                    {typeof value === "number"
                      ? `${value} ${
                          key === "ram" || key === "storage" ? "GB" : "Wh"
                        }`
                      : String(value)}
                  </span>
                </div>
                <Separator />
              </div>
            )
          )}
        </div>
      </CardContent>
    </Card>
  );
}
