import { useEffect } from "react";
import { WHATSAPP_TARGET_URL } from "@/config/whatsapp";

const WhatsAppRedirect = () => {
  useEffect(() => {
    window.location.replace(WHATSAPP_TARGET_URL);
  }, []);

  return (
    <div className="min-h-screen flex items-center justify-center px-4 text-center">
      <div>
        <p className="text-lg font-semibold text-[#1C4D9B]">
          Redirecting to WhatsApp...
        </p>
        <a
          href={WHATSAPP_TARGET_URL}
          className="mt-4 inline-block text-sm font-medium text-[#1C4D9B] underline"
        >
          Click here if it does not open automatically
        </a>
      </div>
    </div>
  );
};

export default WhatsAppRedirect;
