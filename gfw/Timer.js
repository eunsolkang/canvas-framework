class Timer{
  constructor(){
    this.nowFrame = 0;
    timerSystem.timers.push( this );
  }
  Reset(){
    this.nowFrame = 0;
  }
}

class TimerSystem{
  constructor(){
    this.timers = new Array();
  }
  Update(){
    for( var i = 0; i < this.timers.length; i++ )
    {
        this.timers[i].nowFrame += 1000 / GAME_FPS;
    }
  }
}

var timerSystem = new TimerSystem();
