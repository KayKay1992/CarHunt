import type { Metadata } from "next";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";



export const metadata: Metadata = {
  title: "CarHunt",
  description: "Buy and Sale your Car",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`bg-[#ebf2f7]antialiased`}
      >
        {children}
        <Toaster/>
      </body>
    </html>
  );
}
