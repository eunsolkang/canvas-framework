class InputSystem{
  constructor() {
    this.mouseX = 0;
    this.mouseY = 0;
    // 키 입력 정보 배열
    this.isKeyPressed = [];
  }
  isKeyDown(keyCode){
    if( this.isKeyPressed[keyCode] == true ){
      return true;
    }
    else
      return false;
  }
  getMousePositionX(){
    return this.mouseX;
  }
  getMousePositionY(){
    return this.mouseY;
  }
}
function onMouseMove (e)
{
  var canvas = document.getElementById("canvas");

  inputSystem.mouseX = e.clientX - theCanvas.offsetLeft;
  inputSystem.mouseY = e.clientY - theCanvas.offsetTop;
}

$(window).keydown(function(e){
  inputSystem.isKeyPressed[e.keyCode] = true;
});
$(window).keyup(function(e){
  inputSystem.isKeyPressed[e.keyCode] = false;
});

var inputSystem = new InputSystem();
