import { motion } from 'motion/react';
import { UserPlus, CheckCircle, Star, Users, Shield, ArrowRight, CreditCard } from 'lucide-react';
import { Link } from 'react-router-dom';
import PageWrapper from './PageWrapper';

const membershipTypes = [
  {
    title: 'Individual Membership',
    price: '1,000',
    period: 'year',
    icon: UserPlus,
    features: [
      'Voting rights in foundation elections',
      'Priority access to all events & festivals',
      '10% discount on event registrations',
      'Quarterly newsletter subscription',
      'Invitation to annual general meeting',
      'GBSPF membership card',
    ],
    highlighted: false,
  },
  {
    title: 'Family Membership',
    price: '2,500',
    period: 'year',
    icon: Users,
    features: [
      'All individual benefits for up to 4 family members',
      'Priority seating at cultural programs',
      '15% discount on event registrations',
      'Exclusive family workshop invitations',
      'Children\'s cultural program access',
      'Monthly community update digest',
    ],
    highlighted: true,
  },
  {
    title: 'Lifetime Membership',
    price: '15,000',
    period: 'one-time',
    icon: Shield,
    features: [
      'Lifetime voting rights and privileges',
      'Premium access to all foundation events',
      '20% lifetime discount on all events',
      'Name listed in foundation honor roll',
      'Exclusive lifetime member events',
      'Special recognition at annual events',
    ],
    highlighted: false,
  },
];

const eligibility = [
  'Must be of Bengali Hindu heritage or spouse of a member',
  'Must be at least 18 years of age for individual membership',
  'Must agree to abide by the foundation\'s constitution and by-laws',
  'Must provide valid identification and proof of residence',
  'Family membership requires proof of relationship',
];

export default function MembershipPage() {
  return (
    <PageWrapper title="Apply for Membership">
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
              Become a Member
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-white mb-6">
              Apply for Membership
            </h1>
            <p className="max-w-3xl mx-auto text-saffron-100/90 text-base md:text-lg leading-relaxed">
              Strengthen your connection to the community by becoming an official member of 
              Gulshan-Banani Sarbajanin Puja Foundation.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Why Join */}
      <section className="py-20 bg-white">
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
                  src="https://images.unsplash.com/photo-1540575467063-178a50c2df87?q=80&w=1740&auto=format&fit=crop"
                  alt="Community members gathering"
                  className="w-full h-[450px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-maroon-900/50 to-transparent"></div>
              </div>
              <div className="absolute -bottom-6 -right-6 bg-maroon-800 text-white px-6 py-4 rounded-xl shadow-lg">
                <span className="text-3xl font-bold">500+</span>
                <span className="block text-xs font-semibold uppercase tracking-wider">Registered Members</span>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="order-1 lg:order-2"
            >
              <span className="inline-block px-4 py-1.5 rounded-full bg-maroon-50 text-maroon-800 font-bold text-xs tracking-widest uppercase mb-4">
                Why Become a Member
              </span>
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-maroon-900 mb-6">
                Belong to Something Bigger
              </h2>
              <p className="text-gray-600 text-base md:text-lg leading-relaxed mb-6">
                Membership in GBSPF gives you a voice in the community, exclusive access to events, 
                and the satisfaction of actively contributing to the preservation and celebration of 
                our cultural heritage.
              </p>
              <ul className="space-y-4">
                {[
                  'Voting rights in foundation decisions and elections',
                  'Priority access to all festivals, events, and programs',
                  'Discounted rates on event registrations and workshops',
                  'Networking opportunities with community leaders and families',
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <CheckCircle size={20} className="text-saffron-500 shrink-0 mt-0.5" />
                    <span className="text-gray-700 text-sm md:text-base">{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Membership Plans */}
      <section className="py-20 bg-saffron-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="inline-block px-4 py-1.5 rounded-full bg-maroon-50 text-maroon-800 font-bold text-xs tracking-widest uppercase mb-4">
              Membership Plans
            </span>
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-maroon-900 mb-4">
              Choose Your Membership Type
            </h2>
            <p className="text-gray-500 max-w-2xl mx-auto">
              Select the plan that best suits your needs. All memberships help us continue our mission.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {membershipTypes.map((plan, idx) => {
              const Icon = plan.icon;
              return (
                <motion.div
                  key={plan.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: idx * 0.1 }}
                  className={`relative rounded-2xl overflow-hidden ${
                    plan.highlighted
                      ? 'bg-maroon-800 text-white shadow-xl scale-105 md:scale-110 ring-2 ring-gold-500'
                      : 'bg-white text-gray-900 shadow-sm'
                  }`}
                >
                  {plan.highlighted && (
                    <div className="absolute top-4 right-4 bg-gold-500 text-maroon-900 text-[10px] font-bold uppercase tracking-widest px-3 py-1 rounded-full">
                      Popular
                    </div>
                  )}
                  <div className={`p-8 ${plan.highlighted ? 'bg-maroon-800' : ''}`}>
                    <div className={`w-14 h-14 rounded-xl flex items-center justify-center mb-6 ${
                      plan.highlighted ? 'bg-saffron-500/20' : 'bg-saffron-50'
                    }`}>
                      <Icon size={28} className={plan.highlighted ? 'text-saffron-300' : 'text-saffron-600'} />
                    </div>
                    <h3 className={`text-2xl font-serif font-bold mb-2 ${plan.highlighted ? 'text-white' : 'text-maroon-900'}`}>
                      {plan.title}
                    </h3>
                    <div className="flex items-baseline gap-1 mb-2">
                      <span className="text-sm font-medium opacity-70">BDT</span>
                      <span className={`text-4xl font-bold ${plan.highlighted ? 'text-gold-400' : 'text-maroon-800'}`}>
                        {plan.price}
                      </span>
                      <span className="text-sm opacity-60">/{plan.period}</span>
                    </div>
                  </div>
                  <div className={`px-8 pb-8 ${plan.highlighted ? 'bg-maroon-800' : ''}`}>
                    <ul className="space-y-3 mb-8">
                      {plan.features.map((f, i) => (
                        <li key={i} className="flex items-start gap-3 text-sm">
                          <CheckCircle size={16} className={`shrink-0 mt-0.5 ${
                            plan.highlighted ? 'text-saffron-400' : 'text-saffron-500'
                          }`} />
                          <span className={plan.highlighted ? 'text-saffron-100/80' : 'text-gray-600'}>
                            {f}
                          </span>
                        </li>
                      ))}
                    </ul>
                    <Link
                      to="/contact"
                      className={`block w-full text-center py-3 rounded-xl font-bold uppercase tracking-widest text-xs transition-colors ${
                        plan.highlighted
                          ? 'bg-gold-500 hover:bg-gold-600 text-maroon-900'
                          : 'bg-maroon-800 hover:bg-maroon-900 text-white'
                      }`}
                    >
                      Apply Now
                    </Link>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Eligibility */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <span className="inline-block px-4 py-1.5 rounded-full bg-maroon-50 text-maroon-800 font-bold text-xs tracking-widest uppercase mb-4">
                Eligibility
              </span>
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-maroon-900 mb-4">
                Membership Requirements
              </h2>
              <p className="text-gray-500">
                Please review the eligibility criteria before submitting your application.
              </p>
            </motion.div>
            <div className="space-y-4">
              {eligibility.map((item, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: idx * 0.05 }}
                  className="flex items-start gap-4 p-4 rounded-xl bg-saffron-50"
                >
                  <span className="w-8 h-8 rounded-full bg-saffron-100 text-saffron-600 flex items-center justify-center shrink-0 font-bold text-sm">
                    {idx + 1}
                  </span>
                  <span className="text-gray-700 text-sm md:text-base pt-1">{item}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </PageWrapper>
  );
}