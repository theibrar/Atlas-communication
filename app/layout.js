import './globals.css';
import BackToTop from '@/components/BackToTop';

export const metadata = {
  metadataBase: new URL('https://www.atlascommunication.us'),
  title: {
    default: 'Atlas Communication | High-Intent Inbound Insurance Leads & Calls',
    template: '%s | Atlas Communication',
  },
  description:
    'Atlas Communication delivers qualified inbound insurance leads powered by real buyers. Brand-safe compliance, TCPA & CMS certified, and performance-driven traffic for Medicare, ACA, Auto, Life, and Home Services.',
  keywords: [
    'Medicare leads',
    'ACA health insurance calls',
    'Final expense leads',
    'Auto insurance inbound leads',
    'Home services leads',
    'Commercial insurance leads',
    'TCPA compliant leads',
    'Insurance lead generation agency',
    'Atlas Communication'
  ],
  authors: [{ name: 'Atlas Communication', url: 'https://www.atlascommunication.us' }],
  creator: 'Atlas Communication',
  publisher: 'Atlas Communication',
  formatDetection: {
    telephone: true,
    email: true,
    address: true,
  },
  openGraph: {
    title: 'Atlas Communication | High-Intent Inbound Insurance Leads & Calls',
    description:
      'Atlas Communication delivers qualified inbound insurance leads powered by real buyers. Brand-safe compliance, TCPA & CMS certified performance traffic nationwide.',
    url: 'https://www.atlascommunication.us',
    siteName: 'Atlas Communication',
    images: [
      {
        url: '/images/hero_agents.jpg',
        width: 1200,
        height: 630,
        alt: 'Atlas Communication Inbound Insurance Advisory Team',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Atlas Communication | High-Intent Inbound Insurance Leads & Calls',
    description:
      'Atlas Communication delivers qualified inbound insurance leads powered by real buyers. Brand-safe compliance, TCPA & CMS certified.',
    images: ['/images/hero_agents.jpg'],
  },
  icons: {
    icon: '/favicon.png',
    shortcut: '/favicon.ico',
    apple: '/apple-icon.png',
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

export default function RootLayout({ children }) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Atlas Communication',
    url: 'https://www.atlascommunication.us',
    logo: 'https://www.atlascommunication.us/images/logo_primary.png',
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: '+1-512-325-9363',
      contactType: 'sales & customer support',
      email: 'info@atlascommunication.us',
      areaServed: 'US',
      availableLanguage: ['English', 'Spanish'],
    },
    sameAs: [
      'https://www.atlascommunication.us',
    ],
  };

  return (
    <html lang="en">
      <head>
        <link rel="canonical" href="https://www.atlascommunication.us" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Outfit:wght@400;500;600;700;800&family=Plus+Jakarta+Sans:wght@400;500;600;700;800&display=swap"
          rel="stylesheet"
        />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body>
        {children}
        <BackToTop />
      </body>
    </html>
  );
}
