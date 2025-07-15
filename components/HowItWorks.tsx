import React from "react";
import { motion, Variants } from "framer-motion";
import { howItWorksSteps } from "../constants";

const containerVariants: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.3,
    },
  },
};

const itemVariants = (isRight: boolean): Variants => ({
  hidden: { opacity: 0, x: isRight ? 50 : -50 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.6, ease: "easeOut" } },
});

const imageVariants: Variants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  },
};

const HowItWorks = (): React.ReactNode => {
  return (
    <section id="how-it-works" className="py-20 sm:py-32 bg-transparent">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16 sm:mb-24"
        >
          <h2 className="text-4xl md:text-5xl font-extrabold text-light-text-heading dark:text-text-heading tracking-tighter">
            Parking in 3 simple steps.
          </h2>
          <p className="mt-4 text-lg text-light-text-body dark:text-text-body">
            We've simplified the entire process so you can get going faster.
          </p>
        </motion.div>

        <div className="space-y-20">
          {howItWorksSteps.map((step, index) => (
            <motion.div
              key={index}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              transition={{ staggerChildren: 0.2 }}
              className="grid md:grid-cols-2 gap-10 md:gap-16 items-center"
            >
              <motion.div
                variants={itemVariants(index % 2 !== 0)}
                className={`md:order-${index % 2 === 0 ? "1" : "2"}`}
              >
                <span className="text-blue-accent font-bold text-lg">
                  {step.number}
                </span>
                <h3 className="text-3xl font-bold text-light-text-heading dark:text-text-heading mt-2 mb-4">
                  {step.title}
                </h3>
                <p className="text-light-text-body dark:text-text-body text-lg">
                  {step.description}
                </p>
              </motion.div>
              <motion.div
                variants={imageVariants}
                className={`md:order-${index % 2 === 0 ? "2" : "1"}`}
              >
                <img
                  src={step.imageUrl}
                  alt={step.title}
                  className="rounded-2xl shadow-xl shadow-black/10 dark:shadow-black/30 aspect-video md:aspect-square lg:aspect-video object-cover"
                />
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
