import React from 'react'
import { useTranslation } from 'react-i18next'
import InterviewItem from './InterviewItem'
import QuickActionButton from './QuickActionButton'

export default function RightSidebar() {
  const { t } = useTranslation()

  const interviews = [
    { company: 'Google', time: 'Mar 10, 10:00 AM', type: 'video' as const, statusColor: '#10B981' },
    { company: 'Microsoft', time: 'Mar 12, 2:00 PM', type: 'phone' as const, statusColor: '#10B981' },
    { company: 'Spotify', time: 'Mar 15, 11:00 AM', type: 'users' as const, statusColor: '#F59E0B' },
  ]

  const quickActions = [
    { icon: 'upload', label: t('rightSidebar.actions.uploadCv') },
    { icon: 'bookmark', label: t('rightSidebar.actions.savedJobs') },
    { icon: 'chart-bar', label: t('rightSidebar.actions.analytics') },
  ]

  return (
    <div className="w-[280px] flex flex-col gap-4 shrink-0">
      {/* Upcoming Interviews */}
      <div className="bg-surface-dark rounded-2xl p-5 flex flex-col gap-3.5 shadow-[0_4px_16px_#18181B33]">
        <div className="flex items-center justify-between">
          <span className="text-white text-[15px] font-semibold">{t('rightSidebar.upcomingInterviews')}</span>
          <span className="text-[#A78BFA] text-xs cursor-pointer">{t('rightSidebar.viewAll')}</span>
        </div>
        {interviews.map((item, i) => (
          <InterviewItem key={i} {...item} />
        ))}
      </div>

      {/* Quick Actions */}
      <div className="bg-white rounded-[14px] p-5 flex flex-col gap-3 shadow-[0_2px_12px_#A855F712]">
        <span className="text-text-primary text-[15px] font-semibold">{t('rightSidebar.quickActions')}</span>
        {quickActions.map((item, i) => (
          <QuickActionButton key={i} {...item} />
        ))}
      </div>
    </div>
  )
}
