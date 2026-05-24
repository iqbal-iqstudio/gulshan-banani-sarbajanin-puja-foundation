import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
const heroImage = 'https://c4.wallpaperflare.com/wallpaper/325/492/29/god-wallpaper-preview.jpg';

export default function Hero() {
  return (
    <section id="home" className="relative min-h-[100dvh] flex items-center overflow-hidden bg-maroon-800 border-b-4 border-gold-500">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        {/* Desktop gradient overlay - left-to-right */}
        <div className="absolute inset-0 bg-gradient-to-r from-maroon-800/100 from-30% via-maroon-800/60 via-70% to-maroon-800/20 z-10 hidden lg:block"></div>
        {/* Mobile/Tablet gradient overlay - bottom-to-top for image visibility */}
        <div className="absolute inset-0 bg-gradient-to-b from-maroon-800/60 from-5% via-maroon-800/40 via-40% to-maroon-800/90 z-10 lg:hidden"></div>
        <img
          src={heroImage}
          alt="Traditional Hindu Temple"
          className="w-full h-full object-cover object-center md:object-center lg:object-right lg:translate-x-[180px] scale-100"
        />
      </div>

      {/* Content */}
      <div className="relative z-20 max-w-7xl mx-auto px-5 sm:px-6 lg:px-8 w-full mt-28 sm:mt-24 lg:mt-0">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="flex flex-col items-start max-w-xl lg:max-w-3xl"
        >
          <span className="inline-block px-4 sm:px-5 py-1.5 rounded-full border border-gold-500/50 text-gold-500 font-bold text-[10px] sm:text-xs tracking-widest uppercase mb-4 sm:mb-6 backdrop-blur-sm bg-maroon-900/50">
            Om Namah Shivaya
          </span>
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[50px] font-serif text-white font-bold leading-tight mb-4 sm:mb-6 drop-shadow-lg">
            Welcome to <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-saffron-400 to-gold-400">
              Gulshan-Banani Sarbajanin<br className="hidden md:block" /> Puja Foundation
            </span>
          </h1>
          <p className="max-w-2xl text-sm sm:text-base md:text-lg lg:text-xl text-saffron-100 font-medium mb-6 sm:mb-8 lg:mb-10 drop-shadow-md leading-relaxed">
            A modern foundation dedicated to preserving culture, nurturing spirituality, and enriching community life through traditional Hindu values.
          </p>
          
          <div className="flex flex-col sm:flex-row items-start gap-3 sm:gap-4 w-full sm:w-auto">
            <Link
              to="/about"
              className="px-6 sm:px-8 py-2.5 sm:py-3 rounded-full bg-saffron-500 hover:bg-maroon-800 text-[#6b1f1f] hover:text-white font-bold uppercase tracking-wider sm:tracking-widest text-[10px] sm:text-xs shadow-md transition-colors border border-[#350a0a] text-center sm:text-left"
            >
              Learn More
            </Link>
            <Link
              to="/news-events"
              className="px-6 sm:px-8 py-2.5 sm:py-3 rounded-full bg-white/10 hover:bg-white/20 backdrop-blur-md border border-gold-500/30 text-white font-bold uppercase tracking-wider sm:tracking-widest text-[10px] sm:text-xs transition-colors text-center sm:text-left"
            >
              Upcoming Events
            </Link>
          </div>
        </motion.div>
      </div>

    </section>
  );
}
