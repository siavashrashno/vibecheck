import Link from "next/link";

export const Logo = () => {
  return (
    <Link href="/" className="group flex items-center gap-0.5">
      <span className="text-xl font-black tracking-tighter transition-colors">
        Vibe
      </span>
      <span className="text-xl font-light tracking-tighter text-primary group-hover:text-foreground transition-colors">
        Check
      </span>
      <span className="w-1.5 h-1.5 rounded-full bg-primary mb-1 ml-0.5" />
    </Link>
  );
};
