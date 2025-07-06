import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "InstaPocket",
  description: "Rede social de fotos usando Unsplash API",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className="min-h-screen bg-gray-100">{children}</body>
    </html>
  );
}
