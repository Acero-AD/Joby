require "test_helper"

class DashboardControllerTest < ActionDispatch::IntegrationTest
  test "index renders successfully" do
    get root_path
    assert_response :success
  end

  test "index renders with positions data" do
    user = users(:jane)
    get root_path
    assert_response :success
  end

  test "index paginates positions" do
    get root_path, params: { page: 1 }
    assert_response :success
  end
end
