import React from "react";
import Navbar from "./Components/Navbar";
import Banner from "./Components/Banner";
import About from "./Components/About";
import WeOffer from "./Components/Weoffer";
import TeamProcess from "./Components/Teamprocess";
import TestimonialSlider from "./Components/Testomonial";
import ContactForm from "./Components/Contact";
import Footer from "./Components/footer";
import { AnimatePresence, motion } from "framer-motion";

function App() {
  return (
    <AnimatePresence mode="wait">
      <motion.div
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
        <TeamProcess />
        <TestimonialSlider />
        <ContactForm />
        <Footer />
      </motion.div>
    </AnimatePresence>
  );
}

export default App;