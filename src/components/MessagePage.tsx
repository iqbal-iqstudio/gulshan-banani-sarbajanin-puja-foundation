import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Quote, ChevronLeft, ChevronRight, User } from 'lucide-react';
import PageWrapper from './PageWrapper';

const founders = [
  {
    id: 1,
    name: "Sri Ajit Kumar Banerjee",
    designation: "Chief Advisor",
    message: "Our foundation was born from a simple yet profound vision — to create a home for our community where faith, culture, and togetherness flourish. Over the years, I have witnessed this vision transform into a vibrant reality. Every festival we celebrate, every program we organize, and every smile we share reaffirms our commitment to this noble cause. I am deeply grateful to all our members and well-wishers who have stood by us, making this journey truly fulfilling.",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&q=80"
  },
  {
    id: 2,
    name: "Smt. Rina Ghosh",
    designation: "President",
    message: "When we first gathered as a small group of devoted families, little did we imagine that our efforts would blossom into such a beautiful community institution. Our foundation stands as a testament to the power of collective faith and dedication. I take immense pride in seeing our youth embrace our traditions with such enthusiasm. Let us continue to work together, nurture our heritage, and build a legacy that future generations will cherish.",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&q=80"
  },
  {
    id: 3,
    name: "Sri Sanjib Chakraborty",
    designation: "Secretary",
    message: "Our foundation's journey has been one of unwavering dedication and immense blessings. From organizing our first Durga Puja to establishing regular cultural and spiritual programs, every step has strengthened our bonds. I believe that our strength lies in our unity and our shared commitment to Sanatan Dharma. I invite every member of our community to actively participate, contribute, and help us reach even greater heights in serving our heritage and humanity.",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&q=80"
  }
];

export default function MessagePage() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  const paginate = (dir: number) => {
    setDirection(dir);
    setCurrentIndex((prev) => (prev + dir + founders.length) % founders.length);
  };

  useEffect(() => {
    const timer = setInterval(() => {
      setDirection(1);
      setCurrentIndex((prev) => (prev + 1) % founders.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  const variants = {
    enter: (dir: number) => ({ x: dir > 0 ? 300 : -300, opacity: 0 }),
    center: { x: 0, opacity: 1 },
    exit: (dir: number) => ({ x: dir > 0 ? -300 : 300, opacity: 0 }),
  };

  return (
    <PageWrapper title="Message">
      {/* Hero Banner */}
      <section className="relative py-20 md:py-28 bg-gradient-to-br from-maroon-900 via-maroon-800 to-maroon-900 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 right-10 w-72 h-72 bg-saffron-400 rounded-full blur-3xl"></div>
          <div className="absolute bottom-10 left-10 w-96 h-96 bg-gold-400 rounded-full blur-3xl"></div>
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block px-4 py-1.5 rounded-full border border-gold-500/40 text-gold-500 font-bold text-xs tracking-widest uppercase mb-4 backdrop-blur-sm bg-maroon-900/50">
              Key Messages
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-white mb-6">
              Words of Wisdom
            </h1>
            <p className="max-w-3xl mx-auto text-saffron-100/90 text-base md:text-lg leading-relaxed">
              Hear from the visionary founders who laid the cornerstone of our foundation, 
              sharing their thoughts, aspirations, and heartfelt messages for the community.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Founder Messages Slider */}
      <section className="py-20 md:py-28 bg-saffron-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative">
            {/* Slider Controls */}
            <button
              onClick={() => paginate(-1)}
              className="absolute left-0 md:-left-4 top-1/2 -translate-y-1/2 z-20 w-10 h-10 md:w-12 md:h-12 rounded-full bg-white shadow-lg border border-saffron-200 flex items-center justify-center text-maroon-800 hover:bg-maroon-800 hover:text-white transition-colors"
              aria-label="Previous"
            >
              <ChevronLeft size={22} />
            </button>

            <div className="overflow-hidden px-2 md:px-4">
              <AnimatePresence mode="wait" custom={direction}>
                <motion.div
                  key={currentIndex}
                  custom={direction}
                  variants={variants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  transition={{ duration: 0.4, ease: "easeInOut" }}
                  className="bg-white rounded-2xl shadow-lg overflow-hidden"
                >
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-0">
                    {/* Image Section */}
                    <div className="md:col-span-1 relative h-64 md:h-auto">
                      <img
                        src={founders[currentIndex].image}
                        alt={founders[currentIndex].name}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t md:bg-gradient-to-r from-maroon-900/70 to-transparent"></div>
                      <div className="absolute bottom-4 md:hidden left-4 right-4">
                        <h3 className="text-white font-bold text-lg">{founders[currentIndex].name}</h3>
                        <p className="text-saffron-300 text-sm">{founders[currentIndex].designation}</p>
                      </div>
                    </div>
                    {/* Message Section */}
                    <div className="md:col-span-2 p-8 md:p-10 lg:p-12 flex flex-col justify-center">
                      <Quote size={36} className="text-saffron-500/30 mb-4" />
                      <p className="text-gray-700 text-base md:text-lg leading-relaxed mb-8 italic">
                        "{founders[currentIndex].message}"
                      </p>
                      <div className="hidden md:block">
                        <div className="flex items-center gap-4">
                          <div className="w-12 h-12 rounded-full bg-saffron-100 flex items-center justify-center">
                            <User size={22} className="text-saffron-600" />
                          </div>
                          <div>
                            <h3 className="font-bold text-maroon-800 text-lg">{founders[currentIndex].name}</h3>
                            <p className="text-saffron-600 text-sm font-medium">{founders[currentIndex].designation}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

            <button
              onClick={() => paginate(1)}
              className="absolute right-0 md:-right-4 top-1/2 -translate-y-1/2 z-20 w-10 h-10 md:w-12 md:h-12 rounded-full bg-white shadow-lg border border-saffron-200 flex items-center justify-center text-maroon-800 hover:bg-maroon-800 hover:text-white transition-colors"
              aria-label="Next"
            >
              <ChevronRight size={22} />
            </button>
          </div>

          {/* Dots Navigation */}
          <div className="flex items-center justify-center gap-3 mt-8">
            {founders.map((_, idx) => (
              <button
                key={idx}
                onClick={() => { setDirection(idx > currentIndex ? 1 : -1); setCurrentIndex(idx); }}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  idx === currentIndex
                    ? 'bg-saffron-500 w-8'
                    : 'bg-saffron-300 hover:bg-saffron-400'
                }`}
                aria-label={`Go to message ${idx + 1}`}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="py-16 bg-white border-t border-saffron-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-2xl md:text-3xl font-serif font-bold text-maroon-900 mb-4">
              Join Our Growing Family
            </h2>
            <p className="text-gray-500 max-w-2xl mx-auto">
              Become a part of our foundation and help us continue the legacy of our leaders 
              in serving the community with dedication and devotion.
            </p>
          </motion.div>
        </div>
      </section>
    </PageWrapper>
  );
}