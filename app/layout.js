import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";

export const metadata = {
  title: "Mohith Singh",
  description: "Portfolio website",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <link href="/m.png" rel="icon" className="rounded-full" />
        <Navbar />
        {children}
      </body>
    </html>
  );
}
