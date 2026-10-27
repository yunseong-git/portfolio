import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "정윤성 | Backend Developer",
  description: "NestJS, TypeScript, PostgreSQL and AWS focused backend developer portfolio.",
  openGraph: { title: "Yunseong Jeong — Backend Developer", description: "NestJS, TypeScript, PostgreSQL and AWS focused backend developer portfolio.", type: "website" },
};
export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="ko"><body>{children}</body></html>;
}
