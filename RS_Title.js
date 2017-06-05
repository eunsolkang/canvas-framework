class TitleState{
  constructor(){
    this.imgBackground00 = resourcePreLoader.GetImage('file/img/background/background00.png')
    this.imgBackground01 = resourcePreLoader.GetImage('file/img/background/background01.png')
    this.imgBackground02 = resourcePreLoader.GetImage('file/img/background/background02.png')
  }
  Init(){

  }
  Render(){
    var canvas = document.getElementById("canvas");
    var ctx  = canvas.getContext("2d");
    // 배경 화면 그리기
    ctx.drawImage( this.imgBackground00, 0, 0 , canvasWidth, canvasHeight);
  }
  Update(){

  }
  onMouseDown(){
    var playerGameState = new PlayGameState();
    ChangeGameState( playerGameState );
  }
}
