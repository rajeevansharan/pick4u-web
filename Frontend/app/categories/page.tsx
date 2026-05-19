import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Grid, List, Heart, Plus, Check } from "lucide-react";

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

export default function Categories() {
  return (
    <main className="min-h-screen bg-slate-50 flex flex-col font-sans">
      <Navbar />

      {/* Main Content Area */}
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-8 w-full flex-grow">
        
        {/* Banner Section */}
        <div className="w-full h-48 md:h-64 rounded-3xl overflow-hidden mb-8 relative flex items-center bg-gradient-to-r from-amber-900 to-amber-700 shadow-sm">
          {/* Using a placeholder gradient pattern since we don't have the exact image */}
          <div className="absolute inset-0 opacity-20 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-white via-transparent to-transparent mix-blend-overlay"></div>
          
          <div className="relative z-10 px-8 md:px-16 max-w-2xl">
             <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Luxury Perfumes</h1>
             <p className="text-white/80 text-sm md:text-base leading-relaxed hidden sm:block">
                Discover our exclusive collection of premium fragrances. Find your signature scent today.
             </p>
          </div>
        </div>

        {/* Breadcrumb & Header */}
        <div className="mb-8">
          <div className="text-xs text-slate-500 mb-2 flex gap-2">
            <span>Home</span> / <span>Categories</span> / <span className="font-semibold text-slate-900">Perfumes</span>
          </div>
          <p className="text-sm text-slate-500">Showing 1-12 of 48 products in Perfumes</p>
        </div>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* Sidebar */}
          <aside className="w-full lg:w-64 flex-shrink-0">
            <div className="bg-white rounded-2xl p-6 shadow-sm border border-slate-100 flex flex-col gap-8">
              
              {/* Brands */}
              <div>
                <h3 className="font-bold text-slate-900 mb-4">Brands</h3>
                <ul className="flex flex-col gap-3">
                  {brands.map(brand => (
                    <li key={brand.name} className="flex items-center justify-between text-sm">
                      <label className="flex items-center gap-3 cursor-pointer">
                        <input 
                           type="checkbox" 
                           checked={brand.checked}
                           readOnly
                           className="w-4 h-4 rounded border border-slate-300 text-blue-600 focus:ring-blue-500 appearance-none bg-white checked:bg-blue-600 checked:border-blue-600 grid place-content-center relative cursor-pointer"
                        />
                        {brand.checked && (
                           <svg viewBox="0 0 24 24" className="w-3 h-3 text-white absolute left-[4.5px] pointer-events-none" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                              <polyline points="20 6 9 17 4 12"></polyline>
                           </svg>
                        )}
                        <span className={`${brand.checked ? 'text-slate-900 font-medium' : 'text-slate-600'}`}>{brand.name}</span>
                      </label>
                      <span className="text-slate-400 text-xs">({brand.count})</span>
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
                       <input type="text" value="250" readOnly className="w-full bg-transparent text-sm text-slate-700 outline-none" />
                     </div>
                   </div>
                </div>
              </div>

              {/* Status */}
              <div>
                <h3 className="font-bold text-slate-900 mb-4">Status</h3>
                <ul className="flex flex-col gap-3">
                  {['Trending', 'On Sale'].map(status => (
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
            <div className="flex flex-col items-center mb-12 mt-8">
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

      <Footer />
    </main>
  );
}
