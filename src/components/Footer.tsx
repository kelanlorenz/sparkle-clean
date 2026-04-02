import { Link } from "react-router-dom";
import { Phone, MapPin, Instagram, Facebook, Droplets, Clock } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-300 py-12 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          
          {/* Brand */}
          <div className="space-y-4">
            <Link to="/" className="flex items-center gap-2 group inline-flex">
              <img 
                src="/logosparkleclean.png" 
                alt="Sparkle Clean Logo" 
                className="w-15 h-8 rounded-lg object-cover"
                referrerPolicy="no-referrer"
              />
              <span className="font-heading font-bold text-xl tracking-tight text-white">
                Sparkle<span className="text-brand-500">Clean</span>
              </span>
            </Link>
            <p className="text-sm text-slate-400 leading-relaxed max-w-xs">
              No.1 Property maintenance and painting business in North Wicklow and South Dublin.
            </p>
            <div className="flex space-x-4 pt-2">
              <a href="https://instagram.com/Sparklecleandelgany" target="_blank" rel="noreferrer" className="text-slate-400 hover:text-brand-400 transition-colors">
                <Instagram size={20} />
              </a>
              <a href="https://facebook.com/SparkleClean" target="_blank" rel="noreferrer" className="text-slate-400 hover:text-brand-400 transition-colors">
                <Facebook size={20} />
              </a>
            </div>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h3 className="font-heading font-semibold text-white text-lg">Contact Us</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-3">
                <Phone size={18} className="text-brand-500 shrink-0 mt-0.5" />
                <a href="tel:0862604005" className="hover:text-white transition-colors">086 260 4005</a>
              </li>
              <li className="flex items-start gap-3">
                <MapPin size={18} className="text-brand-500 shrink-0 mt-0.5" />
                <span>35 Thorndale,<br/>Delgany, Co. Wicklow,<br/>A63 XF96</span>
              </li>
            </ul>
          </div>

          {/* Hours */}
          <div className="space-y-4">
            <h3 className="font-heading font-semibold text-white text-lg">Opening Hours</h3>
            <ul className="space-y-2 text-sm">
              <li className="flex justify-between"><span>Monday - Friday</span> <span className="text-white">9am – 5pm</span></li>
              <li className="flex justify-between"><span>Saturday</span> <span className="text-brand-400">Closed</span></li>
              <li className="flex justify-between"><span>Sunday</span> <span className="text-brand-400">Closed</span></li>
            </ul>
          </div>

          {/* Links */}
          <div className="space-y-4">
            <h3 className="font-heading font-semibold text-white text-lg">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li><Link to="/" className="hover:text-white transition-colors">Home</Link></li>
              <li><Link to="/gallery" className="hover:text-white transition-colors">Gallery</Link></li>
              <li><Link to="/about" className="hover:text-white transition-colors">About Us</Link></li>
            </ul>
          </div>

        </div>
        
        <div className="mt-12 pt-8 border-t border-slate-800 text-sm text-center text-slate-500 flex flex-col md:flex-row justify-between items-center gap-4">
          <p>&copy; {new Date().getFullYear()} Sparkle Clean. All rights reserved.</p>
          <div className="flex items-center gap-1 text-brand-400">
            <span className="text-yellow-400">★★★★★</span>
            <span className="ml-1 text-slate-400">40+ Google Reviews</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
