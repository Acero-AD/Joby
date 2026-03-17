import React from 'react'

export default function StatCard({ label, value }) {
  return (
    <div className="flex-1 bg-white rounded-[14px] shadow-sm p-5 flex flex-col gap-3">
      <span className="text-text-muted text-[13px] font-medium">{label}</span>
      <span className="text-text-primary text-4xl font-bold">{value}</span>
    </div>
  )
}
