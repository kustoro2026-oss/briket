"use client";

import Link from "next/link";

interface ButtonProps {
  href?: string;
  onClick?: () => void;
  children: React.ReactNode;
  variant?: "dark" | "outline";
  className?: string;
  size?: "sm" | "md" | "lg";
  type?: "button" | "submit" | "reset";
}

export default function Button({ href, onClick, children, variant = "dark", className = "", size = "md", type = "button" }: ButtonProps) {
  const baseClasses = "inline-flex items-center justify-center font-medium rounded-full transition-all duration-300 tracking-wider uppercase";
  
  const sizeClasses = {
    sm: "px-4 py-1.5 text-xs",
    md: "px-6 py-2.5 text-sm",
    lg: "px-8 py-3 text-base",
  };

  const variantClasses = {
    dark: "bg-gray-900 text-white hover:bg-gray-800",
    outline: "border-2 border-gray-900 text-gray-900 hover:bg-gray-900 hover:text-white",
  };

  const classes = `${baseClasses} ${sizeClasses[size]} ${variantClasses[variant]} ${className}`;

  if (href) {
    return (
      <Link href={href} className={classes}>
        {children}
      </Link>
    );
  }

  return (
    <button type={type} onClick={onClick} className={classes}>
      {children}
    </button>
  );
}
