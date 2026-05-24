import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Mail, Phone, ChevronLeft, ChevronRight, Users, UserCheck, Handshake } from 'lucide-react';
import PageWrapper from './PageWrapper';

const committeeData: Record<string, { name: string; role: string; code: string; image: string }[]> = {
  'Executive Committee': [
    { name: 'Dr. Ananda Sharma', role: 'President', code: 'D 026', image: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80' },
    { name: 'Smt. Priya Patel', role: 'General Secretary', code: 'L 013', image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80' },
    { name: 'Sri Rajesh Kumar', role: 'Treasurer', code: 'L 042', image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80' },
    { name: 'Smt. Sunita Das', role: 'Vice President', code: 'D 031', image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80' },
    { name: 'Sri Amit Roy', role: 'Joint Secretary', code: 'L 018', image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80' },
    { name: 'Smt. Rina Banerjee', role: 'Assistant Treasurer', code: 'D 007', image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80' },
    { name: 'Sri Manoj Saha', role: 'Organising Secretary', code: 'L 025', image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80' },
    { name: 'Smt. Tanushree Ghosh', role: 'Public Relations Officer', code: 'D 014', image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80' },
    { name: 'Sri Subir Nath', role: 'Cultural Secretary', code: 'L 033', image: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80' },
  ],
  'Sub Committee': [
    { name: 'Sri Partha Sen', role: 'Finance Sub-Committee Chair', code: 'S 001', image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80' },
    { name: 'Smt. Mitali Dutta', role: 'Finance Sub-Committee Member', code: 'S 002', image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80' },
    { name: 'Sri Tapan Biswas', role: 'Event Management Chair', code: 'S 003', image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80' },
    { name: 'Smt. Arpita Sen Gupta', role: 'Event Management Member', code: 'S 004', image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80' },
    { name: 'Sri Bikash Das', role: 'Decoration Sub-Committee Chair', code: 'S 005', image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80' },
    { name: 'Smt. Krishna Paul', role: 'Decoration Sub-Committee Member', code: 'S 006', image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80' },
  ],
  'Co-ordination Committee': [
    { name: 'Sri Debashish Chakraborty', role: 'Community Outreach Coordinator', code: 'C 001', image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80' },
    { name: 'Smt. Jayanti Sarkar', role: 'Volunteer Coordinator', code: 'C 002', image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80' },
    { name: 'Sri Swapan Malakar', role: 'Logistics Coordinator', code: 'C 003', image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80' },
    { name: 'Smt. Sreela Mondal', role: 'Media & Communications Coordinator', code: 'C 004', image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80' },
  ],
};

const categories = ['Executive Committee', 'Sub Committee', 'Co-ordination Committee'];

const categoryIcons: Record<string, React.ComponentType<any>> = {
  'Executive Committee': Users,
  'Sub Committee': UserCheck,
  'Co-ordination Committee': Handshake,
};

const PER_PAGE = 6;

export default function CommitteePage() {
  const [activeCategory, setActiveCategory] = useState('Executive Committee');
  const [page, setPage] = useState(1);

  const currentMembers = committeeData[activeCategory] || [];
  const totalPages = Math.max(1, Math.ceil(currentMembers.length / PER_PAGE));

  // Reset page when category changes
  const handleCategoryChange = (cat: string) => {
    setActiveCategory(cat);
    setPage(1);
  };

  const paginatedMembers = currentMembers.slice((page - 1) * PER_PAGE, page * PER_PAGE);

  const handlePrev = () => {
    if (page > 1) setPage(p => p - 1);
  };
  const handleNext = () => {
    if (page < totalPages) setPage(p => p + 1);
  };

  const Icon = categoryIcons[activeCategory] || Users;

  return (
    <PageWrapper title="Committee">
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
              Our Council
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-white mb-6">
              Governing Committees
            </h1>
            <p className="max-w-3xl mx-auto text-saffron-100/90 text-base md:text-lg leading-relaxed">
              Meet the dedicated individuals serving on our Executive Committee, Sub Committees, 
              and Co-ordination Committee. Together, they work tirelessly to guide the foundation's 
              mission and serve our community.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Category Tabs */}
      <section className="py-12 bg-white border-b border-saffron-100 sticky top-[73px] z-30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-3">
            {categories.map((cat) => {
              const CatIcon = categoryIcons[cat];
              const isActive = activeCategory === cat;
              return (
                <button
                  key={cat}
                  onClick={() => handleCategoryChange(cat)}
                  className={`inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-bold uppercase tracking-wider transition-all ${
                    isActive
                      ? 'bg-maroon-800 text-white shadow-md'
                      : 'bg-white text-maroon-800 border border-maroon-200 hover:bg-saffron-50 hover:border-saffron-300'
                  }`}
                >
                  <CatIcon size={16} />
                  {cat}
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {/* Members Grid */}
      <section className="py-16 bg-saffron-50 min-h-[500px]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeCategory + page}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
            >
              {/* Category heading */}
              <div className="flex items-center gap-3 mb-10">
                <div className="w-10 h-10 rounded-xl bg-maroon-100 flex items-center justify-center">
                  <Icon size={20} className="text-maroon-800" />
                </div>
                <div>
                  <h2 className="text-2xl md:text-3xl font-serif font-bold text-maroon-900">
                    {activeCategory}
                  </h2>
                  <p className="text-gray-500 text-sm">
                    {currentMembers.length} member{currentMembers.length !== 1 ? 's' : ''} serving in this committee
                  </p>
                </div>
              </div>

              {/* Cards */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
                {paginatedMembers.map((member, idx) => (
                  <motion.div
                    key={member.name + member.role}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: idx * 0.05 }}
                    className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-all group border border-saffron-500/30"
                  >
                    <div className="relative overflow-hidden aspect-square">
                      <img
                        src={member.image}
                        alt={member.name}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105 filter grayscale-[20%] group-hover:grayscale-0"
                      />
                      <div className="absolute inset-0 bg-maroon-950/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
                        <a href="#" className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-maroon-900 hover:bg-saffron-500 hover:text-white transition-colors">
                          <Mail size={18} />
                        </a>
                        <a href="#" className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-maroon-900 hover:bg-saffron-500 hover:text-white transition-colors">
                          <Phone size={18} />
                        </a>
                      </div>
                    </div>
                    <div className="p-6">
                      <h3 className="text-xl font-serif font-bold text-maroon-900 mb-1">{member.name}</h3>
                      <p className="text-saffron-600 font-medium text-sm mb-2">{member.role}</p>
                      <span className="inline-block px-3 py-1 bg-gray-100 text-gray-500 text-xs font-mono rounded-md">{member.code}</span>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Pagination */}
              {totalPages > 1 && (
                <div className="flex items-center justify-center gap-2 mt-12">
                  <button
                    onClick={handlePrev}
                    disabled={page === 1}
                    className={`p-2 rounded-lg transition-colors ${
                      page === 1
                        ? 'text-gray-300 cursor-not-allowed'
                        : 'text-maroon-800 hover:bg-maroon-100'
                    }`}
                  >
                    <ChevronLeft size={20} />
                  </button>

                  {Array.from({ length: totalPages }, (_, i) => i + 1).map((p) => (
                    <button
                      key={p}
                      onClick={() => setPage(p)}
                      className={`w-10 h-10 rounded-lg text-sm font-bold transition-all ${
                        p === page
                          ? 'bg-maroon-800 text-white shadow-md'
                          : 'bg-white text-maroon-800 border border-maroon-200 hover:bg-saffron-50'
                      }`}
                    >
                      {p}
                    </button>
                  ))}

                  <button
                    onClick={handleNext}
                    disabled={page === totalPages}
                    className={`p-2 rounded-lg transition-colors ${
                      page === totalPages
                        ? 'text-gray-300 cursor-not-allowed'
                        : 'text-maroon-800 hover:bg-maroon-100'
                    }`}
                  >
                    <ChevronRight size={20} />
                  </button>
                </div>
              )}
            </motion.div>
          </AnimatePresence>
        </div>
      </section>
    </PageWrapper>
  );
}
