class Api::CommentsController < ApplicationController

    def create
        @comment = Comment.new(comment_params)
        
        if @comment.save  # Not save! ?
            @video = Video.find(comment_params[:video_id])
            render :show
        else
            render json: ["User must be logged in"], status: 422
        end
    end
        
        
    def destroy
        comment = Comment.find(params[:id])
        if comment
        comment.destroy
        @video = Video.find(comment_params[:video_id])
        render :show
        end
    end

    
  private

  def comment_params
    params.require(:comment).permit(:user_id, :video_id, :body)
  end

end