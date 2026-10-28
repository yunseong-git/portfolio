import type { Metadata } from "next";
import { IBM_Plex_Mono } from "next/font/google";
import "./globals.css";

const ibmPlexMono = IBM_Plex_Mono({ subsets: ["latin"], weight: "400", variable: "--font-ibm-plex-mono", display: "swap" });

export const metadata: Metadata = {
  title: "정윤성 | Backend Developer",
  description: "NestJS, TypeScript, PostgreSQL and AWS focused backend developer portfolio.",
  openGraph: { title: "Yunseong Jeong — Backend Developer", description: "NestJS, TypeScript, PostgreSQL and AWS focused backend developer portfolio.", type: "website" },
};
export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="ko"><body className={ibmPlexMono.variable}>{children}</body></html>;
}
