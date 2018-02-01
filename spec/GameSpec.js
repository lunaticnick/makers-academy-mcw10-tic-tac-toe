describe("Game Logic", function() {
  var game;


  beforeEach(function() {
    playerX = new Player ("Nikolaos")
    playerO = new Player ("John")
    game = new Game(playerX,playerO);
  });

  describe ("Board", function() {

      it("should be an empty 3x3 grid", function() {
        expect(game._board).toEqual([null, null, null, null, null, null,  null, null, null]);
      });

  });

  describe ("Single Player", function() {

      it("Player X name is Nikolaos", function() {
          expect(game.currentPlayer.name).toEqual("Nikolaos");
      });

      it("Player can claim a square of the 3x3 board by marking with X", function() {
          game.selectSquare(0);
          expect(game._board).toEqual(["X", null, null, null, null, null,  null, null, null]);
      });

      it("Player cannot claim a square of the 3x3 board if already claimed", function() {
          game.selectSquare(0);
          expect(function(){ game.selectSquare(0) }).toThrow(new Error("Please select a different square, this is already taken!"))
      });

  });

  describe ("Double Player", function() {

      it("#switchPlayer changes who the current Player is", function() {
        game.switchPlayer()
          expect(game.currentPlayer.name).toEqual("John")
      });

      it("After first player claims a square, it the second player turn to play", function() {
          game.selectSquare(0);
          expect(game.currentPlayer.name).toEqual("John")
      });

  });


});
