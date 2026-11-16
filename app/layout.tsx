import type { Metadata, Viewport } from "next";
import { Libre_Baskerville, Source_Serif_4, Source_Sans_3 } from "next/font/google";
import "./globals.css";

const libreBaskerville = Libre_Baskerville({
  subsets: ["latin"],
  weight: ["400", "700"],
  display: "swap",
  variable: "--font-display",
});

const sourceSerif = Source_Serif_4({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-serif",
});

const sourceSans = Source_Sans_3({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-sans",
});

const siteUrl = "https://muhtalipdede.github.io";

export const viewport: Viewport = {
  themeColor: "#faf8f4",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Muhtalip Dede | Senior Software Engineer",
    template: "%s | Muhtalip Dede",
  },
  description:
    "Senior Software Engineer at Wingie Enuygun Group. Mathematical Engineer building scalable backend systems, open-source AI tooling, and mobile apps.",
  keywords: [
    "Senior Software Engineer",
    "Wingie Enuygun Group",
    "Mathematical Engineer",
    "C#",
    ".NET",
    "TypeScript",
    "Python",
    "Kubernetes",
    "Coppergate",
    "kprompt",
    "Muhtalip Dede",
  ],
  authors: [{ name: "Muhtalip Dede", url: siteUrl }],
  creator: "Muhtalip Dede",
  icons: {
    icon: [{ url: "/favicon.ico", sizes: "any" }],
    apple: [{ url: "/apple-touch-icon.png", sizes: "180x180" }],
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteUrl,
    siteName: "Muhtalip Dede",
    title: "Muhtalip Dede | Senior Software Engineer",
    description:
      "Senior Software Engineer at Wingie Enuygun Group. Open source: Coppergate, kprompt. Independent apps on App Store and Google Play.",
    images: [{ url: "/muhtalipdede.png" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Muhtalip Dede | Senior Software Engineer",
    description:
      "Senior Software Engineer at Wingie Enuygun Group. Open source: Coppergate, kprompt.",
    images: ["/muhtalipdede.png"],
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
    image: `${siteUrl}/muhtalipdede.png`,
    jobTitle: "Senior Software Engineer",
    worksFor: {
      "@type": "Organization",
      name: "Wingie Enuygun Group",
      url: "https://www.wingie.com/",
    },
    email: "muhtalipdede@gmail.com",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Istanbul",
      addressCountry: "TR",
    },
    alumniOf: {
      "@type": "CollegeOrUniversity",
      name: "Yıldız Technical University",
    },
    sameAs: [
      "https://github.com/muhtalipdede",
      "https://linkedin.com/in/muhtalipdede",
      "https://x.com/muhtalipdede",
      "https://muhtalipdede.medium.com/",
      "https://thecoderverse.com",
      "https://coppergate.ai",
      "https://kprompt.ai",
    ],
    knowsAbout: [
      "C#",
      ".NET",
      "TypeScript",
      "Python",
      "Go",
      "Kubernetes",
      "Microservices",
      "Cloud Architecture",
    ],
  };

  return (
    <html
      lang="en"
      className={`${libreBaskerville.variable} ${sourceSerif.variable} ${sourceSans.variable} scroll-smooth`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="font-serif antialiased">{children}</body>
    </html>
  );
}
