import React, { useState } from 'react';
import { HexagonGraphicSection } from './components/HexagonGraphicSection';
import { BreakthroughViewpointsSection } from './components/BreakthroughViewpointsSection';
import { CorePrinciplesSection } from './components/CorePrinciplesSection';
import { InvestmentTypesMatrix } from './components/InvestmentTypesMatrix';
import { GroupRulesSection } from './components/GroupRulesSection';
import { ArrowUp } from 'lucide-react';

export default function App() {
  const [, setActiveSection] = useState<string>('quan-diem');

  const scrollToSection = (secId: string) => {
    setActiveSection(secId);
    const el = document.getElementById(secId);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-800 font-sans selection:bg-red-200 selection:text-red-900 bg-grid-pattern pb-12">
      {/* Main Content Sections */}
      <main className="max-w-7xl mx-auto px-4 pt-6 space-y-8">
        {/* 4 Main Pillars Interlocking Hexagon Graphic */}
        <HexagonGraphicSection onSelectSection={scrollToSection} />

        {/* Section 1: 5 Quan điểm đột phá */}
        <BreakthroughViewpointsSection />

        {/* Section 2: 5 Nguyên tắc cốt lõi (Điều 3) */}
        <CorePrinciplesSection />

        {/* Section 3: 4 Loại hình đầu tư kinh doanh */}
        <InvestmentTypesMatrix />

        {/* Section 4: Quy định cụ thể 6 nhóm đối tượng */}
        <GroupRulesSection />
      </main>

      {/* Scroll to Top Floating Button */}
      <button
        onClick={scrollToTop}
        className="no-print fixed bottom-6 right-6 w-11 h-11 bg-red-600 hover:bg-red-700 text-white rounded-full flex items-center justify-center shadow-lg transition transform hover:scale-105 active:scale-95 z-30"
        title="Về đầu trang"
      >
        <ArrowUp className="w-5 h-5" />
      </button>
    </div>
  );
}
