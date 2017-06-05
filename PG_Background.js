class PGBackground{
  constructor(){
    this.imgBackground00 = resourcePreLoader.GetImage('file/img/background/background00.png');
    this.imgBackground01 = resourcePreLoader.GetImage('file/img/background/background01.png');
    this.imgBackground02 = resourcePreLoader.GetImage('file/img/background/background02.png');
    this.backgroundLen = 0;
    this.backgroundLenCount = 0;
    this.backgroundCount = 0;
    this.backgroundArr = new Array();
    this.backgroundSpeed = 3;
    this.Init();

  }
  Init(){
    if(this.imgBackground00 == undefined)
    {
      console.log('BackGround00 Load ERROR!!');
    }
    if(this.imgBackground01 == undefined)
    {
      console.log('BackGround01 Load ERROR!!');
    }
    if(this.imgBackground02 == undefined)
    {
      console.log('BackGround02 Load ERROR!!');
    }
    this.backgroundArr.push(this.imgBackground00);
    this.backgroundArr.push(this.imgBackground01);
  }
  Render(){
    var canvas = document.getElementById("canvas");
    var ctx = canvas.getContext("2d");

    for(var i=0; i<this.backgroundArr.length; i++)
    {
        var background_sx = (offsetX + (canvasWidth * this.backgroundLen)) * zoom;
        var background_sy = offsetY * zoom - (canvasHeight * zoom - canvasHeight)
        ctx.drawImage(this.backgroundArr[i], background_sx, background_sy, canvasWidth * zoom, canvasHeight * zoom);
        this.backgroundLen++;
    }
    if((-offsetX) % canvasWidth < this.backgroundSpeed && -offsetX > 3)
    {
      if(this.backgroundCount == 0)
      {
        this.backgroundArr.push(this.imgBackground02);
        this.backgroundCount++;
      }
      else if(this.backgroundCount == 1)
      {
        this.backgroundArr.push(this.imgBackground00);
        this.backgroundCount++;
      }
      else if(this.backgroundCount == 2)
      {
        this.backgroundArr.push(this.imgBackground01);
        this.backgroundCount = 0;
      }
      this.backgroundArr.splice(0, 1);
      this.backgroundLenCount++;
    }
    this.backgroundLen = this.backgroundLenCount;
  }
  Update(){
    offsetX -= this.backgroundSpeed
  }
}
