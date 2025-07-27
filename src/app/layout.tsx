import type { Metadata } from "next";
import { Fira_Code } from "next/font/google";
import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { ThemeProvider } from "./components/ThemeProvider";
import LenisProvider from "./components/LenisProvider";

const firaCode = Fira_Code({
  variable: "--font-fira-code",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Parth Sharma - Web Designer & Frontend Developer",
  description: "Portfolio of Parth Sharma, a passionate web designer and frontend developer from Kangra, H.P, India. Specializing in responsive websites and modern web experiences.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="smooth-scroll">
      <body className={`${firaCode.variable} antialiased`}>
        <LenisProvider>
          <ThemeProvider>
            <div className="bg-background min-h-screen">
              <Header />
              <main className="pt-20">
                {children}
              </main>
              <Footer />
            </div>
          </ThemeProvider>
        </LenisProvider>
      </body>
    </html>
  );
}
