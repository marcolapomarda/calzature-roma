import React from "react";
import { Link } from "react-router-dom";
import { createPageUrl } from "@/utils";
import { motion } from "framer-motion";
import { ArrowRight, MapPin } from "lucide-react";
import { categories } from "../components/categoriesData";

export default function Prodotti() {
  return (
    <div>
      {/* Hero */}
      <section className="bg-[#F5F5F5] py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-2xl"
          >
            <p className="text-xs tracking-widest text-[#888888] uppercase mb-5 font-medium">
              Le nostre categorie
            </p>
            <h1 className="text-4xl md:text-5xl text-[#1A1A1A] mb-5 font-display">
              I nostri prodotti
            </h1>
            <p className="text-base text-[#555555] leading-relaxed">
              Scopri la nostra ampia selezione di calzature, abbigliamento e accessori per tutta la famiglia.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Categories grid */}
      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {categories.map((cat, i) => (
              <motion.div
                key={cat.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.07 }}
              >
                <Link
                  to={createPageUrl(`CategoriaDettaglio?categoria=${cat.id}`)}
                  className="group block relative rounded-xl overflow-hidden aspect-[4/3] shadow-sm hover:shadow-md transition-shadow duration-300"
                >
                  <img
                    src={cat.heroImage}
                    alt={cat.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-black/15 to-transparent group-hover:from-black/75 transition-all duration-300" />
                  <div className="absolute bottom-0 left-0 right-0 p-5">
                    <h3 className="text-white text-lg font-semibold mb-0.5 font-display">{cat.name}</h3>
                    <p className="text-white/65 text-xs mb-3">{cat.shortDesc}</p>
                    <span className="inline-flex items-center gap-1.5 text-white/80 text-xs font-medium group-hover:gap-3 transition-all">
                      Scopri <ArrowRight className="w-3 h-3" />
                    </span>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Info banner */}
      <section className="py-16 bg-[#1A1A1A]">
        <div className="max-w-2xl mx-auto px-6 text-center">
          <div className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/10 text-white mb-5">
            <MapPin className="w-4 h-4" />
          </div>
          <h2 className="text-2xl md:text-3xl text-white mb-4 font-display">
            Vieni a scoprire i nostri prodotti
          </h2>
          <p className="text-white/50 text-sm leading-relaxed mb-7">
            Tutti i prodotti sono disponibili nel nostro negozio di Cesano Boscone. Il nostro personale sarà felice di aiutarti nella scelta perfetta per ogni occasione.
          </p>
          <Link
            to={createPageUrl("Contatti")}
            className="inline-flex items-center gap-2 bg-white hover:bg-[#F5F5F5] text-[#1A1A1A] font-medium px-7 py-3.5 rounded-full transition-all text-sm"
          >
            Come raggiungerci <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </div>
  );
}