import { Link, useLocation } from "react-router-dom";
import { Menu, X, Phone, Droplets } from "lucide-react";
import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { cn } from "../lib/utils";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const links = [
    { name: "Home", path: "/" },
    { name: "Gallery", path: "/gallery" },
    { name: "About Us", path: "/about" },
  ];

  return (
    <nav className="bg-white sticky top-0 z-50 border-b border-slate-100 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20">
          <div className="flex items-center">
            <Link to="/" className="flex items-center gap-2 group">
              <img 
                src="/logosparkleclean.png" 
                alt="Sparkle Clean Logo" 
                className="w-35 h-20 rounded-lg object-cover group-hover:opacity-90 transition-opacity"
                referrerPolicy="no-referrer"
              />
              <span className="font-heading font-bold text-2xl tracking-tight text-slate-900">
                Sparkle<span className="text-brand-500">Clean</span>
              </span>
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            {links.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={cn(
                  "text-sm font-medium transition-colors hover:text-brand-500",
                  location.pathname === link.path
                    ? "text-brand-500"
                    : "text-slate-600"
                )}
              >
                {link.name}
              </Link>
            ))}
            <a
              href="tel:0862604005"
              className="flex items-center gap-2 bg-brand-500 text-white px-5 py-2.5 rounded-full font-medium hover:bg-brand-600 transition-all hover:shadow-md hover:shadow-brand-500/20"
            >
              <Phone size={16} />
              <span>086 260 4005</span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-slate-600 hover:text-brand-500 p-2"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden border-t border-slate-100 bg-white overflow-hidden"
          >
            <div className="px-4 pt-2 pb-6 space-y-1">
              {links.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={() => setIsOpen(false)}
                  className={cn(
                    "block px-3 py-3 rounded-md text-base font-medium",
                    location.pathname === link.path
                      ? "bg-brand-50 text-brand-600"
                      : "text-slate-600 hover:bg-slate-50 hover:text-brand-500"
                  )}
                >
                  {link.name}
                </Link>
              ))}
              <a
                href="tel:0862604005"
                className="mt-4 flex items-center justify-center gap-2 bg-brand-500 text-white px-5 py-3 rounded-lg font-medium hover:bg-brand-600 w-full"
              >
                <Phone size={18} />
                <span>Call 086 260 4005</span>
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
