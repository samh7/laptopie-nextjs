import { FiCheck } from "react-icons/fi";

export default function PricingSection() {
  return (
    <section className="py-16 sm:py-20">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center gap-4 text-center">
          <h2 className="font-heading text-3xl leading-[1.1] sm:text-3xl md:text-6xl">
            Affordable Pricing
          </h2>
          <p className="text-muted-foreground text-lg max-w-[900px]">
            Choose the plan that best fits your needs. All plans include
            AI-powered recommendations.
          </p>
        </div>

        <div className="flex flex-row flex-wrap justify-center gap-4 sm:gap-8 max-w-5xl mx-auto mt-12">
          <div className="w-full sm:w-[calc(33%-1rem)] min-w-[280px] max-w-[320px]">
            {/* Free Tier */}
            <div className="relative rounded-2xl bg-background p-4 sm:p-6 shadow-lg border h-full">
              <div className="flex flex-col gap-4">
                <div className="space-y-2">
                  <h3 className="font-semibold">Free Tier</h3>
                  <div className="flex items-baseline gap-1">
                    <span className="text-3xl font-bold">$0</span>
                    <span className="text-muted-foreground">/month</span>
                  </div>
                </div>
                <p className="text-muted-foreground text-sm">
                  Basic recommendations to get you started
                </p>
              </div>
              <div className="mt-6 space-y-3">
                {[
                  "Basic AI Model",
                  "Simple Recommendations",
                  "Basic Specifications",
                  "Limited Accuracy",
                  "No AI Chat Support",
                  "No Customer Support",
                ].map((feature) => (
                  <div key={feature} className="flex items-center gap-2">
                    <FiCheck className="h-4 w-4 text-muted-foreground" />
                    <span className="text-sm text-muted-foreground">{feature}</span>
                  </div>
                ))}
              </div>
              <button className="mt-6 w-full rounded-lg bg-secondary px-4 py-2 text-sm font-medium hover:bg-secondary/80 transition-colors">
                Get Started
              </button>
            </div>
          </div>

          <div className="w-full sm:w-[calc(33%-1rem)] min-w-[280px] max-w-[320px]">
            {/* Pro Monthly Tier */}
            <div className="relative rounded-2xl bg-background p-4 sm:p-6 shadow-lg border-2 border-primary h-full">
              <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                <span className="bg-primary px-3 py-1 rounded-full text-xs text-primary-foreground">
                  Most Popular
                </span>
              </div>
              <div className="flex flex-col gap-4">
                <div className="space-y-2">
                  <h3 className="font-semibold">Pro Monthly</h3>
                  <div className="flex items-baseline gap-1">
                    <span className="text-3xl font-bold">$5</span>
                    <span className="text-muted-foreground">/month</span>
                  </div>
                </div>
                <p className="text-muted-foreground text-sm">
                  Advanced features for professionals
                </p>
              </div>
              <div className="mt-6 space-y-3">
                {[
                  "Advanced AI Model",
                  "High Accuracy Recommendations",
                  "Detailed Specifications",
                  "AI Chat Support",
                  "24/7 Customer Support",
                  "Price Comparisons",
                ].map((feature) => (
                  <div key={feature} className="flex items-center gap-2">
                    <FiCheck className="h-4 w-4 text-primary" />
                    <span className="text-sm">{feature}</span>
                  </div>
                ))}
              </div>
              <button className="mt-6 w-full rounded-lg bg-primary px-4 py-2 text-sm font-medium text-primary-foreground hover:bg-primary/90 transition-colors">
                Subscribe Monthly
              </button>
            </div>
          </div>

          <div className="w-full sm:w-[calc(33%-1rem)] min-w-[280px] max-w-[320px]">
            {/* Pro Annual Tier */}
            <div className="relative rounded-2xl bg-background p-4 sm:p-6 shadow-lg border h-full">
              <div className="flex flex-col gap-4">
                <div className="space-y-2">
                  <h3 className="font-semibold">Pro Annual</h3>
                  <div className="flex items-baseline gap-1">
                    <span className="text-3xl font-bold">$40</span>
                    <span className="text-muted-foreground">/year</span>
                  </div>
                </div>
                <div className="flex flex-col gap-1">
                  <p className="text-muted-foreground text-sm">Best value option</p>
                  <p className="text-xs font-medium text-green-600">Save $20 yearly</p>
                </div>
              </div>
              <div className="mt-6 space-y-3">
                {[
                  "Everything in Pro Monthly",
                  "Annual Price Lock",
                  "Priority Support",
                  "Early Access to Features",
                  "Bulk Comparisons",
                  "Best Value",
                ].map((feature) => (
                  <div key={feature} className="flex items-center gap-2">
                    <FiCheck className="h-4 w-4 text-primary" />
                    <span className="text-sm">{feature}</span>
                  </div>
                ))}
              </div>
              <button className="mt-6 w-full rounded-lg bg-primary px-4 py-2 text-sm font-medium text-primary-foreground hover:bg-primary/90 transition-colors">
                Subscribe Yearly
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
