import { Helmet } from "react-helmet-async";

interface Props {
  title: string;
  description: string;
  path?: string;
  /** Optional JSON-LD structured data object (or array of objects). */
  jsonLd?: object | object[];
}

export const SEO = ({ title, description, path = "/", jsonLd }: Props) => {
  const url = `https://futureintelligen.com${path}`;
  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={url} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={url} />
      <meta property="og:type" content="website" />
      <meta property="og:locale" content="ar_SA" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <html lang="ar" dir="rtl" />
      {jsonLd && (
        <script type="application/ld+json">
          {JSON.stringify(jsonLd)}
        </script>
      )}
    </Helmet>
  );
};
