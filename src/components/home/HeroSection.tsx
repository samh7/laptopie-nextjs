interface HeroSectionProps {
  title: string;
  description: string;
  imageSrc: string;
}

export function HeroSection({ title, description, imageSrc }: HeroSectionProps) {
  return (
    <div className="bg-gradient-to-r from-[#0067b8] to-[#2b5797] text-white py-20">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">{title}</h1>
            <p className="text-xl opacity-90 max-w-2xl mb-8">{description}</p>
          </div>
          <div className="relative hidden md:block">
            <div className="absolute inset-0 bg-black/20 rounded-2xl"></div>
            <img
              src={imageSrc}
              alt="Modern Laptop"
              className="w-full rounded-lg shadow-lg transform hover:scale-[1.02] transition-transform duration-300"
            />
          </div>
        </div>
      </div>
    </div>
  );
} 