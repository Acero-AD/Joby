import React from 'react'
import { useTranslation } from 'react-i18next'

interface StatusBadgeProps {
  status: string
}

const statusStyles: Record<string, { bg: string; text: string }> = {
  bookmarked: { bg: '#F3F0FF', text: '#7C3AED' },
  applied: { bg: '#E0E7FF', text: '#4F46E5' },
  interviewing: { bg: '#FEF3C7', text: '#D97706' },
  offered: { bg: '#D1FAE5', text: '#059669' },
  rejected: { bg: '#FEE2E2', text: '#DC2626' },
  withdrawn: { bg: '#F3F4F6', text: '#6B7280' },
  accepted: { bg: '#D1FAE5', text: '#059669' },
}

export default function StatusBadge({ status }: StatusBadgeProps) {
  const { t } = useTranslation()
  const style = statusStyles[status] || statusStyles.bookmarked

  return (
    <span
      className="inline-block rounded-full py-1 px-3 text-xs font-medium"
      style={{ backgroundColor: style.bg, color: style.text }}
    >
      {t(`status.${status}`, status)}
    </span>
  )
}
