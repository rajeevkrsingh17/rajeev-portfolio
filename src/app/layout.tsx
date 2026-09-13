import type { Metadata } from "next";
import { Space_Grotesk, Inter, IBM_Plex_Mono } from "next/font/google";
import "./globals.css";
import SmoothScroll from "@/components/providers/SmoothScroll";
import { ThemeProvider } from "@/components/providers/ThemeProvider";
import GrainOverlay from "@/components/ui/GrainOverlay";
import FloatingScrollButton from "@/components/ui/FloatingScrollButton";

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
});

const ibmPlexMono = IBM_Plex_Mono({
  variable: "--font-ibm-plex-mono",
  subsets: ["latin"],
  weight: ["400", "500"],
});

export const metadata: Metadata = {
  title: "Rajeev Kumar — Portfolio",
  description:
    "Portfolio of Rajeev Kumar. AI & Data Engineering student, RAG architect, FastAPI backend & full-stack software developer.",
  keywords: [
    "Rajeev Kumar",
    "AI Systems",
    "Data Engineering",
    "FastAPI",
    "RAG",
    "Next.js",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${spaceGrotesk.variable} ${inter.variable} ${ibmPlexMono.variable} dark scroll-smooth`}
    >
      <body className="bg-[#09090B] text-[#F3F3F2] font-sans antialiased selection:bg-[#B38A64] selection:text-[#09090B] relative min-h-screen transition-colors duration-300">
        <ThemeProvider>
          <SmoothScroll>
            <GrainOverlay />
            {children}
            <FloatingScrollButton />
          </SmoothScroll>
        </ThemeProvider>
      </body>
    </html>
  );
}
