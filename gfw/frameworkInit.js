var canvasWidth,
    canvasHeight;
function onGameInit()
{
    GAME_FPS = 30;
    debugSystem.debugMode = true;

    resourcePreLoader.AddImage( "file/img/background/background00.png" );
    resourcePreLoader.AddImage( "file/img/background/background01.png" );
    resourcePreLoader.AddImage( "file/img/background/background02.png" );
    resourcePreLoader.AddImage( "file/img/object/aa.png" );
    resourcePreLoader.AddImage( "file/img/bird/bird.svg" );

    // 게임 초기 시작 상태 설정

    canvasWidth = $(window).width();
    canvasHeight = $(window).height();

    canvas.width = canvasWidth
    canvas.height = canvasHeight
    after_loading_state = new TitleState();
    gameLoop();
}
window.addEventListener("load", onGameInit, false);
