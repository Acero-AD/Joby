export interface User {
  id: number
  name: string
  email: string
}

export interface Position {
  id: number
  url: string
  status: string
  title: string
  company: string
  cvFilename: string | null
  createdAt: string
}

export interface Stats {
  total: number
  interviewing: number
  offered: number
  rejected: number
}

export interface Pagination {
  page: number
  perPage: number
  total: number
  totalPages: number
}

export interface DashboardProps {
  user: User | null
  positions: Position[]
  stats: Stats
  pagination: Pagination
}
