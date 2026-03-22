import React from 'react'

interface StatCardProps {
  label: string
  value: number
  iconName: string
  iconColor?: string
  iconBg?: string
  trendIcon?: string
  trendColor?: string
  changeText?: string
}

const iconMap: Record<string, React.ReactNode> = {
  briefcase: (
    <path d="M20 7H4a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2Z" />
  ),
  calendar: (
    <>
      <rect width="18" x="3" y="4" height="18" rx="2" ry="2" />
      <line x1="16" x2="16" y1="2" y2="6" />
      <line x1="8" x2="8" y1="2" y2="6" />
      <line x1="3" x2="21" y1="10" y2="10" />
    </>
  ),
  'circle-check': (
    <>
      <circle cx="12" cy="12" r="10" />
      <path d="m9 12 2 2 4-4" />
    </>
  ),
  'circle-x': (
    <>
      <circle cx="12" cy="12" r="10" />
      <path d="m15 9-6 6" />
      <path d="m9 9 6 6" />
    </>
  ),
  'trending-up': (
    <>
      <polyline points="22 7 13.5 15.5 8.5 10.5 2 17" />
      <polyline points="16 7 22 7 22 13" />
    </>
  ),
  'trending-down': (
    <>
      <polyline points="22 17 13.5 8.5 8.5 13.5 2 7" />
      <polyline points="16 17 22 17 22 11" />
    </>
  ),
  'clock-4': (
    <>
      <circle cx="12" cy="12" r="10" />
      <polyline points="12 6 12 12 16 14" />
    </>
  ),
  star: (
    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
  ),
}

export default function StatCard({
  label,
  value,
  iconName,
  iconColor,
  iconBg,
  trendIcon,
  trendColor,
  changeText,
}: StatCardProps) {
  return (
    <div className="flex-1 bg-white rounded-[14px] shadow-[0_2px_12px_#A855F712] p-5 flex flex-col gap-3">
      <div className="flex items-center justify-between">
        <span className="text-text-muted text-[13px] font-medium">{label}</span>
        <div
          className={`w-9 h-9 rounded-[10px] flex items-center justify-center`}
          style={{ backgroundColor: iconBg || '#F3F0FF' }}
        >
          <svg
            className="w-[18px] h-[18px]"
            fill="none"
            viewBox="0 0 24 24"
            stroke={iconColor || '#A855F7'}
            strokeWidth={2}
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            {iconMap[iconName] || iconMap.briefcase}
          </svg>
        </div>
      </div>
      <span className="text-text-primary text-4xl font-bold">{value}</span>
      {changeText && (
        <div className="flex items-center gap-1">
          <svg
            className="w-3.5 h-3.5"
            fill="none"
            viewBox="0 0 24 24"
            stroke={trendColor || '#10B981'}
            strokeWidth={2}
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            {iconMap[trendIcon] || iconMap['trending-up']}
          </svg>
          <span className="text-xs" style={{ color: trendColor || '#10B981' }}>
            {changeText}
          </span>
        </div>
      )}
    </div>
  )
}
