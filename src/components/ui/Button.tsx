import { cn } from "../../lib/utils";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
  href?: string;
}

export default function Button({ className, variant = "primary", size = "md", href, children, ...props }: ButtonProps) {
  const classes = cn(
    "inline-flex items-center justify-center gap-2 rounded-full font-medium transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-accent/20",
    {
      "bg-primary dark:bg-accent text-white hover:bg-primary/90 dark:hover:bg-accent/90": variant === "primary",
      "border border-primary/20 dark:border-gray-600 text-primary dark:text-gray-100 hover:bg-gray-50 dark:hover:bg-gray-800": variant === "outline",
      "text-primary dark:text-gray-100 hover:bg-gray-50 dark:hover:bg-gray-800": variant === "ghost",
    },
    {
      "px-4 py-2 text-sm": size === "sm",
      "px-6 py-2.5 text-sm": size === "md",
      "px-8 py-3.5 text-base": size === "lg",
    },
    className
  );

  if (href) {
    return <a href={href} target="_blank" rel="noopener noreferrer" className={classes}>{children}</a>;
  }
  return <button className={classes} {...props}>{children}</button>;
}
