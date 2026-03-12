import React from "react";
import { Link } from "react-router-dom";
import { createPageUrl } from "@/utils";
import { motion } from "framer-motion";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { getCategoryById } from "../components/categoriesData";

export default function CategoriaDettaglio() {
  const params = new URLSearchParams(window.location.search);
  const categoryId = params.get("categoria");
  const category = getCategoryById(categoryId);

  if (!category) {
    return (
      <div className="min-h-[60vh] flex flex-col items-center justify-center px-6 text-center">
        <h1 className="text-2xl font-bold text-[#1A1A1A] mb-4 font-display">Categoria non trovata</h1>
        <Link to={createPageUrl("Prodotti")} className="text-[#555555] hover:text-[#1A1A1A] flex items-center gap-2 text-sm">
          <ArrowLeft className="w-4 h-4" /> Torna ai prodotti
        </Link>
      </div>
    );
  }

  return (
    <div>
      {/* Hero */}
      <section className="relative bg-[#1A1A1A] overflow-hidden">
        <img
          src={category.heroImage}
          alt={category.name}
          className="absolute inset-0 w-full h-full object-cover opacity-25"
        />
        <div className="relative max-w-7xl mx-auto px-6 py-20 md:py-28">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Link
              to={createPageUrl("Prodotti")}
              className="inline-flex items-center gap-2 text-white/50 hover:text-white text-xs mb-8 transition-colors uppercase tracking-widest"
            >
              <ArrowLeft className="w-3.5 h-3.5" /> Tutte le categorie
            </Link>
            <h1 className="text-4xl md:text-5xl text-white mb-4 font-display">
              {category.name}
            </h1>
            <p className="text-base text-white/60 max-w-2xl leading-relaxed">
              {category.description}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Subcategories */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.2 }}
            className="mb-10"
          >
            <h2 className="text-2xl md:text-3xl text-[#1A1A1A] mb-2 font-display">
              Esplora le sottocategorie
            </h2>
            <p className="text-sm text-[#555555]">
              Scopri la nostra selezione organizzata per tipologia.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
            {category.subcategories.map((subcategory, i) => (
              <motion.div
                key={subcategory.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
              >
                <Link
                  to={createPageUrl(`SottocategoriaDettaglio?categoria=${categoryId}&sottocategoria=${subcategory.id}`)}
                  className="group block relative rounded-xl overflow-hidden aspect-[4/3] shadow-sm hover:shadow-md transition-shadow duration-300"
                >
                  <img
                    src={subcategory.image}
                    alt={subcategory.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-black/15 to-transparent group-hover:from-black/75 transition-all duration-300" />
                  <div className="absolute bottom-0 left-0 right-0 p-5">
                    <h3 className="text-white text-base font-semibold mb-2 font-display leading-tight">{subcategory.name}</h3>
                    <span className="inline-flex items-center gap-1.5 text-white/80 text-xs font-medium group-hover:gap-3 transition-all">
                      Scopri i prodotti <ArrowRight className="w-3 h-3" />
                    </span>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}