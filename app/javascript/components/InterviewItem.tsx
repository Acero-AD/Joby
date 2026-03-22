import React from 'react'

interface InterviewItemProps {
  company: string
  time: string
  type?: 'video' | 'phone' | 'users'
  statusColor?: string
}

const typeIcons: Record<string, React.ReactNode> = {
  video: (
    <>
      <path d="m16 13 5.223 3.482a.5.5 0 0 0 .777-.416V7.934a.5.5 0 0 0-.777-.416L16 11" />
      <rect width="14" height="12" x="2" y="6" rx="2" />
    </>
  ),
  phone: (
    <>
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
    </>
  ),
  users: (
    <>
      <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
      <circle cx="9" cy="7" r="4" />
      <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
      <path d="M16 3.13a4 4 0 0 1 0 7.75" />
    </>
  ),
}

const typeStyles = {
  video: { bg: '#FEF3C7', color: '#D97706' },
  phone: { bg: '#DBEAFE', color: '#2563EB' },
  users: { bg: '#FDF2F8', color: '#DB2777' },
}

export default function InterviewItem({
  company,
  time,
  type = 'video',
  statusColor = '#10B981',
}: InterviewItemProps) {
  const style = typeStyles[type] || typeStyles.video

  return (
    <div className="flex items-center gap-3 bg-surface-dark rounded-xl p-3">
      <div
        className="w-10 h-10 rounded-[10px] flex items-center justify-center shrink-0"
        style={{ backgroundColor: style.bg }}
      >
        <svg
          className="w-[18px] h-[18px]"
          fill="none"
          viewBox="0 0 24 24"
          stroke={style.color}
          strokeWidth={2}
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          {typeIcons[type] || typeIcons.video}
        </svg>
      </div>
      <div className="flex flex-col gap-0.5 flex-1 min-w-0">
        <span className="text-white text-sm font-medium truncate">
          {company}
        </span>
        <span className="text-text-light text-xs">{time}</span>
      </div>
      <div
        className="w-2 h-2 rounded-full shrink-0"
        style={{ backgroundColor: statusColor }}
      />
    </div>
  )
}
