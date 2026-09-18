import { ArrowUpRightIcon } from "lucide-react";
import { Link } from "react-router-dom";
import { Card, CardContent } from "../ui/card";
import { cn } from "../../lib/utils";

export const PortfolioCard = ({
  title,
  image,
  className,
  showOverlay = false,
}) => {
  const handlePointerMove = (event) => {
    const card = event.currentTarget;
    const rect = card.getBoundingClientRect();
    const offsetX = ((event.clientX - rect.left) / rect.width - 0.5) * 20;
    const offsetY = ((event.clientY - rect.top) / rect.height - 0.5) * 20;

    card.style.setProperty("--pointer-shift-x", `${offsetX}px`);
    card.style.setProperty("--pointer-shift-y", `${offsetY}px`);
    card.style.setProperty("--tilt-x", `${(-offsetY / 2).toFixed(2)}deg`);
    card.style.setProperty("--tilt-y", `${(offsetX / 2).toFixed(2)}deg`);
  };

  const handlePointerLeave = (event) => {
    event.currentTarget.style.setProperty("--pointer-shift-x", "0px");
    event.currentTarget.style.setProperty("--pointer-shift-y", "0px");
    event.currentTarget.style.setProperty("--tilt-x", "0deg");
    event.currentTarget.style.setProperty("--tilt-y", "0deg");
  };

  return (
    <Card
      onPointerMove={handlePointerMove}
      onPointerLeave={handlePointerLeave}
      className={cn(
        "portfolio-card group relative overflow-hidden rounded-[clamp(0.5rem,1.7vw,1.25rem)] border-0 bg-transparent shadow-none",
        className,
      )}
    >
      <CardContent className="size-full p-0">
        <div className="portfolio-media">
          <img
            className="portfolio-image"
            alt={title || "Portfolio case"}
            src={image}
            loading="lazy"
          />
          <div className="portfolio-ink-overlay" aria-hidden="true" />
          <div className="portfolio-view-pill" aria-hidden="true">
            <span>View Project</span>
            <ArrowUpRightIcon className="h-3.5 w-3.5" />
          </div>
        </div>
        {showOverlay && title && (
          <div className="portfolio-card-overlay absolute inset-0 flex items-end rounded-[clamp(0.5rem,1.7vw,1.25rem)] p-[clamp(0.5rem,1.5vw,1.25rem)]">
            <Link
              to="/portfolio"
              className="mr-20 flex w-full items-center justify-between gap-3 text-left [font-family:'Inter',Helvetica] font-medium text-white transition-colors hover:text-[#e1de00]"
            >
              <span className="max-w-[calc(100%-3rem)] text-[clamp(0.55rem,1.5vw,1.125rem)] leading-tight">
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
