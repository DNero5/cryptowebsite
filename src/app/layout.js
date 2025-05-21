import { Outfit } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar"; // ✅ Adjust the path as needed
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
});

export const metadata = {
  title: "Top Market",
  description: "website",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${outfit.variable} antialiased`}>
       
        {children}
      </body>
    </html>
  );
}
