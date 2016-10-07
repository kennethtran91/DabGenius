class Api::AnnotationsController < ApplicationController

  def show
    @annotation = Annotation.find(params[:id])
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

  def annotation_params
    params.require(:annotation).permit(:song, :start_index, :end_index)
  end
end
