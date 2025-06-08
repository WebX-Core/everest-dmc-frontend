import React, { useEffect } from "react";
import Navbar from "./Components/Navbar";
import Banner from "./Components/Banner";
import About from "./Components/About";
import WeOffer from "./Components/Weoffer";
// import Services from "./Components/our-services/Service";
import TeamProcess from "./Components/Teamprocess";
import TestimonialSlider from "./Components/Testomonial";
import ContactForm from "./Components/Contact";
import Footer from "./Components/footer";
import { AnimatePresence, motion } from "framer-motion";
import TravelPackages from "./Components/our-services/Service";
import Preloader from "./Components/preloader/Preloader";

function App() {
  // const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate loading delay (e.g., fetch, image load, etc.)
    // const timer = setTimeout(() => setLoading(false), 2000); // 2 seconds
    // return () => clearTimeout(timer);
  }, []);
  return (
    <AnimatePresence mode="wait">
      {/* loading ? (<Preloader />) */}
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

        <TravelPackages />
        <TeamProcess />
        <TestimonialSlider />
        <ContactForm />
        <Footer />
      </motion.div>
    </AnimatePresence>
  );
}

export default App;
