import React from 'react'

const actionIcons = {
  upload: <><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" /><polyline points="17 8 12 3 7 8" /><line x1="12" x2="12" y1="3" y2="15" /></>,
  bookmark: <path d="m19 21-7-4-7 4V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v16z" />,
  'chart-bar': <><line x1="12" x2="12" y1="20" y2="10" /><line x1="18" x2="18" y1="20" y2="4" /><line x1="6" x2="6" y1="20" y2="16" /></>,
}

export default function QuickActionButton({ icon, label }) {
  return (
    <div className="flex items-center gap-2.5 rounded-[10px] bg-[#FAF5FF] border border-border-purple py-2.5 px-3.5 cursor-pointer hover:bg-[#F3F0FF] transition-colors">
      <svg className="w-[18px] h-[18px] shrink-0" fill="none" viewBox="0 0 24 24" stroke="#A855F7" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
        {actionIcons[icon]}
      </svg>
      <span className="text-text-secondary text-sm font-medium">{label}</span>
    </div>
  )
}
