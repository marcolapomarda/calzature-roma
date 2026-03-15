import React from "react";
import { motion } from "framer-motion";
import { Footprints, Gem, HeartHandshake, Users } from "lucide-react";

const features = [
  {
    icon: Footprints,
    title: "Comfort e calzata",
    desc: "Ampia scelta di calzature comode e di qualità, selezionate per garantire comfort e stabilità durante tutta la giornata.",
  },
  {
    icon: Gem,
    title: "Cerimonia bambino",
    desc: "Scarpe eleganti e abiti per battesimi, comunioni e cresime, con una selezione curata per i momenti più importanti.",
  },
  {
    icon: HeartHandshake,
    title: "Esperienza e consigli",
    desc: "Personale esperto sempre disponibile ad aiutarti nella scelta.",
  },
  {
    icon: Users,
    title: "Per tutta la famiglia",
    desc: "Scarpe per donna, uomo e bambino, dalle calzature eleganti a quelle più casual per tutti i giorni.",
  },
];

export default function FeaturesSection() {
  return (
    <section className="py-20 md:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <h2 className="text-3xl md:text-4xl text-[#1A1A1A] mb-4 font-display">
            Perché scegliere Calzature Roma
          </h2>
          <p className="text-[#555555] max-w-lg mx-auto text-sm leading-relaxed">
            Aiutiamo i nostri clienti a trovare scarpe comode, di qualità e adatte ad ogni occasione.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((f, i) => (
            <motion.div
              key={f.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group text-center p-8 rounded-2xl bg-[#F5F5F5] hover:bg-[#1A1A1A] transition-all duration-300"
            >
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-white text-[#1A1A1A] mb-5 group-hover:bg-white/10 group-hover:text-white transition-all duration-300">
                <f.icon className="w-5 h-5" />
              </div>
              <h3 className="text-base font-semibold text-[#1A1A1A] mb-2 group-hover:text-white transition-colors font-display">{f.title}</h3>
              <p className="text-sm text-[#555555] leading-relaxed group-hover:text-white/70 transition-colors">{f.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}