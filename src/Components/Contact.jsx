import React, { useState } from "react";
import { Phone, Mail, HelpCircle, CalendarDays, CheckCircle } from "lucide-react";
import { motion as Motion } from "framer-motion";

const initialFormData = {
  fullName: "",
  company: "",
  email: "",
  phone: "",
  country: "",
  date: "",
  people: "",
  service: "",
  message: "",
  agree: false,
};

function ContactForm() {
  const [formData, setFormData] = useState(initialFormData);
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState({});

  const validate = () => {
    const newErrors = {};
    if (!formData.fullName) newErrors.fullName = "Full name is required.";
    if (!formData.company) newErrors.company = "Company name is required.";
    if (!formData.email) newErrors.email = "Email address is required.";
    if (!formData.phone) newErrors.phone = "Phone number is required.";
    if (!formData.country) newErrors.country = "Country is required.";
    if (!formData.date) newErrors.date = "Preferred date is required.";
    if (!formData.people) newErrors.people = "Number of people is required.";
    if (!formData.service) newErrors.service = "Please select a service.";
    if (!formData.agree) newErrors.agree = "You must agree to the terms.";
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const formErrors = validate();
    setErrors(formErrors);
    if (Object.keys(formErrors).length === 0) {
      setSubmitted(true);
      setFormData(initialFormData); // Reset form data
      setTimeout(() => setSubmitted(false), 3000);
    }
  };

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  return (
    <section id="contact" className="bg-gradient-to-br from-blue-50 via-white to-blue-100 px-4 py-20 md:px-0 min-h-[80vh] flex items-center justify-center">
      <Motion.div
        className="w-full max-w-5xl bg-white/80 rounded-3xl shadow-2xl p-8 md:p-14 flex flex-col md:flex-row gap-10 items-center"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
      >
        {/* Left: Contact Info & Form */}
        <div className="flex-1 flex flex-col gap-8">
          <div className="mb-2">
            <p className="text-xs uppercase text-blue-400 font-semibold tracking-wider mb-1">Get to Know Us</p>
            <h2 className="text-3xl md:text-4xl font-extrabold text-blue-900 mb-2">Contact Us</h2>
            <p className="text-base text-gray-600 mb-4">Let's Plan Something Extraordinary Together</p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 text-sm text-blue-700 font-medium mb-4">
            <div className="flex items-center gap-2 bg-blue-50 px-3 py-2 rounded-lg shadow"><Phone size={18} /> +977-984305397 / +977-9801935775</div>
            <div className="flex items-center gap-2 bg-blue-50 px-3 py-2 rounded-lg shadow"><Mail size={18} /> info@everestdmc.com</div>
            <div className="flex items-center gap-2 bg-blue-50 px-3 py-2 rounded-lg shadow"><HelpCircle size={18} /> inquiry@everestdmc.com</div>
          </div>
          <Motion.form
            onSubmit={handleSubmit}
            className="grid grid-cols-1 md:grid-cols-2 gap-4 text-left"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <div>
              <input
                type="text"
                name="fullName"
                placeholder="Full Name *"
                value={formData.fullName}
                onChange={handleChange}
                className="w-full p-2 border rounded"
              />
              {errors.fullName && <p className="text-red-500 text-xs mt-1">{errors.fullName}</p>}
            </div>

            <div>
              <input
                type="text"
                name="company"
                placeholder="Company Name *"
                value={formData.company}
                onChange={handleChange}
                className="w-full p-2 border rounded"
              />
              {errors.company && <p className="text-red-500 text-xs mt-1">{errors.company}</p>}
            </div>

            <div>
              <input
                type="email"
                name="email"
                placeholder="Email Address *"
                value={formData.email}
                onChange={handleChange}
                className="w-full p-2 border rounded"
              />
              {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
            </div>

            <div className="flex gap-2">
              <input
                type="text"
                name="phone"
                placeholder="Phone Number *"
                value={formData.phone}
                onChange={handleChange}
                className="w-full p-2 border rounded"
              />
              <input
                type="text"
                name="country"
                placeholder="Country *"
                value={formData.country}
                onChange={handleChange}
                className="w-full p-2 border rounded"
              />
            </div>

            <div>
              <div className="relative">
                <input
                  type="date"
                  name="date"
                  value={formData.date}
                  onChange={handleChange}
                  className="w-full p-2 border rounded pr-8"
                />
                <CalendarDays className="absolute right-2 top-2.5 text-gray-400" size={16} />
              </div>
              {errors.date && <p className="text-red-500 text-xs mt-1">{errors.date}</p>}
            </div>

            <div>
              <input
                type="number"
                name="people"
                placeholder="Number of People *"
                value={formData.people}
                onChange={handleChange}
                className="w-full p-2 border rounded"
              />
              {errors.people && <p className="text-red-500 text-xs mt-1">{errors.people}</p>}
            </div>

            <div className="md:col-span-2">
              <select
                name="service"
                value={formData.service}
                onChange={handleChange}
                className="w-full p-2 border rounded"
              >
                <option value="">Select Service *</option>
                <option value="Tour and Trekking">Tour and Trekking</option>
                <option value="Travel Consulting">Travel Consulting</option>
                <option value="Custom Packages">Custom Packages</option>
              </select>
              {errors.service && <p className="text-red-500 text-xs mt-1">{errors.service}</p>}
            </div>

            <div className="md:col-span-2">
              <textarea
                name="message"
                placeholder="Your Requirements"
                rows={4}
                value={formData.message}
                onChange={handleChange}
                className="w-full p-2 border rounded"
              />
            </div>

            <div className="md:col-span-2 flex items-center">
              <input
                type="checkbox"
                name="agree"
                checked={formData.agree}
                onChange={handleChange}
                className="mr-2"
              />
              <label htmlFor="agree" className="text-sm">
                I agree to the terms and conditions
              </label>
              {errors.agree && <p className="text-red-500 text-xs ml-4">{errors.agree}</p>}
            </div>

            <div className="md:col-span-2">
              <button
                type="submit"
                className="w-full bg-gradient-to-r from-blue-500 to-blue-700 text-white py-3 px-6 rounded-xl font-bold shadow-lg hover:from-blue-600 hover:to-blue-800 transition-all duration-200"
              >
                SUBMIT
              </button>
            </div>
          </Motion.form>
          {submitted && (
            <Motion.div
              className="mt-4 flex justify-center items-center gap-2 text-green-600"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
            >
              <CheckCircle size={20} /> <p>Form submitted successfully!</p>
            </Motion.div>
          )}
        </div>
        {/* Right: Map */}
        <Motion.div
          className="flex-1 w-full h-80 md:h-full rounded-2xl overflow-hidden shadow-lg border-2 border-blue-100"
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.3 }}
        >
          <iframe
            title="Dillibazar Kathmandu Map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3531.767126693231!2d85.32921677471844!3d27.706726724882303!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb198deab6f139%3A0xdf46dc3f3b8f5a2a!2sDillibazar%2C%20Kathmandu%2044600!5e0!3m2!1sen!2snp!4v1717437741711!5m2!1sen!2snp"
            width="100%"
            height="100%"
            className="w-full h-full border-0"
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </Motion.div>
      </Motion.div>
    </section>
  );
}

export default ContactForm;