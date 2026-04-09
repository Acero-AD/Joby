import React from 'react'
import Icon from './Icon'

interface NavItemProps {
  icon: string
  label: string
  active?: boolean
  /** Drawer / wide sidebar: always show label and left-aligned row. */
  showLabels?: boolean
}

export default function NavItem({
  icon,
  label,
  active,
  showLabels = false,
}: NavItemProps) {
  const activeCls = active
    ? 'bg-gradient-to-r from-primary-purple to-primary-pink'
    : 'hover:bg-gray-100'

  const layoutCls = showLabels
    ? 'justify-start gap-3 px-3.5'
    : 'justify-center px-2 lg:justify-start lg:gap-3 lg:px-3.5'

  const labelCls = showLabels
    ? `inline text-sm font-medium ${active ? 'text-white' : 'text-text-secondary'}`
    : `hidden lg:inline text-sm font-medium ${active ? 'text-white' : 'text-text-secondary'}`

  return (
    <div
      className={`flex items-center rounded-[10px] py-2.5 cursor-pointer ${layoutCls} ${activeCls}`}
    >
      <Icon
        name={icon}
        size={20}
        className="shrink-0"
        stroke={active ? '#FFFFFF' : '#6B7280'}
      />
      <span className={labelCls}>{label}</span>
    </div>
  )
}
