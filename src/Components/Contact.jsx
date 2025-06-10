import React, { useState, useRef, useEffect } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { Send, Phone, ChevronDown } from "lucide-react";

const countries = [
  { code: "AF", name: "Afghanistan", dialCode: "+93" },
  { code: "AL", name: "Albania", dialCode: "+355" },
  { code: "DZ", name: "Algeria", dialCode: "+213" },
  { code: "AS", name: "American Samoa", dialCode: "+1" },
  { code: "AD", name: "Andorra", dialCode: "+376" },
  { code: "AO", name: "Angola", dialCode: "+244" },
  { code: "AI", name: "Anguilla", dialCode: "+1" },
  { code: "AG", name: "Antigua and Barbuda", dialCode: "+1" },
  { code: "AR", name: "Argentina", dialCode: "+54" },
  { code: "AM", name: "Armenia", dialCode: "+374" },
  { code: "AW", name: "Aruba", dialCode: "+297" },
  { code: "AU", name: "Australia", dialCode: "+61" },
  { code: "AT", name: "Austria", dialCode: "+43" },
  { code: "AZ", name: "Azerbaijan", dialCode: "+994" },
  { code: "BS", name: "Bahamas", dialCode: "+1" },
  { code: "BH", name: "Bahrain", dialCode: "+973" },
  { code: "BD", name: "Bangladesh", dialCode: "+880" },
  { code: "BB", name: "Barbados", dialCode: "+1" },
  { code: "BY", name: "Belarus", dialCode: "+375" },
  { code: "BE", name: "Belgium", dialCode: "+32" },
  { code: "BZ", name: "Belize", dialCode: "+501" },
  { code: "BJ", name: "Benin", dialCode: "+229" },
  { code: "BM", name: "Bermuda", dialCode: "+1" },
  { code: "BT", name: "Bhutan", dialCode: "+975" },
  { code: "BO", name: "Bolivia", dialCode: "+591" },
  { code: "BA", name: "Bosnia and Herzegovina", dialCode: "+387" },
  { code: "BW", name: "Botswana", dialCode: "+267" },
  { code: "BR", name: "Brazil", dialCode: "+55" },
  { code: "IO", name: "British Indian Ocean Territory", dialCode: "+246" },
  { code: "VG", name: "British Virgin Islands", dialCode: "+1" },
  { code: "BN", name: "Brunei", dialCode: "+673" },
  { code: "BG", name: "Bulgaria", dialCode: "+359" },
  { code: "BF", name: "Burkina Faso", dialCode: "+226" },
  { code: "BI", name: "Burundi", dialCode: "+257" },
  { code: "KH", name: "Cambodia", dialCode: "+855" },
  { code: "CM", name: "Cameroon", dialCode: "+237" },
  { code: "CA", name: "Canada", dialCode: "+1" },
  { code: "CV", name: "Cape Verde", dialCode: "+238" },
  { code: "KY", name: "Cayman Islands", dialCode: "+1" },
  { code: "CF", name: "Central African Republic", dialCode: "+236" },
  { code: "TD", name: "Chad", dialCode: "+235" },
  { code: "CL", name: "Chile", dialCode: "+56" },
  { code: "CN", name: "China", dialCode: "+86" },
  { code: "CX", name: "Christmas Island", dialCode: "+61" },
  { code: "CC", name: "Cocos Islands", dialCode: "+61" },
  { code: "CO", name: "Colombia", dialCode: "+57" },
  { code: "KM", name: "Comoros", dialCode: "+269" },
  { code: "CK", name: "Cook Islands", dialCode: "+682" },
  { code: "CR", name: "Costa Rica", dialCode: "+506" },
  { code: "HR", name: "Croatia", dialCode: "+385" },
  { code: "CU", name: "Cuba", dialCode: "+53" },
  { code: "CW", name: "Curacao", dialCode: "+599" },
  { code: "CY", name: "Cyprus", dialCode: "+357" },
  { code: "CZ", name: "Czech Republic", dialCode: "+420" },
  { code: "CD", name: "Democratic Republic of the Congo", dialCode: "+243" },
  { code: "DK", name: "Denmark", dialCode: "+45" },
  { code: "DJ", name: "Djibouti", dialCode: "+253" },
  { code: "DM", name: "Dominica", dialCode: "+1" },
  { code: "DO", name: "Dominican Republic", dialCode: "+1" },
  { code: "TL", name: "East Timor", dialCode: "+670" },
  { code: "EC", name: "Ecuador", dialCode: "+593" },
  { code: "EG", name: "Egypt", dialCode: "+20" },
  { code: "SV", name: "El Salvador", dialCode: "+503" },
  { code: "GQ", name: "Equatorial Guinea", dialCode: "+240" },
  { code: "ER", name: "Eritrea", dialCode: "+291" },
  { code: "EE", name: "Estonia", dialCode: "+372" },
  { code: "ET", name: "Ethiopia", dialCode: "+251" },
  { code: "FK", name: "Falkland Islands", dialCode: "+500" },
  { code: "FO", name: "Faroe Islands", dialCode: "+298" },
  { code: "FJ", name: "Fiji", dialCode: "+679" },
  { code: "FI", name: "Finland", dialCode: "+358" },
  { code: "FR", name: "France", dialCode: "+33" },
  { code: "PF", name: "French Polynesia", dialCode: "+689" },
  { code: "GA", name: "Gabon", dialCode: "+241" },
  { code: "GM", name: "Gambia", dialCode: "+220" },
  { code: "GE", name: "Georgia", dialCode: "+995" },
  { code: "DE", name: "Germany", dialCode: "+49" },
  { code: "GH", name: "Ghana", dialCode: "+233" },
  { code: "GI", name: "Gibraltar", dialCode: "+350" },
  { code: "GR", name: "Greece", dialCode: "+30" },
  { code: "GL", name: "Greenland", dialCode: "+299" },
  { code: "GD", name: "Grenada", dialCode: "+1" },
  { code: "GU", name: "Guam", dialCode: "+1" },
  { code: "GT", name: "Guatemala", dialCode: "+502" },
  { code: "GG", name: "Guernsey", dialCode: "+44" },
  { code: "GN", name: "Guinea", dialCode: "+224" },
  { code: "GW", name: "Guinea-Bissau", dialCode: "+245" },
  { code: "GY", name: "Guyana", dialCode: "+592" },
  { code: "HT", name: "Haiti", dialCode: "+509" },
  { code: "HN", name: "Honduras", dialCode: "+504" },
  { code: "HK", name: "Hong Kong", dialCode: "+852" },
  { code: "HU", name: "Hungary", dialCode: "+36" },
  { code: "IS", name: "Iceland", dialCode: "+354" },
  { code: "IN", name: "India", dialCode: "+91" },
  { code: "ID", name: "Indonesia", dialCode: "+62" },
  { code: "IR", name: "Iran", dialCode: "+98" },
  { code: "IQ", name: "Iraq", dialCode: "+964" },
  { code: "IE", name: "Ireland", dialCode: "+353" },
  { code: "IM", name: "Isle of Man", dialCode: "+44" },
  { code: "IL", name: "Israel", dialCode: "+972" },
  { code: "IT", name: "Italy", dialCode: "+39" },
  { code: "CI", name: "Ivory Coast", dialCode: "+225" },
  { code: "JM", name: "Jamaica", dialCode: "+1" },
  { code: "JP", name: "Japan", dialCode: "+81" },
  { code: "JE", name: "Jersey", dialCode: "+44" },
  { code: "JO", name: "Jordan", dialCode: "+962" },
  { code: "KZ", name: "Kazakhstan", dialCode: "+7" },
  { code: "KE", name: "Kenya", dialCode: "+254" },
  { code: "KI", name: "Kiribati", dialCode: "+686" },
  { code: "XK", name: "Kosovo", dialCode: "+383" },
  { code: "KW", name: "Kuwait", dialCode: "+965" },
  { code: "KG", name: "Kyrgyzstan", dialCode: "+996" },
  { code: "LA", name: "Laos", dialCode: "+856" },
  { code: "LV", name: "Latvia", dialCode: "+371" },
  { code: "LB", name: "Lebanon", dialCode: "+961" },
  { code: "LS", name: "Lesotho", dialCode: "+266" },
  { code: "LR", name: "Liberia", dialCode: "+231" },
  { code: "LY", name: "Libya", dialCode: "+218" },
  { code: "LI", name: "Liechtenstein", dialCode: "+423" },
  { code: "LT", name: "Lithuania", dialCode: "+370" },
  { code: "LU", name: "Luxembourg", dialCode: "+352" },
  { code: "MO", name: "Macau", dialCode: "+853" },
  { code: "MK", name: "Macedonia", dialCode: "+389" },
  { code: "MG", name: "Madagascar", dialCode: "+261" },
  { code: "MW", name: "Malawi", dialCode: "+265" },
  { code: "MY", name: "Malaysia", dialCode: "+60" },
  { code: "MV", name: "Maldives", dialCode: "+960" },
  { code: "ML", name: "Mali", dialCode: "+223" },
  { code: "MT", name: "Malta", dialCode: "+356" },
  { code: "MH", name: "Marshall Islands", dialCode: "+692" },
  { code: "MR", name: "Mauritania", dialCode: "+222" },
  { code: "MU", name: "Mauritius", dialCode: "+230" },
  { code: "YT", name: "Mayotte", dialCode: "+262" },
  { code: "MX", name: "Mexico", dialCode: "+52" },
  { code: "FM", name: "Micronesia", dialCode: "+691" },
  { code: "MD", name: "Moldova", dialCode: "+373" },
  { code: "MC", name: "Monaco", dialCode: "+377" },
  { code: "MN", name: "Mongolia", dialCode: "+976" },
  { code: "ME", name: "Montenegro", dialCode: "+382" },
  { code: "MS", name: "Montserrat", dialCode: "+1" },
  { code: "MA", name: "Morocco", dialCode: "+212" },
  { code: "MZ", name: "Mozambique", dialCode: "+258" },
  { code: "MM", name: "Myanmar", dialCode: "+95" },
  { code: "NA", name: "Namibia", dialCode: "+264" },
  { code: "NR", name: "Nauru", dialCode: "+674" },
  { code: "NP", name: "Nepal", dialCode: "+977" },
  { code: "NL", name: "Netherlands", dialCode: "+31" },
  { code: "AN", name: "Netherlands Antilles", dialCode: "+599" },
  { code: "NC", name: "New Caledonia", dialCode: "+687" },
  { code: "NZ", name: "New Zealand", dialCode: "+64" },
  { code: "NI", name: "Nicaragua", dialCode: "+505" },
  { code: "NE", name: "Niger", dialCode: "+227" },
  { code: "NG", name: "Nigeria", dialCode: "+234" },
  { code: "NU", name: "Niue", dialCode: "+683" },
  { code: "KP", name: "North Korea", dialCode: "+850" },
  { code: "MP", name: "Northern Mariana Islands", dialCode: "+1" },
  { code: "NO", name: "Norway", dialCode: "+47" },
  { code: "OM", name: "Oman", dialCode: "+968" },
  { code: "PK", name: "Pakistan", dialCode: "+92" },
  { code: "PW", name: "Palau", dialCode: "+680" },
  { code: "PS", name: "Palestine", dialCode: "+970" },
  { code: "PA", name: "Panama", dialCode: "+507" },
  { code: "PG", name: "Papua New Guinea", dialCode: "+675" },
  { code: "PY", name: "Paraguay", dialCode: "+595" },
  { code: "PE", name: "Peru", dialCode: "+51" },
  { code: "PH", name: "Philippines", dialCode: "+63" },
  { code: "PN", name: "Pitcairn", dialCode: "+64" },
  { code: "PL", name: "Poland", dialCode: "+48" },
  { code: "PT", name: "Portugal", dialCode: "+351" },
  { code: "PR", name: "Puerto Rico", dialCode: "+1" },
  { code: "QA", name: "Qatar", dialCode: "+974" },
  { code: "CG", name: "Republic of the Congo", dialCode: "+242" },
  { code: "RE", name: "Reunion", dialCode: "+262" },
  { code: "RO", name: "Romania", dialCode: "+40" },
  { code: "RU", name: "Russia", dialCode: "+7" },
  { code: "RW", name: "Rwanda", dialCode: "+250" },
  { code: "BL", name: "Saint Barthelemy", dialCode: "+590" },
  { code: "SH", name: "Saint Helena", dialCode: "+290" },
  { code: "KN", name: "Saint Kitts and Nevis", dialCode: "+1" },
  { code: "LC", name: "Saint Lucia", dialCode: "+1" },
  { code: "MF", name: "Saint Martin", dialCode: "+590" },
  { code: "PM", name: "Saint Pierre and Miquelon", dialCode: "+508" },
  { code: "VC", name: "Saint Vincent and the Grenadines", dialCode: "+1" },
  { code: "WS", name: "Samoa", dialCode: "+685" },
  { code: "SM", name: "San Marino", dialCode: "+378" },
  { code: "ST", name: "Sao Tome and Principe", dialCode: "+239" },
  { code: "SA", name: "Saudi Arabia", dialCode: "+966" },
  { code: "SN", name: "Senegal", dialCode: "+221" },
  { code: "RS", name: "Serbia", dialCode: "+381" },
  { code: "SC", name: "Seychelles", dialCode: "+248" },
  { code: "SL", name: "Sierra Leone", dialCode: "+232" },
  { code: "SG", name: "Singapore", dialCode: "+65" },
  { code: "SX", name: "Sint Maarten", dialCode: "+1" },
  { code: "SK", name: "Slovakia", dialCode: "+421" },
  { code: "SI", name: "Slovenia", dialCode: "+386" },
  { code: "SB", name: "Solomon Islands", dialCode: "+677" },
  { code: "SO", name: "Somalia", dialCode: "+252" },
  { code: "ZA", name: "South Africa", dialCode: "+27" },
  { code: "KR", name: "South Korea", dialCode: "+82" },
  { code: "SS", name: "South Sudan", dialCode: "+211" },
  { code: "ES", name: "Spain", dialCode: "+34" },
  { code: "LK", name: "Sri Lanka", dialCode: "+94" },
  { code: "SD", name: "Sudan", dialCode: "+249" },
  { code: "SR", name: "Suriname", dialCode: "+597" },
  { code: "SJ", name: "Svalbard and Jan Mayen", dialCode: "+47" },
  { code: "SZ", name: "Swaziland", dialCode: "+268" },
  { code: "SE", name: "Sweden", dialCode: "+46" },
  { code: "CH", name: "Switzerland", dialCode: "+41" },
  { code: "SY", name: "Syria", dialCode: "+963" },
  { code: "TW", name: "Taiwan", dialCode: "+886" },
  { code: "TJ", name: "Tajikistan", dialCode: "+992" },
  { code: "TZ", name: "Tanzania", dialCode: "+255" },
  { code: "TH", name: "Thailand", dialCode: "+66" },
  { code: "TG", name: "Togo", dialCode: "+228" },
  { code: "TK", name: "Tokelau", dialCode: "+690" },
  { code: "TO", name: "Tonga", dialCode: "+676" },
  { code: "TT", name: "Trinidad and Tobago", dialCode: "+1" },
  { code: "TN", name: "Tunisia", dialCode: "+216" },
  { code: "TR", name: "Turkey", dialCode: "+90" },
  { code: "TM", name: "Turkmenistan", dialCode: "+993" },
  { code: "TC", name: "Turks and Caicos Islands", dialCode: "+1" },
  { code: "TV", name: "Tuvalu", dialCode: "+688" },
  { code: "VI", name: "U.S. Virgin Islands", dialCode: "+1" },
  { code: "UG", name: "Uganda", dialCode: "+256" },
  { code: "UA", name: "Ukraine", dialCode: "+380" },
  { code: "AE", name: "United Arab Emirates", dialCode: "+971" },
  { code: "GB", name: "United Kingdom", dialCode: "+44" },
  { code: "US", name: "United States", dialCode: "+1" },
  { code: "UY", name: "Uruguay", dialCode: "+598" },
  { code: "UZ", name: "Uzbekistan", dialCode: "+998" },
  { code: "VU", name: "Vanuatu", dialCode: "+678" },
  { code: "VA", name: "Vatican", dialCode: "+379" },
  { code: "VE", name: "Venezuela", dialCode: "+58" },
  { code: "VN", name: "Vietnam", dialCode: "+84" },
  { code: "WF", name: "Wallis and Futuna", dialCode: "+681" },
  { code: "EH", name: "Western Sahara", dialCode: "+212" },
  { code: "YE", name: "Yemen", dialCode: "+967" },
  { code: "ZM", name: "Zambia", dialCode: "+260" },
  { code: "ZW", name: "Zimbabwe", dialCode: "+263" },
];

const AwwwardsStyleContact = () => {
  const [formData, setFormData] = useState({
    company: "",
    name: "",
    email: "",
    phone: "",
    country: "",
    message: "",
  });
  const [activeField, setActiveField] = useState(null);
  const [selectedCountry, setSelectedCountry] = useState(countries[0]);
  const [showCountryDropdown, setShowCountryDropdown] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, amount: 0.1 });

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (!e.target.closest(".country-selector")) {
        setShowCountryDropdown(false);
      }
    };
    document.addEventListener("click", handleClickOutside);
    return () => document.removeEventListener("click", handleClickOutside);
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      setFormData({
        company: "",
        name: "",
        email: "",
        phone: "",
        country: "",
        message: "",
      });
      setTimeout(() => setIsSuccess(false), 4000);
    }, 1500);
  };

  const handlePhoneChange = (e) => {
    setFormData({ ...formData, phone: e.target.value });
  };

  const handleCountrySelect = (country) => {
    setSelectedCountry(country);
    setFormData({ ...formData, country: country.name });
    setShowCountryDropdown(false);
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
      <motion.div
        className="relative z-10"
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        variants={containerVariants}
      >
        <motion.div className="mb-16 text-center" variants={itemVariants}>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4">
            <span className="block">Send Us Your</span>
            <span className="text-[#1C4D9B]">Enquiry Below</span>
          </h2>
          <p className="text-base sm:text-lg text-gray-400">
            Experience the unforgettable moment with Everest DMC in Nepal.
          </p>
        </motion.div>

        <div className="w-full flex justify-center">
          <motion.div
            className="w-full md:w-10/12 lg:w-8/12"
            variants={itemVariants}
          >
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
                      <svg
                        className="w-8 h-8 text-green-400"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                    </div>
                    <h3 className="text-2xl sm:text-3xl font-bold mb-4">
                      Message Sent!
                    </h3>
                    <p className="text-gray-400 mb-6">
                      We'll get back to you within 24 hours.
                    </p>
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
                  {/* Company */}
                  <div className="relative bg-blue-50 rounded-2xl">
                    <label
                      htmlFor="company"
                      className={`absolute left-4 transition-all duration-300 ${
                        activeField === "company" || formData.company
                          ? "top-1 text-xs text-[#1C4D9B]"
                          : "top-4 text-gray-500"
                      }`}
                    >
                      Your Company
                    </label>
                    <input
                      id="company"
                      name="company"
                      type="text"
                      value={formData.company}
                      onChange={(e) =>
                        setFormData({ ...formData, company: e.target.value })
                      }
                      onFocus={() => setActiveField("company")}
                      onBlur={() => setActiveField(null)}
                      className="w-full bg-transparent border-b border-white/20 pt-6 pb-2 px-4 focus:border-[#1C4D9B] focus:outline-none rounded-2xl"
                    />
                  </div>

                  {/* Name and Phone */}
                  <div className="flex flex-col md:flex-row gap-4">
                    <div className="relative bg-blue-50 rounded-2xl flex-1">
                      <label
                        htmlFor="name"
                        className={`absolute left-4 transition-all duration-300 ${
                          activeField === "name" || formData.name
                            ? "top-1 text-xs text-[#1C4D9B]"
                            : "top-4 text-gray-500"
                        }`}
                      >
                        Your Name
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
                        className="w-full bg-transparent border-b border-white/20 pt-6 pb-2 px-4 focus:border-[#1C4D9B] focus:outline-none rounded-2xl"
                      />
                    </div>

                    <div className="relative bg-blue-50 rounded-2xl flex-1 country-selector">
                      <label className="absolute left-4 top-1 text-xs text-[#1C4D9B]">
                        Phone Number
                      </label>
                      <div className="flex items-center pt-6 pb-2 px-4">
                        <div
                          className="flex items-center pr-3 border-r border-gray-300 cursor-pointer"
                          onClick={() =>
                            setShowCountryDropdown(!showCountryDropdown)
                          }
                        >
                          <span className="font-medium text-gray-700">
                            {selectedCountry.dialCode}
                          </span>
                          <ChevronDown className="w-4 h-4 text-gray-500 ml-1" />
                        </div>
                        <input
                          id="phone"
                          name="phone"
                          type="tel"
                          value={formData.phone}
                          onChange={handlePhoneChange}
                          onFocus={() => setActiveField("phone")}
                          onBlur={() => setActiveField(null)}
                          className="w-full bg-transparent pl-3 focus:outline-none"
                          placeholder="Your phone number"
                        />
                      </div>
                      {showCountryDropdown && (
                        <div className="absolute z-10 mt-1 w-full max-h-60 overflow-auto bg-white border border-gray-200 rounded-lg shadow-lg">
                          {countries.map((country) => (
                            <div
                              key={country.code}
                              className="px-4 py-2 hover:bg-blue-50 cursor-pointer flex items-center gap-3"
                              onClick={() => handleCountrySelect(country)}
                            >
                              <span className="font-medium w-12 text-gray-700">
                                {country.dialCode}
                              </span>
                              <span className="text-gray-600">
                                {country.name}
                              </span>
                            </div>
                          ))}
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Email */}
                  <div className="relative bg-blue-50 rounded-2xl">
                    <label
                      htmlFor="email"
                      className={`absolute left-4 transition-all duration-300 ${
                        activeField === "email" || formData.email
                          ? "top-1 text-xs text-[#1C4D9B]"
                          : "top-4 text-gray-500"
                      }`}
                    >
                      Email Address
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
                      className="w-full bg-transparent border-b border-white/20 pt-6 pb-2 px-4 focus:border-[#1C4D9B] focus:outline-none rounded-2xl"
                    />
                  </div>

                  {/* Message */}
                  <div className="relative bg-blue-50 rounded-2xl">
                    <label
                      htmlFor="message"
                      className={`absolute left-4 transition-all duration-300 ${
                        activeField === "message" || formData.message
                          ? "top-1 text-xs text-[#1C4D9B]"
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
                      className="w-full bg-transparent border-b border-white/20 pt-6 pb-2 px-4 focus:border-[#1C4D9B] focus:outline-none resize-none rounded-2xl"
                    />
                  </div>

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
                          <circle
                            className="opacity-25"
                            cx="12"
                            cy="12"
                            r="10"
                            stroke="currentColor"
                            strokeWidth="4"
                          />
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
