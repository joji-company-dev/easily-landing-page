import { cn } from "@/lib/utils";

function Skeleton({ className, ...props }) {
  return (
    <div
      className={cn("animate-pulse rounded-md bg-primary/10", className)}
      {...props}
    />
  );
}

export { Skeleton };

// export function Skeleton({ className = "" }) {
//   return <div className={`skeleton ${className}`} />;
// }
