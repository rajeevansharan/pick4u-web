"use client";

import React from "react";
import { Send } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

const Footer = () => {
  const socialLinks = [
    { name: "Instagram", icon: "/icons/instagram.png" },
    { name: "Facebook", icon: "/icons/instagram.png" },
    { name: "Twitter", icon: "/icons/instagram.png" }
  ];

  return (
    <footer className="bg-slate-900 border-t border-slate-800 text-slate-400 py-16 px-4 md:px-8 mt-20">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
        
        {/* Brand Column */}
        <div className="flex flex-col gap-6">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 bg-orange-100 rounded-lg flex items-center justify-center">
              <svg viewBox="0 0 24 24" className="w-6 h-6 text-orange-600 fill-current">
                <path d="M12 2L4.5 20.29l.71.71L12 18l6.79 3 .71-.71z" />
              </svg>
            </div>
            <span className="text-xl font-bold text-white tracking-widest uppercase">Pick4U</span>
          </div>
          <p className="text-sm leading-relaxed max-w-sm">
            Your ultimate destination for trending products, exclusive deals, and premium shopping experience.
          </p>
          <div className="flex gap-4">
            {socialLinks.map((social, i) => (
              <div key={i} className="w-10 h-10 rounded-full border border-slate-700 flex items-center justify-center hover:bg-white hover:text-slate-900 cursor-pointer transition-all overflow-hidden relative group/icon">
                <Image 
                  src={social.icon} 
                  alt={social.name} 
                  width={20}
                  height={20}
                  className="object-contain opacity-50 group-hover/icon:opacity-100 transition-opacity invert group-hover/icon:invert-0" 
                />
              </div>
            ))}
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-white font-bold mb-6 uppercase tracking-widest text-sm">Quick Links</h3>
          <ul className="flex flex-col gap-4 text-sm">
            <li><Link href="/" className="hover:text-amber-500 transition-colors">Home</Link></li>
            <li><Link href="/shop" className="hover:text-amber-500 transition-colors">Shop All</Link></li>
            <li><Link href="/categories" className="hover:text-amber-500 transition-colors">Categories</Link></li>
            <li><Link href="/about" className="hover:text-amber-500 transition-colors">About Us</Link></li>
            <li><Link href="/contact" className="hover:text-amber-500 transition-colors">Contact</Link></li>
          </ul>
        </div>

        {/* Customer Service */}
        <div>
          <h3 className="text-white font-bold mb-6 uppercase tracking-widest text-sm">Customer Service</h3>
          <ul className="flex flex-col gap-4 text-sm">
            <li><Link href="/account" className="hover:text-amber-500 transition-colors">My Account</Link></li>
            <li><Link href="/orders" className="hover:text-amber-500 transition-colors">Track Order</Link></li>
            <li><Link href="/returns" className="hover:text-amber-500 transition-colors">Returns & Exchanges</Link></li>
            <li><Link href="/shipping" className="hover:text-amber-500 transition-colors">Shipping Info</Link></li>
            <li><Link href="/faq" className="hover:text-amber-500 transition-colors">FAQ</Link></li>
          </ul>
        </div>

        {/* Newsletter */}
        <div>
          <h3 className="text-white font-bold mb-6 uppercase tracking-widest text-sm">Newsletter</h3>
          <p className="text-xs mb-6 max-w-xs transition-colors">Subscribe to get special offers, free giveaways, and once-in-a-lifetime deals.</p>
          <div className="flex flex-col gap-3">
            <div className="relative group">
              <input 
                type="email" 
                placeholder="Enter your email" 
                className="w-full bg-slate-800 border-none rounded-xl px-5 py-3 text-sm focus:ring-2 focus:ring-blue-500 text-white outline-none transition-all group-hover:bg-slate-700"
              />
              <Send className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-500" size={16} />
            </div>
            <button className="bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-xl font-bold text-sm shadow-md transition-all active:scale-95 uppercase tracking-widest">
              Subscribe Now
            </button>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between border-t border-slate-800 mt-16 pt-8 text-[10px] uppercase font-bold tracking-widest text-slate-500">
        <p>© 2026 Pick4U. All rights reserved.</p>
        <div className="flex gap-8 mt-4 md:mt-0">
          <Link href="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
          <Link href="/terms" className="hover:text-white transition-colors">Terms of Service</Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
