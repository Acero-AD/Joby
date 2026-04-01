import React, { useState } from 'react'
import { useTranslation } from 'react-i18next'
import StatusBadge from './StatusBadge'
import Pagination from './Pagination'
import DeleteConfirmationModal from './DeleteConfirmationModal'
import EditApplicationModal from './EditApplicationModal'
import Icon from './Icon'
import { deletePosition, handleRowClick } from '../actions/positionActions'
import type { Position, Pagination as PaginationType } from '../types'

interface ApplicationsTableProps {
  positions: Position[]
  pagination: PaginationType
}

export default function ApplicationsTable({
  positions,
  pagination,
}: ApplicationsTableProps) {
  const { t } = useTranslation()
  const [deletingPosition, setDeletingPosition] = useState<Position | null>(
    null,
  )
  const [editingPosition, setEditingPosition] = useState<Position | null>(null)

  return (
    <div className="flex-1 bg-white rounded-[14px] shadow-[0_2px_12px_#A855F712] flex flex-col overflow-hidden">
      {/* Table Header */}
      <div className="flex items-center justify-between border-b border-border-light py-4 px-6">
        <span className="text-text-primary text-[17px] font-semibold">
          {t('table.title')}
        </span>
        <button className="flex items-center gap-1.5 rounded-lg border border-border-medium py-[7px] px-3 cursor-pointer hover:bg-gray-50">
          <Icon name="filter" size={16} stroke="#6B7280" />
          <span className="text-text-secondary text-[13px] font-medium">
            {t('table.filter')}
          </span>
        </button>
      </div>

      {/* Column Headers */}
      <div className="flex items-center bg-surface-light border-b border-border-light py-2.5 px-6">
        <div className="w-[240px]">
          <span className="text-text-muted text-xs font-semibold">
            {t('table.headers.jobTitle')}
          </span>
        </div>
        <div className="flex-1">
          <span className="text-text-muted text-xs font-semibold">
            {t('table.headers.companyLink')}
          </span>
        </div>
        <div className="w-[160px]">
          <span className="text-text-muted text-xs font-semibold">
            {t('table.headers.cvUsed')}
          </span>
        </div>
        <div className="w-[120px]">
          <span className="text-text-muted text-xs font-semibold">
            {t('table.headers.status')}
          </span>
        </div>
        <div className="w-[80px]">
          <span className="text-text-muted text-xs font-semibold">
            {t('table.headers.actions')}
          </span>
        </div>
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
                <span className="text-text-primary text-sm font-medium">
                  {pos.title || t('table.untitled')}
                </span>
                <span className="text-text-light text-xs">
                  {t('table.appliedDate', { date: pos.createdAt })}
                </span>
              </div>

              {/* Company / Link */}
              <div className="flex-1 flex items-center gap-2">
                <span className="text-text-secondary text-sm">
                  {pos.company || '—'}
                </span>
                <a
                  href={pos.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1 bg-[#F3F0FF] rounded-md py-1 px-2"
                >
                  <Icon name="external-link" size={12} stroke="#A855F7" />
                  <span className="text-[#7C3AED] text-[11px] font-medium">
                    {t('table.viewLink')}
                  </span>
                </a>
              </div>

              {/* CV Used */}
              <div className="w-[160px] flex items-center gap-1.5">
                {pos.cvFilename ? (
                  <>
                    <Icon
                      name="file-text"
                      size={14}
                      className="shrink-0"
                      stroke="#A855F7"
                    />
                    <span className="text-text-secondary text-xs truncate">
                      {pos.cvFilename}
                    </span>
                  </>
                ) : (
                  <span className="text-text-light text-xs">
                    {t('table.noCv')}
                  </span>
                )}
              </div>

              {/* Status */}
              <div className="w-[120px]">
                <StatusBadge status={pos.status} />
              </div>

              {/* Actions */}
              <div className="w-[80px] flex items-center gap-2">
                <button
                  onClick={() => setEditingPosition(pos)}
                  className="cursor-pointer hover:opacity-70"
                >
                  <Icon name="edit" size={16} stroke="#A78BFA" />
                </button>
                <button
                  onClick={() => setDeletingPosition(pos)}
                  className="cursor-pointer hover:opacity-70"
                >
                  <Icon name="trash" size={16} stroke="#D4D4D8" />
                </button>
              </div>
            </div>
          ))
        )}
      </div>

      {/* Pagination */}
      {pagination.total > 0 && <Pagination pagination={pagination} />}

      {editingPosition && (
        <EditApplicationModal
          position={editingPosition}
          onClose={() => setEditingPosition(null)}
        />
      )}

      {deletingPosition && (
        <DeleteConfirmationModal
          position={deletingPosition}
          onConfirm={() =>
            deletePosition(deletingPosition.id, {
              onSuccess: () => setDeletingPosition(null),
            })
          }
          onClose={() => setDeletingPosition(null)}
        />
      )}
    </div>
  )
}
