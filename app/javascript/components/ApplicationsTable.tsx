import React, { useState } from 'react'
import { useTranslation } from 'react-i18next'
import StatusBadge from './StatusBadge'
import Pagination from './Pagination'
import DeleteConfirmationModal from './DeleteConfirmationModal'
import { deletePosition, handleRowClick } from '../actions/positionActions'
import type { Position, Pagination as PaginationType } from '../types'

interface ApplicationsTableProps {
  positions: Position[]
  pagination: PaginationType
}

export default function ApplicationsTable({ positions, pagination }: ApplicationsTableProps) {
  const { t } = useTranslation()
  const [deletingPosition, setDeletingPosition] = useState<Position | null>(null)

  return (
    <div className="flex-1 bg-white rounded-[14px] shadow-[0_2px_12px_#A855F712] flex flex-col overflow-hidden">
      {/* Table Header */}
      <div className="flex items-center justify-between border-b border-border-light py-4 px-6">
        <span className="text-text-primary text-[17px] font-semibold">{t('table.title')}</span>
        <button className="flex items-center gap-1.5 rounded-lg border border-border-medium py-[7px] px-3 cursor-pointer hover:bg-gray-50">
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="#6B7280" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
            <line x1="21" x2="14" y1="4" y2="4" /><line x1="10" x2="3" y1="4" y2="4" /><line x1="21" x2="12" y1="12" y2="12" /><line x1="8" x2="3" y1="12" y2="12" /><line x1="21" x2="16" y1="20" y2="20" /><line x1="12" x2="3" y1="20" y2="20" /><line x1="14" x2="14" y1="2" y2="6" /><line x1="8" x2="8" y1="10" y2="14" /><line x1="16" x2="16" y1="18" y2="22" />
          </svg>
          <span className="text-text-secondary text-[13px] font-medium">{t('table.filter')}</span>
        </button>
      </div>

      {/* Column Headers */}
      <div className="flex items-center bg-surface-light border-b border-border-light py-2.5 px-6">
        <div className="w-[240px]"><span className="text-text-muted text-xs font-semibold">{t('table.headers.jobTitle')}</span></div>
        <div className="flex-1"><span className="text-text-muted text-xs font-semibold">{t('table.headers.companyLink')}</span></div>
        <div className="w-[160px]"><span className="text-text-muted text-xs font-semibold">{t('table.headers.cvUsed')}</span></div>
        <div className="w-[120px]"><span className="text-text-muted text-xs font-semibold">{t('table.headers.status')}</span></div>
        <div className="w-[80px]"><span className="text-text-muted text-xs font-semibold">{t('table.headers.actions')}</span></div>
      </div>

      {/* Data Rows */}
      <div className="flex-1 flex flex-col">
        {positions.length === 0 ? (
          <div className="flex-1 flex items-center justify-center text-text-muted text-sm py-12">
            {t('table.emptyState')}
          </div>
        ) : (
          positions.map((pos, i) => (
            <div
              key={pos.id}
              className={`flex items-center py-4 px-6 cursor-pointer hover:bg-gray-50 ${i < positions.length - 1 ? 'border-b border-border-light' : ''}`}
              onClick={(e) => handleRowClick(e, pos.id)}
            >
              {/* Job Title */}
              <div className="w-[240px] flex flex-col gap-0.5">
                <span className="text-text-primary text-sm font-medium">{pos.title || t('table.untitled')}</span>
                <span className="text-text-light text-xs">{t('table.appliedDate', { date: pos.createdAt })}</span>
              </div>

              {/* Company / Link */}
              <div className="flex-1 flex items-center gap-2">
                <span className="text-text-secondary text-sm">{pos.company || '—'}</span>
                <a
                  href={pos.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1 bg-[#F3F0FF] rounded-md py-1 px-2"
                >
                  <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="#A855F7" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
                    <path d="M15 3h6v6" /><path d="M10 14 21 3" /><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                  </svg>
                  <span className="text-[#7C3AED] text-[11px] font-medium">{t('table.viewLink')}</span>
                </a>
              </div>

              {/* CV Used */}
              <div className="w-[160px] flex items-center gap-1.5">
                {pos.cvFilename ? (
                  <>
                    <svg className="w-3.5 h-3.5 shrink-0" fill="none" viewBox="0 0 24 24" stroke="#A855F7" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
                      <path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z" /><path d="M14 2v4a2 2 0 0 0 2 2h4" /><path d="M10 9H8" /><path d="M16 13H8" /><path d="M16 17H8" />
                    </svg>
                    <span className="text-text-secondary text-xs truncate">{pos.cvFilename}</span>
                  </>
                ) : (
                  <span className="text-text-light text-xs">{t('table.noCv')}</span>
                )}
              </div>

              {/* Status */}
              <div className="w-[120px]">
                <StatusBadge status={pos.status} />
              </div>

              {/* Actions */}
              <div className="w-[80px] flex items-center gap-2">
                <button className="cursor-pointer hover:opacity-70">
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="#A78BFA" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
                    <path d="M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z" />
                  </svg>
                </button>
                <button onClick={() => setDeletingPosition(pos)} className="cursor-pointer hover:opacity-70">
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="#D4D4D8" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
                    <path d="M3 6h18" /><path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6" /><path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2" />
                  </svg>
                </button>
              </div>
            </div>
          ))
        )}
      </div>

      {/* Pagination */}
      {pagination.total > 0 && <Pagination pagination={pagination} />}

      {deletingPosition && (
        <DeleteConfirmationModal
          position={deletingPosition}
          onConfirm={() => deletePosition(deletingPosition.id, { onSuccess: () => setDeletingPosition(null) })}
          onClose={() => setDeletingPosition(null)}
        />
      )}
    </div>
  )
}
