"use client";

import React, { ButtonHTMLAttributes } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary";
  size?: "small" | "medium" | "large";
}

export const Button: React.FC<ButtonProps> = ({
  children,
  className = "",
  variant = "primary",
  size = "medium",
  ...props
}) => {
  const baseStyles = "font-bold rounded transition-colors duration-200";

  const variantStyles = {
    primary: "bg-[#00584D] text-white hover:bg-[#00584D]/90",
    secondary:
      "bg-white text-[#00584D] border border-[#00584D] hover:bg-[#00584D]/10",
  };

  const sizeStyles = {
    small: "px-3 py-1 text-sm",
    medium: "px-4 py-2",
    large: "px-6 py-3 text-lg",
  };

  const buttonClasses = `${baseStyles} ${variantStyles[variant]} ${sizeStyles[size]} ${className}`;

  return (
    <button className={buttonClasses} {...props}>
      {children}
    </button>
  );
};
