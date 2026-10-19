import React from 'react';
import { GROUP_RULES } from '../data/guidelinesData';

interface GroupRulesSectionProps {
  searchQuery?: string;
}

export const GroupRulesSection: React.FC<GroupRulesSectionProps> = ({ searchQuery = '' }) => {
  const filteredGroups = GROUP_RULES.filter((g) => {
    if (!searchQuery) return true;
    const q = searchQuery.toLowerCase();
    return (
      g.groupName.toLowerCase().includes(q) ||
      g.article.toLowerCase().includes(q) ||
      g.shortDesc.toLowerCase().includes(q)
    );
  });

  return (
    <section id="nhom-doi-tuong" className="scroll-mt-28 py-6 px-4 bg-teal-600 border-2 border-teal-700 rounded-2xl shadow-sm">
      {/* Section Title */}
      <h2 className="text-lg sm:text-xl font-black text-white uppercase tracking-tight border-b border-teal-400/60 pb-3 mb-6">
        QUY ĐỊNH CỤ THỂ TỪNG NHÓM ĐỐI TƯỢNG
      </h2>

      {/* Grid of 6 Group Rules - Clean Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {filteredGroups.map((group, idx) => (
          <div
            key={group.id}
            className="bg-white border border-teal-200 rounded-xl p-5 shadow-2xs flex flex-col justify-between print-card transition-all duration-300 transform hover:-translate-y-3 hover:scale-[1.20] hover:z-30 hover:shadow-2xl hover:border-teal-400 cursor-pointer"
          >
            <div>
              {/* Header Title with Number Badge */}
              <div className="flex items-center gap-3 mb-3">
                <span className="w-8 h-8 rounded-full bg-teal-600 text-white font-black text-xs flex items-center justify-center shrink-0 shadow-2xs">
                  {idx + 1}
                </span>
                <div>
                  <span className="text-[10px] font-bold text-teal-700 uppercase tracking-wider block">
                    {group.article}
                  </span>
                  <h3 className="font-extrabold text-slate-900 text-base sm:text-lg leading-snug">
                    {group.groupName}
                  </h3>
                </div>
              </div>

              {/* Content Statement */}
              <p className="text-slate-800 text-xs sm:text-sm leading-relaxed font-medium mt-2 whitespace-pre-line">
                {group.shortDesc}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
