import React, { useState, useRef } from "react";
import { Phone, Mail, MapPin, CheckCircle, Send, Sparkles, Star } from "lucide-react";

const initialFormData = {
  fullName: "",
  company: "",
  email: "",
  phone: "",
  message: "",
  agree: false,
};

// Enhanced animation variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { 
    opacity: 0, 
    y: 50,
    scale: 0.9,
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 15,
      duration: 0.6,
    },
  },
};

const floatingVariants = {
  animate: {
    y: [0, -10, 0],
    rotate: [0, 5, -5, 0],
    transition: {
      duration: 4,
      repeat: Infinity,
      ease: "easeInOut",
    },
  },
};

const pulseVariants = {
  animate: {
    scale: [1, 1.05, 1],
    transition: {
      duration: 2,
      repeat: Infinity,
      ease: "easeInOut",
    },
  },
};

function ContactForm() {
  const [formData, setFormData] = useState(initialFormData);
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState({});
  const [showPopup, setShowPopup] = useState(false);
  const [focusedField, setFocusedField] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const containerRef = useRef(null);

  const validate = () => {
    const newErrors = {};
    if (!formData.fullName) newErrors.fullName = "Full name is required.";
    if (!formData.company) newErrors.company = "Last name is required.";
    if (!formData.email) newErrors.email = "Email address is required.";
    if (!formData.phone) newErrors.phone = "Phone number is required.";
    if (!formData.message) newErrors.message = "Message is required.";
    if (!formData.agree) newErrors.agree = "You must agree to the terms.";
    return newErrors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formErrors = validate();
    setErrors(formErrors);
    
    if (Object.keys(formErrors).length === 0) {
      setIsSubmitting(true);
      
      // Simulate submission delay
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      setSubmitted(true);
      setFormData(initialFormData);
      setShowPopup(true);
      setIsSubmitting(false);
      
      setTimeout(() => {
        setSubmitted(false);
        setShowPopup(false);
      }, 4000);
    }
  };

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
    
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: "",
      }));
    }
  };

  return (
    <section
      id="contact"
      className="min-h-screen relative overflow-hidden"
      ref={containerRef}
    >
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-violet-50 via-blue-50 to-cyan-50">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(120,119,198,0.1),transparent_50%)]"></div>
        <div className="absolute top-20 left-20 w-32 h-32 bg-gradient-to-br from-purple-400 to-pink-400 rounded-full opacity-20 animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-48 h-48 bg-gradient-to-br from-blue-400 to-cyan-400 rounded-full opacity-20 animate-pulse" style={{animationDelay: '1s'}}></div>
        <div className="absolute top-1/2 left-1/4 w-24 h-24 bg-gradient-to-br from-yellow-400 to-orange-400 rounded-full opacity-20 animate-pulse" style={{animationDelay: '2s'}}></div>
      </div>

      {/* Floating Elements */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(6)].map((_, i) => (
          <div
            key={i}
            className={`absolute ${
              i % 2 === 0 ? 'animate-bounce' : 'animate-pulse'
            }`}
            style={{
              left: `${10 + (i * 15)}%`,
              top: `${20 + (i * 10)}%`,
              animationDelay: `${i * 0.5}s`,
              animationDuration: `${3 + (i * 0.5)}s`,
            }}
          >
            <Star className="w-4 h-4 text-purple-300 opacity-60" />
          </div>
        ))}
      </div>

      {/* Success Popup with Enhanced Animation */}
      {showPopup && (
        <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50 backdrop-blur-sm">
          <div className="bg-white rounded-2xl shadow-2xl p-8 flex flex-col items-center transform animate-bounce border border-green-200">
            <div className="relative">
              <CheckCircle size={60} className="text-green-500 mb-4" />
              <div className="absolute -top-2 -right-2 animate-ping">
                <Sparkles size={20} className="text-yellow-400" />
              </div>
            </div>
            <h3 className="text-2xl font-bold mb-2 bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">
              Success! 🎉
            </h3>
            <p className="text-gray-600 text-center mb-4">
              Your message has been sent successfully!<br />
              We'll get back to you soon.
            </p>
            <button
              className="px-6 py-3 bg-gradient-to-r from-green-500 to-emerald-500 text-white rounded-full hover:from-green-600 hover:to-emerald-600 transition-all duration-300 transform hover:scale-105 shadow-lg"
              onClick={() => setShowPopup(false)}
            >
              Awesome!
            </button>
          </div>
        </div>
      )}

      {/* Header with Enhanced Styling */}
      <div className="relative z-10">
        <div className="bg-gradient-to-r from-slate-900 via-purple-900 to-slate-900 text-white py-16 px-6 text-center relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent animate-pulse"></div>
          <div className="relative z-10">
            <h2 className="text-5xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-white via-purple-200 to-white bg-clip-text text-transparent animate-pulse">
              Contact Us
            </h2>
            <p className="text-xl max-w-2xl mx-auto text-purple-100 leading-relaxed">
              We want to help you get the finance you need. We've got your back!
              <br />
              <span className="text-yellow-300 font-semibold">Get in touch and let's chat about how we can help.</span>
            </p>
            <div className="mt-8 flex justify-center">
              <Sparkles className="w-8 h-8 text-yellow-300 animate-spin" style={{animationDuration: '3s'}} />
            </div>
          </div>
        </div>

        {/* Main Content with Enhanced Design */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 -mt-12">
          <div className="bg-white/80 backdrop-blur-lg shadow-2xl rounded-3xl overflow-hidden border border-white/20">
            <div className="flex flex-col lg:flex-row">
              
              {/* Left Panel - Enhanced */}
              <div className="w-full lg:w-2/5 bg-gradient-to-br from-gray-50 to-blue-50 p-10 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-purple-200 to-pink-200 rounded-full opacity-30 -translate-y-16 translate-x-16"></div>
                <div className="relative z-10">
                  <h3 className="text-2xl font-bold text-gray-800 mb-8 flex items-center gap-3">
                    <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full animate-pulse"></div>
                    Contact Details
                  </h3>
                  
                  <div className="space-y-8">
                    {[
                      { icon: Phone, text: "1300 24 94 00", color: "from-red-400 to-pink-500", delay: "0s" },
                      { icon: Mail, text: "info@biziloans.com.au", color: "from-orange-400 to-yellow-500", delay: "0.2s" },
                      { icon: MapPin, text: "New Baneshwor", color: "from-green-400 to-emerald-500", delay: "0.4s" },
                    ].map((item, index) => (
                      <div
                        key={index}
                        className="flex items-center gap-4 p-4 rounded-2xl bg-white/60 backdrop-blur-sm shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 group cursor-pointer"
                        style={{animationDelay: item.delay}}
                      >
                        <div className={`p-3 rounded-xl bg-gradient-to-r ${item.color} text-white group-hover:scale-110 transition-transform duration-300`}>
                          <item.icon size={20} />
                        </div>
                        <span className="font-medium text-gray-700 group-hover:text-gray-900 transition-colors">
                          {item.text}
                        </span>
                      </div>
                    ))}
                  </div>

                  <div className="mt-12 p-6 bg-gradient-to-r from-purple-100 to-pink-100 rounded-2xl">
                    <h4 className="font-semibold text-gray-800 mb-2 flex items-center gap-2">
                      <Sparkles size={18} className="text-purple-500" />
                      Why Choose Us?
                    </h4>
                    <ul className="text-sm text-gray-600 space-y-1">
                      <li>• Fast & reliable service</li>
                      <li>• Expert financial advice</li>
                      <li>• Competitive rates</li>
                      <li>• Personalized solutions</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Right Form Panel - Enhanced */}
              <div className="w-full lg:w-3/5 p-10 relative">
                <div className="absolute top-0 left-0 w-24 h-24 bg-gradient-to-br from-blue-200 to-purple-200 rounded-full opacity-20 -translate-x-12 -translate-y-12"></div>
                
                <div className="relative z-10">
                  <h3 className="text-3xl font-bold mb-2 bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
                    Have a question?
                  </h3>
                  <p className="text-gray-600 mb-8">We'd love to hear from you. Send us a message and we'll respond as soon as possible.</p>
                  
                  <div className="space-y-6">
                    {[
                      {
                        name: "fullName",
                        placeholder: "Enter your first name *",
                        value: formData.fullName,
                        error: errors.fullName,
                        type: "text"
                      },
                      {
                        name: "company",
                        placeholder: "Enter your last name *",
                        value: formData.company,
                        error: errors.company,
                        type: "text"
                      },
                      {
                        name: "email",
                        placeholder: "Enter your email address *",
                        value: formData.email,
                        error: errors.email,
                        type: "email"
                      },
                      {
                        name: "phone",
                        placeholder: "Enter your contact number *",
                        value: formData.phone,
                        error: errors.phone,
                        type: "text"
                      },
                    ].map((field, i) => (
                      <div key={field.name} className="relative group">
                        <input
                          type={field.type}
                          name={field.name}
                          placeholder={field.placeholder}
                          value={field.value}
                          onChange={handleChange}
                          onFocus={() => setFocusedField(field.name)}
                          onBlur={() => setFocusedField(null)}
                          className={`w-full p-4 border-2 rounded-2xl bg-white/50 backdrop-blur-sm transition-all duration-300 focus:outline-none focus:ring-0 ${
                            field.error 
                              ? 'border-red-300 focus:border-red-500' 
                              : focusedField === field.name
                                ? 'border-purple-400 focus:border-purple-500 shadow-lg shadow-purple-200'
                                : 'border-gray-200 hover:border-gray-300'
                          }`}
                        />
                        {focusedField === field.name && (
                          <div className="absolute -top-1 -right-1">
                            <div className="w-3 h-3 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full animate-pulse"></div>
                          </div>
                        )}
                        {field.error && (
                          <p className="text-red-500 text-sm mt-2 animate-pulse">{field.error}</p>
                        )}
                      </div>
                    ))}

                    <div className="relative group">
                      <textarea
                        name="message"
                        placeholder="How can we help? Tell us about your needs..."
                        rows={4}
                        value={formData.message}
                        onChange={handleChange}
                        onFocus={() => setFocusedField('message')}
                        onBlur={() => setFocusedField(null)}
                        className={`w-full p-4 border-2 rounded-2xl bg-white/50 backdrop-blur-sm transition-all duration-300 focus:outline-none focus:ring-0 resize-none ${
                          errors.message 
                            ? 'border-red-300 focus:border-red-500' 
                            : focusedField === 'message'
                              ? 'border-purple-400 focus:border-purple-500 shadow-lg shadow-purple-200'
                              : 'border-gray-200 hover:border-gray-300'
                        }`}
                      />
                      {focusedField === 'message' && (
                        <div className="absolute -top-1 -right-1">
                          <div className="w-3 h-3 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full animate-pulse"></div>
                        </div>
                      )}
                      {errors.message && (
                        <p className="text-red-500 text-sm mt-2 animate-pulse">{errors.message}</p>
                      )}
                    </div>

                    <div className="flex items-center gap-3 p-4 rounded-2xl bg-gray-50/50 backdrop-blur-sm">
                      <input
                        type="checkbox"
                        name="agree"
                        checked={formData.agree}
                        onChange={handleChange}
                        className="w-5 h-5 text-purple-600 border-2 border-gray-300 rounded focus:ring-purple-500"
                      />
                      <label className="text-sm text-gray-700 cursor-pointer select-none">
                        I agree to the <span className="text-purple-600 font-medium hover:underline">terms and conditions</span>
                      </label>
                      {errors.agree && (
                        <p className="text-red-500 text-xs animate-pulse">{errors.agree}</p>
                      )}
                    </div>

                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full bg-gradient-to-r from-purple-600 via-blue-600 to-purple-600 text-white py-4 px-8 rounded-2xl font-semibold text-lg hover:from-purple-700 hover:via-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-purple-300 disabled:opacity-70 disabled:cursor-not-allowed disabled:transform-none relative overflow-hidden group"
                    >
                      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"></div>
                      <div className="relative flex items-center justify-center gap-3">
                        {isSubmitting ? (
                          <>
                            <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                            Sending...
                          </>
                        ) : (
                          <>
                            <Send size={20} className="group-hover:translate-x-1 transition-transform duration-300" />
                            SUBMIT MESSAGE
                          </>
                        )}
                      </div>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ContactForm;