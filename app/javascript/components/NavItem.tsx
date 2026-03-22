import React from 'react'
import Icon from './Icon'

interface NavItemProps {
  icon: string
  label: string
  active?: boolean
}

export default function NavItem({ icon, label, active }: NavItemProps) {
  return (
    <div
      className={`flex items-center gap-3 rounded-[10px] py-2.5 px-3.5 cursor-pointer ${
        active
          ? 'bg-gradient-to-r from-primary-purple to-primary-pink'
          : 'hover:bg-gray-100'
      }`}
    >
      <Icon
        name={icon}
        size={20}
        className="shrink-0"
        stroke={active ? '#FFFFFF' : '#6B7280'}
      />
      <span
        className={`text-sm font-medium ${active ? 'text-white' : 'text-text-secondary'}`}
      >
        {label}
      </span>
    </div>
  )
}
