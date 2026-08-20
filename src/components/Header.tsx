"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import {
  Banknote,
  CircleHelp,
  Home,
  Info,
  Mail,
  Menu,
  Smartphone,
  X,
} from "lucide-react";
import Image from "next/image";
import { Logo } from "@/components/ui/Logo";
import { header as headerContent, site } from "@/content";
import { cn } from "@/lib/utils";

const links = headerContent.nav;

const navIcons: Record<string, typeof Home> = {
  Home,
  Loans: Banknote,
  "How It Works": CircleHelp,
  "About Us": Info,
  Contact: Mail,
};

export function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      <motion.header
        initial={{ y: -40, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.85, ease: [0.16, 1, 0.3, 1] }}
        className="fixed inset-x-0 top-0 z-50 border-b border-navy/6 bg-white pt-[env(safe-area-inset-top)]"
      >
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between gap-4 px-4 sm:px-5 md:h-[4.5rem] md:px-8">
          <Link href="/" aria-label="LoanKonnekt" className="relative z-10 flex items-center">
            <Logo tone="light" size="lg" />
          </Link>

          <nav className="hidden items-center gap-8 lg:flex" aria-label="Primary">
            {links.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.label}
                  href={link.href}
                  aria-current={isActive ? "page" : undefined}
                  className={cn(
                    "text-[15px] tracking-tight transition-colors",
                    isActive
                      ? "font-bold text-[#0047FF]"
                      : "font-medium text-[#434657] hover:text-[#0047FF]",
                  )}
                >
                  {link.label}
                </Link>
              );
            })}
          </nav>

          <div className="hidden items-center gap-4 lg:flex">
            <a
              href={headerContent.cta.href}
              data-coming-soon="true"
              className="inline-flex min-h-10 items-center justify-center rounded-[12px] bg-[#0047FF] px-5 text-sm font-medium text-white transition-colors hover:bg-[#003DE0]"
            >
              {headerContent.cta.label}
            </a>

            <a
              id="yaka-logo-anchor"
              href={site.brandUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="A YAKA Brand"
              className="relative block h-10 w-10 shrink-0"
            >
              <span data-yaka-icon className="relative block h-10 w-10">
                <Image
                  src={site.yaka.headerSrc}
                  alt="YAKA"
                  fill
                  sizes="40px"
                  className="object-contain"
                />
              </span>
            </a>
          </div>

          <div className="flex items-center gap-2 lg:hidden">
            <a
              href={site.brandUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="A YAKA Brand"
              className="relative h-7 w-7 shrink-0"
            >
              <Image
                src={site.yaka.headerSrc}
                alt="YAKA"
                fill
                sizes="28px"
                className="object-contain"
              />
            </a>
            <button
              type="button"
              aria-label={open ? "Close menu" : "Open menu"}
              aria-expanded={open}
              className="inline-flex h-10 w-10 items-center justify-center rounded-xl text-navy"
              onClick={() => setOpen((v) => !v)}
            >
              {open ? <X size={22} strokeWidth={2.25} /> : <Menu size={22} strokeWidth={2.25} />}
            </button>
          </div>
        </div>
      </motion.header>

      <AnimatePresence>
        {open && (
          <>
            <motion.button
              type="button"
              aria-label="Close menu backdrop"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-0 z-[60] bg-[#051325]/45 backdrop-blur-[3px] lg:hidden"
              onClick={() => setOpen(false)}
            />

            <motion.aside
              role="dialog"
              aria-modal="true"
              aria-label="Mobile navigation"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ duration: 0.28, ease: [0.16, 1, 0.3, 1] }}
              className="fixed inset-y-0 right-0 z-[70] flex w-[min(20.5rem,88vw)] flex-col bg-white shadow-[-18px_0_50px_-20px_rgba(5,10,24,0.35)] lg:hidden"
            >
              <div className="flex items-center justify-between border-b border-[#EEF2F7] px-5 py-4 pt-[calc(env(safe-area-inset-top)+1rem)]">
                <div className="min-w-0">
                  <Logo tone="light" size="md" />
                </div>
                <button
                  type="button"
                  aria-label="Close menu"
                  className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-[#F3F6FF] text-[#051325]"
                  onClick={() => setOpen(false)}
                >
                  <X size={18} strokeWidth={2.4} />
                </button>
              </div>

              <nav aria-label="Mobile" className="flex-1 overflow-y-auto px-4 py-5">
                <ul className="space-y-1.5">
                  {links.map((link) => {
                    const isActive = pathname === link.href;
                    const Icon = navIcons[link.label] ?? Home;
                    return (
                      <li key={link.label}>
                        <Link
                          href={link.href}
                          aria-current={isActive ? "page" : undefined}
                          className={cn(
                            "flex min-h-12 items-center gap-3 rounded-2xl px-3.5 text-[15px] transition-colors",
                            isActive
                              ? "bg-[#0047FF] font-bold text-white"
                              : "font-medium text-[#434657] hover:bg-[#F3F6FF]",
                          )}
                          onClick={() => setOpen(false)}
                        >
                          <span
                            className={cn(
                              "inline-flex h-9 w-9 items-center justify-center rounded-xl",
                              isActive ? "bg-white/15 text-white" : "bg-[#F3F6FF] text-[#0047FF]",
                            )}
                          >
                            <Icon size={18} strokeWidth={2.2} />
                          </span>
                          {link.label}
                        </Link>
                      </li>
                    );
                  })}
                </ul>
              </nav>

              <div className="border-t border-[#EEF2F7] p-4 pb-[calc(env(safe-area-inset-bottom)+1rem)]">
                <a
                  href={headerContent.cta.href}
                  data-coming-soon="true"
                  className="inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-[16px] bg-[#0047FF] px-5 text-sm font-semibold text-white"
                  onClick={() => setOpen(false)}
                >
                  <Smartphone size={16} strokeWidth={2.3} />
                  {headerContent.cta.label}
                </a>
              </div>
            </motion.aside>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
