import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/sonner";


export const metadata: Metadata = {
  title: "WildNigeria",
  description: "Created by Lucky Elliot",
};

const poppins = Poppins({
  subsets: ["latin"], weight: ["400", "500", "600", "700"]})

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${poppins.className} antialiased`}
      >
        {children}
        <Toaster />
      </body>
    </html>
  );
}
