import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Muhammad Arif Billah | Portfolio",
  description:
    "Personal portfolio of Muhammad Arif Billah — System Information Student, Network Security Enthusiast, and Frontend Developer at Telkom University.",
  keywords: [
    "Muhammad Arif Billah",
    "Portofolio",
    "Frontend Developer",
    "Network Security",
    "Telkom University",
  ],
  authors: [{ name: "Muhammad Arif Billah" }],
  openGraph: {
    title: "Muhammad Arif Billah | Portfolio",
    description:
      "System Information Student | Network Security Enthusiast | Frontend Developer | UI/UX Designer",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id" suppressHydrationWarning>
      <body
        className={`${inter.variable} font-sans antialiased bg-white dark:bg-slate-900 text-slate-900 dark:text-white`}
        suppressHydrationWarning
      >
        <ThemeProvider>
          {/* Global IT/Tech Background Layer */}
          <div className="fixed inset-0 z-[-2] bg-slate-50 dark:bg-[#020617] pointer-events-none" />
          
          {/* Dot Matrix Layer */}
          <div
            className="fixed inset-0 z-[-1] opacity-[0.05] dark:opacity-[0.15] pointer-events-none"
            style={{
              backgroundImage: "radial-gradient(rgb(59, 130, 246) 1.5px, transparent 1.5px)",
              backgroundSize: "32px 32px",
            }}
          />

          {/* Scanline / CRT Effect Layer */}
          <div
            className="fixed inset-0 z-[-1] opacity-[0.02] dark:opacity-[0.04] pointer-events-none bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.25)_50%),linear-gradient(90deg,rgba(255,0,0,0.06),rgba(0,255,0,0.02),rgba(0,0,255,0.06))] bg-[length:100%_4px,4px_100%]"
          />

          {/* Animated Glow in background */}
          <div className="fixed inset-0 z-[-1] overflow-hidden pointer-events-none">
            <div className="absolute -top-[10%] -left-[10%] w-[40%] h-[40%] rounded-full bg-blue-500/10 blur-[120px] dark:bg-blue-600/5" />
            <div className="absolute top-[20%] -right-[10%] w-[35%] h-[35%] rounded-full bg-cyan-500/10 blur-[120px] dark:bg-cyan-600/5" />
          </div>

          <div className="relative z-0">
            {children}
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
