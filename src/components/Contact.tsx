import { Send } from 'lucide-react';
import { motion } from 'motion/react';

export default function Contact() {
  return (
    <section id="contact" className="py-24 bg-saffron-50 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-3xl overflow-hidden shadow-2xl flex flex-col lg:flex-row">
          
          {/* Contact Info Side */}
          <div className="bg-maroon-800 text-white p-12 lg:w-2/5 relative overflow-hidden">
            <div className="absolute -bottom-24 -right-24 w-64 h-64 bg-saffron-600 rounded-full opacity-20 blur-3xl"></div>
            <div className="absolute top-12 -left-12 w-40 h-40 bg-gold-500 rounded-full opacity-10 blur-2xl"></div>
            
            <div className="relative z-10">
              <h3 className="text-3xl font-serif font-bold mb-2">Get in Touch</h3>
              <p className="text-saffron-200 mb-12">We would love to hear from you. Reach out for any inquiries or to join our community.</p>
              
              <div className="space-y-8">
                <div>
                  <h4 className="text-sm font-semibold uppercase tracking-wider text-saffron-400 mb-2">Location</h4>
                  <p className="text-lg">House No : 10, Road No: 28, 3rd Floor, Block K, Banani, Dhaka 1213<br/>Dhaka, Bangladesh</p>
                </div>
                <div>
                  <h4 className="text-sm font-semibold uppercase tracking-wider text-saffron-400 mb-2">Email</h4>
                  <p className="text-lg">gulshanpuja2008@gmail.com</p>
                </div>
                <div>
                  <h4 className="text-sm font-semibold uppercase tracking-wider text-saffron-400 mb-2">Phone</h4>
                  <p className="text-lg">+880 1234 567890</p>
                </div>
              </div>
            </div>
          </div>

          {/* Form Side */}
          <div className="p-12 lg:w-3/5 my-auto">
            <h3 className="text-2xl font-serif font-bold text-gray-900 mb-4">Subscribe to Our Newsletter</h3>
            <p className="text-gray-600 mb-8">Stay updated with our latest events, news, and community updates. Enter your email below to subscribe.</p>
            
            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">Email Address</label>
                <input 
                  type="email" 
                  id="email" 
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-saffron-500 focus:border-saffron-500 transition-colors outline-none"
                  placeholder="ram.das@example.com"
                  required
                />
              </div>
              
              <button 
                type="submit"
                className="w-full flex items-center justify-center px-8 py-4 rounded-lg bg-saffron-600 hover:bg-saffron-700 text-white font-semibold transition-colors gap-2"
              >
                Subscribe Now <Send size={18} />
              </button>
            </form>
          </div>

        </div>
      </div>
    </section>
  );
}
