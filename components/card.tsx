import { ReactNode } from "react";

const Card = ({
  children,
  className,
}: {
  children: ReactNode;
  className: string;
}) => {
  return (
    <div
      className={`mx-16 rounded-[10px] border-[3px] !border-[#F5F5F5] bg-white px-8 ${className}`}
    >
      {children}
    </div>
  );
};

export default Card;
