"use client";

import React from "react";
import Image from "next/image";
import { User, Shield, HeartHandshake, Eye, Sparkles, CheckCircle2 } from "lucide-react";
import { CAMPAIGN_INFO } from "@/data/campaignData";

const CORE_VALUES = [
  {
    icon: HeartHandshake,
    title: "आपसी भाईचारा व सद्भाव",
    description: "गांव के सभी परिवारों, जातियों और वर्गों के बीच अटूट एकता और परस्पर सम्मान बनाए रखना हमारी सर्वोच्च प्राथमिकता है।",
  },
  {
    icon: Shield,
    title: "निष्पक्ष व समान विकास",
    description: "किसी भी मोहल्ले, बस्ती या ढाणी के साथ कोई भेदभाव नहीं। विकास की हर योजना का लाभ निष्पक्ष रूप से हर नागरिक तक पहुंचेगा।",
  },
  {
    icon: Eye,
    title: "पारदर्शिता व खुलापन",
    description: "ग्राम पंचायत के बजट, स्वीकृत कार्यों और योजनाओं की पूरी जानकारी खुली चौपाल में ग्रामवासियों के समक्ष प्रस्तुत की जाएगी।",
  },
  {
    icon: User,
    title: "सुलभ व सदैव उपलब्ध",
    description: "किसी भी नागरिक को अपनी बात कहने के लिए किसी सिफारिश की जरूरत नहीं होगी। आपका सेवक 24 घंटे आपके लिए उपलब्ध रहेगा।",
  },
];

export default function CandidateAbout() {
  return (
    <section id="about" className="py-16 sm:py-20 lg:py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-1.5 text-campaign-green-800 bg-campaign-green-50 px-3.5 py-1 rounded-full text-xs sm:text-sm font-semibold border border-campaign-green-200 mb-3">
            <Sparkles className="w-4 h-4 text-campaign-saffron-500" />
            <span>उम्मीदवार परिचय एवं विचार</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-campaign-green-950 tracking-tight">
            गांव की सेवा और विकास का संकल्प — इकबाल खान भूरणान
          </h2>
          <div className="w-20 h-1 bg-campaign-saffron-500 mx-auto mt-4 rounded-full" />
          <p className="mt-4 text-base sm:text-lg text-campaign-charcoal-700 leading-relaxed">
            ग्राम पंचायत मोड़ावासी की माटी से जुड़ाव, बड़ों का मार्गदर्शन और जनसेवा की सच्ची भावना के साथ एक नई सोच की शुरुआत।
          </p>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          {/* Left Column: Authentic Candidate Photo Presentation */}
          <div className="lg:col-span-5 flex flex-col items-center">
            <div className="relative w-full max-w-sm sm:max-w-md bg-campaign-cream-100 p-3 sm:p-4 rounded-3xl border-2 border-campaign-green-700/30 shadow-warm-lg">
              <div className="relative w-full aspect-[3/4] rounded-2xl overflow-hidden bg-campaign-cream-200">
                <Image
                  src="/images/candidate-full.jpg"
                  alt="इकबाल खान भूरणान - सरपंच उम्मीदवार मोड़ावासी"
                  fill
                  sizes="(max-width: 768px) 100vw, 400px"
                  className="object-cover object-top"
                />
                <div className="absolute top-3 left-3 bg-campaign-green-900/90 text-white text-[11px] sm:text-xs font-semibold px-2.5 py-1 rounded-full backdrop-blur-xs border border-campaign-green-700">
                  सरपंच उम्मीदवार
                </div>
              </div>

              {/* Caption Card */}
              <div className="mt-3.5 text-center p-3 bg-white rounded-xl border border-campaign-cream-300 shadow-2xs">
                <h3 className="font-bold text-base sm:text-lg text-campaign-green-950">
                  {CAMPAIGN_INFO.candidateName}
                </h3>
                <p className="text-xs sm:text-sm text-campaign-red-700 font-semibold">
                  {CAMPAIGN_INFO.panchayat}, {CAMPAIGN_INFO.tehsil} (चूरू)
                </p>
                <p className="text-xs text-campaign-charcoal-700 mt-1 italic">
                  “{CAMPAIGN_INFO.primarySlogan}”
                </p>
              </div>
            </div>
          </div>

          {/* Right Column: Narrative, Ethos & Principles */}
          <div className="lg:col-span-7 space-y-6">
            <div className="bg-campaign-cream-100 p-5 sm:p-6 rounded-2xl border border-campaign-cream-300 shadow-2xs space-y-3.5">
              <h3 className="text-lg sm:text-xl font-bold text-campaign-green-950 flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-campaign-red-600" />
                <span>सेवा और समर्पण ही हमारा मार्ग है</span>
              </h3>
              <p className="text-base text-campaign-charcoal-800 leading-relaxed">
                ग्राम पंचायत मोड़ावासी के सरपंच पद हेतु चुनाव लड़ना हमारे लिए कोई व्यक्तिगत महत्वाकांक्षा नहीं, बल्कि गांव के प्रत्येक परिवार की सेवा और मोड़ावासी को प्रगति के पथ पर आगे ले जाने का एक विनम्र प्रयास है।
              </p>
              <p className="text-base text-campaign-charcoal-800 leading-relaxed">
                हमारा उद्देश्य गांव में किसी भी प्रकार के मतभेद या भेदभाव से परे हटकर, सभी वर्गों को साथ लेकर चलना है। चाहे बुजुर्गों का मान-सम्मान हो, युवाओं के लिए रोजगार और खेल की सुविधाएं हों, या माताओं-बहनों के लिए शुद्ध पेयजल और सुरक्षित गलियां — हम हर वादे को धरातल पर उतारने के लिए पूरी ईमानदारी से प्रयास करेंगे।
              </p>
              <div className="pt-2 border-t border-campaign-cream-300 flex items-center gap-2 text-xs sm:text-sm font-semibold text-campaign-green-800">
                <CheckCircle2 className="w-4 h-4 text-campaign-green-600 shrink-0" />
                <span>पारदर्शी प्रशासन • खुली ग्राम सभा • जन-जन की भागीदारी</span>
              </div>
            </div>

            {/* Core Values 2x2 Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {CORE_VALUES.map((item, idx) => {
                const Icon = item.icon;
                return (
                  <div
                    key={idx}
                    className="p-4 rounded-xl bg-white border border-campaign-cream-300 hover:border-campaign-green-600/40 hover:shadow-warm transition-all duration-200 group"
                  >
                    <div className="flex items-center gap-3 mb-2">
                      <div className="w-10 h-10 rounded-lg bg-campaign-green-50 text-campaign-green-700 flex items-center justify-center shrink-0 group-hover:bg-campaign-green-700 group-hover:text-white transition-colors">
                        <Icon className="w-5 h-5" />
                      </div>
                      <h4 className="font-bold text-sm sm:text-base text-campaign-green-950">
                        {item.title}
                      </h4>
                    </div>
                    <p className="text-xs sm:text-sm text-campaign-charcoal-700 leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                );
              })}
            </div>

            {/* Direct Appeal Box */}
            <div className="p-4 bg-gradient-to-r from-campaign-green-900 to-campaign-green-800 text-white rounded-2xl flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="text-center sm:text-left">
                <p className="text-xs text-campaign-saffron-500 font-semibold uppercase">आपका आशीर्वाद</p>
                <h4 className="font-bold text-base sm:text-lg text-campaign-cream-50">
                  मोड़ावासी के विकास में हर ग्रामीण का सुझाव जरूरी है
                </h4>
              </div>
              <a
                href="#contact"
                className="whitespace-nowrap px-4 py-2 bg-campaign-saffron-500 hover:bg-campaign-saffron-600 text-campaign-green-950 font-bold text-xs sm:text-sm rounded-xl shadow-xs transition-colors"
              >
                सुझाव साझा करें
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
