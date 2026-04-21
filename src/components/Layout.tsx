import { Outlet } from "react-router-dom";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { FloatingWhatsApp } from "@/components/FloatingWhatsApp";
import { AgentLinks } from "@/components/AgentLinks";
import { WebMCPProvider } from "@/components/WebMCPProvider";

export const Layout = () => (
  <div className="flex min-h-screen flex-col">
    <AgentLinks />
    <WebMCPProvider />
    <Navbar />
    <main className="flex-1">
      <Outlet />
    </main>
    <Footer />
    <FloatingWhatsApp />
  </div>
);
