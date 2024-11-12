import Image from "next/image";

export default function HeroSection() {
  return (
    <section className="min-h-screen flex items-center pt-16 sm:pt-20 bg-gradient-to-br from-blue-50 to-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12">
          <div className="flex-1 space-y-6 text-center md:text-left">
            <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold">
              Your Laptop Buying experience just got better.
            </h1>
            <p className="text-lg sm:text-xl text-gray-600">
              Harnessing cutting-edge AI technology for personalized laptop
              recommendations.
            </p>
            <button className="px-6 sm:px-8 py-3 sm:py-4 bg-blue-600 text-white rounded-full text-lg hover:bg-blue-700 transition-colors">
              Get Started
            </button>
          </div>
          <div className="flex-1">
            <Image
              src="/873966.jpg"
              alt="Laptop"
              width={600}
              height={400}
              className="w-full h-auto rounded-lg shadow-xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
