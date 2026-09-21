import { useEffect, useRef, useState } from "react";

export const StatItem = ({ value, label }) => {
  const [count, setCount] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef(null);

  const valueText = String(value).trim();
  const numericValue = Number.parseInt(valueText.replace(/[^0-9]/g, ""), 10) || 0;

  useEffect(() => {
    const node = ref.current;

    if (!node) {
      return undefined;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;

        if (!entry) {
          return;
        }

        if (entry.isIntersecting) {
          setIsVisible(true);
          setCount(0);
          const startTime = performance.now();
          const duration = 1200;

          const animate = (timestamp) => {
            const progress = Math.min((timestamp - startTime) / duration, 1);
            const eased = 1 - (1 - progress) ** 3;
            setCount(Math.round(numericValue * eased));

            if (progress < 1) {
              requestAnimationFrame(animate);
            } else {
              setCount(numericValue);
            }
          };

          requestAnimationFrame(animate);
        } else {
          setIsVisible(false);
          setCount(0);
        }
      },
      { threshold: 0.35 },
    );

    observer.observe(node);

    return () => observer.disconnect();
  }, [numericValue]);

  return (
    <div ref={ref} className="flex min-w-0 flex-col gap-2.5">
      <dt className="order-2 text-base font-medium leading-7 tracking-[0] text-[#aeb6a7] sm:text-xl">
        {label}
      </dt>
      <dd className="m-0 [font-family:'Merriweather',Helvetica] text-[36px] font-normal leading-[50px] tracking-[0] text-white sm:text-[50px] sm:leading-[60px]">
        <span>{count}</span>
        <span className="text-[#e1de00]">+</span>
      </dd>
    </div>
  );
};
