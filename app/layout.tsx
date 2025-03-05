import type { Metadata } from "next";
import "./globals.css";
import { NuqsAdapter } from "nuqs/adapters/next/app";
import { Toaster } from "@/components/ui/toaster";
import RegisterDialog from "@/components/auth/RegisterDialog";
import LoginDialog from "@/components/auth/LoginDialog";
import QueryProvider from "@/context/query-provider";

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
      <body className={`bg-[#ebf2f7]antialiased`}>
        <QueryProvider>
          <NuqsAdapter>
            <RegisterDialog />
            <LoginDialog />
            {children}
          </NuqsAdapter>

          <Toaster />
        </QueryProvider>
      </body>
    </html>
  );
}
