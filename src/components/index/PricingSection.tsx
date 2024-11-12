import { FiCheck } from "react-icons/fi";

export default function PricingSection() {
  return (
    <section className="py-16 sm:py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-4">
          Simple Pricing
        </h2>
        <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">
          Choose the plan that best fits your needs. All plans include
          AI-powered recommendations.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {/* Free Tier */}
          <div className="bg-gray-50 rounded-xl p-8 border border-gray-100 hover:border-blue-500 transition-all">
            <div className="text-center mb-8">
              <div className="text-gray-600 font-semibold mb-2">Free Tier</div>
              <div className="text-4xl font-bold mb-4">$0</div>
              <p className="text-gray-600">
                Basic recommendations to get you started
              </p>
            </div>
            <div className="space-y-4 mb-8">
              {[
                "Basic AI Model",
                "Simple Recommendations",
                "Basic Specifications",
                "Limited Accuracy",
                "No AI Chat Support",
                "No Customer Support",
              ].map((feature) => (
                <div key={feature} className="flex items-center gap-3">
                  <FiCheck className="text-gray-400" />
                  <span className="text-gray-600">{feature}</span>
                </div>
              ))}
            </div>
            <button className="w-full py-3 px-4 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300 transition-colors">
              Get Started
            </button>
          </div>

          {/* Pro Monthly Tier */}
          <div className="bg-white rounded-xl p-8 border-2 border-blue-500 shadow-lg relative">
            <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
              <span className="bg-blue-500 text-white px-4 py-1 rounded-full text-sm">
                Most Popular
              </span>
            </div>
            <div className="text-center mb-8">
              <div className="text-blue-600 font-semibold mb-2">
                Pro Monthly
              </div>
              <div className="text-4xl font-bold mb-4">$5</div>
              <p className="text-gray-600">per month</p>
            </div>
            <div className="space-y-4 mb-8">
              {[
                "Advanced AI Model",
                "High Accuracy Recommendations",
                "Detailed Specifications",
                "AI Chat Support",
                "24/7 Customer Support",
                "Price Comparisons",
              ].map((feature) => (
                <div key={feature} className="flex items-center gap-3">
                  <FiCheck className="text-blue-600" />
                  <span>{feature}</span>
                </div>
              ))}
            </div>
            <button className="w-full py-3 px-4 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
              Subscribe Monthly
            </button>
          </div>

          {/* Pro Annual Tier */}
          <div className="bg-gray-50 rounded-xl p-8 border border-gray-100 hover:border-blue-500 transition-all">
            <div className="text-center mb-8">
              <div className="text-blue-600 font-semibold mb-2">Pro Annual</div>
              <div className="text-4xl font-bold mb-2">$40</div>
              <p className="text-gray-600 mb-2">per year</p>
              <div className="text-green-600 text-sm font-medium">
                Save $20 yearly
              </div>
            </div>
            <div className="space-y-4 mb-8">
              {[
                "Everything in Pro Monthly",
                "Annual Price Lock",
                "Priority Support",
                "Early Access to Features",
                "Bulk Comparisons",
                "Best Value",
              ].map((feature) => (
                <div key={feature} className="flex items-center gap-3">
                  <FiCheck className="text-blue-600" />
                  <span>{feature}</span>
                </div>
              ))}
            </div>
            <button className="w-full py-3 px-4 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
              Subscribe Yearly
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
