import React from 'react';
import { 
  TrendingUp, 
  Users, 
  Settings2, 
  MessageSquare
} from 'lucide-react';

interface FourMainPillarsProps {
  onSelectSection: (sectionId: string) => void;
}

export const HexagonGraphicSection: React.FC<FourMainPillarsProps> = ({ onSelectSection }) => {
  // 4 TRỤ CỘT CHÍNH CỦA QUY ĐỊNH - Colors aligned 100% with content sections below
  const mainPillars = [
    {
      id: 'quan-diem',
      title: '5 Quan Điểm Chỉ Đạo Đột Phá',
      bgColor: 'bg-red-600', // Matches Section 1 Red theme
      icon: TrendingUp
    },
    {
      id: 'nguyen-tac',
      title: '5 Nguyên Tắc Cốt Lõi',
      bgColor: 'bg-amber-500', // Matches Section 2 Amber theme
      icon: Users
    },
    {
      id: 'loai-hinh',
      title: '4 Loại Hình Đầu Tư Kinh Doanh',
      bgColor: 'bg-purple-600', // Matches Section 3 Purple theme
      icon: Settings2
    },
    {
      id: 'nhom-doi-tuong',
      title: 'Quy Định 6 Nhóm Đối Tượng',
      bgColor: 'bg-teal-600', // Matches Section 4 Teal theme
      icon: MessageSquare
    }
  ];

  return (
    <section className="py-2 my-4">
      {/* 4 Graphic Banner Cards Container */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-6 relative px-1 py-2">
        {mainPillars.map((pillar) => {
          const IconComp = pillar.icon;

          return (
            <div
              key={pillar.id}
              onClick={() => onSelectSection(pillar.id)}
              className="group cursor-pointer flex flex-col items-center transition-all duration-300 transform hover:-translate-y-1.5 hover:scale-[1.03] active:scale-95"
            >
              {/* Solid Color Box Container with Rounded Top Corners Only (no bottom rounding) */}
              <div
                className={`w-full h-40 sm:h-52 rounded-t-2xl sm:rounded-t-3xl rounded-b-none ${pillar.bgColor} shadow-md p-3 sm:p-6 flex flex-col items-center justify-center text-center transition-all duration-300 group-hover:shadow-xl group-hover:brightness-105`}
              >
                {/* Smaller White Icon */}
                <IconComp className="w-6 h-6 sm:w-8 sm:h-8 text-white stroke-[2.2] drop-shadow-xs transition-transform duration-300 group-hover:scale-110 shrink-0" />

                {/* White Large Title Inside Box */}
                <h3 className="text-white font-black uppercase text-xs sm:text-base lg:text-xl leading-snug sm:leading-tight tracking-tight mt-2 sm:mt-3 px-1 sm:px-2">
                  {pillar.title}
                </h3>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};
