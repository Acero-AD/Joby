import React from 'react'
import Icon from './Icon'

interface InterviewItemProps {
  company: string
  time: string
  type?: 'video' | 'phone' | 'users'
  statusColor?: string
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
        <Icon name={type} size={18} stroke={style.color} />
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
