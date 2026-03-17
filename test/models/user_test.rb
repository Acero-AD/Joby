require "test_helper"

class UserTest < ActiveSupport::TestCase
  test "valid user" do
    user = User.new(name: "Jane Doe", email: "new@example.com", password: "password123")
    assert user.valid?
  end

  test "requires name" do
    user = User.new(name: nil, email: "test@example.com", password: "password123")
    assert_not user.valid?
    assert_includes user.errors[:name], "can't be blank"
  end

  test "requires email" do
    user = User.new(name: "Jane", email: nil, password: "password123")
    assert_not user.valid?
    assert_includes user.errors[:email], "can't be blank"
  end

  test "requires unique email" do
    users(:jane) # ensure fixture is loaded
    user = User.new(name: "Another Jane", email: "jane@example.com", password: "password123")
    assert_not user.valid?
    assert_includes user.errors[:email], "has already been taken"
  end

  test "password is hashed" do
    user = User.create!(name: "Test", email: "hash@example.com", password: "secret123")
    assert_not_equal "secret123", user.password_digest
  end

  test "authenticates with correct password" do
    user = users(:jane)
    assert user.authenticate("password123")
  end

  test "rejects wrong password" do
    user = users(:jane)
    assert_not user.authenticate("wrong")
  end

  test "has many positions" do
    user = users(:jane)
    assert_respond_to user, :positions
    assert_equal 2, user.positions.count
  end

  test "destroying user destroys positions" do
    user = users(:jane)
    assert_difference "Position.count", -2 do
      user.destroy
    end
  end
end
