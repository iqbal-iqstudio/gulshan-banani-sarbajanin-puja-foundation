import { motion } from 'motion/react';
import { Users, Clock, MapPin, Calendar, Heart, Shield, ArrowRight, CheckCircle } from 'lucide-react';
import { Link } from 'react-router-dom';
import PageWrapper from './PageWrapper';

const opportunities = [
  {
    title: 'Event Volunteers',
    description: 'Help organize and manage our festivals, cultural programs, and community gatherings.',
    icon: Calendar,
    commitment: '2-4 hours per event',
    spots: 'Open',
  },
  {
    title: 'Community Outreach',
    description: 'Assist with distributing information, connecting with members, and spreading awareness about our initiatives.',
    icon: Heart,
    commitment: 'Flexible hours',
    spots: 'Open',
  },
  {
    title: 'Youth Mentors',
    description: 'Guide and inspire young members through cultural education, workshops, and mentorship programs.',
    icon: Users,
    commitment: '3-5 hours/month',
    spots: 'Limited',
  },
  {
    title: 'Logistics & Setup',
    description: 'Support with event setup, decorations, sound systems, and on-ground coordination during celebrations.',
    icon: Shield,
    commitment: 'Per event basis',
    spots: 'Open',
  },
  {
    title: 'Creative & Media',
    description: 'Contribute your photography, videography, graphic design, or social media skills to document our events.',
    icon: MapPin,
    commitment: 'Flexible',
    spots: 'Open',
  },
  {
    title: 'Administrative Support',
    description: 'Assist with documentation, member coordination, communication, and day-to-day organizational tasks.',
    icon: Clock,
    commitment: '4-6 hours/week',
    spots: '2 positions',
  },
];

const benefits = [
  'Certificate of appreciation for your service',
  'Invitation to volunteer appreciation events',
  'Skill development and training opportunities',
  'Networking with community leaders and members',
  'Letter of recommendation for outstanding service',
  'A sense of fulfillment and community belonging',
];

export default function VolunteersPage() {
  return (
    <PageWrapper title="Join as Volunteer">
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
              Make a Difference
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-white mb-6">
              Join as a Volunteer
            </h1>
            <p className="max-w-3xl mx-auto text-saffron-100/90 text-base md:text-lg leading-relaxed">
              Your time and talent can create memorable experiences for our community. 
              Join our dedicated team of volunteers and be part of something meaningful.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Why Volunteer */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <span className="inline-block px-4 py-1.5 rounded-full bg-maroon-50 text-maroon-800 font-bold text-xs tracking-widest uppercase mb-4">
                Why Volunteer with Us
              </span>
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-maroon-900 mb-6">
                Share Your Time, Enrich Your Soul
              </h2>
              <p className="text-gray-600 text-base md:text-lg leading-relaxed mb-8">
                Volunteering with GBSPF is more than just giving back — it is about building 
                connections, preserving traditions, and creating joy. Every contribution, big or small, 
                strengthens the fabric of our community.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {benefits.map((b, idx) => (
                  <div key={idx} className="flex items-start gap-3">
                    <CheckCircle size={18} className="text-saffron-500 shrink-0 mt-0.5" />
                    <span className="text-gray-700 text-sm">{b}</span>
                  </div>
                ))}
              </div>
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
                  src="https://images.unsplash.com/photo-1559027615-cd4628902d4a?q=80&w=1740&auto=format&fit=crop"
                  alt="Volunteers working together"
                  className="w-full h-[450px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-maroon-900/50 to-transparent"></div>
              </div>
              <div className="absolute -bottom-6 -left-6 bg-saffron-500 text-white px-6 py-4 rounded-xl shadow-lg">
                <span className="text-3xl font-bold">200+</span>
                <span className="block text-xs font-semibold uppercase tracking-wider">Active Volunteers</span>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Opportunities Grid */}
      <section className="py-20 bg-saffron-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="inline-block px-4 py-1.5 rounded-full bg-maroon-50 text-maroon-800 font-bold text-xs tracking-widest uppercase mb-4">
              Volunteer Opportunities
            </span>
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-maroon-900 mb-4">
              Find Your Role
            </h2>
            <p className="text-gray-500 max-w-2xl mx-auto">
              We offer a variety of volunteering roles to match your interests, skills, and availability.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {opportunities.map((opp, idx) => {
              const Icon = opp.icon;
              return (
                <motion.div
                  key={opp.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: idx * 0.05 }}
                  className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-md transition-all border border-saffron-100 group"
                >
                  <div className="flex items-start justify-between mb-4">
                    <div className="w-12 h-12 rounded-xl bg-saffron-50 flex items-center justify-center group-hover:bg-saffron-100 transition-colors">
                      <Icon size={24} className="text-saffron-600" />
                    </div>
                    <span className={`text-xs font-bold uppercase tracking-wider px-2.5 py-1 rounded-full ${
                      opp.spots === 'Open' ? 'bg-green-50 text-green-700' :
                      opp.spots === 'Limited' ? 'bg-amber-50 text-amber-700' :
                      'bg-blue-50 text-blue-700'
                    }`}>
                      {opp.spots}
                    </span>
                  </div>
                  <h3 className="text-xl font-serif font-bold text-maroon-900 mb-2">{opp.title}</h3>
                  <p className="text-gray-500 text-sm mb-4">{opp.description}</p>
                  <div className="flex items-center gap-2 text-xs text-gray-400 font-medium">
                    <Clock size={14} />
                    {opp.commitment}
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-r from-maroon-900 to-maroon-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-white mb-4">
              Ready to Get Started?
            </h2>
            <p className="text-saffron-100/80 max-w-2xl mx-auto mb-8 text-lg">
              Fill out the volunteer registration form and our team will reach out to you with the next steps.
            </p>
            <Link
              to="/contact"
              className="px-8 py-3 rounded-full bg-saffron-500 hover:bg-saffron-600 text-white font-bold uppercase tracking-widest text-xs shadow-md transition-colors inline-flex items-center gap-2"
            >
              Register as Volunteer <ArrowRight size={16} />
            </Link>
          </motion.div>
        </div>
      </section>
    </PageWrapper>
  );
}