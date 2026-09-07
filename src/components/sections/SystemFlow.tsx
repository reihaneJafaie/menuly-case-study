"use client";

import { AnimatePresence, motion } from "framer-motion";
import {
  CalendarPlus,
  ChevronRight,
  FileCheck2,
  Globe,
  LayoutDashboard,
  QrCode,
  Settings,
  ShieldCheck,
  Store,
  Users,
} from "lucide-react";
import { useState } from "react";

interface NodeDetail {
  code: string;
  label: string;
  targetRef?: string; // ارجاع به لایه یا کد بعدی برای نشان دادن اتصال
}

interface FlowSection {
  id: string;
  code: string;
  title: string;
  subtitle: string;
  icon: React.ElementType;
  items: NodeDetail[];
}

const architectureTree: FlowSection[] = [
  {
    id: "control-center",
    code: "1.0",
    title: "Control Center",
    subtitle: "Super Admin System Management",
    icon: LayoutDashboard,
    items: [
      { code: "1.1", label: "Create Workspace", targetRef: "3.0" },
      { code: "1.2", label: "Edit / Delete Workspace", targetRef: "3.0" },
      { code: "1.3", label: "Subscription Renewal" },
      { code: "1.4", label: "Subscriptions Control & Monitoring" },
      { code: "1.5", label: "Payment Control (View All / Approve or Reject Seller Receipts)" },
      { code: "1.6", label: "Create Seller", targetRef: "2.0" },
    ],
  },
  {
    id: "seller",
    code: "2.0",
    title: "Seller Management",
    subtitle: "Business Partner Access Layer",
    icon: Users,
    items: [
      { code: "2.1", label: "Can Create Workspace (1.1)", targetRef: "3.0" },
      { code: "2.2", label: "Can Manage / Renew Subscription (1.3)" },
      { code: "2.3", label: "View Assigned Payments & Upload Payment Receipts", targetRef: "1.5" },
    ],
  },
  {
    id: "workspace",
    code: "3.0",
    title: "Workspace Engine",
    subtitle: "Cafe Environment Creation",
    icon: Store,
    items: [
      { code: "3.1", label: "Create Admin Panel for Cafe Owner", targetRef: "4.0" },
      { code: "3.2", label: "Auto Add +365 Days to Subscription" },
      { code: "3.3", label: "Log Transaction into Payment System", targetRef: "1.5" },
      { code: "3.4", label: "Modify Payment Details" },
    ],
  },
  {
    id: "admin-panel",
    code: "4.0",
    title: "Cafe Admin Panel",
    subtitle: "Cafe Owner Operational Interface",
    icon: Settings,
    items: [
      { code: "4.1", label: "Generate QR Code", targetRef: "5.0" },
      { code: "4.2", label: "Manage Data (Categories / Products / Information)" },
      { code: "4.3", label: "Settings (General Settings / Theme / Colors)" },
    ],
  },
  {
    id: "final-website",
    code: "5.0",
    title: "Final Website",
    subtitle: "Live Customer-Facing Interface",
    icon: Globe, // تغییر آیکون به Globe جهت متمایز شدن از Admin Panel
    items: [
      { code: "5.1", label: "Scan QR Code" },
      { code: "5.2", label: "See Customer-Facing Data" },
    ],
  },
];

export default function SystemFlow() {
  const [selectedId, setSelectedId] = useState<string>("control-center");
  const selectedSection = architectureTree.find((s) => s.id === selectedId) || architectureTree[0];

  return (
    <section className="relative overflow-hidden border-y border-[var(--border)] bg-[var(--bg)] text-[var(--white)] py-20 px-6 lg:px-12" dir="ltr">
      <div className="mx-auto max-w-6xl">
        
        {/* HEADER */}
        <div className="mb-12 max-w-3xl">
        <div className="mb-10">
          <span className="font-mono text-md uppercase tracking-[0.2em] text-[var(--accent)]">
            05 / System Flow
          </span>
        </div>
          <h2 className="text-3xl font-bold tracking-tight md:text-5xl">
            Menuly Multi-Tenant Flow
          </h2>
          <p className="mt-3 text-sm text-[var(--muted)] leading-relaxed">
            Interactive hierarchical map showing system connections and data paths across all platform layers.
          </p>
        </div>

        {/* ARCHITECTURE GRID */}
        <div className="grid gap-8 lg:grid-cols-12 relative">
          
          {/* NAVIGATION TREE (LEFT COLUMN) */}
          <div className="lg:col-span-5 space-y-3 relative z-10">
            <span className="text-xs font-mono uppercase tracking-widest text-[var(--muted)] block mb-4">
              Hierarchy Index
            </span>

            {architectureTree.map((section, index) => {
              const Icon = section.icon;
              const isSelected = selectedId === section.id;

              return (
                <div key={section.id} className="relative">
                  {/* Vertical Connecting Line between Sidebar Node Tabs */}
                  {index < architectureTree.length - 1 && (
                    <div className="absolute left-7 top-12 h-6 w-0.5 bg-[var(--border)] -z-10" />
                  )}

                  <button
                    onClick={() => setSelectedId(section.id)}
                    className={`w-full text-left rounded-xl border p-4 transition-all duration-200 flex items-center justify-between group relative ${
                      isSelected
                        ? "border-[var(--accent)] bg-[var(--surface)] shadow-lg ring-1 ring-[var(--accent)]"
                        : "border-[var(--border)] bg-[var(--bg)] hover:border-[var(--muted)] hover:bg-[var(--surface)]/50"
                    }`}
                  >
                    <div className="flex items-center gap-3.5">
                      <div
                        className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border ${
                          isSelected
                            ? "border-[var(--accent)] bg-[var(--accent)]/10 text-[var(--accent)]"
                            : "border-[var(--border)] text-[var(--muted)] group-hover:text-[var(--white)]"
                        }`}
                      >
                        <Icon size={18} />
                      </div>
                      <div>
                        <div className="flex items-center gap-2">
                          <span className="text-xs font-mono font-semibold text-[var(--accent)]">
                            {section.code}
                          </span>
                          <h3 className="text-sm font-bold text-[var(--white)]">
                            {section.title}
                          </h3>
                        </div>
                        <p className="text-[11px] text-[var(--muted)] mt-0.5">
                          {section.subtitle}
                        </p>
                      </div>
                    </div>

                    <ChevronRight
                      size={16}
                      className={`text-[var(--muted)] transition-transform duration-200 ${
                        isSelected ? "translate-x-1 text-[var(--accent)]" : ""
                      }`}
                    />
                  </button>
                </div>
              );
            })}
          </div>

          {/* STRUCTURED DETAILS PANEL WITH FLOW CONNECTORS (RIGHT COLUMN) */}
          <div className="lg:col-span-7 relative">
            <span className="text-xs font-mono uppercase tracking-widest text-[var(--muted)] block mb-4">
              Node Execution Details & Routing
            </span>

            <AnimatePresence mode="wait">
              <motion.div
                key={selectedSection.id}
                initial={{ opacity: 0, x: 10 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -10 }}
                transition={{ duration: 0.2 }}
                className="h-full rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-6 flex flex-col justify-between relative overflow-hidden"
              >
                <div>
                  {/* Selected Node Header */}
                  <div className="flex items-center justify-between border-b border-[var(--border)] pb-4 mb-6">
                    <div>
                      <span className="text-xs font-mono font-bold text-[var(--accent)]">
                        NODE SECTION {selectedSection.code}
                      </span>
                      <h3 className="text-xl font-bold text-[var(--white)] mt-0.5">
                        {selectedSection.title}
                      </h3>
                    </div>
                    <span className="rounded-md border border-[var(--border)] bg-[var(--bg)] px-2.5 py-1 text-xs text-[var(--muted)]">
                      {selectedSection.items.length} Direct Rules
                    </span>
                  </div>

                  {/* Clean List of Sub-Nodes with Target Connections */}
                  <div className="space-y-3 relative">
                    {selectedSection.items.map((item, index) => (
                      <div
                        key={index}
                        className="group relative flex items-center justify-between rounded-xl border border-[var(--border)]/70 bg-[var(--bg)]/60 p-3.5 transition-colors hover:border-[var(--muted)]"
                      >
                        <div className="flex items-start gap-3">
                          <span className="mt-0.5 shrink-0 rounded bg-[var(--accent)]/10 border border-[var(--accent)]/20 px-2 py-0.5 text-[11px] font-mono font-bold text-[var(--accent)]">
                            {item.code}
                          </span>
                          <p className="text-xs leading-relaxed text-[var(--white)] font-medium">
                            {item.label}
                          </p>
                        </div>

                        {/* FLOW CONNECTOR TAG */}
                        {item.targetRef && (
                          <div className="flex items-center gap-1.5 shrink-0 pl-2">
                            {/* Animated SVG Connector Line */}
                            <svg className="w-6 h-3 text-[var(--accent)] hidden sm:block" fill="none">
                              <path
                                d="M0 6H18M18 6L13 1M18 6L13 11"
                                stroke="currentColor"
                                strokeWidth="1.5"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              />
                            </svg>
                            <span className="text-[10px] font-mono bg-[var(--surface)] border border-[var(--border)] text-[var(--accent)] px-2 py-0.5 rounded-full font-semibold">
                              → {item.targetRef}
                            </span>
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                </div>

                {/* Sub-context Info with Active Flow Indicator */}
                <div className="mt-8 rounded-xl border border-dashed border-[var(--border)] bg-[var(--bg)]/30 p-4 flex items-center justify-between text-xs text-[var(--muted)]">
                  <div className="flex items-center gap-2">
                    <span className="h-2 w-2 rounded-full bg-[var(--accent)] animate-pulse" />
                    <span>Layer Status:</span>
                  </div>
                  <span className="font-mono text-[var(--accent)] font-semibold">
                    {selectedSection.code} Active Node → Connected
                  </span>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        {/* BOTTOM HIGHLIGHTS */}
        <div className="mt-12 grid gap-4 sm:grid-cols-3">
          <div className="rounded-xl border border-[var(--border)] bg-[var(--surface)]/50 p-4">
            <div className="flex items-center gap-2 text-xs font-semibold text-[var(--accent)] mb-1">
              <CalendarPlus size={15} />
              3.2 Subscription Engine
            </div>
            <p className="text-xs text-[var(--muted)]">
              Workspace creation automatically attaches +365 days subscription.
            </p>
          </div>

          <div className="rounded-xl border border-[var(--border)] bg-[var(--surface)]/50 p-4">
            <div className="flex items-center gap-2 text-xs font-semibold text-[var(--accent)] mb-1">
              <FileCheck2 size={15} />
              1.5 Payment Pipeline
            </div>
            <p className="text-xs text-[var(--muted)]">
              Sellers upload receipts directly to Control Center review queue.
            </p>
          </div>

          <div className="rounded-xl border border-[var(--border)] bg-[var(--surface)]/50 p-4">
            <div className="flex items-center gap-2 text-xs font-semibold text-[var(--accent)] mb-1">
              <QrCode size={15} />
              4.1 → 5.0 Menu Routing
            </div>
            <p className="text-xs text-[var(--muted)]">
              QR Code generator links instantly to live customer menu web app.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}