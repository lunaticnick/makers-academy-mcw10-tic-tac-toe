function Game() {
  this._board = [null, null, null, null, null, null,  null, null, null]
};

Game.prototype.selectSquare = function (number){
  if (this._board[number]=== null){
  this._board[number] = "X"
}else {
  throw new Error("Please select a different square, this is already taken!")
}

};
