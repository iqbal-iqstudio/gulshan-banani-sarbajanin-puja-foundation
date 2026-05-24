import { motion } from 'motion/react';
import { Heart, Users, BookOpen } from 'lucide-react';
import diyaImage from '../assets/images/diya_puja_1779522287010.png';

const pillars = [
  {
    icon: Heart,
    title: 'Spiritual Devotion',
    description: 'Fostering deep connection to dharma through daily pujas, kirtans, and guided spiritual sessions.',
  },
  {
    icon: Users,
    title: 'Community Unity',
    description: 'Bringing families together in a welcoming space that celebrates our shared heritage and traditions.',
  },
  {
    icon: BookOpen,
    title: 'Cultural Education',
    description: 'Empowering the next generation with knowledge of the Vedas, Sanskrit, and traditional arts.',
  },
];

export default function About() {
  return (
    <section id="about" className="py-24 relative">
      <div className="absolute inset-0 pattern-bg opacity-10"></div>
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Image & Decorative Element */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="absolute -inset-4 border-2 border-saffron-300 rounded-lg transform rotate-3 scale-105 z-0"></div>
            <img
              src={diyaImage}
              alt="Traditional Diya Puja"
              className="relative z-10 w-full h-[500px] object-cover rounded-lg shadow-xl"
            />
            <div className="absolute -bottom-6 -right-6 bg-maroon-800 text-white p-6 rounded-lg shadow-lg z-20">
              <p className="font-serif text-3xl font-bold text-gold-400">18+</p>
              <p className="text-sm font-medium uppercase tracking-wider">Years of Devotion</p>
            </div>
          </motion.div>

          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="flex items-center gap-3 mb-4">
              <span className="w-2 h-2 bg-saffron-500 rounded-full"></span>
              <span className="text-maroon-800 font-bold tracking-widest uppercase text-xs">About Us</span>
            </div>
            <h2 className="text-3xl md:text-5xl font-serif font-bold text-maroon-900 mb-6 tracking-tight">
              Preserving our Roots, <br/><span className="text-saffron-600">Nurturing our Future</span>
            </h2>
            <p className="text-gray-700 text-lg mb-8 leading-relaxed">
              Gulshan-Banani Sarbajanin Puja Foundation is a vibrant cultural foundation established to serve as the heart of our community. 
              We are dedicated to sustaining the timeless wisdom of Sanatana Dharma while making it 
              accessible and engaging for modern families.
            </p>
            
            <div className="space-y-6">
              {pillars.map((pillar, idx) => (
                <div key={idx} className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-saffron-100 flex items-center justify-center text-saffron-600">
                    <pillar.icon size={24} />
                  </div>
                  <div>
                    <h3 className="text-xl font-serif font-bold text-maroon-900 mb-1">{pillar.title}</h3>
                    <p className="text-gray-600">{pillar.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
