import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Mail, Phone, ArrowRight } from "lucide-react";


export default function Contact() {
  return (
    <main className="min-h-screen bg-slate-50 flex flex-col font-sans overflow-hidden">
      <Navbar />

      {/* Hero Header */}
      <section className="relative w-full pt-20 pb-12 flex flex-col items-center justify-center text-center px-4 overflow-hidden">
        {/* Soft Background Gradients */}
        <div className="absolute top-10 left-1/4 w-96 h-96 bg-pink-200 rounded-full mix-blend-multiply filter blur-[128px] opacity-30"></div>
        <div className="absolute top-10 right-1/4 w-96 h-96 bg-blue-200 rounded-full mix-blend-multiply filter blur-[128px] opacity-30"></div>

        <div className="relative z-10 max-w-2xl flex flex-col items-center">
          <span className="text-orange-500 font-bold tracking-widest uppercase text-xs mb-4">
            Get In Touch
          </span>
          <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight mb-4">
            We'd Love to Hear From You
          </h1>
          <p className="text-slate-500 text-sm md:text-base max-w-xl leading-relaxed">
            Have a question about a product, order, or just want to say hi? Drop us a line or connect instantly via WhatsApp.
          </p>
        </div>
      </section>

      {/* Main Content Area */}
      <section className="max-w-7xl mx-auto px-4 md:px-8 pb-24 w-full relative z-10">
        <div className="flex flex-col lg:flex-row gap-8 items-start">
          
          {/* Left Column - Contact Info */}
          <div className="w-full lg:w-1/3 flex flex-col gap-4">
            
            {/* WhatsApp Card */}
            <div className="bg-gradient-to-br from-green-50 to-green-100/50 rounded-3xl p-6 shadow-sm border border-green-100 flex flex-col relative overflow-hidden">
               {/* Decorative blob */}
               <div className="absolute -top-10 -right-10 w-32 h-32 bg-green-200 rounded-full mix-blend-multiply filter blur-xl opacity-50"></div>
               
               <div className="w-12 h-12 bg-green-500 text-white rounded-xl flex items-center justify-center mb-4 shadow-lg shadow-green-500/30 relative z-10">
                  <svg
                    className="w-6 h-6"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                  </svg>
               </div>
               <h3 className="text-xl font-bold text-slate-900 mb-2 relative z-10">Instant Support</h3>
               <p className="text-slate-600 text-sm mb-6 relative z-10">
                  Get the fastest response by messaging us directly on WhatsApp. We're online and ready to help!
               </p>
               <button className="w-full bg-green-500 hover:bg-green-600 text-white font-bold py-3 px-4 rounded-xl shadow-md shadow-green-500/20 transition-all flex items-center justify-center gap-2 relative z-10">
                  Chat on WhatsApp <ArrowRight size={18} />
               </button>
            </div>

            {/* Email Card */}
            <div className="bg-white rounded-3xl p-6 shadow-sm border border-slate-100 flex items-start gap-4 hover:-translate-y-1 transition-transform duration-300">
               <div className="w-10 h-10 bg-blue-50 text-blue-500 rounded-xl flex items-center justify-center shrink-0 mt-1">
                  <Mail size={20} />
               </div>
               <div>
                  <h4 className="font-bold text-slate-900 mb-1 text-sm">Email Us</h4>
                  <p className="text-slate-600 text-sm font-medium mb-1 shrink-0 break-all">support@pick4u.com</p>
                  <p className="text-slate-400 text-xs text-balance">We aim to reply within 24 hours.</p>
               </div>
            </div>

            {/* Phone Card */}
            <div className="bg-white rounded-3xl p-6 shadow-sm border border-slate-100 flex items-start gap-4 hover:-translate-y-1 transition-transform duration-300">
               <div className="w-10 h-10 bg-orange-50 text-orange-500 rounded-xl flex items-center justify-center shrink-0 mt-1">
                  <Phone size={20} />
               </div>
               <div>
                  <h4 className="font-bold text-slate-900 mb-1 text-sm">Call Us</h4>
                  <p className="text-slate-600 text-sm font-medium mb-1">+1 (555) 123-4567</p>
                  <p className="text-slate-400 text-xs">Mon-Fri from 9am to 6pm EST.</p>
               </div>
            </div>

            {/* Follow Our Journey */}
            <div className="bg-white rounded-3xl p-6 shadow-sm border border-slate-100 flex flex-col items-center justify-center gap-4 mt-2">
               <h4 className="font-bold text-slate-900 text-sm">Follow Our Journey</h4>
               <div className="flex items-center gap-4">
                  {[
                     { name: 'Facebook', svg: <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3.81l.39-4h-4.2V7a1 1 0 0 1 1-1h3z"></path> },
                     { name: 'Instagram', svg: <><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></> },
                     { name: 'Twitter', svg: <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path> },
                     { name: 'YouTube', svg: <><path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z"></path><polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"></polygon></> }
                  ].map((social, i) => (
                     <button key={i} className="w-10 h-10 rounded-full bg-slate-50 flex items-center justify-center text-slate-500 hover:bg-slate-100 hover:text-slate-900 transition-colors border border-slate-100">
                        <svg viewBox="0 0 24 24" width="18" height="18" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
                           {social.svg}
                        </svg>
                     </button>
                  ))}
               </div>
            </div>

          </div>

          {/* Right Column - Form & Map */}
          <div className="w-full lg:w-2/3 flex flex-col gap-6">
            
            {/* Contact Form */}
            <div className="bg-white rounded-3xl p-6 md:p-8 shadow-sm border border-slate-100">
              <h2 className="text-2xl font-bold text-slate-900 mb-2">Send us a Message</h2>
              <p className="text-sm text-slate-500 mb-8">Fill out the form below and our team will get back to you shortly.</p>
              
              <form className="flex flex-col gap-6">
                 {/* Name Row */}
                 <div className="flex flex-col md:flex-row gap-6">
                    <div className="flex-1 flex flex-col gap-2">
                       <label className="text-xs font-bold text-slate-600">First Name</label>
                       <input type="text" placeholder="John" className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-blue-100 focus:border-blue-300 transition-all text-slate-700" />
                    </div>
                    <div className="flex-1 flex flex-col gap-2">
                       <label className="text-xs font-bold text-slate-600">Last Name</label>
                       <input type="text" placeholder="Doe" className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-blue-100 focus:border-blue-300 transition-all text-slate-700" />
                    </div>
                 </div>

                 {/* Email & Subject Row */}
                 <div className="flex flex-col md:flex-row gap-6">
                    <div className="flex-1 flex flex-col gap-2">
                       <label className="text-xs font-bold text-slate-600">Email Address</label>
                       <input type="email" placeholder="john@example.com" className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-blue-100 focus:border-blue-300 transition-all text-slate-700" />
                    </div>
                    <div className="flex-1 flex flex-col gap-2">
                       <label className="text-xs font-bold text-slate-600">Subject</label>
                       <input type="text" placeholder="General Inquiry" className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-blue-100 focus:border-blue-300 transition-all text-slate-700" />
                    </div>
                 </div>

                 {/* Message */}
                 <div className="flex flex-col gap-2">
                    <label className="text-xs font-bold text-slate-600">Your Message</label>
                    <textarea 
                       rows={5} 
                       placeholder="How can we help you?" 
                       className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-blue-100 focus:border-blue-300 transition-all text-slate-700 resize-none"
                    ></textarea>
                 </div>

                 {/* Submit Button */}
                 <button type="button" className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3.5 px-4 rounded-xl shadow-md shadow-blue-600/20 transition-all active:scale-[0.98]">
                    Send Message
                 </button>
              </form>
            </div>

            {/* Map Placeholder Card */}
            <div className="w-full aspect-[2/1] md:aspect-[2.5/1] bg-slate-200 rounded-3xl overflow-hidden relative border border-slate-200/50">
               <iframe
                 src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15844.20017129188!2d79.8516086871582!3d6.9085189!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae2596ad7cf2f97%3A0x86134b266395e26!2sColombo%2007%2C%20Colombo!5e0!3m2!1sen!2slk!4v1700000000000!5m2!1sen!2slk"
                 width="100%"
                 height="100%"
                 style={{ border: 0, filter: "grayscale(0.1)" }}
                 allowFullScreen
                 loading="lazy"
                 referrerPolicy="no-referrer-when-downgrade"
               ></iframe>
            </div>

          </div>

        </div>
      </section>

      <Footer />
    </main>
  );
}
