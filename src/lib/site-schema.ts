import { approaches, brand, services } from "@/data/practice";

/** Site-wide structured data, rendered once in <head> by the root route.
 *
 *  Two kinds of content, kept apart on purpose. The business facts below —
 *  legal name, address, contact points, tax ID — are the studio's and change
 *  rarely. Everything about the offer (slogan, description, what we know, the
 *  services and approaches we sell) is computed from src/data/practice.ts, so
 *  renaming a service updates the pages and the structured data together. */
const SITE = "https://orions.agency";

const [organization, professionalService, website] = [
  {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "ORIONS",
    "legalName": "ORIONS Creative Co., Ltd.",
    "url": "https://orions.agency",
    "logo": "https://orions.agency/favicon.jpg",
    "founder": {
      "@type": "Person",
      "name": "Ratthakan Suwanphakdee",
      "jobTitle": "Founder & Creative Director"
    },
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "41/175 Soi Nawamin 111 Yaek 3",
      "addressLocality": "Nawamin, Bueng Kum",
      "addressRegion": "Bangkok",
      "postalCode": "10240",
      "addressCountry": "TH"
    },
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+66-89-354-2628",
      "email": "hello@orions.agency",
      "contactType": "customer service",
      "availableLanguage": [
        "English",
        "Thai"
      ]
    },
    "foundingDate": "2025",
    "taxID": "0105568063442",
    "areaServed": {
      "@type": "Country",
      "name": "Thailand"
    },
    "sameAs": [
      "https://www.instagram.com/orions.agency",
      "https://www.facebook.com/orions.agency",
      "https://line.me/ti/p/~orions"
    ]
  },
  {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "image": "https://orions.agency/og-brand.jpg",
    "url": "https://orions.agency",
    "telephone": "+66-89-354-2628",
    "email": "hello@orions.agency",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "41/175 Soi Nawamin 111 Yaek 3",
      "addressLocality": "Nawamin, Bueng Kum",
      "addressRegion": "Bangkok",
      "postalCode": "10240",
      "addressCountry": "TH"
    },
    "areaServed": "Thailand",
    "knowsLanguage": [
      "Thai",
      "English"
    ]
  },
  {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "ORIONS",
    "url": "https://orions.agency",
    "inLanguage": "th-TH",
    "publisher": {
      "@type": "Organization",
      "name": "ORIONS",
      "url": "https://orions.agency"
    }
  }
] as Record<string, unknown>[];

const description = `ORIONS is an ${brand.descriptor.toLowerCase()}. ${brand.belief.en}`;

export const siteSchema: Record<string, unknown>[] = [
  {
    ...organization,
    slogan: brand.master,
    description,
    knowsAbout: [...services.map((s) => s.name), ...services.flatMap((s) => s.items)],
  },
  {
    ...professionalService,
    name: `ORIONS — ${brand.descriptor}`,
    description,
    slogan: brand.master,
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Services and signature approaches",
      itemListElement: [...services, ...approaches].map((item) => ({
        "@type": "Offer",
        itemOffered: { "@type": "Service", name: item.name, url: `${SITE}/services#${item.slug}` },
      })),
    },
  },
  { ...website, alternateName: brand.master, description },
];
