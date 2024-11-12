import { FiCheck } from "react-icons/fi";

export default function LaptopTips() {
  return (
    <section className="py-16 sm:py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12">
          Essential Laptop Tips
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="space-y-6">
            <div className="flex items-start gap-4">
              <FiCheck className="w-6 h-6 text-blue-600 mt-1" />
              <div>
                <h3 className="text-xl font-semibold mb-2">
                  Consider Battery Life
                </h3>
                <p className="text-gray-600">
                  Look for laptops with at least 8 hours of battery life for
                  optimal portability.
                </p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <FiCheck className="w-6 h-6 text-blue-600 mt-1" />
              <div>
                <h3 className="text-xl font-semibold mb-2">RAM Matters</h3>
                <p className="text-gray-600">
                  8GB is minimum for most users, 16GB ideal for power users.
                </p>
              </div>
            </div>
          </div>
          <div className="space-y-6">
            <div className="flex items-start gap-4">
              <FiCheck className="w-6 h-6 text-blue-600 mt-1" />
              <div>
                <h3 className="text-xl font-semibold mb-2">Storage Type</h3>
                <p className="text-gray-600">
                  SSD storage provides faster performance than traditional HDDs.
                </p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <FiCheck className="w-6 h-6 text-blue-600 mt-1" />
              <div>
                <h3 className="text-xl font-semibold mb-2">Display Quality</h3>
                <p className="text-gray-600">
                  Consider resolution and panel type based on your usage.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
