class PG_PlayGround{
  constructor(){
    this.imgBird = resourcePreLoader.GetImage('file/img/bird/bird.svg');
    this.intBirdX = canvasWidth;
    this.intBIrdY = Math.floor((Math.random()*canvasHeight - 90 )+0)
    this.ObjectCode = {
      bird : 1,
    }
    this.Init();
  }
  Init(){
    this.arrObjects = new Array();
    this.AddObject( this.ObjectCode.bird );

  }
  Render(){
    var canvas = document.getElementById("canvas");
    var ctx  = canvas.getContext("2d");
    for(var i=0; i<this.arrObjects.length; i++)
    {
      this.arrObjects[i].ObjRender( ctx );
    }
  }
  Update(){
    for(var i=0; i<this.arrObjects.length; i++)
    {
      var obj = this.arrObjects[i];
      if(obj.Update)
      {
        obj.Update();
        obj.SetPosition( obj.x , obj.y );
        obj.x -= 5;
      }
    }
  }
  AddObject( type ){
    var obj;
    if ( type == this.ObjectCode.bird )
    {
      obj = new SpriteAnimation(this.imgBird, 80, 40, 150, 70, 4, 3);
      obj.SetPosition( this.intBirdX, this.intBIrdY );
    }
    this.arrObjects.push(obj)
  }

}
