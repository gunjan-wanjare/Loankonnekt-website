"use client";

import { useEffect, useRef, useState } from "react";
import { usePathname, useRouter } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowUpRight, Menu, X } from "lucide-react";
import Image from "next/image";
import { Button } from "@/components/ui/Button";
import { Logo } from "@/components/ui/Logo";
import { scrollToSection } from "@/lib/scroll";
import { header as headerContent, site } from "@/content";
import { cn } from "@/lib/utils";

const links = headerContent.nav;

const linkHints: Record<(typeof links)[number]["label"], string> = {
  Platform: "Lending ecosystem",
  Products: "Product suite",
  Solutions: "Why switch",
  Resources: "FAQ & help",
  About: "Talk to us",
};

type NavLabel = (typeof links)[number]["label"];

function sectionTop(el: HTMLElement) {
  return el.getBoundingClientRect().top + window.scrollY;
}

function getActiveLabel(): NavLabel | "" {
  const header = document.querySelector("header");
  const headerHeight = header?.getBoundingClientRect().height ?? 80;
  const probe = window.scrollY + headerHeight + 72;

  const seenIds = new Set<string>();
  const sections: { label: NavLabel; top: number }[] = [];

  for (const link of links) {
    const id = link.href.replace("#", "");
    if (!id || seenIds.has(id)) continue;
    seenIds.add(id);

    const el = document.getElementById(id);
    if (!el) continue;
    sections.push({ label: link.label, top: sectionTop(el) });
  }

  sections.sort((a, b) => a.top - b.top);
  if (!sections.length) return "";
  if (probe < sections[0].top) return "";

  let current: NavLabel | "" = "";
  for (const section of sections) {
    if (section.top <= probe) current = section.label;
  }
  return current;
}

export function Header() {
  const pathname = usePathname();
  const router = useRouter();
  const isHome = pathname === "/" || pathname === "";
  const [scrolled, setScrolled] = useState(() => !isHome);
  const [open, setOpen] = useState(false);
  const [activeLabel, setActiveLabel] = useState<NavLabel | "">("");
  const lockUntilRef = useRef(0);
  const lockedLabelRef = useRef<NavLabel | "">("");

  useEffect(() => {
    let ticking = false;

    const update = () => {
      setScrolled(window.scrollY > 24);

      if (Date.now() < lockUntilRef.current) {
        if (lockedLabelRef.current) setActiveLabel(lockedLabelRef.current);
        ticking = false;
        return;
      }

      lockedLabelRef.current = "";
      setActiveLabel(getActiveLabel());
      ticking = false;
    };

    const onScroll = () => {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(update);
    };

    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll, { passive: true });
    window.addEventListener("hashchange", update);

    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      window.removeEventListener("hashchange", update);
    };
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const goTo = (href: string, label?: NavLabel | "") => {
    const nextLabel =
      label ?? links.find((l) => l.href === href)?.label ?? "";

    if (href === "#top") {
      lockedLabelRef.current = "";
      setActiveLabel("");
    } else if (nextLabel) {
      lockedLabelRef.current = nextLabel;
      setActiveLabel(nextLabel);
    }

    lockUntilRef.current = Date.now() + 1200;
    setOpen(false);

    // From legal / inner pages, send users to home anchors
    if (!isHome && href.startsWith("#")) {
      const target = href === "#top" ? "/" : `/${href}`;
      window.setTimeout(() => {
        document.body.style.overflow = "";
        router.push(target);
      }, 80);
      return;
    }

    window.setTimeout(() => {
      document.body.style.overflow = "";
      scrollToSection(href);
      window.setTimeout(() => {
        lockUntilRef.current = 0;
        lockedLabelRef.current = "";
        setActiveLabel(href === "#top" ? "" : getActiveLabel() || nextLabel);
      }, 1250);
    }, 80);
  };

  // Privacy / inner pages always use the solid light header
  const onLight = scrolled || !isHome;

  return (
    <>
      <motion.header
        initial={{ y: -40, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.85, ease: [0.16, 1, 0.3, 1] }}
        className={cn(
          "fixed inset-x-0 top-0 z-50 pt-[env(safe-area-inset-top)] transition-all duration-300",
          onLight
            ? "border-b border-navy/8 bg-white/95 shadow-sm backdrop-blur-md"
            : "bg-transparent",
        )}
      >
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-5 md:h-20 md:px-8">
          <a
            href={isHome ? "#top" : "/"}
            className="relative z-10 flex items-center text-xl sm:text-[1.35rem]"
            onClick={(e) => {
              e.preventDefault();
              if (isHome) goTo("#top", "");
              else router.push("/");
            }}
          >
            <Logo tone={onLight ? "light" : "dark"} />
          </a>

          <nav
            className="hidden items-center gap-6 xl:gap-8 lg:flex"
            aria-label="Primary"
          >
            {links.map((link) => {
              const isActive = activeLabel === link.label;
              return (
                <a
                  key={link.label}
                  href={link.href}
                  aria-current={isActive ? "true" : undefined}
                  onClick={(e) => {
                    e.preventDefault();
                    goTo(link.href, link.label);
                  }}
                  className={cn(
                    "relative text-sm font-medium tracking-tight transition-colors",
                    onLight
                      ? isActive
                        ? "text-navy"
                        : "text-navy/65 hover:text-navy"
                      : "text-white/80 hover:text-white",
                  )}
                >
                  {link.label}
                  <span
                    aria-hidden
                    className={cn(
                      "pointer-events-none absolute inset-x-0 bottom-0 h-[2px] origin-left bg-brand transition-transform duration-300 ease-out",
                      isActive ? "scale-x-100" : "scale-x-0",
                    )}
                  />
                </a>
              );
            })}
          </nav>

          <div className="hidden items-center gap-4 lg:flex">
            <Button
              href={headerContent.cta.href}
              size="sm"
              variant="primary"
              onClick={(e) => {
                // Non-hash CTAs (e.g. /contact) → Coming Soon modal via global handler
                if (!headerContent.cta.href.startsWith("#")) return;
                e.preventDefault();
                goTo(headerContent.cta.href, "About");
              }}
            >
              {headerContent.cta.label}
            </Button>

            {/* Single header YAKA — only after scroll (no floating copy) */}
            <AnimatePresence mode="popLayout">
              {scrolled ? (
                <motion.div
                  key="header-yaka"
                  initial={{ opacity: 0, width: 0, scale: 0.85 }}
                  animate={{ opacity: 1, width: "auto", scale: 1 }}
                  exit={{ opacity: 0, width: 0, scale: 0.85 }}
                  transition={{ type: "spring", stiffness: 200, damping: 24 }}
                  className="flex items-center gap-3 overflow-hidden pl-1 select-none"
                >
                  <div className="h-5 w-px shrink-0 bg-navy/15" />
                  <a
                    href={site.brandUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="A YAKA Brand"
                    className="relative block h-5 w-[22px] shrink-0"
                  >
                    <Image
                      src={site.yaka.lightSrc}
                      alt="YAKA"
                      fill
                      sizes="22px"
                      className="object-contain"
                    />
                  </a>
                </motion.div>
              ) : null}
            </AnimatePresence>
          </div>

          {/* Mobile menu trigger — brand-forward capsule */}
          <div className="flex items-center gap-2 lg:hidden">
            <AnimatePresence>
              {scrolled ? (
                <motion.a
                  key="header-yaka-mobile"
                  href={site.brandUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="A YAKA Brand"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.8 }}
                  transition={{ duration: 0.2 }}
                  className="relative h-7 w-7 shrink-0"
                >
                  <Image
                    src={site.yaka.lightSrc}
                    alt="YAKA"
                    fill
                    sizes="28px"
                    className="object-contain"
                  />
                </motion.a>
              ) : null}
            </AnimatePresence>
          <motion.button
            type="button"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            whileTap={{ scale: 0.96 }}
            className={cn(
              "relative z-10 inline-flex h-11 items-center gap-2 overflow-hidden rounded-full px-4 text-sm font-bold tracking-tight",
              onLight
                ? "bg-[#050A18] text-white shadow-[0_8px_24px_-8px_rgba(5,10,24,0.55)]"
                : "border border-[#3B82F6]/45 bg-[#2563EB] text-white shadow-[0_0_28px_rgba(37,99,235,0.55)]",
            )}
            onClick={() => setOpen((v) => !v)}
          >
            {!onLight && (
              <span
                aria-hidden
                className="pointer-events-none absolute inset-0 bg-[linear-gradient(120deg,transparent_30%,rgba(255,255,255,0.22)_50%,transparent_70%)]"
              />
            )}
            {open ? <X size={17} strokeWidth={2.5} /> : <Menu size={17} strokeWidth={2.5} />}
            <span>{open ? "Close" : "Menu"}</span>
          </motion.button>
          </div>
        </div>
      </motion.header>

      {/* Mobile command drawer — full-height brand panel */}
      <AnimatePresence>
        {open && (
          <>
            <motion.button
              type="button"
              aria-label="Close menu backdrop"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="fixed inset-0 z-[60] bg-[#020617]/70 backdrop-blur-sm lg:hidden"
              onClick={() => setOpen(false)}
            />

            <motion.aside
              role="dialog"
              aria-modal="true"
              aria-label="Mobile navigation"
              initial={{ x: "105%", opacity: 0.6 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: "105%", opacity: 0.6 }}
              transition={{ type: "spring", stiffness: 280, damping: 30, mass: 0.9 }}
              className="fixed inset-y-0 right-0 z-[70] flex w-[min(100%,24rem)] flex-col overflow-hidden bg-[#050A18] text-white shadow-[-32px_0_80px_-12px_rgba(0,0,0,0.7)] lg:hidden"
            >
              {/* Atmospheric layers */}
              <div
                aria-hidden
                className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_90%_55%_at_80%_-10%,rgba(37,99,235,0.55),transparent_58%)]"
              />
              <div
                aria-hidden
                className="pointer-events-none absolute -left-16 bottom-24 h-56 w-56 rounded-full bg-[#2563EB]/20 blur-3xl"
              />
              <div
                aria-hidden
                className="cta-pinstripe pointer-events-none absolute inset-0 opacity-40"
              />

              {/* Header */}
              <div className="relative border-b border-white/10 px-5 pb-5 pt-[max(1.35rem,env(safe-area-inset-top))]">
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <span className="inline-flex items-center gap-1.5 rounded-full border border-[#3B82F6]/35 bg-[#2563EB]/15 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.14em] text-[#93C5FD]">
                      <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 shadow-[0_0_8px_rgba(52,211,153,0.9)]" />
                      Live platform
                    </span>
                    <p className="mt-3 text-2xl font-extrabold tracking-tight">
                      Loan<span className="text-[#3B82F6]">Konnekt</span>
                    </p>
                    <p className="mt-1 max-w-[14rem] text-[13px] leading-snug text-slate-400">
                      Navigate the lending operating system.
                    </p>
                  </div>
                  <button
                    type="button"
                    aria-label="Close menu"
                    className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl border border-white/15 bg-white/5 text-white transition-colors active:bg-white/15"
                    onClick={() => setOpen(false)}
                  >
                    <X size={20} strokeWidth={2.25} />
                  </button>
                </div>
              </div>

              {/* Nav links — large, high-impact */}
              <nav
                className="relative flex-1 overflow-y-auto px-4 py-5"
                aria-label="Mobile"
              >
                <ul className="space-y-2">
                  {links.map((link, i) => {
                    const isActive = activeLabel === link.label;
                    return (
                      <li key={link.label}>
                        <motion.a
                          href={link.href}
                          aria-current={isActive ? "true" : undefined}
                          initial={{ opacity: 0, x: 36 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{
                            delay: 0.06 + i * 0.05,
                            duration: 0.4,
                            ease: [0.16, 1, 0.3, 1],
                          }}
                          whileTap={{ scale: 0.985 }}
                          className={cn(
                            "group relative flex min-h-[3.75rem] items-center gap-3.5 overflow-hidden rounded-2xl px-3.5 py-3 transition-colors",
                            isActive
                              ? "bg-gradient-to-r from-[#2563EB]/35 to-[#2563EB]/10 ring-1 ring-[#3B82F6]/50"
                              : "bg-white/[0.03] ring-1 ring-white/8 active:bg-white/[0.07]",
                          )}
                          onClick={(e) => {
                            e.preventDefault();
                            goTo(link.href, link.label);
                          }}
                        >
                          {isActive && (
                            <span
                              aria-hidden
                              className="absolute inset-y-0 left-0 w-1 bg-[#3B82F6] shadow-[0_0_16px_rgba(59,130,246,0.8)]"
                            />
                          )}
                          <span
                            className={cn(
                              "inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-xl text-[12px] font-bold tabular-nums",
                              isActive
                                ? "bg-[#2563EB] text-white shadow-[0_8px_20px_-6px_rgba(37,99,235,0.9)]"
                                : "bg-white/[0.07] text-slate-300",
                            )}
                          >
                            {String(i + 1).padStart(2, "0")}
                          </span>
                          <span className="flex-1 text-left">
                            <span className="block text-[1.05rem] font-bold tracking-tight">
                              {link.label}
                            </span>
                            <span className="mt-0.5 block text-[11px] text-slate-500">
                              {linkHints[link.label]}
                            </span>
                          </span>
                          <span
                            className={cn(
                              "inline-flex h-9 w-9 items-center justify-center rounded-full transition-colors",
                              isActive
                                ? "bg-[#2563EB]/40 text-[#BFDBFE]"
                                : "bg-white/[0.05] text-slate-500 group-active:text-white",
                            )}
                          >
                            <ArrowUpRight size={16} strokeWidth={2.25} />
                          </span>
                        </motion.a>
                      </li>
                    );
                  })}
                </ul>

                {/* Trust chips */}
                <motion.div
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.35 }}
                  className="mt-6 grid grid-cols-3 gap-2"
                >
                  {[
                    { value: "150+", label: "Banks" },
                    { value: "99.8%", label: "Uptime" },
                    { value: "RBI", label: "Ready" },
                  ].map((item) => (
                    <div
                      key={item.label}
                      className="rounded-xl border border-white/10 bg-white/[0.04] px-2 py-3 text-center"
                    >
                      <p className="text-sm font-bold text-white">{item.value}</p>
                      <p className="mt-0.5 text-[10px] text-slate-500">{item.label}</p>
                    </div>
                  ))}
                </motion.div>
              </nav>

              {/* Power CTA footer */}
              <div className="relative border-t border-white/10 bg-[#040812]/80 px-5 pb-[max(1.35rem,env(safe-area-inset-bottom))] pt-4 backdrop-blur-md">
                <Button
                  href={headerContent.cta.href}
                  variant="primary"
                  size="lg"
                  className="min-h-12 w-full text-base shadow-[0_12px_40px_rgba(0,102,255,0.55)]"
                  icon={<ArrowUpRight size={18} />}
                  iconPosition="right"
                  onClick={(e) => {
                    if (!headerContent.cta.href.startsWith("#")) {
                      setOpen(false);
                      return;
                    }
                    e.preventDefault();
                    goTo(headerContent.cta.href, "About");
                  }}
                >
                  {headerContent.cta.label}
                </Button>
                <div className="mt-3 flex items-center justify-between gap-3">
                  <a
                    href={`mailto:${site.email}`}
                    className="truncate text-[12px] text-slate-500 transition-colors active:text-slate-300"
                  >
                    {site.email}
                  </a>
                </div>
              </div>
            </motion.aside>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
