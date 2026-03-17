import React from 'react'
import StatCard from './StatCard'

export default function StatsRow({ stats }) {
  return (
    <div className="flex gap-5">
      <StatCard
        label="Total Applications"
        value={stats.total}
        iconName="briefcase"
        iconColor="#A855F7"
        iconBg="#F3F0FF"
        trendIcon="trending-up"
        trendColor="#10B981"
        changeText={`${stats.total} total`}
      />
      <StatCard
        label="Interviews"
        value={stats.interviewing}
        iconName="calendar"
        iconColor="#F59E0B"
        iconBg="#FEF3C7"
        trendIcon="clock-4"
        trendColor="#6B7280"
        changeText="Scheduled"
      />
      <StatCard
        label="Offers"
        value={stats.offered}
        iconName="circle-check"
        iconColor="#10B981"
        iconBg="#D1FAE5"
        trendIcon="star"
        trendColor="#10B981"
        changeText="Pending decisions"
      />
      <StatCard
        label="Rejections"
        value={stats.rejected}
        iconName="circle-x"
        iconColor="#EF4444"
        iconBg="#FEE2E2"
        trendIcon="trending-down"
        trendColor="#EF4444"
        changeText="This month"
      />
    </div>
  )
}
