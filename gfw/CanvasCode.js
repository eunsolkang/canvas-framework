CanvasRenderingContext2D.prototype.drawLine = function(sx, sy, ex, ey) {
	this.beginPath();
	this.moveTo(sx,sy);
	this.lineTo(ex,ey);
	this.stroke();

}
CanvasRenderingContext2D.prototype.strokeCircle = function(x, y, r)
{
	this.beginPath();
	this.arc(x, y, r, 0, 2*Math.PI);
	this.stroke();
}
CanvasRenderingContext2D.prototype.fillCircle = function(x, y, r)
{
	this.beginPath();
	this.arc(x, y, r, 0, 2*Math.PI);
	this.fill();
}



function RandomNextInt ( max )
{
	return 1 + Math.floor( Math.random() * max );
}

CanvasRenderingContext2D.prototype.strokeCircleColor = function(x, y, r, color_1, color_2)
{
    this.beginPath();
    this.arc(x, y, r, 0, 2*Math.PI);
    var brush = ctx.createRadialGradient(x,y,0,x,y,r);
    brush.addColorStop(0, color_1);
    brush.addColorStop(1, color_2);
    this.fillStyle = brush;
    this.fill();
}

CanvasRenderingContext2D.prototype.fillRoundRect = function(x, y, w, h, r){
	this.beginPath();
	this.roundRect(x, y, w, h, r);
	this.fill();
}
CanvasRenderingContext2D.prototype.strokeRoundRect = function(x, y, w, h, r){
	this.beginPath();
	this.roundRect(x, y, w, h, r);
	this.stroke();
}
CanvasRenderingContext2D.prototype.roundRect = function(x, y, w, h, r){
	this.moveTo(x+r, y);
	this.arcTo(x+w,y,x+w,y+h,r);
   	this.arcTo(x+w,y+h,x,y+h,r);
   	this.arcTo(x,y+h,x,y,r);
   	this.arcTo(x,y,x+w,y,r);
}
