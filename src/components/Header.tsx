import Link from 'next/link';

export default function Header() {
  return (
    <header 
      className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md"
      // initial={{ y: -100 }}
      // animate={{ y: 0 }}
      // transition={{ duration: 0.5 }}
    >
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold text-blue-600">Laptopie</Link>
        <nav className="hidden md:flex gap-8">
          {['Home', 'Blog', 'About Us', 'Contact Us'].map((item) => (
            <Link 
              key={item} 
              href={`/${item.toLowerCase().replace(' ', '-')}`}
              className="hover:text-blue-600 transition-colors"
            >
              {item}
            </Link>
          ))}
        </nav>
        <div className="flex gap-4">
          <Link href="/login" className="px-4 py-2 rounded-full border border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white transition-colors">
            Login
          </Link>
          <Link href="/signup" className="px-4 py-2 rounded-full bg-blue-600 text-white hover:bg-blue-700 transition-colors">
            Sign Up
          </Link>
        </div>
      </div>
    </header>
  );
} 