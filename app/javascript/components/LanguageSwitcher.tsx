import React from 'react'
import { useTranslation } from 'react-i18next'

const languages = [
  { code: 'en', label: 'EN' },
  { code: 'es', label: 'ES' },
]

export default function LanguageSwitcher() {
  const { i18n } = useTranslation()

  return (
    <div className="flex justify-center bg-[#F3F0FF] rounded-xl py-1.5 px-2.5 border border-[#E9D5FF]">
      <div className="flex items-center gap-1 bg-[#EDE9FE] rounded-[10px] p-1">
        {languages.map((lang) => (
          <button
            key={lang.code}
            onClick={() => i18n.changeLanguage(lang.code)}
            className={`rounded-[8px] py-1.5 px-4 text-sm cursor-pointer transition-colors ${
              i18n.language === lang.code
                ? 'bg-gradient-to-r from-primary-purple to-primary-pink text-white font-bold'
                : 'text-[#7C3AED] font-semibold hover:bg-[#E9D5FF]'
            }`}
          >
            {lang.label}
          </button>
        ))}
      </div>
    </div>
  )
}
