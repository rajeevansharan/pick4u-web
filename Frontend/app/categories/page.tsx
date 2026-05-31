"use client";

import React, { Suspense, useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Grid, List, Heart, Plus, Check, ShoppingBag } from "lucide-react";
import { useSearchParams } from "next/navigation";
import CategorySection from "@/components/CategorySection";

// Mock data based on the specific Perfumes category design
const brands = [
  { name: "Chanel", count: 12, checked: false },
  { name: "Dior", count: 8, checked: false },
  { name: "Tom Ford", count: 15, checked: false },
  { name: "Gucci", count: 13, checked: false },
];

const products = [
  {
    id: 1,
    name: "J'adore Eau De Parfum",
    brand: "Dior",
    price: 145.00,
    rating: 5,
    reviews: 156,
    badge: "Trending",
    badgeColor: "bg-amber-500",
    image: "/placeholder-perfume-1.png",
    addedToCart: false,
  },
  {
    id: 2,
    name: "N°5 Eau de Parfum",
    brand: "Chanel",
    price: 135.00,
    originalPrice: 169.00,
    rating: 4,
    reviews: 245,
    badge: "-20%",
    badgeColor: "bg-pink-500",
    image: "/placeholder-perfume-2.png",
    addedToCart: true,
  },
  {
    id: 3,
    name: "Black Orchid Parfum",
    brand: "Tom Ford",
    price: 195.00,
    rating: 5,
    reviews: 89,
    badge: null,
    image: "/placeholder-perfume-3.png",
    addedToCart: false,
  },
];

function CategoriesContent() {
  const searchParams = useSearchParams();
  const categoryQuery = searchParams.get("category");

  const [selectedBrands, setSelectedBrands] = useState<string[]>([]);
  const [minPrice, setMinPrice] = useState(0);
  const [maxPrice, setMaxPrice] = useState(250);
  const [selectedStatuses, setSelectedStatuses] = useState<string[]>([]);

  const toggleBrand = (brandName: string) => {
    setSelectedBrands(prev => 
      prev.includes(brandName) ? prev.filter(b => b !== brandName) : [...prev, brandName]
    );
  };

  const toggleStatus = (status: string) => {
    setSelectedStatuses(prev => 
      prev.includes(status) ? prev.filter(s => s !== status) : [...prev, status]
    );
  };

  return (
    <main className="min-h-screen bg-slate-50 flex flex-col font-sans">
      <Navbar />

      <div className="flex-grow pt-8">
        <CategorySection basePath="/categories" />

        {!categoryQuery ? (
          <div className="flex flex-col items-center justify-center py-12 px-4 text-center animate-in fade-in duration-500">
             <div className="w-20 h-20 bg-blue-50 rounded-full flex items-center justify-center mb-6 text-blue-500 shadow-sm border border-blue-100">
               <ShoppingBag size={32} />
             </div>
             <h2 className="text-2xl font-bold text-slate-900 mb-3 tracking-tight">Select a category to shop</h2>
             <p className="text-slate-500 max-w-md mx-auto leading-relaxed">Browse our wide range of exclusive categories above to explore the premium products we have to offer.</p>
          </div>
        ) : (
          <div className="max-w-7xl mx-auto px-4 md:px-8 pb-8 w-full">
            <hr className="mb-8 border-slate-200" />
            {/* Breadcrumb & Header */}
            <div className="mb-8">
              <div className="text-xs text-slate-500 mb-2 flex gap-2">
                <span>Home</span> / <span>Categories</span> / <span className="font-semibold text-slate-900">{categoryQuery}</span>
              </div>
              <p className="text-sm text-slate-500">Showing 1-12 of 48 products in {categoryQuery}</p>
            </div>

            <div className="flex flex-col lg:flex-row gap-8">
              {/* Sidebar */}
              <aside className="w-full lg:w-64 flex-shrink-0">
                <div className="bg-white rounded-2xl p-6 shadow-sm border border-slate-100 flex flex-col gap-8">
                  
                  {/* Brands */}
                  <div>
                    <h3 className="font-bold text-slate-900 mb-4">Brands</h3>
                    <ul className="flex flex-col gap-3">
                      {brands.map(brand => {
                        const isChecked = selectedBrands.includes(brand.name);
                        return (
                          <li key={brand.name} className="flex items-center justify-between text-sm">
                            <label className="flex items-center gap-3 cursor-pointer relative">
                              <input 
                                 type="checkbox" 
                                 checked={isChecked}
                                 onChange={() => toggleBrand(brand.name)}
                                 className="w-4 h-4 rounded border border-slate-300 focus:ring-blue-500 appearance-none bg-white checked:bg-blue-600 checked:border-blue-600 cursor-pointer"
                              />
                              {isChecked && (
                                 <Check size={12} className="text-white absolute left-[2px] top-[2px] pointer-events-none stroke-[3]" />
                              )}
                              <span className={`${isChecked ? 'text-slate-900 font-medium' : 'text-slate-600'}`}>{brand.name}</span>
                            </label>
                            <span className="text-slate-400 text-xs">({brand.count})</span>
                          </li>
                        );
                      })}
                    </ul>
                  </div>

                  {/* Price Range */}
                  <div>
                    <h3 className="font-bold text-slate-900 mb-4">Price Range</h3>
                    <div className="mb-6">
                       {/* Custom Dual Slider Track */}
                       <div className="relative h-6 flex items-center mb-4">
                         {/* Background track */}
                         <div className="absolute w-full h-1 bg-slate-200 rounded-full"></div>
                         {/* Active track */}
                         <div 
                           className="absolute h-1 bg-blue-600 rounded-full" 
                           style={{ left: `${(minPrice / 1000) * 100}%`, right: `${100 - (maxPrice / 1000) * 100}%` }}
                         ></div>
                         {/* Min thumb */}
                         <input 
                           type="range" 
                           min="0" 
                           max="1000" 
                           value={minPrice} 
                           onChange={e => {
                             const val = Math.min(Number(e.target.value), maxPrice - 10);
                             setMinPrice(val);
                           }} 
                           className="absolute w-full appearance-none bg-transparent pointer-events-none [&::-webkit-slider-thumb]:pointer-events-auto [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:w-4 [&::-webkit-slider-thumb]:h-4 [&::-webkit-slider-thumb]:bg-blue-600 [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:border-2 [&::-webkit-slider-thumb]:border-white [&::-webkit-slider-thumb]:shadow-md [&::-webkit-slider-thumb]:cursor-grab hover:[&::-webkit-slider-thumb]:scale-110 transition-transform" 
                         />
                         {/* Max thumb */}
                         <input 
                           type="range" 
                           min="0" 
                           max="1000" 
                           value={maxPrice} 
                           onChange={e => {
                             const val = Math.max(Number(e.target.value), minPrice + 10);
                             setMaxPrice(val);
                           }} 
                           className="absolute w-full appearance-none bg-transparent pointer-events-none [&::-webkit-slider-thumb]:pointer-events-auto [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:w-4 [&::-webkit-slider-thumb]:h-4 [&::-webkit-slider-thumb]:bg-blue-600 [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:border-2 [&::-webkit-slider-thumb]:border-white [&::-webkit-slider-thumb]:shadow-md [&::-webkit-slider-thumb]:cursor-grab hover:[&::-webkit-slider-thumb]:scale-110 transition-transform" 
                         />
                       </div>
                       <div className="flex items-center justify-between gap-4">
                         <div className="flex items-center gap-2 border border-slate-200 rounded-lg px-3 py-2 flex-1">
                           <span className="text-slate-400 text-sm">$</span>
                           <input 
                             type="number" 
                             value={minPrice} 
                             onChange={(e) => setMinPrice(Number(e.target.value))}
                             className="w-full bg-transparent text-sm text-slate-700 outline-none" 
                           />
                         </div>
                         <span className="text-slate-400">-</span>
                         <div className="flex items-center gap-2 border border-slate-200 rounded-lg px-3 py-2 flex-1">
                           <span className="text-slate-400 text-sm">$</span>
                           <input 
                             type="number" 
                             value={maxPrice} 
                             onChange={(e) => setMaxPrice(Number(e.target.value))}
                             className="w-full bg-transparent text-sm text-slate-700 outline-none" 
                           />
                         </div>
                       </div>
                    </div>
                  </div>

                  {/* Status */}
                  <div>
                    <h3 className="font-bold text-slate-900 mb-4">Status</h3>
                    <ul className="flex flex-col gap-3">
                      {['Trending', 'On Sale'].map(status => {
                        const isChecked = selectedStatuses.includes(status);
                        return (
                          <li key={status} className="flex items-center text-sm">
                            <label className="flex items-center gap-3 cursor-pointer relative">
                              <input 
                                type="checkbox" 
                                checked={isChecked}
                                onChange={() => toggleStatus(status)}
                                className="w-4 h-4 rounded border border-slate-300 focus:ring-blue-500 appearance-none bg-white checked:bg-blue-600 checked:border-blue-600 cursor-pointer" 
                              />
                              {isChecked && (
                                 <Check size={12} className="text-white absolute left-[2px] top-[2px] pointer-events-none stroke-[3]" />
                              )}
                              <span className={`${isChecked ? 'text-slate-900 font-medium' : 'text-slate-600'}`}>{status}</span>
                            </label>
                          </li>
                        );
                      })}
                    </ul>
                  </div>

                </div>
              </aside>

              {/* Product Grid */}
              <div className="flex-1">
                
                {/* Toolbar */}
                <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center bg-white p-2 rounded-xl shadow-sm border border-slate-100 mb-6 gap-4 sm:gap-0">
                  <div className="flex gap-1 w-full sm:w-auto border-b sm:border-0 border-slate-100 pb-3 sm:pb-0">
                    <button className="p-2 bg-blue-50 text-blue-600 rounded-lg">
                      <Grid size={18} />
                    </button>
                    <button className="p-2 text-slate-400 hover:bg-slate-50 hover:text-slate-600 rounded-lg">
                      <List size={18} />
                    </button>
                  </div>
                  <div className="flex items-center justify-between sm:justify-start w-full sm:w-auto gap-3 px-1 sm:px-3">
                    <span className="text-sm text-slate-500">Sort By:</span>
                    <select className="text-sm font-medium text-slate-900 bg-transparent outline-none cursor-pointer">
                      <option>Featured</option>
                      <option>Price: Low to High</option>
                      <option>Price: High to Low</option>
                      <option>Newest Arrivals</option>
                    </select>
                  </div>
                </div>

                {/* Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 mb-12">
                  {products.map(product => (
                    <div key={product.id} className="bg-white rounded-2xl p-4 shadow-sm border border-slate-100 group hover:shadow-md transition-shadow relative flex flex-col">
                      {/* Badges */}
                      <div className="absolute top-4 left-4 z-10">
                        {product.badge && (
                          <span className={`${product.badgeColor} text-white text-[10px] font-bold px-2 py-1 rounded-full uppercase tracking-wider`}>
                            {product.badge}
                          </span>
                        )}
                      </div>
                      {/* Heart */}
                      <button className="absolute top-4 right-4 z-10 p-2 bg-white/80 hover:bg-white backdrop-blur-sm rounded-full text-slate-400 hover:text-red-500 transition-colors shadow-sm">
                        <Heart size={16} />
                      </button>

                      <div className="aspect-square bg-slate-50 rounded-xl mb-4 overflow-hidden flex items-center justify-center p-6 object-contain relative">
                         {/* Image Placeholder */}
                         <div className="w-full h-full bg-gradient-to-tr from-slate-200 to-slate-100 rounded-lg flex flex-col items-center justify-center text-slate-400 opacity-60">
                             <span className="text-[10px] font-medium uppercase tracking-widest">Image Mock</span>
                         </div>
                      </div>

                      <div className="mt-auto flex flex-col gap-1">
                        <span className="text-xs text-slate-400">{product.brand}</span>
                        <h3 className="font-semibold text-slate-900 text-sm truncate">{product.name}</h3>
                        
                        <div className="flex items-center gap-1 mb-2 mt-1">
                          {[...Array(5)].map((_, i) => (
                            <svg key={i} className={`w-3 h-3 ${i < product.rating ? 'text-amber-400' : 'text-slate-200'} fill-current`} viewBox="0 0 24 24">
                              <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                            </svg>
                          ))}
                          <span className="text-[10px] text-slate-400 ml-1">({product.reviews})</span>
                        </div>

                        <div className="flex items-center justify-between mt-1">
                          <div className="flex items-center gap-2">
                            <span className="font-bold text-slate-900">${product.price.toFixed(2)}</span>
                            {product.originalPrice && (
                              <span className="text-xs text-slate-400 line-through">${product.originalPrice.toFixed(2)}</span>
                            )}
                          </div>
                          
                          <button className={`w-8 h-8 rounded-full flex items-center justify-center transition-colors ${
                            product.addedToCart 
                              ? 'bg-blue-600 text-white' 
                              : 'bg-slate-100 text-slate-900 hover:bg-slate-200'
                          }`}>
                            {product.addedToCart ? <Check size={14} /> : <Plus size={14} />}
                          </button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Load More Pagination */}
                <div className="flex flex-col items-center mt-8">
                  <p className="text-sm text-slate-500 mb-4">You've viewed 12 of 48 products</p>
                  <div className="w-48 h-[3px] bg-slate-200 rounded-full mb-6">
                    <div className="h-full bg-blue-600 rounded-full" style={{ width: '25%' }}></div>
                  </div>
                  <button className="px-6 py-2 rounded-full border border-blue-200 text-blue-600 font-medium text-sm hover:bg-blue-50 transition-colors shadow-sm bg-white">
                    Load More Products ↓
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>

      <Footer />
    </main>
  );
}

export default function Categories() {
  return (
    <Suspense fallback={<div className="min-h-screen bg-slate-50 flex items-center justify-center font-semibold text-slate-500">Loading categories...</div>}>
      <CategoriesContent />
    </Suspense>
  );
}
