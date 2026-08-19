"use client";

import { useEffect, useRef, useState } from "react";
import { usePathname, useRouter } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import Image from "next/image";
import { Logo } from "@/components/ui/Logo";
import { scrollToSection } from "@/lib/scroll";
import { header as headerContent, site } from "@/content";
import { cn } from "@/lib/utils";

const links = headerContent.nav;

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
  if (!sections.length) return "Home";
  if (probe < sections[0].top) return "Home";

  let current: NavLabel | "" = "Home";
  for (const section of sections) {
    if (section.top <= probe) current = section.label;
  }
  return current;
}

export function Header() {
  const pathname = usePathname();
  const router = useRouter();
  const isHome = pathname === "/" || pathname === "";
  const [open, setOpen] = useState(false);
  const [activeLabel, setActiveLabel] = useState<NavLabel | "">("Home");
  const lockUntilRef = useRef(0);
  const lockedLabelRef = useRef<NavLabel | "">("");

  useEffect(() => {
    let ticking = false;

    const update = () => {
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

    if (nextLabel) {
      lockedLabelRef.current = nextLabel;
      setActiveLabel(nextLabel);
    }

    lockUntilRef.current = Date.now() + 1200;
    setOpen(false);

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
        setActiveLabel(getActiveLabel() || nextLabel);
      }, 1250);
    }, 80);
  };

  return (
    <>
      <motion.header
        initial={{ y: -40, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.85, ease: [0.16, 1, 0.3, 1] }}
        className="fixed inset-x-0 top-0 z-50 border-b border-navy/6 bg-white pt-[env(safe-area-inset-top)]"
      >
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between gap-4 px-4 sm:px-5 md:h-[4.5rem] md:px-8">
          <a
            href={isHome ? "#top" : "/"}
            className="relative z-10 flex items-center"
            onClick={(e) => {
              e.preventDefault();
              if (isHome) goTo("#top", "Home");
              else router.push("/");
            }}
          >
            <Logo tone="light" size="lg" />
          </a>

          <nav
            className="hidden items-center gap-12 lg:flex xl:gap-16"
            aria-label="Primary"
          >
            {links.map((link) => {
              const isActive = activeLabel === link.label;
              return (
                <a
                  key={link.label}
                  href={link.href}
                  aria-current={isActive ? "page" : undefined}
                  onClick={(e) => {
                    e.preventDefault();
                    goTo(link.href, link.label);
                  }}
                  className={cn(
                    "text-[15px] tracking-tight transition-colors",
                    isActive
                      ? "font-bold text-[#0047FF]"
                      : "font-medium text-[#434657] hover:text-[#0047FF]",
                  )}
                >
                  {link.label}
                </a>
              );
            })}
          </nav>

          <div className="hidden items-center gap-4 lg:flex">
            <a
              href={headerContent.cta.href}
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
              className="fixed inset-0 z-[60] bg-navy/25 backdrop-blur-[2px] lg:hidden"
              onClick={() => setOpen(false)}
            />

            <motion.aside
              role="dialog"
              aria-modal="true"
              aria-label="Mobile navigation"
              initial={{ y: -16, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -16, opacity: 0 }}
              transition={{ duration: 0.22, ease: [0.16, 1, 0.3, 1] }}
              className="fixed inset-x-4 top-[4.75rem] z-[70] overflow-hidden rounded-2xl border border-navy/8 bg-white p-4 shadow-[0_18px_50px_-20px_rgba(5,10,24,0.35)] lg:hidden"
            >
              <nav aria-label="Mobile">
                <ul className="space-y-1">
                  {links.map((link) => {
                    const isActive = activeLabel === link.label;
                    return (
                      <li key={link.label}>
                        <a
                          href={link.href}
                          aria-current={isActive ? "page" : undefined}
                          className={cn(
                            "flex min-h-11 items-center rounded-xl px-3 text-[15px] transition-colors",
                            isActive
                              ? "bg-[#0047FF]/8 font-bold text-[#0047FF]"
                              : "font-medium text-[#434657]",
                          )}
                          onClick={(e) => {
                            e.preventDefault();
                            goTo(link.href, link.label);
                          }}
                        >
                          {link.label}
                        </a>
                      </li>
                    );
                  })}
                </ul>
              </nav>

              <a
                href={headerContent.cta.href}
                className="mt-3 inline-flex min-h-11 w-full items-center justify-center rounded-[12px] bg-[#0047FF] px-5 text-sm font-medium text-white"
                onClick={() => setOpen(false)}
              >
                {headerContent.cta.label}
              </a>
            </motion.aside>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
