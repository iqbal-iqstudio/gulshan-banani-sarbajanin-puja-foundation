import { motion } from 'motion/react';
import { Target, Eye, Heart, Shield, Users, BookOpen, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import PageWrapper from './PageWrapper';

const values = [
  { icon: Heart, title: 'Spiritual Growth', description: 'Fostering deeper connections with our faith through regular religious ceremonies, discourses, and festivals.' },
  { icon: Users, title: 'Community Unity', description: 'Bringing together families and individuals to celebrate our rich cultural heritage and traditions.' },
  { icon: Shield, title: 'Cultural Preservation', description: 'Safeguarding and passing on ancient Hindu traditions, rituals, and customs to the next generation.' },
  { icon: BookOpen, title: 'Education & Outreach', description: 'Promoting knowledge through scholarships, educational programs, and cultural workshops for youth.' },
];

export default function MissionVisionPage() {
  return (
    <PageWrapper title="Mission & Vision">
      {/* Hero Banner */}
      <section className="relative py-20 md:py-28 bg-gradient-to-br from-maroon-900 via-maroon-800 to-maroon-900 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 w-72 h-72 bg-saffron-400 rounded-full blur-3xl"></div>
          <div className="absolute bottom-10 right-10 w-96 h-96 bg-gold-400 rounded-full blur-3xl"></div>
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block px-4 py-1.5 rounded-full border border-gold-500/40 text-gold-500 font-bold text-xs tracking-widest uppercase mb-4 backdrop-blur-sm bg-maroon-900/50">
              Our Foundation
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-white mb-6">
              Mission & Vision
            </h1>
            <p className="max-w-3xl mx-auto text-saffron-100/90 text-base md:text-lg leading-relaxed">
              Guided by faith and driven by purpose, we strive to build a vibrant community rooted in the timeless values of Sanatan Dharma.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="flex items-center gap-3 mb-4">
                <Target className="text-saffron-500" size={28} />
                <span className="text-maroon-800 font-bold tracking-widest uppercase text-xs">Our Mission</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-maroon-900 mb-6">
                What Drives Us Forward
              </h2>
              <p className="text-gray-600 text-base md:text-lg leading-relaxed mb-6">
                Our mission is to establish a thriving spiritual and cultural hub for the Hindu community in 
                Gulshan-Banani and beyond. We are committed to:
              </p>
              <ul className="space-y-4">
                {[
                  'Organizing grand festivals like Durga Puja with traditional fervor and community participation.',
                  'Providing a platform for spiritual discourse, meditation, and religious education for all ages.',
                  'Preserving Bengali Hindu heritage through cultural programs, music, and art.',
                  'Fostering a spirit of charity, volunteerism, and mutual support within the community.',
                  'Building bridges between generations to ensure the continuity of our traditions.'
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <span className="w-5 h-5 rounded-full bg-saffron-100 text-saffron-600 flex items-center justify-center shrink-0 mt-0.5">
                      <span className="text-xs font-bold">✓</span>
                    </span>
                    <span className="text-gray-700 text-sm md:text-base">{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative"
            >
              <div className="rounded-2xl overflow-hidden shadow-xl">
                <img 
                  src="https://images.unsplash.com/photo-1617184003067-675a8191ddf7?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
                  alt="Community celebration"
                  className="w-full h-[400px] md:h-[500px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-maroon-900/60 to-transparent"></div>
              </div>
              <div className="absolute -bottom-6 -left-6 bg-saffron-500 text-white px-6 py-4 rounded-xl shadow-lg">
                <span className="text-3xl font-bold">2008</span>
                <span className="block text-xs font-semibold uppercase tracking-wider">Established Year</span>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Vision Section */}
      <section className="py-20 bg-saffron-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="order-2 lg:order-1 relative"
            >
              <div className="rounded-2xl overflow-hidden shadow-xl">
                <img 
                  src="https://images.unsplash.com/photo-1773212902301-c779fd2700c9?q=80&w=1548&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
                  alt="Community gathering"
                  className="w-full h-[400px] md:h-[500px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-maroon-900/60 to-transparent"></div>
              </div>
              <div className="absolute -bottom-6 -right-6 bg-maroon-800 text-white px-6 py-4 rounded-xl shadow-lg">
                <span className="text-3xl font-bold">500+</span>
                <span className="block text-xs font-semibold uppercase tracking-wider">Community Members</span>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="order-1 lg:order-2"
            >
              <div className="flex items-center gap-3 mb-4">
                <Eye className="text-saffron-500" size={28} />
                <span className="text-maroon-800 font-bold tracking-widest uppercase text-xs">Our Vision</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-maroon-900 mb-6">
                Building the Future Together
              </h2>
              <p className="text-gray-600 text-base md:text-lg leading-relaxed mb-6">
                We envision a future where the Gulshan-Banani Hindu community stands as a beacon of cultural 
                richness, spiritual depth, and social harmony. Our vision encompasses:
              </p>
              <ul className="space-y-4">
                {[
                  'A dedicated community center that serves as a hub for worship, learning, and celebration.',
                  'A thriving cultural ecosystem where Bengali Hindu arts, music, and literature flourish.',
                  'Strong intergenerational bonds where youth are actively engaged in cultural preservation.',
                  'Meaningful charitable initiatives that uplift underprivileged members of our society.',
                  'A model of interfaith harmony and community service that inspires others.'
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <span className="w-5 h-5 rounded-full bg-saffron-100 text-saffron-600 flex items-center justify-center shrink-0 mt-0.5">
                      <span className="text-xs font-bold">✓</span>
                    </span>
                    <span className="text-gray-700 text-sm md:text-base">{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="inline-block px-4 py-1.5 rounded-full bg-maroon-50 text-maroon-800 font-bold text-xs tracking-widest uppercase mb-4">
              Our Core Values
            </span>
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-maroon-900 mb-4">
              Principles That Guide Us
            </h2>
            <p className="text-gray-500 max-w-2xl mx-auto">
              Every initiative we undertake is rooted in these fundamental values that define our organization.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, idx) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="group bg-saffron-50 rounded-2xl p-8 hover:bg-maroon-800 transition-all duration-300"
              >
                <div className="w-14 h-14 rounded-xl bg-saffron-100 group-hover:bg-saffron-500/20 flex items-center justify-center mb-6 transition-colors">
                  <value.icon size={28} className="text-saffron-600 group-hover:text-saffron-300 transition-colors" />
                </div>
                <h3 className="text-xl font-serif font-bold text-maroon-900 group-hover:text-white mb-3 transition-colors">
                  {value.title}
                </h3>
                <p className="text-gray-600 group-hover:text-saffron-100/80 text-sm leading-relaxed transition-colors">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-maroon-900 to-maroon-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-white mb-4">
              Join Us in Our Journey
            </h2>
            <p className="text-saffron-100/80 max-w-2xl mx-auto mb-8 text-lg">
              Whether you want to volunteer, become a member, or simply learn more about our work, 
              we welcome you with open arms.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                to="/get-involved/volunteers"
                className="px-8 py-3 rounded-full bg-saffron-500 hover:bg-saffron-600 text-white font-bold uppercase tracking-widest text-xs shadow-md transition-colors inline-flex items-center gap-2"
              >
                Get Involved <ArrowRight size={16} />
              </Link>
              <Link
                to="/contact"
                className="px-8 py-3 rounded-full border border-gold-500/40 text-gold-500 hover:bg-white/10 font-bold uppercase tracking-widest text-xs transition-colors"
              >
                Contact Us
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </PageWrapper>
  );
}