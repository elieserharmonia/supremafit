import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "SUPREMA FIT App",
  description: "App social fitness da SUPREMA FIT ACADEMIA"
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  );
}
