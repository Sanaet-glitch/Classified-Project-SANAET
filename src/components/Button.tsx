"use client";
import React from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '@/lib/utils';

const buttonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        default: "bg-gradient-to-br from-cyan-500/80 to-blue-700/80 text-white shadow-[0_4px_10px_rgba(0,200,255,0.3)] hover:shadow-[0_6px_15px_rgba(0,200,255,0.5)] hover:translate-y-[-2px] border border-cyan-500/20",
        destructive: "bg-gradient-to-br from-red-500/80 to-red-700/80 text-white shadow-[0_4px_10px_rgba(255,0,0,0.3)] hover:shadow-[0_6px_15px_rgba(255,0,0,0.5)] hover:translate-y-[-2px] border border-red-500/20",
        outline: "bg-black/20 backdrop-blur-sm text-slate-200 border border-slate-700 hover:border-cyan-500/50 hover:text-cyan-400 hover:shadow-[0_0_15px_rgba(0,200,255,0.3)] hover:translate-y-[-2px]",
        secondary: "bg-gradient-to-br from-purple-500/80 to-violet-700/80 text-white shadow-[0_4px_10px_rgba(150,0,255,0.3)] hover:shadow-[0_6px_15px_rgba(150,0,255,0.5)] hover:translate-y-[-2px] border border-purple-500/20",
        ghost: "hover:bg-slate-800/50 hover:text-slate-200 text-slate-400 hover:shadow-[0_0_15px_rgba(0,200,255,0.2)] hover:translate-y-[-2px]",
        link: "text-cyan-400 underline-offset-4 hover:underline hover:text-cyan-300 hover:shadow-[0_0_10px_rgba(0,200,255,0.2)]",
        coral: "bg-gradient-to-br from-coral-500/80 to-orange-700/80 text-white shadow-[0_4px_10px_rgba(255,100,50,0.3)] hover:shadow-[0_6px_15px_rgba(255,100,50,0.5)] hover:translate-y-[-2px] border border-orange-500/20",
      },
      size: {
        default: "h-10 px-4 py-2",
        sm: "h-9 rounded-md px-3",
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
  ({ className, variant, size, ...props }, ref) => {
    return (
      <button
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  }
);

Button.displayName = "Button";

export { buttonVariants };
export default Button;
