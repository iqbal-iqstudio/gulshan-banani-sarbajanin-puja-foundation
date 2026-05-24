import { motion } from 'motion/react';

const galleryImages = [
  {
    url: "https://images.unsplash.com/photo-1728665174892-03ee205639b2?q=80&w=1480&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    title: "Durga Puja Celebrations"
  },
  {
    url: "https://images.unsplash.com/photo-1774868987467-d73fda42112d?q=80&w=786&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    title: "Festive Lights"
  },
  {
    url: "https://plus.unsplash.com/premium_photo-1698500035173-fdea60f9294e?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    title: "Ganesh Chaturthi"
  },
  {
    url: "https://images.unsplash.com/photo-1636559527737-ea8576ae6571?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    title: "Cultural Heritage"
  },
  {
    url: "https://plus.unsplash.com/premium_photo-1698500034101-2dfa2010f1f9?q=80&w=776&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    title: "Community Gatherings"
  },
  {
    url: "https://images.unsplash.com/photo-1644476533751-f5691b78f9c9?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    title: "Celebrations Sindoor Khela"
  },
  {
    url: "https://images.unsplash.com/photo-1700993714468-408700d3599e?q=80&w=928&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    title: "Traditional Arts"
  },
  {
    url: "https://images.unsplash.com/photo-1774438360002-b093796335d0?q=80&w=774&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    title: "Spiritual Harmony"
  },
  {
    url: "https://images.unsplash.com/photo-1633100122912-fbc6a093abd5?q=80&w=1742&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    title: "Festive Drumming"
  }
];

export default function Gallery() {
  return (
    <section id="gallery" className="py-24 bg-maroon-800 text-white relative border-y-4 border-gold-500">
      <div className="absolute inset-0 pattern-bg opacity-5"></div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-12">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <span className="w-2 h-2 bg-gold-400 rounded-full"></span>
                <span className="text-gold-400 font-bold tracking-widest uppercase text-xs">Glimpses</span>
              </div>
              <h2 className="text-3xl md:text-5xl font-serif font-bold text-white mb-4 shadow-black">
                Photo Gallery
              </h2>
              <p className="text-saffron-100 max-w-md">
                Memories of devotion, joy, and unity captured during our festivals and events.
              </p>
            </div>
            <a
              href="/gallery/photo"
              className="flex-shrink-0 px-6 py-3 rounded-full border-2 border-gold-400 text-gold-400 font-semibold hover:bg-gold-400 hover:text-maroon-900 transition-colors"
            >
              Explore Gallery
            </a>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {galleryImages.map((img, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="relative group overflow-hidden rounded-xl aspect-square"
            >
              <img 
                src={img.url} 
                alt={img.title} 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-maroon-950/90 via-maroon-900/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                <div className="p-6">
                  <h3 className="text-xl font-serif font-bold text-white">{img.title}</h3>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
