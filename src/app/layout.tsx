import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";

export const metadata: Metadata = {
  title: "Dr. Serena Blake, PsyD | Psychological Services",
  description: "Compassionate therapy for adults in Los Angeles & online.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        <Navbar />
        <div>
          {children}
        </div>
      </body>
    </html>
  );
}
