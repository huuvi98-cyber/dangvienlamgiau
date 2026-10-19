import React from 'react';
import { 
  Sparkles, 
  Printer, 
  Search, 
  ShieldCheck, 
  TrendingUp, 
  BookOpen, 
  Users, 
  FileText,
  HelpCircle
} from 'lucide-react';

interface HeaderBannerProps {
  searchQuery: string;
  setSearchQuery: (q: string) => void;
  onOpenScenarios: () => void;
  onPrint: () => void;
  activeSection: string;
  setActiveSection: (sec: string) => void;
}

export const HeaderBanner: React.FC<HeaderBannerProps> = ({
  searchQuery,
  setSearchQuery,
  onOpenScenarios,
  onPrint,
  activeSection,
  setActiveSection,
}) => {
  return (
    <header className="bg-white border-b border-slate-200 shadow-sm relative z-10">
      {/* Main Header Container */}
      <div className="max-w-7xl mx-auto px-4 py-5">
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6">
          {/* Emblem & Title */}
          <div className="flex items-start gap-4">
            <div className="w-14 h-14 rounded-full bg-red-600 text-yellow-300 flex items-center justify-center shrink-0 shadow-md border-2 border-yellow-400/80">
              <span className="text-2xl font-black tracking-tighter">★</span>
            </div>
            <div>
              <div className="flex items-center gap-2 flex-wrap mb-1">
                <span className="text-xs font-bold uppercase tracking-wider text-red-700 bg-red-50 border border-red-200 px-2.5 py-0.5 rounded-full">
                  Infographic Tra Cứu Toàn Diện
                </span>
                <span className="text-xs text-slate-500 font-medium">Cập nhật đầy đủ & Chuẩn xác</span>
              </div>
              <h1 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight leading-tight">
                QUY ĐỊNH VỀ ĐẢNG VIÊN THAM GIA <span className="text-red-600 underline decoration-red-300 decoration-wavy">ĐẦU TƯ, KINH DOANH</span>
              </h1>
              <p className="text-slate-600 text-sm mt-1 max-w-2xl">
                Nâng cao năng lực lãnh đạo, phát huy vai trò đảng viên trong phát triển kinh tế, khuyến khích làm giàu hợp pháp, chính đáng gắn với kiểm soát xung đột lợi ích.
              </p>
            </div>
          </div>

          {/* Action Quick Stats & Scenario Button */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 no-print">
            {/* Search Box */}
            <div className="relative min-w-[220px]">
              <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                placeholder="Tìm từ khóa, nội dung..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-9 pr-3 py-2 bg-slate-50 border border-slate-300 rounded-lg text-sm text-slate-800 focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-red-500 transition"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="absolute right-2.5 top-1/2 -translate-y-1/2 text-xs text-slate-400 hover:text-slate-600 bg-slate-200 hover:bg-slate-300 w-4 h-4 rounded-full flex items-center justify-center"
                >
                  ✕
                </button>
              )}
            </div>

            {/* Practical Scenario Button */}
            <button
              onClick={onOpenScenarios}
              className="bg-red-600 hover:bg-red-700 text-white font-bold px-4 py-2 rounded-lg text-sm flex items-center justify-center gap-2 shadow-sm transition transform active:scale-95"
            >
              <HelpCircle className="w-4 h-4 text-yellow-300" />
              <span>Hỏi - Đáp Tình Huống</span>
            </button>
          </div>
        </div>

        {/* Quick Navigation Pills */}
        <div className="flex items-center gap-2 mt-6 overflow-x-auto pb-1 no-print border-t border-slate-100 pt-3">
          {[
            { id: 'quan-diem', label: '5 Quan điểm đột phá', icon: TrendingUp },
            { id: 'nguyen-tac', label: '5 Nguyên tắc cốt lõi (Điều 3)', icon: ShieldCheck },
            { id: 'loai-hinh', label: '4 Loại đầu tư kinh doanh', icon: FileText },
            { id: 'nhom-doi-tuong', label: 'Quy định 6 nhóm đối tượng', icon: Users },
            { id: 'so-sanh', label: 'Bảng so sánh tổng hợp', icon: BookOpen },
          ].map((item) => {
            const Icon = item.icon;
            const isActive = activeSection === item.id;
            return (
              <button
                key={item.id}
                onClick={() => {
                  setActiveSection(item.id);
                  const el = document.getElementById(item.id);
                  if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
                }}
                className={`whitespace-nowrap flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-semibold transition ${
                  isActive
                    ? 'bg-red-600 text-white shadow-sm'
                    : 'bg-slate-100 text-slate-700 hover:bg-slate-200 border border-slate-200'
                }`}
              >
                <Icon className={`w-3.5 h-3.5 ${isActive ? 'text-white' : 'text-red-600'}`} />
                <span>{item.label}</span>
              </button>
            );
          })}
        </div>
      </div>
    </header>
  );
};
