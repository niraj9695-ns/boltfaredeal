import { ChevronRightIcon } from "lucide-react";
import { Link } from "react-router-dom";
import { Card, CardContent } from "../ui/card";
import { cn } from "../../lib/utils";

interface ServiceCardProps {
  title: string;
  description: string;
  image: string;
  radius?: string;
  overlay?: string;
  className?: string;
}

export const ServiceCard = ({
  title,
  description,
  image,
  radius = "rounded-[20px]",
  overlay = "bg-blend-screen bg-[linear-gradient(138deg,rgba(134,217,240,0.23)_0%,rgba(192,229,116,0.3)_100%)]",
  className,
}: ServiceCardProps) => {
  return (
    <Card
      className={cn(
        "relative h-[420px] w-full overflow-hidden border-0 bg-transparent sm:h-[477px]",
        radius,
        className,
      )}
    >
      <img
        className="absolute inset-0 h-full w-full object-cover"
        alt={title}
        src={image}
        loading="lazy"
      />
      <div className={cn("absolute inset-0", radius, overlay)} />
      <CardContent className="relative flex h-full flex-col p-0">
        <div
          className={cn(
            "ml-4 mt-4 flex h-10 w-auto max-w-[160px] items-center justify-center rounded-[10px] bg-white px-2.5 py-2 text-center [font-family:'Merriweather',Helvetica] text-sm font-normal leading-tight tracking-[0] text-[#393939]",
          )}
        >
          {title}
        </div>
        <p className="mx-5 mt-auto flex w-[calc(100%-2.5rem)] items-center [font-family:'Inter',Helvetica] text-base font-medium tracking-[0] text-white sm:text-xl">
          {description}
        </p>
        <Link
          to="/services"
          className="mb-[18px] mt-3 ml-5 flex h-[42px] w-[42px] shrink-0 items-center justify-center rounded-full bg-white/10 backdrop-blur-sm transition-colors hover:bg-white/20"
          aria-label={`Learn more about ${title}`}
        >
          <ChevronRightIcon className="h-5 w-5 text-white" />
        </Link>
      </CardContent>
    </Card>
  );
};
