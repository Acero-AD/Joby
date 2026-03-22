import React from 'react'
import { useTranslation } from 'react-i18next'
import type { Position } from '../types'

interface DeleteConfirmationModalProps {
  position: Position
  onConfirm: () => void
  onClose: () => void
}

export default function DeleteConfirmationModal({
  position,
  onConfirm,
  onClose,
}: DeleteConfirmationModalProps) {
  const { t } = useTranslation()

  return (
    <div
      className="fixed inset-0 bg-black/30 flex items-center justify-center z-50"
      onClick={onClose}
    >
      <div
        className="bg-white rounded-[20px] w-[440px] shadow-[0_8px_32px_#18181B22,0_2px_8px_#EF444414] flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between py-6 px-7 pb-5">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-[#FEE2E2] flex items-center justify-center">
              <svg
                className="w-5 h-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="#EF4444"
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3" />
                <path d="M12 9v4" />
                <path d="M12 17h.01" />
              </svg>
            </div>
            <span className="text-text-primary text-lg font-semibold">
              {t('deleteModal.title')}
            </span>
          </div>
          <button
            onClick={onClose}
            className="w-9 h-9 rounded-[10px] bg-[#F9FAFB] border border-[#F3F4F6] flex items-center justify-center cursor-pointer hover:bg-gray-100"
          >
            <svg
              className="w-[18px] h-[18px]"
              fill="none"
              viewBox="0 0 24 24"
              stroke="#9CA3AF"
              strokeWidth={2}
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M18 6 6 18" />
              <path d="m6 6 12 12" />
            </svg>
          </button>
        </div>

        <div className="h-px bg-[#F3F4F6]" />

        {/* Body */}
        <div className="flex flex-col gap-4 py-5 px-7">
          <p className="text-[#374151] text-sm">{t('deleteModal.body')}</p>

          {/* Position summary card */}
          <div className="flex items-center gap-3 bg-[#FEF2F2] border border-[#FECACA] rounded-[10px] py-3 px-3.5">
            <svg
              className="w-[18px] h-[18px] shrink-0"
              fill="none"
              viewBox="0 0 24 24"
              stroke="#EF4444"
              strokeWidth={2}
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M20 7H4a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2Z" />
              <path d="M16 7V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v3" />
            </svg>
            <div className="flex flex-col gap-0.5">
              <span className="text-text-primary text-sm font-medium">
                {position.title || t('table.untitled')}
              </span>
              <span className="text-[#6B7280] text-xs">
                {t('deleteModal.positionContext', {
                  company: position.company || '—',
                  date: position.createdAt,
                })}
              </span>
            </div>
          </div>

          <p className="text-[#9CA3AF] text-xs">{t('deleteModal.warning')}</p>
        </div>

        <div className="h-px bg-[#F3F4F6]" />

        {/* Footer */}
        <div className="flex items-center justify-end gap-3 py-5 px-7">
          <button
            onClick={onClose}
            className="rounded-[10px] bg-white border border-[#E5E7EB] py-2.5 px-5 text-sm font-medium text-[#374151] cursor-pointer hover:bg-gray-50"
          >
            {t('deleteModal.cancel')}
          </button>
          <button
            onClick={onConfirm}
            className="flex items-center gap-2 rounded-[10px] bg-[#EF4444] shadow-[0_2px_8px_#EF444433] py-2.5 px-6 text-sm font-medium text-white cursor-pointer hover:bg-[#DC2626]"
          >
            <svg
              className="w-4 h-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M3 6h18" />
              <path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6" />
              <path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2" />
            </svg>
            {t('deleteModal.confirm')}
          </button>
        </div>
      </div>
    </div>
  )
}
