"use client";

import { useState } from "react";
import {
  ArrowRight,
  Handshake,
  LayoutDashboard,
  QrCode,
  ShieldCheck,
} from "lucide-react";
import FolderPreview from "@/components/ui/folder-perview";

const layers = [
  {
    number: "01",
    role: "Platform Core",
    name: "Control Center",
    description:
      "Central control for sellers, workspaces, payments, subscriptions and the platform.",
    variant: "nandi" as const,
    icon: ShieldCheck,
    badge: "Super Admin",
    previewItems: ["SELLERS", "WORKSPACES", "PAYMENTS"],
  },
  {
    number: "02",
    role: "Distribution",
    name: "Seller Menuly",
    description:
      "Sellers acquire customers, create workspaces and manage their businesses.",
    variant: "rudras" as const,
    icon: Handshake,
    badge: "Sales & Affiliates",
    previewItems: ["CUSTOMERS", "SALES", "WORKSPACES"],
  },
  {
    number: "03",
    role: "Operations",
    name: "Admin Menuly",
    description:
      "Each cafe manages its products, categories, appearance and menu settings.",
    variant: "ravi" as const,
    icon: LayoutDashboard,
    badge: "Cafe Owner",
    previewItems: ["PRODUCTS", "CATEGORIES", "THEME"],
  },
  {
    number: "04",
    role: "End Experience",
    name: "Public Cafe Website",
    description:
      "The final customer-facing experience powered by the cafe's workspace.",
    variant: "devi" as const,
    icon: QrCode,
    badge: "End Customer",
    previewItems: ["MENU", "QR CODE", "CUSTOMER"],
  },
];
export default function ProductOverview() {
  const [activeLayer, setActiveLayer] = useState<number | null>(null);

  return (
    <section
      id="product"
      className="relative bg-[var(--bg)] text-[var(--white)] overflow-hidden"
    >
      <div className="w-[85%] mx-auto mt-25">
        <div className="mb-10">
          <span className="font-mono text-md uppercase tracking-[0.2em] text-[var(--accent)]">
            03 / Product Overview
          </span>
        </div>


        {/* Dynamic Connected Flow Architecture */}
        <div className="">
          {/* Unified Grid (Responsive: 1 col on mobile, 2 on tablet, 4 on desktop) */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 border-l border-r border-[var(--border)]">
            {layers.map((layer, index) => {
              const Icon = layer.icon;
              return (
                <div
                  key={layer.number}
                  onMouseEnter={() => setActiveLayer(index)}
                  onMouseLeave={() => setActiveLayer(null)}
                  className={`group relative p-8 transition-all duration-300 border-b lg:border-b-0 border-r border-[var(--border)] ${
                    activeLayer === index
                      ? "bg-[var(--surface-hover,#18181b)]"
                      : ""
                  }`}
                >
                  {/* Layer Header */}
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-xs tracking-widest text-[var(--accent)] font-semibold">
                      [{layer.number}]
                    </span>
                    <span className="text-[10px] uppercase tracking-wider px-2.5 py-1 rounded-full border border-[var(--border)] text-[var(--muted)] bg-[var(--bg)]">
                      {layer.badge}
                    </span>
                  </div>

                  {/* Icon & Folder Preview */}
                  <div className="mt-10 mb-8 flex flex-col items-center justify-center relative">
                    <div className="p-3 rounded-xl bg-[var(--surface,#111)] border border-[var(--border)] mb-6 text-[var(--accent)] group-hover:scale-110 transition-transform">
                      <Icon size={22} />
                    </div>

             <FolderPreview
  variant={layer.variant}
  size="lg"
  label=""
  previewItems={layer.previewItems}
/>
                  </div>

                  {/* Layer Info */}
                  <div className="mt-6">
                    <span className="block font-mono text-[11px] uppercase tracking-wider text-[var(--accent)] mb-1">
                      {layer.role}
                    </span>
                    <h3 className="text-xl font-medium tracking-tight group-hover:text-[var(--accent)] transition-colors">
                      {layer.name}
                    </h3>

                    <p className="mt-3 text-sm leading-relaxed text-[var(--muted)] font-light">
                      {layer.description}
                    </p>
                  </div>

                  {/* Forward Arrow Indicator */}
                  {index < layers.length - 1 && (
                    <div className="hidden lg:block absolute -right-3 top-1/2 -translate-y-1/2 z-10 p-1.5 rounded-full bg-[var(--bg)] border border-[var(--border)] text-[var(--muted)] group-hover:text-[var(--white)] group-hover:border-[var(--accent)] transition-all">
                      <ArrowRight size={12} />
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>

        {/* Narrative Flow Section */}
        <div className="border-t border-b border-[var(--border)] py-16 sm:py-20 lg:py-24">
          <div className="grid gap-8 lg:grid-cols-[200px_1fr] lg:gap-16 items-center">
            <span className="font-mono text-xs uppercase tracking-[0.2em] text-[var(--muted)]">
              Architecture
            </span>

            <div>
              <p className="max-w-3xl text-xl font-light leading-relaxed text-[var(--text)] sm:text-2xl lg:text-3xl">
                The{" "}
                <strong className="text-[var(--white)] font-normal">
                  Control Center
                </strong>{" "}
                sets global limits, enabling{" "}
                <strong className="text-[var(--white)] font-normal">
                  Sellers
                </strong>{" "}
                to onboard clients.{" "}
                <strong className="text-[var(--white)] font-normal">
                  Cafe Admins
                </strong>{" "}
                manage daily operations, instantly rendering to the{" "}
                <strong className="text-[var(--white)] font-normal">
                  Public Website
                </strong>
                .
              </p>

              {/* Connected Flow Chips */}
              <div className="mt-8 flex flex-wrap items-center gap-2 font-mono text-xs text-[var(--muted)]">
                {["Control", "Sales", "Workspace", "Customer"].map(
                  (step, idx) => (
                    <div key={step} className="flex items-center gap-2">
                      <span className="px-3 py-1.5 rounded-md border border-[var(--border)] bg-[var(--surface,#111)] text-[var(--white)]">
                        0{idx + 1}. {step}
                      </span>
                      {idx < 3 && (
                        <ArrowRight size={12} className="text-[var(--muted)]" />
                      )}
                    </div>
                  ),
                )}
              </div>
            </div>
          </div>
        </div>


      </div>
    </section>
  );
}
