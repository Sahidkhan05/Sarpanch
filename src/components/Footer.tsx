import React from "react";

export default function Footer() {
  return (
    <footer className="bg-campaign-green-950 text-campaign-cream-100 border-t-4 border-campaign-saffron-500 py-10 sm:py-14">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-8">
        {/* Thank-you message */}
        <div className="space-y-4">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-campaign-saffron-400 tracking-tight">
            हार्दिक धन्यवाद!
          </h2>
          <p className="text-sm sm:text-base md:text-lg text-campaign-cream-100 leading-relaxed max-w-2xl mx-auto font-medium">
            हमारी वेबसाइट पर अपना बहुमूल्य समय देने और ग्राम पंचायत मोड़ावासी के विकास के इस संकल्प से जुड़ने के लिए आपका बहुत-बहुत धन्यवाद। आपका विश्वास, सहयोग और सुझाव हमारे लिए महत्वपूर्ण हैं। आइए, मिलकर मोड़ावासी को एक बेहतर गाँव बनाने की दिशा में आगे बढ़ें।
          </p>
        </div>

        {/* Subtle Divider */}
        <div className="w-24 h-0.5 bg-campaign-green-800 mx-auto rounded-full" />

        {/* Developer Credit */}
        <div>
          <p className="text-xs sm:text-sm text-campaign-cream-300 font-medium tracking-wide">
            Developed by <span className="text-campaign-saffron-400 font-semibold">Sahid Khan</span> | Software Developer
          </p>
        </div>
      </div>
    </footer>
  );
}
