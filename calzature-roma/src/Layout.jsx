import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { createPageUrl } from "@/utils";
import { Menu, X, MapPin, Phone, Mail } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { name: "Home", page: "Home" },
  { name: "Il Negozio", page: "IlNegozio" },
  { name: "Prodotti", page: "Prodotti" },
  { name: "Contatti", page: "Contatti" },
];

export default function Layout({ children, currentPageName }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
  }, [currentPageName]);

  return (
    <div className="min-h-screen bg-white text-[#1A1A1A] font-sans">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,600;0,700;0,800;1,400;1,600&display=swap');
        * { font-family: 'Inter', system-ui, -apple-system, sans-serif; }
        h1, h2, h3, .font-display { font-family: 'Playfair Display', Georgia, serif; }
        html { scroll-behavior: smooth; }
      `}</style>

      {/* Navbar */}
      <nav className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-white/95 backdrop-blur-md shadow-sm border-b border-[#E5E5E5]" : "bg-white border-b border-[#E5E5E5]"
      }`}>
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between h-16 md:h-20">
          <Link to={createPageUrl("Home")} className="flex items-center gap-2">
            <span className="text-2xl md:text-3xl tracking-tight text-[#1A1A1A] font-display font-bold">
              Calzature Roma
            </span>
          </Link>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.page}
                to={createPageUrl(link.page)}
                className={`text-sm font-medium transition-colors hover:text-[#1A1A1A] ${
                  currentPageName === link.page ? "text-[#1A1A1A]" : "text-[#888888]"
                }`}
              >
                {link.name}
              </Link>
            ))}
            <Link
              to={createPageUrl("Contatti")}
              className="bg-[#1A1A1A] hover:bg-[#333333] text-white text-sm font-medium px-5 py-2.5 rounded-full transition-colors"
            >
              Vieni a trovarci
            </Link>
          </div>

          {/* Mobile hamburger */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden p-2 text-[#1A1A1A]"
          >
            {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile menu */}
        <AnimatePresence>
          {menuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden bg-white border-t border-[#E5E5E5] overflow-hidden"
            >
              <div className="px-6 py-4 space-y-1">
                {navLinks.map((link) => (
                  <Link
                    key={link.page}
                    to={createPageUrl(link.page)}
                    className={`block py-3 text-base font-medium transition-colors border-b border-[#F5F5F5] ${
                      currentPageName === link.page ? "text-[#1A1A1A]" : "text-[#888888]"
                    }`}
                  >
                    {link.name}
                  </Link>
                ))}
                <Link
                  to={createPageUrl("Contatti")}
                  className="block mt-4 text-center bg-[#1A1A1A] text-white font-medium px-5 py-3 rounded-full"
                >
                  Vieni a trovarci
                </Link>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      {/* Page content */}
      <main>{children}</main>

      {/* Footer */}
      <footer className="bg-[#1A1A1A] text-white/60">
        <div className="max-w-7xl mx-auto px-6 py-12 md:py-16">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-16">
            <div>
              <h3 className="text-xl font-bold text-white mb-4 font-display">
                Calzature Roma
              </h3>
              <p className="text-sm leading-relaxed">
                Qualità, varietà e cortesia da oltre 30 anni. Il tuo punto di riferimento per scarpe e abbigliamento a Cesano Boscone.
              </p>
            </div>
            <div>
              <h4 className="text-xs font-semibold text-white uppercase tracking-widest mb-5">Navigazione</h4>
              <div className="space-y-2.5">
                {navLinks.map((link) => (
                  <Link
                    key={link.page}
                    to={createPageUrl(link.page)}
                    className="block text-sm hover:text-white transition-colors"
                  >
                    {link.name}
                  </Link>
                ))}
              </div>
            </div>
            <div>
              <h4 className="text-xs font-semibold text-white uppercase tracking-widest mb-5">Contatti</h4>
              <div className="space-y-2.5 text-sm">
                <p className="flex items-start gap-2">
                  <MapPin className="w-4 h-4 mt-0.5 shrink-0" />
                  Via Roma, 83, 20090 Cesano Boscone (MI)
                </p>
                <p className="flex items-center gap-2">
                  <Phone className="w-4 h-4 shrink-0" />
                  +39 02 4860 0006
                </p>
                <p className="flex items-center gap-2">
                  <Mail className="w-4 h-4 shrink-0" />
                  calzatureromamilano83@gmail.com
                </p>
              </div>
            </div>
          </div>
          <div className="border-t border-white/10 mt-10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-white/30">
            <p>© {new Date().getFullYear()} Calzature Roma. Tutti i diritti riservati.</p>
            <div className="flex gap-6">
              <a href="#" className="hover:text-white/60 transition-colors">Facebook</a>
              <a href="#" className="hover:text-white/60 transition-colors">Instagram</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}