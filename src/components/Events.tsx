import { Calendar, Clock, MapPin, ArrowRight } from 'lucide-react';
import { motion } from 'motion/react';

const events = [
  {
    id: 1,
    title: 'Maha Shivaratri Mahotsav',
    date: 'March 8, 2026',
    time: '6:00 PM - 12:00 AM',
    location: 'Main Temple Hall',
    description: 'Join us for a spiritual night of Rudrabhishek, bhajans, and meditation. Mahaprasad will be served after the midnight aarti.',
    color: 'from-blue-600 to-blue-800' // Associated with Shiva
  },
  {
    id: 2,
    title: 'Weekly Sunday Satsang',
    date: 'Every Sunday',
    time: '10:00 AM - 12:30 PM',
    location: 'Community Center',
    description: 'Interactive discourse on the Bhagavad Gita by special guest speakers followed by community lunch.',
    color: 'from-saffron-500 to-saffron-700'
  },
  {
    id: 3,
    title: 'Children\'s Shloka Class',
    date: 'Every Saturday',
    time: '4:00 PM - 5:30 PM',
    location: 'Learning Annex',
    description: 'Teaching children the correct pronunciation and meaning of daily prayers and ancient shlokas.',
    color: 'from-green-600 to-green-800'
  }
];

export default function Events() {
  return (
    <section id="events" className="py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-3 mb-4">
            <span className="w-2 h-2 bg-saffron-500 rounded-full"></span>
            <span className="text-maroon-800 font-bold tracking-widest uppercase text-xs">Join Us</span>
            <span className="w-2 h-2 bg-saffron-500 rounded-full"></span>
          </div>
          <h2 className="text-3xl md:text-5xl font-serif font-bold text-maroon-900 mb-4">
            Upcoming Events & Pujas
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            Immerse yourself in devotion and community. Participate in our upcoming spiritual gatherings and celebrations.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {events.map((event, idx) => (
            <motion.div
              key={event.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className={`bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 border border-saffron-500/30 border-l-4 group ${event.id % 3 === 1 ? 'border-l-gold-500' : event.id % 3 === 2 ? 'border-l-saffron-500' : 'border-l-maroon-800'}`}
            >
              <div className="h-1 w-full bg-transparent"></div>
              <div className="p-8">
                <h3 className="text-2xl font-serif font-bold text-gray-900 mb-4 group-hover:text-saffron-600 transition-colors">
                  {event.title}
                </h3>
                
                <div className="space-y-3 mb-6">
                  <div className="flex items-center text-gray-600">
                    <Calendar size={18} className="mr-3 text-saffron-500" />
                    <span className="font-medium text-sm">{event.date}</span>
                  </div>
                  <div className="flex items-center text-gray-600">
                    <Clock size={18} className="mr-3 text-saffron-500" />
                    <span className="font-medium text-sm">{event.time}</span>
                  </div>
                  <div className="flex items-center text-gray-600">
                    <MapPin size={18} className="mr-3 text-saffron-500" />
                    <span className="font-medium text-sm">{event.location}</span>
                  </div>
                </div>
                
                <p className="text-gray-600 mb-8 line-clamp-3">
                  {event.description}
                </p>
                
                <a href="#contact" className="inline-flex items-center text-saffron-600 font-semibold hover:text-maroon-800 transition-colors">
                  More Details <ArrowRight size={18} className="ml-2 group-hover:translate-x-1 transition-transform" />
                </a>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
