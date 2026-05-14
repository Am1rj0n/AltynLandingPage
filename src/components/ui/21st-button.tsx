"use client";

import React from "react";
import { cn } from "@/lib/utils";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline";
  children: React.ReactNode;
}

export function AdvancedButton({
  children,
  className,
  variant = "primary",
  ...props
}: ButtonProps) {
  if (variant === "primary") {
    return (
      <button
        className={cn(
          "relative inline-flex h-12 overflow-hidden rounded-xl p-[1px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50 transition-transform active:scale-95 group",
          className
        )}
        {...props}
      >
        <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#fde047_0%,#b45309_50%,#fde047_100%)] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-xl bg-black px-6 py-1 text-sm font-medium text-white backdrop-blur-3xl transition-all group-hover:bg-black/90 border border-white/10 group-hover:border-transparent">
          {children}
        </span>
      </button>
    );
  }

  return (
    <button
      className={cn(
        "inline-flex h-10 items-center justify-center rounded-xl border border-white/10 bg-white/[0.03] px-6 text-sm font-medium text-white transition-colors hover:bg-white/[0.08] focus:outline-none focus:ring-2 focus:ring-white/20 focus:ring-offset-2 focus:ring-offset-slate-950 active:scale-95",
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
}
