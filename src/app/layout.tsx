import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "../components/navbar";
import Script from "next/script";
import Footer from "../components/footer";
import { ResourceProvider } from "@/context/ResourceContext";
import { Open_Sans } from "next/font/google";
import { SimpleFooterWithFourGrids } from "@/components/new-footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const openSans = Open_Sans({
  subsets: ["latin"],
  weight: ["400", "700", "800"], // specify weights you need
});

export const metadata: Metadata = {
  title: "Modern iOS Bootcamp",
  description: "Apple'ın en güncel teknolojileri ve SwiftUI framework'ü ile iOS geliştirme dünyasına adım atın. Modern ve kullanıcı dostu uygulamalar geliştirmenin sırlarını keşfedin!",
  robots: {
    index: true,
    follow: true,
  },
  keywords: [
    "Developer",
    "MultiGroup",
    "Developer MultiGroup",
    "DMG",
    "Etkinlik",
    "Bootcamp",
    "Yazılım",
    "Yazılım Etkinliği",
    "Topluluk",
    "Yazılım Topluluğu",
    "Eğitim",
    "iOS",
    "Apple",
    "SwiftUI",
    "Modern iOS Bootcamp",
    "Youtube Bootcamp",
    "Video Bootcamp",
    "Online Bootcamp"
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <Script
          defer
          src="https://cloud.umami.is/script.js"
          data-website-id={process.env.UMAMI_PROJECT_ID}
        ></Script>
      </head>
      <body className="font-montserrat">
        <ResourceProvider>
          <Navbar />
          {children}
          <SimpleFooterWithFourGrids />
        </ResourceProvider>
      </body>
    </html>
  );
}
