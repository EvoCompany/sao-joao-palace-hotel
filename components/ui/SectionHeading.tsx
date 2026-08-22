interface SectionHeadingProps {
  eyebrow?: string;
  headline: string;
  subheadline?: string;
  align?: "left" | "center" | "right";
  light?: boolean;
}

export function SectionHeading({
  eyebrow,
  headline,
  subheadline,
  align = "left",
  light = false,
}: SectionHeadingProps) {
  const alignClass = {
    left: "text-left",
    center: "text-center",
    right: "text-right",
  }[align];

  return (
    <div className={`${alignClass}`}>
      {eyebrow && (
        <p
          className="text-xs font-inter font-medium tracking-[0.2em] uppercase mb-4"
          style={{ color: light ? "rgba(247,244,239,0.7)" : "#8C352D" }}
        >
          {eyebrow}
        </p>
      )}
      <h2
        className="font-cormorant font-light leading-tight"
        style={{
          fontSize: "clamp(2rem, 4vw, 3.25rem)",
          color: light ? "#F7F4EF" : "#202020",
        }}
      >
        {headline}
      </h2>
      {subheadline && (
        <p
          className="font-inter font-light leading-relaxed mt-5 max-w-xl"
          style={{
            fontSize: "1.0625rem",
            color: light ? "rgba(247,244,239,0.75)" : "#72706C",
            marginLeft: align === "center" ? "auto" : undefined,
            marginRight: align === "center" ? "auto" : undefined,
          }}
        >
          {subheadline}
        </p>
      )}
    </div>
  );
}
