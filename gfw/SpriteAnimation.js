class SpriteAnimation{
  constructor(img, width, height, imgWidth, imgHeight, totalFrameCount, fps)
  {
    this.x      = 0;
    this.y      = 0;
    this.img    = img;

    this.width  = width;
    this.height = height;

    this.imgWidth = imgWidth;
    this.imgHeight = imgHeight;

    this.totalFrameCount = totalFrameCount;
    this.currentFrame = 0;

    this.animationTimer = new Timer();
    this.fps = fps;
  }
  Render( context ){
    context.drawImage( this.img,
         this.imgWidth * this.currentFrame, 0,
         this.imgWidth, this.imgHeight,
         this.x, this.y,
         this.width, this.height );
  }
  ObjRender( context ){
    context.drawImage( this.img,
         this.imgWidth * this.currentFrame, 0,
         this.imgWidth, this.imgHeight,
         this.x, this.y + offsetY,
         this.width * zoom, this.height * zoom);
  }
  Update( context ){
    if( this.animationTimer.nowFrame > 1000 / this.fps )
    {
        this.currentFrame++;
        if( this.currentFrame >= this.totalFrameCount )
            this.currentFrame = 0;

        this.animationTimer.Reset();
    }
  }
  Translate( x, y ){
    this.x += x;
    this.y += y;
  }
  SetPosition( x, y ){
    this.x = x;
    this.y = y;
  }
  SetSize(w, h){
    this.width = w;
    this.height = h;
  }
}
