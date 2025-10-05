import { cn } from "@/lib/utils";

interface SwipeCardsProps {
  className?: string;
}

const SwipeCards = ({ className }: SwipeCardsProps) => {
  return (
    <div
      className={cn(
        "relative grid h-[233px] w-[175px] place-items-center",
        className,
      )}
    >
      <img
        src="/cat-1.jpg"
        alt="Profile picture"
        className="h-[233px] w-[175px] rounded-lg bg-white object-cover shadow-lg"
        style={{
          boxShadow: "0 10px 15px -3px rgb(0 0 0 / 0.3), 0 4px 6px -4px rgb(0 0 0 / 0.3)"
        }}
      />
    </div>
  );
};

export default SwipeCards;
