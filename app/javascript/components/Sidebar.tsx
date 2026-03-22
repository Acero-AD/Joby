import React from 'react'
import { useTranslation } from 'react-i18next'
import NavItem from './NavItem'
import LanguageSwitcher from './LanguageSwitcher'
import type { User } from '../types'

interface SidebarProps {
  user: User | null
  activePage?: string
}

const navKeys = [
  { icon: 'layout-dashboard', key: 'sidebar.nav.dashboard' },
  { icon: 'briefcase', key: 'sidebar.nav.applications' },
  { icon: 'file-text', key: 'sidebar.nav.documents' },
  { icon: 'calendar', key: 'sidebar.nav.calendar' },
  { icon: 'settings', key: 'sidebar.nav.settings' },
]

export default function Sidebar({
  user,
  activePage = 'Dashboard',
}: SidebarProps) {
  const { t } = useTranslation()
  const initial = user?.name?.charAt(0) || 'U'

  return (
    <div className="w-[260px] h-full bg-surface-light rounded-l-[20px] border-r border-border-light flex flex-col gap-7 p-7 px-5">
      {/* Logo */}
      <div className="flex items-center gap-3">
        <div className="w-10 h-10 rounded-[20px] bg-gradient-to-br from-primary-purple to-primary-pink flex items-center justify-center">
          <span className="text-white text-xl font-bold">J</span>
        </div>
        <span className="text-text-primary text-[22px] font-extrabold">
          Joby
        </span>
      </div>

      {/* Navigation */}
      <div className="flex flex-col gap-1">
        <span className="text-[#A78BFA] text-[10px] font-semibold tracking-[2px] mb-1">
          {t('sidebar.menu')}
        </span>
        {navKeys.map((item) => {
          const label = t(item.key)
          return (
            <NavItem
              key={item.key}
              icon={item.icon}
              label={label}
              active={label === t(`sidebar.nav.${activePage.toLowerCase()}`)}
            />
          )
        })}
      </div>

      <div className="flex-1" />

      {/* Language Switcher */}
      <LanguageSwitcher />

      {/* User Profile */}
      <div className="flex items-center gap-3 bg-[#F3F0FF] rounded-[14px] border border-border-purple p-3.5 px-4">
        <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary-purple to-primary-pink flex items-center justify-center">
          <span className="text-white text-base font-semibold">{initial}</span>
        </div>
        <div className="flex flex-col gap-0.5">
          <span className="text-text-primary text-sm font-semibold">
            {user?.name || 'User'}
          </span>
          <span className="text-text-muted text-xs">{t('sidebar.role')}</span>
        </div>
      </div>
    </div>
  )
}
