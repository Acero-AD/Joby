import React from 'react'
import Icon from './Icon'

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
          <Icon name={iconName} size={18} stroke={iconColor || '#A855F7'} />
        </div>
      </div>
      <span className="text-text-primary text-4xl font-bold">{value}</span>
      {changeText && (
        <div className="flex items-center gap-1">
          <Icon
            name={trendIcon || 'trending-up'}
            size={14}
            stroke={trendColor || '#10B981'}
          />
          <span className="text-xs" style={{ color: trendColor || '#10B981' }}>
            {changeText}
          </span>
        </div>
      )}
    </div>
  )
}
