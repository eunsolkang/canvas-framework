class ItemBalloon{
  constructor(){
    this.width = 30;
    this.height = 100;
    this.sprBalloon = new SpriteAnimation(resourcePreLoader.GetImage('file/img/item/balloon.svg'), 30 , 70, 28 * 5 , 70 * 5 , 3, 1);
    this.x = canvasWidth;
    this.y = 0;
    this.type = "item";
    this.isGet = false;
    this.Invalid();
  }
  Render(){
    console.log(offsetY);
    if( this.isGet )
      return;
    var canvas = document.getElementById("canvas");
    var ctx  = canvas.getContext("2d");
    ctx.strokeRect(this.collisionBox.left , this.collisionBox.top, 30 , 70 );
    ctx.stroke();
    this.sprBalloon.Render( ctx );
  }
  Update(){
    this.sprBalloon.Update();
    this.x -= 3;
    this.Invalid();
  }

  SetPosition( x , y ){
    this.sprBalloon.SetPosition( x, y );
    this.Invalid();
  }
  Translate( x , y ){
    this.sprCoin.Translate( x, y );
    this.Invalid();
  }
  Invalid(){
    this.y = this.sprBalloon.y;
    this.collisionBox
    = {left: this.sprBalloon.x  ,top : this.sprBalloon.y ,
        right: this.sprBalloon.x + 30 , bottom: this.sprBalloon.y + 70  };
  }
  CheckCollision( player ){
    if( this.isGet )
      return;
    if( this.collisionBox.left < player.right && this.collisionBox.bottom > player.top
             && this.collisionBox.right > player.left && this.collisionBox.top < player.bottom )
    {
        playGameState.Notification( "PLAYER_GET_COIN" );
        console.log('GET-COIN');
        this.isGet = true;
    }
  }
}
