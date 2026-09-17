import { Link } from "react-router-dom";
import { cn } from "../../lib/utils";

interface GradientButtonProps {
  children: React.ReactNode;
  to?: string;
  href?: string;
  onClick?: () => void;
  className?: string;
  type?: "button" | "submit";
}

export const GradientButton = ({
  children,
  to,
  href,
  onClick,
  className,
  type = "button",
}: GradientButtonProps) => {
  const baseClass =
    "inline-flex items-center justify-center gap-2.5 rounded-[100px] border-0 bg-[linear-gradient(138deg,rgba(134,217,240,1)_0%,rgba(192,229,116,1)_100%)] text-[#1e1e1e] shadow-none transition-opacity hover:opacity-90";

  const combined = cn(baseClass, className);

  if (to) {
    return (
      <Link to={to} className={combined} onClick={onClick}>
        {children}
      </Link>
    );
  }

  if (href) {
    return (
      <a href={href} className={combined} onClick={onClick}>
        {children}
      </a>
    );
  }

  return (
    <button type={type} className={combined} onClick={onClick}>
      {children}
    </button>
  );
};
