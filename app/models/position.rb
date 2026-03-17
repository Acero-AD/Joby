class Position < ApplicationRecord
  belongs_to :user

  has_one_attached :cv

  validates :url, presence: true

  enum :status, {
    bookmarked: "bookmarked",
    applied: "applied",
    interviewing: "interviewing",
    offered: "offered",
    rejected: "rejected",
    withdrawn: "withdrawn",
    accepted: "accepted"
  }
end
