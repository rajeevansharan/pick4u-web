import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Target, Eye, Award, Smile, Truck, ShieldCheck, CheckCircle2 } from "lucide-react";
import Image from "next/image";

export default function About() {
  return (
    <main className="min-h-screen bg-slate-50 flex flex-col font-sans overflow-hidden">
      <Navbar />

      {/* Hero Section */}
      <section className="relative w-full py-24 md:py-32 flex flex-col items-center justify-center text-center px-4 overflow-hidden">
        {/* Soft Background Gradients */}
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-pink-300 rounded-full mix-blend-multiply filter blur-[128px] opacity-40 animate-blob"></div>
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-amber-200 rounded-full mix-blend-multiply filter blur-[128px] opacity-40 animate-blob animation-delay-2000"></div>
        <div className="absolute -bottom-32 left-1/2 w-96 h-96 bg-blue-300 rounded-full mix-blend-multiply filter blur-[128px] opacity-40 animate-blob animation-delay-4000"></div>

        <div className="relative z-10 max-w-3xl flex flex-col items-center">
          <span className="text-orange-500 font-bold tracking-widest uppercase text-[10px] mb-6 border border-orange-200 bg-orange-50 px-4 py-1.5 rounded-full">
            About Pick4U
          </span>
          <h1 className="text-5xl md:text-7xl font-extrabold text-slate-900 tracking-tight leading-tight mb-6">
            Your Choice,<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-orange-400">Your</span>{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500">Deals</span>
          </h1>
          <p className="text-lg text-slate-600 max-w-2xl leading-relaxed">
            We are more than just an eCommerce platform. We are your dedicated partner in finding the best trending products at unbeatable prices, delivering a seamless and premium shopping experience.
          </p>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="max-w-7xl mx-auto px-4 md:px-8 py-16 w-full relative z-10">
        <div className="flex flex-col md:flex-row gap-16 items-center">
          {/* Image */}
          <div className="w-full md:w-1/2">
             <div className="relative w-full aspect-[4/3] rounded-[2rem] overflow-hidden shadow-2xl shadow-pink-500/10 transform -rotate-2 hover:rotate-0 transition-transform duration-500 bg-white">
                {/* Fallback pattern if Image is not present */}
                <div className="absolute inset-0 bg-slate-100 flex items-center justify-center p-8">
                   <div className="w-full h-full border-2 border-dashed border-slate-300 rounded-xl flex flex-col items-center justify-center text-slate-400 gap-4">
                      <Image 
                        src="/story-placeholder.png" 
                        alt="Our Story Workspace"
                        fill
                        className="object-cover"
                      />
                      <span className="z-10 uppercase tracking-widest text-xs font-bold relative mix-blend-difference">Image Mockup</span>
                      <p className="z-10 text-[10px] text-center max-w-xs relative mix-blend-difference">Replace with `/public/story-placeholder.png`</p>
                   </div>
                </div>
             </div>
          </div>
          
          {/* Text Content */}
          <div className="w-full md:w-1/2 flex flex-col gap-6">
            <h2 className="text-3xl font-extrabold text-slate-900">Our Story</h2>
            <div className="text-slate-600 leading-relaxed space-y-4 text-sm md:text-base">
              <p>
                Founded in 2023, Pick4U started with a simple idea: shopping for trending, high-quality products shouldn't be complicated or overly expensive. We noticed a gap in the market for a platform that truly prioritizes the customer's choice and curates deals that matter.
              </p>
              <p>
                What began as a small curated list of tech accessories has now grown into a comprehensive multi-product destination. We carefully select every item in our catalog, ensuring it meets our rigorous standards for quality, utility, and trendiness.
              </p>
            </div>

            {/* Stats */}
            <div className="flex gap-4 mt-6">
               <div className="bg-blue-50/50 border border-blue-100 rounded-2xl p-4 flex-1 text-center">
                  <h4 className="text-2xl font-black text-blue-600">50K+</h4>
                  <p className="text-[10px] uppercase tracking-widest text-slate-500 font-bold mt-1">Happy Customers</p>
               </div>
               <div className="bg-orange-50/50 border border-orange-100 rounded-2xl p-4 flex-1 text-center">
                  <h4 className="text-2xl font-black text-orange-500">10K+</h4>
                  <p className="text-[10px] uppercase tracking-widest text-slate-500 font-bold mt-1">Products</p>
               </div>
               <div className="bg-pink-50/50 border border-pink-100 rounded-2xl p-4 flex-1 text-center">
                  <h4 className="text-2xl font-black text-pink-500">24/7</h4>
                  <p className="text-[10px] uppercase tracking-widest text-slate-500 font-bold mt-1">Support</p>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="max-w-7xl mx-auto px-4 md:px-8 py-16 w-full relative z-10">
         <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Mission */}
            <div className="bg-white rounded-3xl p-10 md:p-12 shadow-sm border border-slate-100 hover:shadow-xl hover:shadow-blue-500/5 transition-all duration-300">
               <div className="w-14 h-14 bg-blue-50 text-blue-600 rounded-2xl flex items-center justify-center mb-6">
                  <Target size={28} strokeWidth={2.5} />
               </div>
               <h3 className="text-2xl font-extrabold text-slate-900 mb-4">Our Mission</h3>
               <p className="text-slate-600 leading-relaxed text-sm">
                  To empower consumers by providing a curated, intuitive, and secure shopping platform where discovering and purchasing trending products is a delightful experience. We strive to offer unparalleled value through competitive pricing and exceptional customer service.
               </p>
            </div>

            {/* Vision */}
            <div className="bg-white rounded-3xl p-10 md:p-12 shadow-sm border border-slate-100 hover:shadow-xl hover:shadow-orange-500/5 transition-all duration-300">
               <div className="w-14 h-14 bg-orange-50 text-orange-500 rounded-2xl flex items-center justify-center mb-6">
                  <Eye size={28} strokeWidth={2.5} />
               </div>
               <h3 className="text-2xl font-extrabold text-slate-900 mb-4">Our Vision</h3>
               <p className="text-slate-600 leading-relaxed text-sm">
                  To be the world's most customer-centric multi-product destination, where people can find and discover anything they might want to buy online, setting the standard for quality, reliability, and trend discovery in the eCommerce space.
               </p>
            </div>
         </div>
      </section>

      {/* Why Choose Pick4U */}
      <section className="max-w-7xl mx-auto px-4 md:px-8 py-24 w-full relative z-10 text-center">
         <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-4">Why Choose Pick4U</h2>
         <p className="text-slate-500 max-w-2xl mx-auto mb-16 text-sm md:text-base">
            Our core values drive everything we do, ensuring you get the best possible experience every time you shop with us.
         </p>

         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 text-left">
            {/* Feature 1 */}
            <div className="bg-white rounded-3xl p-8 shadow-sm border border-slate-100 hover:-translate-y-2 transition-transform duration-300">
               <div className="w-12 h-12 bg-pink-50 text-pink-500 rounded-xl flex items-center justify-center mb-6">
                  <Award size={24} />
               </div>
               <h4 className="text-lg font-bold text-slate-900 mb-3">Quality Assurance</h4>
               <p className="text-xs text-slate-500 leading-relaxed">
                  Every product undergoes strict quality checks before it reaches our catalog. We stand by the excellence of our offerings.
               </p>
            </div>

            {/* Feature 2 */}
            <div className="bg-white rounded-3xl p-8 shadow-sm border border-slate-100 hover:-translate-y-2 transition-transform duration-300">
               <div className="w-12 h-12 bg-orange-50 text-orange-500 rounded-xl flex items-center justify-center mb-6">
                  <Smile size={24} />
               </div>
               <h4 className="text-lg font-bold text-slate-900 mb-3">Customer Satisfaction</h4>
               <p className="text-xs text-slate-500 leading-relaxed">
                  Your happiness is our priority. Our dedicated support team is available 24/7 to assist you with any queries.
               </p>
            </div>

            {/* Feature 3 */}
            <div className="bg-white rounded-3xl p-8 shadow-sm border border-slate-100 hover:-translate-y-2 transition-transform duration-300">
               <div className="w-12 h-12 bg-blue-50 text-blue-600 rounded-xl flex items-center justify-center mb-6">
                  <Truck size={24} />
               </div>
               <h4 className="text-lg font-bold text-slate-900 mb-3">Fast Delivery</h4>
               <p className="text-xs text-slate-500 leading-relaxed">
                  We partner with top logistics providers to ensure your orders reach you swiftly and safely, wherever you are.
               </p>
            </div>

            {/* Feature 4 */}
            <div className="bg-white rounded-3xl p-8 shadow-sm border border-slate-100 hover:-translate-y-2 transition-transform duration-300">
               <div className="w-12 h-12 bg-green-50 text-green-500 rounded-xl flex items-center justify-center mb-6">
                  <ShieldCheck size={24} />
               </div>
               <h4 className="text-lg font-bold text-slate-900 mb-3">Secure Shopping</h4>
               <p className="text-xs text-slate-500 leading-relaxed">
                  Your data and transactions are protected by industry-leading security protocols for a worry-free shopping experience.
               </p>
            </div>
         </div>
      </section>

      <Footer />
    </main>
  );
}
