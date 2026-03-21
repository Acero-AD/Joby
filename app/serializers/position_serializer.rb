class PositionSerializer
  def initialize(position)
    @position = position
  end

  def as_json
    {
      id: @position.id,
      url: @position.url,
      status: @position.status,
      title: @position.title,
      company: @position.company,
      cvFilename: @position.cv.attached? ? @position.cv.filename.to_s : nil,
      createdAt: @position.created_at.strftime("%b %-d, %Y"),
      updatedAt: @position.updated_at.strftime("%b %-d, %Y")
    }
  end
end
