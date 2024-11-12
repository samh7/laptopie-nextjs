import { SpecGuideCard } from "./SpecGuideCard";
import { specGuides } from "@/data/data";

export default function SpecGuide() {
  return (
    <section className="mt-32 mb-16">
      <div className="text-center max-w-3xl mx-auto mb-12">
        <h2 className="text-3xl font-bold mb-4">
          Understanding Specifications
        </h2>
        <p className="text-slate-600">
          Make informed decisions by understanding the key components that power
          your laptop
        </p>
      </div>
      <div className="grid md:grid-cols-3 gap-8">
        {specGuides.map((guide, index) => (
          <SpecGuideCard
            key={index}
            icon={guide.icon}
            title={guide.title}
            description={guide.description}
            items={guide.items}
          />
        ))}
      </div>
    </section>
  );
}
