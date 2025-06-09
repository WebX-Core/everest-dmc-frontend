import React, { useState, useRef } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { Mail, Phone, MapPin, Send } from "lucide-react";

const AwwwardsStyleContact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [activeField, setActiveField] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, amount: 0.1 });

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      setFormData({ name: "", email: "", message: "" });

      setTimeout(() => setIsSuccess(false), 4000);
    }, 1500);
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { type: "spring", damping: 15 },
    },
  };

  return (
    <section
  id="contact"
  ref={ref}
  className="w-full max-w-7xl mx-auto relative min-h-screen py-16 px-2 sm:px-6 lg:px-8 overflow-hidden text-black"
>
  {/* Main content */}
  <motion.div
    className="relative z-10"
    initial="hidden"
    animate={isInView ? "visible" : "hidden"}
    variants={containerVariants}
  >
    {/* Section header */}
    <motion.div className="mb-16 text-center" variants={itemVariants}>
      <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4">
        <span className="block">Send Us Your</span>
        <span className="text-[#1C4D9B]">Enquiry Below</span>
      </h2>
      <p className="text-base sm:text-lg text-gray-400">
        Experience the unforgettable moment with Everest DMC in Nepal.
      </p>
    </motion.div>

    {/* Contact Form */}
    <div className="w-full flex justify-center">
      <motion.div className="w-full md:w-10/12 lg:w-8/12" variants={itemVariants}>
        <AnimatePresence>
          {isSuccess ? (
            <motion.div
              key="success"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              className="p-6 sm:p-10 rounded-xl border border-zinc-200 bg-white"
            >
              <div className="text-center py-10">
                <div className="w-16 h-16 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-6">
                  <svg className="w-8 h-8 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h3 className="text-2xl sm:text-3xl font-bold mb-4">Message Sent!</h3>
                <p className="text-gray-400 mb-6">We'll get back to you within 24 hours.</p>
                <button
                  onClick={() => setIsSuccess(false)}
                  className="px-6 py-2 bg-blue-50 text-black rounded-lg font-medium hover:bg-[#1C4D9B] hover:text-white transition"
                >
                  Send another
                </button>
              </div>
            </motion.div>
          ) : (
            <motion.form
              key="form"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              onSubmit={handleSubmit}
              className="p-6 sm:p-10 rounded-xl border border-zinc-200 bg-white space-y-8"
            >
              {/* Input Fields */}
              {["name", "email", "phone", "message"].map((field) => (
                <div key={field} className="relative bg-blue-50 rounded-2xl">
                  <label
                    htmlFor={field}
                    className={`absolute left-4 transition-all duration-300 ${
                      activeField === field || formData[field]
                        ? "top-1 text-xs text-[#1C4D9B]"
                        : "top-4 text-gray-500"
                    }`}
                  >
                    {field === "message"
                      ? "Your message"
                      : field === "phone"
                      ? "Phone number"
                      : field === "email"
                      ? "Email address"
                      : "Your name"}
                  </label>
                  {field === "message" ? (
                    <textarea
                      id="message"
                      name="message"
                      rows={4}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      onFocus={() => setActiveField("message")}
                      onBlur={() => setActiveField(null)}
                      className="w-full bg-transparent border-b border-white/20 pt-6 pb-2 px-4 focus:border-[#1C4D9B] focus:outline-none resize-none rounded-2xl"
                    />
                  ) : (
                    <input
                      id={field}
                      name={field}
                      type={field === "email" ? "email" : "text"}
                      value={formData[field]}
                      onChange={(e) => setFormData({ ...formData, [field]: e.target.value })}
                      onFocus={() => setActiveField(field)}
                      onBlur={() => setActiveField(null)}
                      className="w-full bg-transparent border-b border-white/20 pt-6 pb-2 px-4 focus:border-[#1C4D9B] focus:outline-none rounded-2xl"
                    />
                  )}
                </div>
              ))}

              {/* Submit Button */}
              <motion.button
                type="submit"
                disabled={isSubmitting}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full sm:w-fit py-4 px-8 bg-[#1C4D9B] text-white rounded-full font-medium flex items-center justify-center gap-2"
              >
                {isSubmitting ? (
                  <>
                    <svg
                      className="animate-spin -ml-1 mr-2 h-5 w-5 text-white"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                      <path
                        className="opacity-75"
                        fill="currentColor"
                        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
                      />
                    </svg>
                    Sending...
                  </>
                ) : (
                  <>
                    <Send className="w-5 h-5 text-white" />
                    Send Message
                  </>
                )}
              </motion.button>
            </motion.form>
          )}
        </AnimatePresence>
      </motion.div>
    </div>
  </motion.div>
</section>

  );
};

export default AwwwardsStyleContact;
