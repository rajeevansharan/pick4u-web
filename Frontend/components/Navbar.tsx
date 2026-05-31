"use client";

import React, { useState } from "react";
import { Search, Heart, ShoppingBag, ChevronDown, Menu, User } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const pathname = usePathname();

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const getLinkClasses = (path: string) => {
    return pathname === path
      ? "text-blue-600 text-sm border-b-2 border-blue-600 pb-1"
      : "hover:text-blue-600 text-sm transition-colors";
  };

  return (
    <div className="w-full">
      {/* Top Announcement Bar */}
      <div className="w-full bg-gradient-to-r from-orange-400 to-orange-500 text-white text-center py-2 text-sm font-medium">
        Free shipping on orders over $100! Shop now.
      </div>

      {/* Main Navbar */}
      <nav className="bg-white border-b border-slate-100 px-4 md:px-8 py-4">
        <div className="max-w-7xl mx-auto flex items-center justify-between gap-4">

          {/* Logo (Left side) */}
          <div className="flex-1">
            <Link href="/" className="flex items-center gap-2 w-max">
              <Image
                src="/logo.svg"
                alt="Pick4U Logo"
                width={80}
                height={80}
                className="w-20 h-20 rounded-lg object-contain"
              />
            </Link>
          </div>

          {/* Nav Links - Desktop (Center) */}
          <div className="hidden lg:flex items-center justify-center gap-8 text-slate-600 font-medium flex-none">
            <Link href="/" className={getLinkClasses("/")}>Home</Link>
            <Link href="/shop" className={getLinkClasses("/shop")}>Shop</Link>
            <Link href="/categories" className={getLinkClasses("/categories")}>Categories</Link>
            <Link href="/about" className={getLinkClasses("/about")}>About</Link>
            <Link href="/contact" className={getLinkClasses("/contact")}>Contact</Link>
          </div>

          {/* Action Icons (Right side) */}
          <div className="flex-1 flex justify-end items-center gap-4">
            <div className="relative cursor-pointer hover:text-blue-600 transition-colors">
              <Heart size={24} className="text-slate-600" />
              <span className="absolute -top-2 -right-2 bg-pink-500 text-white text-[10px] w-4 h-4 rounded-full flex items-center justify-center">2</span>
            </div>
            <div className="relative cursor-pointer hover:text-blue-600 transition-colors">
              <ShoppingBag size={24} className="text-slate-600" />
              <span className="absolute -top-2 -right-2 bg-orange-500 text-white text-[10px] w-4 h-4 rounded-full flex items-center justify-center">3</span>
            </div>
            <div className="relative cursor-pointer hover:text-blue-600 transition-colors hidden lg:block border-l border-slate-200 pl-4 ml-2">
              <User size={24} className="text-slate-600" />
            </div>
            <div className="relative cursor-pointer hover:text-blue-600 transition-colors lg:hidden">
              <User size={24} className="text-slate-600" />
            </div>
            <button className="lg:hidden text-slate-600 ml-2" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
              <Menu size={24} />
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden mt-4 pt-4 border-t border-slate-100 flex flex-col gap-4">
            <Link href="/" className={getLinkClasses("/")} onClick={() => setIsMobileMenuOpen(false)}>Home</Link>
            <Link href="/shop" className={getLinkClasses("/shop")} onClick={() => setIsMobileMenuOpen(false)}>Shop</Link>
            <Link href="/categories" className={getLinkClasses("/categories")} onClick={() => setIsMobileMenuOpen(false)}>Categories</Link>
            <Link href="/about" className={getLinkClasses("/about")} onClick={() => setIsMobileMenuOpen(false)}>About</Link>
            <Link href="/contact" className={getLinkClasses("/contact")} onClick={() => setIsMobileMenuOpen(false)}>Contact</Link>

          </div>
        )}
      </nav>
    </div>
  );
};

export default Navbar;
