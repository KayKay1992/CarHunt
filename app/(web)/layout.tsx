import Navbar from "@/components/Navbar";
import React from "react";

function WebLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="w-full">
      <div className="flex flex-col w-full h-auto">
        <Navbar/>
        <main>{children}</main>
      </div>
    </div>
  );
}

export default WebLayout;
