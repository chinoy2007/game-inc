class Game {
  constructor() {

  }

  getState(){
    var gameStateRef= database.ref("gameState");
    gameStateRef.on("value",function(data){
      gameState= data.val()
    });
  }

  updateState(state){
    database.ref("/").update({
      gameState: state
    });
  }

  start() {
   
    player = new Player();

    playerCount= player.getCount();
    form = new Form();
    form.display();
    player1= createSprite(width/2+700,height-100);
    player1.addImage("playerone",player_left1);
    player1.scale=1;

    player2= createSprite(width/2-700,height-100);
    player2.addImage("playertwo",player_left2);
    player2.scale=0.5;

    players=[player1,player2];
  }

  handleElements() {
    form.hide();
    form.titleImg.position(40, 50);
    form.titleImg.class("gameTitleAfterEffect");
  }

  play() {
    this.handleElements();

    Player.getPlayerInfo();

    if (allPlayers !== undefined) {
      console.log(courtImg.position)
      image(courtImg, 0 ,-width*5,width*6,height);

      drawSprites();
    }
  }
 }
