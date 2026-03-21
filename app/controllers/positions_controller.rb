class PositionsController < ApplicationController
  before_action :set_position, only: [:show, :update, :destroy]

  def show
    render inertia: "Positions/Show", props: {
      user: @position.user ? { id: @position.user.id, name: @position.user.name, email: @position.user.email } : nil,
      position: serialize_position(@position)
    }
  end

  def create
    user = User.first
    @position = user.positions.build(position_params)

    if @position.save
      redirect_to root_path
    else
      redirect_to root_path, inertia: { errors: @position.errors.to_hash }
    end
  end

  def update
    if @position.update(position_params)
      redirect_to root_path
    else
      redirect_to root_path, inertia: { errors: @position.errors.to_hash }
    end
  end

  def destroy
    @position.destroy
    redirect_to root_path
  end

  private

  def set_position
    @position = Position.find(params[:id])
  end

  def position_params
    params.permit(:title, :company, :url, :status, :cv)
  end

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
