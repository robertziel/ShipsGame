class GamesController < ApplicationController
  include GamesHelper

  # GET /games
  # GET /games.json
  def index
    x = ifBelongstoActiveGame(current_user.id)
    if x
      redirect_to x
    end
    @games = Game.all
    @game_new = Game.new
  end
  # GET /games/1
  # GET /games/1.json
  def show
    @game = Game.where(id: params[:id]).take
    if @game != ifBelongstoActiveGame(current_user.id) or @game == nil
      redirect_to :root
    else
      if @game.user_id != current_user.id
        @game_im = @game
        @game.userboard = @game_im.enemyboard
        @game.readyuser = @game_im.readyenemy
      end
      respond_to do |format|
        format.html
        format.json { render json: @game }
      end
    end
  end

  # GET /games/new
  def new
    @game = Game.new
  end

  # GET /games/1/edit
  def edit
  end

  # POST /games
  # POST /games.json
  def create
    @game = Game.new
    @game.user_id = current_user.id

    respond_to do |format|
      if @game.save
        format.html { redirect_to :root, notice: 'Game was successfully created.' }
        format.json { render :show, status: :created, location: @game }
      else
        format.html { render :new }
        format.json { render json: @game.errors, status: :unprocessable_entity }
      end
    end
  end

  # PATCH/PUT /games/1
  # PATCH/PUT /games/1.json
  def update
    @game = Game.where(id: params[:id]).take
    if @game == nil
      @game == false
    else
      if params[:game] == "1"
        if @game != ifBelongstoActiveGame(current_user.id) or @game == nil
          redirect_to :root
        end
        #push
        if params[:push]
          if @game.user_id == current_user.id
            @game.userboard = toBoard(params[:push].split(",").map(&:to_i))
            @game.readyuser = true
          else
            @game.enemyboard = toBoard(params[:push].split(",").map(&:to_i))
            @game.readyenemy = true
          end
          @game.save
        end
        #replace
        if @game.user_id != current_user.id
          game_im = @game
          @game.userboard = game_im.enemyboard
          @game.readyuser = game_im.readyenemy
        end


      else
        #game joining
        @game.enemy_id = current_user.id
        @game.accepted = true
        @game.save
      end
      respond_to do |format|
        format.html { redirect_to :root, notice: 'Game was successfully updated.' }
        format.json { render json: @game }
      end
    end
  end

  # DELETE /games/1
  # DELETE /games/1.json
  def destroy
    @game = Game.where(id: params[:id]).take
    @game.destroy
    respond_to do |format|
      format.html { redirect_to games_url, notice: 'Game was successfully destroyed.' }
      format.json { head :no_content }
    end
  end




end
