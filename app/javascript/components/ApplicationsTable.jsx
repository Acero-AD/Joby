import React from 'react'

export default function ApplicationsTable({ positions, pagination }) {
  return (
    <div className="flex-1 bg-white rounded-[14px] shadow-sm flex flex-col overflow-hidden">
      <div className="p-4 px-6 border-b border-border-light flex items-center justify-between">
        <span className="text-text-primary text-[17px] font-semibold">Recent Applications</span>
      </div>
      <div className="flex-1 flex items-center justify-center text-text-muted text-sm">
        Table coming soon
      </div>
    </div>
  )
}
