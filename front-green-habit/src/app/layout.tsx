import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

import Header from "@/components/Header"
import Navbar from "@/components/Navbar"

import ProfileIcon from "@/assets/ProfileIcon";
import SalesIcon from "@/assets/SalesIcon";
import HomeIcon from "@/assets/HomeIcon";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

const navItems = [
  { path: "/dashboard", label: "Dashboard", icon: <HomeIcon fill="black" width={15} height={15} /> },
  { path: "/sales", label: "Sales", icon: <SalesIcon fill="black" width={15} height={15} /> },
  { path: "/profile", label: "Profile", icon: <ProfileIcon fill="black" width={15} height={15} /> },
];

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <Header/>
        <main>
        <Navbar navItems={navItems}/>
        {children}
        </main>
        {/* {children} */}
      </body>
    </html>
  );
}
