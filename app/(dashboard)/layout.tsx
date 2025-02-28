import React from "react";

function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="flex flex-col w-full h-auto">
      <main>{children}</main>
    </div>
  );
}

export default DashboardLayout;
