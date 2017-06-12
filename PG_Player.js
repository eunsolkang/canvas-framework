class PGPlayer{
  constructor(){
    this.width = 75;
    this.height = 100;
    this.sprPlayer = new SpriteAnimation(
    resourcePreLoader.GetImage("file/img/object/aa.png"),
     this.width  , this.height , 158, 222, 4 ,2 );
     this.Init();

  }
  Init(){
    this.x = canvasWidth / 2;
    this.y = canvasHeight / 2;
    this.isFlying = false;
    this.isRight = false;
    this.isLeft = false;
    this.dl = 2;
    this.dr = 2;
    this.leftCnt = 0;
    this.rightCnt = 0;
    this.collisionBox
    = {left: this.x + 30 ,top : this.y + 30, right: this.x + 70, bottom: this.y + 100 };
    this.Invalid();
  }
  Render(){
    var canvas = document.getElementById("canvas");
    var ctx  = canvas.getContext("2d");
    ctx.strokeRect(this.collisionBox.left, this.collisionBox.top, 70 / 1.3 * zoom , 100 / 1.3 * zoom)
    this.sprPlayer.Render( ctx );
  }
  Update(){
    // console.log(offsetY);
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
      this.x += this.dr;
      if(this.rightCnt < 20)
      {
        this.dr += 0.17
      }
      else{
        this.dr -= 0.13
      }
    }
    else{
      this.dr = 2;
    }
    if( this.isLeft == true )
    {
      this.x -= this.dl;
      if(this.leftCnt < 20)
      {
        this.dl += 0.17
      }
      else{
        this.dl -= 0.13
      }

    }
    else{
      this.dl = 2
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
  Right( state , cnt){
    if( this.isRight == false && state == true)
    {
      this.isRight = true;
    }
    else if( this.isRight == true && state == false)
    {
      this.isRight = false;
    }
    this.rightCnt = cnt;
  }
  Left( state , cnt)
  {
    if( this.isRight == false && state == true)
    {
      this.isLeft = true;
    }
    else if( this.isLeft == true && state == false)
    {
      this.isLeft = false;
    }
    this.leftCnt = cnt;
  }
  Invalid(){
    this.sprPlayer.SetPosition( this.x, this.y  );
    this.sprPlayer.SetSize( this.width * zoom, this.height * zoom);
    this.collisionBox
    = {left: this.x + 10 ,top : this.y + 20, right: this.x + 70  , bottom: this.y + 100  };
  }
}
