import Link from "next/link";

export const Logo = () => {
  return (
    <Link 
      href="/" 
      className="group flex flex-row items-center gap-0.5 dir-ltr" 
      style={{ direction: 'ltr' }} 
    >
      <div className="w-px h-6 bg-border mx-1" />
      <span className="text-xl tracking-tighter transition-colors">
        Vibe
      </span>
      <span className="text-xl font-light tracking-tighter text-primary group-hover:text-foreground transition-colors">
        Check
      </span>
      <div className="w-px h-6 bg-border mx-1" />
    </Link>
  );
};