"use client";

import React, { useState, useEffect } from "react";
import { Zap, Heart, Plus, Star } from "lucide-react";
import Image from "next/image";

const products = [
  {
    id: 1,
    name: "Pastel Pink Crossbody Bag",
    category: "Bags",
    price: 89.00,
    oldPrice: 129.00,
    discount: "-20%",
    image: "/Pastel Pink Crossbody Bag.avif",
    rating: 4,
    reviews: 24,
    badge: "sale"
  },
  {
    id: 2,
    name: "Floral Essence Eau De Parfum",
    category: "Perfumes",
    price: 145.00,
    oldPrice: 170.00,
    discount: "-15%",
    image: "/Perfumes.avif",
    rating: 5,
    reviews: 42,
    badge: "sale"
  },
  {
    id: 3,
    name: "Rose Gold Smart Watch",
    category: "Accessories",
    price: 199.00,
    oldPrice: 249.00,
    discount: "HOT",
    image: "/Accessories.avif",
    rating: 4,
    reviews: 56,
    badge: "hot"
  },
  {
    id: 4,
    name: "Diamond Pendant Necklace",
    category: "Jewelry",
    price: 299.00,
    oldPrice: 599.00,
    discount: "-50%",
    image: "/Jewelry.avif",
    rating: 5,
    reviews: 18,
    badge: "sale"
  }
];

const FlashDeals = () => {
  const [timeLeft, setTimeLeft] = useState({ hrs: 5, min: 42, sec: 18 });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        if (prev.sec > 0) return { ...prev, sec: prev.sec - 1 };
        if (prev.min > 0) return { ...prev, min: prev.min - 1, sec: 59 };
        if (prev.hrs > 0) return { ...prev, hrs: prev.hrs - 1, min: 59, sec: 59 };
        return prev;
      });
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="px-4 md:px-8 py-12 max-w-7xl mx-auto">
      <div className="bg-white rounded-[2rem] p-8 md:p-12 shadow-sm border border-slate-50">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-6 mb-12">
          <div className="flex items-center gap-4">
            <div className="bg-orange-100 p-3 rounded-full">
              <Zap className="text-orange-600 fill-orange-600" size={24} />
            </div>
            <div>
              <h2 className="text-2xl font-bold text-slate-900">Flash Deals</h2>
              <p className="text-slate-400 text-sm">Hurry up! Deals end soon.</p>
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-3 sm:gap-6 justify-center">
            <div className="flex flex-col items-center">
              <div className="bg-slate-900 text-white w-12 h-12 rounded-lg flex items-center justify-center font-bold text-xl mb-1">
                {String(timeLeft.hrs).padStart(2, '0')}
              </div>
              <span className="text-[10px] text-slate-400 font-bold uppercase tracking-widest">Hrs</span>
            </div>
            <div className="text-2xl font-bold text-slate-300">:</div>
            <div className="flex flex-col items-center">
              <div className="bg-slate-900 text-white w-12 h-12 rounded-lg flex items-center justify-center font-bold text-xl mb-1">
                {String(timeLeft.min).padStart(2, '0')}
              </div>
              <span className="text-[10px] text-slate-400 font-bold uppercase tracking-widest">Min</span>
            </div>
            <div className="text-2xl font-bold text-slate-300">:</div>
            <div className="flex flex-col items-center">
              <div className="bg-pink-600 text-white w-12 h-12 rounded-lg flex items-center justify-center font-bold text-xl mb-1">
                {String(timeLeft.sec).padStart(2, '0')}
              </div>
              <span className="text-[10px] text-slate-400 font-bold uppercase tracking-widest">Sec</span>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((product) => (
            <div key={product.id} className="group relative bg-white border border-slate-100 rounded-3xl p-4 transition-all hover:shadow-2xl hover:shadow-slate-100">
              <div className="bg-slate-50 rounded-2xl h-64 mb-4 relative overflow-hidden flex items-center justify-center">
                <Image 
                  src={product.image} 
                  alt={product.name} 
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
                
                {/* Badges */}
                <span className={`absolute top-4 left-4 ${product.badge === 'hot' ? 'bg-orange-600' : 'bg-pink-600'} text-white text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-tighter`}>
                  {product.discount}
                </span>
                
                <button className="absolute top-4 right-4 w-10 h-10 bg-white/80 backdrop-blur-md rounded-full flex items-center justify-center text-slate-600 hover:text-pink-600 transition-colors shadow-sm opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 duration-300">
                  <Heart size={20} />
                </button>
              </div>

              <div>
                <span className="text-[10px] text-slate-400 uppercase font-bold tracking-widest mb-1 block">
                  {product.category}
                </span>
                <h3 className="font-semibold text-slate-800 line-clamp-1 mb-2 group-hover:text-blue-600 transition-colors">
                  {product.name}
                </h3>
                
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={14} className={i < product.rating ? "fill-amber-400 text-amber-400" : "text-slate-200"} />
                  ))}
                  <span className="text-[10px] text-slate-400 ml-1">({product.reviews})</span>
                </div>

                <div className="flex items-center justify-between">
                  <div className="flex items-end gap-2">
                    <span className="text-xl font-bold text-slate-900">${product.price.toFixed(2)}</span>
                    <span className="text-sm text-slate-400 line-through mb-0.5">${product.oldPrice.toFixed(2)}</span>
                  </div>
                  <button className="w-10 h-10 bg-slate-50 text-slate-400 rounded-xl flex items-center justify-center hover:bg-blue-600 hover:text-white transition-all transform hover:rotate-90">
                    <Plus size={20} />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FlashDeals;
