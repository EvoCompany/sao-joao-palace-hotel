"use client";

import { ArrowRight } from "lucide-react";
import Link from "next/link";
import React from "react";

type ButtonVariant = "primary" | "outline" | "ghost";
type ButtonSize = "sm" | "md" | "lg";

interface ButtonBaseProps {
  variant?: ButtonVariant;
  size?: ButtonSize;
  showArrow?: boolean;
  className?: string;
  children: React.ReactNode;
}

type ButtonAsButton = ButtonBaseProps &
  React.ButtonHTMLAttributes<HTMLButtonElement> & { as?: "button" };

type ButtonAsLink = ButtonBaseProps &
  React.AnchorHTMLAttributes<HTMLAnchorElement> & {
    as: "a";
    href: string;
  };

type ButtonAsNextLink = ButtonBaseProps & {
  as: "link";
  href: string;
  className?: string;
};

type ButtonProps = ButtonAsButton | ButtonAsLink | ButtonAsNextLink;

const variantClasses: Record<ButtonVariant, string> = {
  primary:
    "bg-wine text-white hover:bg-wine-dark border border-wine hover:border-wine-dark",
  outline:
    "bg-transparent text-white border border-white hover:bg-white hover:text-dark",
  ghost:
    "bg-transparent text-dark border border-dark/20 hover:bg-dark hover:text-white hover:border-dark",
};

const sizeClasses: Record<ButtonSize, string> = {
  sm: "px-5 py-2.5 text-sm",
  md: "px-7 py-3.5 text-sm",
  lg: "px-9 py-4 text-base",
};

export function Button(props: ButtonProps) {
  const {
    variant = "primary",
    size = "md",
    showArrow = false,
    className = "",
    children,
    as,
  } = props;

  const baseClasses = `inline-flex items-center gap-2 font-inter font-medium tracking-wide transition-all duration-200 cursor-pointer`;
  const classes = `${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${className}`;

  const content = (
    <>
      {children}
      {showArrow && <ArrowRight className="w-4 h-4" />}
    </>
  );

  if (as === "a") {
    const { as: _as, variant: _v, size: _s, showArrow: _sa, children: _c, ...rest } =
      props as ButtonAsLink;
    return (
      <a
        className={classes}
        {...(rest as React.AnchorHTMLAttributes<HTMLAnchorElement>)}
      >
        {content}
      </a>
    );
  }

  if (as === "link") {
    const { href } = props as ButtonAsNextLink;
    return (
      <Link href={href} className={classes}>
        {content}
      </Link>
    );
  }

  const { as: _as, variant: _v, size: _s, showArrow: _sa, children: _c, ...rest } =
    props as ButtonAsButton;
  return (
    <button
      className={classes}
      {...(rest as React.ButtonHTMLAttributes<HTMLButtonElement>)}
    >
      {content}
    </button>
  );
}
