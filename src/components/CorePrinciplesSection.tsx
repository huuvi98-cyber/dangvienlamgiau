import React from 'react';
import { CORE_PRINCIPLES } from '../data/guidelinesData';

export const CorePrinciplesSection: React.FC = () => {
  return (
    <section id="nguyen-tac" className="scroll-mt-28 py-6 px-4 bg-amber-500 rounded-2xl shadow-sm">
      {/* Section Title */}
      <h2 className="text-lg sm:text-xl font-black text-white uppercase tracking-tight border-b border-amber-400/60 pb-3 mb-6">
        5 NGUYÊN TẮC CỐT LÕI
      </h2>

      {/* Grid of 5 Core Principles - Clean Content Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {CORE_PRINCIPLES.map((principle) => (
          <div
            key={principle.id}
            className="bg-white border border-amber-200 rounded-xl p-5 shadow-2xs flex flex-col justify-between print-card transition-all duration-300 transform hover:-translate-y-3 hover:scale-[1.20] hover:z-30 hover:shadow-2xl hover:border-amber-400 cursor-pointer"
          >
            <div className="flex items-start gap-3">
              <span className="w-7 h-7 rounded-full bg-amber-500 text-white font-black text-xs flex items-center justify-center shrink-0 mt-0.5 shadow-2xs">
                {principle.id}
              </span>
              <div className="text-slate-900 text-sm leading-relaxed font-medium">
                {principle.id === 1 && (
                  <span>
                    Tuân thủ những điều đảng viên không được làm, thực hành kinh doanh có trách nhiệm.
                  </span>
                )}
                {principle.id === 2 && (
                  <span>
                    Cấp ủy, tổ chức đảng không đặt thêm điều kiện, thủ tục hạn chế quyền đầu tư kinh doanh hợp pháp của đảng viên.
                  </span>
                )}
                {principle.id === 3 && (
                  <span>
                    Áp dụng giới hạn theo chức danh, nhiệm vụ và nhóm đối tượng, bảo đảm yêu cầu kiểm soát xung đột lợi ích, bảo vệ bí mật nhà nước, bí mật công tác.
                  </span>
                )}
                {principle.id === 4 && (
                  <span>
                    Không sử dụng trái phép nguồn lực công, không đầu tư lĩnh vực trực tiếp quyết định, quản lý.
                  </span>
                )}
                {principle.id === 5 && (
                  <span>
                    Việc chấp thuận đảng viên tham gia đầu tư kinh doanh do cấp có thẩm quyền quyết định.
                  </span>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
