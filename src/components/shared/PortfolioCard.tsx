import { ArrowUpRightIcon } from "lucide-react";
import { Link } from "react-router-dom";
import { Card, CardContent } from "../ui/card";
import { cn } from "../../lib/utils";

interface PortfolioCardProps {
  title?: string;
  image: string;
  className?: string;
  showOverlay?: boolean;
}

export const PortfolioCard = ({
  title,
  image,
  className,
  showOverlay = false,
}: PortfolioCardProps) => {
  return (
    <Card
      className={cn(
        "group relative overflow-hidden rounded-[clamp(0.5rem,1.7vw,1.25rem)] border-0 bg-transparent shadow-none",
        className,
      )}
    >
      <CardContent className="size-full p-0">
        <img
          className="size-full object-cover transition-transform duration-500 group-hover:scale-105"
          alt={title || "Portfolio case"}
          src={image}
          loading="lazy"
        />
        {showOverlay && title && (
          <div className="absolute inset-0 flex items-end rounded-[clamp(0.5rem,1.7vw,1.25rem)] bg-[linear-gradient(180deg,rgba(255,255,255,0)_0%,rgba(0,132,204,0.85)_100%)] p-[clamp(0.5rem,1.5vw,1.25rem)]">
            <Link
              to="/portfolio"
              className="flex w-full items-center justify-between text-left [font-family:'Inter',Helvetica] font-medium text-white transition-colors hover:text-[#e1de00]"
            >
              <span className="text-[clamp(0.55rem,1.5vw,1.125rem)] leading-tight">
                {title}
              </span>
              <ArrowUpRightIcon className="ml-2 h-[clamp(0.5rem,1.25vw,0.9375rem)] w-[clamp(0.5rem,1.25vw,0.9375rem)] shrink-0" />
            </Link>
          </div>
        )}
      </CardContent>
    </Card>
  );
};
