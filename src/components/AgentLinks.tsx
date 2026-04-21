/**
 * AgentLinks
 *
 * STATIC HOSTING FALLBACK for true HTTP `Link:` response headers.
 *
 * - On Hostinger shared hosting we cannot reliably inject HTTP `Link` headers
 *   without a custom .htaccess (Apache) Header directive. If/when .htaccess is
 *   available, mirror these as real headers, e.g.:
 *
 *     <IfModule mod_headers.c>
 *       Header add Link "</.well-known/api-catalog>; rel=\"api-catalog\""
 *       Header add Link "</.well-known/mcp/server-card.json>; rel=\"mcp-server-card\""
 *       Header add Link "</.well-known/agent-skills/index.json>; rel=\"agent-skills\""
 *       Header add Link "</index.md>; rel=\"alternate\"; type=\"text/markdown\""
 *     </IfModule>
 *
 * - Until then, this component injects equivalent <link rel="..."> tags into
 *   the document <head> via react-helmet so crawlers and agents that parse
 *   HTML for discovery can still find the resources.
 */

import { Helmet } from "react-helmet-async";

interface Props {
  /** Path of the current page used to derive a markdown alternate, if relevant. */
  markdownAlternate?: string;
}

export const AgentLinks = ({ markdownAlternate }: Props) => (
  <Helmet>
    <link rel="api-catalog" href="/.well-known/api-catalog" />
    <link rel="agent-skills" href="/.well-known/agent-skills/index.json" />
    <link rel="mcp-server-card" href="/.well-known/mcp/server-card.json" />
    <link rel="sitemap" type="application/xml" href="/sitemap.xml" />
    {markdownAlternate && (
      <link rel="alternate" type="text/markdown" href={markdownAlternate} />
    )}
  </Helmet>
);
