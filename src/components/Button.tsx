import { ReactNode } from "react";
import Link from "next/link";

interface ButtonProps {
  children: ReactNode;
  href?: string;
  onClick?: () => void;
  className?: string;
  type?: "button" | "submit" | "reset";
}

export default function Button({ children, href, onClick, className = "", type = "button" }: ButtonProps) {
  const base =
    "inline-block bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded transition-colors focus:outline-none focus:ring-2 focus:ring-blue-400";
  if (href) {
    return (
      <Link href={href} className={`${base} ${className}`}>
        {children}
      </Link>
    );
  }
  return (
    <button type={type} onClick={onClick} className={`${base} ${className}`}>
      {children}
    </button>
  );
}
