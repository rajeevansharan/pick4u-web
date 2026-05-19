import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Grid, List, Heart, Plus, Check } from "lucide-react";

const categories = [
  { name: "All Products", count: 148, checked: true },
  { name: "Bags", count: 42, checked: false },
  { name: "Perfumes", count: 38, checked: false },
  { name: "Jewelry", count: 26, checked: false },
  { name: "Accessories", count: 42, checked: false },
];

const products = [
  {
    id: 1,
    name: "Pastel Pink Crossbod...",
    category: "Bags",
    price: 89.00,
    originalPrice: 120.00,
    rating: 4,
    reviews: 24,
    badge: "-30%",
    badgeColor: "bg-pink-500",
    image: "/placeholder-bag.png", // Image component skipped for now since there's no real asset
    addedToCart: false,
  },
  {
    id: 2,
    name: "Floral Essence Eau D...",
    category: "Perfumes",
    price: 145.00,
    rating: 5,
    reviews: 114,
    badge: "Trending",
    badgeColor: "bg-amber-500",
    image: "/placeholder-perfume.png",
    addedToCart: false,
  },
  {
    id: 3,
    name: "Rose Gold Smart Wa...",
    category: "Accessories",
    price: 199.00,
    rating: 5,
    reviews: 89,
    badge: null,
    image: "/placeholder-watch.png",
    addedToCart: true,
  },
];

export default function Shop() {
  return (
    <main className="min-h-screen bg-slate-50 flex flex-col font-sans">
      <Navbar />

      {/* Main Content Area */}
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-8 w-full flex-grow">
        
        {/* Breadcrumb & Header */}
        <div className="mb-8">
          <div className="text-xs text-slate-500 mb-4 flex gap-2">
            <span>Home</span> / <span className="font-semibold text-slate-900">Shop All</span>
          </div>
          <div className="flex justify-between items-end">
            <h1 className="text-3xl font-bold text-slate-900">Shop All Products</h1>
            <span className="text-sm text-slate-500">Showing 1-12 of 148 products</span>
          </div>
        </div>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* Sidebar */}
          <aside className="w-full lg:w-64 flex-shrink-0">
            <div className="bg-white rounded-2xl p-6 shadow-sm border border-slate-100 flex flex-col gap-8">
              
              {/* Categories */}
              <div>
                <h3 className="font-bold text-slate-900 mb-4">Categories</h3>
                <ul className="flex flex-col gap-3">
                  {categories.map(cat => (
                    <li key={cat.name} className="flex items-center justify-between text-sm">
                      <label className="flex items-center gap-3 cursor-pointer">
                        <input 
                           type="checkbox" 
                           checked={cat.checked}
                           readOnly
                           className="w-4 h-4 rounded border border-slate-300 text-blue-600 focus:ring-blue-500 appearance-none bg-white checked:bg-blue-600 checked:border-blue-600 grid place-content-center relative cursor-pointer"
                        />
                        {/* Custom Checkmark implementation since appearance-none deletes default */}
                        {cat.checked && (
                           <svg viewBox="0 0 24 24" className="w-3 h-3 text-white absolute left-[4.5px] pointer-events-none" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                              <polyline points="20 6 9 17 4 12"></polyline>
                           </svg>
                        )}
                        <span className={`${cat.checked ? 'text-slate-900 font-medium' : 'text-slate-600'}`}>{cat.name}</span>
                      </label>
                      <span className="text-slate-400 text-xs">({cat.count})</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Price Range */}
              <div>
                <h3 className="font-bold text-slate-900 mb-4">Price Range</h3>
                <div className="mb-6">
                   {/* Custom Slider Track */}
                   <div className="h-1 bg-slate-200 rounded-full relative mb-4">
                     <div className="absolute left-0 w-1/2 h-full bg-blue-500 rounded-full"></div>
                     <div className="absolute left-1/2 top-1/2 -translate-y-1/2 -translate-x-1/2 w-4 h-4 bg-blue-600 rounded-full border-2 border-white shadow-sm cursor-grab"></div>
                   </div>
                   <div className="flex items-center justify-between gap-4">
                     <div className="flex items-center gap-2 border border-slate-200 rounded-lg px-3 py-2 flex-1">
                       <span className="text-slate-400 text-sm">$</span>
                       <input type="text" value="0" readOnly className="w-full bg-transparent text-sm text-slate-700 outline-none" />
                     </div>
                     <span className="text-slate-400">-</span>
                     <div className="flex items-center gap-2 border border-slate-200 rounded-lg px-3 py-2 flex-1">
                       <span className="text-slate-400 text-sm">$</span>
                       <input type="text" value="500" readOnly className="w-full bg-transparent text-sm text-slate-700 outline-none" />
                     </div>
                   </div>
                </div>
              </div>

              {/* Status */}
              <div>
                <h3 className="font-bold text-slate-900 mb-4">Status</h3>
                <ul className="flex flex-col gap-3">
                  {['Trending', 'On Sale', 'Newest'].map(status => (
                    <li key={status} className="flex items-center text-sm">
                      <label className="flex items-center gap-3 cursor-pointer relative">
                        <input type="checkbox" className="w-4 h-4 rounded border border-slate-300 text-blue-600 focus:ring-blue-500 appearance-none bg-white checked:bg-blue-600 checked:border-blue-600 cursor-pointer" />
                        <span className="text-slate-600">{status}</span>
                      </label>
                    </li>
                  ))}
                </ul>
              </div>

            </div>
          </aside>

          {/* Product Grid */}
          <div className="flex-1">
            
            {/* Toolbar */}
            <div className="flex justify-between items-center bg-white p-2 rounded-xl shadow-sm border border-slate-100 mb-6">
              <div className="flex gap-1">
                <button className="p-2 bg-blue-50 text-blue-600 rounded-lg">
                  <Grid size={18} />
                </button>
                <button className="p-2 text-slate-400 hover:bg-slate-50 hover:text-slate-600 rounded-lg">
                  <List size={18} />
                </button>
              </div>
              <div className="flex items-center gap-3 px-3">
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
                    <span className="text-xs text-slate-400">{product.category}</span>
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
              
              {/* Component Skeletons representing future products as in the mockup */}
              <div className="bg-white rounded-2xl p-4 shadow-sm border border-slate-100 opacity-60 flex flex-col h-full animate-pulse">
                 <div className="aspect-square bg-slate-100 rounded-xl mb-4"></div>
                 <div className="h-3 w-16 bg-slate-100 rounded mb-2"></div>
                 <div className="h-4 w-3/4 bg-slate-100 rounded mb-3"></div>
                 <div className="h-3 w-24 bg-slate-100 rounded mb-4"></div>
                 <div className="mt-auto flex justify-between items-center">
                    <div className="h-5 w-16 bg-slate-100 rounded"></div>
                    <div className="w-8 h-8 rounded-full bg-slate-100"></div>
                 </div>
              </div>

              <div className="bg-white rounded-2xl p-4 shadow-sm border border-slate-100 opacity-60 flex flex-col h-full animate-pulse">
                 <div className="aspect-square bg-slate-100 rounded-xl mb-4"></div>
                 <div className="h-3 w-16 bg-slate-100 rounded mb-2"></div>
                 <div className="h-4 w-3/4 bg-slate-100 rounded mb-3"></div>
                 <div className="h-3 w-24 bg-slate-100 rounded mb-4"></div>
                 <div className="mt-auto flex justify-between items-center">
                    <div className="h-5 w-16 bg-slate-100 rounded"></div>
                    <div className="w-8 h-8 rounded-full bg-slate-100"></div>
                 </div>
              </div>
              
              <div className="bg-white rounded-2xl p-4 shadow-sm border border-slate-100 opacity-60 xl:flex flex-col h-full animate-pulse hidden">
                 <div className="aspect-square bg-slate-100 rounded-xl mb-4"></div>
                 <div className="h-3 w-16 bg-slate-100 rounded mb-2"></div>
                 <div className="h-4 w-3/4 bg-slate-100 rounded mb-3"></div>
                 <div className="h-3 w-24 bg-slate-100 rounded mb-4"></div>
                 <div className="mt-auto flex justify-between items-center">
                    <div className="h-5 w-16 bg-slate-100 rounded"></div>
                    <div className="w-8 h-8 rounded-full bg-slate-100"></div>
                 </div>
              </div>
            </div>

            {/* Load More Pagination */}
            <div className="flex flex-col items-center mb-12">
              <p className="text-sm text-slate-500 mb-4">You've viewed 12 of 148 products</p>
              <div className="w-48 h-[3px] bg-slate-200 rounded-full mb-6">
                <div className="h-full bg-blue-600 rounded-full" style={{ width: '8.1%' }}></div>
              </div>
              <button className="px-6 py-2 rounded-full border border-blue-200 text-blue-600 font-medium text-sm hover:bg-blue-50 transition-colors shadow-sm bg-white">
                Load More Products ↓
              </button>
            </div>

          </div>
        </div>
      </div>

      <Footer />
    </main>
  );
}
