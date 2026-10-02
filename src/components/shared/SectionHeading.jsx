import { cn } from "../../lib/utils";

export const SectionHeading = ({
  primary,
  secondary,
  className,
  primaryClassName,
  secondaryClassName,
}) => {
  return (
    <h2
      className={cn(
        "font-[Lato] text-[40px] font-extrabold leading-[1.05] tracking-tight text-white sm:text-[52px] lg:text-[58px]",
        className,
      )}
      style={{ fontFamily: "'Lato', sans-serif" }}
    >
      {primary && (
        <span
          data-reveal="left"
          className={cn("block", primaryClassName)}
        >
          {primary}
        </span>
      )}
      {secondary && (
        <span
          data-reveal="right"
          className={cn("block text-[#92d1bc]", secondaryClassName)}
        >
          {secondary}
        </span>
      )}
    </h2>
  );
};
