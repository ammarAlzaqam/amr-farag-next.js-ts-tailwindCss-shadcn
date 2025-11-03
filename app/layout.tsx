import type { Metadata } from "next";
import { Poppins, Inter, Manrope } from "next/font/google";
import "./globals.css";
import Header from "@/components/bars/header";
import FixedUpButton from "@/components/shared/FixedUpButton";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  variable: "--font-poppins",
});

const manrope = Manrope({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  variable: "--font-manrope",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "AMRFARAG Building Global Partnerships with Trust & Expertise!",
  description:
    "Authentic commercial trading, strategic brokerage. and human-driven growth connecting businesses worldwide.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${poppins.variable} ${inter.variable} ${manrope.variable} overflow-x-hidden min-h-dvh`}
      >
        <Header />
        {children}
        <FixedUpButton />
      </body>
    </html>
  );
}
