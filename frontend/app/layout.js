import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "../components/Navbar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Service Request Board",
  description: "Mini full-stack assessment project",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} antialiased`}
    >
      <body className="bg-gray-100 text-gray-900">
        
        {/* Navbar */}
        <Navbar />

        {/* Main Content Wrapper */}
        <main className="flex-1 w-full max-w-6xl mx-auto px-4 py-6">
          {children}
        </main>

        {/* Optional Footer (clean touch) */}
        <footer className="text-center text-sm text-gray-400 py-4 border-t">
          © {new Date().getFullYear()} Service Request Board | Developed by Ijan Panditharathne
        </footer>

      </body>
    </html>
  );
}