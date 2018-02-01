function Game(playerX, playerO) {
  this._board = [null, null, null, null, null, null,  null, null, null]
  this._players = [playerX, playerO]
  this.currentPlayer = this._players[0]
};

Game.prototype.selectSquare = function (number){
  var mark = this.currentPlayer === this._players[0] ? "X" :"O";
  if (this._board[number]=== null)
  {
    this._board[number] = mark;
    this.switchPlayer()
  }else{
    throw new Error("Please select a different square, this is already taken!")
  };
};

Game.prototype.switchPlayer = function(){
  if (this.currentPlayer === this._players[0]){
    this.currentPlayer = this._players[1]
  }else{
    this.currentPlayer = this._players[0]
  }
};
