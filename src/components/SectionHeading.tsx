interface Props {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  light?: boolean;
}
export default function SectionHeading({ eyebrow, title, description, align = "left", light = false }: Props) {
  return (
    <div className={align === "center" ? "text-center max-w-2xl mx-auto" : "max-w-2xl"}>
      {eyebrow && (
        <div className="text-xs uppercase tracking-[0.18em] font-semibold text-accent mb-3">
          {eyebrow}
        </div>
      )}
      <h2 className={`font-display text-3xl md:text-4xl lg:text-[42px] font-bold text-balance leading-[1.1] ${light ? "text-white" : "text-primary"}`}>
        {title}
      </h2>
      {description && (
        <p className={`text-base md:text-lg mt-4 leading-relaxed ${light ? "text-white/70" : "text-muted-foreground"}`}>
          {description}
        </p>
      )}
    </div>
  );
}
