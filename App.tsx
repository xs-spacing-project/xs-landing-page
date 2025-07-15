import React, { useEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import PrivacyPolicy from "./components/pages/PrivacyPolicy";
import TermsOfService from "./components/pages/TermsOfService";
import ContactPage from "./components/pages/ContactPage";
import { ThemeProvider } from "./contexts/ThemeContext";
import { AnimatePresence } from "framer-motion";
import HomePage from "./components/pages/HomePage";

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

function App(): React.ReactNode {
  const location = useLocation();

  return (
    <ThemeProvider>
      {/* <div className="fixed inset-0 z-0 bg-light-bg dark:bg-main-bg">
        <div
          className="absolute inset-0 bg-glowing-light dark:bg-glowing-dark opacity-100 dark:opacity-40 animate-glow"
          style={{ backgroundSize: "200% 200%" }}
        />
      </div> */}
      <div className="relative z-10 bg-transparent min-h-screen overflow-x-hidden flex flex-col">
        <Header />
        <main className="flex-grow">
          <ScrollToTop />
          <AnimatePresence mode="wait">
            <Routes location={location} key={location.pathname}>
              <Route index element={<HomePage />} />
              <Route path="/privacy-policy" element={<PrivacyPolicy />} />
              <Route path="/terms-of-service" element={<TermsOfService />} />
              <Route path="/contact-us" element={<ContactPage />} />
            </Routes>
          </AnimatePresence>
        </main>
        <Footer />
      </div>
    </ThemeProvider>
  );
}

export default App;
