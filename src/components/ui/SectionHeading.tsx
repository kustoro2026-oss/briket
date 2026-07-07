interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  className?: string;
  align?: "left" | "center";
  light?: boolean;
}

export default function SectionHeading({
  title,
  subtitle,
  className = "",
  align = "center",
  light = false,
}: SectionHeadingProps) {
  return (
    <div className={`mb-10 ${align === "center" ? "text-center" : "text-left"} ${className}`}>
      <h2
        className={`text-2xl md:text-3xl lg:text-4xl font-bold uppercase tracking-wide ${light || true ? "text-white" : "text-gray-900"}`}
        style={{ fontFamily: "var(--font-josefin-sans)" }}
      >
        {title}
      </h2>
      {subtitle && (
        <p className={`mt-3 max-w-2xl ${align === "center" ? "mx-auto" : ""} ${light || true ? "text-white/70" : "text-gray-600"}`}>
          {subtitle}
        </p>
      )}
    </div>
  );
}
