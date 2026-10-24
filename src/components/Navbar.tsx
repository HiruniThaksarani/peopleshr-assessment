"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import {
  CalendarIcon,
  MenuIcon,
  CloseIcon,
  ChevronDownIcon,
  ArrowRightIcon,
  PeoplesHRIcon,
  UsersIcon,
  CalculatorIcon,
  ClockIcon,
  ChartBarIcon,
  BriefcaseIcon,
  SparklesIcon,
  ShieldCheckIcon,
  BookOpenIcon,
} from "@/components/ui/icons";
import { NAV_ITEMS, NavItem } from "@/constants/navigation";
import Button from "@/components/ui/button";

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [mobileExpandedSection, setMobileExpandedSection] = useState<string | null>(null);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();
  const dropdownTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 15);
    };
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Handle dropdown hover with short delay for smooth mouse movement
  const handleMouseEnter = (label: string) => {
    if (dropdownTimeoutRef.current) {
      clearTimeout(dropdownTimeoutRef.current);
    }
    setActiveDropdown(label);
  };

  const handleMouseLeave = () => {
    dropdownTimeoutRef.current = setTimeout(() => {
      setActiveDropdown(null);
    }, 180);
  };

  const toggleMobileSection = (label: string) => {
    setMobileExpandedSection(mobileExpandedSection === label ? null : label);
  };

  const renderIcon = (name?: string) => {
    switch (name) {
      case "users":
        return <UsersIcon className="w-4 h-4 text-primary shrink-0" />;
      case "calculator":
        return <CalculatorIcon className="w-4 h-4 text-primary shrink-0" />;
      case "clock":
        return <ClockIcon className="w-4 h-4 text-primary shrink-0" />;
      case "chart":
        return <ChartBarIcon className="w-4 h-4 text-primary shrink-0" />;
      case "briefcase":
        return <BriefcaseIcon className="w-4 h-4 text-primary shrink-0" />;
      case "sparkles":
        return <SparklesIcon className="w-4 h-4 text-primary shrink-0" />;
      case "shield":
        return <ShieldCheckIcon className="w-4 h-4 text-primary shrink-0" />;
      case "book":
        return <BookOpenIcon className="w-4 h-4 text-primary shrink-0" />;
      default:
        return <SparklesIcon className="w-4 h-4 text-primary shrink-0" />;
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 w-full transition-all duration-300 ${
        isScrolled
          ? "bg-white/95 backdrop-blur-md border-b border-slate-200/80 shadow-[0_4px_20px_-4px_rgba(0,0,0,0.06)] py-3 sm:py-3.5"
          : "bg-white/95 sm:bg-white/90 backdrop-blur-md border-b border-slate-100 shadow-[0_2px_12px_-3px_rgba(0,0,0,0.04)] py-3.5 sm:py-4"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Brand Logo */}
        <Link
          href="/"
          className="flex items-center gap-2.5 sm:gap-3 group focus:outline-none select-none"
          aria-label="PeoplesHR Home"
        >
          {/* Logo Icon */}
          <div className="relative w-10 h-10 sm:w-11 sm:h-11 flex items-center justify-center transform group-hover:scale-105 transition-transform duration-200 shrink-0">
            <PeoplesHRIcon className="w-full h-full drop-shadow-xs" />
          </div>

          {/* Brand Typography */}
          <div className="flex flex-col">
            <span className="font-sans font-bold text-xl sm:text-2xl tracking-tight text-primary-dark leading-none">
              Peoples<span className="text-primary">HR</span>
            </span>
            <span className="text-[9.5px] sm:text-[10.5px] tracking-[0.2em] font-semibold text-slate-500 uppercase leading-tight mt-1">
              Cloud HR Platform
            </span>
          </div>
        </Link>

        {/* Center Navigation Links (Desktop) */}
        <nav
          className="hidden md:flex items-center gap-1 lg:gap-1.5"
          onMouseLeave={handleMouseLeave}
        >
          {NAV_ITEMS.map((item: NavItem) => {
            const isOpen = activeDropdown === item.label;

            if (!item.hasDropdown) {
              return (
                <Link
                  key={item.label}
                  href={item.href}
                  className={`px-3.5 py-2 rounded-lg text-sm font-medium transition-colors ${
                    pathname === item.href
                      ? "text-slate-900 font-semibold"
                      : "text-slate-600 hover:text-slate-900 hover:bg-slate-50"
                  }`}
                >
                  {item.label}
                </Link>
              );
            }

            return (
              <div
                key={item.label}
                className="relative"
                onMouseEnter={() => handleMouseEnter(item.label)}
              >
                <button
                  type="button"
                  onClick={() =>
                    setActiveDropdown(isOpen ? null : item.label)
                  }
                  aria-expanded={isOpen}
                  className={`flex items-center gap-1 px-3.5 py-2 rounded-lg text-sm font-medium transition-colors focus:outline-none ${
                    isOpen
                      ? "text-primary bg-primary-light/60 font-semibold"
                      : "text-slate-600 hover:text-slate-900 hover:bg-slate-50"
                  }`}
                >
                  <span>{item.label}</span>
                  <ChevronDownIcon
                    className={`w-3.5 h-3.5 transition-transform duration-200 ${
                      isOpen ? "rotate-180 text-primary" : "text-slate-400"
                    }`}
                  />
                </button>

                {/* Dropdown Menu Overlay */}
                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ opacity: 0, y: 8, scale: 0.98 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: 6, scale: 0.98 }}
                      transition={{ duration: 0.16, ease: "easeOut" }}
                      className={`absolute top-full mt-2 bg-white/98 backdrop-blur-xl rounded-2xl border border-slate-200/90 shadow-[0_20px_50px_-12px_rgba(15,23,42,0.14)] p-4 sm:p-5 z-50 ${
                        item.featured ? "w-[680px] -left-36" : "w-[560px] -left-20"
                      }`}
                    >
                      <div className="flex gap-6">
                        {/* Sections & Links */}
                        <div className="flex-1 flex flex-col gap-5">
                          {item.dropdownSections?.map((section, sIdx) => (
                            <div key={sIdx}>
                              {section.heading && (
                                <p className="text-[11px] font-bold uppercase tracking-wider text-slate-400 px-2.5 mb-2">
                                  {section.heading}
                                </p>
                              )}
                              <div className="grid grid-cols-2 gap-1.5">
                                {section.items.map((subItem) => (
                                  <Link
                                    key={subItem.title}
                                    href={subItem.href}
                                    onClick={() => setActiveDropdown(null)}
                                    className="group/item flex items-start gap-3 p-2.5 rounded-xl hover:bg-slate-50 transition-colors"
                                  >
                                    <div className="w-8 h-8 rounded-lg bg-primary-light/70 flex items-center justify-center shrink-0 group-hover/item:bg-primary-light group-hover/item:scale-105 transition-all">
                                      {renderIcon(subItem.iconName)}
                                    </div>
                                    <div className="flex-1 min-w-0">
                                      <div className="flex items-center gap-1.5">
                                        <p className="text-xs font-semibold text-slate-900 group-hover/item:text-primary transition-colors truncate">
                                          {subItem.title}
                                        </p>
                                        {subItem.badge && (
                                          <span className="px-1.5 py-0.5 text-[9px] font-bold rounded-full bg-blue-100 text-primary border border-blue-200">
                                            {subItem.badge}
                                          </span>
                                        )}
                                      </div>
                                      <p className="text-[11px] text-slate-500 line-clamp-1 mt-0.5">
                                        {subItem.description}
                                      </p>
                                    </div>
                                  </Link>
                                ))}
                              </div>
                            </div>
                          ))}
                        </div>

                        {/* Featured Callout Card */}
                        {item.featured && (
                          <div className="w-52 bg-gradient-to-br from-slate-50 to-blue-50/40 rounded-xl p-4 border border-blue-100/80 flex flex-col justify-between shrink-0">
                            <div>
                              <span className="inline-block px-2 py-0.5 text-[10px] font-bold tracking-wide uppercase bg-primary text-white rounded-md mb-2.5 shadow-xs">
                                {item.featured.tag}
                              </span>
                              <h4 className="text-sm font-bold text-slate-900 leading-snug">
                                {item.featured.title}
                              </h4>
                              <p className="text-[11.5px] text-slate-600 mt-1.5 leading-relaxed">
                                {item.featured.description}
                              </p>
                            </div>
                            <Link
                              href={item.featured.href}
                              onClick={() => setActiveDropdown(null)}
                              className="mt-4 inline-flex items-center gap-1.5 text-xs font-bold text-primary hover:text-primary-hover group"
                            >
                              <span>{item.featured.cta}</span>
                              <ArrowRightIcon className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
                            </Link>
                          </div>
                        )}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </nav>

        {/* Right Section: Divider + Request a Demo CTA Button */}
        <div className="flex items-center gap-3 sm:gap-4">
          {/* Vertical Divider matching specification */}
          <div
            className="hidden lg:block h-6 w-[1px] bg-slate-200 my-auto"
            aria-hidden="true"
          />

          {/* Request a Demo Button */}
          <Button asChild className="hidden sm:inline-flex">
            <Link href="#demo">
              <CalendarIcon className="w-4 h-4 text-white/90 group-hover:text-white transition-colors" />
              <span>Request a Demo</span>
            </Link>
          </Button>

          {/* Mobile Menu Hamburger Toggle */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-xl text-slate-700 hover:bg-slate-100 md:hidden focus:outline-none transition-colors"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? (
              <CloseIcon className="w-5 h-5" />
            ) : (
              <MenuIcon className="w-5 h-5" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
            className="w-full bg-white border-b border-slate-200/80 shadow-xl md:hidden overflow-hidden"
          >
            <div className="max-w-7xl mx-auto px-4 py-4 flex flex-col gap-1 max-h-[80vh] overflow-y-auto">
              {NAV_ITEMS.map((item) => {
                const isExpanded = mobileExpandedSection === item.label;

                if (!item.hasDropdown) {
                  return (
                    <Link
                      key={item.label}
                      href={item.href}
                      onClick={() => setMobileMenuOpen(false)}
                      className="px-3.5 py-2.5 text-sm font-semibold text-slate-700 hover:text-primary hover:bg-slate-50 rounded-xl transition-colors"
                    >
                      {item.label}
                    </Link>
                  );
                }

                return (
                  <div key={item.label} className="border-b border-slate-100 last:border-b-0 pb-1">
                    <button
                      type="button"
                      onClick={() => toggleMobileSection(item.label)}
                      className="w-full flex items-center justify-between px-3.5 py-2.5 text-sm font-semibold text-slate-800 hover:bg-slate-50 rounded-xl transition-colors"
                    >
                      <span>{item.label}</span>
                      <ChevronDownIcon
                        className={`w-4 h-4 text-slate-400 transition-transform duration-200 ${
                          isExpanded ? "rotate-180 text-primary" : ""
                        }`}
                      />
                    </button>

                    <AnimatePresence>
                      {isExpanded && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: "auto" }}
                          exit={{ opacity: 0, height: 0 }}
                          transition={{ duration: 0.18 }}
                          className="pl-3 pr-2 py-2 flex flex-col gap-1 overflow-hidden"
                        >
                          {item.dropdownSections?.map((section, sIdx) => (
                            <div key={sIdx} className="mb-2">
                              {section.heading && (
                                <p className="text-[10px] font-bold uppercase tracking-wider text-slate-400 px-3 py-1">
                                  {section.heading}
                                </p>
                              )}
                              {section.items.map((subItem) => (
                                <Link
                                  key={subItem.title}
                                  href={subItem.href}
                                  onClick={() => setMobileMenuOpen(false)}
                                  className="flex items-center gap-2.5 px-3 py-2 text-xs font-medium text-slate-600 hover:text-primary hover:bg-slate-50 rounded-lg"
                                >
                                  {renderIcon(subItem.iconName)}
                                  <span>{subItem.title}</span>
                                  {subItem.badge && (
                                    <span className="ml-auto text-[9px] font-bold px-1.5 py-0.5 rounded-full bg-blue-100 text-primary">
                                      {subItem.badge}
                                    </span>
                                  )}
                                </Link>
                              ))}
                            </div>
                          ))}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                );
              })}

              {/* Mobile CTA Button */}
              <div className="pt-3 mt-2 border-t border-slate-100">
                <Button asChild className="w-full">
                  <Link
                    href="#demo"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    <CalendarIcon className="w-4 h-4 text-white" />
                    <span>Request a Demo</span>
                  </Link>
                </Button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
