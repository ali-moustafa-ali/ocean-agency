import type { Metadata } from "next";
import { Tajawal } from "next/font/google";
import "./globals.css";

const tajawal = Tajawal({
  subsets: ["arabic"],
  weight: ["300", "400", "500", "700", "800"],
  display: "swap",
  variable: "--font-tajawal",
});

export const metadata: Metadata = {
  title: "Ocean Agency | وكالة المحيط للسفر والسياحة",
  description:
    "نقدم لك تجربة سفر متكاملة ومريحة حول العالم - إصدار التأشيرات، حجز الطيران والفنادق، تنظيم البرامج السياحية",
  keywords: [
    "وكالة سفر",
    "سياحة",
    "تأشيرات",
    "حجز طيران",
    "حجز فنادق",
    "Ocean Agency",
  ],
  openGraph: {
    title: "Ocean Agency | وكالة المحيط للسفر والسياحة",
    description:
      "نقدم لك تجربة سفر متكاملة ومريحة حول العالم",
    type: "website",
    locale: "ar_SA",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ar" dir="rtl" className={`${tajawal.variable} h-full`}>
      <body className="min-h-full flex flex-col font-[family-name:var(--font-tajawal)] antialiased">
        {children}
      </body>
    </html>
  );
}
