import React from "react";
import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Car, ExternalLink } from "lucide-react";

export default function Contatti() {
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
              Contatti
            </p>
            <h1 className="text-4xl md:text-5xl text-[#1A1A1A] mb-5 font-display">
              Vieni a trovarci
            </h1>
            <p className="text-base text-[#555555] leading-relaxed">
              Siamo a Cesano Boscone, in provincia di Milano. Ti aspettiamo in negozio per aiutarti a trovare le scarpe e l'abbigliamento perfetti per te.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact info + Map */}
      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-10">
            {/* Info cards */}
            <div className="lg:col-span-2 space-y-4">
              {[
                {
                  icon: MapPin,
                  title: "Indirizzo",
                  content: <><p className="text-sm text-[#555555]">Cesano Boscone (MI)</p><p className="text-sm text-[#555555]">Provincia di Milano</p></>,
                  delay: 0,
                },
                {
                  icon: Phone,
                  title: "Telefono",
                  content: <a href="tel:+3902XXXXXXX" className="text-sm text-[#1A1A1A] hover:text-[#555555] underline underline-offset-2">+39 02 XXX XXXX</a>,
                  delay: 0.1,
                },
                {
                  icon: Mail,
                  title: "Email",
                  content: <a href="mailto:info@calzatureroma.it" className="text-sm text-[#1A1A1A] hover:text-[#555555] underline underline-offset-2">info@calzatureroma.it</a>,
                  delay: 0.2,
                },
                {
                  icon: Car,
                  title: "Parcheggio",
                  content: <p className="text-sm text-[#555555]">Parcheggio disponibile nelle vicinanze.</p>,
                  delay: 0.3,
                },
              ].map((item) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: item.delay }}
                  className="bg-[#F5F5F5] rounded-xl p-5"
                >
                  <div className="flex items-start gap-4">
                    <div className="w-9 h-9 rounded-lg bg-[#1A1A1A] flex items-center justify-center shrink-0">
                      <item.icon className="w-4 h-4 text-white" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-[#1A1A1A] mb-1 text-sm">{item.title}</h3>
                      {item.content}
                    </div>
                  </div>
                </motion.div>
              ))}

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.4 }}
              >
                <a
                  href="https://maps.app.goo.gl/HoYk77B3Qr3gZn1q7"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 w-full bg-[#1A1A1A] hover:bg-[#333333] text-white font-medium py-4 rounded-xl transition-all text-sm"
                >
                  <ExternalLink className="w-4 h-4" />
                  Indicazioni stradali
                </a>
              </motion.div>
            </div>

            {/* Map */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="lg:col-span-3"
            >
              <div className="rounded-xl overflow-hidden h-full min-h-[400px] border border-[#E5E5E5]">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d11197.37!2d9.0900!3d45.4400!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4786c2e8e0f0b6d5%3A0x3c8e5b4e6e7a8c9d!2sCesano%20Boscone%2C%20MI!5e0!3m2!1sit!2sit!4v1710000000000!5m2!1sit!2sit"
                  width="100%"
                  height="100%"
                  style={{ border: 0, minHeight: "400px" }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Calzature Roma - Mappa"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}