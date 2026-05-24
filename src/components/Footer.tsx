import { Link } from 'react-router-dom';
import { Facebook, Youtube, Instagram, MapPin, Mail, Phone } from 'lucide-react';
import logoImage from '../assets/images/regenerated_image_1779547298782.jpg';

export default function Footer() {
  return (
    <footer className="bg-white pt-16 pb-8 border-t border-gold-500">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-7 gap-8 mb-12">
          
          <div className="sm:col-span-2 lg:col-span-3 xl:col-span-2">
            <div className="flex items-center gap-3 mb-6">
              <img src={logoImage} alt="GBSPF Logo" className="h-[50px] w-auto object-contain rounded" />
              <span className="font-serif text-[20px] font-bold tracking-tight text-maroon-800 leading-tight">
                Gulshan-Banani Sarbajanin<br/>Puja Foundation
              </span>
            </div>
            <p className="text-gray-500 text-sm max-w-sm mb-6 leading-relaxed">
              Dedicated to preserving our rich cultural heritage, nurturing community bonds, and passing on traditional values to the next generation.
            </p>
            <div className="flex items-center gap-6">
              <a href="#" className="w-8 h-8 rounded-full bg-maroon-50 text-maroon-800 flex items-center justify-center hover:bg-maroon-800 hover:text-white transition-colors">
                <Facebook size={16} />
              </a>
              <a href="#" className="w-8 h-8 rounded-full bg-maroon-50 text-maroon-800 flex items-center justify-center hover:bg-maroon-800 hover:text-white transition-colors">
                <Youtube size={16} />
              </a>
              <a href="#" className="w-8 h-8 rounded-full bg-maroon-50 text-maroon-800 flex items-center justify-center hover:bg-maroon-800 hover:text-white transition-colors">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51h-.571c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                </svg>
              </a>
              <a href="#" className="w-8 h-8 rounded-full bg-maroon-50 text-maroon-800 flex items-center justify-center hover:bg-maroon-800 hover:text-white transition-colors">
                <Instagram size={16} />
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="font-sans text-xs font-bold uppercase tracking-widest mb-6 text-maroon-800">Quick Links</h4>
            <ul className="space-y-3 text-sm">
              <li><Link to="/" className="text-gray-500 hover:text-maroon-800 transition-colors uppercase tracking-widest text-[10px] font-bold">Home</Link></li>
              <li><Link to="/about" className="text-gray-500 hover:text-maroon-800 transition-colors uppercase tracking-widest text-[10px] font-bold">About Us</Link></li>
              <li><Link to="/news-events" className="text-gray-500 hover:text-maroon-800 transition-colors uppercase tracking-widest text-[10px] font-bold">Events</Link></li>
              <li><Link to="/gallery" className="text-gray-500 hover:text-maroon-800 transition-colors uppercase tracking-widest text-[10px] font-bold">Gallery</Link></li>
              <li><Link to="/news" className="text-gray-500 hover:text-maroon-800 transition-colors uppercase tracking-widest text-[10px] font-bold">News</Link></li>
              <li><Link to="/contact" className="text-gray-500 hover:text-maroon-800 transition-colors uppercase tracking-widest text-[10px] font-bold">Contact</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-sans text-xs font-bold uppercase tracking-widest mb-6 text-maroon-800">About GBSPF</h4>
            <ul className="space-y-3 text-sm">
              <li><Link to="/about/mission" className="text-gray-500 hover:text-maroon-800 transition-colors uppercase tracking-widest text-[10px] font-bold">Mission & Vision</Link></li>
              <li><Link to="/about/message" className="text-gray-500 hover:text-maroon-800 transition-colors uppercase tracking-widest text-[10px] font-bold">Message</Link></li>
              <li><Link to="/committee" className="text-gray-500 hover:text-maroon-800 transition-colors uppercase tracking-widest text-[10px] font-bold">Committee</Link></li>
              <li><Link to="/members" className="text-gray-500 hover:text-maroon-800 transition-colors uppercase tracking-widest text-[10px] font-bold">Members</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-sans text-xs font-bold uppercase tracking-widest mb-6 text-maroon-800">Community</h4>
            <ul className="space-y-3 text-sm">
              <li><Link to="/get-involved/volunteers" className="text-gray-500 hover:text-maroon-800 transition-colors uppercase tracking-widest text-[10px] font-bold">Volunteers</Link></li>
              <li><Link to="/get-involved/membership" className="text-gray-500 hover:text-maroon-800 transition-colors uppercase tracking-widest text-[10px] font-bold">Membership</Link></li>
              <li><Link to="/get-involved/scholarship" className="text-gray-500 hover:text-maroon-800 transition-colors uppercase tracking-widest text-[10px] font-bold">Scholarship</Link></li>
              <li><Link to="/donate" className="text-gray-500 hover:text-maroon-800 transition-colors uppercase tracking-widest text-[10px] font-bold">Support Us</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-sans text-xs font-bold uppercase tracking-widest mb-6 text-maroon-800">Media</h4>
            <ul className="space-y-3 text-sm">
              <li><Link to="/gallery/photo" className="text-gray-500 hover:text-maroon-800 transition-colors uppercase tracking-widest text-[10px] font-bold">Photo Gallery</Link></li>
              <li><Link to="/gallery/video" className="text-gray-500 hover:text-maroon-800 transition-colors uppercase tracking-widest text-[10px] font-bold">Video Gallery</Link></li>
              <li><Link to="/gallery/honors" className="text-gray-500 hover:text-maroon-800 transition-colors uppercase tracking-widest text-[10px] font-bold">Honors</Link></li>
              <li><Link to="/gallery/publication" className="text-gray-500 hover:text-maroon-800 transition-colors uppercase tracking-widest text-[10px] font-bold">Publications</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-sans text-xs font-bold uppercase tracking-widest mb-6 text-maroon-800">Contact Info</h4>
            <ul className="space-y-4 text-sm mt-2">
              <li className="text-gray-500 uppercase tracking-widest text-[10px] font-bold leading-relaxed flex items-start gap-2">
                <MapPin size={14} className="text-maroon-800 shrink-0 mt-0.5" />
                <span>House No : 10, Road No: 28, 3rd Floor, Block K, Banani, Dhaka 1213</span>
              </li>
              <li className="text-gray-500 uppercase tracking-widest text-[10px] font-bold flex items-center gap-2">
                <Phone size={14} className="text-maroon-800 shrink-0" />
                <span>+880 1234 567 890</span>
              </li>
              <li className="text-gray-500 uppercase tracking-widest text-[10px] font-bold flex items-center gap-2">
                <Mail size={14} className="text-maroon-800 shrink-0" />
                <a href="mailto:gulshanpuja2008@gmail.com" className="hover:text-maroon-800 transition-colors">gulshanpuja2008@gmail.com</a>
              </li>
            </ul>
          </div>

        </div>
        
        <div className="pt-8 border-t border-gold-500/30 text-center text-gray-400 text-[10px] font-bold uppercase tracking-widest flex flex-col md:flex-row justify-between items-center gap-4">
          <span>&copy; {new Date().getFullYear()} Gulshan-Banani Sarbajanin Puja Foundation. All Rights Reserved.</span>
          <div className="flex gap-6">
            <Link to="/privacy-policy" className="hover:text-maroon-800 transition-colors">Privacy Policy</Link>
            <Link to="/terms-of-service" className="hover:text-maroon-800 transition-colors">Terms of Service</Link>
            <span className="text-maroon-800">Developed By IQ Studio</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
