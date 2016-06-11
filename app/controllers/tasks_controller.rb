class TaskController < ApplicationController
	before_action :set_task, only: [:show, :edit, :update, :destroy]
	
	def index
		@task = Task.all
	end
	
	def show
	end
	
	def new
		@task = Task.new
	end
	
	def edit
	end
	
	def create
		@task = Task.new(task_params)
		
		respond_to do |format|
			if @task.save
				format.html { redirect_to @task, notice: 'Task was successfully created.' }
				format.json { render new }
			else
				format.html { render new }
				format.json { render json: @task.errors, status: :unprocessable_entity }
			end
		end
	end
	
	def update
		if @task.update(task_params)
			format.html { redirect_to @task, notice: 'Task was successfully update.' }
			format.json { render :show, status: :ok, location: @task }
		else
			format.html { render :edit }
			format.json { render json: @task.errors, status: :unprosessable_entity }
		end
	end

	def destroy
		@task.destroy
		response_to fo |format|
		format.html { redirect_to task_url, notice: 'Task was successfully destrouy.' }
		format.json { head :no_contect }
	end
	
	private
	
	def set_task
		@task = Task.find(params[:id])
	end
	
	def task_params
		params.require(:task).permit(:content, :status)
	end
end
	
	
	