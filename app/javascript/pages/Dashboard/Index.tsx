import React, { useState } from 'react'
import Sidebar from '../../components/Sidebar'
import Header from '../../components/Header'
import StatsRow from '../../components/StatsRow'
import ApplicationsTable from '../../components/ApplicationsTable'
import RightSidebar from '../../components/RightSidebar'
import AddApplicationModal from '../../components/AddApplicationModal'
import type { DashboardProps } from '../../types'

export default function DashboardIndex({
  user,
  positions,
  stats,
  pagination,
}: DashboardProps) {
  const [showModal, setShowModal] = useState(false)

  return (
    <div className="flex w-full min-h-screen lg:rounded-[20px] bg-gradient-to-br from-bg-start via-bg-mid1 via-70% to-bg-end">
      <Sidebar user={user} />

      <div className="flex flex-1 gap-6 p-7 px-8">
        <div className="flex flex-col flex-1 gap-6">
          <Header user={user} onAddClick={() => setShowModal(true)} />
          <StatsRow stats={stats} />
          <ApplicationsTable positions={positions} pagination={pagination} />
        </div>

        <div className="hidden lg:block"><RightSidebar /></div>
      </div>

      {showModal && <AddApplicationModal onClose={() => setShowModal(false)} />}
    </div>
  )
}
