import { useState, useCallback, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import { Image, Video, Award, FileText, X, Play, Download, ChevronLeft, ChevronRight, Maximize2 } from 'lucide-react';
import PageWrapper from './PageWrapper';

// ─── DATA ───────────────────────────────────────────────────────────────────

interface MediaItem {
  id: number;
  title: string;
  description: string;
  thumbnail: string;
  category: 'photo' | 'video' | 'honors' | 'publication';
  /** For photos: full-resolution image URL */
  src?: string;
  /** For videos: YouTube/Vimeo embed URL or direct video URL */
  videoUrl?: string;
  /** For publications: PDF download URL */
  pdfUrl?: string;
  /** For honours: date of honour */
  date?: string;
}

const allMedia: MediaItem[] = [
  // ── Photos (9) ──
  { id: 1,  title: 'Durga Puja 2026 Celebrations', description: 'Grand celebrations of Durga Puja with traditional rituals, cultural programs, and community feast.', thumbnail: 'https://images.unsplash.com/photo-1728665174892-03ee205639b2?w=500&q=80', src: 'https://images.unsplash.com/photo-1728665174892-03ee205639b2?w=1480&q=80', category: 'photo' },
  { id: 2,  title: 'Festive Lights Decoration', description: 'Beautiful light decorations illuminating the pandal during the festive season.', thumbnail: 'https://images.unsplash.com/photo-1774868987467-d73fda42112d?w=500&q=80', src: 'https://images.unsplash.com/photo-1774868987467-d73fda42112d?w=1480&q=80', category: 'photo' },
  { id: 3,  title: 'Ganesh Chaturthi Celebrations', description: 'Devotees celebrating Ganesh Chaturthi with great enthusiasm and devotion.', thumbnail: 'https://plus.unsplash.com/premium_photo-1698500035173-fdea60f9294e?w=500&q=80', src: 'https://plus.unsplash.com/premium_photo-1698500035173-fdea60f9294e?w=1480&q=80', category: 'photo' },
  { id: 4,  title: 'Cultural Heritage Program', description: 'Showcasing traditional Bengali Hindu culture through music, dance, and art.', thumbnail: 'https://images.unsplash.com/photo-1636559527737-ea8576ae6571?w=500&q=80', src: 'https://images.unsplash.com/photo-1636559527737-ea8576ae6571?w=1480&q=80', category: 'photo' },
  { id: 5,  title: 'Community Gathering', description: 'Members of the community coming together to celebrate and share joy.', thumbnail: 'https://plus.unsplash.com/premium_photo-1698500034101-2dfa2010f1f9?w=500&q=80', src: 'https://plus.unsplash.com/premium_photo-1698500034101-2dfa2010f1f9?w=1480&q=80', category: 'photo' },
  { id: 6,  title: 'Sindoor Khela Ceremony', description: 'The traditional Sindoor Khela ritual marking the culmination of Durga Puja.', thumbnail: 'https://images.unsplash.com/photo-1644476533751-f5691b78f9c9?w=500&q=80', src: 'https://images.unsplash.com/photo-1644476533751-f5691b78f9c9?w=1480&q=80', category: 'photo' },
  { id: 7,  title: 'Traditional Arts Exhibition', description: 'An exhibition showcasing traditional Bengali arts, crafts, and handlooms.', thumbnail: 'https://images.unsplash.com/photo-1700993714468-408700d3599e?w=500&q=80', src: 'https://images.unsplash.com/photo-1700993714468-408700d3599e?w=1480&q=80', category: 'photo' },
  { id: 8,  title: 'Spiritual Harmony', description: 'A moment of spiritual connection and harmony during the evening aarti.', thumbnail: 'https://images.unsplash.com/photo-1774438360002-b093796335d0?w=500&q=80', src: 'https://images.unsplash.com/photo-1774438360002-b093796335d0?w=1480&q=80', category: 'photo' },
  { id: 9,  title: 'Festive Drumming Performance', description: 'Traditional drumming performances adding rhythm and energy to the celebrations.', thumbnail: 'https://images.unsplash.com/photo-1633100122912-fbc6a093abd5?w=500&q=80', src: 'https://images.unsplash.com/photo-1633100122912-fbc6a093abd5?w=1480&q=80', category: 'photo' },

  // ── Videos (6) ──
  { id: 10, title: 'Durga Puja 2026 - Full Celebration', description: 'Complete coverage of the Durga Puja celebrations including rituals, cultural programs, and community moments.', thumbnail: 'https://images.unsplash.com/photo-1570248391777-aed3b1f07d44?q=80&w=1288&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', videoUrl: 'https://www.w3schools.com/html/mov_bbb.mp4', category: 'video' },
  { id: 11, title: 'Evening Aarti - Spiritual Moments', description: 'Experience the divine evening aarti ceremony with hymns, lights, and devotional songs.', thumbnail: 'https://images.unsplash.com/photo-1507692049790-de58290a4334?w=500&q=80', videoUrl: 'https://www.w3schools.com/html/mov_bbb.mp4', category: 'video' },
  { id: 12, title: 'Cultural Program - Classical Dance', description: 'A mesmerizing classical dance performance by the youth of our community.', thumbnail: 'https://images.unsplash.com/photo-1688820661462-a44e4b2770e8?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', videoUrl: 'https://www.w3schools.com/html/mov_bbb.mp4', category: 'video' },
  { id: 13, title: 'Community Feast Highlights', description: 'The grand community feast bringing together families and friends in celebration.', thumbnail: 'https://images.unsplash.com/photo-1555244162-803834f70033?w=500&q=80', videoUrl: 'https://www.w3schools.com/html/mov_bbb.mp4', category: 'video' },
  { id: 14, title: 'Kali Puja 2026 - Special Coverage', description: 'Special coverage of Kali Puja celebrations with traditional rituals and cultural events.', thumbnail: 'https://images.unsplash.com/photo-1608222351212-18fe0ec7b13b?w=500&q=80', videoUrl: 'https://www.w3schools.com/html/mov_bbb.mp4', category: 'video' },
  { id: 15, title: 'Youth Cultural Workshop', description: 'Highlights from the youth workshop on traditional Bengali music and dance forms.', thumbnail: 'https://images.unsplash.com/photo-1509062522246-3755977927d7?w=500&q=80', videoUrl: 'https://www.w3schools.com/html/mov_bbb.mp4', category: 'video' },

  // ── Honors (6) ──
  { id: 16, title: 'Community Service Recognition 2025', description: 'Honoring outstanding volunteers for their dedicated service to the community throughout the year.', thumbnail: 'https://images.unsplash.com/photo-1580674287546-e5e105fb2541?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', src: 'https://images.unsplash.com/photo-1580674287546-e5e105fb2541?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', category: 'honors', date: '2025' },
  { id: 17, title: 'Excellence in Cultural Preservation', description: 'Award recognizing contributions to preserving and promoting Bengali Hindu cultural heritage.', thumbnail: 'https://images.unsplash.com/photo-1778864875290-87c7cc5aa9fe?q=80&w=1931&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', src: 'https://images.unsplash.com/photo-1574484284002-952d92456975?w=1480&q=80', category: 'honors', date: '2024' },
  { id: 18, title: 'Youth Leadership Award', description: 'Recognizing young leaders who have shown exceptional dedication to community service and cultural activities.', thumbnail: 'https://images.unsplash.com/photo-1528605248644-14dd04022da1?w=500&q=80', src: 'https://images.unsplash.com/photo-1528605248644-14dd04022da1?w=1480&q=80', category: 'honors', date: '2024' },
  { id: 19, title: 'Lifetime Achievement Honor', description: 'A lifetime achievement award presented to a founding member for decades of service to the foundation.', thumbnail: 'https://images.unsplash.com/photo-1559136555-9303baea8ebd?w=500&q=80', src: 'https://images.unsplash.com/photo-1559136555-9303baea8ebd?w=1480&q=80', category: 'honors', date: '2023' },
  { id: 20, title: 'Best Community Organization Award', description: 'Our foundation recognized as the Best Community Organization for outstanding social and cultural work.', thumbnail: 'https://5.imimg.com/data5/SELLER/Default/2025/10/552576304/TT/EM/MI/156131024/medals-for-marathon-500x500.jpg', src: 'https://images.unsplash.com/photo-1519750157634-b0c9f16b5a7e?w=1480&q=80', category: 'honors', date: '2023' },
  { id: 21, title: 'Volunteer Appreciation Ceremony', description: 'Annual volunteer appreciation ceremony honoring the selfless contributions of our community volunteers.', thumbnail: 'https://images.unsplash.com/photo-1560252829-804f1aedf1be?w=500&q=80', src: 'https://images.unsplash.com/photo-1560252829-804f1aedf1be?w=1480&q=80', category: 'honors', date: '2025' },

  // ── Publications (6) ──
  { id: 22, title: 'Annual Report 2025', description: 'Comprehensive annual report detailing the foundation\'s activities, financials, and community impact for the year 2025.', thumbnail: 'https://images.unsplash.com/photo-1596522354195-e84ae3c98731?w=500&q=80', category: 'publication', pdfUrl: '#' },
  { id: 23, title: 'Festival Guide 2026', description: 'Complete guide to all festivals and events organized by the foundation for the year 2026.', thumbnail: 'https://img.magnific.com/free-psd/bifold-brochure-mockup_1332-60594.jpg?semt=ais_hybrid&w=740&q=80', category: 'publication', pdfUrl: '#' },
  { id: 24, title: 'Cultural Heritage Handbook', description: 'An illustrated handbook on Bengali Hindu traditions, rituals, and cultural practices.', thumbnail: 'https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?w=500&q=80', category: 'publication', pdfUrl: '#' },
  { id: 25, title: 'Community Membership Directory', description: 'Official directory of all registered members of Gulshan-Banani Sarbajanin Puja Foundation.', thumbnail: 'https://images.unsplash.com/photo-1586281380117-5a60ae2050cc?w=500&q=80', category: 'publication', pdfUrl: '#' },
  { id: 26, title: 'Scholarship Program Brochure', description: 'Detailed information about our scholarship programs, eligibility criteria, and application process.', thumbnail: 'https://images.unsplash.com/photo-1456324463128-7ff6903988d8?w=500&q=80', category: 'publication', pdfUrl: '#' },
  { id: 27, title: 'Foundation Constitution & By-laws', description: 'Official constitution, by-laws, and governance documents of the foundation.', thumbnail: 'https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=500&q=80', category: 'publication', pdfUrl: '#' },
];

// ─── CATEGORY CONFIG ─────────────────────────────────────────────────────────

const categories = [
  { key: 'photo' as const,        label: 'Photo',        icon: Image,      desc: 'Captured moments of devotion, celebration, and community bonding.' },
  { key: 'video' as const,        label: 'Video',        icon: Video,      desc: 'Watch our festivals, events, and cultural programs in motion.' },
  { key: 'honors' as const,       label: 'Honors',       icon: Award,      desc: 'Recognitions and awards received by our foundation and members.' },
  { key: 'publication' as const,  label: 'Publication',  icon: FileText,   desc: 'Download reports, guides, brochures, and official documents.' },
];

// ─── PREVIEW MODAL ───────────────────────────────────────────────────────────

function MediaPreviewModal({
  item,
  onClose,
  onPrev,
  onNext,
  hasPrev,
  hasNext,
}: {
  item: MediaItem;
  onClose: () => void;
  onPrev: () => void;
  onNext: () => void;
  hasPrev: boolean;
  hasNext: boolean;
}) {
  const handleBackdropClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) onClose();
  };

  return (
    <AnimatePresence>
      <motion.div
        key="preview-backdrop"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-[100] bg-black/90 flex items-center justify-center p-4 md:p-8"
        onClick={handleBackdropClick}
      >
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 backdrop-blur-md flex items-center justify-center text-white transition-colors"
          aria-label="Close preview"
        >
          <X size={22} />
        </button>

        {/* Previous button */}
        {hasPrev && (
          <button
            onClick={onPrev}
            className="absolute left-4 top-1/2 -translate-y-1/2 z-10 w-10 h-10 md:w-12 md:h-12 rounded-full bg-white/10 hover:bg-white/20 backdrop-blur-md flex items-center justify-center text-white transition-colors"
            aria-label="Previous media"
          >
            <ChevronLeft size={24} />
          </button>
        )}

        {/* Next button */}
        {hasNext && (
          <button
            onClick={onNext}
            className="absolute right-4 top-1/2 -translate-y-1/2 z-10 w-10 h-10 md:w-12 md:h-12 rounded-full bg-white/10 hover:bg-white/20 backdrop-blur-md flex items-center justify-center text-white transition-colors"
            aria-label="Next media"
          >
            <ChevronRight size={24} />
          </button>
        )}

        {/* Content */}
        <motion.div
          key={item.id}
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.9, opacity: 0 }}
          transition={{ duration: 0.25 }}
          className="max-w-5xl w-full max-h-[90vh] flex flex-col"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Media display */}
          <div className="flex-1 flex items-center justify-center bg-black/40 rounded-t-2xl overflow-hidden min-h-[300px] max-h-[70vh]">
            {item.category === 'video' && item.videoUrl ? (
              <video
                controls
                autoPlay
                className="w-full max-h-[70vh] object-contain"
                src={item.videoUrl}
              >
                Your browser does not support the video tag.
              </video>
            ) : item.category === 'publication' ? (
              <div className="flex flex-col items-center justify-center p-12 text-center">
                <FileText size={80} className="text-saffron-400 mb-6" />
                <h3 className="text-2xl font-bold text-white mb-2">{item.title}</h3>
                <p className="text-gray-400 mb-6 max-w-md">{item.description}</p>
                <a
                  href={item.pdfUrl}
                  download
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-saffron-500 hover:bg-saffron-600 text-white font-bold uppercase tracking-widest text-xs transition-colors"
                >
                  <Download size={16} /> Download PDF
                </a>
              </div>
            ) : (
              <img
                src={item.src || item.thumbnail}
                alt={item.title}
                className="w-full max-h-[70vh] object-contain"
                loading="lazy"
              />
            )}
          </div>

          {/* Info bar */}
          <div className="bg-white/10 backdrop-blur-md rounded-b-2xl p-5">
            <h3 className="text-white font-bold text-lg mb-1">{item.title}</h3>
            <p className="text-gray-300 text-sm">{item.description}</p>
            {item.date && (
              <span className="inline-block mt-2 text-xs text-saffron-400 font-semibold uppercase tracking-wider">
                {item.date}
              </span>
            )}
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}

// ─── VIDEO PLAYER MODAL ──────────────────────────────────────────────────────

function VideoPlayerModal({ item, onClose }: { item: MediaItem; onClose: () => void }) {
  const handleBackdropClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) onClose();
  };

  return (
    <AnimatePresence>
      <motion.div
        key="video-modal"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-[100] bg-black/90 flex items-center justify-center p-4"
        onClick={handleBackdropClick}
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 backdrop-blur-md flex items-center justify-center text-white transition-colors"
          aria-label="Close video"
        >
          <X size={22} />
        </button>
        <motion.div
          key={item.id}
          initial={{ scale: 0.9 }}
          animate={{ scale: 1 }}
          exit={{ scale: 0.9 }}
          className="w-full max-w-4xl aspect-video"
          onClick={(e) => e.stopPropagation()}
        >
          <video
            controls
            autoPlay
            className="w-full h-full rounded-2xl"
            src={item.videoUrl}
          >
            Your browser does not support the video tag.
          </video>
          <div className="mt-4 text-center">
            <h3 className="text-white font-bold text-lg">{item.title}</h3>
            <p className="text-gray-400 text-sm mt-1">{item.description}</p>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}

// ─── MAIN COMPONENT ──────────────────────────────────────────────────────────

export default function GalleryPage({ defaultCategory }: { defaultCategory?: 'photo' | 'video' | 'honors' | 'publication' } = {}) {
  const location = useLocation();
  const [isStuck, setIsStuck] = useState(false);
  const [previewItem, setPreviewItem] = useState<MediaItem | null>(null);
  const [playVideo, setPlayVideo] = useState<MediaItem | null>(null);

  // Determine active category from URL path
  const pathCategory = location.pathname.split('/').pop() as 'photo' | 'video' | 'honors' | 'publication' | undefined;
  const activeCategory = (pathCategory && ['photo', 'video', 'honors', 'publication'].includes(pathCategory) ? pathCategory : defaultCategory ?? 'photo') as 'photo' | 'video' | 'honors' | 'publication';

  // Detect sticky state for glass effect
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setIsStuck(!entry.isIntersecting),
      { threshold: 0, rootMargin: '-1px 0px 0px 0px' }
    );
    const sentinel = document.getElementById('gallery-bar-sentinel');
    if (sentinel) observer.observe(sentinel);
    return () => observer.disconnect();
  }, []);

  const filteredMedia = allMedia.filter((m) => m.category === activeCategory);

  // Lightbox navigation
  const currentIndex = previewItem ? filteredMedia.findIndex((m) => m.id === previewItem.id) : -1;
  const hasPrev = currentIndex > 0;
  const hasNext = currentIndex < filteredMedia.length - 1;

  const goPrev = useCallback(() => {
    if (hasPrev) setPreviewItem(filteredMedia[currentIndex - 1]);
  }, [currentIndex, hasPrev, filteredMedia]);

  const goNext = useCallback(() => {
    if (hasNext) setPreviewItem(filteredMedia[currentIndex + 1]);
  }, [currentIndex, hasNext, filteredMedia]);

  // Keyboard navigation
  const handleKeyDown = useCallback((e: React.KeyboardEvent) => {
    if (e.key === 'Escape') { setPreviewItem(null); setPlayVideo(null); }
    if (e.key === 'ArrowLeft') goPrev();
    if (e.key === 'ArrowRight') goNext();
  }, [goPrev, goNext]);

  const handleItemClick = (item: MediaItem) => {
    if (item.category === 'video') {
      setPlayVideo(item);
    } else if (item.category === 'publication') {
      setPreviewItem(item);
    } else {
      setPreviewItem(item);
    }
  };

  return (
    <PageWrapper title="Gallery">
      {/* SEO-friendly structured data */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "ImageGallery",
          "name": "GBSPF Photo Gallery",
          "description": "Photo gallery of Gulshan-Banani Sarbajanin Puja Foundation events and activities"
        })
      }} />

      {/* ── Hero Banner ── */}
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
              Media Gallery
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-white mb-6">
              Gallery
            </h1>
            <p className="max-w-3xl mx-auto text-saffron-100/90 text-base md:text-lg leading-relaxed">
              Explore our collection of photos, videos, honors, and publications showcasing 
              the vibrant cultural and spiritual life of our community.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Sentinel for sticky detection */}
      <div id="gallery-bar-sentinel" />

      {/* ── Category Tabs ── */}
      <section
        className={`sticky z-30 transition-all duration-300 ${
          isStuck
            ? 'top-20 bg-white/80 backdrop-blur-xl shadow-md border-b border-saffron-200/50'
            : 'top-24 bg-white border-b border-saffron-100'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-center gap-1.5 sm:gap-2 py-4">
            {categories.map((cat) => {
              const Icon = cat.icon;
              const isActive = activeCategory === cat.key;
              return (
                <Link
                  key={cat.key}
                  to={`/gallery/${cat.key}`}
                  replace
                  className={`flex items-center gap-2 px-4 py-2.5 sm:px-5 sm:py-3 rounded-xl font-bold uppercase tracking-wider text-xs transition-all duration-300 ${
                    isActive
                      ? 'bg-maroon-800 text-white shadow-lg shadow-maroon-800/20 scale-105'
                      : 'bg-white/50 backdrop-blur-md text-maroon-800 hover:bg-white/90 hover:shadow-sm border border-white/40 shadow-sm'
                  }`}
                  aria-current={isActive ? 'page' : undefined}
                >
                  <Icon size={16} />
                  {cat.label}
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── Category Description ── */}
      <section className="py-10 bg-saffron-50/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.p
            key={activeCategory}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-gray-600 text-base md:text-lg max-w-2xl mx-auto"
          >
            {categories.find((c) => c.key === activeCategory)?.desc}
          </motion.p>
        </div>
      </section>

      {/* ── Media Grid ── */}
      <section
        className="py-12 md:py-20 bg-saffron-50 min-h-[50vh]"
        onKeyDown={handleKeyDown}
        tabIndex={0}
        role="region"
        aria-label={`${activeCategory} gallery`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {filteredMedia.length === 0 ? (
            <div className="text-center py-20">
              <Image size={48} className="mx-auto text-gray-300 mb-4" />
              <h3 className="text-xl font-bold text-gray-500 mb-2">No media found</h3>
              <p className="text-gray-400">Check back later for new content in this category.</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
              {filteredMedia.map((item, idx) => (
                <motion.div
                  key={item.id}
                  layout
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-50px' }}
                  transition={{ duration: 0.4, delay: (idx % 9) * 0.05 }}
                >
                  {item.category === 'publication' ? (
                    /* ── Publication Card ── */
                    <div className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-all border border-saffron-500/30 group flex flex-col h-full">
                      <div className="relative h-48 overflow-hidden bg-saffron-50 flex items-center justify-center">
                        <img
                          src={item.thumbnail}
                          alt={item.title}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                          loading="lazy"
                        />
                        <div className="absolute inset-0 bg-maroon-900/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                          <Maximize2 size={32} className="text-white" />
                        </div>
                      </div>
                      <div className="p-6 flex flex-col flex-1">
                        <div className="flex items-center gap-2 text-saffron-600 mb-3 text-xs font-bold uppercase tracking-wider">
                          <FileText size={14} />
                          PDF Document
                        </div>
                        <h3 className="text-xl font-serif font-bold text-gray-900 mb-2 group-hover:text-maroon-800 transition-colors">
                          {item.title}
                        </h3>
                        <p className="text-gray-500 text-sm mb-5 flex-1 line-clamp-3">
                          {item.description}
                        </p>
                        <a
                          href={item.pdfUrl}
                          download
                          className="inline-flex items-center justify-center gap-2 w-full px-4 py-2.5 rounded-lg bg-maroon-800 hover:bg-maroon-900 text-white font-bold uppercase tracking-widest text-[10px] transition-colors"
                        >
                          <Download size={14} /> Download PDF
                        </a>
                      </div>
                    </div>
                  ) : item.category === 'video' ? (
                    /* ── Video Card ── */
                    <button
                      onClick={() => handleItemClick(item)}
                      className="w-full text-left bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-all border border-saffron-500/30 group cursor-pointer"
                      aria-label={`Play video: ${item.title}`}
                    >
                      <div className="relative aspect-video overflow-hidden">
                        <img
                          src={item.thumbnail}
                          alt={item.title}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                          loading="lazy"
                        />
                        <div className="absolute inset-0 bg-black/30 flex items-center justify-center group-hover:bg-black/40 transition-colors">
                          <div className="w-16 h-16 rounded-full bg-saffron-500/90 flex items-center justify-center group-hover:scale-110 transition-transform shadow-lg">
                            <Play size={28} className="text-white ml-1" />
                          </div>
                        </div>
                      </div>
                      <div className="p-5">
                        <h3 className="text-lg font-serif font-bold text-gray-900 group-hover:text-maroon-800 transition-colors">
                          {item.title}
                        </h3>
                        <p className="text-gray-500 text-sm mt-1 line-clamp-2">{item.description}</p>
                      </div>
                    </button>
                  ) : (
                    /* ── Photo / Honors Card ── */
                    <button
                      onClick={() => handleItemClick(item)}
                      className="w-full text-left group cursor-pointer"
                      aria-label={`View ${item.title}`}
                    >
                      <div className="relative overflow-hidden rounded-xl aspect-square shadow-sm hover:shadow-md transition-shadow">
                        <img
                          src={item.thumbnail}
                          alt={item.title}
                          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                          loading="lazy"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-maroon-950/90 via-maroon-900/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                          <div className="p-5 w-full">
                            <h3 className="text-lg font-serif font-bold text-white">{item.title}</h3>
                            {item.date && (
                              <span className="text-saffron-300 text-xs font-semibold uppercase tracking-wider">
                                {item.date}
                              </span>
                            )}
                          </div>
                        </div>
                        {/* Always visible gradient for mobile */}
                        <div className="absolute inset-0 bg-gradient-to-t from-maroon-950/70 to-transparent md:hidden flex items-end">
                          <div className="p-4">
                            <h3 className="text-base font-bold text-white">{item.title}</h3>
                          </div>
                        </div>
                      </div>
                      {/* Description visible below on desktop */}
                      <div className="mt-3 hidden md:block">
                        <h3 className="text-lg font-serif font-bold text-gray-900 group-hover:text-maroon-800 transition-colors">
                          {item.title}
                        </h3>
                        <p className="text-gray-500 text-sm mt-1 line-clamp-2">{item.description}</p>
                        {item.date && (
                          <span className="text-saffron-600 text-xs font-semibold uppercase tracking-wider">
                            {item.date}
                          </span>
                        )}
                      </div>
                    </button>
                  )}
                </motion.div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* ── Preview Modal ── */}
      {previewItem && (
        <MediaPreviewModal
          item={previewItem}
          onClose={() => setPreviewItem(null)}
          onPrev={goPrev}
          onNext={goNext}
          hasPrev={hasPrev}
          hasNext={hasNext}
        />
      )}

      {/* ── Video Player Modal ── */}
      {playVideo && (
        <VideoPlayerModal
          item={playVideo}
          onClose={() => setPlayVideo(null)}
        />
      )}
    </PageWrapper>
  );
}
