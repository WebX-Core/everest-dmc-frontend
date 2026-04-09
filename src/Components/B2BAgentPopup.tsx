type B2BAgentPopupProps = {
  isOpen: boolean;
  onClose: () => void;
};

const B2BAgentPopup = ({ isOpen, onClose }: B2BAgentPopupProps) => {
  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-[1000] flex items-center justify-center bg-black/70 px-4"
      role="dialog"
      aria-modal="true"
      aria-labelledby="b2b-popup-title"
    >
      <div className="w-full max-w-2xl bg-white p-6 text-center shadow-2xl md:p-10">
        <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-[#1C4D9B]">
          Everest DMC
        </p>
        <h2
          id="b2b-popup-title"
          className="text-3xl font-black leading-tight text-[#1C4D9B] md:text-5xl"
        >
          B2B ONLY - AGENT RATES FOR NEPAL.
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-base text-slate-600 md:text-lg">
          This platform is built for travel agents and trade partners. Please
          continue to access wholesale agent pricing and support.
        </p>
        <button
          type="button"
          onClick={onClose}
          className="group relative mt-8 inline-block text-sm font-medium text-white"
        >
          <span className="absolute inset-0 border border-[#1C4D9B]"></span>
          <span className="block bg-[#1C4D9B] px-7 py-3 transition-transform group-hover:-translate-x-1 group-hover:-translate-y-1">
            Continue as Agent
          </span>
        </button>
      </div>
    </div>
  );
};

export default B2BAgentPopup;
