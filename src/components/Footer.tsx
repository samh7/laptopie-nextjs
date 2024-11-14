import Link from "next/link"

export default function Footer() {
  return (
    <footer className="w-screen border-t px-10 bg-background">
      <div className="container flex flex-col gap-4 py-10 md:flex-row md:gap-8">
        <div className="flex flex-col gap-4 md:w-1/3">
          <div className="text-lg font-semibold">Laptopie</div>
          <p className="text-sm text-muted-foreground">
            Your AI-powered laptop recommendation system. Find the perfect laptop for your needs.
          </p>
        </div>
        <div className="flex-1 grid grid-cols-2 gap-8 sm:grid-cols-3">
          <div className="space-y-3">
            <h4 className="text-sm font-medium">Resources</h4>
            <ul className="space-y-2.5">
              <li>
                <Link href="/home/specifications" className="text-sm text-muted-foreground hover:text-primary">
                  Specifications
                </Link>
              </li>
              <li>
                <Link href="/quiz" className="text-sm text-muted-foreground hover:text-primary">
                  Laptop Quiz
                </Link>
              </li>
            </ul>
          </div>
          <div className="space-y-3">
            <h4 className="text-sm font-medium">Company</h4>
            <ul className="space-y-2.5">
              <li>
                <Link href="/about" className="text-sm text-muted-foreground hover:text-primary">
                  About
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-sm text-muted-foreground hover:text-primary">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          <div className="space-y-3">
            <h4 className="text-sm font-medium">Legal</h4>
            <ul className="space-y-2.5">
              <li>
                <Link href="/privacy" className="text-sm text-muted-foreground hover:text-primary">
                  Privacy
                </Link>
              </li>
              <li>
                <Link href="/terms" className="text-sm text-muted-foreground hover:text-primary">
                  Terms
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="border-t">
        <div className="container flex h-14 items-center justify-between">
          <p className="text-sm text-muted-foreground">
            © 2024 Laptopie. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
} 