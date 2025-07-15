import React from "react";
import { motion, Variants } from "framer-motion";
import { testimonialsData } from "../constants";

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

const Testimonials = (): React.ReactNode => {
  return (
    <section id="testimonials" className="py-20 sm:py-32 bg-transparent">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-extrabold text-light-text-heading dark:text-text-heading tracking-tighter">
            Loved by pilgrims and visitors.
          </h2>
          <p className="mt-4 text-lg text-light-text-body dark:text-text-body">
            Don't just take our word for it. Here's what our users are saying.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {testimonialsData.map((testimonial, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="bg-light-card-bg/80 dark:bg-card-bg/80 backdrop-blur-sm p-8 rounded-2xl border border-gray-200/50 dark:border-icon-bg/50 flex flex-col shadow-lg shadow-black/5"
            >
              <p className="text-light-text-body dark:text-text-body flex-grow">
                "{testimonial.quote}"
              </p>
              <div className="flex items-center mt-6">
                <img
                  src={testimonial.avatarUrl}
                  alt={testimonial.name}
                  className="h-12 w-12 rounded-full"
                />
                <div className="ml-4">
                  <h4 className="font-bold text-light-text-heading dark:text-text-heading">
                    {testimonial.name}
                  </h4>
                  <p className="text-sm text-light-text-body dark:text-text-body">
                    {testimonial.location}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;
