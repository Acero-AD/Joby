import React from 'react'
import { router } from '@inertiajs/react'
import type { Pagination as PaginationType } from '../types'

interface PaginationProps {
  pagination: PaginationType
}

export default function Pagination({ pagination }: PaginationProps) {
  const { page, total, totalPages, perPage } = pagination

  const goToPage = (p: number) => {
    if (p >= 1 && p <= totalPages) {
      router.get('/', { page: p }, { preserveState: true })
    }
  }

  const showingEnd = Math.min(page * perPage, total)

  return (
    <div className="flex items-center justify-between border-t border-border-light py-3.5 px-6">
      <span className="text-text-muted text-[13px]">
        Showing {Math.min(perPage, total)} of {total} applications
      </span>

      <div className="flex items-center gap-1">
        <button
          onClick={() => goToPage(page - 1)}
          disabled={page <= 1}
          className="rounded-lg border border-border-medium p-2 px-3 disabled:opacity-40 cursor-pointer disabled:cursor-default"
        >
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="#6B7280" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
            <path d="m15 18-6-6 6-6" />
          </svg>
        </button>

        {Array.from({ length: Math.min(totalPages, 3) }, (_, i) => i + 1).map(p => (
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
        ))}

        <button
          onClick={() => goToPage(page + 1)}
          disabled={page >= totalPages}
          className="rounded-lg border border-border-medium p-2 px-3 disabled:opacity-40 cursor-pointer disabled:cursor-default"
        >
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="#6B7280" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
            <path d="m9 18 6-6-6-6" />
          </svg>
        </button>
      </div>
    </div>
  )
}
