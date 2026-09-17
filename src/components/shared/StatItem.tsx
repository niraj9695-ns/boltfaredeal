interface StatItemProps {
  value: string;
  label: string;
}

export const StatItem = ({ value, label }: StatItemProps) => {
  return (
    <div className="flex min-w-0 flex-col gap-2.5">
      <dt className="order-2 [font-family:'Inter',Helvetica] text-base font-medium leading-7 tracking-[0] text-[#aeb6a7] sm:text-xl">
        {label}
      </dt>
      <dd className="m-0 [font-family:'Merriweather',Helvetica] text-[36px] font-normal leading-[50px] tracking-[0] text-white sm:text-[50px] sm:leading-[60px]">
        {value}
        <span className="text-[#e1de00]">+</span>
      </dd>
    </div>
  );
};
