class Api::LikesController < ApplicationController

    before_action :require_logged_in

    def index
        video = Video.find(params[:video_id])
        @likes = video.likes 
    end

    def create
        @like = Like.new()
        @like.user_id = current_user.id
        @like.video_id = params[:video_id]

        if @like.save
            render :show
        else
            render json: @like.errors.full_messages, status: 401
        end
    end

  def destroy
        @like = Like.find_by(user_id: current_user.id, video_id: params[:video_id])

        if @like.destroy
            render :show
        else
            render json: ["Like not found"], status: 422
        end
  end

    private

  def review_params
    params.require(:like).permit(:user_id, :video_id)
  end

end
