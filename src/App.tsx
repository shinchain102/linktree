import React, { useState } from 'react';
import { Instagram, Facebook, Snail as Snapchat, ShoppingBag, Store, Globe, ChevronLeft, ChevronRight } from 'lucide-react';

const socialLinks = [
  {
    name: 'Instagram',
    url: 'https://www.instagram.com/pitriciacle.com_',
    icon: <Instagram className="w-6 h-6" />,
  },
  {
    name: 'Facebook',
    url: 'https://www.instagram.com/pitriciacle.com_',
    icon: <Facebook className="w-6 h-6" />,
  },
  {
    name: 'Snapchat',
    url: '#',
    icon: <Snapchat className="w-6 h-6" />,
  },
  {
    name: 'Meesho',
    url: 'http://meesho.com/pitriciacle',
    icon: <ShoppingBag className="w-6 h-6" />,
  },
  {
    name: 'Amazon',
    url: '#',
    icon: <Store className="w-6 h-6" />,
  },
  {
    name: 'Website',
    url: 'https://pitriciacle.com/',
    icon: <Globe className="w-6 h-6" />,
  },
];

const products = [
  {
    id: 1,
    image: 'https://images.meesho.com/images/products/496701429/kuweo_512.webp',
    title: 'Korean stylish silver rabbit pearl stud earrings',
    link: 'https://www.meesho.com/korean-stylish-silver-rabbit-pearl-stud-earrings/p/87q19x'
  },
  {
    id: 2,
    image: 'https://images.meesho.com/images/products/497337624/l58dj_512.webp',
    title: 'Butterfly Ear Cuff Earrings',
    link: 'https://www.meesho.com/butterfly-ear-cuff-earrings-no-piercing-needed-elegant-chain-crystal-design-set-of-2-pcs/p/883o60'
  },
  {
    id: 3,
    image: 'https://images.meesho.com/images/products/497348278/agb6l_512.webp',
    title: 'Elegant Butterfly Pearl Necklace',
    link: 'https://www.meesho.com/elegant-butterfly-pearl-choker-necklace-vintage-y2k-layered-chain-jewelry-for-women-girls-by-pitriciacle/p/883wdy'
  },
];

function App() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % products.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + products.length) % products.length);
  };

  return (
    <div className="min-h-screen bg-[#F8EDE3] relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="fixed inset-0 luxury-pattern opacity-50"></div>
      
      <div className="relative py-12 px-4 sm:px-6">
        <div className="max-w-md mx-auto space-y-8">
          {/* Profile Section */}
          <div className="text-center">
            <div className="relative">
              <div className="w-32 h-32 mx-auto mb-6 rounded-full overflow-hidden border-4 border-[#80002030] transform hover:scale-105 transition-transform duration-500">
                <img
                  src="https://raw.githubusercontent.com/shinchain102/linktree/refs/heads/main/Img/logo.jpg"
                  alt="Profile"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 bg-[#800020] text-white px-4 py-1 rounded-full text-sm font-medium">
                @Pitriciacle.com_
              </div>
            </div>
            <h1 className="text-3xl font-bold text-[#222831] mt-6 mb-2">Pitriciacle</h1>
            <p className="text-[#222831] opacity-75 max-w-xs mx-auto">Digital Creator & Lifestyle Influencer</p>
          </div>

          {/* Social Links */}
          <div className="space-y-4 relative">
            {socialLinks.map((link, index) => (
              <a
                key={link.name}
                href={link.url}
                className="group flex items-center justify-center gap-3 p-4 rounded-lg glass-effect hover:bg-[#DAD4B5]/50 transition-all duration-500 text-[#222831] font-medium transform hover:-translate-y-0.5"
                style={{ transitionDelay: `${index * 50}ms` }}
              >
                <span className="transform group-hover:scale-110 transition-transform duration-500">
                  {link.icon}
                </span>
                <span className="text-lg">{link.name}</span>
              </a>
            ))}
          </div>

          {/* Product Carousel */}
          <div className="relative glass-effect rounded-xl p-6">
            <h2 className="text-2xl font-bold text-[#222831] mb-6 text-center">Featured Collection</h2>
            <div className="relative overflow-hidden rounded-lg aspect-square">
              <a href={products[currentSlide].link} className="block group">
                <img
                  src={products[currentSlide].image}
                  alt={products[currentSlide].title}
                  className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent text-white p-4 text-center">
                  <h3 className="text-lg font-semibold">{products[currentSlide].title}</h3>
                  <p className="text-sm opacity-80">Click to Shop Now</p>
                </div>
              </a>
              <button
                onClick={prevSlide}
                className="absolute left-2 top-1/2 -translate-y-1/2 bg-white/60 hover:bg-white rounded-full p-2 transition-all duration-300"
              >
                <ChevronLeft className="w-6 h-6 text-[#222831]" />
              </button>
              <button
                onClick={nextSlide}
                className="absolute right-2 top-1/2 -translate-y-1/2 bg-white/60 hover:bg-white rounded-full p-2 transition-all duration-300"
              >
                <ChevronRight className="w-6 h-6 text-[#222831]" />
              </button>
            </div>
            <div className="flex justify-center mt-4 gap-2">
              {products.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`w-2 h-2 rounded-full transition-all duration-500 ${
                    currentSlide === index 
                      ? 'w-6 bg-[#800020]/100' 
                      : 'bg-[#DAD4B5] hover:bg-[#800020]/100'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
