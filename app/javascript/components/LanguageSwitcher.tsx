import React from 'react'
import { useTranslation } from 'react-i18next'

const languages = [
  { code: 'en', label: 'EN' },
  { code: 'es', label: 'ES' },
]

export default function LanguageSwitcher() {
  const { i18n } = useTranslation()

  return (
    <div className="flex items-center gap-1 bg-[#F3F0FF] rounded-[10px] p-1">
      {languages.map(lang => (
        <button
          key={lang.code}
          onClick={() => i18n.changeLanguage(lang.code)}
          className={`rounded-[8px] py-1 px-3 text-xs font-semibold cursor-pointer transition-colors ${
            i18n.language === lang.code
              ? 'bg-gradient-to-b from-primary-purple to-primary-pink text-white'
              : 'text-[#7C3AED] hover:bg-[#E9D5FF]'
          }`}
        >
          {lang.label}
        </button>
      ))}
    </div>
  )
}
