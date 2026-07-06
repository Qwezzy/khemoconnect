import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Toaster } from "sonner";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});

const siteUrl = "https://www.khemoconnect.co.za";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "KhemoConnect | GEO, AI Webpages & Day-One Automation | Gauteng",
  description: "We don't just get you on Google, we get your business cited and recommended by AI engines. Hyper-personalized AI webpages and Day-One automation pipelines, powered by scalable AI-optimized hosting. For startups, scale-ups & local SMEs in South Africa.",
  icons: {
    icon: [
      { url: "/New_KhemoConnect_Logo.png", sizes: "32x32", type: "image/png" },
      { url: "/New_KhemoConnect_Logo.png", sizes: "180x180", type: "image/png" },
    ],
    shortcut: "/New_KhemoConnect_Logo.png",
    apple: "/New_KhemoConnect_Logo.png",
  },
  alternates: {
    canonical: siteUrl,
  },
  openGraph: {
    title: "KhemoConnect - From SEO to GEO. AI Webpages. Automation from Day One.",
    description: "Generative Engine Optimization (GEO), dynamic personalized websites, and bundled AI automation pipelines. Built on our own scalable hosting stack for Gauteng startups, scale-ups and SMEs.",
    url: siteUrl,
    images: [{ url: "/New_KhemoConnect_Logo.png" }],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // Base Organization + Service JSON-LD (GEO + AI Webpages + Automation) for strong generative engine signals
  const orgJsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "KhemoConnect",
    url: siteUrl,
    logo: `${siteUrl}/New_KhemoConnect_Logo.png`,
    description: "KhemoConnect (division of Khemo IT Solutions) builds AI-optimized websites, hyper-personalized webpages, and Day-One automation pipelines for South African startups, scale-ups and SMEs. Specialists in Generative Engine Optimization (GEO).",
    areaServed: "Gauteng, South Africa",
    foundingDate: "2008",
    contactPoint: {
      "@type": "ContactPoint",
      contactType: "sales",
      areaServed: "ZA",
    },
  };

  const serviceJsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: "Generative Engine Optimization, AI Webpages & Automation Pipelines",
    provider: { "@type": "Organization", name: "KhemoConnect" },
    areaServed: "South Africa",
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "KhemoConnect 2026 Packages",
      itemListElement: [
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "GEO Launch" } },
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "AI Webpages & Hyper-Personalization" } },
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "Day-One AI Automation Packages" } },
      ],
    },
  };

  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-white text-[#111]">
        {children}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(orgJsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceJsonLd) }}
        />
        <Toaster position="top-center" richColors closeButton />
      </body>
    </html>
  );
}
