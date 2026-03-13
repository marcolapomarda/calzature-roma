import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { createPageUrl } from "@/utils";
import { motion } from "framer-motion";
import {
  ArrowLeft,
  ChevronLeft,
  ChevronRight,
  MapPin,
  Check,
} from "lucide-react";
import { useProductById } from "@/hooks/use-products";
import {
  getCategoryById,
  getSubcategoryById,
} from "../components/categoriesData";
import { getProductImageUrl } from "@/lib/supabaseClient";

export default function ProdottoDettaglio() {
  const location = useLocation();
  const params = new URLSearchParams(location.search);
  const id = params.get("id");
  const { data: product, isLoading, isError } = useProductById(id);
  const [currentImage, setCurrentImage] = useState(0);

  if (isLoading) {
    return (
      <div className="min-h-[60vh] flex flex-col items-center justify-center px-6 text-center">
        <div className="w-8 h-8 border-4 border-slate-200 border-t-slate-800 rounded-full animate-spin" />
      </div>
    );
  }

  if (isError || !product) {
    return (
      <div className="min-h-[60vh] flex flex-col items-center justify-center px-6 text-center">
        <h1 className="text-2xl font-bold text-[#1A1A1A] mb-4 font-display">Prodotto non trovato</h1>
        <Link to={createPageUrl("Prodotti")} className="text-[#555555] hover:text-[#1A1A1A] flex items-center gap-2 text-sm">
          <ArrowLeft className="w-4 h-4" /> Torna ai prodotti
        </Link>
      </div>
    );
  }

  const category = getCategoryById(product.category);
  const subcategory = getSubcategoryById(
    product.category,
    product.subcategory
  );

  const images = product.images ?? [];

  const nextImage = () => {
    if (!images.length) return;
    setCurrentImage((prev) => (prev + 1) % images.length);
  };

  const prevImage = () => {
    if (!images.length) return;
    setCurrentImage((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <div>
      {/* Breadcrumb */}
      <section className="bg-[#F5F5F5] py-4">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center gap-2 text-xs text-[#888888]">
            <Link to={createPageUrl("Prodotti")} className="hover:text-[#1A1A1A]">
              Prodotti
            </Link>
            <span>/</span>
            <Link
              to={createPageUrl(`CategoriaDettaglio?categoria=${product.category}`)}
              className="hover:text-[#1A1A1A]"
            >
              {category?.name}
            </Link>
            {subcategory && (
              <>
                <span>/</span>
                <Link
                  to={createPageUrl(
                    `SottocategoriaDettaglio?categoria=${product.category}&sottocategoria=${product.subcategory}`
                  )}
                  className="hover:text-[#1A1A1A]"
                >
                  {subcategory.name}
                </Link>
              </>
            )}
            <span>/</span>
            <span className="text-[#1A1A1A]">{product.name}</span>
          </div>
        </div>
      </section>

      {/* Product detail */}
      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Image carousel */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="relative rounded-xl overflow-hidden bg-[#F5F5F5] aspect-square">
                {images.length > 0 && (
                  <img
                    src={getProductImageUrl(images[currentImage])}
                    alt={product.name}
                    className="w-full h-full object-cover"
                  />
                )}
                {images.length > 1 && (
                  <>
                    <button
                      onClick={prevImage}
                      className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/90 hover:bg-white flex items-center justify-center shadow-lg transition-all"
                    >
                      <ChevronLeft className="w-5 h-5 text-[#1A1A1A]" />
                    </button>
                    <button
                      onClick={nextImage}
                      className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/90 hover:bg-white flex items-center justify-center shadow-lg transition-all"
                    >
                      <ChevronRight className="w-5 h-5 text-[#1A1A1A]" />
                    </button>
                    <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
                      {product.images.map((_, idx) => (
                        <button
                          key={idx}
                          onClick={() => setCurrentImage(idx)}
                          className={`w-2 h-2 rounded-full transition-all ${
                            idx === currentImage ? "bg-white w-6" : "bg-white/50"
                          }`}
                        />
                      ))}
                    </div>
                  </>
                )}
              </div>
              {images.length > 1 && (
                <div className="grid grid-cols-4 gap-3 mt-4">
                  {images.map((img, idx) => (
                    <button
                      key={idx}
                      onClick={() => setCurrentImage(idx)}
                      className={`aspect-square rounded-lg overflow-hidden border-2 transition-all ${
                        idx === currentImage ? "border-[#1A1A1A]" : "border-[#E5E5E5] hover:border-[#888888]"
                      }`}
                    >
                      <img
                        src={getProductImageUrl(img)}
                        alt={`${product.name} ${idx + 1}`}
                        className="w-full h-full object-cover"
                      />
                    </button>
                  ))}
                </div>
              )}
            </motion.div>

            {/* Product info */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="flex flex-col"
            >
              <div className="mb-4">
                <p className="text-xs text-[#888888] uppercase tracking-wider mb-2">
                  {subcategory?.name}
                </p>
                <h1 className="text-3xl md:text-4xl text-[#1A1A1A] font-display mb-4">
                  {product.name}
                </h1>
                <p className="text-base text-[#555555] leading-relaxed mb-6">
                  {product.description}
                </p>
              </div>

              {/* Features */}
              {(product.features ?? []).length > 0 && (
                <div className="mb-8">
                  <h2 className="text-lg font-semibold text-[#1A1A1A] mb-4 font-display">
                    Caratteristiche principali
                  </h2>
                  <ul className="space-y-2">
                    {(product.features ?? []).map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-3">
                        <Check className="w-4 h-4 text-[#1A1A1A] mt-0.5 shrink-0" />
                        <span className="text-sm text-[#555555]">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Category badge */}
              <div className="mb-8">
                <Link
                  to={createPageUrl(`CategoriaDettaglio?categoria=${product.category}`)}
                  className="inline-flex items-center gap-2 text-xs text-[#888888] hover:text-[#1A1A1A] transition-colors"
                >
                  <span className="px-3 py-1.5 bg-[#F5F5F5] rounded-full">
                    Categoria: {category?.name}
                  </span>
                </Link>
              </div>

              {/* Store CTA */}
              <div className="bg-[#F5F5F5] rounded-xl p-6 mb-8">
                <div className="flex items-start gap-3 mb-4">
                  <MapPin className="w-5 h-5 text-[#1A1A1A] shrink-0 mt-0.5" />
                  <div>
                    <h3 className="font-semibold text-[#1A1A1A] mb-1 text-sm">Disponibile in negozio</h3>
                    <p className="text-xs text-[#555555] leading-relaxed">
                      Vieni a provarlo da Calzature Roma. Il nostro personale sarà felice di aiutarti a trovare la taglia perfetta.
                    </p>
                  </div>
                </div>
                <Link
                  to={createPageUrl("Contatti")}
                  className="w-full flex items-center justify-center gap-2 bg-[#1A1A1A] hover:bg-[#333333] text-white font-medium px-6 py-3.5 rounded-full transition-all text-sm"
                >
                  Vieni a trovarci in negozio
                </Link>
              </div>

              <Link
                to={createPageUrl(`CategoriaDettaglio?categoria=${product.category}`)}
                className="inline-flex items-center gap-2 text-[#555555] hover:text-[#1A1A1A] text-sm transition-colors"
              >
                <ArrowLeft className="w-4 h-4" /> Torna alla categoria
              </Link>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}