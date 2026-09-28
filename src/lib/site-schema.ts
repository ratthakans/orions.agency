/** Site-wide structured data, rendered once in the document head by the root
 *  route. (It lived in index.html before the move to TanStack Start, which has
 *  no index.html — the root route renders the whole document.) Per-page schema
 *  still comes from each page's <SEO schema>. */
export const siteSchema: Record<string, unknown>[] = [
  {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "ORIONS",
    "legalName": "ORIONS Creative Co., Ltd.",
    "url": "https://orions.agency",
    "logo": "https://orions.agency/favicon.jpg",
    "slogan": "Stories, Refined.",
    "description": "ORIONS is an independent creative studio. We don't reinvent brands. We refine what makes them worth caring about.",
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
    "knowsAbout": [
      "Brand & Strategy",
      "Creative & Communication",
      "Brand Experience",
      "Brand strategy",
      "Brand narrative",
      "Creative direction",
      "Brand identity",
      "Campaign platform",
      "Film",
      "Photography",
      "Digital experience"
    ],
    "sameAs": [
      "https://www.instagram.com/orions.agency",
      "https://www.facebook.com/orions.agency",
      "https://line.me/ti/p/~orions"
    ]
  },
  {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "name": "ORIONS — Independent Creative Studio",
    "description": "ORIONS is an independent creative studio. We don't reinvent brands. We refine what makes them worth caring about.",
    "slogan": "Stories, Refined.",
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
    ],
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Services and signature approaches",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Brand & Strategy",
            "url": "https://orions.agency/services#brand-strategy"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Creative & Communication",
            "url": "https://orions.agency/services#creative-communication"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Brand Experience",
            "url": "https://orions.agency/services#brand-experience"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Creative Unlock",
            "url": "https://orions.agency/services#creative-unlock"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Stories Embed",
            "url": "https://orions.agency/services#stories-embed"
          }
        }
      ]
    }
  },
  {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "ORIONS",
    "alternateName": "Stories, Refined.",
    "description": "ORIONS is an independent creative studio. We don't reinvent brands. We refine what makes them worth caring about.",
    "url": "https://orions.agency",
    "inLanguage": "th-TH",
    "publisher": {
      "@type": "Organization",
      "name": "ORIONS",
      "url": "https://orions.agency"
    }
  }
];
