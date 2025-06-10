import React, { useEffect, useState } from "react";
import Navbar from "./Components/Navbar";
import Banner from "./Components/Banner";
import About from "./Components/About";
import WeOffer from "./Components/Weoffer";
import TeamProcess from "./Components/Teamprocess";
// import TestimonialSlider from "./Components/Testomonial";
import ContactForm from "./Components/Contact";
import Footer from "./Components/footer";
import TravelPackages from "./Components/our-services/Service";
import Loader from "./Components/preloader/Preloader";
import { AnimatePresence, motion } from "framer-motion";
import ImageGridDivider from "./Components/divider/Divider";
import WhatsAppChat from "./Components/WhatsAppChat/WhatsAppChat";

function App() {
  const [loading, setLoading] = useState(
    sessionStorage.getItem("hasLoaded") ? false : true
  );

  useEffect(() => {
    if (!loading) return;

    const timer = setTimeout(() => {
      setLoading(false);
      sessionStorage.setItem("hasLoaded", "true");
    }, 2000);

    return () => clearTimeout(timer);
  }, [loading]);

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
          <WhatsAppChat/>
          <Banner />
          <About />
          <WeOffer />
          <TravelPackages />
          <TeamProcess />
          <ImageGridDivider image="https://cdn.pixabay.com/photo/2018/04/22/18/38/mountain-3341919_1280.jpg" />
          {/* <TestimonialSlider /> */}
          <ContactForm />
          <Footer />
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export default App;
