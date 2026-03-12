import React from "react";
import { motion } from "framer-motion";
import ImageGallery from "../components/shared/ImageGallery";
import { Clock, Heart, Award } from "lucide-react";
import { STORE_IMAGES } from "../components/categoriesData";

const values = [
  { icon: Clock,  title: "Oltre 30 anni di storia", desc: "Un punto di riferimento per la comunità di Cesano Boscone." },
  { icon: Heart,  title: "Passione e cura",          desc: "Ogni prodotto è selezionato con attenzione per la qualità e il comfort." },
  { icon: Award,  title: "Fiducia dei clienti",      desc: "Centinaia di famiglie ci scelgono ogni anno per le loro calzature." },
];

export default function IlNegozio() {
  const galleryImages = [
    { src: STORE_IMAGES.exterior, alt: "Esterno negozio Calzature Roma" },
    { src: STORE_IMAGES.shelves,  alt: "Scaffali di scarpe nel negozio" },
    { src: STORE_IMAGES.bags,     alt: "Borse e accessori in vendita" },
  ];

  return (
    <div>
      {/* Hero */}
      <section className="bg-[#F5F5F5] py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="max-w-2xl">
            <p className="text-xs tracking-widest text-[#888888] uppercase mb-5 font-medium">
              La nostra storia
            </p>
            <h1 className="text-4xl md:text-5xl text-[#1A1A1A] mb-5 font-display">
              Un negozio storico a Cesano Boscone
            </h1>
            <p className="text-base text-[#555555] leading-relaxed">
              Calzature Roma è un negozio storico del territorio, apprezzato per la grande varietà di prodotti e per la cortesia del personale.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Gallery */}
      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <ImageGallery images={galleryImages} />
        </div>
      </section>

      {/* Story */}
      <section className="py-16 md:py-20 bg-[#F5F5F5]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
              <h2 className="text-3xl text-[#1A1A1A] mb-6 font-display">La nostra passione per le calzature</h2>
              <div className="space-y-4 text-[#555555] leading-relaxed text-sm">
                <p>Qui puoi trovare scarpe di diversi stili e prezzi, selezionate con attenzione per offrire comfort, qualità e convenienza.</p>
                <p>Il nostro negozio è conosciuto per l'ampia scelta di modelli: dalle scarpe eleganti per cerimonia a quelle più casual o sportive, fino alle calzature per bambini.</p>
                <p>Accanto alle scarpe proponiamo anche borse, accessori e una selezione di abbigliamento.</p>
              </div>
            </motion.div>
            <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
              <img src={STORE_IMAGES.customer} alt="Cliente che prova scarpe nel negozio" className="rounded-xl shadow-sm w-full h-80 object-cover" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map((v, i) => (
              <motion.div key={v.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.1 }} className="text-center p-8 rounded-xl bg-[#F5F5F5]">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-[#1A1A1A] text-white mb-5">
                  <v.icon className="w-5 h-5" />
                </div>
                <h3 className="text-base font-semibold text-[#1A1A1A] mb-2 font-display">{v.title}</h3>
                <p className="text-sm text-[#555555] leading-relaxed">{v.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}