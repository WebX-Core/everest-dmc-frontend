
import ContactForm from "../Components/home/contact";
import { motion } from "framer-motion";


const ContactUs = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[50vh] overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1920&q=80"
          alt="Contact Us"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-blue-900/90 via-blue-700/50 to-blue-500/30" />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-4xl sm:text-5xl md:text-6xl font-medium text-white mb-4">
                <span className="block text-blue-200">Send Us Your Enquiry</span>
                {/* <span className="text-blue-200">We're Here to Help</span> */}
              </h2>
              <p className="text-lg sm:text-xl text-white/90 max-w-3xl mx-auto">
                Have questions about your next adventure? We're here to help
                plan your perfect journey to the Himalayas.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <ContactForm />
    </div>
  );
};

export default ContactUs;
