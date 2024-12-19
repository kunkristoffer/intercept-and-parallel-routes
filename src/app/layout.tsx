import type { Metadata } from "next";
import "@/assets/styles/global.css";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";

export const metadata: Metadata = {
  title: {
    default: "Teamwork",
    template: "%s | Teamwork",
  },
  description: "Frigjør kraften i medarbeiderskapet",
  keywords: [
    "medarbeiderskap",
    "skandinaviske ledelsesmodellen",
    "employeeship",
  ],
  authors: [{ name: "Teamwork" }],
  creator: "Teamwork",
  publisher: "Teamwork",
  metadataBase: new URL("https://www.teamwork.no"),
  alternates: {
    canonical: "/",
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
  openGraph: {
    type: "website",
    locale: "nb_NO",
    url: "/",
    title: "Teamwork",
    description: "Frigjør kraften i medarbeiderskapet",
    siteName: "teamwork.no",
    images: [
      {
        url: "/LogoLight.svg",
        width: 1200,
        height: 630,
        alt: "Teamwork Logo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Teamwork",
    description: "Beskrivelse for Twitter",
    images: ["/LogoLight.svg"],
  },
};

export default function RootLayout({
  modal,
  children,
}: Readonly<{
  modal: React.ReactNode;
  children: React.ReactNode;
}>) {
  return (
    <html lang="nb">
      <body>
        <Header />
        {modal}
        {children}
        <Footer />
      </body>
    </html>
  );
}
