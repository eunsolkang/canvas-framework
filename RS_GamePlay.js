var offsetX = 0,
    offsetY = 0;
var zoom = 1.3;
var playGameState;
var moveTouch = false;

var sMoveX, sMoveY;
var eMoveX, eMoveY;
class PlayGameState{
  constructor(){
    this.background = new PGBackground();
    this.playground = new PG_PlayGround();
    this.player = new PGPlayer();
    this.isGameOver = false;
    this.score = 0;
    this.touch = false;
    this.right = false;
    this.left = false;
    this.leftCount = 0;
    this.rightCount = 0;

  }
  Init(){

  }
  Render(){
    var canvas = document.getElementById("canvas");
    var ctx  = canvas.getContext("2d");
    // 후방 배경 화면 그리기
    this.background.Render();
    // 플레이어 그리기
    this.player.Render();
    //오브젝트 그리기
    this.playground.Render();
  }
  Update(){
    if( inputSystem.isKeyDown( 39 ) || this.right)
    {
        this.player.Right( true );
        this.rightCount++;
        if(this.rightCount > 50)
        {
          this.rightCount = 0;
          this.right = false;
        }
        this.player.Right( true , this.rightCount);
    }
    if( !inputSystem.isKeyDown( 39 ) && !this.right)
    {
        this.player.Right( false );
    }
    if( inputSystem.isKeyDown( 37 ) || this.left)
    {
        this.leftCount++;
        if(this.leftCount > 50)
        {
          this.leftCount = 0;
          this.left = false;
        }
        this.player.Left( true , this.leftCount);
    }
    if( !inputSystem.isKeyDown( 37 ) && !this.left)
    {
        this.player.Left( false );
    }
    if( inputSystem.isKeyDown( 32 ) || this.touch)
    {
        this.player.Jump( true );
    }
    if( !inputSystem.isKeyDown( 32 ) && !this.touch)
    {
        this.player.Jump( false );
    }
    this.background.Update();
    this.playground.Update();
    this.playground.CheckCollision( this.player.collisionBox );
    this.player.Update();

  }
  Notification(msg){
    switch( msg )
    {
        case "COLLISION_ELEGATOR":
          // 악어와 충돌 : 게임 오버
          this.isGameOver = true;
            break;
        case "PLAYER_GET_COIN":
          // 코인을 습득하면 10점 추가
          this.score += 10;
          break;
    }
  }

  onTouchStart(e){
    inputSystem.mouseX = e.touches[0].clientX;
    inputSystem.mouseY = e.touches[0].clientY;
    sMoveX = inputSystem.mouseX;
    sMoveY = inputSystem.mouseY;

    if( this.isGameOver )
        this.Restart();
    else{
        this.touch = true;
    }
  }
  onTouchEnd(e){
    inputSystem.mouseX = e.changedTouches[0].clientX;
    inputSystem.mouseY = e.changedTouches[0].clientY;
    eMoveX = inputSystem.mouseX;
    eMoveY = inputSystem.mouseY;

    if (eMoveX - sMoveX > 10)
    {
      this.right = true;

    }
    else if(eMoveX - sMoveX < -40)
    {
      this.left = true;

    }

    if( this.isGameOver )
        this.Restart();
    else
        this.touch = false;
  }
  onTouchMove(){
    moveTouch = true;
  }
}
