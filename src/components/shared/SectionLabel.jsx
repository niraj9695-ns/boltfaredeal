import { cn } from "../../lib/utils";

export const SectionLabel = ({ children, className }) => {
  return (
    <p
      data-reveal="left"
      className={cn(
        "text-lg font-normal leading-[27.2px] tracking-[0.54px] text-[#e1de00]",
        className,
      )}
    >
      {children}
    </p>
  );
};
