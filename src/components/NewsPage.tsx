import { useState, useMemo } from 'react';
import { motion } from 'motion/react';
import { Newspaper, User, CalendarDays, ArrowRight, Search, Filter } from 'lucide-react';
import { Link } from 'react-router-dom';
import PageWrapper from './PageWrapper';

const allNews = [
  { id: 1, title: "Durga Puja 2026 Preparations Begin", author: "GBSPF Committee", date: "May 15, 2026", excerpt: "Join us as we kick off the preparations for this year's grand Durga Puja celebrations. The committee has finalized the schedule and is seeking volunteers for various committees.", category: "Events" },
  { id: 2, title: "Annual General Meeting Scheduled", author: "Administration", date: "May 10, 2026", excerpt: "The Annual General Meeting for all registered members will be held on the first Sunday of next month. All members are requested to attend and participate.", category: "Community" },
  { id: 3, title: "New Scholarship Program Launched", author: "Education Board", date: "May 2, 2026", excerpt: "We are thrilled to announce a new scholarship program for meritorious students in our community. Applications are now open for the academic year.", category: "Initiatives" },
  { id: 4, title: "Kali Puja Celebration Details Announced", author: "Cultural Committee", date: "April 28, 2026", excerpt: "Details for the upcoming Kali Puja celebrations have been announced. The event will feature traditional rituals, cultural performances, and community feast.", category: "Events" },
  { id: 5, title: "Youth Cultural Workshop Registration Open", author: "Youth Wing", date: "April 20, 2026", excerpt: "Registration is now open for our annual youth cultural workshop. Participants will learn traditional music, dance, and art forms.", category: "Community" },
  { id: 6, title: "Temple Renovation Fundraiser Success", author: "Finance Team", date: "April 15, 2026", excerpt: "Our recent fundraiser for temple renovation exceeded all expectations. Thank you to all donors for their generous contributions.", category: "Initiatives" },
  { id: 7, title: "Saraswati Puja 2026 Highlights", author: "Media Team", date: "April 8, 2026", excerpt: "Relive the beautiful moments from this year's Saraswati Puja celebration. The event saw record participation from families and children.", category: "Events" },
  { id: 8, title: "Community Health Camp Organized", author: "Social Service", date: "March 30, 2026", excerpt: "A free health check-up camp was organized for underprivileged communities. Over 200 individuals received medical consultations and medicines.", category: "Initiatives" },
  { id: 9, title: "Volunteer Drive for Upcoming Festivals", author: "Volunteer Cell", date: "March 22, 2026", excerpt: "We are looking for enthusiastic volunteers to help organize our upcoming festivals. Training sessions will be provided for all volunteers.", category: "Community" },
  { id: 10, title: "Annual Cultural Program - Call for Artists", author: "Cultural Committee", date: "March 15, 2026", excerpt: "Artists and performers from the community are invited to showcase their talents at our annual cultural program. Auditions will be held next month.", category: "Events" },
  { id: 11, title: "Blood Donation Camp Success", author: "Social Service", date: "March 8, 2026", excerpt: "Our blood donation camp collected over 50 units of blood. We thank all donors and volunteers for making this initiative a success.", category: "Initiatives" },
  { id: 12, title: "New Members Welcome Event", author: "Membership Team", date: "March 1, 2026", excerpt: "A warm welcome to all our new members! An orientation event will be held to introduce them to our foundation's activities and vision.", category: "Community" },
];

const categories = ["All", "Events", "Community", "Initiatives"];
const ITEMS_PER_PAGE = 9;

export default function NewsPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState("All");
  const [currentPage, setCurrentPage] = useState(1);

  const filteredNews = useMemo(() => {
    let results = allNews;
    if (activeCategory !== "All") {
      results = results.filter((item) => item.category === activeCategory);
    }
    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase();
      results = results.filter(
        (item) =>
          item.title.toLowerCase().includes(q) ||
          item.excerpt.toLowerCase().includes(q) ||
          item.author.toLowerCase().includes(q)
      );
    }
    return results;
  }, [activeCategory, searchQuery]);

  const totalPages = Math.ceil(filteredNews.length / ITEMS_PER_PAGE);
  const paginatedNews = filteredNews.slice(
    (currentPage - 1) * ITEMS_PER_PAGE,
    currentPage * ITEMS_PER_PAGE
  );

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
    setCurrentPage(1);
  };

  const handleCategoryChange = (cat: string) => {
    setActiveCategory(cat);
    setCurrentPage(1);
  };

  const getPageNumbers = () => {
    const pages: (number | string)[] = [];
    if (totalPages <= 5) {
      for (let i = 1; i <= totalPages; i++) pages.push(i);
    } else {
      pages.push(1);
      if (currentPage > 3) pages.push('...');
      for (let i = Math.max(2, currentPage - 1); i <= Math.min(totalPages - 1, currentPage + 1); i++) {
        pages.push(i);
      }
      if (currentPage < totalPages - 2) pages.push('...');
      pages.push(totalPages);
    }
    return pages;
  };

  return (
    <PageWrapper title="News">
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
              Stay Updated
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-white mb-6">
              Latest News
            </h1>
            <p className="max-w-3xl mx-auto text-saffron-100/90 text-base md:text-lg leading-relaxed">
              Stay informed about the latest developments, upcoming events, community announcements, and initiatives from our foundation.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Search & Filters */}
      <section className="py-10 bg-white border-b border-saffron-100 sticky top-24 z-30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row gap-4 items-stretch md:items-center justify-between">
            {/* Search Bar */}
            <div className="relative flex-1 max-w-md">
              <Search size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
              <input
                type="text"
                placeholder="Search news by title, content or author..."
                value={searchQuery}
                onChange={handleSearch}
                className="w-full pl-11 pr-4 py-3 rounded-xl border border-saffron-200 bg-saffron-50/50 focus:bg-white focus:border-saffron-500 outline-none text-sm transition-colors"
              />
            </div>
            {/* Filter Buttons */}
            <div className="flex items-center gap-2 flex-wrap">
              <Filter size={16} className="text-gray-400 mr-1" />
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => handleCategoryChange(cat)}
                  className={`px-4 py-2 rounded-full text-xs font-bold uppercase tracking-wider transition-colors ${
                    activeCategory === cat
                      ? 'bg-maroon-800 text-white'
                      : 'bg-saffron-50 text-maroon-800 hover:bg-saffron-100 border border-saffron-200'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* News Grid */}
      <section className="py-12 md:py-16 bg-saffron-50 min-h-[50vh]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {paginatedNews.length === 0 ? (
            <div className="text-center py-20">
              <Newspaper size={48} className="mx-auto text-gray-300 mb-4" />
              <h3 className="text-xl font-bold text-gray-500 mb-2">No news found</h3>
              <p className="text-gray-400">Try adjusting your search or filter to find what you're looking for.</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {paginatedNews.map((msg, idx) => (
                <motion.div
                  key={msg.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: (idx % ITEMS_PER_PAGE) * 0.05 }}
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
          )}

          {/* Page Navigation */}
          {totalPages > 1 && (
            <div className="flex items-center justify-center gap-2 mt-12">
              <button
                onClick={() => setCurrentPage((p) => Math.max(1, p - 1))}
                disabled={currentPage === 1}
                className="w-10 h-10 rounded-lg border border-saffron-200 flex items-center justify-center text-sm font-semibold text-maroon-800 hover:bg-maroon-800 hover:text-white disabled:opacity-30 disabled:cursor-not-allowed transition-colors"
              >
                ‹
              </button>
              {getPageNumbers().map((page, idx) =>
                typeof page === 'string' ? (
                  <span key={`ellipsis-${idx}`} className="w-10 h-10 flex items-center justify-center text-gray-400 text-sm">
                    ...
                  </span>
                ) : (
                  <button
                    key={page}
                    onClick={() => setCurrentPage(page)}
                    className={`w-10 h-10 rounded-lg border text-sm font-semibold transition-colors ${
                      currentPage === page
                        ? 'bg-maroon-800 text-white border-maroon-800'
                        : 'border-saffron-200 text-maroon-800 hover:bg-maroon-50'
                    }`}
                  >
                    {page}
                  </button>
                )
              )}
              <button
                onClick={() => setCurrentPage((p) => Math.min(totalPages, p + 1))}
                disabled={currentPage === totalPages}
                className="w-10 h-10 rounded-lg border border-saffron-200 flex items-center justify-center text-sm font-semibold text-maroon-800 hover:bg-maroon-800 hover:text-white disabled:opacity-30 disabled:cursor-not-allowed transition-colors"
              >
                ›
              </button>
            </div>
          )}
        </div>
      </section>
    </PageWrapper>
  );
}