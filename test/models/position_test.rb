require "test_helper"

class PositionTest < ActiveSupport::TestCase
  test "valid position" do
    position = Position.new(user: users(:jane), url: "https://company.com/jobs/123")
    assert position.valid?
  end

  test "requires url" do
    position = Position.new(user: users(:jane), url: nil)
    assert_not position.valid?
    assert_includes position.errors[:url], "can't be blank"
  end

  test "requires user" do
    position = Position.new(url: "https://company.com/jobs/123")
    assert_not position.valid?
    assert_includes position.errors[:user], "must exist"
  end

  test "defaults to bookmarked status" do
    position = Position.create!(user: users(:jane), url: "https://company.com/jobs/new")
    assert_equal "bookmarked", position.status
  end

  test "can change status to applied" do
    position = positions(:rails_dev)
    position.update!(status: :applied)
    assert_equal "applied", position.status
  end

  test "rejects invalid status" do
    assert_raises(ArgumentError) do
      positions(:rails_dev).status = :unknown
    end
  end

  test "supports all defined statuses" do
    expected = %w[bookmarked applied interviewing offered rejected withdrawn accepted]
    assert_equal expected, Position.statuses.keys
  end

  test "belongs to user" do
    position = positions(:rails_dev)
    assert_equal users(:jane), position.user
  end

  test "supports cv attachment" do
    position = positions(:rails_dev)
    assert_respond_to position, :cv
  end

  test "valid without cv" do
    position = Position.new(user: users(:jane), url: "https://company.com/jobs/no-cv")
    assert position.valid?
  end

  test "can attach cv" do
    position = positions(:rails_dev)
    position.cv.attach(io: StringIO.new("fake pdf content"), filename: "resume.pdf", content_type: "application/pdf")
    assert position.cv.attached?
  end
end
