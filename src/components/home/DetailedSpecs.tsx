import Link from "next/link";

export default function DetailedSpecs() {
  return (
    <div className="text-center mt-24 mb-16">
      <Link
        href="/home/specifications"
        className="inline-flex items-center justify-center rounded-md text-sm font-medium
        transition-colors focus-visible:outline-none focus-visible:ring-2 
        focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50
        disabled:pointer-events-none ring-offset-background
        bg-primary text-primary-foreground hover:bg-primary/90
        h-10 px-4 py-2"
      >
        View Detailed Specifications
      </Link>
    </div>
  );
}
