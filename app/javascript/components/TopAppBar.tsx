import React from 'react'
import Icon from './Icon'

interface TopAppBarProps {
  onMenuClick: () => void
}

export default function TopAppBar({ onMenuClick }: TopAppBarProps) {
  return (
    <div className="flex items-center justify-between px-4 py-3 bg-surface-light border-b border-border-light lg:hidden">
      <div className="flex items-center gap-2.5">
        <div className="w-8 h-8 rounded-[12px] bg-gradient-to-br from-primary-purple to-primary-pink flex items-center justify-center">
          <span className="text-white text-sm font-bold">J</span>
        </div>
        <span className="text-text-primary text-lg font-extrabold">Joby</span>
      </div>

      <button
        onClick={onMenuClick}
        className="w-10 h-10 flex items-center justify-center rounded-[10px] hover:bg-gray-100 cursor-pointer"
      >
        <Icon name="menu" size={22} stroke="#6B7280" />
      </button>
    </div>
  )
}
