import type { Metadata } from "next";
import "./globals.css";
import Providers from "./providers/providers";

export const metadata: Metadata = {
  title: {
    default: "Horizone Blog | Travel Tips & Destination Guides",
    template: "%s | Horizone Blog", 
  },
  description: "Explore travel tips, destination guides, and stories that inspire your next adventure. Discover culinary experiences, lifestyle tips, and travel hacks.",
  keywords: ["travel blog", "destination guides", "travel tips", "culinary", "lifestyle", "adventure"],
  authors: [{ name: "Horizone" }],
  openGraph: {
    title: "Horizone Blog",
    description: "Travel tips, destination guides, and inspiring stories",
    type: "website",
    siteName: "Horizone Blog",
  },
  twitter: {
    card: "summary_large_image",
    title: "Horizone Blog",
    description: "Travel tips, destination guides, and inspiring stories",
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
      <body>
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  );
}