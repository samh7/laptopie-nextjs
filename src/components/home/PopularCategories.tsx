import { laptopCategories } from "@/data/data";
import { CategoryCard } from "./CategoryCard";

export default function PopularCategories() {
  return (
    <section className="mt-24 relative">
      <div className="text-center max-w-3xl mx-auto mb-12">
        <h2 className="text-3xl font-bold mb-4">Popular Laptop Categories</h2>
        <p className="text-slate-600">
          Explore our curated selection of laptops designed for specific needs
          and use cases
        </p>
      </div>
      <div className="grid md:grid-cols-4 gap-6">
        {laptopCategories.map((category, index) => (
          <CategoryCard
            key={index}
            icon={category.icon}
            title={category.title}
            description={category.description}
            specs={category.specs}
          />
        ))}
      </div>
    </section>
  );
}
