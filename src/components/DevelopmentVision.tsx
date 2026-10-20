"use client";

import React, { useState } from "react";
import {
  HeartHandshake,
  ShieldAlert,
  Users,
  FileCheck2,
  GraduationCap,
  Sparkles,
  Droplets,
  Trees,
  Trophy,
  Stethoscope,
  Waves,
  ArrowRight,
  Filter,
  CheckCircle2,
} from "lucide-react";
import { VISION_PRIORITIES } from "@/data/campaignData";

// Icon mapping helper
const ICON_MAP: Record<string, React.ElementType> = {
  HeartHandshake,
  ShieldAlert,
  Users,
  FileCheck2,
  GraduationCap,
  Sparkles,
  Droplets,
  Trees,
  Trophy,
  Stethoscope,
  Waves,
};

const CATEGORIES = [
  { key: "all", label: "सभी 11 प्राथमिकताएं" },
  { key: "community", label: "सद्भाव व समाज" },
  { key: "infrastructure", label: "बुनियादी ढांचा व जल" },
  { key: "youth", label: "शिक्षा व युवा" },
  { key: "environment", label: "पर्यावरण व जल संचयन" },
  { key: "health", label: "स्वास्थ्य व पशु सेवा" },
];

export default function DevelopmentVision() {
  const [activeCategory, setActiveCategory] = useState("all");

  const filteredPriorities =
    activeCategory === "all"
      ? VISION_PRIORITIES
      : VISION_PRIORITIES.filter((item) => item.category === activeCategory);

  return (
    <section
      id="vision"
      className="py-16 sm:py-20 lg:py-24 bg-campaign-cream-100 relative border-y border-campaign-cream-300"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-14">
          <div className="inline-flex items-center gap-1.5 text-campaign-green-800 bg-campaign-green-100/70 px-3.5 py-1 rounded-full text-xs sm:text-sm font-semibold border border-campaign-green-200 mb-3">
            <Sparkles className="w-4 h-4 text-campaign-saffron-500" />
            <span>ग्राम विकास संकल्प पत्र</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-campaign-green-950 tracking-tight">
            मोड़ावासी के सर्वांगीण विकास की 11 प्रमुख प्राथमिकताएं
          </h2>
          <div className="w-20 h-1 bg-campaign-saffron-500 mx-auto mt-4 rounded-full" />
          <p className="mt-4 text-base sm:text-lg text-campaign-charcoal-700 leading-relaxed">
            गांव के सम्मान, स्वाभिमान और हर परिवार की खुशहाली के लिए तैयार किया गया सुविचारित विकास रोडमैप।
          </p>
        </div>

        {/* Category Filters */}
        <div className="flex items-center justify-start sm:justify-center gap-2 overflow-x-auto pb-4 mb-8 sm:mb-12 no-scrollbar">
          <div className="hidden sm:flex items-center gap-1.5 text-xs font-semibold text-gray-500 mr-1">
            <Filter className="w-3.5 h-3.5" />
            <span>श्रेणी:</span>
          </div>
          {CATEGORIES.map((cat) => {
            const isActive = activeCategory === cat.key;
            return (
              <button
                key={cat.key}
                type="button"
                onClick={() => setActiveCategory(cat.key)}
                className={`px-3.5 py-1.5 sm:px-4 sm:py-2 rounded-xl text-xs sm:text-sm font-bold whitespace-nowrap transition-all duration-200 ${
                  isActive
                    ? "bg-campaign-green-800 text-white shadow-warm"
                    : "bg-white text-campaign-charcoal-700 hover:bg-campaign-cream-200 border border-campaign-cream-300"
                }`}
              >
                {cat.label}
              </button>
            );
          })}
        </div>

        {/* Priority Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredPriorities.map((item) => {
            const IconComponent = ICON_MAP[item.iconName] || Sparkles;
            return (
              <div
                key={item.id}
                className="bg-white rounded-2xl p-5 sm:p-6 border border-campaign-cream-300 shadow-2xs hover:shadow-warm-lg hover:border-campaign-green-600/40 transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  {/* Top Bar inside card */}
                  <div className="flex items-center justify-between gap-2 mb-4">
                    <span className="inline-flex items-center justify-center w-8 h-8 rounded-lg bg-campaign-green-50 text-campaign-green-800 font-extrabold text-xs border border-campaign-green-200">
                      {String(item.id).padStart(2, "0")}
                    </span>
                    <span className="text-[11px] font-semibold text-campaign-saffron-700 bg-campaign-saffron-50 px-2.5 py-0.5 rounded-full border border-campaign-saffron-100">
                      {item.categoryHindi}
                    </span>
                  </div>

                  {/* Icon and Title */}
                  <div className="flex items-start gap-3.5 mb-3">
                    <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-campaign-green-700 to-campaign-green-900 text-white flex items-center justify-center shrink-0 shadow-xs group-hover:scale-105 transition-transform duration-300">
                      <IconComponent className="w-5 h-5 text-campaign-cream-50" />
                    </div>
                    <h3 className="font-bold text-base sm:text-lg text-campaign-green-950 leading-snug">
                      {item.title}
                    </h3>
                  </div>

                  {/* Description */}
                  <p className="text-xs sm:text-sm text-campaign-charcoal-800 leading-relaxed mb-4">
                    {item.description}
                  </p>

                  {/* Bullet points */}
                  <ul className="space-y-2 pt-3 border-t border-campaign-cream-200">
                    {item.details.map((point, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-xs text-campaign-charcoal-700">
                        <CheckCircle2 className="w-3.5 h-3.5 text-campaign-green-600 shrink-0 mt-0.5" />
                        <span className="leading-tight">{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Footer Tag */}
                <div className="mt-5 pt-3 border-t border-dashed border-campaign-cream-300 flex items-center justify-between text-[11px] text-gray-500 font-medium">
                  <span>मोड़ावासी संकल्प</span>
                  <span className="text-campaign-green-700 font-semibold group-hover:translate-x-1 transition-transform inline-flex items-center gap-1">
                    <span>प्रस्तावित कार्य</span>
                    <ArrowRight className="w-3 h-3" />
                  </span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Disclaimer / Respectful Clarity Note */}
        <div className="mt-12 p-4 sm:p-5 bg-white rounded-2xl border border-campaign-cream-300 shadow-2xs max-w-3xl mx-auto text-center">
          <p className="text-xs sm:text-sm text-campaign-charcoal-700 leading-relaxed">
            <strong className="text-campaign-green-950 font-bold">सादर निवेदन:</strong> ये सभी बिंदु ग्राम पंचायत मोड़ावासी के सर्वांगीण विकास के लिए हमारी प्रस्तावित प्राथमिकताएं और दृढ़ संकल्प हैं। इन्हें ग्रामसभा के परामर्श, शासन की योजनाओं और समस्त ग्रामवासियों के सामूहिक सहयोग से धरातल पर क्रियान्वित किया जाएगा।
          </p>
        </div>
      </div>
    </section>
  );
}
