import { cn } from "../../lib/utils";

export default function Container({ className, children }: { className?: string; children: React.ReactNode }) {
  return <div className={cn("mx-auto max-w-[1100px] px-5", className)}>{children}</div>;
}
