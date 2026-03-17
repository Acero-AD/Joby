import React from 'react'
import StatCard from './StatCard'

export default function StatsRow({ stats }) {
  return (
    <div className="flex gap-5">
      <StatCard label="Total Applications" value={stats.total} />
      <StatCard label="Interviews" value={stats.interviewing} />
      <StatCard label="Offers" value={stats.offered} />
      <StatCard label="Rejections" value={stats.rejected} />
    </div>
  )
}
