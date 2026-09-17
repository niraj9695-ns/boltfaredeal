import { cn } from "../../lib/utils";

interface SectionHeadingProps {
  primary: string;
  secondary?: string;
  className?: string;
  primaryClassName?: string;
  secondaryClassName?: string;
}

export const SectionHeading = ({
  primary,
  secondary,
  className,
  primaryClassName,
  secondaryClassName,
}: SectionHeadingProps) => {
  return (
    <h2
      className={cn(
        "[font-family:'Merriweather',Helvetica] text-[40px] font-normal leading-10 tracking-[0] text-white",
        className,
      )}
    >
      {primary && (
        <span className={cn("italic leading-[64px]", primaryClassName)}>
          {primary}
          {secondary && <br />}
        </span>
      )}
      {secondary && (
        <span
          className={cn(
            "text-[55px] italic leading-[64px] text-[#92d1bc]",
            secondaryClassName,
          )}
        >
          {secondary}
        </span>
      )}
    </h2>
  );
};
