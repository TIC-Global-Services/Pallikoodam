"use client";

import { forwardRef } from "react";
import gsap from "gsap";
import { Menu } from "lucide-react";
import { useEffect, useRef } from "react";

interface MenuIconProps {
  isOpen: boolean;
  onClick?: () => void;
}

export const MenuIcon = forwardRef<HTMLButtonElement, MenuIconProps>(
  ({ isOpen, onClick }, ref) => {
    const topLineRef = useRef<HTMLSpanElement>(null);
    const bottomLineRef = useRef<HTMLSpanElement>(null);

   
    return (
      <button
        ref={ref}
        onClick={onClick}
        aria-label="Menu"
        className={`
          relative p-3 flex items-center justify-center cursor-pointer z-50
          transition-colors duration-300 bg-[#000086] rounded-full
        `}
      >
        <Menu  className="text-white"/>
      </button>
    );
  }
);

MenuIcon.displayName = "MenuIcon";