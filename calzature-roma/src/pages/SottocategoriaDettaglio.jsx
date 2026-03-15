import React from "react";
import { Link, useLocation } from "react-router-dom";
import { createPageUrl } from "@/utils";
import { motion } from "framer-motion";
import { ArrowLeft, ArrowRight, MapPin } from "lucide-react";
import {
  getCategoryById,
  getSubcategoryById,
  categories,
} from "../components/categoriesData";
import { useProductsBySubcategory } from "@/hooks/use-products";
import { getProductImageUrl } from "@/lib/supabaseClient";

export default function SottocategoriaDettaglio() {
  const location = useLocation();
  const params = new URLSearchParams(location.search);
  const categoryId = params.get("categoria");
  const subcategoryId = params.get("sottocategoria");

  const category = getCategoryById(categoryId);
  const subcategory = getSubcategoryById(categoryId, subcategoryId);
  const {
    data: products = [],
    isLoading,
    isError,
  } = useProductsBySubcategory(categoryId, subcategoryId);

  if (!category || !subcategory) {
    return (
      <div className="min-h-[60vh] flex flex-col items-center justify-center px-6 text-center">
        <h1 className="text-2xl font-bold text-[#1A1A1A] mb-4 font-display">Sottocategoria non trovata</h1>
        <Link to={createPageUrl("Prodotti")} className="text-[#555555] hover:text-[#1A1A1A] flex items-center gap-2 text-sm">
          <ArrowLeft className="w-4 h-4" /> Torna ai prodotti
        </Link>
      </div>
    );
  }

  if (isLoading) {
    return (
      <div className="min-h-[60vh] flex flex-col items-center justify-center px-6 text-center">
        <div className="w-8 h-8 border-4 border-slate-200 border-t-slate-800 rounded-full animate-spin" />
      </div>
    );
  }

  if (isError) {
    return (
      <div className="min-h-[60vh] flex flex-col items-center justify-center px-6 text-center">
        <h1 className="text-2xl font-bold text-[#1A1A1A] mb-4 font-display">
          Errore nel caricamento dei prodotti
        </h1>
        <p className="text-sm text-[#555555] max-w-md">
          Riprova più tardi o contattaci se il problema persiste.
        </p>
      </div>
    );
  }

  return (
    <div>
      {/* Breadcrumb */}
      <section className="bg-[#F5F5F5] py-4">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center gap-2 text-xs text-[#888888]">
            <Link to={createPageUrl("Prodotti")} className="hover:text-[#1A1A1A]">Prodotti</Link>
            <span>/</span>
            <Link to={createPageUrl(`CategoriaDettaglio?categoria=${categoryId}`)} className="hover:text-[#1A1A1A]">
              {category.name}
            </Link>
            <span>/</span>
            <span className="text-[#1A1A1A]">{subcategory.name}</span>
          </div>
        </div>
      </section>

      {/* Hero */}
      <section className="relative bg-[#1A1A1A] overflow-hidden">
        <img
          src={subcategory.image}
          alt={subcategory.name}
          className="absolute inset-0 w-full h-full object-cover opacity-25"
        />
        <div className="relative max-w-7xl mx-auto px-6 py-16 md:py-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Link
              to={createPageUrl(`CategoriaDettaglio?categoria=${categoryId}`)}
              className="inline-flex items-center gap-2 text-white/50 hover:text-white text-xs mb-6 transition-colors uppercase tracking-widest"
            >
              <ArrowLeft className="w-3.5 h-3.5" /> {category.name}
            </Link>
            <h1 className="text-3xl md:text-4xl text-white mb-3 font-display">
              {subcategory.name}
            </h1>
          </motion.div>
        </div>
      </section>

      {/* Products */}
      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.2 }}
            className="mb-10"
          >
            <h2 className="text-2xl md:text-3xl text-[#1A1A1A] mb-2 font-display">
              I nostri prodotti
            </h2>
            <p className="text-sm text-[#555555]">
              Tutti disponibili nel nostro negozio a Cesano Boscone.
            </p>
          </motion.div>

          {products.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
              {products.map((product, i) => (
                <motion.div
                  key={product.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.08 }}
                  className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300 group border border-[#E5E5E5]"
                >
                  <div className="aspect-[4/3] overflow-hidden relative">
                    <img
                      src={getProductImageUrl(product.images?.[0])}
                      alt={product.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    {product.images.length > 1 && (
                      <div className="absolute top-2 right-2 bg-white/90 backdrop-blur-sm px-2 py-1 rounded-full text-xs text-[#1A1A1A]">
                        +{product.images.length - 1}
                      </div>
                    )}
                  </div>
                  <div className="p-5">
                    <h3 className="font-semibold text-[#1A1A1A] text-md mb-2 font-display">
                      {product.name}
                    </h3>
                    <p className="text-xs text-[#555555] leading-relaxed mb-4">
                      {product.description}
                    </p>
                    <Link
                      to={createPageUrl(`ProdottoDettaglio?id=${product.id}`)}
                      className="inline-flex items-center gap-2 text-[#1A1A1A] hover:text-[#555555] text-xs font-medium transition-colors"
                    >
                      Vedi dettagli <ArrowRight className="w-3 h-3" />
                    </Link>
                  </div>
                </motion.div>
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <p className="text-[#888888] text-sm">Nessun prodotto disponibile in questa sottocategoria.</p>
            </div>
          )}
        </div>
      </section>

      {/* Other subcategories */}
      {category.subcategories.length > 1 && (
        <section className="py-16 bg-[#F5F5F5]">
          <div className="max-w-7xl mx-auto px-6">
            <h2 className="text-2xl text-[#1A1A1A] mb-8 font-display">Altre sottocategorie</h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
              {category.subcategories
                .filter((s) => s.id !== subcategoryId)
                .map((sub, i) => (
                  <motion.div
                    key={sub.id}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: i * 0.05 }}
                  >
                    <Link
                      to={createPageUrl(`SottocategoriaDettaglio?categoria=${categoryId}&sottocategoria=${sub.id}`)}
                      className="group block rounded-xl overflow-hidden relative aspect-square shadow-sm hover:shadow-md transition-shadow"
                    >
                      <img
                        src={sub.image}
                        alt={sub.name}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                      <p className="absolute bottom-0 left-0 right-0 text-white text-xs font-medium p-2.5 leading-tight">
                        {sub.name}
                      </p>
                    </Link>
                  </motion.div>
                ))}
            </div>
          </div>
        </section>
      )}

      {/* CTA */}
      <section className="py-16 bg-[#1A1A1A]">
        <div className="max-w-2xl mx-auto px-6 text-center">
          <div className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/10 text-white mb-5">
            <MapPin className="w-4 h-4" />
          </div>
          <h2 className="text-2xl text-white mb-3 font-display">Vieni a vederli di persona</h2>
          <p className="text-white/50 text-sm mb-7 leading-relaxed">
            Il nostro personale è a disposizione per aiutarti a trovare il modello giusto.
          </p>
          <Link
            to={createPageUrl("Contatti")}
            className="inline-flex items-center gap-2 bg-white hover:bg-[#F5F5F5] text-[#1A1A1A] font-medium px-8 py-3.5 rounded-full transition-all text-sm"
          >
            Come raggiungerci
          </Link>
        </div>
      </section>
    </div>
  );
}