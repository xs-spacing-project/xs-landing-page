import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { faqData } from "../constants";

const AccordionItem = ({
  question,
  answer,
}: {
  question: string;
  answer: string;
}) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.div
      layout
      className="border-b border-gray-200/50 dark:border-icon-bg/50"
    >
      <motion.button
        layout
        onClick={() => setIsOpen(!isOpen)}
        className="w-full text-left flex justify-between items-center py-6"
      >
        <span className="font-semibold text-lg text-light-text-heading dark:text-text-heading">
          {question}
        </span>
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.3 }}
          className="text-light-text-body dark:text-text-body"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </motion.div>
      </motion.button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <p className="pb-6 pr-8 text-light-text-body dark:text-text-body">
              {answer}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

const FAQ = (): React.ReactNode => {
  return (
    <section
      id="faq"
      className="py-20 sm:py-32 bg-light-card-bg/60 dark:bg-card-bg/60 backdrop-blur-sm"
    >
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-extrabold text-light-text-heading dark:text-text-heading tracking-tighter">
            Frequently Asked Questions
          </h2>
          <p className="mt-4 text-lg text-light-text-body dark:text-text-body">
            Have questions? We have answers. If you can't find what you're
            looking for, feel free to contact us.
          </p>
        </motion.div>

        <div className="max-w-3xl mx-auto">
          {faqData.map((item, index) => (
            <AccordionItem
              key={index}
              question={item.question}
              answer={item.answer}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
