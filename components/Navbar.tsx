"use client"
import Link from "next/link";
import { Globe } from "lucide-react";
import SearchBar from "./Searchbar";

interface NavbarProps {
    onSearch: (query: string) => void;
  }

export default function Navbar({ onSearch }: NavbarProps) {
  const navigation = [
    { name: "Hotel", href: "/" },
    { name: "Flight", href: "/" },
    { name: "Train", href: "/about" },
    { name: "Travel", href: "/contact" },
    { name: "Car Rental", href: "/rental" },
  ];

  return (
    <nav className="fixed top-2 left-0 right-0 z-50 bg-transparent">
      <div className="w-full mx-auto px-6">
        <div className="flex h-20 items-center justify-between">
          <div className="flex items-center gap-8">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-2">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg ">
                <span className="text-xl font-bold text-white">H</span>
              </div>
              <span className="text-lg font-bold text-white">Horizone</span>
            </Link>

            <div className="flex items-center gap-6">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="text-sm font-semibold text-white transition-colors hover:text-white/80"
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>

          <div className="flex-1 max-w-md mx-8">
            <SearchBar onSearch={onSearch}/>
          </div>

          <div className="flex items-center gap-4">
            <button className="flex items-center gap-2 px-3 py-2 rounded-full bg-white/10 backdrop-blur-sm hover:bg-white/20 transition-colors">
              <Globe className="w-5 h-5 text-white" />
              <span className="text-sm font-semibold text-white">EN</span>
            </button>

            <Link href="/login" className="text-sm font-semibold text-white hover:text-white/80 transition-colors">
              Log In
            </Link>

            <Link
              href="/signup"
              className="px-6 py-2.5 bg-white text-gray-900 text-sm font-semibold rounded-lg hover:bg-white/90 transition-colors"
            >
              Sign Up
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}