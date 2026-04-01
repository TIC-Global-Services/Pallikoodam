import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/reuseable/navbar";
import Footer from "@/components/reuseable/footer";
import { ppe } from '@/font'
import SmoothScroller from "@/layout/SmoothScroller";
import Loader from "@/components/reuseable/Loader";
import { LoadingProvider } from "@/context/LoadingContext";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});




  export const metadata: Metadata = {
    title: "RAKS Pallikoodam",
    description: "RAKS Pallikoodam",
  };

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} ${ppe.variable} antialiased`}
        suppressHydrationWarning
      >
        <LoadingProvider>
          {/* <Loader /> */}
          <SmoothScroller>
            <Navbar />
            {children}
            <Footer />
          </SmoothScroller>
        </LoadingProvider>
      </body>
    </html>
  );
}
