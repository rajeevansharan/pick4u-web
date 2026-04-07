"use client";

import React from "react";
import { ArrowRight } from "lucide-react";

const PromoBanners = () => {
  return (
    <section className="px-4 md:px-8 py-12 max-w-7xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        
        {/* Banner 1 - Pink */}
        <div className="relative group overflow-hidden bg-pink-100 rounded-[2.5rem] p-10 min-h-[300px] flex items-center">
          <div className="z-10 w-full md:w-3/5">
            <span className="text-pink-600 font-bold text-xs uppercase tracking-widest mb-4 block">Spring Collection</span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-slate-800 mb-6 leading-tight">
              Up to 40% Off <br /> Cosmetics
            </h2>
            <button className="bg-white text-pink-600 px-6 py-3 rounded-full font-bold text-sm shadow-sm hover:bg-pink-600 hover:text-white transition-all transform group-hover:scale-105 active:scale-95">
              Shop Now
            </button>
          </div>
          
          <div className="absolute right-0 bottom-0 w-2/5 h-full opacity-50 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none">
            <img 
              src="https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?q=80&w=2087&auto=format&fit=crop" 
              className="w-full h-full object-contain object-bottom transform group-hover:scale-110 transition-transform duration-700"
              alt="Cosmetics"
            />
          </div>
        </div>

        {/* Banner 2 - Blue */}
        <div className="relative group overflow-hidden bg-blue-100 rounded-[2.5rem] p-10 min-h-[300px] flex items-center">
          <div className="z-10 w-full md:w-3/5">
            <span className="text-blue-600 font-bold text-xs uppercase tracking-widest mb-4 block">New Arrivals</span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-slate-800 mb-6 leading-tight">
              Premium Leather <br /> Bags
            </h2>
            <button className="bg-white text-blue-600 px-6 py-3 rounded-full font-bold text-sm shadow-sm hover:bg-blue-600 hover:text-white transition-all transform group-hover:scale-105 active:scale-95 uppercase tracking-widest">
              Explore
            </button>
          </div>
          
          <div className="absolute right-0 bottom-0 w-2/5 h-full opacity-50 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none">
            <img 
              src="https://images.unsplash.com/photo-1548036328-c9fa89d128fa?q=80&w=2069&auto=format&fit=crop" 
              className="w-full h-full object-contain object-bottom transform group-hover:scale-110 transition-transform duration-700"
              alt="Leather Bags"
            />
          </div>
        </div>

      </div>
    </section>
  );
};

export default PromoBanners;
