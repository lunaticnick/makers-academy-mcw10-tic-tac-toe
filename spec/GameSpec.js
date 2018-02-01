describe("Game", function() {
  var game;


  beforeEach(function() {
    game = new Game();
  });

  it("game should start with an empty board", function() {
    expect(game._board).toEqual([null, null, null, null, null, null,  null, null, null]);


  });
});
