import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "TreTrip",
  description: "Travel, medical & business tourism programs. Explore Saudi Arabia & the USA, shipping & events services.",
  metadataBase: new URL("https://tretrip.com"),
  icons: {
    icon: {
      url: "/AboutUsLogo.png",
      type: "image/png",
    },
    shortcut: "/AboutUsLogo.png",
    apple: "/AboutUsLogo.png",
  },
  openGraph: {
    title: "TreTrip",
    description: "Travel, medical & business tourism programs. Explore Saudi Arabia & the USA, shipping & events services.",
    url: "https://tretrip.com",
    siteName: "TreTrip",
    type: "website",
    images: [
      {
        url: "/AboutUsLogo.png",
        width: 135,
        height: 135,
        alt: "TreTrip Logo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "TreTrip",
    description: "Travel, medical & business tourism programs. Explore Saudi Arabia & the USA, shipping & events services.",
    images: ["/AboutUsLogo.png"],
  },
};

import { LanguageProvider } from "@/context/LanguageContext";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${poppins.variable} antialiased`}>
        <LanguageProvider>
          {children}
        </LanguageProvider>
      </body>
    </html>
  );
}
