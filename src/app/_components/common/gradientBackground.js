export function GradientBackground({ children }) {
  return (
    <div className="relative">
      <div
        className="-z-10 absolute inset-0 bg-gradient-to-b from-orange-400 via-amber-200 via-60% to-white to-90% bg-[length:200%_100%] animate-gradient
          after:absolute after:inset-0 after:bg-gradient-to-bl after:from-orange-400 after:via-amber-300 after:via-40% after:to-transparent after:to-95% after:opacity-30 after:animate-gradient-reverse
          
        "
      />
      {children}
      <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-b from-transparent to-white" />
    </div>
  );
}
