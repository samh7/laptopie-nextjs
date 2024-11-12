import { useCases } from "@/data/data";

export default function UseCases() {
  return (
    <section className="py-16 sm:py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12">
          Find Your Perfect Laptop
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {useCases.map(({ icon: Icon, title, description }) => (
            <div
              key={title}
              className="p-6 bg-white rounded-xl border border-gray-100 hover:border-blue-500 transition-all"
            >
              <Icon className="w-8 h-8 text-blue-600 mb-4" />
              <h3 className="text-xl font-semibold mb-2">{title}</h3>
              <p className="text-gray-600">{description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
