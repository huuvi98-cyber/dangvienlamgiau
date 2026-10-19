import React, { useState } from 'react';
import { GROUP_RULES, GroupRule } from '../data/guidelinesData';
import { UserCheck, Sparkles, CheckCircle2, AlertTriangle, XCircle, ArrowRight } from 'lucide-react';

export const QuickRoleLookup: React.FC = () => {
  const [selectedRole, setSelectedRole] = useState<string>('can-bo-cong-chuc');

  const currentGroup = GROUP_RULES.find((g) => g.id === selectedRole) || GROUP_RULES[1];

  return (
    <section className="py-6 px-4 bg-gradient-to-r from-red-800 via-red-700 to-red-900 rounded-2xl text-white shadow-md my-8 no-print">
      <div className="max-w-5xl mx-auto">
        <div className="flex items-center gap-2 mb-2">
          <span className="bg-yellow-400 text-red-950 text-[10px] font-black uppercase px-2 py-0.5 rounded tracking-wider">
            CÔNG CỤ TRA CỨU NHANH
          </span>
          <span className="text-red-200 text-xs font-medium">Dành cho đảng viên</span>
        </div>

        <h2 className="text-xl sm:text-2xl font-black text-white tracking-tight mb-2">
          BẤM CHỌN VAI TRÒ CỦA BẠN ĐỂ XEM QUY ĐỊNH DÀNH RIÊNG
        </h2>

        <p className="text-red-100 text-xs sm:text-sm mb-5">
          Chọn đúng nhóm chức danh của bạn để xem ngay điều kiện đầu tư, kinh doanh được phép & nghĩa vụ pháp lý.
        </p>

        {/* Role Selector Buttons */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2 mb-6">
          {GROUP_RULES.map((g) => {
            const isSelected = selectedRole === g.id;
            return (
              <button
                key={g.id}
                onClick={() => setSelectedRole(g.id)}
                className={`p-3 rounded-xl text-left border transition text-xs flex flex-col justify-between ${
                  isSelected
                    ? 'bg-white text-red-900 border-yellow-400 font-bold shadow-md transform scale-[1.02]'
                    : 'bg-white/10 hover:bg-white/20 text-white border-white/20 font-medium'
                }`}
              >
                <span className="text-[10px] opacity-80 uppercase tracking-wider font-extrabold">
                  {g.article}
                </span>
                <span className="mt-1 line-clamp-2 leading-snug">{g.groupName}</span>
              </button>
            );
          })}
        </div>

        {/* Dynamic Role Guidance Box */}
        <div className="bg-white text-slate-800 rounded-xl p-5 shadow-lg border border-red-200">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-slate-200 pb-3 mb-4">
            <div>
              <span className="bg-red-100 text-red-800 font-bold text-xs px-2.5 py-0.5 rounded border border-red-200 uppercase">
                {currentGroup.article}
              </span>
              <h3 className="text-lg font-bold text-slate-900 mt-1">
                Hướng dẫn riêng cho: <span className="text-red-700 underline">{currentGroup.groupName}</span>
              </h3>
            </div>
            <span className="text-xs text-slate-500 italic bg-slate-100 px-2.5 py-1 rounded">
              {currentGroup.shortDesc}
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs">
            {/* Box 1: Perfectly Allowed */}
            <div className="bg-emerald-50 border border-emerald-200 rounded-lg p-3.5">
              <div className="font-bold text-emerald-800 flex items-center gap-1.5 mb-2 text-xs uppercase">
                <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                <span>Được tự do làm (Không cần xin phép)</span>
              </div>
              <ul className="space-y-1.5 text-slate-700">
                {currentGroup.noApprovalNeeded.map((item, i) => (
                  <li key={i} className="flex items-start gap-1.5">
                    <span className="text-emerald-600 font-bold">✓</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Box 2: Conditional / Requires Approval */}
            <div className="bg-amber-50 border border-amber-300 rounded-lg p-3.5">
              <div className="font-bold text-amber-900 flex items-center gap-1.5 mb-2 text-xs uppercase">
                <AlertTriangle className="w-4 h-4 text-amber-600" />
                <span>Cần xin chấp thuận / Có điều kiện</span>
              </div>
              {currentGroup.approvalNeeded.length > 0 ? (
                <ul className="space-y-1.5 text-slate-700">
                  {currentGroup.approvalNeeded.map((item, i) => (
                    <li key={i} className="flex items-start gap-1.5">
                      <span className="text-amber-600 font-bold">⚠️</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              ) : (
                <p className="text-slate-500 italic">Không áp dụng quy trình thủ tục xin chấp thuận đối với nhóm này.</p>
              )}
            </div>

            {/* Box 3: Prohibited / Restricted */}
            <div className="bg-rose-50 border border-rose-300 rounded-lg p-3.5">
              <div className="font-bold text-rose-900 flex items-center gap-1.5 mb-2 text-xs uppercase">
                <XCircle className="w-4 h-4 text-rose-600" />
                <span>Hạn chế / Không được làm</span>
              </div>
              <ul className="space-y-1.5 text-slate-700">
                {currentGroup.prohibitedOrRestricted.map((item, i) => (
                  <li key={i} className="flex items-start gap-1.5">
                    <span className="text-rose-600 font-bold">✕</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Breakthrough Rights banner */}
          {currentGroup.specialRights.length > 0 && (
            <div className="mt-4 p-3 bg-red-50 border border-red-200 rounded-lg text-xs text-red-900 flex items-start gap-2">
              <Sparkles className="w-4 h-4 text-red-600 shrink-0 mt-0.5" />
              <div>
                <strong className="font-bold text-red-700">Quyền lợi mở rộng nổi bật: </strong>
                <span>{currentGroup.specialRights.join(' ')}</span>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};
