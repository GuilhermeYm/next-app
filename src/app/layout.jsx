import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600", "700"],
});

export const metadata = {
  title: "Next App Template",
  description: "This a simple website template for Next.js.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-br">
      <body className={` ${inter.variable} antialiased`}>{children}</body>
    </html>
  );
}
