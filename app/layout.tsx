import type { Metadata } from "next";
import { Rethink_Sans } from "next/font/google";
import "./globals.css";
import { TooltipProvider } from "@/components/ui/tooltip";
import { ThemeProvider } from "@/components/theme-provider";
import SiteLayout from "@/components/site-layout";

const APP_URL = process.env.NEXT_PUBLIC_APP_URL || "http://localhost:3000";

const rethink_sans = Rethink_Sans({ subsets: ["latin"] });
export const metadata: Metadata = {
  title: {
    default: "Mantice AI",
    template: "%s | Mantice AI",
  },
  description:
    "Advanced AI tools and solutions for automation, analysis, and content creation. Transform your workflow with intelligent AI assistance.",
  keywords: [
    "AI tools",
    "artificial intelligence",
    "machine learning",
    "automation",
    "content generation",
    "data analysis",
    "AI assistant",
    "productivity tools",
  ],
  authors: [{ name: "Mantice AI Team" }],
  creator: "Mantice AI",
  publisher: "Mantice AI",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL(APP_URL),
  alternates: {
    canonical: "/",
    languages: {
      "en-US": "/en-US",
    },
  },
  openGraph: {
    title: "Mantice AI",
    description: "Transform your workflow with intelligent AI assistance",
    url: APP_URL,
    siteName: "Mantice AI",
    images: [
      {
        url: new URL("/mantice-og-image.jpg", APP_URL).toString(),
        width: 1200,
        height: 630,
        alt: "Mantice AI - Intelligent AI Tools and Solutions",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Mantice AI",
    description: "Transform your workflow with intelligent AI assistance",
    creator: "@ManticeAI",
    images: [
      {
        url: new URL("/mantice-og-image.jpg", APP_URL).toString(),
        alt: "Mantice AI - Intelligent AI Tools and Solutions",
      },
    ],
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
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-16x16.png",
    apple: "/apple-touch-icon.png",
  },
  manifest: "/site.webmanifest",
  other: {
    "google-site-verification": "your-google-site-verification-code",
  },
};
export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <ThemeProvider
        attribute="class"
        defaultTheme="system"
        enableSystem
        disableTransitionOnChange
      >
        <body className={rethink_sans.className}>
          <TooltipProvider>
            <SiteLayout>
              <div className="min-h-[75vh] ">{children}</div>
            </SiteLayout>
          </TooltipProvider>
        </body>
      </ThemeProvider>
    </html>
  );
}
