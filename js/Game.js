class Game {
  constructor(){

  }

  getState(){
    var gameStateRef  = database.ref('gameState');
    gameStateRef.on("value",function(data){
       gameState = data.val();
    })

  }

  update(state){
    database.ref('/').update({
      gameState: state
    });
  }

  async start(){
    if(gameState === 0){
      player = new Player();
      var playerCountRef = await database.ref('playerCount').once("value");
      if(playerCountRef.exists()){
        playerCount = playerCountRef.val();
        player.getCount();
      }
      form = new Form()
      form.display();
    }


    Player1s= createSprite(200,200,200,200);
 Player1s.addAnimation("bluePlayer",Player1)

 Player2s=createSprite(200,500,200,200);
 Player2s.addAnimation("redPlayer",Player2)

    // car1 = createSprite(100,200);
    // car1.addImage("car1",car1_img);
    // car2 = createSprite(300,200);
    // car2.addImage("car2",car2_img);
    // car3 = createSprite(500,200);
    // car3.addImage("car3",car3_img);
    // car4 = createSprite(700,200);
    // car4.addImage("car4",car4_img);
    Players = [Player1s,Player2s];
  }

  play(){
    form.hide();
    Player.getPlayerInfo();
    player.getCarsAtEnd();

    if(allPlayers !== undefined){
      background(rgb(198,135,103));
      image(track, 50,-displayHeight*12,displayWidth-100, displayHeight*15);
      
      var display_position = 100;
      
      //index of the array
      var index = 0;

      //x and y position of the cars
      var x = 150 ;
      var y;

      for(var plr in allPlayers){

        index = index + 1 ;

        x = x + 200;

        y = displayHeight*3-250 - allPlayers[plr].distance;
        
        cars[index-1].x = x;
        cars[index-1].y = y;

        if (index === player.index){
          fill("red");
          ellipse(x,y,60,60);
          cars[index - 1].shapeColor = "red";
          camera.position.x = displayWidth/2;
          camera.position.y = cars[index-1].y;
        }
       
        textSize(15);
        text(allPlayers[plr].name + ": " + allPlayers[plr].distance, 120,display_position)
      }

    }

    if(keyIsDown(UP_ARROW) && player.index !== null){
      player.distance +=50
      player.update();
    }

    if(player.distance > displayHeight*15-550){
      gameState = 2;
      player.rank+=1;
      Player.updateCarsAtEnd(player.rank);
      this.showRank();
    }
   
    drawSprites();
  }

  showRank(){
    swal({
       title: `Awesome!${"\n"}Rank${"\n"}${player.rank}`,
        text: "You reached the finish line successfully",
         imageUrl: "https://raw.githubusercontent.com/vishalgaddam873/p5-multiplayer-car-race-game/master/assets/cup.png", 
          imageSize: "100x100",
           confirmButtonText: "Ok" });
  }
  
  end(){
    console.log(player.rank());
    // if(count===1)
    // alert("GAME ENDED");
    // count++;
  }
}
