class DashboardController < ApplicationController
  PER_PAGE = 5

  def index
    user = User.first
    page = (params[:page] || 1).to_i
    positions = user ? user.positions.order(created_at: :desc) : Position.none

    total = positions.count
    paginated = positions.offset((page - 1) * PER_PAGE).limit(PER_PAGE)

    stats = {
      total: total,
      interviewing: positions.where(status: :interviewing).count,
      offered: positions.where(status: :offered).count,
      rejected: positions.where(status: :rejected).count
    }

    render inertia: "Dashboard/Index", props: {
      user: user ? { id: user.id, name: user.name, email: user.email } : nil,
      positions: paginated.map { |p| serialize_position(p) },
      stats: stats,
      pagination: {
        page: page,
        perPage: PER_PAGE,
        total: total,
        totalPages: (total.to_f / PER_PAGE).ceil
      }
    }
  end

  private

  def serialize_position(position)
    {
      id: position.id,
      url: position.url,
      status: position.status,
      title: position.title,
      company: position.company,
      cvFilename: position.cv.attached? ? position.cv.filename.to_s : nil,
      createdAt: position.created_at.strftime("%b %-d, %Y"),
      updatedAt: position.updated_at.strftime("%b %-d, %Y")
    }
  end
end
