interface PageHeaderProps {
  title: string;
  description?: string;
  image?: string;
}

export const PageHeader = ({ title, description, image }: PageHeaderProps) => {
  return (
    <div
      className="relative py-20 md:py-32 px-4 texture-overlay ambient-glow"
      style={
        image
          ? {
              backgroundImage: `linear-gradient(rgba(26, 26, 26, 0.4), rgba(26, 26, 26, 0.4)), url('${image}')`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }
          : {}
      }
    >
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="serif-heading text-4xl md:text-5xl lg:text-6xl font-bold text-balance mb-6">
          {title}
        </h1>
        {description && (
          <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
            {description}
          </p>
        )}
      </div>
    </div>
  );
};
