"use client";
export default function ChoiceParalysis() {
  return (
    <section className="py-16 sm:py-20 bg-blue-600 text-white">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-6">
            End Choice Paralysis
          </h2>
          <p className="text-xl mb-8">
            Too many options? Don't worry. Our AI system simplifies the laptop
            buying process by analyzing your needs and presenting only the most
            relevant choices.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            <div className="p-4 bg-white/10 rounded-lg">
              <p className="font-semibold mb-2">Input Your Needs</p>
              <p className="text-sm">
                Tell us your requirements and preferences
              </p>
            </div>
            <div className="p-4 bg-white/10 rounded-lg">
              <p className="font-semibold mb-2">AI Analysis</p>
              <p className="text-sm">Our system processes your criteria</p>
            </div>
            <div className="p-4 bg-white/10 rounded-lg">
              <p className="font-semibold mb-2">Perfect Match</p>
              <p className="text-sm">Get personalized recommendations</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
