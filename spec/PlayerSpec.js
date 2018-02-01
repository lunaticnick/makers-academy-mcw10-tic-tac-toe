describe("Player Logic", function() {
  var player;


  beforeEach(function() {
    player = new Player("Nikolaos");
  });

  it("should have a name", function() {
    expect(player.name).toEqual("Nikolaos")

  });

});
