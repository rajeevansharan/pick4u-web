import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import CategorySection from "@/components/CategorySection";
import FlashDeals from "@/components/FlashDeals";
import PromoBanners from "@/components/PromoBanners";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-white selection:bg-blue-100 selection:text-blue-600">
      {/* Navigation */}
      <Navbar />

      {/* Hero Section */}
      <Hero />

      {/* Categories */}
      <CategorySection />

      {/* Flash Deals */}
      <FlashDeals />

      {/* Promo Banners */}
      <PromoBanners />

      {/* Footer */}
      <Footer />
    </main>
  );
}
