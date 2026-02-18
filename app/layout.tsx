import { Alegreya_Sans, Bellefair } from "next/font/google";
import type { Metadata } from "next";
import "./globals.css";

const alegreya = Alegreya_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500", "700"],
  variable: "--font-alegreya",
});

const bellefair = Bellefair({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-bellefair",
});

export const metadata: Metadata = {
  title: "MyGrowTherapy | Trauma-Informed Therapy & Counseling",
  description:
    "Professional therapy and counseling services specializing in trauma, anxiety, burnout, and nervous system healing. Compassionate care for your mental health journey.",
  keywords: [
    "therapy",
    "counseling",
    "trauma therapy",
    "anxiety treatment",
    "burnout recovery",
    "nervous system healing",
  ],
  authors: [{ name: "MyGrowTherapy" }],
  creator: "MyGrowTherapy",
  publisher: "MyGrowTherapy",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  applicationName: "MyGrowTherapy",
  appleWebApp: {
    capable: true,
    statusBarStyle: "black-translucent",
    title: "MyGrowTherapy",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://mygrowtherapy.com",
    siteName: "MyGrowTherapy",
    title: "MyGrowTherapy | Trauma-Informed Therapy & Counseling",
    description:
      "Professional therapy and counseling services specializing in trauma, anxiety, burnout, and nervous system healing.",
    images: [
      {
        url: "https://mygrowtherapy.com/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "MyGrowTherapy",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@mygrowtherapy",
    creator: "@mygrowtherapy",
    title: "MyGrowTherapy | Trauma-Informed Therapy & Counseling",
    description:
      "Professional therapy and counseling services specializing in trauma, anxiety, burnout, and nervous system healing.",
    images: ["https://mygrowtherapy.com/images/twitter-image.jpg"],
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
    canonical: "https://mygrowtherapy.com",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${alegreya.variable} ${bellefair.variable}`}
    >
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#ffffff" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "HealthAndBeautyBusiness",
              name: "MyGrowTherapy",
              description:
                "Professional therapy and counseling services specializing in trauma, anxiety, burnout, and nervous system healing.",
              url: "https://mygrowtherapy.com",
              telephone: "+1-XXX-XXX-XXXX",
              email: "contact@mygrowtherapy.com",
              address: {
                "@type": "PostalAddress",
                streetAddress: "Your Street Address",
                addressLocality: "Your City",
                addressRegion: "Your State",
                postalCode: "Your Zipcode",
                addressCountry: "US",
              },
              sameAs: [
                "https://www.facebook.com/mygrowtherapy",
                "https://www.instagram.com/mygrowtherapy",
                "https://www.linkedin.com/company/mygrowtherapy",
              ],
              priceRange: "$$",
            }),
          }}
        />
      </head>
      <body className="antialiased">{children}</body>
    </html>
  );
}
