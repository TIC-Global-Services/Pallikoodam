"use client";

import { Menu, X } from "lucide-react";
import { forwardRef } from "react";

interface MenuIconProps {
  isOpen: boolean;
  onClick?: () => void;
}

export const MenuIcon = forwardRef<HTMLButtonElement, MenuIconProps>(
  ({ isOpen, onClick }, ref) => {
    return (
      <button
        ref={ref}
        onClick={onClick}
        suppressHydrationWarning={true}
        aria-label={isOpen ? "Close Menu" : "Open Menu"}
        className={`
          relative md:px-6 md:py-2 py-2 px-2 flex items-center justify-center gap-2 cursor-pointer z-50
          transition-all duration-300 rounded
          ${isOpen ? 'bg-white text-black' : 'bg-[#000086] hover:bg-[#0c0cbc] text-white'}
        `}
      >
        <span className="font-medium text-sm md:text-base uppercase tracking-wide">
          {isOpen ? "CLOSE" : "MENU"}
        </span>
        {/* {isOpen && <span className="text-xl">:</span>} */}
      </button>
    );
  }
);

MenuIcon.displayName = "MenuIcon";