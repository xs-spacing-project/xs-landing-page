import React from "react";
import { motion, Variants } from "framer-motion";

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.3,
    },
  },
};

const itemVariants: Variants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const Hero = (): React.ReactNode => {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center text-center px-6 overflow-hidden"
    >
      <div className="absolute inset-0 bg-gradient-to-b from-light-bg/0 via-light-bg/80 to-light-bg dark:from-main-bg/0 dark:via-main-bg/80 dark:to-main-bg z-10"></div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="relative z-20 max-w-4xl mx-auto"
      >
        <motion.h1
          variants={itemVariants}
          className="text-5xl md:text-7xl lg:text-8xl font-extrabold text-light-text-heading dark:text-text-heading tracking-tighter"
        >
          <span className="text-glow">Find Serenity,</span>
          <br />
          Not Parking.
        </motion.h1>
        <motion.p
          variants={itemVariants}
          className="mt-6 max-w-2xl mx-auto text-lg md:text-xl text-light-text-body dark:text-text-body"
        >
          With Xs, secure your parking spot near sacred destinations
          hassle-free. Plan your visit with real-time rush insights and seamless
          booking.
        </motion.p>
        <motion.div
          variants={itemVariants}
          className="mt-10 flex flex-col sm:flex-row justify-center items-center gap-4"
        >
          <a
            href="#features"
            className="w-full sm:w-auto bg-blue-accent text-all-white font-semibold px-8 py-4 rounded-lg hover:bg-opacity-80 transition-all duration-300 transform hover:scale-105"
          >
            Explore Features
          </a>
          <a
            href="#how-it-works"
            className="w-full sm:w-auto bg-light-card-bg dark:bg-card-bg text-light-text-heading dark:text-all-white font-semibold px-8 py-4 rounded-lg hover:bg-gray-200 dark:hover:bg-icon-bg transition-colors duration-300 border border-gray-200 dark:border-icon-bg"
          >
            How It Works
          </a>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
