"use client";

import React, { useState } from "react";

import {
  SolarSystem,
  OrbitConfig,
  SolarSystemItem,
} from "@/components/ui/solar-system";

import { ShieldCheck } from "lucide-react";

// ============================================================
// Types
// ============================================================

interface ExtendedSolarSystemItem extends Omit<SolarSystemItem, "svg"> {
  svg: string;
  code?: string;
}

interface ExtendedOrbitConfig extends Omit<OrbitConfig, "items"> {
  items: ExtendedSolarSystemItem[];
}

// ============================================================
// Menuly Technology Orbits
// ============================================================

const menulyOrbits: ExtendedOrbitConfig[] = [
  // ==========================================================
  // مدار ۱: Backend & Data
  // ==========================================================
  {
    id: "backend-core",
    name: "Backend & Data",
    radiusClass: "var(--radius-inner)",
    radiusPx: 120,
    speed: 25,

    items: [
      {
        id: "nestjs",
        label: "NestJS",
        type: "Backend Core",
        badge: "REST API",

        desc: "Scalable modular REST API powering Menuly's business logic, authentication, and multi-tenant workspace management.",

        color: "#E0234E",

        svg: "/svgsnapshot/nestjs-icon.svg",

        code: `// Workspace-based tenant resolution

@Injectable()
export class WorkspaceService {

  async findBySlug(slug: string) {

    return this.prisma.workspace.findUnique({
      where: { slug },
    });

  }

}`,
      },

      {
        id: "prisma",
        label: "Prisma",
        type: "Database ORM",
        badge: "PostgreSQL",

        desc: "Type-safe database access layer managing workspaces, menus, products, subscriptions, and related data.",

        color: "#2D3748",

        svg: "/svgsnapshot/icons8-prisma-orm.svg",

        code: `model Workspace {

  id         Int        @id @default(autoincrement())

  name       String

  slug       String     @unique

  categories Category[]

  products   Product[]

}`,
      },
    ],
  },

  // ==========================================================
  // مدار ۲: Frontend Interfaces
  // ==========================================================
  {
    id: "frontend-apps",
    name: "User Interfaces",
    radiusClass: "var(--radius-mid)",
    radiusPx: 220,
    speed: 38,

    items: [
      {
        id: "react-admin",
        label: "React",
        type: "Admin Dashboard",
        badge: "Workspace UI",

        desc: "Interactive administration panel for managing menus, categories, products, themes, and workspace settings.",

        color: "#61DAFB",

        svg: "/svgsnapshot/reactjs-icon.svg",

        code: `export function AdminDashboard() {

  const { workspace } = useWorkspace();

  return (
    <MenuManager
      workspaceId={workspace.id}
    />
  );

}`,
      },

      {
        id: "vue-public",
        label: "Vue 3",
        type: "Public Experience",
        badge: "Customer QR",

        desc: "Fast customer-facing digital menu optimized for mobile devices and QR-based access.",

        color: "#42B883",

        svg: "/svgsnapshot/vuejs-icon.svg",

        code: `<script setup>

import { useMenuStore } from '@/stores/menu'

const store = useMenuStore()

</script>`,
      },

      {
        id: "tailwind",
        label: "Tailwind CSS",
        type: "Design System",
        badge: "Custom Themes",

        desc: "Utility-first styling system used for responsive layouts, theme customization, and interface consistency.",

        color: "#38BDF8",

        svg: "/svgsnapshot/tailwindcss-icon.svg",
      },
    ],
  },

  // ==========================================================
  // مدار ۳: Infrastructure & Production
  // ==========================================================
  {
    id: "infrastructure",
    name: "Infrastructure",
    radiusClass: "var(--radius-outer)",
    radiusPx: 320,
    speed: 52,

    items: [
      {
        id: "nginx",
        label: "Nginx",
        type: "Reverse Proxy",
        badge: "SSL / HTTPS",

        desc: "Production web server routing domains and subdomains to Menuly applications and backend services.",

        color: "#009639",

        svg: "/svgsnapshot/nginx-icon.svg",
      },

      {
        id: "ubuntu",
        label: "Ubuntu",
        type: "Server OS",
        badge: "Linux + PM2",

        desc: "Production Linux server running Menuly applications with PM2 process management.",

        color: "#E95420",

        svg: "/svgsnapshot/ubuntu-icon.svg",
      },
    ],
  },
];

// ============================================================
// Component
// ============================================================

export default function ProjectSnapshot() {
  const [isPaused] = useState(false);

  const [activeItem, setActiveItem] = useState<ExtendedSolarSystemItem | null>(
    menulyOrbits[0].items[0],
  );

  return (
    <section
      id="snapshot"
      className="
      
        relative
        py-24
        mb-24
        bg-zinc-950
        text-white
        overflow-hidden
        border-y
        border-zinc-800/80
      "
    >


      {/* <div
        className="
          absolute
          inset-0
          bg-[linear-gradient(to_right,#1f293715_1px,transparent_1px),linear-gradient(to_bottom,#1f293715_1px,transparent_1px)]
          bg-[size:4rem_4rem]
          [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)]
        "
      />
      <div
        className="
          absolute
          top-1/2
          left-1/2
          -translate-x-1/2
          -translate-y-1/2
          w-[600px]
          h-[600px]
          bg-teal-500/10
          rounded-full
          blur-[140px]
          pointer-events-none
        "
      /> */}


      <div
        className="
          
          relative
         w-[85%]
         mx-auto

        "
      >
        <div className="mb-10">
          <span
            className="
              font-mono
              text-md
              uppercase
              tracking-[0.2em]
              text-[var(--accent)]
            "
          >
            01 / Project Snapshot
          </span>
        </div>

        <div
          className="
            grid
            grid-cols-1
            lg:grid-cols-12
            gap-8
            items-center
          "
        >
          {/* ==================================================
              Solar System
          ================================================== */}

          <div
            className="
              lg:col-span-8
              relative
              flex
              flex-col
              items-center
              justify-center
              min-h-[480px]
            "
          >
            <SolarSystem
              isPaused={isPaused}
              centerLogo={
                <div
                  className="
                    font-mono
                    font-bold
                    text-xs
                    md:text-base
                    text-teal-400
                    tracking-widest
                  "
                >
                  MENULY
                </div>
              }
              centerLogoAlt="Menuly Core Engine"
              orbits={menulyOrbits as unknown as OrbitConfig[]}
            />
          </div>

          {/* ==================================================
              Technology Details Panel
          ================================================== */}

          <div className="lg:col-span-4 z-20">
            <div
              className="
                p-6
                rounded-2xl
                bg-zinc-900/70
                border
                border-zinc-800/80
                backdrop-blur-xl
                shadow-2xl
                space-y-5
              "
            >
              {/* =================================================
                  Technology Selector
              ================================================= */}

              <div>
                <span
                  className="
                    text-xs
                    font-mono
                    text-zinc-500
                    uppercase
                    tracking-wider
                    block
                    mb-3
                  "
                >
                  Select Layer Node
                </span>

                <div className="flex flex-wrap gap-2">
                  {menulyOrbits
                    .flatMap((orbit) => orbit.items)
                    .map((item) => {
                      const isSelected = activeItem?.id === item.id;

                      return (
                        <button
                          key={item.id}
                          type="button"
                          onClick={() => setActiveItem(item)}
                          aria-label={`Select ${item.label}`}
                          className={`
                            flex
                            items-center
                            gap-1.5
                            px-3
                            py-1.5
                            rounded-lg
                            text-xs
                            font-medium
                            transition-all
                            border

                            ${
                              isSelected
                                ? `
                                  bg-zinc-800
                                  text-white
                                  border-teal-500/50
                                  shadow-sm
                                `
                                : `
                                  bg-zinc-950/50
                                  text-zinc-400
                                  border-zinc-800
                                  hover:border-zinc-700
                                  hover:text-zinc-200
                                `
                            }
                          `}
                        >
                          <img
                            src={item.svg}
                            alt=""
                            aria-hidden="true"
                            className="
                              w-5
                              h-5
                              object-contain
                            "
                          />
                        </button>
                      );
                    })}
                </div>
              </div>

              {/* =================================================
                  Divider
              ================================================= */}

              <hr className="border-zinc-800" />

              {/* =================================================
                  Active Technology
              ================================================= */}

              {activeItem ? (
                <div className="space-y-4">
                  {/* =============================================
                      Technology Header
                  ============================================= */}

                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      {/* =========================================
                          Technology Icon
                      ========================================= */}

                      <div
                        className="
                          p-2.5
                          rounded-xl
                          bg-zinc-950
                          border
                          border-zinc-800
                        "
                        style={{
                          color: activeItem.color,
                        }}
                      >
                        <img
                          src={activeItem.svg}
                          alt={activeItem.label}
                          className="
                            w-5
                            h-5
                            object-contain
                          "
                        />
                      </div>

                      {/* =========================================
                          Technology Name
                      ========================================= */}

                      <div>
                        <h3
                          className="
                            font-bold
                            text-lg
                            text-white
                          "
                        >
                          {activeItem.label}
                        </h3>

                        <p
                          className="
                            text-xs
                            text-zinc-400
                          "
                        >
                          {activeItem.type}
                        </p>
                      </div>
                    </div>

                    {/* ===========================================
                        Badge
                    =========================================== */}

                    {activeItem.badge && (
                      <span
                        className="
                          px-2.5
                          py-1
                          rounded-full
                          text-[10px]
                          font-mono
                          bg-zinc-800
                          text-teal-300
                          border
                          border-zinc-700
                        "
                      >
                        {activeItem.badge}
                      </span>
                    )}
                  </div>

                  {/* =============================================
                      Description
                  ============================================= */}

                  <p
                    className="
                      text-sm
                      text-zinc-300
                      leading-relaxed
                    "
                  >
                    {activeItem.desc}
                  </p>
                </div>
              ) : (
                <p className="text-xs text-zinc-500">
                  Select a technology node above to inspect details.
                </p>
              )}

              {/* =================================================
                  System Status
              ================================================= */}

              <div
                className="
                  pt-2
                  flex
                  items-center
                  justify-between
                  text-[11px]
                  text-zinc-500
                  border-t
                  border-zinc-800/60
                "
              >
                <span
                  className="
                    flex
                    items-center
                    gap-1.5
                  "
                >
                  <ShieldCheck
                    className="
                      w-3.5
                      h-3.5
                      text-emerald-500
                    "
                  />
                  Isolated Tenant Environments
                </span>

                <span
                  className="
                    font-mono
                    text-zinc-400
                  "
                >
                  v2.4.0
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
