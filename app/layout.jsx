import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Head from "next/head";
import { Toaster } from "@/components/ui/toaster";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Digital Live Hub - Solusi Tepat Tingkatkan Pemasaran Digital",
  description:
    "Kembangkan pemasaran digital melalui studio live dengan fasilitas lengkap, layanan sosial media dan market place management untuk tingkatkan bisnis online Anda.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Head>
        <meta
          name="google-site-verification"
          content="hxnMj-3zriXskzSJKwvJpAgsTvMUm5OCoYY2EhUwUAo"
        />
      </Head>
      <body className={`${inter.className} bg-gray-50/50`}>
        <Navbar />
        {children}
        <Footer />
        <Toaster />
      </body>
    </html>
  );
}
