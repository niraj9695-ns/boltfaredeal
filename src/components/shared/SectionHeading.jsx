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
        "[font-family:'Merriweather',Helvetica] text-[40px] font-normal leading-10 tracking-[0] text-white",
        className,
      )}
    >
      {primary && (
        <span
          data-reveal="left"
          className={cn("italic leading-[64px]", primaryClassName)}
        >
          {primary}
          {secondary && <br />}
        </span>
      )}
      {secondary && (
        <span
          data-reveal="right"
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
