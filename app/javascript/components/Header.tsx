import React from 'react'
import { useTranslation } from 'react-i18next'
import Icon from './Icon'
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
          <Icon name="search" size={18} className="text-[#A78BFA]" />
          <span className="text-text-light text-sm">{t('header.search')}</span>
        </div>

        <button
          onClick={onAddClick}
          className="flex items-center gap-2 bg-gradient-to-b from-primary-purple to-primary-pink rounded-[10px] py-2.5 px-[18px] cursor-pointer"
        >
          <Icon name="plus" size={18} className="text-white" />
          <span className="text-white text-sm font-medium">
            {t('header.addApplication')}
          </span>
        </button>
      </div>
    </div>
  )
}
