"use client";

import React from "react";
import Image from "next/image";
import { ArrowRight, UserCheck, MessageSquareQuote, CheckCircle, Sparkles, HeartHandshake } from "lucide-react";
import { CAMPAIGN_INFO } from "@/data/campaignData";

export default function Hero() {
  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      const topOffset = 80;
      const elementPosition = el.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - topOffset;
      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  return (
    <section
      id="hero"
      className="relative overflow-hidden bg-gradient-to-b from-campaign-cream-200 via-campaign-cream-100 to-white pt-6 pb-14 sm:pt-10 sm:pb-20 lg:pt-14 lg:pb-24 border-b border-campaign-cream-300"
    >
      {/* Decorative Background Elements */}
      <div className="absolute top-0 inset-x-0 h-40 bg-gradient-to-b from-campaign-green-900/5 to-transparent pointer-events-none" />
      <div className="absolute -top-24 -right-24 w-96 h-96 rounded-full bg-campaign-saffron-500/10 blur-3xl pointer-events-none" />
      <div className="absolute top-1/2 -left-24 w-96 h-96 rounded-full bg-campaign-green-600/10 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Left Column: Text & Content */}
          <div className="lg:col-span-7 flex flex-col items-center lg:items-start text-center lg:text-left space-y-5">
            {/* Tag Badge */}
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-campaign-green-800 to-campaign-green-700 text-white px-3.5 py-1.5 rounded-full text-xs sm:text-sm font-semibold shadow-xs">
              <Sparkles className="w-4 h-4 text-campaign-saffron-500 animate-pulse" />
              <span>सरपंच पद के अधिकृत उम्मीदवार</span>
              <span className="text-campaign-saffron-500">•</span>
              <span className="text-campaign-cream-200 font-normal">{CAMPAIGN_INFO.panchayat}</span>
            </div>

            {/* Main Headline */}
            <div className="space-y-1.5 w-full">
              <p className="text-campaign-red-700 font-bold text-base sm:text-lg tracking-wide">
                समाज सेवा और विकास के लिए समर्पित
              </p>
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-campaign-green-950 tracking-tight leading-[1.25]">
                {CAMPAIGN_INFO.candidateName}
              </h1>
              <div className="pt-1 flex flex-wrap items-center justify-center lg:justify-start gap-2 text-xs sm:text-sm font-medium text-campaign-charcoal-700">
                <span className="bg-white border border-campaign-cream-300 px-3 py-1 rounded-full shadow-2xs font-semibold text-campaign-green-800">
                  {CAMPAIGN_INFO.panchayat}
                </span>
                <span className="text-gray-400">•</span>
                <span className="bg-white border border-campaign-cream-300 px-3 py-1 rounded-full shadow-2xs">
                  तहसील {CAMPAIGN_INFO.tehsil}
                </span>
                <span className="text-gray-400">•</span>
                <span className="bg-white border border-campaign-cream-300 px-3 py-1 rounded-full shadow-2xs">
                  जिला {CAMPAIGN_INFO.district} (राजस्थान)
                </span>
              </div>
            </div>

            {/* Slogan Card */}
            <div className="w-full bg-gradient-to-r from-campaign-green-900 to-campaign-green-800 text-white p-4 sm:p-5 rounded-2xl shadow-warm border-l-4 border-campaign-saffron-500 text-left">
              <p className="text-xs sm:text-sm font-semibold text-campaign-saffron-500 uppercase tracking-wider mb-1 flex items-center gap-1.5">
                <HeartHandshake className="w-4 h-4 text-campaign-saffron-500" />
                <span>संकल्प पत्र</span>
              </p>
              <h2 className="text-lg sm:text-xl md:text-2xl font-bold leading-snug text-campaign-cream-50">
                “{CAMPAIGN_INFO.primarySlogan}”
              </h2>
              <p className="text-xs sm:text-sm text-campaign-cream-200 mt-1.5 font-medium">
                {CAMPAIGN_INFO.visionSlogan}
              </p>
            </div>

            {/* Respectful Introductory Statement */}
            <p className="text-base sm:text-lg text-campaign-charcoal-800 leading-relaxed max-w-2xl">
              ग्राम पंचायत मोड़ावासी के समस्त आदरणीय बुजुर्गों, माताओं-बहनों, किसान भाइयों और ऊर्जावान युवा साथियों को सादर प्रणाम। गांव के हर वर्ग के मान-सम्मान, आपसी भाईचारे और प्रत्येक ढाणी तक शुद्ध पेयजल, पक्की सड़क, बेहतर शिक्षा व स्वच्छता जैसी मूलभूत सुविधाओं को पहुंचाने के पावन उद्देश्य के साथ आपका अपना सेवक इकबाल खान आपके बीच है।
            </p>

            {/* Interactive Call to Action Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 w-full sm:w-auto pt-2">
              <button
                type="button"
                onClick={() => scrollTo("vision")}
                className="inline-flex items-center justify-center gap-2.5 bg-campaign-green-700 hover:bg-campaign-green-800 text-white px-6 py-3.5 rounded-xl font-bold text-base shadow-warm hover:shadow-warm-lg transition-all transform hover:-translate-y-0.5 active:translate-y-0 focus:outline-none focus:ring-2 focus:ring-campaign-green-600 focus:ring-offset-2"
              >
                <span>विकास संकल्प देखें</span>
                <ArrowRight className="w-5 h-5" />
              </button>

              <button
                type="button"
                onClick={() => scrollTo("about")}
                className="inline-flex items-center justify-center gap-2 bg-white hover:bg-campaign-cream-200 text-campaign-green-900 border-2 border-campaign-green-700 px-5 py-3.5 rounded-xl font-bold text-base shadow-2xs hover:shadow-xs transition-all focus:outline-none focus:ring-2 focus:ring-campaign-green-600 focus:ring-offset-2"
              >
                <UserCheck className="w-5 h-5 text-campaign-green-700" />
                <span>उम्मीदवार परिचय</span>
              </button>

              <button
                type="button"
                onClick={() => scrollTo("contact")}
                className="inline-flex items-center justify-center gap-2 bg-campaign-cream-200 hover:bg-campaign-cream-300 text-campaign-charcoal-800 border border-campaign-cream-400 px-4 py-3.5 rounded-xl font-semibold text-sm transition-all"
              >
                <MessageSquareQuote className="w-4 h-4 text-campaign-red-700" />
                <span>सुझाव भेजें</span>
              </button>
            </div>

            {/* Quick Guarantees & Pillars */}
            <div className="pt-3 border-t border-campaign-cream-300 w-full grid grid-cols-1 sm:grid-cols-3 gap-2.5 text-xs text-left">
              <div className="flex items-center gap-2 text-campaign-green-900 font-semibold bg-white p-2.5 rounded-xl border border-campaign-cream-300 shadow-2xs">
                <CheckCircle className="w-4 h-4 text-campaign-green-600 shrink-0" />
                <span>आपसी भाईचारा व सद्भाव</span>
              </div>
              <div className="flex items-center gap-2 text-campaign-green-900 font-semibold bg-white p-2.5 rounded-xl border border-campaign-cream-300 shadow-2xs">
                <CheckCircle className="w-4 h-4 text-campaign-green-600 shrink-0" />
                <span>समान विकास, हर ढाणी तक</span>
              </div>
              <div className="flex items-center gap-2 text-campaign-green-900 font-semibold bg-white p-2.5 rounded-xl border border-campaign-cream-300 shadow-2xs">
                <CheckCircle className="w-4 h-4 text-campaign-green-600 shrink-0" />
                <span>100% पारदर्शी ग्राम पंचायत</span>
              </div>
            </div>
          </div>

          {/* Right Column: Candidate & Campaign Artwork (Prominent 440-500px Desktop Presentation) */}
          <div className="lg:col-span-5 flex flex-col items-center justify-center w-full">
            <div className="relative w-full max-w-lg lg:max-w-none">
              {/* Decorative Frame Glow */}
              <div className="absolute -inset-1.5 bg-gradient-to-tr from-campaign-green-700 via-campaign-saffron-500 to-campaign-red-600 rounded-3xl blur-xs opacity-75" />

              <div className="relative bg-white p-3 sm:p-4 rounded-3xl shadow-warm-lg border border-campaign-cream-300 overflow-hidden flex items-center justify-center">
                {/* Image Container with 440–500px height on desktop, object-contain to preserve every detail and lettering without cropping */}
                <div className="relative w-full h-[280px] sm:h-[360px] md:h-[440px] lg:h-[480px] xl:h-[500px] rounded-2xl overflow-hidden bg-black/[0.02]">
                  <Image
                    src="/images/campaign-logo.jpg"
                    alt="ग्राम पंचायत मोड़ावासी सरपंच पद उम्मीदवार इकबाल खान भूरणान"
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 550px"
                    className="object-contain"
                    priority
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
