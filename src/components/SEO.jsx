import { Helmet } from "react-helmet-async";
import { profile, siteUrl } from "../data/profile";
/** @param {{title?: string, description?: string, path?: string, noindex?: boolean}} props */
export default function SEO({
  title,
  description = profile.description,
  path = "/",
  noindex = false,
}) {
  const pageTitle = title
    ? `${title} - ${profile.name}`
    : `${profile.name} - Full Stack Developer`;
  return (
    <Helmet>
      <title>{pageTitle}</title>
      <meta name="description" content={description} />
      <meta
        name="robots"
        content={noindex ? "noindex, follow" : "index, follow"}
      />
      <link rel="canonical" href={`${siteUrl}${path}`} />
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content={`${profile.name} - Portfolio`} />
      <meta property="og:title" content={pageTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={`${siteUrl}${path}`} />
      <meta property="og:image" content={`${siteUrl}/og-image.webp`} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta
        property="og:image:alt"
        content="G K Sagar - Full Stack Developer. Reliable software. Real-world impact."
      />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={pageTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={`${siteUrl}/og-image.webp`} />
    </Helmet>
  );
}
