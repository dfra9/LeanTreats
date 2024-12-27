import Link from "next/link";
import { Facebook, Instagram, Twitter } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-[#1E1E1E] text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-2xl font-bold mb-4">
              LEAN<span className="text-[#F7C94B]">TREATS</span>
            </h3>
            <p className="text-gray-400">
              2024 Lean Treats
              <br />
              All rights reserved
            </p>
            <div className="flex gap-4 mt-4">
              <Link href="#" className="hover:text-[#F7C94B]">
                <Facebook />
              </Link>
              <Link href="#" className="hover:text-[#F7C94B]">
                <Instagram />
              </Link>
              <Link href="#" className="hover:text-[#F7C94B]">
                <Twitter />
              </Link>
            </div>
          </div>
          <div>
            <h4 className="font-bold mb-4">Explore</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/about" className="text-gray-400 hover:text-white">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/faq" className="text-gray-400 hover:text-white">
                  FAQ
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold mb-4">Menu</h4>
            <ul className="space-y-2">
              <li>
                <Link href="#menu" className="text-gray-400 hover:text-white">
                  Menu
                </Link>
              </li>
              <li>
                <Link href="#order" className="text-gray-400 hover:text-white">
                  Order
                </Link>
              </li>
              <li>
                <Link
                  href="#contact"
                  className="text-gray-400 hover:text-white"
                >
                  Contact Information
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}
