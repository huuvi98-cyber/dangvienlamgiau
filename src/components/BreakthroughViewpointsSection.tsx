import React, { useState } from 'react';
import { BREAKTHROUGH_VIEWPOINTS, BreakthroughViewpoint } from '../data/guidelinesData';
import { RefreshCw } from 'lucide-react';

export const BreakthroughViewpointsSection: React.FC = () => {
  return (
    <section id="quan-diem" className="scroll-mt-28 py-8 px-4 bg-slate-100 border-2 border-red-600 rounded-2xl shadow-sm">
      <div className="mb-6 border-b border-red-200 pb-3">
        <h2 className="text-lg sm:text-xl font-black text-red-700 uppercase tracking-tight flex items-center gap-2">
          <span>5 QUAN ĐIỂM CHỈ ĐẠO ĐỘT PHÁ</span>
        </h2>
      </div>

      {/* Grid of 5 Red/Gold 3D Flip Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {BREAKTHROUGH_VIEWPOINTS.map((vp) => (
          <FlipCard key={vp.id} viewpoint={vp} />
        ))}
      </div>
    </section>
  );
};

const FlipCard: React.FC<{ viewpoint: BreakthroughViewpoint }> = ({ viewpoint }) => {
  const [isFlipped, setIsFlipped] = useState<boolean>(false);

  return (
    <div
      onClick={() => setIsFlipped(!isFlipped)}
      className="group relative h-[260px] w-full [perspective:1000px] cursor-pointer no-select"
    >
      {/* 3D Inner Wrapper */}
      <div
        className={`relative h-full w-full rounded-2xl shadow-lg transition-transform duration-700 [transform-style:preserve-3d] ${
          isFlipped ? '[transform:rotateY(180deg)]' : 'group-hover:[transform:rotateY(180deg)]'
        }`}
      >
        {/* MẶT 1 (FRONT SIDE): Nền đỏ, chữ vàng nhạt gần trắng, Tít lớn */}
        <div className="absolute inset-0 h-full w-full rounded-2xl bg-gradient-to-br from-red-700 via-red-800 to-red-900 border border-red-500/40 p-6 flex flex-col items-center justify-center text-center shadow-md [backface-visibility:hidden]">
          {/* Top Badge Number */}
          <div className="w-10 h-10 rounded-full bg-yellow-200 text-red-950 font-black text-lg flex items-center justify-center shadow-sm mb-4">
            {viewpoint.id}
          </div>

          {/* Front Title (Tít) - Chữ vàng nhạt gần trắng */}
          <div className="px-2">
            <h3 className="font-black text-amber-50 text-xl sm:text-2xl uppercase leading-snug tracking-tight drop-shadow-xs">
              {viewpoint.title}
            </h3>
          </div>
        </div>

        {/* MẶT 2 (BACK SIDE): Nền đỏ, 1 kiểu chữ vàng nhạt, không bold, không nền, chỉ hiện nội dung */}
        <div className="absolute inset-0 h-full w-full rounded-2xl bg-gradient-to-br from-red-800 via-red-900 to-red-950 border border-red-500/40 p-6 flex items-center justify-center text-center text-amber-50 shadow-xl [backface-visibility:hidden] [transform:rotateY(180deg)]">
          <div className="text-sm sm:text-base leading-relaxed text-amber-50 font-normal px-1">
            {viewpoint.id === 1 && (
              <span>
                Chuyển từ “cho phép” sang “khuyến khích, tạo điều kiện” để đảng viên làm giàu hợp pháp, chính đáng.
              </span>
            )}
            {viewpoint.id === 2 && (
              <span>
                Chuyển từ tư duy chủ yếu “được làm/không được làm” sang “được làm - được làm có điều kiện, có kiểm soát - không được làm”, gắn với kiểm soát xung đột lợi ích.
              </span>
            )}
            {viewpoint.id === 3 && (
              <span>
                Phù hợp với địa vị pháp lý, chức trách, mức độ rủi ro xung đột lợi ích.
              </span>
            )}
            {viewpoint.id === 4 && (
              <span>
                Gắn phát huy vai trò đảng viên trong phát triển kinh tế với giữ vững bản chất của Đảng.
              </span>
            )}
            {viewpoint.id === 5 && (
              <span>
                Đảm bảo đồng bộ giữa quy định của Đảng và pháp luật của Nhà nước, có các quy định về chuyển tiếp phù hợp.
              </span>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
