import { ChevronDownIcon } from "lucide-react";

export const ScrollIndicator = () => {
  return (
    <a
      href="#main-content"
      aria-label="Scroll down"
      className="absolute bottom-[30px] left-1/2 z-20 -translate-x-1/2 rounded-full p-2 text-white/60 transition-colors hover:text-white"
    >
      <ChevronDownIcon className="h-6 w-6 animate-bounce" />
    </a>
  );
};
