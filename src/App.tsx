import { useEffect, useState } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
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
import ServicesPage from "./pages/services";
import ServiceDetails from "./pages/service-details";
import PackagesPage from "./pages/package.tsx";
import PackageDetails from "./pages/package-details";
import ContactUs from "./pages/contact-us";
import ScrollToTop from "./Components/ScrollToTop";
import B2BAgentPopup from "./Components/B2BAgentPopup";
import WhatsAppRedirect from "./pages/whatsapp-redirect";
import ChatPage from "./pages/chat";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: false,
      refetchOnWindowFocus: false,
      refetchOnReconnect: false,
      refetchOnMount: false,
      staleTime: Infinity,
    },
  },
});

function App() {
  const location = useLocation();
  const [loading, setLoading] = useState(
    sessionStorage.getItem("hasLoaded") ? false : true
  );
  const [videoLoaded, setVideoLoaded] = useState(false);
  const [minTimePassed, setMinTimePassed] = useState(false);
  const [showB2BPopup, setShowB2BPopup] = useState(false);

  // Preload video while showing loader (with timeout fallback)
  useEffect(() => {
    if (!loading) return;

    const video = document.createElement("video");
    video.src = "/bg-video.mp4";
    video.preload = "auto";
    video.oncanplaythrough = () => setVideoLoaded(true);
    video.onerror = () => setVideoLoaded(true); // Continue even if video fails
    video.load();

    // Fallback: max 5 seconds wait for video, then proceed anyway
    const timeout = setTimeout(() => setVideoLoaded(true), 5000);

    return () => clearTimeout(timeout);
  }, [loading]);

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

  useEffect(() => {
    if (loading || location.pathname !== "/") return;

    const hasSeenPopup = sessionStorage.getItem("agentPopupSeen");
    setShowB2BPopup(!hasSeenPopup);
  }, [loading, location.pathname]);

  useEffect(() => {
    if (!showB2BPopup) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = previousOverflow;
    };
  }, [showB2BPopup]);

  const handleCloseB2BPopup = () => {
    sessionStorage.setItem("agentPopupSeen", "true");
    setShowB2BPopup(false);
  };

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
            <Route path="/services" element={<ServicesPage />} />
            <Route path="/services/:slug" element={<ServiceDetails />} />
            <Route path="/blogs" element={<Blog />} />
            <Route path="/blogs/:slug" element={<BlogDetail />} />
            <Route path="/packages" element={<PackagesPage />} />
            <Route path="/packages/:slug" element={<PackageDetails />} />
            <Route path="/contact-us" element={<ContactUs />} />
            <Route path="/chat" element={<ChatPage />} />
            <Route path="/whatsapp" element={<WhatsAppRedirect />} />
            <Route path="/whatsapp/" element={<WhatsAppRedirect />} />
          </Routes>
          <B2BAgentPopup isOpen={showB2BPopup} onClose={handleCloseB2BPopup} />
          <Footer />
        </motion.div>
      )}
    </AnimatePresence>
    </QueryClientProvider>
  );
}

export default App;
