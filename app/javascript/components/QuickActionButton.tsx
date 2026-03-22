import React from 'react'
import Icon from './Icon'

interface QuickActionButtonProps {
  icon: string
  label: string
}

export default function QuickActionButton({
  icon,
  label,
}: QuickActionButtonProps) {
  return (
    <div className="flex items-center gap-2.5 rounded-[10px] bg-[#FAF5FF] border border-border-purple py-2.5 px-3.5 cursor-pointer hover:bg-[#F3F0FF] transition-colors">
      <Icon name={icon} size={18} className="shrink-0" stroke="#A855F7" />
      <span className="text-text-secondary text-sm font-medium">{label}</span>
    </div>
  )
}
