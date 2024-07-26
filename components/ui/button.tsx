import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap rounded-full text-sm font-medium  ring-offset-white transition-colors focus-visible:outline-none  disabled:pointer-events-none disabled:opacity-50 ",
  {
    variants: {
      variant: {
        default:
          " bg-primary text-background dark:text-foreground hover:bg-primary/90",
        ghost: " bg-secondary hover:bg-secondary/90 ",
        outline:
          "bg-gradient-to-t from-white/10 to-transparent border border-violetLight/20 hover:opacity-90",
      },
      size: {
        default: "h-10 px-6 py-2",
        sm: "h-7  px-5",
        lg: "h-11 rounded-md px-8",
        icon: "h-10 w-10",
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
