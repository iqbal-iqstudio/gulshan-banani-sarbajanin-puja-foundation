import { motion } from 'motion/react';
import { Newspaper, User, CalendarDays, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const messages = [
  {
    id: 1,
    title: "Durga Puja 2026 Preparations Begin",
    author: "GBSPF Committee",
    date: "May 15, 2026",
    excerpt: "Join us as we kick off the preparations for this year's grand Durga Puja celebrations...",
    category: "Events"
  },
  {
    id: 2,
    title: "Annual General Meeting Scheduled",
    author: "Administration",
    date: "May 10, 2026",
    excerpt: "The Annual General Meeting for all registered members will be held on the first Sunday of next month.",
    category: "Community"
  },
  {
    id: 3,
    title: "New Scholarship Program Launched",
    author: "Education Board",
    date: "May 2, 2026",
    excerpt: "We are thrilled to announce a new scholarship program for meritorious students in our community.",
    category: "Initiatives"
  }
];

export default function News() {
  return (
    <section id="news" className="py-24 bg-saffron-50 relative border-t border-saffron-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <span className="w-2 h-2 bg-saffron-500 rounded-full"></span>
              <span className="text-maroon-800 font-bold tracking-widest uppercase text-xs">Updates</span>
            </div>
            <h2 className="text-3xl md:text-5xl font-serif font-bold text-maroon-900 mb-4">
              Latest News
            </h2>
            <p className="text-gray-600 max-w-xl text-lg">
              Stay informed about the latest developments, upcoming events, and community announcements.
            </p>
          </div>
          <Link to="/news" className="flex-shrink-0 px-6 py-3 rounded-full border-2 border-saffron-600 text-saffron-600 font-semibold hover:bg-saffron-600 hover:text-white transition-colors">
            View All News
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {messages.map((msg, idx) => (
            <motion.div
              key={msg.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="bg-white rounded-xl p-8 shadow-sm hover:shadow-md transition-shadow border border-saffron-500/30 flex flex-col h-full group relative overflow-hidden"
            >
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-saffron-400 to-saffron-600 transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
              
              <div className="flex items-center gap-2 text-saffron-600 mb-4 text-sm font-semibold uppercase tracking-wider">
                <Newspaper size={16} />
                {msg.category}
              </div>
              
              <h3 className="text-2xl font-serif font-bold text-gray-900 mb-4 group-hover:text-maroon-800 transition-colors">
                {msg.title}
              </h3>
              
              <p className="text-gray-600 mb-8 flex-grow">
                {msg.excerpt}
              </p>
              
              <div className="flex items-center justify-between pt-6 border-t border-gray-100">
                <div className="flex flex-col gap-1">
                  <span className="flex items-center text-sm font-medium text-gray-900">
                    <User size={14} className="mr-2 text-saffron-500" /> {msg.author}
                  </span>
                  <span className="flex items-center text-xs text-gray-500">
                    <CalendarDays size={14} className="mr-2 text-saffron-500" /> {msg.date}
                  </span>
                </div>
                <button className="w-10 h-10 rounded-full bg-saffron-50 flex items-center justify-center text-saffron-600 group-hover:bg-saffron-600 group-hover:text-white transition-colors">
                  <ArrowRight size={18} />
                </button>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}