import "./globals.css";

import Footer from "@/components/footer";
import type { Metadata } from "next";
import ModalProvider from "@/providers/modal-provider";
import NavBar from "@/components/navbar";
import NextTopLoader from "nextjs-toploader";
import ToastProvider from "@/providers/toast-provider";
import { Urbanist } from "next/font/google";

const font = Urbanist({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Store",
  description: "Next Generation E-Commerce",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={font.className}>
        <NextTopLoader
          color="#141314"
          initialPosition={0.08}
          crawlSpeed={200}
          height={6}
          crawl={true}
          showSpinner={true}
          easing="ease"
          speed={200}
          shadow="0 0 40px #141314,0 0 50px #130B13"
        />
        <ModalProvider />
        <ToastProvider />
        <NavBar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
