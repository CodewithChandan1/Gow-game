import { cn } from "../../utils/cn";

interface FloatingCardProps {
  children: React.ReactNode;
  className?: string;
}

const FloatingCard: React.FC<FloatingCardProps> = ({ children, className }) => {
  return (
    <div
      className={cn(
        "transition-transform duration-300 ease-out hover:translate-y-[-10px]",
        "hover:rotate-[2deg]",
        className
      )}
    >
      {children}
    </div>
  );
};

export default FloatingCard;
