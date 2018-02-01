function Game(playerX, playerO) {
  this._board = [null, null, null, null, null, null,  null, null, null]
  this._players = [playerX, playerO]
  this.currentPlayer = this._players[0]
};

Game.prototype.selectSquare = function (number){
  if (this._board[number]=== null){
    this._board[number] = "X"
  }else{
    throw new Error("Please select a different square, this is already taken!")
  }

};
