import React from "react";
import { Logo } from "./icons/Logo";
import { socialLinks, footerLinks } from "../constants";

const Footer = (): React.ReactNode => {
  return (
    <footer className="bg-transparent border-t border-gray-200/20 dark:border-card-bg/40">
      <div className="container mx-auto px-6 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center space-y-8 md:space-y-0">
          <div className="flex-1 flex justify-center md:justify-start">
            <div className="flex items-center">
              <a href="/#" aria-label="Xs Home">
                <Logo className="h-8 w-auto text-light-text-heading dark:text-all-white" />
              </a>
            </div>
          </div>

          <div className="flex-1 flex justify-center order-3 md:order-2 mt-6 md:mt-0">
            <p className="text-sm text-center text-light-text-body dark:text-text-body">
              &copy; {new Date().getFullYear()} Xs Inc. All rights reserved.
            </p>
          </div>

          <div className="flex-1 flex justify-center md:justify-end items-center space-x-4 order-2 md:order-3">
            {socialLinks.map((social, index) => (
              <a
                key={index}
                href={social.href}
                className="text-light-text-body dark:text-text-body hover:text-blue-accent dark:hover:text-all-white transition-colors"
              >
                {social.icon}
              </a>
            ))}
          </div>
        </div>
        <div className="flex justify-center items-center space-x-6 mt-8 pt-8 border-t border-gray-200/20 dark:border-card-bg/40">
          {footerLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-sm text-light-text-body dark:text-text-body hover:text-light-text-heading dark:hover:text-all-white transition-colors"
            >
              {link.name}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
