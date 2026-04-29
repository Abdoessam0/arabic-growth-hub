import { SEO } from "@/components/SEO";
import { AgentLinks } from "@/components/AgentLinks";
import { PageHero } from "@/components/PageHero";
import { contact } from "@/data/contact";
import { ExternalLink } from "lucide-react";

const resources: { label: string; href: string; note: string }[] = [
  { label: "robots.txt", href: "/robots.txt", note: "Crawl directives + Sitemap + Content-Signal" },
  { label: "sitemap.xml", href: "/sitemap.xml", note: "Canonical URLs of all main pages" },
  { label: "index.md", href: "/index.md", note: "Markdown summary of the homepage" },
  { label: "about.md", href: "/about.md", note: "Markdown summary of the About page" },
  { label: "services.md", href: "/services.md", note: "Markdown summary of services" },
  { label: "contact.md", href: "/contact.md", note: "Markdown summary of contact channels" },
  { label: ".well-known/api-catalog", href: "/.well-known/api-catalog", note: "Linkset describing site & docs" },
  { label: ".well-known/agent-skills/index.json", href: "/.well-known/agent-skills/index.json", note: "Catalog of agent-callable skills" },
  { label: ".well-known/mcp/server-card.json", href: "/.well-known/mcp/server-card.json", note: "MCP discovery card (planned server)" },
];

const AgentReadiness = () => (
  <>
    <SEO
      title="Agent Readiness | Future Intelligen"
      description="Structured resources, markdown summaries, and well-known endpoints that make Future Intelligen discoverable and usable by AI agents and crawlers."
      path="/agent-readiness"
    />
    <AgentLinks markdownAlternate="/index.md" />

    <PageHero
      tag="Agent Readiness"
      title="موارد للوكلاء الذكية والمطورين"
      desc="صفحة مرجعية تشرح الموارد المنظّمة والروابط المعيارية التي يوفّرها موقع Future Intelligen للوكلاء الذكية، المطوّرين، وأنظمة الاسترجاع الحديثة."
    />

    <section className="container container-px py-12 space-y-12">
      {/* Bilingual overview */}
      <div className="grid lg:grid-cols-2 gap-8">
        <div className="bg-card border border-border rounded-2xl p-6">
          <h2 className="font-heading text-2xl font-bold text-primary mb-3">عن الشركة</h2>
          <p className="text-foreground/85 leading-loose mb-4">
            شركة سعودية متخصصة في الحلول التقنية والاستشارية، مقرّها الرياض. نقدّم تطوير المواقع
            والأنظمة، الاستشارات العقارية، استشارات الأعمال، الإدارة المالية، الترجمة والتوطين،
            والدعم الفني.
          </p>
          <ul className="text-sm text-foreground/85 space-y-1.5">
            <li>البريد: <a className="text-accent hover:underline" href={`mailto:${contact.email}`}>{contact.email}</a></li>
            <li>إيميل الإدارة: <a className="text-accent hover:underline" href={`mailto:${contact.ceoEmail}`}>{contact.ceoEmail}</a></li>
            <li>الموقع: {contact.location}</li>
          </ul>
        </div>

        <div dir="ltr" className="bg-card border border-border rounded-2xl p-6 text-left">
          <h2 className="font-heading text-2xl font-bold text-primary mb-3">About (English)</h2>
          <p className="text-foreground/85 leading-relaxed mb-4">
            Future Intelligen is a Saudi company providing technical and advisory solutions:
            web & system development, CRM, real-estate digital solutions, business consulting,
            accounting & Zakat, translation, and technical support. Based in Riyadh, KSA.
          </p>
          <ul className="text-sm text-foreground/85 space-y-1.5">
            <li>Email: <a className="text-accent hover:underline" href={`mailto:${contact.email}`}>{contact.email}</a></li>
            <li>Executive: <a className="text-accent hover:underline" href={`mailto:${contact.ceoEmail}`}>{contact.ceoEmail}</a></li>
            <li>Location: Riyadh, Saudi Arabia</li>
          </ul>
        </div>
      </div>

      {/* Structured resources */}
      <div>
        <h2 className="font-heading text-2xl font-bold text-primary mb-5">الموارد المنظّمة / Structured resources</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {resources.map((r) => (
            <a
              key={r.href}
              href={r.href}
              target="_blank"
              rel="noopener noreferrer"
              className="block bg-card border border-border rounded-2xl p-5 hover:border-accent/40 hover:shadow-card transition-all"
            >
              <div className="flex items-center justify-between mb-2">
                <code dir="ltr" className="text-sm font-mono text-primary">{r.label}</code>
                <ExternalLink className="size-4 text-muted-foreground" />
              </div>
              <p className="text-xs text-muted-foreground leading-relaxed">{r.note}</p>
            </a>
          ))}
        </div>
      </div>

      {/* Status notes */}
      <div className="bg-muted/40 border border-border rounded-2xl p-6 text-sm text-foreground/80 leading-loose">
        <h3 className="font-heading font-bold text-primary mb-2">Implementation status</h3>
        <ul className="list-disc pr-5 space-y-1.5 rtl:pr-5 rtl:pl-0">
          <li><strong>Fully working today:</strong> robots.txt with Sitemap & Content-Signal, sitemap.xml, JSON-LD, markdown summaries, well-known agent discovery files, WebMCP browser registration (if supported by the browser).</li>
          <li><strong>Static fallback:</strong> Agent resource discovery is currently exposed via HTML <code>&lt;link rel="..."&gt;</code> tags instead of HTTP <code>Link:</code> response headers, because shared static hosting does not let us configure response headers reliably.</li>
          <li><strong>Planned (needs server/edge):</strong> True <code>Accept: text/markdown</code> content negotiation, a live MCP server endpoint, and OAuth/OIDC discovery — currently only documented as placeholders.</li>
        </ul>
      </div>
    </section>
  </>
);

export default AgentReadiness;
