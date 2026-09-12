"use client";

import { useState, type ElementType } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowDown,
  ArrowRight,
  Braces,
  Check,
  ChevronDown,
  Code2,
  Database,
  Globe2,
  KeyRound,
  Layers3,
  LockKeyhole,
  Network,
  Server,
  ShieldCheck,
  Sparkles,
  Terminal,
  Triangle,
  Workflow,
  X,
  Zap,
} from "lucide-react";

type LayerId = "ui" | "state" | "api" | "client" | "auth" | "backend";

interface Layer {
  id: LayerId;
  number: string;
  label: string;
  title: string;
  description: string;
  icon: ElementType;
  detail: string[];
  code?: string;
}

const layers: Layer[] = [
  {
    id: "ui",
    number: "01",
    label: "UI LAYER",
    title: "React Components",
    description:
      "Pages and reusable components own presentation, interaction and user intent.",
    icon: Layers3,
    detail: [
      "Feature-oriented page structure",
      "Reusable UI primitives",
      "Responsive table and form patterns",
      "Business actions stay outside presentation",
    ],
    code: `function SellersTable() {
  const {
    sellers,
    loading,
    getSellers,
  } = useSellerStore();

  useEffect(() => {
    getSellers();
  }, []);

  // render UI...
}`,
  },
  {
    id: "state",
    number: "02",
    label: "STATE LAYER",
    title: "Zustand Store",
    description:
      "Feature state connects the UI to the application data flow without coupling components to HTTP.",
    icon: Workflow,
    detail: [
      "Async feature actions",
      "Loading state",
      "Collection + selected entity",
      "Local state synchronization",
    ],
    code: `export const useSellerStore =
  create<SellerStore>((set, get) => ({
    seller: null,
    sellers: [],
    loading: false,

    getSellers: async () => {
      set({ loading: true });

      const sellers =
        await getSellersApi();

      set({
        sellers,
        loading: false,
      });
    },
  }));`,
  },
  {
    id: "api",
    number: "03",
    label: "API LAYER",
    title: "Typed API Functions",
    description:
      "Each domain exposes small, typed functions that map application actions to REST endpoints.",
    icon: Braces,
    detail: [
      "Typed request / response contracts",
      "Domain-specific API modules",
      "REST endpoint mapping",
      "No HTTP details inside components",
    ],
    code: `export function getSellersApi() {
  return apiRequest<Seller[]>(
    "/super-admin/sellers"
  );
}

export function createSellerApi(
  data: CreateSellerDto
) {
  return apiRequest<Seller>(
    "/super-admin/sellers",
    {
      method: "POST",
      body: data,
    }
  );
}`,
  },
  {
    id: "client",
    number: "04",
    label: "HTTP LAYER",
    title: "Generic API Client",
    description:
      "A shared request client centralizes serialization, authentication headers and response handling.",
    icon: Network,
    detail: [
      "One generic request abstraction",
      "JSON / FormData support",
      "Authorization header injection",
      "HTTP response normalization",
    ],
    code: `const response = await fetch(
  buildUrl(path),
  {
    ...rest,
    headers,
    body: requestBody,
  }
);

if (!response.ok) {
  throw await ApiError
    .fromResponse(response);
}`,
  },
  {
    id: "auth",
    number: "05",
    label: "SECURITY LAYER",
    title: "Authentication",
    description:
      "Authenticated requests receive the current bearer token automatically at the HTTP boundary.",
    icon: ShieldCheck,
    detail: [
      "Bearer token authentication",
      "Centralized token storage",
      "Protected application routes",
      "Automatic auth cleanup on 401",
    ],
    code: `const token = getToken();

if (token) {
  headers.set(
    "Authorization",
    \`Bearer \${token}\`
  );
}

if (response.status === 401) {
  clearAuthStorage();
}`,
  },
  {
    id: "backend",
    number: "06",
    label: "SERVER BOUNDARY",
    title: "REST API",
    description:
      "The frontend communicates with dedicated backend endpoints for each Menuly application domain.",
    icon: Server,
    detail: [
      "NestJS REST API",
      "Dedicated endpoint groups",
      "Domain-specific authorization",
      "PostgreSQL-backed services",
    ],
    code: `GET    /super-admin/sellers
POST   /super-admin/sellers
PATCH  /super-admin/sellers/:id
DELETE /super-admin/sellers/:id

→ NestJS
→ Prisma
→ PostgreSQL`,
  },
];

const apps = [
  {
    name: "Control Center",
    stack: "React · TypeScript · Tailwind",
    description: "Platform-level operations",
    icon: ShieldCheck,
    accent: true,
  },
  {
    name: "Seller Panel",
    stack: "React · TypeScript · Tailwind",
    description: "Seller workspace & sales flow",
    icon: StoreIcon,
    accent: false,
  },
  {
    name: "Admin Panel",
    stack: "React · TypeScript · Tailwind",
    description: "Workspace administration",
    icon: Layers3,
    accent: false,
  },
  {
    name: "Public Menu",
    stack: "Vue 3",
    description: "Customer-facing experience",
    icon: Globe2,
    accent: false,
  },
];

function StoreIcon(props: { size?: number; strokeWidth?: number }) {
  return <Database {...props} />;
}

const sellerFlow = [
  {
    label: "UI",
    value: "SellersTable",
    icon: Layers3,
  },
  {
    label: "STATE",
    value: "useSellerStore()",
    icon: Workflow,
  },
  {
    label: "ACTION",
    value: "getSellers()",
    icon: Zap,
  },
  {
    label: "API",
    value: "getSellersApi()",
    icon: Braces,
  },
  {
    label: "CLIENT",
    value: "apiRequest<Seller[]>()",
    icon: Network,
  },
  {
    label: "REST",
    value: "GET /super-admin/sellers",
    icon: Server,
  },
];

const errorCode = `export class ApiError extends Error {
  status: number;
  data: unknown;

  constructor(
    message: string,
    status: number,
    data: unknown = null
  ) {
    super(message);
    this.name = "ApiError";
    this.status = status;
    this.data = data;
  }
}`;

export default function FrontendArchitecture() {
  const [activeLayer, setActiveLayer] = useState<LayerId>("api");

  const [showErrorHandling, setShowErrorHandling] = useState(false);

  const active = layers.find((layer) => layer.id === activeLayer)!;

  return (
    <section
      id="frontend-architecture"
      className=" relative overflow-hidden border-t border-[var(--border)] bg-[var(--bg)] py-[120px] text-[var(--text)]"
    >
      {/* Ambient grid */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.035]"
        style={{
          backgroundImage:
            "linear-gradient(var(--white) 1px, transparent 1px), linear-gradient(90deg, var(--white) 1px, transparent 1px)",
          backgroundSize: "64px 64px",
        }}
      />

      <div className="pointer-events-none absolute left-1/2 top-[20%] h-[420px] w-[420px] -translate-x-1/2 rounded-full bg-[var(--accent)] opacity-[0.045] blur-[120px]" />

      <div className="relative mx-auto w-[85%] ">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="max-w-[900px]"
        >
          <div className="pb-6">
            <span className="pb-6 font-mono text-md uppercase tracking-[0.2em] text-[var(--accent)]">
              07 / Frontend Architecture
            </span>
          </div>

          <h2 className="max-w-[850px] text-4xl font-medium tracking-[-0.045em] sm:text-5xl lg:text-[68px] lg:leading-[0.98]">
            Built as a system,
            <br />
            not a collection of screens.
          </h2>

          <p className="mt-7 max-w-[680px] text-base leading-7 text-[var(--muted)] sm:text-lg">
            Menuly is composed of multiple application surfaces, connected
            through a consistent typed architecture and a shared API-driven data
            flow.
          </p>
        </motion.div>

        {/* Applications */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.15, duration: 0.6 }}
          className="mt-20"
        >
          <div className="mb-5 flex items-center justify-between">
            <p className="text-xs font-semibold tracking-[0.16em] text-[var(--muted)]">
              APPLICATION SURFACES
            </p>

            <span className="hidden text-xs text-[var(--muted)] sm:block">
              04 surfaces · 03 React applications
            </span>
          </div>

          <div className="grid gap-px overflow-hidden rounded-2xl border border-[var(--border)] bg-[var(--border)] sm:grid-cols-2 lg:grid-cols-4">
            {apps.map((app, index) => {
              const Icon = app.icon;

              return (
                <motion.div
                  key={app.name}
                  whileHover={{
                    backgroundColor: "var(--surface-hover)",
                  }}
                  className="group relative bg-[var(--surface)] p-6 transition-colors"
                >
                  <div className="mb-12 flex items-center justify-between">
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-[var(--border)] bg-[var(--bg)]">
                      <Icon
                        size={18}
                        strokeWidth={1.5}
                        className={
                          app.accent
                            ? "text-[var(--accent)]"
                            : "text-[var(--muted)]"
                        }
                      />
                    </div>

                    <span className="font-mono text-[10px] text-[var(--muted)]">
                      0{index + 1}
                    </span>
                  </div>

                  <h3 className="text-lg font-medium">{app.name}</h3>

                  <p className="mt-2 text-xs leading-5 text-[var(--muted)]">
                    {app.description}
                  </p>

                  <div className="mt-5 border-t border-[var(--border)] pt-4 font-mono text-[10px] text-[var(--muted)]">
                    {app.stack}
                  </div>

                  {app.name === "Public Menu" && (
                    <div className="mt-3 inline-flex rounded-full border border-[var(--border)] px-2 py-1 text-[9px] uppercase tracking-wider text-[var(--muted)]">
                      Different runtime
                    </div>
                  )}
                </motion.div>
              );
            })}
          </div>
        </motion.div>

        {/* Main architecture */}
        <div className="mt-24">
          <div className="mb-7 flex items-end justify-between gap-6">
            <div>
              <p className="text-xs font-semibold tracking-[0.16em] text-[var(--muted)]">
                CORE FRONTEND FLOW
              </p>

              <h3 className="mt-3 text-2xl font-medium tracking-[-0.025em] sm:text-3xl">
                One consistent pattern across the React apps.
              </h3>
            </div>

            <div className="hidden items-center gap-2 text-xs text-[var(--muted)] md:flex">
              <span className="h-1.5 w-1.5 rounded-full bg-[var(--accent)]" />
              Select a layer
            </div>
          </div>

          <div className="grid gap-6 lg:grid-cols-[1fr_0.9fr]">
            {/* Layer stack */}
            <div className="rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-3 sm:p-5">
              {layers.map((layer, index) => {
                const Icon = layer.icon;
                const isActive = layer.id === activeLayer;

                return (
                  <div key={layer.id}>
                    <button
                      type="button"
                      onClick={() => setActiveLayer(layer.id)}
                      className="group flex w-full items-center gap-4 rounded-xl p-4 text-left transition-all hover:bg-[var(--surface-hover)]"
                    >
                      <div
                        className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border transition-all ${
                          isActive
                            ? "border-[var(--accent)]/40 bg-[var(--accent)]/10 text-[var(--accent)]"
                            : "border-[var(--border)] bg-[var(--bg)] text-[var(--muted)]"
                        }`}
                      >
                        <Icon size={18} strokeWidth={1.5} />
                      </div>

                      <div className="min-w-0 flex-1">
                        <div className="mb-1 flex items-center gap-2">
                          <span className="font-mono text-[9px] tracking-wider text-[var(--muted)]">
                            {layer.number}
                          </span>

                          <span className="text-[9px] font-semibold tracking-[0.14em] text-[var(--muted)]">
                            {layer.label}
                          </span>
                        </div>

                        <div
                          className={`text-base font-medium transition-colors ${
                            isActive
                              ? "text-[var(--white)]"
                              : "text-[var(--text)]"
                          }`}
                        >
                          {layer.title}
                        </div>
                      </div>

                      <ArrowRight
                        size={16}
                        className={`shrink-0 transition-all ${
                          isActive
                            ? "translate-x-1 text-[var(--accent)]"
                            : "text-[var(--muted)] opacity-40 group-hover:opacity-100"
                        }`}
                      />
                    </button>

                    {index < layers.length - 1 && (
                      <div className="ml-[35px] h-5 w-px bg-[var(--border)]" />
                    )}
                  </div>
                );
              })}
            </div>

            {/* Inspector */}
            <div className="min-h-[520px] overflow-hidden rounded-2xl border border-[var(--border)] bg-[var(--surface)]">
              <AnimatePresence mode="wait">
                <motion.div
                  key={active.id}
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -8 }}
                  transition={{ duration: 0.25 }}
                  className="h-full"
                >
                  <div className="border-b border-[var(--border)] p-6 sm:p-7">
                    <div className="flex items-start justify-between gap-4">
                      <div>
                        <span className="font-mono text-[10px] text-[var(--accent)]">
                          LAYER {active.number}
                        </span>

                        <h4 className="mt-2 text-2xl font-medium tracking-[-0.025em]">
                          {active.title}
                        </h4>
                      </div>

                      <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-[var(--border)] bg-[var(--bg)]">
                        <active.icon
                          size={17}
                          className="text-[var(--accent)]"
                          strokeWidth={1.5}
                        />
                      </div>
                    </div>

                    <p className="mt-5 text-sm leading-6 text-[var(--muted)]">
                      {active.description}
                    </p>
                  </div>

                  <div className="p-6 sm:p-7">
                    <div className="space-y-3">
                      {active.detail.map((item) => (
                        <div key={item} className="flex items-start gap-3">
                          <div className="mt-1 flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-[var(--accent)]/10">
                            <Check size={10} className="text-[var(--accent)]" />
                          </div>

                          <span className="text-sm text-[var(--text)]">
                            {item}
                          </span>
                        </div>
                      ))}
                    </div>

                    {active.code && (
                      <div className="mt-8 overflow-hidden rounded-xl border border-[var(--border)] bg-[var(--bg)]">
                        <div className="flex items-center gap-2 border-b border-[var(--border)] px-4 py-3">
                          <Code2 size={13} className="text-[var(--muted)]" />

                          <span className="font-mono text-[9px] tracking-wider text-[var(--muted)]">
                            IMPLEMENTATION
                          </span>
                        </div>

                        <pre className="overflow-x-auto p-4 text-[10px] leading-5 text-[var(--muted)] sm:text-[11px]">
                          <code>{active.code}</code>
                        </pre>
                      </div>
                    )}
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>

        {/* Seller API flow */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6 }}
          className="mt-24"
        >
          <div className="mb-7">
            <p className="text-xs font-semibold tracking-[0.16em] text-[var(--muted)]">
              REAL API EXAMPLE
            </p>

            <h3 className="mt-3 text-2xl font-medium tracking-[-0.025em] sm:text-3xl">
              From user action to REST endpoint.
            </h3>

            <p className="mt-3 max-w-[650px] text-sm leading-6 text-[var(--muted)]">
              A real Seller flow demonstrates how responsibilities are separated
              across the frontend layers.
            </p>
          </div>

          <div className="overflow-hidden rounded-2xl border border-[var(--border)] bg-[var(--surface)]">
            <div className="overflow-x-auto">
              <div className="flex min-w-[950px] items-center p-5 lg:p-7">
                {sellerFlow.map((item, index) => {
                  const Icon = item.icon;

                  return (
                    <div key={item.value} className="flex flex-1 items-center">
                      <motion.div
                        initial={{
                          opacity: 0,
                          scale: 0.95,
                        }}
                        whileInView={{
                          opacity: 1,
                          scale: 1,
                        }}
                        viewport={{
                          once: true,
                        }}
                        transition={{
                          delay: index * 0.08,
                        }}
                        className="min-w-0 flex-1"
                      >
                        <div className="rounded-xl border border-[var(--border)] bg-[var(--bg)] p-4 transition-colors hover:border-[var(--accent)]/30">
                          <div className="flex items-center gap-2">
                            <Icon
                              size={13}
                              className="text-[var(--accent)]"
                              strokeWidth={1.5}
                            />

                            <span className="font-mono text-[8px] tracking-[0.16em] text-[var(--muted)]">
                              {item.label}
                            </span>
                          </div>

                          <p className="mt-3 truncate font-mono text-[11px] text-[var(--text)]">
                            {item.value}
                          </p>
                        </div>
                      </motion.div>

                      {index < sellerFlow.length - 1 && (
                        <div className="flex w-10 shrink-0 justify-center">
                          <ArrowRight
                            size={14}
                            className="text-[var(--muted)]"
                          />
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>

            <div className="border-t border-[var(--border)] px-5 py-4 lg:px-7">
              <div className="flex items-center gap-3">
                <Terminal size={14} className="text-[var(--accent)]" />

                <code className="font-mono text-[10px] text-[var(--muted)]">
                  GET{" "}
                  <span className="text-[var(--text)]">
                    /super-admin/sellers
                  </span>
                </code>

                <span className="ml-auto hidden text-[9px] uppercase tracking-wider text-[var(--muted)] sm:block">
                  typed response → Seller[]
                </span>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Architecture decisions */}
        <div className="mt-6 grid gap-6 lg:grid-cols-[1.15fr_0.85fr]">
          {/* Error handling */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="overflow-hidden rounded-2xl border border-[var(--border)] bg-[var(--surface)]"
          >
            <button
              type="button"
              onClick={() => setShowErrorHandling(!showErrorHandling)}
              className="flex w-full items-center justify-between p-6 text-left sm:p-7"
            >
              <div className="flex items-start gap-4">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-[var(--border)] bg-[var(--bg)]">
                  <LockKeyhole
                    size={17}
                    className="text-[var(--accent)]"
                    strokeWidth={1.5}
                  />
                </div>

                <div>
                  <p className="font-mono text-[9px] tracking-[0.16em] text-[var(--muted)]">
                    CROSS-CUTTING CONCERN
                  </p>

                  <h4 className="mt-2 text-lg font-medium">
                    Centralized error handling
                  </h4>

                  <p className="mt-2 max-w-[560px] text-sm leading-6 text-[var(--muted)]">
                    API failures are normalized into a shared error model
                    instead of being interpreted independently by every feature.
                  </p>
                </div>
              </div>

              <ChevronDown
                size={18}
                className={`shrink-0 text-[var(--muted)] transition-transform ${
                  showErrorHandling ? "rotate-180" : ""
                }`}
              />
            </button>

            <AnimatePresence initial={false}>
              {showErrorHandling && (
                <motion.div
                  initial={{
                    height: 0,
                    opacity: 0,
                  }}
                  animate={{
                    height: "auto",
                    opacity: 1,
                  }}
                  exit={{
                    height: 0,
                    opacity: 0,
                  }}
                  className="overflow-hidden"
                >
                  <div className="border-t border-[var(--border)] p-6 sm:p-7">
                    <pre className="overflow-x-auto rounded-xl border border-[var(--border)] bg-[var(--bg)] p-4 text-[10px] leading-5 text-[var(--muted)] sm:text-[11px]">
                      <code>{errorCode}</code>
                    </pre>

                    <div className="mt-5 grid gap-3 sm:grid-cols-3">
                      {[
                        "HTTP status",
                        "Server message",
                        "Fallback message",
                      ].map((item) => (
                        <div
                          key={item}
                          className="rounded-lg border border-[var(--border)] px-3 py-3"
                        >
                          <Check
                            size={12}
                            className="mb-2 text-[var(--accent)]"
                          />

                          <span className="text-[11px] text-[var(--text)]">
                            {item}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>

          {/* Architecture principles */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-6 sm:p-7"
          >
            <div className="mb-8 flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-[var(--border)] bg-[var(--bg)]">
                <Sparkles
                  size={17}
                  className="text-[var(--accent)]"
                  strokeWidth={1.5}
                />
              </div>

              <div>
                <p className="font-mono text-[9px] tracking-[0.16em] text-[var(--muted)]">
                  DESIGN PRINCIPLES
                </p>

                <h4 className="mt-1 text-lg font-medium">
                  Why this structure?
                </h4>
              </div>
            </div>

            <div className="space-y-5">
              {[
                {
                  title: "Separation of concerns",
                  text: "UI, state, transport and server communication have explicit responsibilities.",
                },
                {
                  title: "Typed contracts",
                  text: "API responses and feature payloads are represented through TypeScript types.",
                },
                {
                  title: "Consistency",
                  text: "The same architectural pattern is reused across the three React applications.",
                },
                {
                  title: "Scalability",
                  text: "New domains can be added without putting API and business logic inside components.",
                },
              ].map((item, index) => (
                <div key={item.title} className="flex gap-4">
                  <span className="font-mono text-[9px] text-[var(--accent)]">
                    0{index + 1}
                  </span>

                  <div>
                    <h5 className="text-sm font-medium">{item.title}</h5>

                    <p className="mt-1 text-xs leading-5 text-[var(--muted)]">
                      {item.text}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Bottom architecture statement */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-24 border-y border-[var(--border)] py-8"
        >
          <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
            <div className="flex items-center gap-4">
              <div className="flex h-10 w-10 items-center justify-center rounded-full border border-[var(--border)]">
                <Triangle
                  size={15}
                  className="text-[var(--accent)]"
                  strokeWidth={1.5}
                />
              </div>

              <p className="max-w-[650px] text-sm leading-6 text-[var(--muted)]">
                The result is a predictable frontend architecture where feature
                components remain focused on the interface, while data access,
                state and transport concerns stay isolated.
              </p>
            </div>

            <div className="flex shrink-0 items-center gap-2 font-mono text-[9px] tracking-[0.14em] text-[var(--muted)]">
              <span className="h-1.5 w-1.5 rounded-full bg-[var(--accent)]" />
              COMPONENT → API → SERVER
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
