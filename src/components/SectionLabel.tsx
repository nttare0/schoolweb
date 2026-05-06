interface SectionLabelProps {
  label: string;
  className?: string;
}

export const SectionLabel = ({ label, className = '' }: SectionLabelProps) => {
  return (
    <div className={`mb-6 flex items-center gap-4 ${className}`}>
      <span className="h-px flex-1 bg-border" />
      <span className="mono-label text-accent whitespace-nowrap">
        {label}
      </span>
      <span className="h-px flex-1 bg-border" />
    </div>
  );
};
