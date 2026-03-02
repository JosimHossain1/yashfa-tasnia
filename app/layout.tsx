import type { Metadata } from "next";
import { Playfair_Display, Inter, Dancing_Script } from "next/font/google";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import "./globals.css";

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const dancingScript = Dancing_Script({
  variable: "--font-dancing-script",
  subsets: ["latin"],
});



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
    <html lang="en">
      <body
        className={`${playfair.variable} ${inter.variable} ${dancingScript.variable} antialiased`}
      >
        <div
          className="pointer-events-none fixed inset-0 z-100 opacity-[0.1]"
          style={{
            backgroundImage: "url('https://framerusercontent.com/images/6mcf62RlDfRfU61Yg5vb2pefpi4.png?width=256&height=256')",
            backgroundRepeat: "repeat",
            backgroundSize: "128px auto",
          }}
        />
        <div className="flex min-h-screen flex-col bg-bg-secondary text-text-primary">
          <Navbar />
          <main className="grow">
            {children}
          </main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
