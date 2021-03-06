class Player {
  constructor(){
    this.index = null;
    this.distance = 0;
    this.name = null;
    this.rank = null;
  }

  getCount(){
    var playerCountRef = database.ref('playerCount');
    playerCountRef.on("value",(data)=>{
      playerCount = data.val();
    })
  }

  updateCount(count){
    database.ref('/').update({
      playerCount: count
    });
  }

  update(){
    var playerIndex = "players/player" + this.index;
    database.ref(playerIndex).set({
      name:this.name,
      distance:this.distance
    });
  }

  static getPlayerInfo(){
    var playerInfoRef = database.ref('players');
    playerInfoRef.on("value",(data)=>{
      allPlayers = data.val();
    })
  }

  getRunnersAtEnd(){
    var databaseRef=database.ref("RunnersAtEnd");
    databaseRef.on("value",(data)=>{
      this.rank=data.val();
    })
  }

  static updateRunnersAtEnd(rank){
    database.ref("/").update({
      RunnersAtEnd:rank
    })
  }

  WinMessage(){ 
    fill("green");
    textSize(30);
    text("Well Done! You finished the Race",camera.position.x-100,120);
  };

}
