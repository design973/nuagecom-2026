import type { ReactNode } from 'react';
import type { Metadata, Viewport } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
  display: 'swap',
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
  display: 'swap',
});

const siteUrl = 'https://www.nuagecom.com';

const title = 'Nuagecom — Communication, marketing & transformation numérique en Guyane';
const description =
  "Depuis 2016, Nuagecom accompagne entreprises, collectivités et institutions de Guyane dans leur stratégie, leur communication et leur transformation numérique.";

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#08131B',
  colorScheme: 'dark', // le site est conçu fonds sombres dominants de bout en bout
};

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: title,
    template: '%s · Nuagecom',
  },
  description,
  keywords: [
    'agence communication Guyane',
    'agence marketing Guyane',
    'transformation numérique Guyane',
    'création site internet Guyane',
    'Nuagecom',
  ],
  authors: [{ name: 'Nuagecom' }],
  creator: 'Nuagecom',
  category: 'business',
  alternates: {
    canonical: '/', // résolu en https://www.nuagecom.com/ via metadataBase
  },
  icons: {
    // TODO: déposer les fichiers dans /public (ou les remplacer par app/icon.tsx / apple-icon.tsx
    // si vous préférez une génération d'icône directement en code, sans asset à fournir)
    icon: [
      { url: '/favicon.svg', type: 'image/svg+xml' },
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
    ],
    apple: [{ url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' }],
    shortcut: ['/favicon.ico'],
  },
  manifest: '/site.webmanifest', // TODO: créer public/site.webmanifest
  openGraph: {
    type: 'website',
    locale: 'fr_FR',
    url: siteUrl,
    siteName: 'Nuagecom',
    title,
    description,
    images: [
      {
        // TODO: fournir un visuel Open Graph 1200x630 avant mise en production
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Nuagecom — Agence de communication, marketing et transformation numérique en Guyane',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title,
    description,
    images: ['/og-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="fr" className={`${geistSans.variable} ${geistMono.variable}`}>
      <body className="bg-background font-sans text-foreground antialiased">{children}</body>
    </html>
  );
}
