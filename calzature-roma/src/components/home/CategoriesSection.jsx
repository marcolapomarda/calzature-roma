import React from "react";
import { Link } from "react-router-dom";
import { createPageUrl } from "@/utils";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { categories } from "../categoriesData";

export default function CategoriesSection() {
  return (
    <section className="py-20 md:py-28 bg-[#F5F5F5]">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <h2 className="text-3xl md:text-4xl text-[#1A1A1A] mb-3 font-display">
            I nostri prodotti
          </h2>
          <p className="text-[#555555] text-sm max-w-lg leading-relaxed">
            Scopri la nostra ampia selezione per tutta la famiglia.
          </p>
        </motion.div>

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
  );
}