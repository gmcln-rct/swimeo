class Api::CommentsController < ApplicationController

    def index

    end

    def show
        @comment = Comment.find(params[:id])
        render :show
    end

    def create
        @comment = Comment.new(comment_params)
        
        if @comment.save  
            @video = Video.find(comment_params[:video_id])
            render :show
        else
            render json: ["User must be logged in"], status: 422
        end
    end

    def update
        @comment = Comment.find_by(user_id: current_user.id, video_id: params[:id])

        if @comment.update(comment_params)
            render :show
        else
            render json: @comment.errors.full_messages, status: 422
        end
    end
        
        
    def destroy
        
        @comment = Comment.find(params[:id])
        if @comment
            @comment.destroy
            render :show
        end
    end

    
  private

  def comment_params
    params.require(:comment).permit(:user_id, :video_id, :body)
  end

end
