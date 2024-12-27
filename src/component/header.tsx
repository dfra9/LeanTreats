import Link from "next/link";

export function Header() {
  return (
    <header className="fixed top-0 w-full bg-white/80 backdrop-blur-sm z-50">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <Link href="/" className="text-[#00584D] text-2xl font-bold">
          LEAN<span className="text-[#F7C94B]">TREATS</span>
        </Link>
        <nav className="hidden md:flex gap-8">
          <Link
            href="/about"
            className="text-[#00584D] hover:text-[#F7C94B] transition-colors"
          >
            ABOUT US
          </Link>
          <Link
            href="/faq"
            className="text-[#00584D] hover:text-[#F7C94B] transition-colors"
          >
            FAQ
          </Link>
          <Link
            href="/contact"
            className="text-[#00584D] hover:text-[#F7C94B] transition-colors"
          >
            CONTACT
          </Link>
        </nav>
      </div>
    </header>
  );
}
