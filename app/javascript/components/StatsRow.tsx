import React from 'react'
import { useTranslation } from 'react-i18next'
import StatCard from './StatCard'
import type { Stats } from '../types'

interface StatsRowProps {
  stats: Stats
}

export default function StatsRow({ stats }: StatsRowProps) {
  const { t } = useTranslation()

  return (
    <div className="flex gap-5">
      <StatCard
        label={t('stats.totalApplications')}
        value={stats.total}
        iconName="briefcase"
        iconColor="#A855F7"
        iconBg="#F3F0FF"
        trendIcon="trending-up"
        trendColor="#10B981"
        changeText={t('stats.total', { count: stats.total })}
      />
      <StatCard
        label={t('stats.interviews')}
        value={stats.interviewing}
        iconName="calendar"
        iconColor="#F59E0B"
        iconBg="#FEF3C7"
        trendIcon="clock-4"
        trendColor="#6B7280"
        changeText={t('stats.scheduled')}
      />
      <StatCard
        label={t('stats.offers')}
        value={stats.offered}
        iconName="circle-check"
        iconColor="#10B981"
        iconBg="#D1FAE5"
        trendIcon="star"
        trendColor="#10B981"
        changeText={t('stats.pendingDecisions')}
      />
      <StatCard
        label={t('stats.rejections')}
        value={stats.rejected}
        iconName="circle-x"
        iconColor="#EF4444"
        iconBg="#FEE2E2"
        trendIcon="trending-down"
        trendColor="#EF4444"
        changeText={t('stats.thisMonth')}
      />
    </div>
  )
}
