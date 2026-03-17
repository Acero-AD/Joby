import React from 'react'

interface StatusBadgeProps {
  status: string
}

const statusStyles: Record<string, { bg: string; text: string; label: string }> = {
  bookmarked: { bg: '#F3F0FF', text: '#7C3AED', label: 'Bookmarked' },
  applied: { bg: '#E0E7FF', text: '#4F46E5', label: 'Applied' },
  interviewing: { bg: '#FEF3C7', text: '#D97706', label: 'Interview' },
  offered: { bg: '#D1FAE5', text: '#059669', label: 'Offer' },
  rejected: { bg: '#FEE2E2', text: '#DC2626', label: 'Rejected' },
  withdrawn: { bg: '#F3F4F6', text: '#6B7280', label: 'Withdrawn' },
  accepted: { bg: '#D1FAE5', text: '#059669', label: 'Accepted' },
}

export default function StatusBadge({ status }: StatusBadgeProps) {
  const style = statusStyles[status] || statusStyles.bookmarked

  return (
    <span
      className="inline-block rounded-full py-1 px-3 text-xs font-medium"
      style={{ backgroundColor: style.bg, color: style.text }}
    >
      {style.label}
    </span>
  )
}
