import React from 'react'
import { useTranslation } from 'react-i18next'
import type { User } from '../types'

interface HeaderProps {
  user: User | null
  onAddClick: () => void
}

export default function Header({ user, onAddClick }: HeaderProps) {
  const { t } = useTranslation()
  const firstName = user?.name?.split(' ')[0] || 'there'

  return (
    <div className="flex items-center justify-between">
      <div className="flex flex-col gap-1">
        <h1 className="text-text-primary text-[26px] font-bold">
          {t('header.welcome', { name: firstName })}
        </h1>
        <p className="text-text-light text-sm">{t('header.subtitle')}</p>
      </div>

      <div className="flex items-center gap-3">
        <div className="flex items-center gap-2 bg-white rounded-[10px] border border-[#E9D5FF44] py-2.5 px-3.5">
          <svg
            className="w-[18px] h-[18px] text-[#A78BFA]"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <circle cx="11" cy="11" r="8" />
            <path d="m21 21-4.35-4.35" />
          </svg>
          <span className="text-text-light text-sm">{t('header.search')}</span>
        </div>

        <button
          onClick={onAddClick}
          className="flex items-center gap-2 bg-gradient-to-b from-primary-purple to-primary-pink rounded-[10px] py-2.5 px-[18px] cursor-pointer"
        >
          <svg
            className="w-[18px] h-[18px] text-white"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path d="M12 5v14M5 12h14" />
          </svg>
          <span className="text-white text-sm font-medium">
            {t('header.addApplication')}
          </span>
        </button>
      </div>
    </div>
  )
}
