import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "カーリース比較サイト | あなたに最適なカーリースを見つけよう",
  description: "予算・車種・ライフスタイルから最適なカーリースプランを30秒で診断。",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ja">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Noto+Sans+JP:wght@400;500;700;900&family=Montserrat:wght@700;900&display=swap" rel="stylesheet" />
      </head>
      <body>{children}</body>
    </html>
  );
}
