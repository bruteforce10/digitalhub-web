import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "DigitalLive Hub",
  description:
    "mempromosikan usaha Anda menggunakan platform digital dan media sosial sebagai alat pemasaran inovatif",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-gray-50/50`}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
