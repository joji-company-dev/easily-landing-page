import { cn } from "@/lib/utils";

export function TypographyH1({ children, className = "" }) {
  return (
    <h1
      className={`text-4xl font-extrabold tracking-tight text-gray-900 leading-tight mb-6 ${className}`}
    >
      {children}
    </h1>
  );
}

export function TypographyH2({ children, className = "" }) {
  return (
    <h2
      className={`text-3xl font-semibold text-gray-800 leading-snug mb-4 ${className}`}
    >
      {children}
    </h2>
  );
}

export function TypographyP({ children, className = "" }) {
  return (
    <p className={`text-base text-gray-600 leading-relaxed mb-4 ${className}`}>
      {children}
    </p>
  );
}

export function TypographyHero({ children, className = "" }) {
  return (
    <h1
      className={cn(
        "text-5xl md:text-8xl text-center font-bold  md:leading-[6rem]",
        className
      )}
    >
      {children}
    </h1>
  );
}
