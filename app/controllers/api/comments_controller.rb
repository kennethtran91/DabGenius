class Api::CommentsController < ApplicationController

  def index
    @annotation = Annotation.find(params[:annotation_id])
    @comments = @annotation.comments

    render :index
  end

  def create
    @comment = current_user.comments.new(comment_params)
    if @comment.save
      render :show
    else
      render json: @comment.errors.full_messages, status: 422
    end

  end

  def comment_params
    params.require(:comment).permit(:body, :annotation_id)
  end
end
