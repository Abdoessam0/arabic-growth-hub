/**
 * WebMCPProvider
 *
 * Lightweight client-side registration of WebMCP browser tools.
 *
 * - Fully implemented: feature detection of `navigator.modelContext`
 *   (the proposed WebMCP surface). If not present, fails silently.
 * - Fully implemented: registers safe NAVIGATION-ONLY tools that map to
 *   existing public website actions. No backend execution, no fake APIs.
 * - Future server-side support needed for: real tool calls that mutate
 *   data (e.g. submitting a contact form). These would require an API
 *   endpoint behind authentication.
 */

import { useEffect } from "react";

type ToolDefinition = {
  name: string;
  description: string;
  inputSchema: { type: "object"; properties: Record<string, unknown>; required?: string[] };
  execute: (input: Record<string, unknown>) => Promise<{ ok: true; message: string }>;
};

declare global {
  interface Navigator {
    modelContext?: {
      registerTool?: (tool: ToolDefinition) => void | Promise<void>;
    };
  }
}

const tools: ToolDefinition[] = [
  {
    name: "open_contact_page",
    description: "Navigate the user to the Future Intelligen contact page.",
    inputSchema: { type: "object", properties: {} },
    execute: async () => {
      window.location.assign("/contact");
      return { ok: true, message: "Navigated to /contact" };
    },
  },
  {
    name: "open_services_page",
    description: "Navigate the user to the Future Intelligen services page.",
    inputSchema: { type: "object", properties: {} },
    execute: async () => {
      window.location.assign("/services");
      return { ok: true, message: "Navigated to /services" };
    },
  },
  {
    name: "open_real_estate_page",
    description: "Navigate the user to the real-estate solutions page.",
    inputSchema: { type: "object", properties: {} },
    execute: async () => {
      window.location.assign("/real-estate");
      return { ok: true, message: "Navigated to /real-estate" };
    },
  },
  {
    name: "open_about_page",
    description: "Navigate the user to the About page.",
    inputSchema: { type: "object", properties: {} },
    execute: async () => {
      window.location.assign("/about");
      return { ok: true, message: "Navigated to /about" };
    },
  },
  {
    name: "start_whatsapp_contact",
    description: "Open a new tab to start a WhatsApp conversation with the company.",
    inputSchema: { type: "object", properties: {} },
    execute: async () => {
      window.open(WHATSAPP_URL, "_blank", "noopener,noreferrer");
      return { ok: true, message: "Opened WhatsApp" };
    },
  },
];

export const WebMCPProvider = () => {
  useEffect(() => {
    try {
      const mc = typeof navigator !== "undefined" ? navigator.modelContext : undefined;
      if (!mc?.registerTool) return; // silently unsupported
      for (const tool of tools) {
        try {
          void mc.registerTool(tool);
        } catch {
          // swallow registration errors per-tool
        }
      }
    } catch {
      // never break the page
    }
  }, []);

  return null;
};
