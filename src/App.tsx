import { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Navbar from "./Components/layout/navbar";
import Footer from "./Components/layout/footer";
import Loader from "./Components/preloader/Preloader";
import { AnimatePresence, motion } from "framer-motion";
import WhatsAppChat from "./Components/WhatsAppChat/WhatsAppChat";
import Home from "./pages/Home";
import About from "./pages/aboutUs";
import Blog from "./pages/blog";
import BlogDetail from "./pages/blog-detail";
import PackagesPage from "./pages/package";
import PackageDetails from "./pages/package-details";
import ContactUs from "./pages/contact-us";
import ScrollToTop from "./Components/ScrollToTop";

const queryClient = new QueryClient();

function App() {
  const [loading, setLoading] = useState(
    sessionStorage.getItem("hasLoaded") ? false : true
  );
  const [videoLoaded, setVideoLoaded] = useState(false);
  const [minTimePassed, setMinTimePassed] = useState(false);

  // Preload video while showing loader
  useEffect(() => {
    const video = document.createElement("video");
    video.src = "/bg-video.mp4";
    video.preload = "auto";
    video.oncanplaythrough = () => setVideoLoaded(true);
    video.load();
  }, []);

  // Minimum loader time
  useEffect(() => {
    if (!loading) return;
    const timer = setTimeout(() => setMinTimePassed(true), 2000);
    return () => clearTimeout(timer);
  }, [loading]);

  // Hide loader when both conditions are met
  useEffect(() => {
    if (minTimePassed && videoLoaded && loading) {
      setLoading(false);
      sessionStorage.setItem("hasLoaded", "true");
    }
  }, [minTimePassed, videoLoaded, loading]);

  return (
    <QueryClientProvider client={queryClient}>
      <AnimatePresence mode="wait">
      {loading ? (
        <motion.div
          key="loader"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.7 }}
          className="min-h-screen flex justify-center items-center bg-white"
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
          <WhatsAppChat />
          <ScrollToTop />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<PackagesPage />} />
            <Route path="/blogs" element={<Blog />} />
            <Route path="/blogs/:slug" element={<BlogDetail />} />
            <Route path="/packages" element={<PackagesPage />} />
            <Route path="/packages/:slug" element={<PackageDetails />} />
            <Route path="/contact-us" element={<ContactUs />} />
          </Routes>
          <Footer />
        </motion.div>
      )}
    </AnimatePresence>
    </QueryClientProvider>
  );
}

export default App;
