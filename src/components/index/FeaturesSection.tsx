import { FiAward, FiCpu, FiSmile } from "react-icons/fi";

export default function FeaturesSection() {
  return (
    <section className="py-16 sm:py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            What is different about us?
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto">
            Our system offers an incredibly intuitive user interface that makes
            navigating Laptopie a breeze!
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {[
            { icon: FiCpu, title: "AI-Powered" },
            { icon: FiAward, title: "Accurate" },
            { icon: FiSmile, title: "Easy to Use" },
          ].map(({ icon: Icon, title }) => (
            <div
              key={title}
              className="p-6 rounded-xl bg-gray-50 hover:bg-gray-100 transition-colors"
            >
              <Icon className="w-8 h-8 mb-4 text-blue-600" />
              <h3 className="text-xl font-semibold mb-4">{title}</h3>
              <p className="text-gray-600">
                Experience seamless laptop shopping with our{" "}
                {title.toLowerCase()} recommendation system.
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
