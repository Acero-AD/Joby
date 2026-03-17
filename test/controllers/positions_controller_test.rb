require "test_helper"

class PositionsControllerTest < ActionDispatch::IntegrationTest
  test "create adds a new position" do
    assert_difference "Position.count", 1 do
      post positions_path, params: {
        position: {
          title: "Rails Developer",
          company: "Basecamp",
          url: "https://basecamp.com/jobs/1",
          status: "applied"
        }
      }
    end
    assert_redirected_to root_path
  end

  test "create with invalid data redirects back" do
    assert_no_difference "Position.count" do
      post positions_path, params: {
        position: {
          title: "Rails Developer",
          company: "Basecamp",
          url: "",
          status: "applied"
        }
      }
    end
    assert_redirected_to root_path
  end

  test "destroy removes a position" do
    position = positions(:rails_dev)
    assert_difference "Position.count", -1 do
      delete position_path(position)
    end
    assert_redirected_to root_path
  end

  test "update modifies a position" do
    position = positions(:rails_dev)
    patch position_path(position), params: {
      position: { status: "applied" }
    }
    assert_redirected_to root_path
    assert_equal "applied", position.reload.status
  end
end
