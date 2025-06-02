import type { Metadata } from "next";
import { Abril_Fatface, Bebas_Neue, Oswald, Poppins } from "next/font/google";
import "./globals.css";

import Navbar from "./components/navbar";

const poppins = Oswald({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Langford Barbershop",
  description: "Barbershop in Langford, BC",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${poppins.className} antialiased `}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
