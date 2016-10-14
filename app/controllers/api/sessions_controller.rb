class Api::SessionsController < ApplicationController

  def create
		@user = User.find_by_credentials(
      params[:user][:username],
      params[:user][:password]
    )
    if @user
			login(@user)
			render "api/users/show"
		else
			render(
        json: ["Invalid credentials"], status: 401
      )
		end
	end

  def omni_create
    @user = User.from_omniauth(env["omniauth.auth"])
    login(@user)
    redirect_to root_url
  end

	def destroy
		@user = current_user
		if @user
			logout
			render "api/users/show"
		else
			render(
        json: ["Nobody is signed in"],
        status: 404
      )
		end
	end

  private

    def auth_hash
      request.env['omniauth.auth']
    end

end
