import HashAndAnalyticsClient from "@/components/Client/HashAndAnalyticsClient";
import Footer from "@/components/Footer/Footer";
import Navbar from "@/components/Navbar/Navbar";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./archive.css";
import "./case-study.css";
import "./globals.css";
import "./index.css";
import "./main.css";
import "./static.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Jaden Stock - Portfolio",
  description:
    "Jaden Stock is a web developer based in South Africa. He's skilled at building web applications and scaling online presences for business partners. He has experience in e-commerce, SaaS, and design.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <script
          defer
          src="https://metrics.puddle.co.za/script.js"
          data-website-id={"df989e35-26db-4cb1-bcb9-bdf4dacf077d"}
        ></script>
        <HashAndAnalyticsClient />
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
