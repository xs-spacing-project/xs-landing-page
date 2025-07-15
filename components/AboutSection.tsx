import React from "react";
import { motion } from "framer-motion";

const AboutSection = (): React.ReactNode => {
  return (
    <section
      id="about"
      className="py-20 sm:py-32 bg-light-card-bg/60 dark:bg-card-bg/60 backdrop-blur-sm"
    >
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.8 }}
          className="grid md:grid-cols-2 gap-10 md:gap-16 items-center"
        >
          <div className="max-w-xl">
            <h2 className="text-4xl md:text-5xl font-extrabold text-light-text-heading dark:text-text-heading tracking-tighter">
              Our Mission: Your Peace of Mind
            </h2>
            <p className="mt-6 text-lg text-light-text-body dark:text-text-body">
              Visiting a place of faith should be a tranquil experience from the
              moment you leave home. We saw the frustration and wasted time
              caused by parking struggles, and we knew there had to be a better
              way.
            </p>
            <p className="mt-4 text-lg text-light-text-body dark:text-text-body">
              Xs was born from a simple idea: to use technology to remove a
              modern-day hassle from a timeless tradition. We are dedicated to
              making every spiritual journey smoother, more predictable, and
              entirely stress-free.
            </p>
          </div>
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {/* Placeholder image from Unsplash. Alternative: A picture of a serene path or temple entrance. */}
            <img
              src="https://www.mindinventory.com/blog/wp-content/uploads/2022/10/car-parking-app.png"
              alt="Serene path leading to a destination"
              className="rounded-2xl shadow-xl shadow-black/10 dark:shadow-black/30 aspect-square object-cover"
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
