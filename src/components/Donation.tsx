import { motion } from 'motion/react';
import { Smartphone, Landmark, HeartHandshake } from 'lucide-react';

export default function Donation() {
  return (
    <section id="donate" className="py-24 bg-white relative border-y border-saffron-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="flex items-center gap-3 mb-4">
              <span className="w-2 h-2 bg-saffron-500 rounded-full"></span>
              <span className="text-maroon-800 font-bold tracking-widest uppercase text-xs">Support Us</span>
            </div>
            <h2 className="text-3xl md:text-5xl font-serif font-bold text-maroon-900 mb-6">
              Contribute to the <br/>Community
            </h2>
            <p className="text-gray-700 text-lg mb-8 leading-relaxed">
              Your generous donations help us maintain the temple, organize spiritual and cultural events, 
              provide educational resources, and support our community outreach programs. Every contribution, 
              no matter the size, makes a difference.
            </p>
            
            <div className="bg-saffron-50 p-6 rounded-xl border border-saffron-200 flex items-start gap-4">
              <HeartHandshake className="text-saffron-600 flex-shrink-0" size={32} />
              <div>
                <h4 className="font-bold text-maroon-900 mb-1">Tax Exempt Donation</h4>
                <p className="text-sm text-gray-600">All donations to Gulshan-Banani Sarbajanin Puja Foundation are strictly used for foundation activities. Receipts are available upon request.</p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="grid grid-cols-1 gap-6"
          >
            {/* bKash */}
            <div className="bg-white rounded-2xl p-8 border-2 border-[#E2136E]/20 hover:border-[#E2136E] transition-colors shadow-sm relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-32 h-32 bg-[#E2136E]/5 rounded-bl-full -z-10 group-hover:scale-110 transition-transform"></div>
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 rounded-xl bg-[#E2136E]/10 flex items-center justify-center">
                  <Smartphone className="text-[#E2136E]" size={32} />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900">bKash</h3>
                  <p className="text-gray-500 text-sm">Send Money</p>
                </div>
              </div>
              <div className="bg-gray-50 rounded-lg p-4 text-center">
                <p className="text-2xl font-mono font-bold tracking-wider text-gray-800">017XX-XXXXXX</p>
              </div>
            </div>

            {/* Nagad */}
            <div className="bg-white rounded-2xl p-8 border-2 border-[#F6921E]/20 hover:border-[#F6921E] transition-colors shadow-sm relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-32 h-32 bg-[#F6921E]/5 rounded-bl-full -z-10 group-hover:scale-110 transition-transform"></div>
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 rounded-xl bg-[#F6921E]/10 flex items-center justify-center">
                  <Smartphone className="text-[#F6921E]" size={32} />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900">Nagad</h3>
                  <p className="text-gray-500 text-sm">Send Money</p>
                </div>
              </div>
              <div className="bg-gray-50 rounded-lg p-4 text-center">
                <p className="text-2xl font-mono font-bold tracking-wider text-gray-800">019XX-XXXXXX</p>
              </div>
            </div>

            {/* Bank Transfer */}
            <div className="bg-maroon-800 border border-gold-500 rounded-xl p-8 shadow-lg text-white">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 rounded-xl bg-white/10 flex items-center justify-center">
                  <Landmark className="text-saffron-400" size={32} />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white">Sonali Bank PLC</h3>
                  <p className="text-saffron-200 text-sm">Direct Bank Transfer</p>
                </div>
              </div>
              <div className="space-y-2 text-sm text-saffron-50">
                <p className="flex justify-between border-b border-white/10 pb-2">
                  <span className="opacity-70">Bank Branch</span>
                  <span className="font-semibold text-white">Gulshan</span>
                </p>
                <p className="flex justify-between border-b border-white/10 pb-2">
                  <span className="opacity-70">Account Name</span>
                  <span className="font-semibold text-white">GBSPF Trust</span>
                </p>
                <p className="flex justify-between pt-2">
                  <span className="opacity-70">Account No.</span>
                  <span className="font-mono font-bold text-saffron-400">1234 5678 9000 0</span>
                </p>
              </div>
            </div>

          </motion.div>

        </div>
      </div>
    </section>
  );
}
