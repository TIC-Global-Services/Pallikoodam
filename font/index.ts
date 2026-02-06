import localFont from "next/font/local";


export const ppe = localFont({
  src: [
    {
      path: "./PPEditorialNew-Italic.otf",
      weight: "300",
      style: "light",
    },
    {
      path: "./PPEditorialNew-Regular.otf",
      weight: "400",
      style: "regular",
    },
    {
      path: "./PPEditorialNew-Ultrabold.otf",
      weight: "500",
      style: "ultrabold",
    },
    {
      path: "./PPEditorialNew-UltraboldItalic.otf",
      weight: "700",
      style: "ultrabold-italic",
    },
  ],
  variable: "--font-ppe",
});

