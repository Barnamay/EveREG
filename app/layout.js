
// app/layout.js or layout.tsx
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SessionWraper from "@/components/SessionWraper";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "REGISTRATION FOR EVENT",
  description: "This Web Page Is For Event Registration",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-black text-white`}
      >
        <SessionWraper>
          <div className="flex flex-col min-h-screen">
            <Navbar />

            <main className="flex-grow [background-image:radial-gradient(125%_125%_at_50%_10%,#000_40%,#63e_100%),repeating-linear-gradient(to_right,#321975_0px,#321975_0.1px,transparent_1px,transparent_50px),repeating-linear-gradient(to_bottom,#2E1D61_0px,#2E1D61_0.1px,transparent_1px,transparent_70px)] [background-blend-mode:screen]">
              {children}
            </main>

            <Footer />
          </div>
        </SessionWraper>
      </body>
    </html>
  );
}
