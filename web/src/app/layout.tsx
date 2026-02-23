import type { Metadata } from "next";
import { Inter, Geist_Mono } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "KhemoConnect | Digital Transformation & Automation Partner",
  description: "Enterprise-grade Website-as-a-Service and AI Automation designed for South African SMEs. Secure, POPIA-compliant, and fully managed to save you time and maximize ROI.",
  openGraph: {
    title: "KhemoConnect | Digital Transformation & Automation Partner",
    description: "Enterprise-grade Website-as-a-Service and AI Automation designed for South African SMEs.",
    url: "https://khemoconnect.com",
    siteName: "KhemoConnect",
    locale: "en_ZA",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "KhemoConnect | Digital Transformation & Automation Partner",
    description: "Enterprise-grade Website-as-a-Service and AI Automation designed for South African SMEs.",
  },
  robots: {
    index: true,
    follow: true,
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} ${geistMono.variable} antialiased flex flex-col min-h-screen`}
      >
        {/* Google Analytics Placeholder */}
        <Script
          strategy="afterInteractive"
          src={`https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX`}
        />
        <Script
          id="google-analytics"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-XXXXXXXXXX', {
                page_path: window.location.pathname,
              });
            `,
          }}
        />
        <Header />
        <div className="flex-grow">
          {children}
        </div>
        <Footer />
      </body>
    </html>
  );
}
