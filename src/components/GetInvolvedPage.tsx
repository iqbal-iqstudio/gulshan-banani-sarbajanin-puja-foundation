import { motion } from 'motion/react';
import { Users, UserPlus, GraduationCap, ArrowRight, Heart, Handshake, BookOpen } from 'lucide-react';
import { Link } from 'react-router-dom';
import PageWrapper from './PageWrapper';

const categories = [
  {
    key: 'volunteers',
    label: 'Volunteers',
    icon: Users,
    desc: 'Join our dedicated team of volunteers and contribute your time and skills to community events, festivals, and social initiatives.',
    link: '/get-involved/volunteers',
    gradient: 'from-saffron-500 to-orange-500',
    features: ['Flexible time commitment', 'Community events & festivals', 'Skill-based opportunities'],
  },
  {
    key: 'membership',
    label: 'Membership',
    icon: UserPlus,
    desc: 'Become an official member of GBSPF and enjoy exclusive benefits, voting rights, and a stronger connection to your community.',
    link: '/get-involved/membership',
    gradient: 'from-maroon-700 to-maroon-900',
    features: ['Voting rights & participation', 'Member-only events & discounts', 'Family & individual plans'],
  },
  {
    key: 'scholarship',
    label: 'Scholarship',
    icon: GraduationCap,
    desc: 'Apply for educational scholarships designed to support deserving students from our community in pursuit of academic excellence.',
    link: '/get-involved/scholarship',
    gradient: 'from-gold-600 to-yellow-700',
    features: ['Merit & need-based awards', 'Academic & extracurricular', 'Annual application cycle'],
  },
];

const highlights = [
  { icon: Heart, stat: '200+', label: 'Active Volunteers' },
  { icon: Users, stat: '500+', label: 'Community Members' },
  { icon: Handshake, stat: '15+', label: 'Annual Events' },
  { icon: BookOpen, stat: '50+', label: 'Scholarships Awarded' },
];

export default function GetInvolvedPage() {
  return (
    <PageWrapper title="Get Involved">
      {/* Hero Banner */}
      <section className="relative py-20 md:py-28 bg-gradient-to-br from-maroon-900 via-maroon-800 to-maroon-900 overflow-hidden">
        <div className="absolute inset-0 opacity-10" aria-hidden="true">
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
              Community Engagement
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-white mb-6">
              Get Involved
            </h1>
            <p className="max-w-3xl mx-auto text-saffron-100/90 text-base md:text-lg leading-relaxed">
              Discover meaningful ways to contribute, connect, and grow with the Gulshan-Banani 
              Sarbajanin Puja Foundation. Your participation makes our community stronger.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Highlights Stats */}
      <section className="py-12 bg-white border-b border-saffron-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {highlights.map((h, idx) => (
              <motion.div
                key={h.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.1 }}
                className="text-center"
              >
                <h.icon className="mx-auto text-saffron-500 mb-3" size={32} />
                <span className="block text-3xl md:text-4xl font-bold text-maroon-900">{h.stat}</span>
                <span className="text-gray-500 text-sm font-medium">{h.label}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Category Cards */}
      <section className="py-20 bg-saffron-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="inline-block px-4 py-1.5 rounded-full bg-maroon-50 text-maroon-800 font-bold text-xs tracking-widest uppercase mb-4">
              Ways to Participate
            </span>
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-maroon-900 mb-4">
              Choose Your Path
            </h2>
            <p className="text-gray-500 max-w-2xl mx-auto">
              Whether you have time, skills, or resources to share — there is a place for you in our community.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {categories.map((cat, idx) => {
              const Icon = cat.icon;
              return (
                <motion.div
                  key={cat.key}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                >
                  <Link
                    to={cat.link}
                    className="block group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 h-full"
                  >
                    <div className={`h-2 bg-gradient-to-r ${cat.gradient}`}></div>
                    <div className="p-8">
                      <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-saffron-50 to-saffron-100 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                        <Icon size={32} className="text-saffron-600" />
                      </div>
                      <h3 className="text-2xl font-serif font-bold text-maroon-900 mb-3 group-hover:text-maroon-700 transition-colors">
                        {cat.label}
                      </h3>
                      <p className="text-gray-600 text-sm leading-relaxed mb-6">
                        {cat.desc}
                      </p>
                      <ul className="space-y-2 mb-8">
                        {cat.features.map((f, i) => (
                          <li key={i} className="flex items-center gap-2 text-sm text-gray-500">
                            <span className="w-1.5 h-1.5 rounded-full bg-saffron-400"></span>
                            {f}
                          </li>
                        ))}
                      </ul>
                      <span className="inline-flex items-center gap-2 text-saffron-600 font-bold uppercase tracking-widest text-xs group-hover:gap-3 transition-all">
                        Learn More <ArrowRight size={14} />
                      </span>
                    </div>
                  </Link>
                </motion.div>
              );
            })}
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
              Still Have Questions?
            </h2>
            <p className="text-saffron-100/80 max-w-2xl mx-auto mb-8 text-lg">
              We would love to hear from you. Reach out to our team for more information on how you can get involved.
            </p>
            <Link
              to="/contact"
              className="px-8 py-3 rounded-full bg-saffron-500 hover:bg-saffron-600 text-white font-bold uppercase tracking-widest text-xs shadow-md transition-colors inline-flex items-center gap-2"
            >
              Contact Us <ArrowRight size={16} />
            </Link>
          </motion.div>
        </div>
      </section>
    </PageWrapper>
  );
}