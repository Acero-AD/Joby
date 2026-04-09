import React, { useState } from 'react'
import Sidebar from '../../components/Sidebar'
import TopAppBar from '../../components/TopAppBar'
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
  const [drawerOpen, setDrawerOpen] = useState(false)

  return (
    <div className="flex flex-col w-full min-h-screen lg:flex-row lg:rounded-[20px] bg-gradient-to-br from-bg-start via-bg-mid1 via-70% to-bg-end">
      <TopAppBar onMenuClick={() => setDrawerOpen(true)} />
      <div className="flex min-h-0 min-w-0 flex-1 flex-col lg:flex-row">
        <Sidebar user={user} open={drawerOpen} onClose={() => setDrawerOpen(false)} />

        <div className="flex min-h-0 min-w-0 flex-1 flex-row gap-6 p-7 px-8">
          <div className="flex min-h-0 min-w-0 flex-1 flex-col gap-6">
            <Header user={user} onAddClick={() => setShowModal(true)} />
            <StatsRow stats={stats} />
            <ApplicationsTable positions={positions} pagination={pagination} />
          </div>

          <div className="hidden lg:block"><RightSidebar /></div>
        </div>
      </div>

      {showModal && <AddApplicationModal onClose={() => setShowModal(false)} />}
    </div>
  )
}
