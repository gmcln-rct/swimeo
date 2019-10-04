class Api::VideosController < ApplicationController

    def index
        @videos = Video.all
        render :index
    end

    def create
        @video = Video.new(video_params)
        @video.creator_id = current_user.id
        if @video.save
        render :show
        else
        render json: @video.errors.full_messages, status: 422
        end
    end

    def update
        @video = Video.find(params[:id])

        if @video.update(video_params)
        render :show
        else
        render json: @video.errors.full_messages, status: 422
        end

    end

    def show
        @video = Video.find(params[:id])
    end

    def destroy
        @video = Video.find(params[:id])

        if @video.creator_id == current_user.id
        @video.destroy
        render :show
        else
        render json: @video.errors.full_messages, status: 401
        end
    end


  private

  def video_params
    params.require(:video).permit(:title, :description, :creator_id, :video_url)
  end

end