import React from "react";
import { motion } from "framer-motion";
import { ArrowLeftIcon } from "../icons/ArrowLeftIcon";

const PrivacyPolicy = (): React.ReactNode => {
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
            Privacy Policy
          </h1>
          <div className="prose prose-lg dark:prose-invert max-w-none text-light-text-body dark:text-text-body space-y-4">
            <p>
              <strong>Last Updated: {new Date().toLocaleDateString()}</strong>
            </p>

            <p>
              Welcome to Xs ("we," "our," or "us"). We are committed to
              protecting your privacy. This Privacy Policy explains how we
              collect, use, disclose, and safeguard your information when you
              use our mobile application and services.
            </p>

            <h2 className="text-2xl font-bold text-light-text-heading dark:text-text-heading">
              1. Information We Collect
            </h2>
            <p>
              We may collect information about you in a variety of ways. The
              information we may collect via the Application includes:
              <ul>
                <li>
                  <strong>Personal Data:</strong> Personally identifiable
                  information, such as your name, email address, and telephone
                  number, that you voluntarily give to us when you register with
                  the Application.
                </li>
                <li>
                  <strong>Location Data:</strong> We may request access or
                  permission to and track location-based information from your
                  mobile device to provide location-based services.
                </li>
                <li>
                  <strong>Usage Data:</strong> Information automatically
                  collected when you access the Application, such as your IP
                  address, browser type, and operating system.
                </li>
              </ul>
            </p>

            <h2 className="text-2xl font-bold text-light-text-heading dark:text-text-heading">
              2. Use of Your Information
            </h2>
            <p>
              Having accurate information about you permits us to provide you
              with a smooth, efficient, and customized experience. Specifically,
              we may use information collected about you via the Application to:
              <ul>
                <li>Create and manage your account.</li>
                <li>Process your transactions and bookings.</li>
                <li>Improve our Application and services.</li>
                <li>Send you push notifications.</li>
              </ul>
            </p>

            <h2 className="text-2xl font-bold text-light-text-heading dark:text-text-heading">
              3. Security of Your Information
            </h2>
            <p>
              We use administrative, technical, and physical security measures
              to help protect your personal information. While we have taken
              reasonable steps to secure the personal information you provide to
              us, please be aware that despite our efforts, no security measures
              are perfect or impenetrable.
            </p>
            <h2 className="text-2xl font-bold text-light-text-heading dark:text-text-heading">
              4. Contact Us
            </h2>
            <p>
              If you have questions or comments about this Privacy Policy,
              please contact us through the contact form on our website.
            </p>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default PrivacyPolicy;
