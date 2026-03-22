import React from 'react'
import { useTranslation } from 'react-i18next'
import { router } from '@inertiajs/react'
import Icon from './Icon'
import type { Pagination as PaginationType } from '../types'

interface PaginationProps {
  pagination: PaginationType
}

export default function Pagination({ pagination }: PaginationProps) {
  const { t } = useTranslation()
  const { page, total, totalPages, perPage } = pagination

  const goToPage = (p: number) => {
    if (p >= 1 && p <= totalPages) {
      router.get('/', { page: p }, { preserveState: true })
    }
  }

  return (
    <div className="flex items-center justify-between border-t border-border-light py-3.5 px-6">
      <span className="text-text-muted text-[13px]">
        {t('pagination.showing', { count: Math.min(perPage, total), total })}
      </span>

      <div className="flex items-center gap-1">
        <button
          onClick={() => goToPage(page - 1)}
          disabled={page <= 1}
          className="rounded-lg border border-border-medium p-2 px-3 disabled:opacity-40 cursor-pointer disabled:cursor-default"
        >
          <Icon name="chevron-left" size={16} stroke="#6B7280" />
        </button>

        {Array.from({ length: Math.min(totalPages, 3) }, (_, i) => i + 1).map(
          (p) => (
            <button
              key={p}
              onClick={() => goToPage(p)}
              className={`rounded-lg p-2 px-3 text-[13px] font-medium cursor-pointer ${
                p === page
                  ? 'bg-gradient-to-b from-primary-purple to-primary-pink text-white'
                  : 'text-text-muted hover:bg-gray-50'
              }`}
            >
              {p}
            </button>
          ),
        )}

        <button
          onClick={() => goToPage(page + 1)}
          disabled={page >= totalPages}
          className="rounded-lg border border-border-medium p-2 px-3 disabled:opacity-40 cursor-pointer disabled:cursor-default"
        >
          <Icon name="chevron-right" size={16} stroke="#6B7280" />
        </button>
      </div>
    </div>
  )
}
