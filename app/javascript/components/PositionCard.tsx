import React from 'react'
import { useTranslation } from 'react-i18next'
import StatusBadge from './StatusBadge'
import Icon from './Icon'
import type { Position } from '../types'

interface PositionCardProps {
  position: Position
  onEdit: () => void
  onDelete: () => void
  onClick: () => void
}

export default function PositionCard({
  position,
  onEdit,
  onDelete,
  onClick,
}: PositionCardProps) {
  const { t } = useTranslation()

  return (
    <div
      onClick={onClick}
      className="bg-white rounded-[14px] shadow-[0_2px_8px_#A855F710] p-4 flex flex-col gap-3 cursor-pointer active:bg-gray-50"
    >
      <div className="flex items-start justify-between gap-2">
        <div className="flex flex-col gap-0.5 flex-1 min-w-0">
          <span className="text-text-primary text-sm font-semibold truncate">
            {position.title || t('table.untitled')}
          </span>
          <span className="text-text-muted text-xs">
            {position.company || '—'}
          </span>
        </div>
        <StatusBadge status={position.status} />
      </div>

      <div className="flex items-center justify-between">
        <span className="text-text-light text-xs">
          {t('table.appliedDate', { date: position.createdAt })}
        </span>

        <div className="flex items-center gap-3">
          <button
            onClick={(e) => { e.stopPropagation(); onEdit() }}
            className="min-w-[44px] min-h-[44px] flex items-center justify-center cursor-pointer hover:opacity-70"
          >
            <Icon name="edit" size={18} stroke="#A78BFA" />
          </button>
          <button
            onClick={(e) => { e.stopPropagation(); onDelete() }}
            className="min-w-[44px] min-h-[44px] flex items-center justify-center cursor-pointer hover:opacity-70"
          >
            <Icon name="trash" size={18} stroke="#D4D4D8" />
          </button>
        </div>
      </div>
    </div>
  )
}
