import React from 'react';
import { INVESTMENT_TYPES } from '../data/guidelinesData';

export const InvestmentTypesMatrix: React.FC = () => {
  return (
    <section id="loai-hinh" className="scroll-mt-28 py-6 px-4 bg-purple-600 border-2 border-purple-700 rounded-2xl shadow-sm">
      {/* Section Title */}
      <h2 className="text-lg sm:text-xl font-black text-white uppercase tracking-tight border-b border-purple-400/60 pb-3 mb-6">
        4 LOẠI HÌNH ĐẦU TƯ KINH DOANH
      </h2>

      {/* Grid of 4 Investment Types - Clean Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
        {INVESTMENT_TYPES.map((type) => (
          <div
            key={type.typeNumber}
            className="bg-white border border-purple-200 rounded-xl p-5 shadow-2xs flex flex-col justify-between print-card transition-all duration-300 transform hover:-translate-y-1 hover:scale-[1.03] hover:shadow-md cursor-pointer"
          >
            <div>
              <div className="flex items-center gap-3">
                <span className="w-8 h-8 rounded-full bg-purple-600 text-white font-black text-xs flex items-center justify-center shrink-0 shadow-2xs">
                  {type.typeNumber}
                </span>
                <h3 className="font-extrabold text-slate-900 text-base sm:text-lg leading-snug">
                  {type.title}
                </h3>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
