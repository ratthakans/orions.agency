/** Per-page head tags. React 19 hoists <title>, <meta> and <link> rendered
 *  anywhere in the tree into the document <head> — on the server during
 *  prerender and on the client when the route changes — so no head manager is
 *  needed. JSON-LD is not hoisted and renders in place, which search engines
 *  read just the same. */
type SchemaValue = Record<string, unknown> | Array<Record<string, unknown>>;

interface SEOProps {
  title: string;
  description: string;
  path: string;
  image?: string;
  noindex?: boolean;
  keywords?: string;
  schema?: SchemaValue;
  /** og:type — "website" (default) or "article" for blog posts. */
  ogType?: string;
}

const SITE_URL = "https://orions.agency";
const DEFAULT_OG_IMAGE = `${SITE_URL}/og-brand.jpg`;

const toAbsoluteUrl = (path: string) => (path.startsWith("http") ? path : `${SITE_URL}${path}`);

const SEO = ({ title, description, path, image = DEFAULT_OG_IMAGE, noindex = false, keywords, schema, ogType = "website" }: SEOProps) => {
  const canonical = toAbsoluteUrl(path);
  const ogImage = toAbsoluteUrl(image);
  const schemas = Array.isArray(schema) ? schema : schema ? [schema] : [];

  return (
    <>
      <title>{title}</title>
      <meta name="description" content={description} />
      {keywords ? <meta name="keywords" content={keywords} /> : null}
      <meta name="robots" content={noindex ? "noindex, nofollow" : "index, follow"} />
      <link rel="canonical" href={canonical} />

      <meta property="og:type" content={ogType} />
      <meta property="og:locale" content="th_TH" />
      <meta property="og:locale:alternate" content="en_US" />
      <meta property="og:site_name" content="ORIONS" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={canonical} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:image:alt" content={title} />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />

      {schemas.map((entry, index) => (
        <script
          key={`${canonical}-schema-${index}`}
          type="application/ld+json"
          // Raw JSON, not text children: text would be HTML-escaped on the
          // server, and a "<" inside the data would break out of the tag.
          dangerouslySetInnerHTML={{ __html: JSON.stringify(entry).replace(/</g, "\\u003c") }}
        />
      ))}
    </>
  );
};

export default SEO;
