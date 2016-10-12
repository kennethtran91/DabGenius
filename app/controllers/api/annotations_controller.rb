class Api::AnnotationsController < ApplicationController

  def index
    @song = Song.find(params[:song_id])
    @annotations = @song.annotations
    render :index
  end

  def show
    @annotation = Annotation.find(params[:id])
    @votes = @annotation.votes
    render :show
  end

  def create
    @annotation = current_user.annotations.new(annotation_params)

    if @annotation.save
      render :show
    else
      render json: @annotation.errors.full_messages, status: 422
    end
  end

  def upvote
    @annotation = Annotation.find(params[:id])
    @annotation.updateVote(params[:user], 1)
  end

  def downvote
    @annotation = Annotation.find(params[:id])
    @annotation.updateVote(params[:user], -1)
  end

  def annotation_params
    params.require(:annotation).permit(:body, :song_id, :start_index, :end_index)
  end
end
