import { Helmet } from "react-helmet-async";

type SEOProps = {
  title: string;
  description?: string;
  canonical?: string;
};

const SEO = ({ title, description, canonical }: SEOProps) => {
  const url = typeof window !== "undefined" ? window.location.origin + window.location.pathname : "";
  return (
    <Helmet>
      <title>{title}</title>
      {description && <meta name="description" content={description} />}
      <link rel="canonical" href={canonical || url} />
      <meta property="og:title" content={title} />
      {description && <meta property="og:description" content={description} />}
    </Helmet>
  );
};

export default SEO;
