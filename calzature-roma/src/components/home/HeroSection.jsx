import React from "react";
import { Link } from "react-router-dom";
import { createPageUrl } from "@/utils";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export default function HeroSection({ storeImage }) {
  return (
    <section className="relative overflow-hidden bg-[#F5F5F5]">
      <div className="max-w-7xl mx-auto px-6 py-16 md:py-24 lg:py-28">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <p className="text-xs tracking-widest text-[#888888] uppercase mb-5 font-medium">
              Dal 1990 · Cesano Boscone
            </p>
            <h1 className="text-4xl md:text-5xl lg:text-[3.25rem] leading-[1.1] text-[#1A1A1A] mb-6 font-display">
              Calzature, abbigliamento e accessori per tutta la famiglia
            </h1>
            <p className="text-base text-[#555555] leading-relaxed mb-8 max-w-xl">
              Da oltre 30 anni il punto di riferimento a Cesano Boscone per scarpe di qualità a prezzi accessibili. Trovi scarpe da donna, uomo, bambino, cerimonia, borse e abbigliamento.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                to={createPageUrl("Prodotti")}
                className="inline-flex items-center gap-2 bg-[#1A1A1A] hover:bg-[#333333] text-white font-medium px-7 py-3.5 rounded-full transition-all text-sm"
              >
                Scopri i prodotti
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                to={createPageUrl("Contatti")}
                className="inline-flex items-center gap-2 bg-white hover:bg-[#F5F5F5] text-[#1A1A1A] font-medium px-7 py-3.5 rounded-full border border-[#E5E5E5] transition-all text-sm"
              >
                Vieni a trovarci
              </Link>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.97 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="relative"
          >
            <div className="relative rounded-2xl overflow-hidden shadow-xl shadow-black/8">
              <img
                src={storeImage}
                alt="Interno del negozio Calzature Roma a Cesano Boscone"
                className="w-full h-[350px] md:h-[450px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
            </div>
            <div className="absolute -bottom-4 -left-4 bg-white rounded-xl shadow-lg p-4 hidden lg:block border border-[#E5E5E5]">
              <div className="text-2xl font-bold text-[#1A1A1A] font-display">30+</div>
              <div className="text-xs text-[#888888] font-medium">Anni di esperienza</div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}