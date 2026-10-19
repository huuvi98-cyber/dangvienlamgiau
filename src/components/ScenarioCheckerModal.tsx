import React, { useState } from 'react';
import { PRACTICAL_SCENARIOS, ScenarioQuestion } from '../data/guidelinesData';
import { HelpCircle, X, Search, CheckCircle2, AlertTriangle, XCircle, ArrowRight, BookOpen } from 'lucide-react';

interface ScenarioCheckerModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ScenarioCheckerModal: React.FC<ScenarioCheckerModalProps> = ({ isOpen, onClose }) => {
  const [filterRole, setFilterRole] = useState<string>('ALL');
  const [activeScenario, setActiveScenario] = useState<ScenarioQuestion | null>(PRACTICAL_SCENARIOS[0]);

  if (!isOpen) return null;

  const roles = Array.from(new Set(PRACTICAL_SCENARIOS.map((s) => s.userRole)));

  const filteredScenarios = PRACTICAL_SCENARIOS.filter((s) => {
    if (filterRole === 'ALL') return true;
    return s.userRole === filterRole;
  });

  return (
    <div className="fixed inset-0 bg-slate-900/60 backdrop-blur-xs z-50 flex items-center justify-center p-4 overflow-y-auto no-print">
      <div className="bg-white rounded-2xl shadow-2xl border border-slate-200 max-w-4xl w-full overflow-hidden flex flex-col max-h-[90vh]">
        {/* Modal Header */}
        <div className="bg-gradient-to-r from-red-700 to-red-800 text-white p-5 flex items-center justify-between shrink-0">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-yellow-400 text-red-900 rounded-lg">
              <HelpCircle className="w-5 h-5" />
            </div>
            <div>
              <span className="text-[10px] font-extrabold uppercase bg-red-900/80 px-2 py-0.5 rounded tracking-wider text-yellow-300">
                Giải đáp thắc mắc
              </span>
              <h3 className="text-lg font-black text-white">HỎI - ĐÁP TÌNH HUỐNG THỰC TẾ</h3>
            </div>
          </div>
          <button
            onClick={onClose}
            className="w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-5 overflow-y-auto flex-1 space-y-5 bg-slate-50">
          {/* Role Filter Tabs */}
          <div className="flex items-center gap-1.5 overflow-x-auto pb-1">
            <button
              onClick={() => setFilterRole('ALL')}
              className={`px-3 py-1.5 rounded-lg text-xs font-bold transition whitespace-nowrap ${
                filterRole === 'ALL'
                  ? 'bg-red-600 text-white'
                  : 'bg-white text-slate-700 border border-slate-200 hover:bg-slate-100'
              }`}
            >
              Tất cả tình huống ({PRACTICAL_SCENARIOS.length})
            </button>
            {roles.map((r) => (
              <button
                key={r}
                onClick={() => setFilterRole(r)}
                className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition whitespace-nowrap ${
                  filterRole === r
                    ? 'bg-red-600 text-white'
                    : 'bg-white text-slate-700 border border-slate-200 hover:bg-slate-100'
                }`}
              >
                {r}
              </button>
            ))}
          </div>

          {/* Master Detail Grid */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-5">
            {/* Scenarios List */}
            <div className="md:col-span-5 space-y-2.5 max-h-[400px] overflow-y-auto pr-1">
              {filteredScenarios.map((sc) => {
                const isSelected = activeScenario?.id === sc.id;
                return (
                  <div
                    key={sc.id}
                    onClick={() => setActiveScenario(sc)}
                    className={`p-3.5 rounded-xl border text-xs cursor-pointer transition ${
                      isSelected
                        ? 'bg-red-50 border-red-400 shadow-xs'
                        : 'bg-white border-slate-200 hover:border-slate-300'
                    }`}
                  >
                    <div className="flex items-center justify-between text-[10px] font-bold text-slate-500 mb-1">
                      <span className="bg-slate-100 px-2 py-0.5 rounded text-slate-700">{sc.userRole}</span>
                      <span className="text-red-700 font-bold">{sc.articleRef}</span>
                    </div>
                    <div className="font-bold text-slate-900 leading-snug line-clamp-2">
                      {sc.question}
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Selected Scenario Answer Box */}
            <div className="md:col-span-7 bg-white p-5 rounded-xl border border-slate-200 shadow-sm flex flex-col justify-between">
              {activeScenario ? (
                <div>
                  <div className="flex items-center justify-between gap-2 border-b border-slate-200 pb-3 mb-3">
                    <span className="text-xs font-bold text-slate-500">Tình huống #{activeScenario.id}</span>
                    <span className="bg-red-100 text-red-800 font-extrabold text-xs px-2.5 py-0.5 rounded border border-red-300">
                      Căn cứ: {activeScenario.articleRef}
                    </span>
                  </div>

                  <h4 className="font-bold text-slate-900 text-sm mb-4 leading-relaxed bg-slate-50 p-3 rounded-lg border border-slate-200">
                    ❓ "{activeScenario.question}"
                  </h4>

                  {/* Decision Tag */}
                  <div className="mb-4">
                    <div className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-1">Kết luận quy định:</div>
                    <div
                      className={`p-3 rounded-lg font-black text-sm flex items-center gap-2 border ${
                        activeScenario.allowed === 'ALLOWED_NO_APPROVAL'
                          ? 'bg-emerald-50 text-emerald-900 border-emerald-300'
                          : activeScenario.allowed === 'ALLOWED_WITH_APPROVAL'
                          ? 'bg-amber-50 text-amber-900 border-amber-300'
                          : activeScenario.allowed === 'CONDITIONAL'
                          ? 'bg-blue-50 text-blue-900 border-blue-300'
                          : 'bg-rose-50 text-rose-900 border-rose-300'
                      }`}
                    >
                      {activeScenario.allowed === 'ALLOWED_NO_APPROVAL' && <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0" />}
                      {activeScenario.allowed === 'ALLOWED_WITH_APPROVAL' && <AlertTriangle className="w-5 h-5 text-amber-600 shrink-0" />}
                      {activeScenario.allowed === 'CONDITIONAL' && <CheckCircle2 className="w-5 h-5 text-blue-600 shrink-0" />}
                      {activeScenario.allowed === 'PROHIBITED' && <XCircle className="w-5 h-5 text-rose-600 shrink-0" />}
                      <span>{activeScenario.answer}</span>
                    </div>
                  </div>

                  {/* Explanation */}
                  <div className="space-y-2 text-xs text-slate-700 leading-relaxed">
                    <div className="font-bold text-slate-900">Giải thích chi tiết:</div>
                    <p className="bg-red-50/50 p-3 rounded-lg border border-red-100 text-slate-800">
                      {activeScenario.explanation}
                    </p>
                  </div>
                </div>
              ) : (
                <div className="text-center py-12 text-slate-400 text-xs">
                  Chọn một tình huống bên trái để xem giải đáp quy định.
                </div>
              )}

              <div className="mt-4 pt-3 border-t border-slate-100 text-[11px] text-slate-500 text-right">
                Được đối chiếu chuẩn xác theo các Điều 5, 6, 7, 8, 9, 10, 11
              </div>
            </div>
          </div>
        </div>

        {/* Modal Footer */}
        <div className="bg-slate-100 p-4 border-t border-slate-200 flex justify-end shrink-0">
          <button
            onClick={onClose}
            className="bg-slate-800 hover:bg-slate-900 text-white font-bold text-xs px-5 py-2 rounded-lg transition"
          >
            Đóng cửa sổ
          </button>
        </div>
      </div>
    </div>
  );
};
