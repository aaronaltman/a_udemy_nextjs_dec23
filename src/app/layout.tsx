import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/header";
import HomeSidebar from "@/components/home-sidebar";
import Container from "@/components/container";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <Container>
        <body className={inter.className}>
          <HomeSidebar>{children}</HomeSidebar>
        </body>
      </Container>
    </html>
  );
}
