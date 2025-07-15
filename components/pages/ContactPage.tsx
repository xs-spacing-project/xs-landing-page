import React from "react";
import { motion } from "framer-motion";
import { ArrowLeftIcon } from "../icons/ArrowLeftIcon";

const ContactPage = (): React.ReactNode => {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Handle form submission logic here
    alert("Thank you for your message! We will get back to you soon.");
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-light-bg/60 dark:bg-main-bg/60 backdrop-blur-sm"
    >
      <div className="container mx-auto px-6 py-24 sm:py-32">
        <div className="max-w-2xl mx-auto">
          <a
            href="/#"
            className="inline-flex items-center gap-2 text-blue-accent hover:underline mb-8"
          >
            <ArrowLeftIcon />
            Back to Home
          </a>
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-extrabold text-light-text-heading dark:text-text-heading tracking-tighter">
              Contact Us
            </h1>
            <p className="mt-4 text-lg text-light-text-body dark:text-text-body">
              Have a question or feedback? We'd love to hear from you.
            </p>
          </div>

          <motion.form
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            onSubmit={handleSubmit}
            className="mt-12 space-y-6"
          >
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-medium text-light-text-heading dark:text-text-heading mb-2"
              >
                Full Name
              </label>
              <input
                type="text"
                name="name"
                id="name"
                required
                className="block w-full px-4 py-3 rounded-lg bg-light-card-bg/80 dark:bg-card-bg/80 border border-gray-200/80 dark:border-icon-bg/80 focus:ring-blue-accent focus:border-blue-accent transition"
                placeholder="Your Name"
              />
            </div>
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-light-text-heading dark:text-text-heading mb-2"
              >
                Email Address
              </label>
              <input
                type="email"
                name="email"
                id="email"
                required
                className="block w-full px-4 py-3 rounded-lg bg-light-card-bg/80 dark:bg-card-bg/80 border border-gray-200/80 dark:border-icon-bg/80 focus:ring-blue-accent focus:border-blue-accent transition"
                placeholder="you@example.com"
              />
            </div>
            <div>
              <label
                htmlFor="message"
                className="block text-sm font-medium text-light-text-heading dark:text-text-heading mb-2"
              >
                Message
              </label>
              <textarea
                name="message"
                id="message"
                required
                rows={5}
                className="block w-full px-4 py-3 rounded-lg bg-light-card-bg/80 dark:bg-card-bg/80 border border-gray-200/80 dark:border-icon-bg/80 focus:ring-blue-accent focus:border-blue-accent transition"
                placeholder="How can we help you?"
              ></textarea>
            </div>
            <div>
              <button
                type="submit"
                className="w-full bg-blue-accent text-all-white font-semibold px-8 py-4 rounded-lg hover:bg-opacity-80 transition-all duration-300 transform hover:scale-105"
              >
                Send Message
              </button>
            </div>
          </motion.form>
        </div>
      </div>
    </motion.div>
  );
};

export default ContactPage;
