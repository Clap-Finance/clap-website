import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";
import Nav from "@/components/common/nav";
import Footer from "@/components/common/footer";

const interSans = Inter({
  variable: "--font-inter-sans",
  subsets: ["latin"],
  display: "swap",
});

const siteUrl = "https://clapmoney.com";

export const viewport: Viewport = {
  themeColor: "#2a53f1",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Clap — Instant Payments for Nigeria",
    template: "%s | Clap",
  },
  description:
    "Clap helps businesses and drivers receive money faster with instant transfers, QR payments, and seamless collections built for everyday Nigerian commerce.",
  keywords: [
    "instant payments Nigeria",
    "mobile money Nigeria",
    "QR payments",
    "business payments",
    "ride payment app",
    "Clap finance",
    "Nigerian fintech",
  ],
  authors: [{ name: "Clap", url: siteUrl }],
  creator: "Clap",
  publisher: "Clap",
  robots: { index: true, follow: true, googleBot: { index: true, follow: true } },
  openGraph: {
    type: "website",
    url: siteUrl,
    siteName: "Clap",
    title: "Clap — Instant Payments for Nigeria",
    description:
      "Accept payments instantly across Nigeria. Built for businesses, drivers, and everyday users.",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Clap — Instant Payments for Nigeria" }],
    locale: "en_NG",
  },
  twitter: {
    card: "summary_large_image",
    site: "@clapfinance",
    creator: "@clapfinance",
    title: "Clap — Instant Payments for Nigeria",
    description: "Accept payments instantly across Nigeria. Built for businesses, drivers, and everyday users.",
    images: ["/og-image.png"],
  },
  alternates: {
    canonical: siteUrl,
    languages: { en: `${siteUrl}/en`, fr: `${siteUrl}/fr` },
  },
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/android-chrome-192x192.png", sizes: "192x192", type: "image/png" },
      { url: "/android-chrome-512x512.png", sizes: "512x512", type: "image/png" },
    ],
    apple: "/apple-touch-icon.png",
  },
  manifest: "/site.webmanifest",
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Clap",
  url: siteUrl,
  logo: `${siteUrl}/logo.png`,
  sameAs: ["https://x.com/clapfinance", "https://instagram.com/clapfinance"],
  contactPoint: { "@type": "ContactPoint", email: "hello@clapmoney.com", contactType: "customer support" },
  description: "Clap helps businesses and drivers receive money faster with instant transfers, QR payments, and seamless collections built for everyday Nigerian commerce.",
};

export default async function RootLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}>) {
  const { locale } = await params;
  const messages = await getMessages();

  return (
    <html lang={locale} className={`${interSans.variable} h-full antialiased`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-full flex flex-col">
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:z-50 focus:p-4 focus:bg-white focus:text-black focus:outline-2"
        >
          Skip to main content
        </a>
        <NextIntlClientProvider locale={locale} messages={messages}>
          <Nav />
          <main id="main-content" className="flex-1 flex flex-col">
            {children}
          </main>
          <Footer />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
