"use client";

import React, { useState } from "react";
import {
  Droplets,
  Milestone,
  BookOpenCheck,
  HeartPulse,
  Sprout,
  Scale,
  CheckCircle2,
  ChevronRight,
  Sparkles,
} from "lucide-react";
import { SHOWCASE_PILLARS, CAMPAIGN_INFO } from "@/data/campaignData";

const ICON_MAP: Record<string, React.ElementType> = {
  Droplets,
  Milestone,
  BookOpenCheck,
  HeartPulse,
  Sprout,
  Scale,
};

export default function Showcase() {
  const [selectedId, setSelectedId] = useState(SHOWCASE_PILLARS[0].id);

  const activePillar =
    SHOWCASE_PILLARS.find((p) => p.id === selectedId) || SHOWCASE_PILLARS[0];
  const ActiveIcon = ICON_MAP[activePillar.iconName] || Droplets;

  return (
    <section id="showcase" className="py-16 sm:py-20 lg:py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-1.5 text-campaign-green-800 bg-campaign-green-50 px-3.5 py-1 rounded-full text-xs sm:text-sm font-semibold border border-campaign-green-200 mb-3">
            <Sparkles className="w-4 h-4 text-campaign-saffron-500" />
            <span>ग्राम विकास कार्य योजना</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-campaign-green-950 tracking-tight">
            मोड़ावासी के प्रमुख विकास स्तंभ
          </h2>
          <div className="w-20 h-1 bg-campaign-saffron-500 mx-auto mt-4 rounded-full" />
          <p className="mt-4 text-base sm:text-lg text-campaign-charcoal-700 leading-relaxed">
            गांव के रोजमर्रा के जीवन को सुगम, सुरक्षित और समृद्ध बनाने वाले महत्वपूर्ण क्षेत्रों पर केंद्रित ठोस कार्ययोजना।
          </p>
        </div>

        {/* Interactive Pillar Showcase */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Pillar Selector Buttons (Left Column) */}
          <div className="lg:col-span-5 space-y-3">
            <p className="text-xs font-bold text-gray-500 uppercase tracking-wider px-1">
              विकास स्तंभ चुनें:
            </p>
            {SHOWCASE_PILLARS.map((pillar) => {
              const isSelected = pillar.id === selectedId;
              const Icon = ICON_MAP[pillar.iconName] || Droplets;
              return (
                <button
                  key={pillar.id}
                  type="button"
                  onClick={() => setSelectedId(pillar.id)}
                  className={`w-full text-left p-4 rounded-2xl border transition-all duration-200 flex items-center justify-between ${
                    isSelected
                      ? "bg-campaign-green-900 text-white border-campaign-green-800 shadow-warm"
                      : "bg-campaign-cream-100 text-campaign-charcoal-800 hover:bg-campaign-cream-200 border-campaign-cream-300"
                  }`}
                >
                  <div className="flex items-center gap-3.5">
                    <div
                      className={`w-10 h-10 rounded-xl flex items-center justify-center shrink-0 ${
                        isSelected
                          ? "bg-campaign-saffron-500 text-campaign-green-950"
                          : "bg-white text-campaign-green-800 shadow-2xs"
                      }`}
                    >
                      <Icon className="w-5 h-5" />
                    </div>
                    <div>
                      <h4
                        className={`font-bold text-sm sm:text-base leading-tight ${
                          isSelected ? "text-white" : "text-campaign-green-950"
                        }`}
                      >
                        {pillar.title}
                      </h4>
                      <p
                        className={`text-xs mt-0.5 leading-snug ${
                          isSelected ? "text-campaign-cream-200" : "text-gray-500"
                        }`}
                      >
                        {pillar.tagline}
                      </p>
                    </div>
                  </div>
                  <ChevronRight
                    className={`w-5 h-5 transition-transform ${
                      isSelected ? "text-campaign-saffron-400 translate-x-1" : "text-gray-400"
                    }`}
                  />
                </button>
              );
            })}
          </div>

          {/* Active Pillar Detail Card (Right Column) */}
          <div className="lg:col-span-7">
            <div className="bg-gradient-to-br from-campaign-cream-100 via-white to-campaign-cream-100 p-6 sm:p-8 rounded-3xl border-2 border-campaign-cream-300 shadow-warm-lg">
              {/* Pillar Header */}
              <div className="flex items-center gap-4 mb-5">
                <div className="w-14 h-14 rounded-2xl bg-campaign-green-800 text-campaign-cream-100 flex items-center justify-center shadow-warm shrink-0">
                  <ActiveIcon className="w-7 h-7 text-campaign-saffron-400" />
                </div>
                <div>
                  <span className="text-xs font-bold text-campaign-red-700 uppercase tracking-wide bg-campaign-red-50 px-2.5 py-0.5 rounded-full border border-campaign-red-100">
                    {activePillar.tagline}
                  </span>
                  <h3 className="text-xl sm:text-2xl font-bold text-campaign-green-950 mt-1">
                    {activePillar.title}
                  </h3>
                </div>
              </div>

              {/* Description */}
              <p className="text-base sm:text-lg text-campaign-charcoal-800 leading-relaxed mb-6">
                {activePillar.description}
              </p>

              {/* Action Points */}
              <div className="space-y-3.5 mb-8">
                <h4 className="font-bold text-sm sm:text-base text-campaign-green-950 flex items-center gap-2">
                  <Sparkles className="w-4 h-4 text-campaign-saffron-600" />
                  <span>प्रस्तावित कार्य एवं प्राथमिकताएं:</span>
                </h4>
                <div className="grid grid-cols-1 gap-3">
                  {activePillar.points.map((point, idx) => (
                    <div
                      key={idx}
                      className="flex items-start gap-3 p-3.5 bg-white rounded-xl border border-campaign-cream-300 shadow-2xs"
                    >
                      <CheckCircle2 className="w-5 h-5 text-campaign-green-600 shrink-0 mt-0.5" />
                      <span className="text-sm sm:text-base font-medium text-campaign-charcoal-800 leading-snug">
                        {point}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Campaign Slogan Callout */}
              <div className="p-4 bg-campaign-green-950 text-white rounded-2xl flex flex-col sm:flex-row items-center justify-between gap-3 text-center sm:text-left">
                <div>
                  <p className="text-xs text-campaign-saffron-400 font-semibold">
                    {CAMPAIGN_INFO.panchayat} का संकल्प
                  </p>
                  <p className="text-sm font-bold text-campaign-cream-100">
                    “{CAMPAIGN_INFO.visionSlogan}”
                  </p>
                </div>
                <a
                  href="#contact"
                  className="whitespace-nowrap px-4 py-2 bg-campaign-green-700 hover:bg-campaign-green-600 text-white text-xs sm:text-sm font-bold rounded-xl transition-colors"
                >
                  सुझाव साझा करें
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
