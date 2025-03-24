import type { Metadata } from "next";
import { Fira_Code } from "next/font/google";
import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
const firaCode = Fira_Code({
  variable: "--font-fira-code", // Store the font in a CSS variable
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"], // Specify available weights
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${firaCode.variable} antialiased`}>
        <div className="max-w-screen-xl mx-auto bg-background min-h-screen">
          <div className="h-[--header-height] [--header-height:56px]">
            <Header />
          </div>
          <div className="min-h-[calc(100vh-152px)]">
            {children}
          </div>
          <div className="h-[--footer-height] [--footer-height:96px]">
            <Footer />
          </div>
        </div>
      </body>
    </html>
  );
}
