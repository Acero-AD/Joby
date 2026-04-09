import React, { useEffect } from 'react'
import { useTranslation } from 'react-i18next'
import { router } from '@inertiajs/react'
import NavItem from './NavItem'
import LanguageSwitcher from './LanguageSwitcher'
import type { User } from '../types'

interface SidebarProps {
  user: User | null
  activePage?: string
  open?: boolean
  onClose?: () => void
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
  open = false,
  onClose,
}: SidebarProps) {
  const { t } = useTranslation()
  const initial = user?.name?.charAt(0) || 'U'

  // Close drawer on Inertia navigation
  useEffect(() => {
    const removeListener = router.on('navigate', () => {
      onClose?.()
    })
    return removeListener
  }, [onClose])

  const sidebarContent = (
    <div className="h-full bg-surface-light border-r border-border-light flex flex-col gap-7 shrink-0 w-[260px] p-7 px-5">
      {/* Logo */}
      <div className="flex items-center justify-center lg:justify-start lg:gap-3">
        <div className="w-10 h-10 rounded-[20px] bg-gradient-to-br from-primary-purple to-primary-pink flex items-center justify-center shrink-0">
          <span className="text-white text-xl font-bold">J</span>
        </div>
        <span className="hidden lg:inline text-text-primary text-[22px] font-extrabold">
          Joby
        </span>
      </div>

      {/* Navigation */}
      <div className="flex flex-col gap-1 w-full">
        <span className="hidden lg:block text-[#A78BFA] text-[10px] font-semibold tracking-[2px] mb-1">
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
      <div className="w-full">
        <LanguageSwitcher />
      </div>

      {/* User Profile */}
      <div className="flex items-center gap-3 bg-[#F3F0FF] rounded-[14px] border border-border-purple p-3.5 px-4 w-full">
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

  return (
    <>
      {/* Mobile drawer */}
      {open && (
        <div className="fixed inset-0 z-50 lg:hidden">
          {/* Backdrop */}
          <div
            className="absolute inset-0 bg-black/40"
            onClick={onClose}
          />
          {/* Drawer panel */}
          <div className="absolute inset-y-0 left-0">
            {sidebarContent}
          </div>
        </div>
      )}

      {/* Tablet: icon-only inline sidebar */}
      <div className="hidden sm:flex lg:hidden shrink-0 border-r border-border-light bg-surface-light flex-col items-center gap-7 py-7 px-2 w-16 sm:self-stretch">
        <div className="w-10 h-10 rounded-[20px] bg-gradient-to-br from-primary-purple to-primary-pink flex items-center justify-center shrink-0">
          <span className="text-white text-xl font-bold">J</span>
        </div>
        <div className="flex flex-col gap-1 w-full">
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
      </div>

      {/* Desktop: full sidebar */}
      <div className="hidden lg:flex h-full bg-surface-light border-r border-border-light flex-col gap-7 shrink-0 w-[260px] p-7 px-5 rounded-l-[20px]">
        {/* Logo */}
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-[20px] bg-gradient-to-br from-primary-purple to-primary-pink flex items-center justify-center shrink-0">
            <span className="text-white text-xl font-bold">J</span>
          </div>
          <span className="text-text-primary text-[22px] font-extrabold">Joby</span>
        </div>

        {/* Navigation */}
        <div className="flex flex-col gap-1 w-full">
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

        <LanguageSwitcher />

        <div className="flex items-center gap-3 bg-[#F3F0FF] rounded-[14px] border border-border-purple p-3.5 px-4 w-full">
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
    </>
  )
}
