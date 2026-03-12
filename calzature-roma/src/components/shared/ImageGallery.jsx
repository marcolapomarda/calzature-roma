import React from "react";
import { motion } from "framer-motion";

export default function ImageGallery({ images }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
      {images.map((img, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: i * 0.1 }}
          className={`rounded-2xl overflow-hidden ${i === 0 ? "md:col-span-2 md:row-span-2" : ""}`}
        >
          <img
            src={img.src}
            alt={img.alt}
            className={`w-full object-cover ${i === 0 ? "h-64 md:h-full" : "h-56"}`}
          />
        </motion.div>
      ))}
    </div>
  );
}