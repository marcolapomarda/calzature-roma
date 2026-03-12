import React from "react";
import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";

const reviews = [
  {
    text: "Grande scelta di scarpe per tutti i gusti e prezzi. Personale molto gentile.",
    author: "Maria R.",
  },
  {
    text: "Negozio ben fornito con prodotti di qualità e ottimo rapporto qualità prezzo.",
    author: "Giovanni S.",
  },
  {
    text: "Accoglienza cordiale e grande disponibilità nel consigliare i clienti.",
    author: "Laura B.",
  },
  {
    text: "Trovi scarpe eleganti, casual e anche per cerimonie. Lo consiglio a tutti!",
    author: "Marco T.",
  },
];

export default function ReviewsSection() {
  return (
    <section className="py-20 md:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <h2 className="text-3xl md:text-4xl text-[#1A1A1A] mb-3 font-display">
            Cosa dicono i nostri clienti
          </h2>
          <p className="text-[#555555] text-sm max-w-lg leading-relaxed">
            La soddisfazione dei nostri clienti è la nostra più grande ricompensa.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {reviews.map((r, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="relative bg-[#F5F5F5] rounded-xl p-8"
            >
              <Quote className="w-7 h-7 text-[#CCCCCC] absolute top-6 right-6" />
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, si) => (
                  <Star key={si} className="w-3.5 h-3.5 fill-[#1A1A1A] text-[#1A1A1A]" />
                ))}
              </div>
              <p className="text-[#1A1A1A] leading-relaxed mb-5 italic text-sm">
                "{r.text}"
              </p>
              <p className="text-xs font-medium text-[#888888] uppercase tracking-wider">— {r.author}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}