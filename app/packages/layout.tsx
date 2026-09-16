import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Pricing & Packages | KhemoConnect — Web Development & Enterprise IT",
  description:
    "Explore KhemoConnect's commercial pricing: Web Development packages from R4,500, Monthly Care Plans from R850/mo, and Enterprise Microsoft 365 / SharePoint solutions. Build a custom proposal instantly.",
  alternates: {
    canonical: "https://www.khemoconnect.co.za/packages",
  },
  openGraph: {
    title: "KhemoConnect Pricing & Interactive Proposal Builder",
    description:
      "Web packages, monthly care plans, and enterprise M365 solutions for South African businesses. Configure your custom quote instantly.",
    url: "https://www.khemoconnect.co.za/packages",
  },
};

export default function PackagesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
