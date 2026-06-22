import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import NavBar from "./NavBar";
import { SessionProvider } from "next-auth/react";
import AuthProvider from "./api/auth/Provider";
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
     > 
     
      <body className="min-h-full flex flex-col"> 
         <AuthProvider>
         <NavBar/>
         {children}</AuthProvider>
       
      </body>
    </html>
  );
}
