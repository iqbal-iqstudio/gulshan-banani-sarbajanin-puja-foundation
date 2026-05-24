import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
const heroImage = 'https://c4.wallpaperflare.com/wallpaper/325/492/29/god-wallpaper-preview.jpg';

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden bg-maroon-800 border-b-4 border-gold-500">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-r from-maroon-800/100 from-30% via-maroon-800/60 via-70% to-maroon-800/20 z-10 hidden lg:block"></div>
        <div className="absolute inset-0 bg-maroon-800/40 z-10 lg:hidden"></div>
        <img
          src={heroImage}
          alt="Traditional Hindu Temple"
          className="w-full h-full object-cover object-right scale-100 translate-x-[180px]"
        />
      </div>

      {/* Content */}
      <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full mt-20 lg:mt-0">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="flex flex-col items-start max-w-3xl"
        >
          <span className="inline-block px-4 py-1.5 rounded-full border border-gold-500/50 text-gold-500 transform font-bold text-xs tracking-widest uppercase mb-6 backdrop-blur-sm bg-maroon-900/50">
            Om Namah Shivaya
          </span>
          <h1 className="text-[50px] font-serif text-white font-bold leading-tight mb-6 drop-shadow-lg">
            Welcome to <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-saffron-400 to-gold-400">
              Gulshan-Banani Sarbajanin<br className="hidden md:block" /> Puja Foundation
            </span>
          </h1>
          <p className="max-w-2xl text-lg md:text-xl text-saffron-100 font-medium mb-10 drop-shadow-md">
            A modern foundation dedicated to preserving culture, nurturing spirituality, and enriching community life through traditional Hindu values.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center gap-4">
            <Link
              to="/about"
              className="px-8 py-3 rounded-full bg-saffron-500 hover:bg-maroon-800 text-[#6b1f1f] hover:text-white font-bold uppercase tracking-widest text-xs shadow-md transition-colors border border-[#350a0a]"
            >
              Learn More
            </Link>
            <Link
              to="/news-events"
              className="px-8 py-3 rounded-full bg-white/10 hover:bg-white/20 backdrop-blur-md border border-gold-500/30 text-white font-bold uppercase tracking-widest text-xs transition-colors"
            >
              Upcoming Events
            </Link>
          </div>
        </motion.div>
      </div>

    </section>
  );
}
