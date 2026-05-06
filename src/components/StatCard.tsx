import { useCountUp } from '@/hooks/useScrollAnimation';

interface StatCardProps {
  number: number;
  label: string;
}

export const StatCard = ({ number, label }: StatCardProps) => {
  const { ref, count } = useCountUp(number);

  return (
    <div ref={ref} className="text-center">
      <div className="serif-heading text-5xl md:text-6xl font-bold text-accent mb-2">
        {count.toLocaleString()}+
      </div>
      <div className="text-muted-foreground text-sm md:text-base">{label}</div>
    </div>
  );
};
