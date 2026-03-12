import React from "react";
import { Link } from "react-router-dom";
import { createPageUrl } from "@/utils";
import { motion } from "framer-motion";
import { MapPin, ArrowRight } from "lucide-react";

export default function CTASection() {
  return (
    <section className="py-20 md:py-24 bg-[#1A1A1A]">
      <div className="max-w-3xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-flex items-center justify-center w-11 h-11 rounded-full bg-white/10 text-white mb-6">
            <MapPin className="w-5 h-5" />
          </div>
          <h2 className="text-3xl md:text-4xl text-white mb-4 font-display">
            Ti aspettiamo in negozio
          </h2>
          <p className="text-white/50 text-sm mb-8 max-w-md mx-auto leading-relaxed">
            Vieni a scoprire di persona la nostra selezione. Siamo a Cesano Boscone, in provincia di Milano.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              to={createPageUrl("Contatti")}
              className="inline-flex items-center gap-2 bg-white hover:bg-[#F5F5F5] text-[#1A1A1A] font-medium px-7 py-3.5 rounded-full transition-all text-sm"
            >
              Come raggiungerci
              <ArrowRight className="w-4 h-4" />
            </Link>
            <a
              href="https://maps.app.goo.gl/HoYk77B3Qr3gZn1q7"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 text-white font-medium px-7 py-3.5 rounded-full transition-all text-sm"
            >
              Apri su Google Maps
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}