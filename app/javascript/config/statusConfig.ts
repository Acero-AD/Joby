export interface StatusStyle {
  badge: { bg: string; text: string }
  statCard?: {
    iconName: string
    iconColor: string
    iconBg: string
    trendIcon: string
    trendColor: string
  }
}

export const statuses: Record<string, StatusStyle> = {
  bookmarked: {
    badge: { bg: '#F3F0FF', text: '#7C3AED' },
  },
  applied: {
    badge: { bg: '#E0E7FF', text: '#4F46E5' },
  },
  interviewing: {
    badge: { bg: '#FEF3C7', text: '#D97706' },
    statCard: {
      iconName: 'calendar',
      iconColor: '#F59E0B',
      iconBg: '#FEF3C7',
      trendIcon: 'clock',
      trendColor: '#6B7280',
    },
  },
  offered: {
    badge: { bg: '#D1FAE5', text: '#059669' },
    statCard: {
      iconName: 'circle-check',
      iconColor: '#10B981',
      iconBg: '#D1FAE5',
      trendIcon: 'star',
      trendColor: '#10B981',
    },
  },
  rejected: {
    badge: { bg: '#FEE2E2', text: '#DC2626' },
    statCard: {
      iconName: 'circle-x',
      iconColor: '#EF4444',
      iconBg: '#FEE2E2',
      trendIcon: 'trending-down',
      trendColor: '#EF4444',
    },
  },
  withdrawn: {
    badge: { bg: '#F3F4F6', text: '#6B7280' },
  },
  accepted: {
    badge: { bg: '#D1FAE5', text: '#059669' },
  },
}

export const statusKeys = Object.keys(statuses)

export const totalStatCard = {
  iconName: 'briefcase',
  iconColor: '#A855F7',
  iconBg: '#F3F0FF',
  trendIcon: 'trending-up',
  trendColor: '#10B981',
}
