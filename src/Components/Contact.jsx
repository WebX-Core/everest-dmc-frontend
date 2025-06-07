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
      className="w-11/12  mx-auto relative min-h-screen py-20 px-4 overflow-hidden  text-black"
    >
      {/* Main content */}
      <motion.div
        className="container mx-auto relative z-10"
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        variants={containerVariants}
      >
        {/* Section header */}
        <motion.div
          className="mb-20 overflow-hidden text-center"
          variants={itemVariants}
        >
          <h2 className="w-full text-6xl md:text-6xl font-bold mb-6 ">
            <span className="block">Let's Collaborate</span>
            <span className="text-[#1C4D9B]">To Make Travel Fun</span>
          </h2>
          <p className="text-xl text-center text-gray-400">
            Experience the unforgatable moment with Everest DMC in Nepal.
          </p>
        </motion.div>

        <div className="grid lg:grid-row-2 gap-16 items-start">
          {/* Contact methods - Left side */}
          {/* Contact form - Right side */}
          <motion.div className="relative  " variants={itemVariants}>
            <AnimatePresence>
              {isSuccess ? (
                <motion.div
                  key="success"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0 }}
                  className="w-8/12 mx-auto p-10 rounded-xl border border-zinc-200"
                >
                  <div className="text-center py-10">
                    <div className="w-20 h-20 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-6">
                      <svg
                        className="w-10 h-10 text-green-400"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M5 13l4 4L19 7"
                        ></path>
                      </svg>
                    </div>
                    <h3 className="text-3xl font-bold mb-4">Message Sent!</h3>
                    <p className="text-gray-400 mb-8">
                      We'll get back to you within 24 hours.
                    </p>
                    <button
                      onClick={() => setIsSuccess(false)}
                      className="px-8 py-3 bg-blue-50 text-black rounded-full font-medium hover:bg-[#1C4D9B] hover:text-white transition"
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
                  className="w-8/12 mx-auto p-10 rounded-xl border border-zinc-200"
                >
                  <div className="space-y-8">
                    <div className="relative bg-blue-50 rounded-2xl">
                      <label
                        htmlFor="name"
                        className={`absolute left-4 transition-all duration-300 ${
                          activeField === "name" || formData.name
                            ? "top-0 text-xs text-[#1C4D9B]"
                            : "top-4 text-gray-500"
                        }`}
                      >
                        Your name
                      </label>
                      <input
                        id="name"
                        name="name"
                        type="text"
                        value={formData.name}
                        onChange={(e) =>
                          setFormData({ ...formData, name: e.target.value })
                        }
                        onFocus={() => setActiveField("name")}
                        onBlur={() => setActiveField(null)}
                        className="w-full bg-transparent border-b border-white/20 pt-6 pb-2 px-4 focus:border-[#1C4D9B] focus:outline-none rounded-2xl"rounded-2xl
                      />
                    </div>

                    <div className="relative bg-blue-50 rounded-2xl">
                      <label
                        htmlFor="email"
                        className={`absolute left-4 transition-all duration-300 ${
                          activeField === "email" || formData.email
                            ? "top-0 text-xs text-[#1C4D9B]"
                            : "top-4 text-gray-500"
                        }`}
                      >
                        Email address
                      </label>
                      <input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={(e) =>
                          setFormData({ ...formData, email: e.target.value })
                        }
                        onFocus={() => setActiveField("email")}
                        onBlur={() => setActiveField(null)}
                        className="w-full bg-transparent border-b border-white/20 pt-6 pb-2 px-4 focus:border-[#1C4D9B] focus:outline-none rounded-2xl"rounded-2xl
                      />
                    </div>
                    <div className="relative bg-blue-50 rounded-2xl">
                      <label
                        htmlFor="phone"
                        className={`absolute left-4 transition-all duration-300 ${
                          activeField === "phone" || formData.phone
                            ? "top-0 text-xs text-[#1C4D9B]"
                            : "top-4 text-gray-500"
                        }`}
                      >
                        Phone number
                      </label>
                      <input
                        id="phone"
                        name="phone"
                        type="phone"
                        value={formData.phone}
                        onChange={(e) =>
                          setFormData({ ...formData, phone: e.target.value })
                        }
                        onFocus={() => setActiveField("phone")}
                        onBlur={() => setActiveField(null)}
                        className="w-full bg-transparent border-b border-white/20 pt-6 pb-2 px-4 focus:border-[#1C4D9B] focus:outline-none rounded-2xl "
                      />
                    </div>

                    <div className="relative bg-blue-50 rounded-2xl">
                      <label
                        htmlFor="message"
                        className={`absolute left-4 transition-all duration-300 ${
                          activeField === "message" || formData.message
                            ? "top-0 text-xs text-[#1C4D9B]"
                            : "top-4 text-gray-500"
                        }`}
                      >
                        Your message
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        rows={4}
                        value={formData.message}
                        onChange={(e) =>
                          setFormData({ ...formData, message: e.target.value })
                        }
                        onFocus={() => setActiveField("message")}
                        onBlur={() => setActiveField(null)}
                        className="w-full bg-transparent border-b border-white/20 pt-6 pb-2 px-4 focus:border-[#1C4D9B] focus:outline-none rounded-2xl rounded-2xlresize-none"
                      />
                    </div>

                    <motion.button
                      type="submit"
                      disabled={isSubmitting}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className="w-fit py-4 px-8 bg-[#1C4D9B] text-white rounded-full font-medium flex items-center justify-center gap-2 relative overflow-hidden"
                    >
                      <span className="relative z-10 flex items-center gap-2">
                        {isSubmitting ? (
                          <>
                            <svg
                              className="animate-spin -ml-1 mr-2 h-5 w-5 text-white"
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              viewBox="0 0 24 24"
                            >
                              <circle
                                className="opacity-25"
                                cx="12"
                                cy="12"
                                r="10"
                                stroke="currentColor"
                                strokeWidth="4"
                              ></circle>
                              <path
                                className="opacity-75"
                                fill="currentColor"
                                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                              ></path>
                            </svg>
                            Sending...
                          </>
                        ) : (
                          <>
                            <Send className="w-5 h-5 text-white" />
                            Send Message
                          </>
                        )}
                      </span>
                      <motion.span
                        className="absolute inset-0 bg-gradient-to-r from-[#1C4D9B] to-blue-600 opacity-0 hover:opacity-100 transition-opacity"
                        initial={{ x: "-100%" }}
                        animate={{ x: "100%" }}
                        transition={{ duration: 1.5, repeat: Infinity }}
                      />
                    </motion.button>
                  </div>
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
