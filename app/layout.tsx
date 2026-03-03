import type { Metadata } from "next";
import "./globals.css";
import { Providers } from "@/components/Providers";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";



export const metadata: Metadata = {
  title: {
    template: "%s | Yashfa Tasnia - Photographer & Videographer",
    default: "Yashfa Tasnia | Award-Winning Photographer & Videographer",
  },
  description: "Capturing life's most precious moments through the lens of Yashfa Tasnia. Professional photography and videography services specializing in portraits, weddings, and commercial work.",
  keywords: ["photographer", "videographer", "female photographer", "female videographer", "portrait photography", "wedding photography", "cinematography", "Yashfa Tasnia"],
  authors: [{ name: "Yashfa Tasnia" }],
  creator: "Yashfa Tasnia",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://yashfatasnia.com",
    siteName: "Yashfa Tasnia Portfolio",
    title: "Yashfa Tasnia | Professional Photographer & Videographer",
    description: "Discover the visual storytelling of Yashfa Tasnia. High-end photography and cinematic videography tailored to your vision.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Yashfa Tasnia Portfolio Preview",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Yashfa Tasnia | Photographer & Videographer",
    description: "Professional visual storytelling by Yashfa Tasnia.",
    images: ["/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning >
      <body className="antialiased min-h-screen">
        <Providers>

            <Navbar />
            <main className="grow">
              {children}
            </main>
            <Footer />
        </Providers>
      </body>
    </html>
  );
}
