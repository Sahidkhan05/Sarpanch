"use client";

import React from "react";
import { Users2, Landmark, ShieldCheck, HeartHandshake, Sparkles } from "lucide-react";
import { CAMPAIGN_INFO } from "@/data/campaignData";

const COMMUNITY_PILLARS = [
  {
    icon: Landmark,
    title: "नियमित खुली ग्राम चौपाल",
    description: "हर महीने पंचायत क्षेत्र में खुली चौपाल का आयोजन, जहां प्रत्येक नागरिक बिना किसी संकोच के सीधे अपनी बात और समस्या रख सकेगा।",
  },
  {
    icon: Users2,
    title: "बुजुर्ग मार्गदर्शन मंडल",
    description: "गांव के वरिष्ठ एवं अनुभवी बुजुर्गों का आशीर्वाद और समय-समय पर मार्गदर्शन लेकर विकास कार्यों की रूपरेखा तय की जाएगी।",
  },
  {
    icon: Sparkles,
    title: "युवा विकास एवं मार्गदर्शन मंच",
    description: "युवाओं की शिक्षा, प्रतियोगी परीक्षाओं, खेल और रोजगार से जुड़े विषयों पर नियमित संवाद व विशेषज्ञों द्वारा करियर मार्गदर्शन।",
  },
  {
    icon: ShieldCheck,
    title: "मातृशक्ति का सम्मान व सहभागिता",
    description: "गांव की स्वच्छता, स्वास्थ्य और सामाजिक सुरक्षा से जुड़े विषयों में महिलाओं की बात को प्राथमिकता व सम्मानजनक स्थान।",
  },
];

export default function CommunityChaupal() {
  return (
    <section id="chaupal" className="py-16 sm:py-20 lg:py-24 bg-campaign-cream-100 relative border-t border-campaign-cream-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-1.5 text-campaign-green-800 bg-campaign-green-200/50 px-3.5 py-1 rounded-full text-xs sm:text-sm font-semibold border border-campaign-green-300 mb-3">
            <HeartHandshake className="w-4 h-4 text-campaign-saffron-600" />
            <span>जन-सहयोग एवं चौपाल संवाद</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-campaign-green-950 tracking-tight">
            जन-जन की आवाज, पारदर्शी पंचायत
          </h2>
          <div className="w-20 h-1 bg-campaign-saffron-500 mx-auto mt-4 rounded-full" />
          <p className="mt-4 text-base sm:text-lg text-campaign-charcoal-700 leading-relaxed">
            लोकतंत्र की वास्तविक शक्ति जनता की सहभागिता में है। हमारा संकल्प है कि मोड़ावासी का हर निर्णय चौपाल में, आपके सामने और आपके परामर्श से लिया जाएगा।
          </p>
        </div>

        {/* 4 Community Dialogue Pillars */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {COMMUNITY_PILLARS.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="bg-white p-6 rounded-2xl border border-campaign-cream-300 shadow-2xs hover:shadow-warm hover:border-campaign-green-600/40 transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="w-12 h-12 rounded-xl bg-campaign-green-50 text-campaign-green-800 flex items-center justify-center mb-4 border border-campaign-green-200 shadow-2xs">
                    <Icon className="w-6 h-6 text-campaign-green-700" />
                  </div>
                  <h3 className="font-bold text-base sm:text-lg text-campaign-green-950 mb-2 leading-snug">
                    {item.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-campaign-charcoal-700 leading-relaxed">
                    {item.description}
                  </p>
                </div>
                <div className="mt-4 pt-3 border-t border-campaign-cream-200 text-[11px] font-semibold text-campaign-green-700">
                  समान भागीदारी • खुला मंच
                </div>
              </div>
            );
          })}
        </div>

        {/* Community Pledge Banner */}
        <div className="bg-gradient-to-r from-campaign-green-900 via-campaign-green-800 to-campaign-green-900 text-white rounded-3xl p-6 sm:p-10 shadow-warm-lg text-center relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-campaign-saffron-500/10 rounded-full blur-2xl pointer-events-none" />
          <div className="max-w-3xl mx-auto relative z-10 space-y-4">
            <span className="text-xs font-bold text-campaign-saffron-400 uppercase tracking-widest bg-campaign-green-950/60 px-3 py-1 rounded-full border border-campaign-green-700">
              सार्वजनिक संकल्प
            </span>
            <h3 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-campaign-cream-50 leading-snug">
              “आपका सुख-दुख, हमारा सुख-दुख — मोड़ावासी का प्रत्येक परिवार हमारा अपना परिवार है।”
            </h3>
            <p className="text-sm sm:text-base text-campaign-cream-200 leading-relaxed">
              गांव में शांति, सौहार्द और परस्पर विश्वास ही हमारी सबसे बड़ी पूंजी है। आइए, आपसी प्रेम के साथ मिलकर एक ऐसा मोड़ावासी बनाएं जिस पर हम सभी को गर्व हो।
            </p>
            <div className="pt-2">
              <span className="inline-block font-semibold text-sm text-campaign-saffron-300">
                — {CAMPAIGN_INFO.candidateName} (सरपंच उम्मीदवार, {CAMPAIGN_INFO.panchayat})
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
