import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/component/Navbar";
import Footer from "@/component/Footer";

export const metadata = {
  title: "HireMe",
  description: "Made my tuli saima papiya oishi",
};

export default function RootLayout({ children }) {
  return (
    <html
   
    >
      <body>
        <Navbar></Navbar>{children}
        <Footer></Footer></body>
    </html>
  );
}
