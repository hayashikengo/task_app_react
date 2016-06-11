class Task < ActiveRecord::Base
	enum status: { todo: 0, doing: 1, done: 2 }
	valicates :content, presence: true
end
	