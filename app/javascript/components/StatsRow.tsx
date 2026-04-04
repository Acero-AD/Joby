import React from 'react'
import { useTranslation } from 'react-i18next'
import StatCard from './StatCard'
import { statuses, totalStatCard } from '../config/statusConfig'
import type { Stats } from '../types'

interface StatsRowProps {
  stats: Stats
}

export default function StatsRow({ stats }: StatsRowProps) {
  const { t } = useTranslation()

  const interviewing = statuses.interviewing.statCard!
  const offered = statuses.offered.statCard!
  const rejected = statuses.rejected.statCard!

  return (
    <div className="grid grid-cols-2 gap-3 lg:flex lg:gap-5">
      <StatCard
        label={t('stats.totalApplications')}
        value={stats.total}
        iconName={totalStatCard.iconName}
        iconColor={totalStatCard.iconColor}
        iconBg={totalStatCard.iconBg}
        trendIcon={totalStatCard.trendIcon}
        trendColor={totalStatCard.trendColor}
        changeText={t('stats.total', { count: stats.total })}
      />
      <StatCard
        label={t('stats.interviews')}
        value={stats.interviewing}
        iconName={interviewing.iconName}
        iconColor={interviewing.iconColor}
        iconBg={interviewing.iconBg}
        trendIcon={interviewing.trendIcon}
        trendColor={interviewing.trendColor}
        changeText={t('stats.scheduled')}
      />
      <StatCard
        label={t('stats.offers')}
        value={stats.offered}
        iconName={offered.iconName}
        iconColor={offered.iconColor}
        iconBg={offered.iconBg}
        trendIcon={offered.trendIcon}
        trendColor={offered.trendColor}
        changeText={t('stats.pendingDecisions')}
      />
      <StatCard
        label={t('stats.rejections')}
        value={stats.rejected}
        iconName={rejected.iconName}
        iconColor={rejected.iconColor}
        iconBg={rejected.iconBg}
        trendIcon={rejected.trendIcon}
        trendColor={rejected.trendColor}
        changeText={t('stats.thisMonth')}
      />
    </div>
  )
}
