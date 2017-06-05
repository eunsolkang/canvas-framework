class ResourcePreLoader{
  constructor(){
    this.isComplete = false;
    this.nowResourceLoadedCount = 0;
    this.intAllResourceCount = 0;
    this.arrResource = new Array();
    this.initResouceCount = 0;
  }
  AddImage(fileName){
    // 리소스 중복에 대한 처리
    for( var i = 0; i < this.arrResource.length; i++ )
    {
        if( this.arrResource[i].name == fileName )
        {
            debugSystem.Log( "WARN", "overlap resource "+ fileName );
            return;
        }
    }

    var img = new Image();
    img.src = fileName;
    img.addEventListener('load', onLoadImageResourceComplete, false);
    this.arrResource.push( {name : fileName, image : img } );
    this.intAllResourceCount++;

  }
  GetImage( fileName ){
    for (var i = 0; i<this.arrResource.length; i++)
    {
      if(this.arrResource[i].name == fileName)
      {
        return this.arrResource[i].image;
      }
    }
  }
}

var resourcePreLoader = new ResourcePreLoader();

function onLoadImageResourceComplete(){

  resourcePreLoader.nowResourceLoadedCount++;
  // 현재 리소스 수와 총 리소스 수 비교
  if( resourcePreLoader.nowResourceLoadedCount == resourcePreLoader.intAllResourceCount )
  {
    //모든 리소스 로딩 완료
    resourcePreLoader.isComplete = true;
  }
}

class LoadingState{
  constructor(){

  }
  Render(){
    var canvas = document.getElementById("canvas");
    var ctx  = canvas.getContext("2d");

    var totalResourceCount = resourcePreLoader.intAllResourceCount;
    var nowCompleteResourceCount = resourcePreLoader.nowResourceLoadedCount;
    ctx.fillStyle = 'white'
    ctx.fillText( "Now Loading. ." + nowCompleteResourceCount + "/" + totalResourceCount, 350, 280 );
  }
  Update(){
    if( resourcePreLoader.isComplete)
    {
        ChangeGameState( after_loading_state );
    }
  }
}
