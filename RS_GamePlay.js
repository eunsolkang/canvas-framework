var offsetX = 0,
    offsetY = 0;
var zoom = 1.3;
class PlayGameState{
  constructor(){
    this.background = new PGBackground();
    this.playground = new PG_PlayGround();
    this.player = new PGPlayer();
    this.isGameOver = false;
    this.score = 0;
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
    if( inputSystem.isKeyDown( 39 ) )
    {
        this.player.Right( true );
    }
    if( !inputSystem.isKeyDown( 39 ) )
    {
        this.player.Right( false );
    }
    if( inputSystem.isKeyDown( 37 ) )
    {
        this.player.Left( true );
    }
    if( !inputSystem.isKeyDown( 37 ) )
    {
        this.player.Left( false );
    }
    if( inputSystem.isKeyDown( 32 ) )
    {
        this.player.Jump( true );
    }
    if( !inputSystem.isKeyDown( 32 ) )
    {
        this.player.Jump( false );
    }
    //
    this.background.Update();
    this.playground.Update();
    this.player.Update();
  }
  // Notification(msg){
  //   switch( msg )
  //   {
  //       case "COLLISION_ELEGATOR":
  //       // 악어와 충돌 : 게임 오버
  //       this.isGameOver = true;
  //       break;
  //       case "PLAYER_GET_COIN":
  //       // 코인을 습득하면 10점 추가
  //       this.score += 10;
  //       break;
  //   }
  // }
}
