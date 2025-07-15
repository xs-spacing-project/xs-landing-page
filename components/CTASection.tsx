import React from "react";
import { motion } from "framer-motion";

const CTASection = (): React.ReactNode => {
  return (
    <section id="cta" className="py-20 sm:py-24 bg-transparent">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="relative bg-gradient-to-r from-blue-accent to-active-accent-dark rounded-2xl p-10 md:p-16 text-center overflow-hidden"
        >
          <div className="absolute -top-10 -left-10 w-40 h-40 bg-white/10 rounded-full filter blur-xl"></div>
          <div className="absolute -bottom-16 -right-5 w-56 h-56 bg-white/10 rounded-full filter blur-2xl"></div>

          <div className="relative z-10">
            <h2 className="text-3xl md:text-5xl font-extrabold text-all-white tracking-tighter">
              Ready to park with ease?
            </h2>
            <p className="mt-4 text-lg text-active-accent-light max-w-xl mx-auto">
              Download the Xs app today and transform your travel experience to
              sacred places.
            </p>
            <div className="mt-8">
              <a
                href="#"
                className="inline-block bg-all-white text-blue-accent font-bold px-10 py-4 rounded-lg hover:bg-opacity-90 transition-all duration-300 transform hover:scale-105"
              >
                Get Started with Xs
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CTASection;
