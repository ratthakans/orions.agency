import { Helmet } from "react-helmet-async";

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
const DEFAULT_OG_IMAGE = `${SITE_URL}/og.jpg`;

const toAbsoluteUrl = (path: string) => (path.startsWith("http") ? path : `${SITE_URL}${path}`);

const SEO = ({ title, description, path, image = DEFAULT_OG_IMAGE, noindex = false, keywords, schema, ogType = "website" }: SEOProps) => {
  const canonical = toAbsoluteUrl(path);
  const ogImage = toAbsoluteUrl(image);
  const schemas = Array.isArray(schema) ? schema : schema ? [schema] : [];

  return (
    <Helmet prioritizeSeoTags>
      <title>{title}</title>
      <meta name="description" content={description} />
      {keywords ? <meta name="keywords" content={keywords} /> : null}
      <meta name="robots" content={noindex ? "noindex, nofollow" : "index, follow"} />
      <link rel="canonical" href={canonical} />

      <meta property="og:type" content={ogType} />
      <meta property="og:site_name" content="ØRIONS" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={canonical} />
      <meta property="og:image" content={ogImage} />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />

      {schemas.map((entry, index) => (
        <script key={`${canonical}-schema-${index}`} type="application/ld+json">
          {JSON.stringify(entry)}
        </script>
      ))}
    </Helmet>
  );
};

export default SEO;
