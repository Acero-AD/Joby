import React from 'react'
import { useTranslation } from 'react-i18next'
import { statuses } from '../config/statusConfig'

interface StatusBadgeProps {
  status: string
}

export default function StatusBadge({ status }: StatusBadgeProps) {
  const { t } = useTranslation()
  const style = statuses[status]?.badge || statuses.bookmarked.badge

  return (
    <span
      className="inline-block rounded-full py-1 px-3 text-xs font-medium"
      style={{ backgroundColor: style.bg, color: style.text }}
    >
      {t(`status.${status}`, status)}
    </span>
  )
}
