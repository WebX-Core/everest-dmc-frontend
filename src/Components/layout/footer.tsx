import logo from "@/assets/Logo-white.png";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaTelegramPlane,
} from "react-icons/fa";
import { useState, useEffect } from "react";
import { packageApi } from "../../services/package";

const Footer = () => {
  const [packages, setPackages] = useState<{ name: string; slug: string }[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPackages = async () => {
      try {
        const response = await packageApi.getAllPackages();
        // Get first 4 packages
        setPackages(
          response.data.slice(0, 4).map((pkg) => ({
            name: pkg.name,
            slug: pkg.slug,
          }))
        );
      } catch (error) {
        console.error("Error fetching packages:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchPackages();
  }, []);

  return (
    <footer
      className="relative py-16 px-2 flex flex-col justify-center text-black bg-fixed"
      style={{
        backgroundImage:
          "linear-gradient(to bottom, rgba(28, 77, 155, 0.65), rgba(28, 77, 155, 0.75)), url('https://cdn.britannica.com/39/76239-050-DE5FCF36/Climbers-side-Nepali-Mount-Everest.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="relative z-10 w-11/12 mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-10">
        {/* Logo + Intro */}
        <div className="md:col-span-2 space-y-4 flex flex-col items-center md:items-start text-center md:text-left">
          <img src={logo} alt="Everest DMC Logo" className="h-20 w-auto" />
          <p className="leading-relaxed text-white">
            Scaling new heights in travel experiences. We craft unforgettable
            journeys to the world's most breathtaking destinations, with Mount
            Everest as our inspiration.
          </p>
          <div className="flex space-x-4 mt-2">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaFacebookF className="text-white hover:scale-110 transition-transform" />
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaInstagram className="text-white hover:scale-110 transition-transform" />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedinIn className="text-white hover:scale-110 transition-transform" />
            </a>
            <a
              href="https://telegram.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaTelegramPlane className="text-white hover:scale-110 transition-transform" />
            </a>
          </div>
        </div>

        {/* Footer Columns */}
        {[
          {
            title: "Destinations",
            links: loading
              ? ["Loading...", "", "", ""]
              : packages.map((pkg) => pkg.name),
            className: "hidden md:flex flex-col"
          },
          {
            title: "Services",
            links: [
              "Peak Climbing",
              "Trekking Guides",
              "Luxury Base Camps",
              "Expedition Planning",
            ],
            className: "hidden md:flex flex-col"
          },
          {
            title: "Contact Us",
            links: [
              "+977 9769742525",
              "+977 9869742225",
              "climb@everestdmc.com",
              "info@everestdmc.com",
            ],
            className: "flex flex-col"
          },
        ].map((col, i) => (
          <div key={i} className={`${col.className || 'flex flex-col'} items-center md:items-start text-center md:text-left`}>
            <h4 className="font-bold text-white mb-3 text-lg">{col.title}</h4>
            <ul className="space-y-2">
              {col.links.map((text, j) => (
                <li key={j}>
                  {col.title === "Services" ? (
                    <span className="text-white hover:underline cursor-default">{text}</span>
                  ) : (
                    <a
                      href={
                        col.title === "Destinations" && !loading
                          ? `/packages/${packages[j]?.slug}`
                          : "#"
                      }
                      className="text-white hover:underline transition-colors"
                    >
                      {text}
                    </a>
                  )}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      {/* Divider */}
      <div className="w-11/12 mx-auto mt-10 border-t border-blue-300 pt-6 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-white text-center">
        <p>© 2025 Everest DMC. All rights reserved.</p>
        <div className="flex items-center gap-2 justify-center">
          <span>Designed & Developed By</span>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://webxnepal.com"
            className="hover:underline transition-transform hover:scale-105"
          >
            <img
              src="https://www.webxnepal.com/logo/logo.svg"
              alt="WebXNep Logo"
              className="w-16 inline-block"
            />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
