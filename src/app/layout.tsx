import type { Metadata } from "next";
import { Inter, Figtree } from "next/font/google";
import "./globals.css";

// const inter = Inter({ subsets: ["latin"] });

const figtree = Figtree({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "under40ceos",
  description: "Under 40 CEOs",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={figtree.className}>{children}</body>
    </html>
  );
}
