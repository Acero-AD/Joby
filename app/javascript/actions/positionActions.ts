import { router } from '@inertiajs/react'
import i18n from '../i18n'

export function navigateToPosition(id: number) {
  router.visit(`/positions/${id}`)
}

export function navigateToDashboard() {
  router.visit('/')
}

export function deletePosition(id: number) {
  if (confirm(i18n.t('detail.confirmDelete'))) {
    router.delete(`/positions/${id}`, {
      onSuccess: () => navigateToDashboard()
    })
  }
}

export function handleRowClick(e: React.MouseEvent, positionId: number) {
  const target = e.target as HTMLElement
  if (target.closest('a') || target.closest('button')) return
  navigateToPosition(positionId)
}
