import type { Metadata, Viewport } from "next";
import { Noto_Sans_Devanagari } from "next/font/google";
import "./globals.css";

const notoDevanagari = Noto_Sans_Devanagari({
  subsets: ["devanagari", "latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
  display: "swap",
  variable: "--font-noto-devanagari",
});

export const viewport: Viewport = {
  themeColor: "#0f4429",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export const metadata: Metadata = {
  metadataBase: new URL("https://modawasi-sarpanch.vercel.app"),
  title: "इकबाल खान भूरणान | सरपंच पद उम्मीदवार | ग्राम पंचायत मोड़ावासी, राजगढ़ (चूरू)",
  description:
    "ग्राम पंचायत मोड़ावासी (राजगढ़, चूरू, राजस्थान) से सरपंच पद के उम्मीदवार इकबाल खान भूरणान का आधिकारिक विकास संकल्प। मेरा गाँव मेरा परिवार मेरा संकल्प — एक सोच, एक प्रयास, मोड़ावासी का सर्वांगीण विकास।",
  keywords: [
    "इकबाल खान भूरणान",
    "इकबाल खान",
    "सरपंच उम्मीदवार",
    "ग्राम पंचायत मोड़ावासी",
    "मोड़ावासी राजगढ़",
    "चूरू राजस्थान",
    "पंचायत चुनाव",
    "विकास संकल्प",
    "मोड़ावासी ग्राम पंचायत",
  ],
  authors: [{ name: "इकबाल खान भूरणान" }],
  creator: "ग्राम पंचायत मोड़ावासी अभियान समिति",
  openGraph: {
    title: "इकबाल खान भूरणान | सरपंच उम्मीदवार | ग्राम पंचायत मोड़ावासी",
    description:
      "मेरा गाँव मेरा परिवार मेरा संकल्प — एक सोच, एक प्रयास, मोड़ावासी गाँव का सर्वांगीण विकास। राजगढ़, चूरू (राजस्थान)।",
    url: "https://modawasi-sarpanch.vercel.app",
    siteName: "इकबाल खान भूरणान - मोड़ावासी",
    locale: "hi_IN",
    type: "website",
    images: [
      {
        url: "/images/campaign-logo.jpg",
        width: 1200,
        height: 800,
        alt: "ग्राम पंचायत मोड़ावासी - इकबाल खान भूरणान सरपंच उम्मीदवार",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "इकबाल खान भूरणान | सरपंच पद उम्मीदवार मोड़ावासी",
    description:
      "मेरा गाँव मेरा परिवार मेरा संकल्प — एक सोच, एक प्रयास, मोड़ावासी गाँव का सर्वांगीण विकास।",
    images: ["/images/campaign-logo.jpg"],
  },
  icons: {
    icon: "/images/campaign-logo.jpg",
    apple: "/images/campaign-logo.jpg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="hi" className={`scroll-smooth ${notoDevanagari.variable}`}>
      <body className="min-h-screen bg-campaign-cream-100 font-sans text-campaign-charcoal-900 antialiased selection:bg-campaign-green-100 selection:text-campaign-green-900">
        {children}
      </body>
    </html>
  );
}
