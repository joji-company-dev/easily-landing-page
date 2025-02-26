import { cn } from "@/lib/utils";

export function TypographyH1({ children, className = "", ...props }) {
  return (
    <h1
      className={cn(
        `text-4xl font-extrabold tracking-tight text-gray-900 leading-tight mb-6`,
        className
      )}
      {...props}
    >
      {children}
    </h1>
  );
}

export function TypographyH2({ children, className = "", ...props }) {
  return (
    <h2
      className={cn(
        `text-2xl font-semibold text-gray-800 leading-snug mb-4`,
        className
      )}
      {...props}
    >
      {children}
    </h2>
  );
}

export function TypographyP({ children, className = "", ...props }) {
  return (
    <p
      className={cn(`text-base text-gray-600 leading-relaxed mb-4`, className)}
      {...props}
    >
      {children}
    </p>
  );
}

export function TypographyHero({ children, className = "", ...props }) {
  return (
    <h1
      className={cn(
        "text-5xl md:text-8xl text-center font-bold  md:leading-[6rem]",
        className
      )}
      {...props}
    >
      {children}
    </h1>
  );
}
