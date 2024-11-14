import { FaCheckCircle, FaTimesCircle } from "react-icons/fa";
import { Laptop } from "@/lib/interfaces/interfaces";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function ProsAndCons({
  reccomendedLaptop,
}: {
  reccomendedLaptop: Laptop;
}) {
  return (
    <div className="grid md:grid-cols-2 gap-6 mb-16">
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-emerald-600">
            <FaCheckCircle className="h-5 w-5" />
            Advantages
          </CardTitle>
        </CardHeader>
        <CardContent>
          <ul className="space-y-3">
            {reccomendedLaptop?.pros?.map((pro: string, index: number) => (
              <li
                key={index}
                className="flex items-center gap-3 text-muted-foreground hover:text-foreground transition-colors"
              >
                <div className="w-1.5 h-1.5 rounded-full bg-emerald-600" />
                {pro}
              </li>
            )) || []}
          </ul>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-destructive">
            <FaTimesCircle className="h-5 w-5" />
            Limitations
          </CardTitle>
        </CardHeader>
        <CardContent>
          <ul className="space-y-3">
            {reccomendedLaptop?.cons?.map((con: string, index: number) => (
              <li
                key={index}
                className="flex items-center gap-3 text-muted-foreground hover:text-foreground transition-colors"
              >
                <div className="w-1.5 h-1.5 rounded-full bg-destructive" />
                {con}
              </li>
            )) || []}
          </ul>
        </CardContent>
      </Card>
    </div>
  );
}
