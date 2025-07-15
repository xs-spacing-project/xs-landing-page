import React from "react";
import { motion, Variants } from "framer-motion";
import { featuresData } from "../constants";

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut",
    },
  },
};

const FeatureCard = ({
  icon,
  title,
  description,
}: {
  icon: React.ReactNode;
  title: string;
  description: string;
}) => (
  <motion.div
    variants={cardVariants}
    className="bg-light-card-bg/80 dark:bg-card-bg/80 backdrop-blur-sm p-8 rounded-2xl border border-gray-200/50 dark:border-icon-bg/50 flex flex-col items-start shadow-lg shadow-black/5"
  >
    <div className="bg-blue-accent/10 dark:bg-icon-bg/50 text-blue-accent p-3 rounded-lg mb-6">
      {icon}
    </div>
    <h3 className="text-xl font-bold text-light-text-heading dark:text-text-heading mb-3">
      {title}
    </h3>
    <p className="text-light-text-body dark:text-text-body">{description}</p>
  </motion.div>
);

const Features = (): React.ReactNode => {
  return (
    <section id="features" className="py-20 sm:py-32">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-extrabold text-light-text-heading dark:text-text-heading tracking-tighter">
            Everything you need for a peaceful visit.
          </h2>
          <p className="mt-4 text-lg text-light-text-body dark:text-text-body">
            Our features are designed to remove stress, so you can focus on what
            truly matters.
          </p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          transition={{ staggerChildren: 0.2 }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {featuresData.map((feature, index) => (
            <FeatureCard
              key={index}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
            />
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Features;
