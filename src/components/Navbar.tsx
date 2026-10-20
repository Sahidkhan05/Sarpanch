"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { Menu, X, PhoneCall, ChevronRight } from "lucide-react";
import { CAMPAIGN_INFO } from "@/data/campaignData";

const NAV_LINKS = [
  { href: "#hero", label: "मुख्य पृष्ठ" },
  { href: "#about", label: "परिचय" },
  { href: "#vision", label: "विकास संकल्प" },
  { href: "#showcase", label: "कार्य योजना" },
  { href: "#chaupal", label: "जन संवाद" },
  { href: "#contact", label: "संपर्क व सुझाव" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);

      const sections = NAV_LINKS.map((link) => link.href.substring(1));
      const scrollPos = window.scrollY + 120;

      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i]);
        if (el && el.offsetTop <= scrollPos) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Prevent background scroll when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [isOpen]);

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setIsOpen(false);
    const target = document.querySelector(href);
    if (target) {
      const topOffset = 80;
      const elementPosition = target.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - topOffset;
      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  return (
    <>
      {/* Top Banner Announcement */}
      <div className="bg-campaign-green-950 text-campaign-cream-100 border-b border-campaign-green-800 text-xs sm:text-sm py-1.5 px-4 font-medium">
        <div className="max-w-7xl mx-auto flex items-center justify-between gap-2">
          <div className="flex items-center gap-2 truncate">
            <span className="inline-flex items-center gap-1 bg-campaign-saffron-600/90 text-white px-2 py-0.5 rounded-full text-[11px] font-semibold tracking-wide">
              <span>सरपंच चुनाव</span>
            </span>
            <span className="hidden sm:inline text-campaign-cream-200">|</span>
            <span className="truncate">
              {CAMPAIGN_INFO.panchayat}, {CAMPAIGN_INFO.tehsil} ({CAMPAIGN_INFO.district})
            </span>
          </div>
          <div className="hidden md:flex items-center gap-2 text-campaign-saffron-500 font-semibold text-xs whitespace-nowrap">
            <span>{CAMPAIGN_INFO.primarySlogan}</span>
          </div>
        </div>
      </div>

      {/* Main Sticky Header */}
      <header
        className={`sticky top-0 z-40 transition-all duration-300 ${
          scrolled
            ? "bg-white/95 backdrop-blur-md shadow-md py-2 border-b border-campaign-cream-300"
            : "bg-white py-3 border-b border-campaign-cream-300"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Logo and Candidate Identity */}
            <a
              href="#hero"
              onClick={(e) => handleLinkClick(e, "#hero")}
              className="flex items-center gap-3 group text-left"
              aria-label="इकबाल खान भूरणान मुख्य पृष्ठ"
            >
              <div className="relative w-12 h-12 sm:w-14 sm:h-14 rounded-full overflow-hidden border-2 border-campaign-green-600 shadow-sm shrink-0 bg-campaign-cream-200">
                <Image
                  src="/images/campaign-logo.jpg"
                  alt="इकबाल खान भूरणान चुनाव लोगो"
                  fill
                  sizes="56px"
                  className="object-cover object-top group-hover:scale-105 transition-transform duration-300"
                  priority
                />
              </div>
              <div className="flex flex-col">
                <div className="flex items-center gap-1.5">
                  <span className="font-bold text-lg sm:text-xl text-campaign-green-950 tracking-tight leading-tight group-hover:text-campaign-green-700 transition-colors">
                    {CAMPAIGN_INFO.candidateName}
                  </span>
                </div>
                <div className="flex items-center gap-1 text-xs sm:text-sm text-campaign-red-700 font-semibold leading-tight">
                  <span className="bg-campaign-red-50 px-1.5 py-0.5 rounded border border-campaign-red-100">
                    सरपंच उम्मीदवार
                  </span>
                  <span className="text-gray-500 hidden sm:inline">•</span>
                  <span className="text-campaign-charcoal-700 font-medium hidden sm:inline">
                    {CAMPAIGN_INFO.panchayat}
                  </span>
                </div>
              </div>
            </a>

            {/* Desktop Navigation Links */}
            <nav className="hidden lg:flex items-center gap-1 xl:gap-2" aria-label="मुख्य नेविगेशन">
              {NAV_LINKS.map((link) => {
                const isActive = activeSection === link.href.substring(1);
                return (
                  <a
                    key={link.href}
                    href={link.href}
                    onClick={(e) => handleLinkClick(e, link.href)}
                    className={`px-3 py-2 rounded-lg text-sm font-semibold transition-all duration-200 ${
                      isActive
                        ? "text-campaign-green-800 bg-campaign-green-50 shadow-xs border-b-2 border-campaign-green-700"
                        : "text-campaign-charcoal-800 hover:text-campaign-green-700 hover:bg-campaign-cream-200"
                    }`}
                  >
                    {link.label}
                  </a>
                );
              })}
            </nav>

            {/* CTA Button and Mobile Menu Toggle */}
            <div className="flex items-center gap-2 sm:gap-3">
              <a
                href="#vision"
                onClick={(e) => handleLinkClick(e, "#vision")}
                className="hidden sm:inline-flex items-center gap-1.5 bg-campaign-green-700 hover:bg-campaign-green-800 text-white px-4 py-2 rounded-xl text-sm font-semibold shadow-sm hover:shadow transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-campaign-green-500 focus:ring-offset-2"
              >
                <span>विकास संकल्प</span>
                <ChevronRight className="w-4 h-4" />
              </a>

              {/* Mobile Menu Button */}
              <button
                type="button"
                onClick={() => setIsOpen(!isOpen)}
                className="lg:hidden p-2 rounded-xl text-campaign-charcoal-800 hover:bg-campaign-cream-200 focus:outline-none focus:ring-2 focus:ring-campaign-green-600 transition-colors"
                aria-expanded={isOpen}
                aria-label={isOpen ? "मेनू बंद करें" : "मेनू खोलें"}
              >
                {isOpen ? <X className="w-6 h-6 text-campaign-red-700" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Accessible Mobile Drawer Navigation */}
      {isOpen && (
        <div className="fixed inset-0 z-50 lg:hidden">
          {/* Backdrop Overlay */}
          <div
            className="fixed inset-0 bg-black/60 backdrop-blur-xs transition-opacity"
            onClick={() => setIsOpen(false)}
            aria-hidden="true"
          />

          {/* Drawer Content */}
          <div className="fixed inset-y-0 right-0 max-w-xs w-full bg-white shadow-2xl flex flex-col z-10 border-l border-campaign-cream-300">
            {/* Drawer Header */}
            <div className="p-4 border-b border-campaign-cream-300 flex items-center justify-between bg-campaign-cream-100">
              <div className="flex items-center gap-2.5">
                <div className="relative w-10 h-10 rounded-full overflow-hidden border border-campaign-green-600">
                  <Image
                    src="/images/campaign-logo.jpg"
                    alt="लोगो"
                    fill
                    sizes="40px"
                    className="object-cover object-top"
                  />
                </div>
                <div>
                  <h3 className="font-bold text-sm text-campaign-green-950">
                    {CAMPAIGN_INFO.candidateShortName}
                  </h3>
                  <p className="text-xs text-campaign-red-700 font-semibold">सरपंच पद उम्मीदवार</p>
                </div>
              </div>
              <button
                type="button"
                onClick={() => setIsOpen(false)}
                className="p-2 rounded-lg text-gray-600 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-campaign-green-600"
                aria-label="मेनू बंद करें"
              >
                <X className="w-5 h-5 text-gray-700" />
              </button>
            </div>

            {/* Slogan Banner inside menu */}
            <div className="bg-campaign-green-900 text-campaign-cream-100 px-4 py-2.5 text-xs text-center font-medium">
              “{CAMPAIGN_INFO.primarySlogan}”
            </div>

            {/* Links List */}
            <nav className="flex-1 overflow-y-auto p-4 space-y-1.5" aria-label="मोबाइल नेविगेशन सूची">
              {NAV_LINKS.map((link) => {
                const isActive = activeSection === link.href.substring(1);
                return (
                  <a
                    key={link.href}
                    href={link.href}
                    onClick={(e) => handleLinkClick(e, link.href)}
                    className={`flex items-center justify-between px-3.5 py-3 rounded-xl text-base font-semibold transition-colors ${
                      isActive
                        ? "bg-campaign-green-50 text-campaign-green-800 border-l-4 border-campaign-green-700"
                        : "text-campaign-charcoal-900 hover:bg-campaign-cream-200"
                    }`}
                  >
                    <span>{link.label}</span>
                    <ChevronRight className="w-4 h-4 text-gray-400" />
                  </a>
                );
              })}
            </nav>

            {/* Mobile Drawer Footer */}
            <div className="p-4 border-t border-campaign-cream-300 bg-campaign-cream-100 space-y-3">
              <a
                href="#contact"
                onClick={(e) => handleLinkClick(e, "#contact")}
                className="w-full flex items-center justify-center gap-2 bg-campaign-green-700 hover:bg-campaign-green-800 text-white py-3 rounded-xl font-bold text-sm shadow-sm transition-colors"
              >
                <PhoneCall className="w-4 h-4" />
                <span>सुझाव / संपर्क करें</span>
              </a>
              <p className="text-center text-[11px] text-gray-500">
                {CAMPAIGN_INFO.panchayat}, {CAMPAIGN_INFO.tehsil} (चूरू)
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
