"use client";

import React, { useState } from "react";
import {
  MapPin,
  Send,
  MessageSquare,
  Share2,
  Heart,
  Landmark,
  Phone,
  MessageCircle,
  ExternalLink,
  ShieldCheck,
  Info,
} from "lucide-react";
import { CAMPAIGN_INFO } from "@/data/campaignData";

// Campaign Contact Configuration
// Verified contact numbers for Gram Panchayat Modawasi Campaign
// Note: If empty, direct links inform the visitor that the official number will be updated soon.
export const CONTACT_CONFIG = {
  officeAddress: "ग्राम पंचायत मोड़ावासी, तहसील राजगढ़ (सादुलपुर), जिला चूरू, राजस्थान - 331023",
  // Format: digits only with country code (e.g. "919876543210")
  phoneNumber: "", 
  whatsappNumber: "", 
};

export default function ContactSection() {
  const [formState, setFormState] = useState({
    name: "",
    ward: "",
    phone: "",
    category: "पेयजल एवं जल संरक्षण",
    message: "",
  });

  const [validationError, setValidationError] = useState("");
  const [generatedUrl, setGeneratedUrl] = useState<string | null>(null);
  const [copied, setCopied] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!formState.name.trim()) {
      setValidationError("कृपया अपना नाम दर्ज करें।");
      return;
    }
    if (!formState.message.trim()) {
      setValidationError("कृपया अपना सुझाव या संदेश लिखें।");
      return;
    }

    setValidationError("");

    // Construct clear, structured Hindi message for WhatsApp
    const messageLines = [
      `🚩 *ग्राम पंचायत मोड़ावासी — विकास सुझाव एवं संदेश*`,
      ``,
      `👤 *प्रेषक का नाम:* ${formState.name.trim()}`,
      formState.ward.trim() ? `📍 *वार्ड / ढाणी:* ${formState.ward.trim()}` : null,
      formState.phone.trim() ? `📞 *संपर्क नंबर:* ${formState.phone.trim()}` : null,
      `🏷️ *विषय:* ${formState.category}`,
      ``,
      `📝 *सुझाव / समस्या का विवरण:*`,
      `${formState.message.trim()}`,
      ``,
      `— मोड़ावासी चुनाव अभियान पोर्टल`,
    ].filter(Boolean);

    const fullMessage = messageLines.join("\n");
    const encodedMessage = encodeURIComponent(fullMessage);

    // Target WhatsApp URL
    const targetUrl = CONTACT_CONFIG.whatsappNumber
      ? `https://wa.me/${CONTACT_CONFIG.whatsappNumber}?text=${encodedMessage}`
      : `https://api.whatsapp.com/send?text=${encodedMessage}`;

    setGeneratedUrl(targetUrl);

    // Open WhatsApp in safe new window/tab
    window.open(targetUrl, "_blank", "noopener,noreferrer");
  };

  const handleShare = async () => {
    const shareData = {
      title: "इकबाल खान भूरणान - सरपंच उम्मीदवार मोड़ावासी",
      text: "ग्राम पंचायत मोड़ावासी के सर्वांगीण विकास के लिए इकबाल खान भूरणान का विकास संकल्प पत्र देखें:",
      url: window.location.href,
    };
    if (navigator.share) {
      try {
        await navigator.share(shareData);
      } catch {
        copyLink();
      }
    } else {
      copyLink();
    }
  };

  const copyLink = () => {
    navigator.clipboard.writeText(window.location.href);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const directWhatsappUrl = CONTACT_CONFIG.whatsappNumber
    ? `https://wa.me/${CONTACT_CONFIG.whatsappNumber}`
    : `https://api.whatsapp.com/send`;

  const directCallUrl = CONTACT_CONFIG.phoneNumber
    ? `tel:${CONTACT_CONFIG.phoneNumber}`
    : null;

  return (
    <section id="contact" className="py-16 sm:py-20 lg:py-24 bg-white relative border-t border-campaign-cream-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-1.5 text-campaign-green-800 bg-campaign-green-200/50 px-3.5 py-1 rounded-full text-xs sm:text-sm font-semibold border border-campaign-green-300 mb-3">
            <MessageSquare className="w-4 h-4 text-campaign-saffron-600" />
            <span>जनसंपर्क एवं सुझाव पत्र</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-campaign-green-950 tracking-tight">
            आपका विचार, मोड़ावासी का भविष्य
          </h2>
          <div className="w-20 h-1 bg-campaign-saffron-500 mx-auto mt-4 rounded-full" />
          <p className="mt-4 text-base sm:text-lg text-campaign-charcoal-700 leading-relaxed">
            ग्राम पंचायत मोड़ावासी के प्रत्येक नागरिक का विचार और सुझाव हमारे लिए बहुमूल्य है। अपने विचार सीधे हमसे साझा करें।
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          {/* Left Column: Official Location & Direct Contact Buttons */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-campaign-cream-100 p-6 sm:p-7 rounded-3xl border border-campaign-cream-300 shadow-warm space-y-5">
              <h3 className="font-extrabold text-lg sm:text-xl text-campaign-green-950 flex items-center gap-2">
                <Landmark className="w-5 h-5 text-campaign-green-700" />
                <span>कार्यालय एवं पंचायत विवरण</span>
              </h3>

              <div className="space-y-4 pt-2 border-t border-campaign-cream-300 text-sm">
                <div>
                  <p className="text-xs text-gray-500 font-semibold uppercase">उम्मीदवार का नाम</p>
                  <p className="font-bold text-base text-campaign-green-950 mt-0.5">
                    {CAMPAIGN_INFO.candidateName}
                  </p>
                  <p className="text-xs text-campaign-red-700 font-semibold">सरपंच पद उम्मीदवार</p>
                </div>

                <div>
                  <p className="text-xs text-gray-500 font-semibold uppercase">ग्राम पंचायत क्षेत्र</p>
                  <p className="font-semibold text-campaign-charcoal-800 mt-0.5">
                    {CAMPAIGN_INFO.panchayat}
                  </p>
                  <p className="text-xs text-gray-600">
                    तहसील: {CAMPAIGN_INFO.tehsil} • जिला: {CAMPAIGN_INFO.district} (राजस्थान)
                  </p>
                </div>

                <div className="flex items-start gap-3 pt-2">
                  <MapPin className="w-5 h-5 text-campaign-green-700 shrink-0 mt-0.5" />
                  <div>
                    <p className="text-xs text-gray-500 font-semibold uppercase">स्थान</p>
                    <p className="text-campaign-charcoal-800 leading-relaxed font-medium">
                      {CONTACT_CONFIG.officeAddress}
                    </p>
                  </div>
                </div>
              </div>

              {/* Direct Contact Buttons (WhatsApp and Call) */}
              <div className="pt-4 border-t border-campaign-cream-300 space-y-3">
                <p className="text-xs text-gray-600 font-bold uppercase tracking-wider">
                  सीधा संपर्क माध्यम
                </p>

                {/* WhatsApp Direct Button */}
                <a
                  href={directWhatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full flex items-center justify-center gap-2.5 bg-emerald-600 hover:bg-emerald-700 text-white px-4 py-3 rounded-xl font-bold text-sm shadow-sm transition-all focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2"
                >
                  <MessageCircle className="w-5 h-5" />
                  <span>WhatsApp पर संपर्क करें</span>
                  <ExternalLink className="w-4 h-4 opacity-75" />
                </a>

                {/* Direct Phone Call Button */}
                {directCallUrl ? (
                  <a
                    href={directCallUrl}
                    className="w-full flex items-center justify-center gap-2.5 bg-campaign-green-800 hover:bg-campaign-green-900 text-white px-4 py-3 rounded-xl font-bold text-sm shadow-sm transition-all focus:outline-none focus:ring-2 focus:ring-campaign-green-600 focus:ring-offset-2"
                  >
                    <Phone className="w-5 h-5" />
                    <span>सीधे कॉल करें</span>
                  </a>
                ) : (
                  <div className="w-full p-2.5 bg-campaign-cream-200 border border-campaign-cream-400 rounded-xl text-xs text-center text-campaign-charcoal-700 font-medium">
                    <span>📞 आधिकारिक दूरभाष नंबर जल्द ही उपलब्ध कराया जाएगा</span>
                  </div>
                )}

                {/* Desktop WhatsApp Note */}
                <p className="text-[11px] text-gray-500 leading-tight text-center">
                  💻 कंप्यूटर उपयोगकर्ताओं के लिए लिंक WhatsApp Web या App में खुलेगा।
                </p>

                {/* Share Website Button */}
                <button
                  type="button"
                  onClick={handleShare}
                  className="w-full flex items-center justify-center gap-2 bg-white hover:bg-campaign-cream-200 text-campaign-green-950 px-4 py-2.5 rounded-xl font-semibold text-xs transition-colors border border-campaign-cream-400 mt-2"
                >
                  <Share2 className="w-4 h-4 text-campaign-green-700" />
                  <span>{copied ? "लिंक कॉपी हो गया!" : "वेबसाइट को ग्रामीणों के साथ साझा करें"}</span>
                </button>
              </div>
            </div>

            {/* Respectful Village Trust Note */}
            <div className="bg-campaign-green-900 text-white p-6 rounded-3xl shadow-warm space-y-2">
              <div className="flex items-center gap-2 text-campaign-saffron-400 font-bold text-xs uppercase tracking-wider">
                <Heart className="w-4 h-4 fill-campaign-saffron-400" />
                <span>सच्चा संकल्प</span>
              </div>
              <h4 className="font-bold text-base text-campaign-cream-50">
                “हर वार्ड, हर ढाणी और हर परिवार का विकास ही हमारा लक्ष्य है।”
              </h4>
              <p className="text-xs text-campaign-cream-200 leading-relaxed">
                ग्राम पंचायत मोड़ावासी के विकास में हर ग्रामीण की सलाह का दिल से स्वागत है।
              </p>
            </div>
          </div>

          {/* Right Column: Citizen Feedback / Suggestion Form with WhatsApp Integration */}
          <div className="lg:col-span-7">
            <div className="bg-campaign-cream-50 p-6 sm:p-8 rounded-3xl border border-campaign-cream-300 shadow-warm">
              <div className="mb-6">
                <h3 className="font-extrabold text-xl text-campaign-green-950">
                  सुझाव व समस्या प्रपत्र (WhatsApp कनेक्टेड)
                </h3>
                <p className="text-xs sm:text-sm text-gray-600 mt-1">
                  अपना सुझाव या समस्या यहाँ लिखें — सबमिट करने पर यह सीधे आपके WhatsApp में प्रेषण हेतु तैयार होकर खुलेगा।
                </p>
              </div>

              {validationError && (
                <div className="mb-4 p-3 bg-campaign-red-50 border border-campaign-red-200 text-campaign-red-800 text-xs rounded-xl flex items-center gap-2">
                  <Info className="w-4 h-4 shrink-0 text-campaign-red-600" />
                  <span>{validationError}</span>
                </div>
              )}

              {generatedUrl ? (
                <div className="p-6 bg-white rounded-2xl border-2 border-emerald-500 text-center space-y-4 animate-in fade-in duration-300">
                  <div className="w-12 h-12 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center mx-auto shadow-sm">
                    <MessageCircle className="w-6 h-6" />
                  </div>
                  <h4 className="font-bold text-lg text-campaign-green-950">
                    आपका संदेश WhatsApp पर तैयार है!
                  </h4>
                  <p className="text-xs sm:text-sm text-campaign-charcoal-700 max-w-md mx-auto leading-relaxed">
                    आदरणीय <strong>{formState.name}</strong> जी, आपका संदेश WhatsApp विंडो में प्री-फिल कर दिया गया है। कृपया WhatsApp में जाकर संदेश की समीक्षा करें और स्वयं <strong>&apos;Send&apos;</strong> बटन दबाकर प्रेषित करें।
                  </p>

                  <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3">
                    <a
                      href={generatedUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3 bg-emerald-600 hover:bg-emerald-700 text-white font-bold rounded-xl text-xs sm:text-sm shadow-sm transition-colors"
                    >
                      <ExternalLink className="w-4 h-4" />
                      <span>WhatsApp चैट पुनः खोलें</span>
                    </a>

                    <button
                      type="button"
                      onClick={() => {
                        setGeneratedUrl(null);
                        setFormState({
                          name: "",
                          ward: "",
                          phone: "",
                          category: "पेयजल एवं जल संरक्षण",
                          message: "",
                        });
                      }}
                      className="w-full sm:w-auto px-4 py-3 bg-campaign-cream-200 hover:bg-campaign-cream-300 text-campaign-charcoal-800 font-semibold rounded-xl text-xs transition-colors"
                    >
                      नया सुझाव लिखें
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="name" className="block text-xs font-bold text-campaign-charcoal-800 mb-1">
                        आपका नाम <span className="text-campaign-red-600">*</span>
                      </label>
                      <input
                        type="text"
                        id="name"
                        required
                        value={formState.name}
                        onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                        placeholder="उदा. रमेश कुमार"
                        className="w-full px-3.5 py-2.5 rounded-xl border border-campaign-cream-400 bg-white focus:outline-none focus:ring-2 focus:ring-campaign-green-600 text-sm"
                      />
                    </div>

                    <div>
                      <label htmlFor="ward" className="block text-xs font-bold text-campaign-charcoal-800 mb-1">
                        वार्ड नं. / ढाणी / मोहल्ला
                      </label>
                      <input
                        type="text"
                        id="ward"
                        value={formState.ward}
                        onChange={(e) => setFormState({ ...formState, ward: e.target.value })}
                        placeholder="उदा. वार्ड नं. 4 / मुख्य ढाणी"
                        className="w-full px-3.5 py-2.5 rounded-xl border border-campaign-cream-400 bg-white focus:outline-none focus:ring-2 focus:ring-campaign-green-600 text-sm"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="phone" className="block text-xs font-bold text-campaign-charcoal-800 mb-1">
                        आपका संपर्क नंबर (वैकल्पिक)
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        value={formState.phone}
                        onChange={(e) => setFormState({ ...formState, phone: e.target.value })}
                        placeholder="उदा. 98XXXXXXXX"
                        className="w-full px-3.5 py-2.5 rounded-xl border border-campaign-cream-400 bg-white focus:outline-none focus:ring-2 focus:ring-campaign-green-600 text-sm"
                      />
                    </div>

                    <div>
                      <label htmlFor="category" className="block text-xs font-bold text-campaign-charcoal-800 mb-1">
                        सुझाव का मुख्य विषय
                      </label>
                      <select
                        id="category"
                        value={formState.category}
                        onChange={(e) => setFormState({ ...formState, category: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded-xl border border-campaign-cream-400 bg-white focus:outline-none focus:ring-2 focus:ring-campaign-green-600 text-sm font-medium"
                      >
                        <option value="पेयजल एवं जल संरक्षण">पेयजल एवं जल संरक्षण</option>
                        <option value="सड़क एवं आवागमन">सड़क एवं आवागमन</option>
                        <option value="स्वच्छता एवं नाली निर्माण">स्वच्छता एवं नाली निर्माण</option>
                        <option value="शिक्षा एवं विद्यालय विकास">शिक्षा एवं विद्यालय विकास</option>
                        <option value="युवा रोजगार एवं खेल">युवा रोजगार एवं खेल</option>
                        <option value="स्वास्थ्य एवं पशु चिकित्सा">स्वास्थ्य एवं पशु चिकित्सा</option>
                        <option value="सरकारी योजनाओं की सहायता">सरकारी योजनाओं की सहायता</option>
                        <option value="अन्य सामान्य सुझाव">अन्य सामान्य सुझाव</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-xs font-bold text-campaign-charcoal-800 mb-1">
                      आपका विचार / समस्या का विवरण <span className="text-campaign-red-600">*</span>
                    </label>
                    <textarea
                      id="message"
                      required
                      rows={4}
                      value={formState.message}
                      onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                      placeholder="मोड़ावासी के विकास से संबंधित अपना सुझाव या समस्या यहाँ लिखें..."
                      className="w-full px-3.5 py-2.5 rounded-xl border border-campaign-cream-400 bg-white focus:outline-none focus:ring-2 focus:ring-campaign-green-600 text-sm resize-none"
                    />
                  </div>

                  {/* Privacy and Review Note */}
                  <div className="p-3 bg-campaign-cream-100 rounded-xl border border-campaign-cream-300 text-xs text-campaign-charcoal-700 flex items-start gap-2">
                    <ShieldCheck className="w-4 h-4 text-campaign-green-700 shrink-0 mt-0.5" />
                    <p className="leading-snug">
                      <strong>गोपनीयता व समीक्षा सूचना:</strong> आपका सुझाव प्रपत्र सबमिट करते ही एक व्यवस्थित संदेश के रूप में WhatsApp में खुलेगा, जहां आप स्वयं संदेश की समीक्षा कर &apos;Send&apos; कर सकते हैं।
                    </p>
                  </div>

                  <button
                    type="submit"
                    className="w-full flex items-center justify-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white font-bold py-3.5 px-6 rounded-xl shadow-warm transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2"
                  >
                    <Send className="w-4 h-4" />
                    <span>WhatsApp पर सुझाव प्रेषित करें</span>
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
