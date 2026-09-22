import { useState } from "react";
import { Link } from "react-router-dom";
import { cn } from "../../lib/utils";

export const GradientButton = ({
  children,
  to,
  href,
  onClick,
  className,
  type = "button",
  magnetic = true,
}) => {
  const [offset, setOffset] = useState({ x: 0, y: 0 });

  const handlePointerMove = (event) => {
    if (!magnetic) {
      return;
    }

    const rect = event.currentTarget.getBoundingClientRect();
    const x = ((event.clientX - rect.left) / rect.width - 0.5) * 14;
    const y = ((event.clientY - rect.top) / rect.height - 0.5) * 14;

    setOffset({ x, y });
  };

  const handlePointerLeave = () => {
    setOffset({ x: 0, y: 0 });
  };

  const baseClass =
    "magnetic-button inline-flex items-center justify-center gap-2.5 rounded-[100px] border-0 bg-[linear-gradient(138deg,rgba(134,217,240,1)_0%,rgba(192,229,116,1)_100%)] text-[#1e1e1e] shadow-none transition-all duration-300 ease-out hover:opacity-100";

  const combined = cn(baseClass, className);
  const style = magnetic
    ? {
        transform: `translate(${offset.x}px, ${offset.y}px)`,
      }
    : undefined;

  if (to) {
    return (
      <Link
        to={to}
        className={combined}
        onClick={onClick}
        onPointerMove={handlePointerMove}
        onPointerLeave={handlePointerLeave}
        style={style}
      >
        {children}
      </Link>
    );
  }

  if (href) {
    return (
      <a
        href={href}
        className={combined}
        onClick={onClick}
        onPointerMove={handlePointerMove}
        onPointerLeave={handlePointerLeave}
        style={style}
      >
        {children}
      </a>
    );
  }

  return (
    <button
      type={type}
      className={combined}
      onClick={onClick}
      onPointerMove={handlePointerMove}
      onPointerLeave={handlePointerLeave}
      style={style}
    >
      {children}
    </button>
  );
};
