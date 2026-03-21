import React, { useState } from "react";
import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Car, ExternalLink, Clock } from "lucide-react";

export default function Contatti() {
  const [formData, setFormData] = useState({ nome: "", email: "", oggetto: "", messaggio: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitMessage("");

    try {
      const formDataObj = new FormData();
      formDataObj.append("nome", formData.nome);
      formDataObj.append("email", formData.email);
      formDataObj.append("oggetto", formData.oggetto);
      formDataObj.append("messaggio", formData.messaggio);
      formDataObj.append("_captcha", "false");
      formDataObj.append("_subject", "Richiesta dal sito Calzature Roma");

      const response = await fetch("https://formsubmit.co/5c20055513c74110a0bef46982388983", {
        method: "POST",
        body: formDataObj,
      });

      if (response.ok) {
        setSubmitMessage("Messaggio inviato con successo! Ti contatteremo presto.");
        setFormData({ nome: "", email: "", oggetto: "", messaggio: "" });
        setTimeout(() => setSubmitMessage(""), 5000);
      } else {
        setSubmitMessage("Errore nell'invio del messaggio. Riprova più tardi.");
      }
    } catch (error) {
      setSubmitMessage("Errore nell'invio del messaggio. Riprova più tardi.");
    } finally {
      setIsSubmitting(false);
    }
  }

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
      <section className="py-16 md:py-10 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-10">
            {/* Info cards + opening hours */}
            <div className="lg:col-span-2 space-y-4">
              {[
                {
                  icon: MapPin,
                  title: "Indirizzo",
                  content: <><p className="text-sm text-[#555555]">Via Roma, 83, 20090 Cesano Boscone (MI)</p><p className="text-sm text-[#555555]">Provincia di Milano</p></>,
                  delay: 0,
                },
                {
                  icon: Phone,
                  title: "Telefono",
                  content: <a href="tel:+390248600006" className="text-sm text-[#1A1A1A] hover:text-[#555555] underline underline-offset-2">+39 02 4860 0006</a>,
                  delay: 0.1,
                },
                {
                  icon: Mail,
                  title: "Email",
                  content: <a href="mailto:calzatureromamilano83@gmail.com" className="text-sm text-[#1A1A1A] hover:text-[#555555] underline underline-offset-2">calzatureromamilano83@gmail.com</a>,
                  delay: 0.2,
                },
                {
                  icon: Clock,
                  title: "Orari di apertura",
                  content: (
                    <div className="text-sm text-[#555555] space-y-1.5">
                      <p className="flex justify-between gap-4">
                        <span>Lunedì</span>
                        <span className="font-medium">Mattina chiuso · 15:30 - 19:30</span>
                      </p>
                      <p className="flex justify-between gap-4">
                        <span>Martedì - Sabato</span>
                        <span className="font-medium">09:00 - 12:30 · 15:30 - 19:30</span>
                      </p>
                      <p className="flex justify-between gap-4">
                        <span>Domenica</span>
                        <span className="font-medium">Chiuso</span>
                      </p>
                    </div>
                  ),
                  delay: 0.3,
                },
                {
                  icon: Car,
                  title: "Parcheggio",
                  content: <p className="text-sm text-[#555555]">Parcheggio disponibile di fronte al negozio e nelle vicinanze.</p>,
                  delay: 0.4,
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
                  src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d5598.757104603742!2d9.0935634!3d45.4420273!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4786c26de3ea5091%3A0x8ce9d68b41a9be1!2sCalzature%20Roma!5e0!3m2!1sen!2sit!4v1773393229702!5m2!1sen!2sit"
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

      {/* Contact form */}
      <section className="py-10 md:py-16 bg-[#F5F5F5]">
        <div className="max-w-3xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="bg-white rounded-2xl shadow-sm border border-[#E5E5E5] p-6 md:p-8"
          >
            <h2 className="text-2xl md:text-3xl text-[#1A1A1A] mb-2 font-display">
              Scrivici un messaggio
            </h2>
            <p className="text-sm text-[#555555] mb-6">
              Per richieste su disponibilità, misure o prodotti particolari puoi
              inviarci un messaggio. Ti risponderemo all&apos;indirizzo email che
              indichi qui sotto.
            </p>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label
                    htmlFor="nome"
                    className="block text-xs font-medium text-[#555555] mb-1"
                  >
                    Nome e cognome
                  </label>
                  <input
                    id="nome"
                    name="nome"
                    type="text"
                    required
                    value={formData.nome}
                    onChange={handleChange}
                    className="w-full rounded-md border border-[#E5E5E5] px-3 py-2 text-sm text-[#1A1A1A] focus:outline-none focus:border-[#1A1A1A]"
                  />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="block text-xs font-medium text-[#555555] mb-1"
                  >
                    Email
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full rounded-md border border-[#E5E5E5] px-3 py-2 text-sm text-[#1A1A1A] focus:outline-none focus:border-[#1A1A1A]"
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="oggetto"
                  className="block text-xs font-medium text-[#555555] mb-1"
                >
                  Oggetto
                </label>
                <input
                  id="oggetto"
                  name="oggetto"
                  type="text"
                  value={formData.oggetto}
                  onChange={handleChange}
                  className="w-full rounded-md border border-[#E5E5E5] px-3 py-2 text-sm text-[#1A1A1A] focus:outline-none focus:border-[#1A1A1A]"
                />
              </div>

              <div>
                <label
                  htmlFor="messaggio"
                  className="block text-xs font-medium text-[#555555] mb-1"
                >
                  Messaggio
                </label>
                <textarea
                  id="messaggio"
                  name="messaggio"
                  rows={5}
                  required
                  value={formData.messaggio}
                  onChange={handleChange}
                  className="w-full rounded-md border border-[#E5E5E5] px-3 py-2 text-sm text-[#1A1A1A] focus:outline-none focus:border-[#1A1A1A] resize-vertical"
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="inline-flex items-center justify-center gap-2 bg-[#1A1A1A] hover:bg-[#333333] disabled:opacity-60 text-white font-medium px-6 py-3 rounded-full text-sm transition-colors"
              >
                {isSubmitting ? "Invio in corso..." : "Invia messaggio"}
              </button>

              {submitMessage && (
                <motion.p
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className={`text-sm font-medium rounded-lg p-3 ${
                    submitMessage.includes("successo")
                      ? "bg-green-50 text-green-800"
                      : "bg-red-50 text-red-800"
                  }`}
                >
                  {submitMessage}
                </motion.p>
              )}

              <p className="text-[11px] text-[#888888] mt-2">
                Il messaggio verrà inviato a{" "}
                <span className="underline">
                  calzatureromamilano83@gmail.com
                </span>
                . Non utilizziamo i tuoi dati per newsletter o comunicazioni
                promozionali automatiche.
              </p>
            </form>
          </motion.div>
        </div>
      </section>
    </div>
  );
}