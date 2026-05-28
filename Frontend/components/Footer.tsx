"use client";

import React from "react";
import { Send } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

const InstagramIcon = ({ size = 24, ...props }: React.SVGProps<SVGSVGElement> & { size?: number | string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
  </svg>
);

const FacebookIcon = ({ size = 24, ...props }: React.SVGProps<SVGSVGElement> & { size?: number | string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
  </svg>
);

const TwitterIcon = ({ size = 24, ...props }: React.SVGProps<SVGSVGElement> & { size?: number | string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
  </svg>
);

const Footer = () => {
  const socialLinks = [
    { name: "Instagram", icon: InstagramIcon },
    { name: "Facebook", icon: FacebookIcon },
    { name: "Twitter", icon: TwitterIcon }
  ];

  return (
    <footer className="bg-slate-900 border-t border-slate-800 text-slate-400 py-16 px-4 md:px-8 mt-20">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
        
        {/* Brand Column */}
        <div className="flex flex-col gap-6">
          <div className="flex items-center gap-2">
            <Image 
              src="/logo.svg" 
              alt="Pick4U Logo" 
              width={80} 
              height={80} 
              className="w-20 h-20 rounded-lg object-contain" 
            />
            <span className="text-xl font-bold text-white tracking-widest uppercase">Pick4U</span>
          </div>
          <p className="text-sm leading-relaxed max-w-sm">
            Your ultimate destination for trending products, exclusive deals, and premium shopping experience.
          </p>
          <div className="flex gap-4">
            {socialLinks.map((social, i) => {
              const Icon = social.icon;
              return (
                <div key={i} className="w-10 h-10 rounded-full border border-slate-700 flex items-center justify-center hover:bg-white hover:text-slate-900 cursor-pointer transition-all overflow-hidden relative group/icon">
                  <Icon size={20} className="text-slate-400 group-hover/icon:text-slate-900 transition-colors" />
                </div>
              );
            })}
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
