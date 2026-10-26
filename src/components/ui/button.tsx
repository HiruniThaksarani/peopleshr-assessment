import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-full text-xs sm:text-sm font-semibold tracking-wide transition-all duration-200 select-none group cursor-pointer disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2",
  {
    variants: {
      variant: {
        // The signature "Request a Demo" button design
        default:
          "bg-primary hover:bg-primary-hover text-white shadow-[0_4px_16px_-2px_rgba(13,91,189,0.35)] hover:shadow-[0_8px_24px_-2px_rgba(13,91,189,0.5)] hover:scale-[1.02] active:scale-[0.98]",
        primary:
          "bg-primary hover:bg-primary-hover text-white shadow-[0_4px_16px_-2px_rgba(13,91,189,0.35)] hover:shadow-[0_8px_24px_-2px_rgba(13,91,189,0.5)] hover:scale-[1.02] active:scale-[0.98]",
        outline:
          "bg-white hover:bg-primary/2 text-primary border border-primary/50 hover:border-primary/60 hover:text-primary shadow-xs hover:scale-[1.02] active:scale-[0.98]",
        outlinePrimary:
          "bg-white hover:bg-primary-light/50 text-primary border border-blue-200/90 hover:border-primary/80 shadow-xs hover:scale-[1.02] active:scale-[0.98]",
        secondary:
          "bg-primary-light hover:bg-[#dbe9fa] text-primary border border-[#cbe1fb] shadow-xs hover:scale-[1.02] active:scale-[0.98]",
        ghost:
          "text-slate-600 hover:text-slate-900 hover:bg-slate-100",
        destructive:
          "bg-destructive text-destructive-foreground hover:bg-destructive/90 shadow-sm",
        link:
          "text-primary underline-offset-4 hover:underline",
      },
      size: {
        default: "px-5 py-2.5 sm:px-6 sm:py-2.5",
        sm: "px-3.5 py-1.5 text-xs",
        lg: "px-6 sm:px-7 py-3 sm:py-3.5",
        icon: "h-9 w-9 p-0",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  }
);
Button.displayName = "Button";

export { Button, buttonVariants };
export default Button;
