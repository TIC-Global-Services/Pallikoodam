import React, { useEffect, useRef } from "react";

interface SineWaveProps {
  isPlaying: boolean;
  isLightSection: boolean;
}

const AudioWave = ({ isPlaying, isLightSection }: SineWaveProps) => {
  const pathRef = useRef<SVGPathElement>(null);
  const animationIdRef = useRef<number>(0);
  const phaseRef = useRef(0);

  useEffect(() => {
    // Wave Configuration
    const width = 200;      // SVG internal width
    const height = 100;     // SVG internal height
    const amplitude = 40;   // Height of the wave peaks
    const frequency = 0.14; // Tightness of the loops
    const speed = 0.15;     // Animation speed
    const points = 120;      // Higher = smoother curve

    const draw = () => {
      if (!pathRef.current) return;

      // Only animate phase if playing
      if (isPlaying) {
        phaseRef.current += speed;
      }

      // Start the SVG path
      let pathData = `M 0 ${height / 2}`;

      for (let i = 0; i <= points; i++) {
        const x = (i / points) * width;
        
        // 1. Basic Sine Wave Calculation
        const sineValue = Math.sin(x * frequency + phaseRef.current);

        // 2. Attenuation (Windowing)
        // This makes the wave flat at the ends and tall in the middle (Sine Window)
        const progress = i / points;
        const envelope = Math.sin(progress * Math.PI); 

        // 3. Final Y Position
        const y = (height / 2) + (sineValue * amplitude * envelope);

        pathData += ` L ${x} ${y}`;
      }

      pathRef.current.setAttribute("d", pathData);
      
      // Keep loop running to handle pause/play smoothness
      animationIdRef.current = requestAnimationFrame(draw);
    };

    draw();

    return () => {
      if (animationIdRef.current) cancelAnimationFrame(animationIdRef.current);
    };
  }, [isPlaying]);

  return (
   <svg width="30" height="12" viewBox="0 0 30 12" fill="none" xmlns="http://www.w3.org/2000/svg">
<path  d="M5.16256 2.52326e-05C6.98016 2.52326e-05 8.27436 0.720987 9.27586 1.78128C10.2535 2.81637 10.9579 4.18348 11.6236 5.4678C12.3048 6.78221 12.9478 8.01375 13.8111 8.92776C14.6506 9.81657 15.6913 10.3955 17.1968 10.3955C18.702 10.3955 19.7431 9.81662 20.5826 8.92776C21.4456 8.01381 22.0878 6.78202 22.7691 5.4678C23.4348 4.18345 24.14 2.81637 25.1177 1.78128C26.0876 0.754564 27.332 0.047751 29.0601 0.00393148V1.00393C27.6461 1.04621 26.6517 1.61305 25.8443 2.4678C24.9811 3.38168 24.339 4.61362 23.6578 5.92776C22.992 7.21212 22.2867 8.57916 21.3091 9.61428C20.3077 10.6746 19.014 11.3955 17.1968 11.3955C15.3793 11.3955 14.085 10.6746 13.0835 9.61428C12.106 8.57917 11.4015 7.21204 10.7359 5.92776C10.0547 4.61339 9.41156 3.38176 8.54836 2.4678C7.70886 1.57909 6.66806 1.00003 5.16256 1.00003C3.65706 1.00004 2.61546 1.579 1.77586 2.4678C0.912659 3.38176 0.269657 4.61349 -0.411642 5.92776C-1.07734 7.2121 -1.78174 8.57917 -2.75924 9.61428C-3.76064 10.6746 -5.05434 11.3955 -6.87154 11.3955C-8.68914 11.3955 -9.98337 10.6746 -10.9849 9.61428C-11.9624 8.57917 -12.6669 7.21205 -13.3325 5.92776C-14.0137 4.61339 -14.6568 3.38176 -15.52 2.4678C-16.3595 1.57908 -17.4003 1.00003 -18.9058 1.00003C-18.9172 1.00003 -18.9286 0.999959 -18.9399 1.00003V2.52326e-05C-18.9286 -3.15534e-05 -18.9172 2.5258e-05 -18.9058 2.52326e-05C-17.0882 2.52326e-05 -15.794 0.720987 -14.7925 1.78128C-13.8149 2.81637 -13.1105 4.18348 -12.4448 5.4678C-11.7636 6.78221 -11.1206 8.01375 -10.2573 8.92776C-9.41782 9.81656 -8.37714 10.3955 -6.87154 10.3955C-5.36644 10.3955 -4.32534 9.81662 -3.48584 8.92776C-2.62284 8.01381 -1.98054 6.78202 -1.29934 5.4678C-0.633541 4.18344 0.071558 2.81638 1.04936 1.78128C2.05096 0.721014 3.34506 3.7332e-05 5.16256 2.52326e-05Z" fill="#000086"/>
</svg>
  );
};

export default AudioWave;