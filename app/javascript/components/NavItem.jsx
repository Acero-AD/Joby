import React from 'react'

export default function NavItem({ icon, label, active }) {
  return (
    <div className={`flex items-center gap-3 rounded-[10px] py-2.5 px-3.5 cursor-pointer ${
      active
        ? 'bg-gradient-to-r from-primary-purple to-primary-pink'
        : 'hover:bg-gray-100'
    }`}>
      <span className={`text-sm font-medium ${active ? 'text-white' : 'text-text-secondary'}`}>
        {label}
      </span>
    </div>
  )
}
