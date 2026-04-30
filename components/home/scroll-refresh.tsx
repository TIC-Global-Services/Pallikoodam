"use client";

import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function ScrollRefresh() {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    
    const handleRefresh = () => {
      ScrollTrigger.refresh();
    };
    
    document.fonts?.ready.then(handleRefresh);
    window.addEventListener("load", handleRefresh);
    
    return () => window.removeEventListener("load", handleRefresh);
  }, []);

  return null;
}
