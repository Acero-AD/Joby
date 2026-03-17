class PositionsController < ApplicationController
  before_action :set_position, only: [:update, :destroy]

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
    params.require(:position).permit(:title, :company, :url, :status, :cv)
  end
end
