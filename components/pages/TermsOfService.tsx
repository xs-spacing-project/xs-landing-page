import React from "react";
import { motion } from "framer-motion";
import { ArrowLeftIcon } from "../icons/ArrowLeftIcon";

const TermsOfService = (): React.ReactNode => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-light-bg/60 dark:bg-main-bg/60 backdrop-blur-sm"
    >
      <div className="container mx-auto px-6 py-24 sm:py-32">
        <div className="max-w-4xl mx-auto">
          <a
            href="/#"
            className="inline-flex items-center gap-2 text-blue-accent hover:underline mb-8"
          >
            <ArrowLeftIcon />
            Back to Home
          </a>
          <h1 className="text-4xl md:text-5xl font-extrabold text-light-text-heading dark:text-text-heading tracking-tighter mb-8">
            Terms of Service
          </h1>
          <div className="prose prose-lg dark:prose-invert max-w-none text-light-text-body dark:text-text-body space-y-4">
            <p>
              <strong>Last Updated: {new Date().toLocaleDateString()}</strong>
            </p>

            <p>
              Please read these Terms of Service ("Terms", "Terms of Service")
              carefully before using the Xs mobile application (the "Service")
              operated by Xs Inc. ("us", "we", or "our").
            </p>

            <h2 className="text-2xl font-bold text-light-text-heading dark:text-text-heading">
              1. Agreement to Terms
            </h2>
            <p>
              By accessing or using the Service, you agree to be bound by these
              Terms. If you disagree with any part of the terms, then you may
              not access the Service.
            </p>

            <h2 className="text-2xl font-bold text-light-text-heading dark:text-text-heading">
              2. Bookings
            </h2>
            <p>
              If you wish to book any product or service made available through
              the Service ("Booking"), you may be asked to supply certain
              information relevant to your Booking. All bookings are subject to
              availability and the specific terms of the parking provider.
            </p>

            <h2 className="text-2xl font-bold text-light-text-heading dark:text-text-heading">
              3. User Conduct
            </h2>
            <p>
              You agree not to use the Service in any way that is unlawful, or
              harms us, our service providers, our suppliers, or any other
              person.
            </p>

            <h2 className="text-2xl font-bold text-light-text-heading dark:text-text-heading">
              4. Termination
            </h2>
            <p>
              We may terminate or suspend your account immediately, without
              prior notice or liability, for any reason whatsoever, including
              without limitation if you breach the Terms.
            </p>

            <h2 className="text-2xl font-bold text-light-text-heading dark:text-text-heading">
              5. Changes to Terms
            </h2>
            <p>
              We reserve the right, at our sole discretion, to modify or replace
              these Terms at any time. We will provide notice of any changes by
              posting the new Terms of Service on this page.
            </p>

            <h2 className="text-2xl font-bold text-light-text-heading dark:text-text-heading">
              6. Contact Us
            </h2>
            <p>
              If you have any questions about these Terms, please contact us.
            </p>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default TermsOfService;
