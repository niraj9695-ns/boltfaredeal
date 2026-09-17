import { cn } from "../../lib/utils";

interface SectionLabelProps {
  children: string;
  className?: string;
}

export const SectionLabel = ({ children, className }: SectionLabelProps) => {
  return (
    <p
      className={cn(
        "[font-family:'Merriweather',Helvetica] text-lg font-normal leading-[27.2px] tracking-[0.54px] text-[#e1de00]",
        className,
      )}
    >
      {children}
    </p>
  );
};
