import { CheckCircleIcon } from "lucide-react";

export const ServiceFeatures = ({ features = [] }) => {
  if (features.length === 0) return null;

  return (
    <ul className="grid gap-2 sm:grid-cols-2">
      {features.map((feature) => (
        <li
          key={feature}
          className="flex items-center gap-2 border-b border-[var(--theme-border)] pb-2 text-[11px] leading-5 text-[var(--theme-text-soft)]"
        >
          <CheckCircleIcon className="h-3.5 w-3.5 shrink-0 text-[var(--theme-accent)]" />
          <span>{feature}</span>
        </li>
      ))}
    </ul>
  );
};
