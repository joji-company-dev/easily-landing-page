import { cn } from "@/lib/utils";

export function SectionLayout({ children, className, ...props }) {
  return (
    <section
      className={cn(
        "min-h-dvh flex items-center justify-center py-20 px-2 md:px-10 lg:px-48",
        className
      )}
      {...props}
    >
      {children}
    </section>
  );
}
