import { BiChip, BiExpandAlt } from "react-icons/bi";
import { FaBatteryFull } from "react-icons/fa";
import { Laptop } from "@/lib/interfaces/interfaces";
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle
} from "@/components/ui/card";

export default function KeyFeatures({
  reccomendedLaptop,
}: {
  reccomendedLaptop: Laptop;
}) {
  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      <div className="grid md:grid-cols-3 gap-6">
        <Card>
          <CardHeader>
            <BiExpandAlt className="text-primary h-6 w-6 mb-2" />
            <CardTitle>Portable Design</CardTitle>
            <CardDescription>
              At just {reccomendedLaptop?.specs.weight}, perfect for on-the-go
              productivity
            </CardDescription>
          </CardHeader>
        </Card>

        <Card>
          <CardHeader>
            <BiChip className="text-primary h-6 w-6 mb-2" />
            <CardTitle>Powerful Performance</CardTitle>
            <CardDescription>
              {reccomendedLaptop?.specs.cpu} with {reccomendedLaptop?.specs.ram}
              GB RAM
            </CardDescription>
          </CardHeader>
        </Card>

        <Card>
          <CardHeader>
            <FaBatteryFull className="text-primary h-6 w-6 mb-2" />
            <CardTitle>All-Day Battery</CardTitle>
            <CardDescription>
              {reccomendedLaptop?.specs.battery} hours of usage
            </CardDescription>
          </CardHeader>
        </Card>
      </div>
    </div>
  );
}
