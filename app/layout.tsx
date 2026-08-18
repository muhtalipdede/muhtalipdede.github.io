import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], display: "swap" });

const siteUrl = "https://muhtalipdede.github.io";

export const viewport: Viewport = {
  themeColor: "#09090b",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Muhtalip Dede | Senior Backend Engineer & Mathematical Engineer",
    template: "%s | Muhtalip Dede",
  },
  description:
    "Senior Backend Engineer with 8+ years of experience specializing in C#, TypeScript, Python, microservices architecture, and cloud technologies. Mathematical Engineer building scalable systems across FinTech, SaaS, IoT and Travel industries.",
  keywords: [
    "Senior Backend Engineer",
    "Software Engineer",
    "Mathematical Engineer",
    "C#",
    ".NET",
    "TypeScript",
    "Python",
    "Microservices",
    "Cloud Architecture",
    "AWS",
    "GCP",
    "Azure",
    "Kubernetes",
    "Docker",
    "Muhtalip Dede",
  ],
  authors: [{ name: "Muhtalip Dede", url: siteUrl }],
  creator: "Muhtalip Dede",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteUrl,
    siteName: "Muhtalip Dede",
    title: "Muhtalip Dede | Senior Backend Engineer",
    description:
      "Senior Backend Engineer with 8+ years of experience building scalable systems with C#, TypeScript, Python, and cloud technologies.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Muhtalip Dede | Senior Backend Engineer",
    description:
      "Senior Backend Engineer with 8+ years of experience building scalable systems with C#, TypeScript, Python, and cloud technologies.",
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
  alternates: {
    canonical: siteUrl,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Muhtalip Dede",
    url: siteUrl,
    jobTitle: "Senior Backend Engineer",
    email: "muhtalipdede@gmail.com",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Tekirdağ",
      addressCountry: "TR",
    },
    alumniOf: {
      "@type": "CollegeOrUniversity",
      name: "Yıldız Technical University",
    },
    sameAs: [
      "https://github.com/muhtalipdede",
      "https://linkedin.com/in/muhtalipdede",
      "https://medium.com/@muhtalipdede",
      "https://thecoderverse.com",
    ],
    knowsAbout: [
      "C#",
      ".NET",
      "TypeScript",
      "Python",
      "Microservices",
      "Cloud Architecture",
      "Kubernetes",
      "Docker",
    ],
  };

  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
