import React, { useState } from 'react'
import { useTranslation } from 'react-i18next'
import Sidebar from '../../components/Sidebar'
import StatusBadge from '../../components/StatusBadge'
import DeleteConfirmationModal from '../../components/DeleteConfirmationModal'
import {
  deletePosition,
  navigateToDashboard,
} from '../../actions/positionActions'
import type { Position, User } from '../../types'

interface ShowProps {
  user: User | null
  position: Position
}

export default function PositionShow({ user, position }: ShowProps) {
  const { t } = useTranslation()
  const [showDeleteModal, setShowDeleteModal] = useState(false)

  return (
    <div className="flex w-[1440px] h-[900px] mx-auto rounded-[20px] bg-gradient-to-br from-bg-start via-bg-mid1 via-70% to-bg-end">
      <Sidebar user={user} activePage="Applications" />

      <div className="flex flex-col flex-1 gap-6 p-7 px-8">
        {/* Header */}
        <div className="flex flex-col gap-4">
          <a
            href="/"
            onClick={(e) => {
              e.preventDefault()
              navigateToDashboard()
            }}
            className="flex items-center gap-1.5 text-text-muted text-[13px] font-medium hover:text-text-secondary"
          >
            <svg
              className="w-4 h-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="m15 18-6-6 6-6" />
            </svg>
            {t('detail.backToApplications')}
          </a>

          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <h1 className="text-text-primary text-[26px] font-bold">
                {position.title || t('table.untitled')}
              </h1>
              <StatusBadge status={position.status} />
            </div>

            <div className="flex items-center gap-2.5">
              <button className="flex items-center gap-1.5 rounded-[10px] border border-[#A855F7] py-2 px-4 cursor-pointer hover:bg-purple-50">
                <svg
                  className="w-4 h-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="#A855F7"
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z" />
                </svg>
                <span className="text-[#A855F7] text-sm font-medium">
                  {t('detail.edit')}
                </span>
              </button>
              <button
                onClick={() => setShowDeleteModal(true)}
                className="flex items-center gap-1.5 rounded-[10px] border border-[#EF4444] py-2 px-4 cursor-pointer hover:bg-red-50"
              >
                <svg
                  className="w-4 h-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="#EF4444"
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M3 6h18" />
                  <path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6" />
                  <path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2" />
                </svg>
                <span className="text-[#EF4444] text-sm font-medium">
                  {t('detail.delete')}
                </span>
              </button>
            </div>
          </div>
        </div>

        {/* Application Details Card */}
        <div className="bg-white rounded-[14px] shadow-[0_2px_12px_#A855F712] p-6 flex flex-col gap-5">
          <span className="text-text-primary text-[17px] font-semibold">
            {t('detail.applicationDetails')}
          </span>
          <div className="h-px bg-[#F3F4F6]" />

          <div className="flex gap-8">
            {/* Left Column */}
            <div className="flex-1 flex flex-col gap-5">
              {/* Application URL */}
              <div className="flex flex-col gap-1">
                <span className="text-text-muted text-xs font-medium">
                  {t('detail.labels.applicationUrl')}
                </span>
                {position.url ? (
                  <a
                    href={position.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1.5 text-[#7C3AED] text-sm font-medium hover:underline"
                  >
                    <svg
                      className="w-3.5 h-3.5 shrink-0"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="#A855F7"
                      strokeWidth={2}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M15 3h6v6" />
                      <path d="M10 14 21 3" />
                      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                    </svg>
                    {position.url}
                  </a>
                ) : (
                  <span className="text-text-light text-sm">
                    {t('detail.noUrl')}
                  </span>
                )}
              </div>

              {/* Status */}
              <div className="flex flex-col gap-1">
                <span className="text-text-muted text-xs font-medium">
                  {t('detail.labels.status')}
                </span>
                <div>
                  <StatusBadge status={position.status} />
                </div>
              </div>

              {/* CV File */}
              <div className="flex flex-col gap-1.5">
                <span className="text-text-muted text-xs font-medium">
                  {t('detail.labels.cvFile')}
                </span>
                {position.cvFilename ? (
                  <div className="flex items-center gap-2.5 bg-[#FAF5FF] border border-[#E9D5FF] rounded-[10px] p-3">
                    <svg
                      className="w-5 h-5 shrink-0"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="#A855F7"
                      strokeWidth={2}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z" />
                      <path d="M14 2v4a2 2 0 0 0 2 2h4" />
                      <path d="M10 9H8" />
                      <path d="M16 13H8" />
                      <path d="M16 17H8" />
                    </svg>
                    <div className="flex flex-col gap-0.5 flex-1">
                      <span className="text-[#374151] text-[13px] font-medium">
                        {position.cvFilename}
                      </span>
                    </div>
                    <svg
                      className="w-4 h-4 shrink-0"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="#A855F7"
                      strokeWidth={2}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                      <polyline points="7 10 12 15 17 10" />
                      <line x1="12" x2="12" y1="15" y2="3" />
                    </svg>
                  </div>
                ) : (
                  <span className="text-text-light text-sm">
                    {t('detail.noCvAttached')}
                  </span>
                )}
              </div>
            </div>

            {/* Right Column */}
            <div className="flex-1 flex flex-col gap-5">
              {/* Created */}
              <div className="flex flex-col gap-1">
                <span className="text-text-muted text-xs font-medium">
                  {t('detail.labels.created')}
                </span>
                <div className="flex items-center gap-1.5">
                  <svg
                    className="w-3.5 h-3.5 shrink-0"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="#6B7280"
                    strokeWidth={2}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <rect width="18" x="3" y="4" height="18" rx="2" ry="2" />
                    <line x1="16" x2="16" y1="2" y2="6" />
                    <line x1="8" x2="8" y1="2" y2="6" />
                    <line x1="3" x2="21" y1="10" y2="10" />
                  </svg>
                  <span className="text-text-primary text-sm">
                    {position.createdAt}
                  </span>
                </div>
              </div>

              {/* Last Updated */}
              <div className="flex flex-col gap-1">
                <span className="text-text-muted text-xs font-medium">
                  {t('detail.labels.lastUpdated')}
                </span>
                <div className="flex items-center gap-1.5">
                  <svg
                    className="w-3.5 h-3.5 shrink-0"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="#6B7280"
                    strokeWidth={2}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <circle cx="12" cy="12" r="10" />
                    <polyline points="12 6 12 12 16 14" />
                  </svg>
                  <span className="text-text-primary text-sm">
                    {position.updatedAt}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {showDeleteModal && (
        <DeleteConfirmationModal
          position={position}
          onConfirm={() => deletePosition(position.id)}
          onClose={() => setShowDeleteModal(false)}
        />
      )}
    </div>
  )
}
