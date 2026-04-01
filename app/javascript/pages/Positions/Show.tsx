import React, { useState } from 'react'
import { useTranslation } from 'react-i18next'
import Sidebar from '../../components/Sidebar'
import StatusBadge from '../../components/StatusBadge'
import DeleteConfirmationModal from '../../components/DeleteConfirmationModal'
import EditApplicationModal from '../../components/EditApplicationModal'
import Icon from '../../components/Icon'
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
  const [showEditModal, setShowEditModal] = useState(false)

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
            <Icon name="chevron-left" size={16} />
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
              <button
                onClick={() => setShowEditModal(true)}
                className="flex items-center gap-1.5 rounded-[10px] border border-[#A855F7] py-2 px-4 cursor-pointer hover:bg-purple-50"
              >
                <Icon name="edit" size={16} stroke="#A855F7" />
                <span className="text-[#A855F7] text-sm font-medium">
                  {t('detail.edit')}
                </span>
              </button>
              <button
                onClick={() => setShowDeleteModal(true)}
                className="flex items-center gap-1.5 rounded-[10px] border border-[#EF4444] py-2 px-4 cursor-pointer hover:bg-red-50"
              >
                <Icon name="trash" size={16} stroke="#EF4444" />
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
                    <Icon
                      name="external-link"
                      size={14}
                      className="shrink-0"
                      stroke="#A855F7"
                    />
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
                    <Icon
                      name="file-text"
                      size={20}
                      className="shrink-0"
                      stroke="#A855F7"
                    />
                    <div className="flex flex-col gap-0.5 flex-1">
                      <span className="text-[#374151] text-[13px] font-medium">
                        {position.cvFilename}
                      </span>
                    </div>
                    <Icon
                      name="download"
                      size={16}
                      className="shrink-0"
                      stroke="#A855F7"
                    />
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
                  <Icon
                    name="calendar"
                    size={14}
                    className="shrink-0"
                    stroke="#6B7280"
                  />
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
                  <Icon
                    name="clock"
                    size={14}
                    className="shrink-0"
                    stroke="#6B7280"
                  />
                  <span className="text-text-primary text-sm">
                    {position.updatedAt}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {showEditModal && (
        <EditApplicationModal
          position={position}
          onClose={() => setShowEditModal(false)}
        />
      )}

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
