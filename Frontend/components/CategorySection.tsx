"use client";

import React from "react";
import Link from "next/link";
import { ChevronLeft, ChevronRight, ArrowRight } from "lucide-react";

const categories = [
  { 
    name: "Bags", 
    icon: "https://images.unsplash.com/photo-1548036328-c9fa89d128fa?q=80&w=2069&auto=format&fit=crop", 
    color: "bg-pink-50" 
  },
  { 
    name: "Perfumes", 
    icon: "https://images.unsplash.com/photo-1541643600914-78b084683601?q=80&w=1904&auto=format&fit=crop", 
    color: "bg-blue-50" 
  },
  { 
    name: "Jewelry", 
    icon: "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?q=80&w=2070&auto=format&fit=crop", 
    color: "bg-amber-50" 
  },
  { 
    name: "Cups", 
    icon: "https://images.unsplash.com/photo-1517256011271-bfca2053974d?q=80&w=1887&auto=format&fit=crop", 
    color: "bg-purple-50" 
  },
  { 
    name: "Accessories", 
    icon: "https://images.unsplash.com/photo-1523206489230-c012c64b2b48?q=80&w=1887&auto=format&fit=crop", 
    color: "bg-green-50" 
  },
];

const CategorySection = ({ basePath = "/shop" }: { basePath?: string }) => {
  return (
    <section className="px-4 md:px-8 py-12 max-w-7xl mx-auto">
      <div className="flex items-center justify-between mb-10">
        <h2 className="text-2xl md:text-3xl font-bold text-slate-900 tracking-tight">Shop by Category</h2>
        <div className="flex gap-2">
          <button className="w-10 h-10 rounded-full border border-slate-200 flex items-center justify-center text-slate-400 hover:text-blue-600 hover:border-blue-600 transition-all">
            <ChevronLeft size={20} />
          </button>
          <button className="w-10 h-10 rounded-full border border-slate-200 flex items-center justify-center text-slate-400 hover:text-blue-600 hover:border-blue-600 transition-all">
            <ChevronRight size={20} />
          </button>
        </div>
      </div>

      <div className="flex items-center justify-center flex-wrap gap-4 sm:gap-6 pb-4">
        {categories.map((cat, idx) => (
          <Link href={`${basePath}?category=${encodeURIComponent(cat.name)}`} key={idx} className="flex flex-col items-center gap-4 flex-shrink-0 group cursor-pointer">
            <div className={`w-24 h-24 sm:w-28 sm:h-28 md:w-36 md:h-36 ${cat.color} rounded-full flex items-center justify-center overflow-hidden transition-transform group-hover:scale-105 group-hover:shadow-lg group-hover:shadow-slate-100`}>
              <img 
                src={cat.icon} 
                className="w-[70%] h-[70%] object-cover rounded-xl group-hover:rotate-6 transition-transform" 
                alt={cat.name} 
              />
            </div>
            <span className="text-sm font-semibold text-slate-600 group-hover:text-blue-600 transition-colors">
              {cat.name}
            </span>
          </Link>
        ))}

        {/* View All */}
        <Link href={basePath} className="flex flex-col items-center gap-4 flex-shrink-0 group cursor-pointer">
          <div className="w-24 h-24 sm:w-28 sm:h-28 md:w-36 md:h-36 bg-slate-50 rounded-full flex items-center justify-center transition-transform group-hover:scale-105 group-hover:bg-blue-600 group-hover:text-white">
            <ArrowRight size={32} className="text-slate-300 group-hover:text-white" />
          </div>
          <span className="text-sm font-semibold text-slate-600 group-hover:text-blue-600 transition-colors">
            View All
          </span>
        </Link>
      </div>
    </section>
  );
};

export default CategorySection;
