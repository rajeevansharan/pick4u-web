"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

const Hero = () => {
  return (
    <section className="px-4 md:px-8 py-10 max-w-7xl mx-auto">
      <div className="relative bg-[#f0f4f8] rounded-[2rem] overflow-hidden min-h-[500px] flex flex-col md:flex-row items-center px-6 md:px-16 pt-12 md:pt-0">
        
        {/* Text Content */}
        <div className="flex-1 z-10 text-center md:text-left">
          <span className="inline-block bg-pink-100 text-pink-600 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider mb-6">
            New Collection 2026
          </span>
          <h1 className="text-4xl sm:text-5xl md:text-7xl font-extrabold text-slate-900 leading-[1.1] mb-6">
            Trending Deals <br />
            <span className="gradient-text">Just For You</span>
          </h1>
          <p className="text-slate-500 text-lg md:text-xl max-w-md mb-8 leading-relaxed">
            Discover our premium selection of bags, accessories, and more at unbeatable prices.
          </p>
          <Link href="/shop" className="inline-flex bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-full font-semibold items-center gap-2 group transition-all transform hover:scale-105 active:scale-95 shadow-lg shadow-blue-200">
            Shop Now
            <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        {/* Hero Image */}
        <div className="relative flex-1 h-[300px] sm:h-[400px] md:h-[600px] w-full mt-8 md:mt-0">
          {/* Using a high quality Unsplash image of a woman with shopping bags */}
          <div className="absolute inset-x-0 bottom-0 top-0 flex items-end justify-center md:justify-end">
            <img 
              src="https://images.unsplash.com/photo-1483985988355-763728e1935b?q=80&w=2070&auto=format&fit=crop" 
              alt="Trending Fashion"
              className="object-contain h-[90%] md:h-full w-auto drop-shadow-2xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
