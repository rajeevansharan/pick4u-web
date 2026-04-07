"use client";

import React, { useState } from "react";
import { Search, Heart, ShoppingBag, ChevronDown, Menu } from "lucide-react";
import Link from "next/link";

const Navbar = () => {
  return (
    <div className="w-full">
      {/* Top Announcement Bar */}
      <div className="w-full bg-gradient-to-r from-orange-400 to-orange-500 text-white text-center py-2 text-sm font-medium">
        Free shipping on orders over $100! Shop now.
      </div>

      {/* Main Navbar */}
      <nav className="bg-white border-b border-slate-100 px-4 md:px-8 py-4">
        <div className="max-w-7xl mx-auto flex items-center justify-between gap-4">
          
          {/* Logo */}
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 bg-orange-100 rounded-lg flex items-center justify-center">
              {/* Simplified logo placeholder */}
              <svg viewBox="0 0 24 24" className="w-6 h-6 text-orange-600 fill-current">
                <path d="M12 2L4.5 20.29l.71.71L12 18l6.79 3 .71-.71z" />
              </svg>
            </div>
          </div>

          {/* Nav Links - Desktop */}
          <div className="hidden lg:flex items-center gap-8 text-slate-600 font-medium">
            <Link href="/" className="text-blue-600 border-b-2 border-blue-600 pb-1">Home</Link>
            <Link href="/shop" className="hover:text-blue-600 transition-colors">Shop</Link>
            <div className="flex items-center gap-1 cursor-pointer hover:text-blue-600 transition-colors">
              Categories <ChevronDown size={16} />
            </div>
            <Link href="/about" className="hover:text-blue-600 transition-colors">About</Link>
            <Link href="/contact" className="hover:text-blue-600 transition-colors">Contact</Link>
          </div>

          {/* Search Bar - Desktop */}
          <div className="hidden md:flex flex-1 max-w-md relative">
            <input 
              type="text" 
              placeholder="Search products..." 
              className="w-full bg-slate-50 border border-slate-200 rounded-full px-5 py-2 pr-10 focus:outline-none focus:ring-2 focus:ring-blue-100 transition-all text-sm"
            />
            <Search className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
          </div>

          {/* Action Icons */}
          <div className="flex items-center gap-4">
            <div className="relative cursor-pointer hover:text-blue-600 transition-colors">
              <Heart size={24} className="text-slate-600" />
              <span className="absolute -top-2 -right-2 bg-pink-500 text-white text-[10px] w-4 h-4 rounded-full flex items-center justify-center">2</span>
            </div>
            <div className="relative cursor-pointer hover:text-blue-600 transition-colors">
              <ShoppingBag size={24} className="text-slate-600" />
              <span className="absolute -top-2 -right-2 bg-orange-500 text-white text-[10px] w-4 h-4 rounded-full flex items-center justify-center">3</span>
            </div>
            <button className="lg:hidden text-slate-600">
              <Menu size={24} />
            </button>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
