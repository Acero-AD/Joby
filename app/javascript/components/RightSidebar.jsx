import React from 'react'
import InterviewItem from './InterviewItem'
import QuickActionButton from './QuickActionButton'

export default function RightSidebar() {
  const interviews = [
    { company: 'Google', time: 'Mar 10, 10:00 AM', type: 'video', statusColor: '#10B981' },
    { company: 'Microsoft', time: 'Mar 12, 2:00 PM', type: 'phone', statusColor: '#10B981' },
    { company: 'Spotify', time: 'Mar 15, 11:00 AM', type: 'users', statusColor: '#F59E0B' },
  ]

  const quickActions = [
    { icon: 'upload', label: 'Upload New CV' },
    { icon: 'bookmark', label: 'Saved Jobs' },
    { icon: 'chart-bar', label: 'Analytics' },
  ]

  return (
    <div className="w-[280px] flex flex-col gap-4 shrink-0">
      {/* Upcoming Interviews */}
      <div className="bg-surface-dark rounded-2xl p-5 flex flex-col gap-3.5 shadow-[0_4px_16px_#18181B33]">
        <div className="flex items-center justify-between">
          <span className="text-white text-[15px] font-semibold">Upcoming Interviews</span>
          <span className="text-[#A78BFA] text-xs cursor-pointer">View all</span>
        </div>
        {interviews.map((item, i) => (
          <InterviewItem key={i} {...item} />
        ))}
      </div>

      {/* Quick Actions */}
      <div className="bg-white rounded-[14px] p-5 flex flex-col gap-3 shadow-[0_2px_12px_#A855F712]">
        <span className="text-text-primary text-[15px] font-semibold">Quick Actions</span>
        {quickActions.map((item, i) => (
          <QuickActionButton key={i} {...item} />
        ))}
      </div>
    </div>
  )
}
