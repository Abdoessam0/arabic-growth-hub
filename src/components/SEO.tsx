import { Helmet } from "react-helmet-async";

interface Props {
  title: string;
  description: string;
  path?: string;
}

export const SEO = ({ title, description, path = "/" }: Props) => (
  <Helmet>
    <title>{title}</title>
    <meta name="description" content={description} />
    <link rel="canonical" href={`https://futureintelligen.com${path}`} />
    <meta property="og:title" content={title} />
    <meta property="og:description" content={description} />
    <meta property="og:url" content={`https://futureintelligen.com${path}`} />
    <html lang="ar" dir="rtl" />
  </Helmet>
);
