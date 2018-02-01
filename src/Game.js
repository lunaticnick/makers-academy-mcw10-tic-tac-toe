function Game() {
  this._board = [null, null, null, null, null, null,  null, null, null]
};

Game.prototype.selectSquare = function (number){
  this._board[number] = "X"
};
