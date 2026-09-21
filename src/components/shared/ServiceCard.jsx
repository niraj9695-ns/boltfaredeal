import { ChevronRightIcon } from "lucide-react";
import { Link } from "react-router-dom";
import { Card, CardContent } from "../ui/card";
import { cn } from "../../lib/utils";

export const ServiceCard = ({
  title,
  description,
  image,
  radius = "rounded-[20px]",
  overlay = "bg-blend-screen bg-[linear-gradient(138deg,rgba(134,217,240,0.23)_0%,rgba(192,229,116,0.3)_100%)]",
  className,
  active = false,
  onMouseEnter,
  onMouseLeave,
  onFocus,
  onBlur,
}) => {
  return (
    <Card
      className={cn(
        "service-card group relative h-[420px] w-full overflow-hidden border-0 bg-[#233a35] sm:h-[477px]",
        radius,
        className,
      )}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      onFocus={onFocus}
      onBlur={onBlur}
    >
      <img
        className={cn(
          "absolute inset-0 h-full w-full scale-105 object-cover transition-all duration-700 ease-out",
          active ? "scale-100 opacity-100" : "scale-110 opacity-0",
        )}
        alt={title}
        src={image}
        loading="lazy"
      />
      <div
        className={cn(
          "service-card-overlay absolute inset-0 transition-all duration-700 ease-out",
          active ? "bg-[#0f1715]/15" : "bg-[#0f1715]/40",
          radius,
          overlay,
        )}
      />
      <CardContent className="relative z-10 flex h-full flex-col p-0">
        <div
          className={cn(
            "service-card-label ml-4 mt-4 flex h-10 w-auto max-w-[160px] items-center justify-center rounded-[10px] bg-white px-2.5 py-2 text-center [font-family:'Merriweather',Helvetica] text-sm font-normal leading-tight tracking-[0] text-[#393939] shadow-sm",
          )}
        >
          {title}
        </div>
        <p className="service-card-copy mx-5 mt-auto flex w-[calc(100%-2.5rem)] items-center text-base font-medium tracking-[0] text-white transition-colors duration-500 sm:text-xl">
          {description}
        </p>
        <Link
          to="/services"
          className={cn(
            "service-card-action relative z-20 mb-[18px] mt-3 ml-5 flex h-[42px] w-[42px] shrink-0 items-center justify-center rounded-full border border-white/20 bg-white/10 text-white opacity-100 shadow-lg backdrop-blur-sm transition-all duration-300 pointer-events-auto",
            active && "translate-x-1 border-[#e1de00]/60 bg-[#e1de00] text-[#0f1715] shadow-[0_0_18px_rgba(225,222,0,0.35)]",
          )}
          aria-label={`Learn more about ${title}`}
        >
          <ChevronRightIcon className="service-card-icon h-5 w-5" />
        </Link>
      </CardContent>
    </Card>
  );
};
