
"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowUpRight,
  ChevronLeft,
  ChevronRight,
  LayoutDashboard,
  Store,
  Globe2,
  ShieldCheck,
  Users,
  CreditCard,
  Package,
  Palette,
  QrCode,
} from "lucide-react";

type ProductId = "control" | "seller" | "admin" | "public";

type Product = {
  id: ProductId;
  number: string;
  name: string;
  role: string;
  description: string;
  features: string[];
  icon: React.ElementType;
  image?: string;
};

const products: Product[] = [
  {
    id: "control",
    number: "01",
    name: "Control Center",
    role: "Platform Management",
    description:
      "The central layer of Menuly. Sellers, workspaces, payments and subscriptions are managed from one operational interface.",
    features: ["Sellers", "Workspaces", "Payments", "Subscriptions"],
    icon: ShieldCheck,
    image: "/images/control.jpg",
  },
  {
    id: "seller",
    number: "02",
    name: "Seller Menuly",
    role: "Sales & Distribution",
    description:
      "A dedicated workspace for sellers to create businesses, manage customers and track the menus they sell.",
    features: ["Customers", "Sales", "Workspaces", "Commission"],
    icon: Users,
    image: "/images/seller.PNG",
  },
  {
    id: "admin",
    number: "03",
    name: "Admin Menuly",
    role: "Business Operations",
    description:
      "The operational workspace where each business manages its menu, products, categories and visual identity.",
    features: ["Products", "Categories", "Theme", "QR Code"],
    icon: LayoutDashboard,
    image: "/images/admintheme.PNG",
  },
  {
    id: "public",
    number: "04",
    name: "Public Menu",
    role: "Customer Experience",
    description:
      "The customer-facing experience generated from the business workspace and optimized for browsing on mobile devices.",
    features: ["Menu", "Products", "Responsive", "QR Access"],
    icon: Globe2,
    image: "/images/public.jpg",
  },
];

const mockSidebar = [
  "Dashboard",
  "Workspaces",
  "Sellers",
  "Payments",
  "Subscriptions",
];

function MockDashboard({ product }: { product: Product }) {
  const Icon = product.icon;

  return (
    <div className="relative h-full min-h-[420px] overflow-hidden bg-[#0b0b0b]">
      {/* Browser top */}
      <div className="flex h-10 items-center gap-2 border-b border-white/[0.08] px-4">
        <span className="h-2 w-2 rounded-full bg-white/20" />
        <span className="h-2 w-2 rounded-full bg-white/20" />
        <span className="h-2 w-2 rounded-full bg-white/20" />

        <div className="ml-5 h-5 flex-1 rounded-md border border-white/[0.06] bg-white/[0.025]" />

        <span className="font-mono text-[7px] uppercase tracking-widest text-white/20">
          menuly.app
        </span>
      </div>

      <div className="flex h-[calc(100%-40px)]">
        {/* Sidebar */}
        <div className="hidden w-[145px] border-r border-white/[0.07] p-4 sm:block">
          <div className="mb-8 flex items-center gap-2">
            <div className="flex h-6 w-6 items-center justify-center rounded-md bg-white text-black">
              <Icon size={12} />
            </div>

            <span className="font-mono text-[9px] font-medium tracking-wider text-white/70">
              MENULY
            </span>
          </div>

          <div className="space-y-1">
            {mockSidebar.map((item, index) => (
              <div
                key={item}
                className={`flex items-center gap-2 rounded-md px-2.5 py-2 font-mono text-[8px] ${
                  index === 0
                    ? "bg-white/[0.08] text-white"
                    : "text-white/30"
                }`}
              >
                <span className="h-1 w-1 rounded-full bg-current" />
                {item}
              </div>
            ))}
          </div>
        </div>

        {/* Main */}
        <div className="flex-1 overflow-hidden p-5 sm:p-7">
          <div className="mb-6 flex items-end justify-between">
            <div>
              <span className="font-mono text-[8px] uppercase tracking-[0.2em] text-white/25">
                {product.role}
              </span>

              <h3 className="mt-1 text-xl font-light tracking-tight text-white">
                {product.name}
              </h3>
            </div>

            <div className="hidden border border-white/[0.08] px-3 py-2 font-mono text-[7px] uppercase tracking-widest text-white/30 sm:block">
              Overview
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 gap-2 sm:grid-cols-4">
            {product.features.map((feature, index) => (
              <div
                key={feature}
                className="border border-white/[0.07] bg-white/[0.015] p-3"
              >
                <span className="font-mono text-[7px] uppercase tracking-wider text-white/25">
                  0{index + 1}
                </span>

                <div className="mt-4 text-[10px] text-white/65">
                  {feature}
                </div>

                <div className="mt-2 h-1 w-10 rounded-full bg-white/10">
                  <div
                    className="h-full rounded-full bg-white/40"
                    style={{ width: `${45 + index * 12}%` }}
                  />
                </div>
              </div>
            ))}
          </div>

          {/* Main chart */}
          <div className="mt-3 border border-white/[0.07] p-4">
            <div className="mb-5 flex items-center justify-between">
              <span className="font-mono text-[8px] uppercase tracking-wider text-white/30">
                Activity
              </span>

              <span className="font-mono text-[8px] text-white/20">
                LAST 30 DAYS
              </span>
            </div>

            <div className="flex h-[135px] items-end gap-1.5">
              {[35, 50, 42, 68, 58, 75, 62, 82, 70, 92, 76, 96, 84, 100, 88].map(
                (height, index) => (
                  <motion.div
                    key={index}
                    initial={{ height: 0 }}
                    animate={{ height: `${height}%` }}
                    transition={{
                      delay: index * 0.025,
                      duration: 0.5,
                    }}
                    className="flex-1 bg-white/[0.12]"
                  />
                ),
              )}
            </div>
          </div>

          {/* Bottom cards */}
          <div className="mt-3 grid grid-cols-2 gap-3">
            <div className="border border-white/[0.07] p-4">
              <span className="font-mono text-[7px] uppercase tracking-widest text-white/20">
                System Status
              </span>

              <div className="mt-4 flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-[var(--accent)]" />
                <span className="font-mono text-[9px] text-white/60">
                  Operational
                </span>
              </div>
            </div>

            <div className="border border-white/[0.07] p-4">
              <span className="font-mono text-[7px] uppercase tracking-widest text-white/20">
                Environment
              </span>

              <div className="mt-4 font-mono text-[9px] text-white/60">
                PRODUCTION
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function PublicMenuMock() {
  return (
    <div className="flex h-full min-h-[420px] items-center justify-center bg-[#090909] p-8">
      <div className="relative w-full max-w-[290px] overflow-hidden rounded-[22px] border border-white/[0.1] bg-[#111] shadow-2xl">
        <div className="h-6 border-b border-white/[0.06] px-3">
          <div className="mx-auto mt-2 h-1 w-10 rounded-full bg-white/10" />
        </div>

        <div className="px-5 pb-6 pt-6">
          <div className="text-center">
            <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full border border-white/[0.1]">
              <Store size={17} className="text-white/70" />
            </div>

            <h3 className="mt-3 text-lg font-light text-white">
              Cafe Menuly
            </h3>

            <p className="mt-1 font-mono text-[7px] uppercase tracking-widest text-white/25">
              Digital Menu
            </p>
          </div>

          <div className="mt-7 flex gap-2 overflow-hidden">
            {["Popular", "Coffee", "Food"].map((item, index) => (
              <span
                key={item}
                className={`whitespace-nowrap rounded-full border px-3 py-1.5 font-mono text-[7px] ${
                  index === 0
                    ? "border-white/30 bg-white text-black"
                    : "border-white/[0.08] text-white/30"
                }`}
              >
                {item}
              </span>
            ))}
          </div>

          <div className="mt-5 space-y-2">
            {[
              ["Cappuccino", "$4.50"],
              ["Classic Burger", "$9.90"],
              ["Chocolate Cake", "$6.20"],
            ].map(([name, price]) => (
              <div
                key={name}
                className="flex items-center justify-between border border-white/[0.07] p-3"
              >
                <div>
                  <span className="block text-[10px] text-white/70">
                    {name}
                  </span>
                  <span className="mt-1 block font-mono text-[7px] text-white/20">
                    Available
                  </span>
                </div>

                <span className="font-mono text-[9px] text-white/50">
                  {price}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default function ProductShowcase() {
  const [activeIndex, setActiveIndex] = useState(0);

  const activeProduct = products[activeIndex];

  const next = () => {
    setActiveIndex((current) => (current + 1) % products.length);
  };

  const previous = () => {
    setActiveIndex(
      (current) => (current - 1 + products.length) % products.length,
    );
  };

  return (
    <section
      id="showcase"
      className="relative overflow-hidden bg-[var(--bg)] text-[var(--white)]"
    >
      <div className="mx-auto mt-25 w-[85%]">
        {/* Header */}
          <div className="mb-8">
            <span className="font-mono text-md uppercase tracking-[0.2em] text-[var(--accent)]">
              05 / Product Showcase
            </span>
          </div>
        <div className=" border-b border-[var(--border)] pb-12 ">
        

          <div>
            <h2 className="max-w-4xl text-4xl font-light leading-[1.04] tracking-[-0.04em] sm:text-5xl lg:text-7xl">
              See Menuly
              <br />
              <span className="text-[var(--muted)]">in action.</span>
            </h2>

            <p className="mt-7 max-w-2xl text-sm font-light leading-7 text-[var(--muted)] sm:text-base">
              Four interfaces, one connected product ecosystem. Each layer
              serves a different role while sharing the same underlying
              workspace architecture.
            </p>
          </div>
        </div>

        {/* Product Tabs */}
        <div className="border-b border-[var(--border)]">
          <div className="grid grid-cols-2 lg:grid-cols-4">
            {products.map((product, index) => {
              const Icon = product.icon;
              const active = index === activeIndex;

              return (
                <button
                  key={product.id}
                  type="button"
                  onClick={() => setActiveIndex(index)}
                  className={`group relative border-r border-[var(--border)] px-4 py-5 text-left transition-colors last:border-r-0 sm:px-6 ${
                    active
                      ? "bg-[var(--surface-hover,#18181b)]"
                      : "hover:bg-[var(--surface-hover,#18181b)]"
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <span
                      className={`font-mono text-[9px] tracking-widest ${
                        active
                          ? "text-[var(--accent)]"
                          : "text-[var(--muted)]"
                      }`}
                    >
                      [{product.number}]
                    </span>

                    <Icon
                      size={15}
                      strokeWidth={1.5}
                      className={
                        active
                          ? "text-[var(--accent)]"
                          : "text-[var(--muted)]"
                      }
                    />
                  </div>

                  <div
                    className={`mt-4 text-xs sm:text-sm ${
                      active ? "text-[var(--white)]" : "text-[var(--muted)]"
                    }`}
                  >
                    {product.name}
                  </div>

                  {active && (
                    <motion.div
                      layoutId="showcase-active"
                      className="absolute bottom-0 left-0 right-0 h-px bg-[var(--accent)]"
                    />
                  )}
                </button>
              );
            })}
          </div>
        </div>

        {/* Showcase */}
        <div className="grid lg:grid-cols-[1fr_310px]">
          {/* Visual */}
          <div className="relative min-h-[420px] border-b border-[var(--border)] lg:border-b-0 lg:border-r">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeProduct.id}
                initial={{ opacity: 0, scale: 0.985, y: 8 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.985, y: -8 }}
                transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                className="h-full"
              >

                  <div className="relative h-full min-h-[420px] overflow-hidden bg-[#0b0b0b]">
                    <img
                      src={activeProduct.image}
                      alt={activeProduct.name}
                      className=" w-full object-cover object-top"
                    />

                    <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                  </div>
                
              </motion.div>
            </AnimatePresence>

            {/* Image label */}
            <div className="absolute bottom-5 left-5 z-10 flex items-center gap-2 border border-white/[0.1] bg-black/60 px-3 py-2 backdrop-blur-md">
              <span className="h-1.5 w-1.5 rounded-full bg-[var(--accent)]" />

              <span className="font-mono text-[8px] uppercase tracking-[0.18em] text-white/50">
                {activeProduct.role}
              </span>
            </div>
          </div>

          {/* Information */}
          <div className="flex min-h-[420px] flex-col">
            <div className="flex-1 p-6 sm:p-8">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeProduct.id}
                  initial={{ opacity: 0, x: 12 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -12 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-[var(--accent)]">
                      {activeProduct.number} / 04
                    </span>

                    <ArrowUpRight
                      size={16}
                      className="text-[var(--muted)]"
                    />
                  </div>

                  <h3 className="mt-10 text-3xl font-light tracking-[-0.03em] sm:text-4xl">
                    {activeProduct.name}
                  </h3>

                  <p className="mt-2 font-mono text-[9px] uppercase tracking-[0.16em] text-[var(--muted)]">
                    {activeProduct.role}
                  </p>

                  <p className="mt-8 text-sm font-light leading-7 text-[var(--muted)]">
                    {activeProduct.description}
                  </p>

                  <div className="mt-10">
                    <span className="font-mono text-[9px] uppercase tracking-[0.2em] text-[var(--muted)]">
                      Core Areas
                    </span>

                    <div className="mt-4 flex flex-wrap gap-2">
                      {activeProduct.features.map((feature) => (
                        <span
                          key={feature}
                          className="border border-[var(--border)] bg-[var(--surface,#111)] px-3 py-2 font-mono text-[9px] uppercase tracking-wider text-[var(--text)]"
                        >
                          {feature}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Navigation */}
            <div className="flex items-center justify-between border-t border-[var(--border)] p-5">
              <button
                type="button"
                onClick={previous}
                aria-label="Previous product"
                className="flex h-10 w-10 items-center justify-center border border-[var(--border)] text-[var(--muted)] transition-colors hover:border-[var(--accent)] hover:text-[var(--accent)]"
              >
                <ChevronLeft size={16} />
              </button>

              <div className="flex items-center gap-2">
                {products.map((product, index) => (
                  <button
                    key={product.id}
                    type="button"
                    onClick={() => setActiveIndex(index)}
                    aria-label={`Go to ${product.name}`}
                    className="group p-1"
                  >
                    <span
                      className={`block h-px transition-all duration-300 ${
                        index === activeIndex
                          ? "w-8 bg-[var(--accent)]"
                          : "w-3 bg-[var(--border)] group-hover:w-5 group-hover:bg-[var(--muted)]"
                      }`}
                    />
                  </button>
                ))}
              </div>

              <button
                type="button"
                onClick={next}
                aria-label="Next product"
                className="flex h-10 w-10 items-center justify-center border border-[var(--border)] text-[var(--muted)] transition-colors hover:border-[var(--accent)] hover:text-[var(--accent)]"
              >
                <ChevronRight size={16} />
              </button>
            </div>
          </div>
        </div>

        {/* Bottom statement */}
        <div className="border-b border-[var(--border)] py-16 sm:py-20 lg:py-24">
          <div className="grid gap-8 lg:grid-cols-[200px_1fr] lg:gap-16">
            <span className="font-mono text-xs uppercase tracking-[0.2em] text-[var(--muted)]">
              Product Surface
            </span>

            <div>
              <p className="max-w-4xl text-xl font-light leading-relaxed text-[var(--text)] sm:text-2xl lg:text-3xl">
                Different interfaces,
                <strong className="font-normal text-[var(--white)]">
                  {" "}
                  different responsibilities,
                </strong>{" "}
                but one shared system underneath — from platform management
                to the final customer interaction.
              </p>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="flex flex-col justify-between gap-3 py-6 sm:flex-row sm:items-center">
          <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-[var(--muted)]">
            06 / Product Showcase
          </span>

          <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-[var(--muted)]">
            Four Interfaces / One Ecosystem
          </span>
        </div>
      </div>
    </section>
  );
}

