"use client";

import { useState, type ElementType } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  ArrowRight,
  Bell,
  Check,
  ChevronRight,
  CreditCard,
  Globe2,
  Layers3,
  LayoutGrid,
  Palette,
  QrCode,
  ReceiptText,
  Settings2,
  Smartphone,
  Store,
  Tag,
  UserRound,
} from "lucide-react";

type Feature = {
  title: string;
  description: string;
};

type FeatureSection = {
  number: string;
  label: string;
  title: string;
  description: string;
  icon: ElementType;
  features: Feature[];
};

const featureSections: FeatureSection[] = [
  {
    number: "01",
    label: "MENU MANAGEMENT",
    title: "Menu Management",
    description:
      "A structured menu management system for organizing categories, products, variants, pricing and availability.",
    icon: LayoutGrid,
    features: [
      {
        title: "Category Management",
        description:
          "Create, edit and organize categories across the cafe menu.",
      },
      {
        title: "Product Management",
        description:
          "Create, edit and remove menu products from one management interface.",
      },
      {
        title: "Product Variants",
        description:
          "Manage product sizes and define size-specific pricing.",
      },
      {
        title: "Discount Management",
        description:
          "Apply and manage discounts directly on product prices.",
      },
      {
        title: "Availability Control",
        description:
          "Control whether products are currently available on the public menu.",
      },
      {
        title: "Cafe Information",
        description:
          "Manage the business information displayed throughout the customer menu.",
      },
    ],
  },

  {
    number: "02",
    label: "THEME & CUSTOMIZATION",
    title: "Theme & Customization",
    description:
      "A configurable visual system that allows each cafe to create a distinct menu experience without changing its underlying content.",
    icon: Palette,
    features: [
      {
        title: "Theme Selection",
        description:
          "Configure the visual theme used by the public menu.",
      },
      {
        title: "Adaptive Appearance",
        description:
          "Automatically respond to the customer's device Dark or Light preference.",
      },
      {
        title: "Color System",
        description:
          "Define color palettes with dedicated values for Dark and Light appearances.",
      },
      {
        title: "Card Styles",
        description:
          "Choose between Default, Vertical, Vintage and Glass product card layouts.",
      },
      {
        title: "Layout Customization",
        description:
          "Control image placement and other visual arrangements across the menu.",
      },
      {
        title: "Custom Icons",
        description:
          "Use custom icons to personalize selected interface elements.",
      },
    ],
  },

  {
    number: "03",
    label: "WORKSPACE",
    title: "Workspace",
    description:
      "An independent business environment connecting Seller access, administration, menu data, settings and the public customer experience.",
    icon: Store,
    features: [
      {
        title: "Workspace Creation",
        description:
          "Create an independent workspace for each business.",
      },
      {
        title: "Workspace Management",
        description:
          "Manage workspace-specific information and configuration.",
      },
      {
        title: "Seller Access",
        description:
          "Connect a Seller to a workspace for creation and visibility.",
      },
      {
        title: "Admin Panel",
        description:
          "Provide a dedicated environment for managing the cafe menu and settings.",
      },
      {
        title: "Permissions",
        description:
          "Control access to protected workspace management areas.",
      },
      {
        title: "Plan Selection",
        description:
          "Select the appropriate Go or Plus plan for the workspace.",
      },
      {
        title: "Public Menu",
        description:
          "Connect the workspace to its customer-facing menu.",
      },
      {
        title: "Custom Menu URL",
        description:
          "Give every workspace its own public menu address.",
      },
      {
        title: "QR Code",
        description:
          "Provide a direct QR entry point to the public menu.",
      },
    ],
  },

  {
    number: "04",
    label: "SELLER PANEL",
    title: "Seller Panel",
    description:
      "A dedicated sales environment for managing customer workspaces, contracts, payments and Seller performance.",
    icon: UserRound,
    features: [
      {
        title: "Seller Management",
        description:
          "Create and manage Seller accounts within the platform.",
      },
      {
        title: "Seller Authentication",
        description:
          "Provide secure authentication for Seller access.",
      },
      {
        title: "Workspace Overview",
        description:
          "View customer workspaces associated with the Seller.",
      },
      {
        title: "Customer Workspace Creation",
        description:
          "Create workspaces for customers directly from the Seller environment.",
      },
      {
        title: "Payment Overview",
        description:
          "View payment status associated with Seller workspaces.",
      },
      {
        title: "Contract Management",
        description:
          "Manage customer contracts connected to the Seller.",
      },
      {
        title: "Seller Share",
        description:
          "Track the Seller's share from customer sales.",
      },
    ],
  },

  {
    number: "05",
    label: "PAYMENT & SUBSCRIPTION",
    title: "Payment & Subscription",
    description:
      "A separate financial lifecycle for recording payments, handling receipts, verifying transactions and managing subscriptions.",
    icon: CreditCard,
    features: [
      {
        title: "Payment Management",
        description:
          "Create, view and track payment records throughout their lifecycle.",
      },
      {
        title: "Payment Verification",
        description:
          "Review submitted payments and confirm their status.",
      },
      {
        title: "Receipt Management",
        description:
          "Add, view and associate receipts with their corresponding payments.",
      },
      {
        title: "Payment History",
        description:
          "Maintain a traceable history of financial activity.",
      },
      {
        title: "Subscription Activation",
        description:
          "Activate a subscription after the relevant payment is verified.",
      },
      {
        title: "Annual Subscription",
        description:
          "Manage a 365-day subscription lifecycle.",
      },
      {
        title: "Subscription Tracking",
        description:
          "Calculate subscription start date, end date and remaining days.",
      },
      {
        title: "Subscription Renewal",
        description:
          "Extend an existing subscription for another billing period.",
      },
    ],
  },

  {
    number: "06",
    label: "NOTIFICATIONS",
    title: "Notifications",
    description:
      "Event-based notifications keep cafe owners informed about important changes throughout the payment lifecycle.",
    icon: Bell,
    features: [
      {
        title: "Payment Notifications",
        description:
          "Notify the cafe owner when a payment is created or updated.",
      },
      {
        title: "Receipt Notifications",
        description:
          "Notify the owner when a receipt is added or changed.",
      },
      {
        title: "Status Notifications",
        description:
          "Send updates when the payment status changes.",
      },
      {
        title: "SMS Delivery",
        description:
          "Deliver payment-related event notifications directly to the cafe owner.",
      },
    ],
  },

  {
    number: "07",
    label: "PUBLIC MENU",
    title: "Public Menu",
    description:
      "The customer-facing experience that renders each workspace's menu across devices and connects directly to its QR entry point.",
    icon: Globe2,
    features: [
      {
        title: "Menu Display",
        description:
          "Render the workspace's menu as the public customer experience.",
      },
      {
        title: "Category Browsing",
        description:
          "Organize and browse products through menu categories.",
      },
      {
        title: "Product Display",
        description:
          "Display product information, variants and pricing.",
      },
      {
        title: "Availability Display",
        description:
          "Reflect the current availability state of products.",
      },
      {
        title: "Responsive Experience",
        description:
          "Adapt the menu experience across mobile, tablet and desktop screens.",
      },
      {
        title: "Theme Rendering",
        description:
          "Apply the workspace's selected theme, colors and card styles.",
      },
      {
        title: "QR Access",
        description:
          "Open the public menu directly through the workspace QR Code.",
      },
    ],
  },
];

/* -------------------------------------------------------------------------- */
/* VISUALS                                                                    */
/* -------------------------------------------------------------------------- */

function MenuManagementVisual() {
  return (
    <div className="rounded-2xl border border-[var(--border)] bg-[var(--surface,#111)] p-5 sm:p-6">
      <div className="flex items-center justify-between border-b border-[var(--border)] pb-5">
        <div>
          <span className="font-mono text-[8px] uppercase tracking-[0.18em] text-[var(--muted)]">
            Menu Management
          </span>

          <p className="mt-1 text-sm text-[var(--white)]">
            Cafe Menu
          </p>
        </div>

        <div className="rounded-lg border border-[var(--border)] px-3 py-2 font-mono text-[8px] text-[var(--muted)]">
          + Product
        </div>
      </div>

      <div className="mt-5 space-y-2">
        {[
          ["Coffee", "12 products"],
          ["Cold Drinks", "8 products"],
          ["Desserts", "6 products"],
        ].map(([name, count], index) => (
          <motion.div
            key={name}
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.07 }}
            className="flex items-center justify-between rounded-xl border border-[var(--border)] bg-[var(--bg)] p-3.5"
          >
            <div className="flex items-center gap-3">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg border border-[var(--border)]">
                <Layers3
                  size={13}
                  className="text-[var(--accent)]"
                />
              </div>

              <div>
                <p className="text-xs text-[var(--white)]">
                  {name}
                </p>

                <p className="mt-1 font-mono text-[8px] text-[var(--muted)]">
                  {count}
                </p>
              </div>
            </div>

            <ChevronRight
              size={13}
              className="text-[var(--muted)]"
            />
          </motion.div>
        ))}
      </div>

      <div className="mt-4 grid grid-cols-3 gap-2">
        {["Small", "Medium", "Large"].map((size) => (
          <div
            key={size}
            className="rounded-lg border border-[var(--border)] px-2 py-2 text-center font-mono text-[8px] text-[var(--muted)]"
          >
            {size}
          </div>
        ))}
      </div>

      <div className="mt-3 flex items-center justify-between rounded-lg border border-[var(--border)] p-3">
        <span className="text-[10px] text-[var(--muted)]">
          Discount
        </span>

        <span className="font-mono text-[9px] text-[var(--accent)]">
          -15%
        </span>
      </div>
    </div>
  );
}

function CustomizationVisual() {
  return (
    <div className="rounded-2xl border border-[var(--border)] bg-[var(--surface,#111)] p-5 sm:p-6">
      <div className="flex items-center justify-between">
        <div>
          <span className="font-mono text-[8px] uppercase tracking-[0.18em] text-[var(--muted)]">
            Theme System
          </span>

          <p className="mt-1 text-sm text-[var(--white)]">
            Adaptive Appearance
          </p>
        </div>

        <Palette
          size={16}
          className="text-[var(--accent)]"
        />
      </div>

      <div className="mt-6 grid grid-cols-2 gap-3">
        <div className="rounded-xl border border-[var(--border)] bg-black p-4">
          <div className="flex items-center justify-between">
            <span className="font-mono text-[8px] tracking-[0.14em] text-white/40">
              DARK
            </span>

            <span className="h-4 w-4 rounded-full border border-white/10 bg-white/5" />
          </div>

          <div className="mt-5 space-y-2">
            <div className="h-2 w-16 rounded-full bg-white/20" />
            <div className="h-2 w-24 rounded-full bg-white/10" />
            <div className="h-8 rounded-lg border border-white/10" />
          </div>
        </div>

        <div className="rounded-xl border border-[var(--border)] bg-white p-4">
          <div className="flex items-center justify-between">
            <span className="font-mono text-[8px] tracking-[0.14em] text-black/40">
              LIGHT
            </span>

            <span className="h-4 w-4 rounded-full border border-black/10 bg-black/5" />
          </div>

          <div className="mt-5 space-y-2">
            <div className="h-2 w-16 rounded-full bg-black/20" />
            <div className="h-2 w-24 rounded-full bg-black/10" />
            <div className="h-8 rounded-lg border border-black/10" />
          </div>
        </div>
      </div>

      <div className="mt-3 rounded-xl border border-[var(--border)] bg-[var(--bg)] p-4">
        <div className="flex items-center justify-between">
          <span className="font-mono text-[8px] uppercase tracking-[0.14em] text-[var(--muted)]">
            Color Palette
          </span>

          <div className="flex gap-1.5">
            {[1, 2, 3, 4, 5].map((item) => (
              <span
                key={item}
                className="h-4 w-4 rounded-full border border-[var(--border)]"
              />
            ))}
          </div>
        </div>
      </div>

      <div className="mt-3 grid grid-cols-4 gap-2">
        {["DEFAULT", "VERTICAL", "VINTAGE", "GLASS"].map(
          (style, index) => (
            <div
              key={style}
              className={`rounded-lg border border-[var(--border)] p-2 ${
                index === 3
                  ? "bg-white/[0.05] backdrop-blur-md"
                  : "bg-[var(--bg)]"
              }`}
            >
              <div className="h-8 rounded-md border border-[var(--border)]" />

              <span className="mt-2 block font-mono text-[6px] tracking-[0.08em] text-[var(--muted)]">
                {style}
              </span>
            </div>
          ),
        )}
      </div>
    </div>
  );
}

function WorkspaceVisual() {
  return (
    <div className="rounded-2xl border border-[var(--border)] bg-[var(--surface,#111)] p-5 sm:p-6">
      <div className="flex flex-col items-center">
        <div className="flex items-center gap-2 rounded-xl border border-[var(--accent)]/30 bg-[var(--accent)]/[0.04] px-5 py-3">
          <UserRound
            size={13}
            className="text-[var(--accent)]"
          />

          <div>
            <span className="block font-mono text-[7px] tracking-[0.14em] text-[var(--accent)]">
              SELLER
            </span>

            <span className="text-xs text-[var(--white)]">
              Create Workspace
            </span>
          </div>
        </div>

        <div className="h-6 w-px bg-[var(--border)]" />

        <div className="w-full rounded-xl border border-[var(--accent)]/30 bg-[var(--bg)] p-4 text-center">
          <span className="font-mono text-[8px] tracking-[0.16em] text-[var(--accent)]">
            WORKSPACE
          </span>

          <p className="mt-1 text-sm text-[var(--white)]">
            Cafe Workspace
          </p>

          <div className="mt-3 flex justify-center gap-2">
            <span className="rounded-md border border-[var(--border)] px-2 py-1 font-mono text-[7px] text-[var(--muted)]">
              GO
            </span>

            <span className="rounded-md border border-[var(--accent)]/30 px-2 py-1 font-mono text-[7px] text-[var(--accent)]">
              PLUS
            </span>
          </div>
        </div>

        <div className="relative h-10 w-[80%]">
          <div className="absolute left-1/2 top-0 h-4 w-px -translate-x-1/2 bg-[var(--border)]" />
          <div className="absolute left-0 right-0 top-4 h-px bg-[var(--border)]" />
          <div className="absolute left-0 top-4 h-6 w-px bg-[var(--border)]" />
          <div className="absolute right-0 top-4 h-6 w-px bg-[var(--border)]" />
        </div>

        <div className="grid w-full grid-cols-2 gap-3">
          <div className="rounded-xl border border-[var(--border)] bg-[var(--bg)] p-4">
            <Settings2
              size={14}
              className="text-[var(--accent)]"
            />

            <span className="mt-3 block font-mono text-[7px] tracking-[0.14em] text-[var(--muted)]">
              ADMIN
            </span>

            <p className="mt-1 text-xs text-[var(--white)]">
              Manage Menu
            </p>
          </div>

          <div className="rounded-xl border border-[var(--border)] bg-[var(--bg)] p-4">
            <Globe2
              size={14}
              className="text-[var(--accent)]"
            />

            <span className="mt-3 block font-mono text-[7px] tracking-[0.14em] text-[var(--muted)]">
              PUBLIC
            </span>

            <p className="mt-1 text-xs text-[var(--white)]">
              Customer Menu
            </p>
          </div>
        </div>

        <div className="mt-3 flex items-center gap-2 rounded-lg border border-[var(--border)] px-3 py-2">
          <QrCode
            size={12}
            className="text-[var(--muted)]"
          />

          <span className="font-mono text-[8px] text-[var(--muted)]">
            QR CODE → PUBLIC MENU
          </span>
        </div>
      </div>
    </div>
  );
}

function SellerVisual() {
  return (
    <div className="rounded-2xl border border-[var(--border)] bg-[var(--surface,#111)] p-5 sm:p-6">
      <div className="flex items-center justify-between border-b border-[var(--border)] pb-5">
        <div>
          <span className="font-mono text-[8px] uppercase tracking-[0.18em] text-[var(--muted)]">
            Seller Panel
          </span>

          <p className="mt-1 text-sm text-[var(--white)]">
            Business Overview
          </p>
        </div>

        <UserRound
          size={16}
          className="text-[var(--accent)]"
        />
      </div>

      <div className="mt-5 grid grid-cols-2 gap-3">
        {[
          ["Workspaces", "08"],
          ["Payments", "24"],
          ["Contracts", "08"],
          ["Share", "12%"],
        ].map(([label, value], index) => (
          <motion.div
            key={label}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.06 }}
            className="rounded-xl border border-[var(--border)] bg-[var(--bg)] p-4"
          >
            <span className="font-mono text-[7px] uppercase tracking-[0.12em] text-[var(--muted)]">
              {label}
            </span>

            <p className="mt-3 text-xl font-light text-[var(--white)]">
              {value}
            </p>
          </motion.div>
        ))}
      </div>

      <div className="mt-3 rounded-xl border border-[var(--border)] bg-[var(--bg)] p-4">
        <span className="font-mono text-[7px] uppercase tracking-[0.14em] text-[var(--muted)]">
          Customer Workspace
        </span>

        <div className="mt-3 flex items-center justify-between">
          <span className="text-xs text-[var(--white)]">
            Cafe Workspace
          </span>

          <span className="rounded-md border border-[var(--accent)]/30 px-2 py-1 font-mono text-[7px] text-[var(--accent)]">
            ACTIVE
          </span>
        </div>
      </div>
    </div>
  );
}

function PaymentVisual() {
  return (
    <div className="rounded-2xl border border-[var(--border)] bg-[var(--surface,#111)] p-5 sm:p-6">
      <div className="grid gap-3 md:grid-cols-2">
        <div className="rounded-xl border border-[var(--border)] bg-[var(--bg)] p-4">
          <div className="flex items-center gap-2">
            <CreditCard
              size={13}
              className="text-[var(--accent)]"
            />

            <span className="font-mono text-[8px] tracking-[0.14em] text-[var(--accent)]">
              PAYMENT
            </span>
          </div>

          <div className="mt-4 space-y-2">
            {[
              ["Payment", CreditCard],
              ["Receipt", ReceiptText],
              ["Verification", Check],
            ].map(([label, Icon]) => {
              const ItemIcon = Icon as ElementType;

              return (
                <div
                  key={label as string}
                  className="flex items-center gap-2 rounded-lg border border-[var(--border)] px-3 py-2.5"
                >
                  <ItemIcon
                    size={11}
                    className="text-[var(--muted)]"
                  />

                  <span className="text-[10px] text-[var(--muted)]">
                    {label as string}
                  </span>
                </div>
              );
            })}
          </div>
        </div>

        <div className="rounded-xl border border-[var(--border)] bg-[var(--bg)] p-4">
          <div className="flex items-center gap-2">
            <Tag
              size={13}
              className="text-[var(--accent)]"
            />

            <span className="font-mono text-[8px] tracking-[0.14em] text-[var(--accent)]">
              SUBSCRIPTION
            </span>
          </div>

          <div className="mt-4 space-y-2">
            {[
              "Activation",
              "365-day cycle",
              "Remaining Days",
              "Renewal",
            ].map((item) => (
              <div
                key={item}
                className="flex items-center gap-2 rounded-lg border border-[var(--border)] px-3 py-2.5"
              >
                <span className="h-1.5 w-1.5 rounded-full bg-[var(--accent)]" />

                <span className="text-[10px] text-[var(--muted)]">
                  {item}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="mt-3 rounded-xl border border-dashed border-[var(--accent)]/30 bg-[var(--accent)]/[0.03] p-4">
        <div className="flex items-center justify-between">
          <span className="font-mono text-[8px] uppercase tracking-[0.14em] text-[var(--accent)]">
            SUBSCRIPTION STATE
          </span>

          <span className="rounded-md border border-[var(--accent)]/30 px-2 py-1 font-mono text-[7px] text-[var(--accent)]">
            ACTIVE
          </span>
        </div>

        <div className="mt-4 flex items-end justify-between">
          <div>
            <span className="font-mono text-[7px] text-[var(--muted)]">
              REMAINING
            </span>

            <p className="mt-1 text-xl font-light text-[var(--white)]">
              287 days
            </p>
          </div>

          <span className="font-mono text-[8px] text-[var(--muted)]">
            365 DAYS
          </span>
        </div>
      </div>
    </div>
  );
}

function NotificationVisual() {
  return (
    <div className="rounded-2xl border border-[var(--border)] bg-[var(--surface,#111)] p-5 sm:p-6">
      <div className="flex items-center gap-3">
        <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-[var(--accent)]/30">
          <Bell
            size={16}
            className="text-[var(--accent)]"
          />
        </div>

        <div>
          <span className="font-mono text-[8px] uppercase tracking-[0.16em] text-[var(--accent)]">
            EVENT → SMS
          </span>

          <p className="mt-1 text-sm text-[var(--white)]">
            Cafe Owner Notification
          </p>
        </div>
      </div>

      <div className="mt-6 space-y-2">
        {[
          "Payment Created",
          "Payment Updated",
          "Receipt Added",
          "Status Changed",
        ].map((event, index) => (
          <motion.div
            key={event}
            initial={{ opacity: 0, x: -8 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.07 }}
            className="flex items-center justify-between rounded-xl border border-[var(--border)] bg-[var(--bg)] px-4 py-3"
          >
            <span className="text-[10px] text-[var(--muted)]">
              {event}
            </span>

            <ArrowRight
              size={11}
              className="text-[var(--accent)]"
            />
          </motion.div>
        ))}
      </div>

      <div className="mt-3 rounded-xl border border-[var(--border)] bg-[var(--bg)] p-4">
        <div className="flex items-center gap-3">
          <Smartphone
            size={14}
            className="text-[var(--accent)]"
          />

          <div>
            <span className="font-mono text-[7px] uppercase tracking-[0.12em] text-[var(--muted)]">
              SMS SENT
            </span>

            <p className="mt-1 text-[10px] text-[var(--white)]">
              Payment status has been updated.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

function PublicMenuVisual() {
  return (
    <div className="rounded-2xl border border-[var(--border)] bg-[var(--surface,#111)] p-5 sm:p-6">
      <div className="mx-auto max-w-[300px] rounded-[24px] border border-[var(--border)] bg-[var(--bg)] p-3">
        <div className="rounded-[18px] border border-[var(--border)] p-4">
          <div className="flex items-center justify-between">
            <div>
              <span className="font-mono text-[7px] uppercase tracking-[0.16em] text-[var(--muted)]">
                CAFE
              </span>

              <p className="mt-1 text-sm text-[var(--white)]">
                Menu
              </p>
            </div>

            <QrCode
              size={16}
              className="text-[var(--accent)]"
            />
          </div>

          <div className="mt-5 flex gap-2 overflow-hidden">
            {["Coffee", "Drinks", "Desserts"].map((item) => (
              <span
                key={item}
                className="whitespace-nowrap rounded-md border border-[var(--border)] px-2 py-1 font-mono text-[7px] text-[var(--muted)]"
              >
                {item}
              </span>
            ))}
          </div>

          <div className="mt-4 space-y-2">
            {["Americano", "Latte", "Cheesecake"].map(
              (item, index) => (
                <motion.div
                  key={item}
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.07 }}
                  className="flex items-center justify-between rounded-xl border border-[var(--border)] p-3"
                >
                  <div>
                    <p className="text-[10px] text-[var(--white)]">
                      {item}
                    </p>

                    <span className="mt-1 block font-mono text-[7px] text-[var(--muted)]">
                      Available
                    </span>
                  </div>

                  <span className="font-mono text-[8px] text-[var(--accent)]">
                    150K
                  </span>
                </motion.div>
              ),
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

function FeatureVisual({ number }: { number: string }) {
  switch (number) {
    case "01":
      return <MenuManagementVisual />;

    case "02":
      return <CustomizationVisual />;

    case "03":
      return <WorkspaceVisual />;

    case "04":
      return <SellerVisual />;

    case "05":
      return <PaymentVisual />;

    case "06":
      return <NotificationVisual />;

    case "07":
      return <PublicMenuVisual />;

    default:
      return null;
  }
}

/* -------------------------------------------------------------------------- */
/* MAIN COMPONENT                                                             */
/* -------------------------------------------------------------------------- */

export default function ProductSystems() {
  const [active, setActive] = useState(0);
  const current = featureSections[active];

  return (
    <section
      id="product-features"
      className="relative overflow-hidden bg-[var(--bg)] text-[var(--white)]"
    >
      <div className="mx-auto mt-[100px] w-[85%]">
        {/* Header */}
        <div className="border-b border-[var(--border)] pb-10">
          <span className="font-mono text-md uppercase tracking-[0.2em] text-[var(--accent)]">
            06 / Product Features
          </span>

          <div className="mt-8 grid gap-8 lg:grid-cols-[1fr_430px] lg:items-end">
            <h2 className="max-w-4xl text-4xl font-light leading-[0.95] tracking-[-0.04em] sm:text-6xl lg:text-7xl">
              What Menuly
              <br />
              <span className="text-[var(--muted)]">
                can do.
              </span>
            </h2>

            <p className="max-w-md text-sm leading-7 text-[var(--muted)] lg:pb-1">
              A complete digital menu platform covering menu
              management, customization, business workspaces,
              seller operations, payments and the customer
              experience.
            </p>
          </div>
        </div>

        {/* Feature Explorer */}
        <div className="grid lg:grid-cols-[290px_1fr]">
          {/* Sidebar */}
          <div className="border-x border-b border-[var(--border)]">
            {featureSections.map((section, index) => {
              const Icon = section.icon;
              const isActive = active === index;

              return (
                <button
                  key={section.number}
                  type="button"
                  onClick={() => setActive(index)}
                  className={`group relative flex w-full items-center gap-4 border-b border-[var(--border)] p-5 text-left transition-colors last:border-b-0 ${
                    isActive
                      ? "bg-[var(--surface-hover,#18181b)]"
                      : "hover:bg-[var(--surface-hover,#141414)]"
                  }`}
                >
                  <span
                    className={`font-mono text-[9px] ${
                      isActive
                        ? "text-[var(--accent)]"
                        : "text-[var(--muted)]"
                    }`}
                  >
                    {section.number}
                  </span>

                  <div
                    className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border ${
                      isActive
                        ? "border-[var(--accent)]/40 text-[var(--accent)]"
                        : "border-[var(--border)] text-[var(--muted)]"
                    }`}
                  >
                    <Icon size={15} />
                  </div>

                  <div className="min-w-0 flex-1">
                    <p
                      className={`text-sm ${
                        isActive
                          ? "text-[var(--white)]"
                          : "text-[var(--muted)] group-hover:text-[var(--white)]"
                      }`}
                    >
                      {section.title}
                    </p>

                    <span className="mt-1 block font-mono text-[7px] uppercase tracking-[0.1em] text-[var(--muted)]">
                      {String(section.features.length).padStart(
                        2,
                        "0",
                      )}{" "}
                      FEATURES
                    </span>
                  </div>

                  <ChevronRight
                    size={12}
                    className={
                      isActive
                        ? "text-[var(--accent)]"
                        : "text-[var(--muted)]"
                    }
                  />

                  {isActive && (
                    <motion.div
                      layoutId="feature-active-line"
                      className="absolute bottom-0 left-0 top-0 w-[2px] bg-[var(--accent)]"
                    />
                  )}
                </button>
              );
            })}
          </div>

          {/* Active Section */}
          <div className="min-w-0 border-b border-r border-[var(--border)]">
            <AnimatePresence mode="wait">
              <motion.div
                key={current.number}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -12 }}
                transition={{ duration: 0.28 }}
                className="p-6 sm:p-8 lg:p-12"
              >
                
                  {/* Feature Information */}
                  <div>
                    <span className="font-mono text-[9px] uppercase tracking-[0.2em] text-[var(--accent)]">
                      {current.label}
                    </span>

                    <h3 className="mt-4 text-3xl font-light tracking-[-0.03em] sm:text-4xl">
                      {current.title}
                    </h3>

                    <p className="mt-5 max-w-md text-sm leading-7 text-[var(--muted)]">
                      {current.description}
                    </p>

                    {/* Feature List */}
                    <div className="mt-8 border-t border-[var(--border)]">
                      <div className="border-b border-[var(--border)] py-4">
                        <span className="font-mono text-[8px] uppercase tracking-[0.16em] text-[var(--muted)]">
                          Included Features
                        </span>
                      </div>

                      <div>
                        {current.features.map(
                          (feature, index) => (
                            <motion.div
                              key={feature.title}
                              initial={{
                                opacity: 0,
                                x: -8,
                              }}
                              animate={{
                                opacity: 1,
                                x: 0,
                              }}
                              transition={{
                                delay: index * 0.035,
                              }}
                              className="group flex gap-3 border-b border-[var(--border)] py-4 last:border-b-0"
                            >
                              <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full border border-[var(--border)]">
                                <Check
                                  size={8}
                                  className="text-[var(--accent)]"
                                />
                              </span>

                              <div>
                                <p className="text-[11px] text-[var(--white)]">
                                  {feature.title}
                                </p>

                                <p className="mt-1 max-w-sm text-[9px] leading-4 text-[var(--muted)]">
                                  {feature.description}
                                </p>
                              </div>
                            </motion.div>
                          ),
                        )}
                      </div>
                    </div>
                  </div>

                  {/* Visual */}

               
              </motion.div>
            </AnimatePresence>
          </div>
        </div>



        {/* Closing */}
        {/* <div className="border-b border-[var(--border)] py-16 sm:py-20 lg:py-24">
          <div className="grid gap-8 lg:grid-cols-[200px_1fr] lg:gap-16">
            <span className="font-mono text-xs uppercase tracking-[0.2em] text-[var(--muted)]">
              Product Scope
            </span>

            <p className="max-w-4xl text-2xl font-light leading-relaxed text-[var(--text)] sm:text-3xl lg:text-4xl">
              More than a digital menu.
              <br />

              <strong className="font-normal text-[var(--white)]">
                A complete platform for running it.
              </strong>
            </p>
          </div>
        </div> */}
      </div>
    </section>
  );
}