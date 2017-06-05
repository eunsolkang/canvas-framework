class PGPlayer{
  constructor(){
    this.width = 50;
    this.height = 100;
    this.sprPlayer = new SpriteAnimation(
    resourcePreLoader.GetImage("file/img/object/aa.png"),
     this.width / zoom , this.height / zoom, 200, 400, 0 , 0 );
     this.Init();
  }
  Init(){
    this.x = canvasWidth / 2;
    this.y = canvasHeight / 2;
    this.isFlying = false;
    this.isRight = false;
    this.isLeft = false;
    this.Invalid();
  }
  Render(){
    var canvas = document.getElementById("canvas");
    var ctx  = canvas.getContext("2d");

    this.sprPlayer.Render( ctx );
  }
  Update(){
    console.log(offsetY);
    this.sprPlayer.Update();
    if( this.isFlying == true)
    {
      if(this.y > canvasHeight / 2 && offsetY == 0)
      {
        this.y -= 2;
      }
      else if(this.y  == (canvasHeight / 2) && offsetY < (canvasHeight * zoom - canvasHeight) - 20){
        offsetY += 2
      }
      else if (this.y > 0){
        this.y -= 2;
        zoom -= 0.002
        offsetY -= 1
      }
    }
    else{
      if(this.y < canvasHeight - this.height / 2 && offsetY == 0 && this.y >= canvasHeight / 2)
      {
        this.y += 2;
      }
      else if(this.y  == canvasHeight / 2 && offsetY <= (canvasHeight * zoom - canvasHeight) - 20 ){
        offsetY -= 2
      }
      else if (this.y < canvasHeight - this.height / 2 ){
        this.y += 2;
        zoom += 0.002
        offsetY += 1
      }


    }
    if( this.isRight == true )
    {
      this.x += 4;
    }
    if( this.isLeft == true )
    {
      this.x -= 4;
    }
    this.Invalid();
  }
  Shangus(){

  }
  Jump( state ){
    if( this.isFlying == false && state == true )
    {
        this.isFlying = true;
    }
    else if( this.isFlying == true && state == false )
    {
      this.isFlying = false;
    }
  }
  Right( state ){
    if( this.isRight == false && state == true)
    {
      this.isRight = true;
    }
    else if( this.isRight == true && state == false)
    {
      this.isRight = false;
    }
  }
  Left( state )
  {
    if( this.isRight == false && state == true)
    {
      this.isLeft = true;
    }
    else if( this.isLeft == true && state == false)
    {
      this.isLeft = false;
    }
  }
  Invalid(){
    this.sprPlayer.SetPosition( this.x, this.y  );
    this.sprPlayer.SetSize( this.width * zoom, this.height * zoom);
  }
}
