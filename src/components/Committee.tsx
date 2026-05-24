import { motion } from 'motion/react';
import { Mail, Phone } from 'lucide-react';

const committee = [
  {
    name: "Dr. Ananda Sharma",
    role: "President",
    code: "D 026",
    image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
  },
  {
    name: "Smt. Priya Patel",
    role: "General Secretary",
    code: "L 013",
    image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
  },
  {
    name: "Sri Rajesh Kumar",
    role: "Treasurer",
    code: "L 042",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
  }
];

export default function Committee() {
  return (
    <section id="committee" className="py-24 bg-saffron-50 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-serif font-bold text-maroon-900 mb-4">
            Our Committee
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            Meet the dedicated individuals who volunteer their time and energy to guide the foundation.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-4xl mx-auto">
          {committee.map((member, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-all text-center group border border-saffron-500/30"
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

      </div>
    </section>
  );
}
