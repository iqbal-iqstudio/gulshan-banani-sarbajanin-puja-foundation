import { motion } from 'motion/react';
import PageWrapper from './PageWrapper';

const memberCategories = [
  {
    title: 'Donor Members',
    description: 'Individuals who have generously contributed to the foundation to support our major initiatives and infrastructure.',
    icon: '🏆',
  },
  {
    title: 'Life Members',
    description: 'Committed individuals who have pledged lifelong support and active participation in our foundation\'s activities.',
    icon: '🌟',
  },
  {
    title: 'General Members',
    description: 'The vibrant heart of our community, participating in our regular events and upholding our shared values.',
    icon: '🤝',
  },
  {
    title: 'Honorary Members',
    description: 'Distinguished individuals recognized for their exceptional service and contributions to society.',
    icon: '🏅',
  },
];

export default function MembersPage() {
  return (
    <PageWrapper title="Members">
      <section className="py-24 bg-saffron-50 min-h-screen">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="flex items-center justify-center gap-3 mb-4">
              <span className="w-2 h-2 bg-maroon-800 rounded-full"></span>
              <span className="text-maroon-800 font-bold tracking-widest uppercase text-xs">Our Community</span>
              <span className="w-2 h-2 bg-maroon-800 rounded-full"></span>
            </div>
            <h2 className="text-3xl md:text-5xl font-serif font-bold text-gray-900 mb-6">
              Foundation Members
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto text-lg leading-relaxed">
              Our foundation is built upon the dedication and support of our diverse members. Explore the pillars of our community.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {memberCategories.map((category, idx) => (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="bg-white rounded-xl p-8 shadow-sm hover:shadow-md transition-shadow border border-saffron-200"
              >
                <div className="text-4xl mb-4">{category.icon}</div>
                <h3 className="text-2xl font-serif font-bold text-maroon-900 mb-3">{category.title}</h3>
                <p className="text-gray-600 leading-relaxed mb-6">
                  {category.description}
                </p>
                <button className="text-saffron-600 font-bold uppercase tracking-widest text-xs hover:text-maroon-800 transition-colors">
                  View List &rarr;
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </PageWrapper>
  );
}
