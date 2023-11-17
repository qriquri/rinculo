"use client";
import { Inter } from "next/font/google";
import "./globals.css";
import { StyledEngineProvider } from "@mui/material";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {/* VercelにデプロイしたときにUIが崩れるのを防ぐため、
        module.cssで書いた内容が優先されるようにする */}
        <StyledEngineProvider injectFirst>{children}</StyledEngineProvider>
      </body>
    </html>
  );
}
