class Api::SongsController < ApplicationController

  before_action :require_author, only: [:update]

  def index
    @songs = Song.all
    render :index
  end

  def new
    @song = Song.new

    render :new
  end

  def create
    @song = current_user.songs.new(song_params)

    if @song.save
      render :show
    else
      render json: @song.errors.full_messages, status: 422
    end
  end

  def edit
    @song = Song.find(params[:id])
    render :edit
  end

  def update
    @song = Song.find(params[:id])

    if @song.update_attributes(song_params)
      render :show
    else
      render json: @song.errors.full_messages, status: 422
    end
  end

  def show
    @song = Song.find(params[:id])
    render :show
  end

  def destroy
    @song = Song.find(params[:id])
    @song.destroy
    render :show
  end

  private

  def song_params
    params.require(:song).permit(:artist, :title, :lyrics, :image)
  end

  def require_author
    @song = Song.find(params[:id])
    if @song.author.id == current_user.id
      render 'api/songs/edit'
    else
      render json: "Forbidden", status: :forbidden
    end
  end

end
