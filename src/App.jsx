import React, { useEffect, useState } from "react";
import Navbar from "./Components/Navbar";
import Banner from "./Components/Banner";
import About from "./Components/About";
import WeOffer from "./Components/Weoffer";
import TeamProcess from "./Components/Teamprocess";
import TestimonialSlider from "./Components/Testomonial";
import ContactForm from "./Components/Contact";
import Footer from "./Components/footer";
import TravelPackages from "./Components/our-services/Service";
import Loader from "./Components/preloader/Preloader"; // Import your loader
import { AnimatePresence, motion } from "framer-motion";

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate loading duration (e.g., API fetch, image preload, etc.)
    const timer = setTimeout(() => setLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence mode="wait">
      {loading ? (
        <motion.div
          key="loader"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.7 }}
          className="min-h-screen flex justify-center items-center bg-[#1C4D9B]"
        >
          <Loader />
        </motion.div>
      ) : (
        <motion.div
          key="main-content"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.7 }}
          className="min-h-screen font-sans"
        >
          <Navbar />
          <Banner />
          <About />
          <WeOffer />
          <TravelPackages />
          <TeamProcess />
          <TestimonialSlider />
          <ContactForm />
          <Footer />
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export default App;
