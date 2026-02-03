import React from "react";

export default function ScrollIndicator() {
  return (
    <div className="mt-6 flex flex-col items-center gap-1 text-[#646cff]" aria-hidden>
      <span className="text-sm">Scroll</span>
      <svg
        className="w-6 h-6 animate-bounce"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M12 5v14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M19 12l-7 7-7-7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </div>
  );
}
