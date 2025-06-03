import React, { useState } from "react";
import { Phone, Mail, HelpCircle, CalendarDays, CheckCircle } from "lucide-react";

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
    <section id="contact" className="bg-[#F3F8FF] px-4 py-16 md:px-16 mt-4">
      <div className="max-w-6xl mx-auto text-center">
        <p className="text-xs uppercase text-gray-400 mb-1">Get to Know Us</p>
        <h2 className="text-3xl font-bold mb-2">Contact Us</h2>
        <p className="text-sm text-gray-600 mb-8">Let's Plan Something Extraordinary Together</p>

        <div className="flex flex-col md:flex-row justify-center gap-6 mb-8 text-sm">
          <div className="flex items-center gap-2"><Phone size={18} /> +977-984305397 / +977-9801935775</div>
          <div className="flex items-center gap-2"><Mail size={18} /> info@everestdmc.com</div>
          <div className="flex items-center gap-2"><HelpCircle size={18} /> inquiry@everestdmc.com</div>
        </div>

        <div className="flex flex-col md:flex-row gap-8">
          {/* Contact Form */}
          <form onSubmit={handleSubmit} className="w-full md:w-2/3 grid grid-cols-1 md:grid-cols-2 gap-4 text-left">
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
                className="w-full bg-gray-800 text-white py-2 px-6 rounded hover:bg-gray-600 transition-colors"
              >
                SUBMIT
              </button>
            </div>
          </form>

          {/* Map Embed */}
          <div className="w-full md:w-1/3 h-96 md:h-auto">
            <iframe
              title="Dillibazar Kathmandu Map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3531.767126693231!2d85.32921677471844!3d27.706726724882303!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb198deab6f139%3A0xdf46dc3f3b8f5a2a!2sDillibazar%2C%20Kathmandu%2044600!5e0!3m2!1sen!2snp!4v1717437741711!5m2!1sen!2snp"
              width="100%"
              height="100%"
              className="rounded border"
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>

        {submitted && (
          <div className="mt-4 flex justify-center items-center gap-2 text-green-600 mt-[20px]">
            <CheckCircle size={20} /> <p>Form submitted successfully!</p>
          </div>
        )}
      </div>
    </section>
  );
}

export default ContactForm;