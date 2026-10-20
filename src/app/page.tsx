import React from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import CandidateAbout from "@/components/CandidateAbout";
import DevelopmentVision from "@/components/DevelopmentVision";
import Showcase from "@/components/Showcase";
import CommunityChaupal from "@/components/CommunityChaupal";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col bg-campaign-cream-100 text-campaign-charcoal-900 selection:bg-campaign-green-100 selection:text-campaign-green-900">
      {/* 1. Header and Navigation */}
      <Navbar />

      {/* Main Content Area */}
      <main className="flex-1">
        {/* 2. Hero Section */}
        <Hero />

        {/* 3. Candidate Introduction */}
        <CandidateAbout />

        {/* 4. Development Vision (11 Priorities) */}
        <DevelopmentVision />

        {/* 5. Village Development Showcase */}
        <Showcase />

        {/* 6. Public Service & Community Chaupal */}
        <CommunityChaupal />

        {/* 7. Contact & Citizen Suggestion Section */}
        <ContactSection />
      </main>

      {/* 8. Footer */}
      <Footer />
    </div>
  );
}
