import localFont from "next/font/local";



export const ppe = localFont({
  src: [
    {
      path: "./PPEditorialNew-Italic.otf",
      weight: "300",
      style: "normal",
    },
    {
      path: "./PPEditorialNew-Regular.otf",
      weight: "400",
      style: "normal",
    },
    {
      path: "./PPEditorialNew-Ultrabold.otf",
      weight: "500",
      style: "normal",
    },
    {
      path: "./PPEditorialNew-UltraboldItalic.otf",
      weight: "700",
      style: "normal",
    },
  ],
  variable: "--font-ppe",
});

