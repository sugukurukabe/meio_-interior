import type { Metadata } from "next";
import { Noto_Sans_JP, Shippori_Mincho } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const notoSansJP = Noto_Sans_JP({
  variable: "--font-noto-sans-jp",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const shipporiMincho = Shippori_Mincho({
  variable: "--font-shippori-mincho",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "有限会社明王インテリア | 名古屋の内装仕上げ専門会社",
    template: "%s | 有限会社明王インテリア",
  },
  description:
    "名古屋・東海エリアの内装仕上げ専門会社。オフィス・店舗・公共施設の天井・壁・床工事をワンストップで対応。愛知県知事許可 第102156号取得。お見積もり無料。",
  keywords: [
    "内装工事",
    "名古屋",
    "内装仕上げ",
    "オフィス内装",
    "店舗内装",
    "天井工事",
    "クロス工事",
    "床工事",
    "LGS工事",
    "愛知県",
  ],
  authors: [{ name: "有限会社明王インテリア" }],
  creator: "有限会社明王インテリア",
  publisher: "有限会社明王インテリア",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://meio-interior.vercel.app"),
  openGraph: {
    title: "有限会社明王インテリア | 名古屋の内装仕上げ専門会社",
    description:
      "名古屋・東海エリアの内装仕上げ専門会社。オフィス・店舗・公共施設の天井・壁・床工事をワンストップで対応。",
    url: "https://meio-interior.vercel.app",
    siteName: "有限会社明王インテリア",
    locale: "ja_JP",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "有限会社明王インテリア | 名古屋の内装仕上げ専門会社",
    description:
      "名古屋・東海エリアの内装仕上げ専門会社。オフィス・店舗・公共施設の天井・壁・床工事をワンストップで対応。",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body
        className={`${notoSansJP.variable} ${shipporiMincho.variable} antialiased`}
      >
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
