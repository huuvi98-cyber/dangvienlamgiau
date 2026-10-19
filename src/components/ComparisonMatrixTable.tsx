import React from 'react';
import { GROUP_RULES, INVESTMENT_TYPES } from '../data/guidelinesData';
import { Check, AlertTriangle, X, Sparkles, BookOpen } from 'lucide-react';

export const ComparisonMatrixTable: React.FC = () => {
  // Matrix data lookup mapping
  const getPermissionStatus = (groupId: string, typeNum: number) => {
    switch (groupId) {
      case 'ngoai-khu-vuc-cong':
        return {
          status: 'ALLOWED',
          text: 'Được phép',
          subtext: 'Không phải xin chấp thuận',
          color: 'bg-emerald-100 text-emerald-800 border-emerald-300',
          icon: Check
        };

      case 'can-bo-cong-chuc':
        if (typeNum === 1 || typeNum === 2) {
          return {
            status: 'ALLOWED',
            text: 'Được phép',
            subtext: 'Không phải xin chấp thuận (Mở rộng góp vốn, cổ phần)',
            color: 'bg-emerald-100 text-emerald-800 border-emerald-300',
            icon: Check
          };
        }
        if (typeNum === 3) {
          return {
            status: 'APPROVAL_REQUIRED',
            text: 'Cần xin chấp thuận',
            subtext: 'Áp dụng cho người không thuộc diện BCT/BBT quản lý',
            color: 'bg-amber-100 text-amber-800 border-amber-300',
            icon: AlertTriangle
          };
        }
        return {
          status: 'PROHIBITED',
          text: 'Không được làm',
          subtext: 'Không tham gia quản lý, điều hành',
          color: 'bg-rose-100 text-rose-800 border-rose-300',
          icon: X
        };

      case 'vien-chuc':
        if (typeNum === 1 || typeNum === 2) {
          return {
            status: 'ALLOWED',
            text: 'Được phép',
            subtext: 'Không phải xin chấp thuận',
            color: 'bg-emerald-100 text-emerald-800 border-emerald-300',
            icon: Check
          };
        }
        if (typeNum === 3) {
          return {
            status: 'ALLOWED_EXPANDED',
            text: 'Được phép mở rộng',
            subtext: 'Thành lập tổ chức kinh tế (nếu không ở vị trí rủi ro cao)',
            color: 'bg-blue-100 text-blue-800 border-blue-300',
            icon: Sparkles
          };
        }
        return {
          status: 'SPECIAL_EXPANDED',
          text: 'Quyền mở rộng rất lớn',
          subtext: 'Một số vị trí được quản lý điều hành, tạm rời vị trí công tác',
          color: 'bg-purple-100 text-purple-800 border-purple-300',
          icon: Sparkles
        };

      case 'quan-doi-cong-an':
        if (typeNum === 1 || typeNum === 2) {
          return {
            status: 'ALLOWED',
            text: 'Được phép',
            subtext: 'Mở quyền như cán bộ, công chức (không xin phép)',
            color: 'bg-emerald-100 text-emerald-800 border-emerald-300',
            icon: Check
          };
        }
        return {
          status: 'PROHIBITED',
          text: 'Hạn chế / Theo quy định',
          subtext: 'Trừ các doanh nghiệp thuộc lực lượng vũ trang',
          color: 'bg-rose-100 text-rose-800 border-rose-300',
          icon: X
        };

      case 'quan-ly-dnnn':
        if (typeNum === 1 || typeNum === 2) {
          return {
            status: 'ALLOWED',
            text: 'Được phép',
            subtext: 'Bao gồm mua cổ phần tại chính DNNN đang quản lý (tách bạch chức trách)',
            color: 'bg-emerald-100 text-emerald-800 border-emerald-300',
            icon: Check
          };
        }
        if (typeNum === 3) {
          return {
            status: 'APPROVAL_REQUIRED',
            text: 'Cần xin chấp thuận',
            subtext: 'Được thực hiện Loại 3 sau khi được chấp thuận',
            color: 'bg-amber-100 text-amber-800 border-amber-300',
            icon: AlertTriangle
          };
        }
        return {
          status: 'RESTRICTED',
          text: 'Cấm đầu tư liên quan',
          subtext: 'Không đầu tư ngành có lợi ích liên quan trực tiếp DNNN',
          color: 'bg-rose-100 text-rose-800 border-rose-300',
          icon: X
        };

      case 'nghi-huu-thoi-cong-tac':
        if (typeNum === 1 || typeNum === 2 || typeNum === 3 || typeNum === 4) {
          return {
            status: 'ALLOWED_FULL',
            text: 'Như ngoài khu vực công',
            subtext: 'Khuyến khích khởi nghiệp, đổi mới sáng tạo (Giới hạn công việc cũ)',
            color: 'bg-emerald-100 text-emerald-800 border-emerald-300',
            icon: Check
          };
        }
        return {
          status: 'ALLOWED',
          text: 'Tự do đầu tư',
          subtext: 'Tuân thủ giới hạn thời hạn công việc cũ',
          color: 'bg-emerald-100 text-emerald-800 border-emerald-300',
          icon: Check
        };

      default:
        return {
          status: 'UNKNOWN',
          text: 'Xem chi tiết',
          subtext: '',
          color: 'bg-slate-100 text-slate-800 border-slate-300',
          icon: BookOpen
        };
    }
  };

  return (
    <section id="so-sanh" className="scroll-mt-28 py-8 px-4 bg-white border border-slate-200 rounded-2xl shadow-sm">
      {/* Section Header */}
      <div className="flex items-center gap-3 mb-6 border-b border-slate-200 pb-4">
        <div className="w-10 h-10 rounded-xl bg-red-600 text-white flex items-center justify-center font-bold text-lg shadow-sm shrink-0">
          <BookOpen className="w-5 h-5" />
        </div>
        <div>
          <span className="text-xs font-bold uppercase tracking-wider text-red-600">Đối chiếu trực quan</span>
          <h2 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">
            BẢNG SO SÁNH QUYỀN HẠN TỔNG HỢP (MA TRẬN DẪN CHIẾU)
          </h2>
        </div>
      </div>

      <p className="text-slate-600 text-sm mb-6 leading-relaxed">
        So sánh quyền hạn tham gia 4 loại hình đầu tư kinh doanh giữa 6 nhóm đối tượng đảng viên theo các điều khoản quy định.
      </p>

      {/* Comparison Table */}
      <div className="overflow-x-auto rounded-xl border border-slate-200 shadow-2xs">
        <table className="w-full text-left text-xs border-collapse min-w-[800px]">
          <thead>
            <tr className="bg-slate-100 text-slate-900 border-b border-slate-300">
              <th className="p-3.5 font-bold border-r border-slate-200 min-w-[180px]">
                Nhóm đối tượng / Loại hình
              </th>
              {INVESTMENT_TYPES.map((t) => (
                <th key={t.typeNumber} className="p-3.5 font-bold border-r border-slate-200 min-w-[160px] text-center">
                  <div className="text-red-700 font-extrabold uppercase">{t.code}</div>
                  <div className="font-semibold text-[11px] text-slate-600 line-clamp-2 mt-0.5">{t.title}</div>
                </th>
              ))}
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-200 text-slate-800 bg-white">
            {GROUP_RULES.map((group) => (
              <tr key={group.id} className="hover:bg-slate-50 transition">
                <td className="p-3.5 font-bold border-r border-slate-200 bg-slate-50/50">
                  <div className="text-red-700 font-extrabold text-[11px]">{group.article}</div>
                  <div className="text-slate-900 font-bold text-xs">{group.groupName}</div>
                </td>
                {INVESTMENT_TYPES.map((t) => {
                  const perm = getPermissionStatus(group.id, t.typeNumber);
                  const Icon = perm.icon;
                  return (
                    <td key={t.typeNumber} className="p-3 border-r border-slate-200 text-center align-top">
                      <div className={`inline-flex flex-col items-center justify-center p-2 rounded-lg border w-full h-full min-h-[64px] ${perm.color}`}>
                        <div className="flex items-center gap-1 font-bold text-xs">
                          <Icon className="w-3.5 h-3.5 shrink-0" />
                          <span>{perm.text}</span>
                        </div>
                        {perm.subtext && (
                          <div className="text-[10px] mt-1 leading-tight opacity-90 font-medium">
                            {perm.subtext}
                          </div>
                        )}
                      </div>
                    </td>
                  );
                })}
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Legend Footer */}
      <div className="mt-4 pt-3 flex flex-wrap items-center justify-between gap-3 text-xs text-slate-600">
        <div className="flex items-center gap-4 flex-wrap">
          <span className="flex items-center gap-1">
            <span className="w-3 h-3 rounded bg-emerald-200 border border-emerald-400"></span> Được phép (Không cần xin chấp thuận)
          </span>
          <span className="flex items-center gap-1">
            <span className="w-3 h-3 rounded bg-amber-200 border border-amber-400"></span> Cần xin chấp thuận cấp thẩm quyền
          </span>
          <span className="flex items-center gap-1">
            <span className="w-3 h-3 rounded bg-blue-200 border border-blue-400"></span> Mở rộng quyền đặc thù
          </span>
          <span className="flex items-center gap-1">
            <span className="w-3 h-3 rounded bg-rose-200 border border-rose-400"></span> Giới hạn / Cấm
          </span>
        </div>
        <span className="font-semibold text-slate-500">Trích xuất dữ liệu chính xác theo Quy định</span>
      </div>
    </section>
  );
};
