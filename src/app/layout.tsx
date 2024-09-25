import type { Metadata } from "next";
import { Inter, Figtree, Squada_One } from "next/font/google";
import "./globals.css";
import { ChakraProvider } from "@chakra-ui/react";

// const inter = Inter({ subsets: ["latin"] });

const figtree = Figtree({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
});

// export const squadaOne = Squada_One({
//   subsets: ["latin"],
//   weight: ["400"],
// });

export const metadata: Metadata = {
  title: "under40ceos",
  description: "Under 40 CEOs",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className={figtree.className}>
        <ChakraProvider>{children}</ChakraProvider>
      </body>
    </html>
  );
}

// export default function RootLayout({
//   children,
// }: Readonly<{
//   children: React.ReactNode;
// }>) {
//   return (
//     <html lang="en">
//       <body className={figtree.className}>{children}</body>
//     </html>
//   );
// }
