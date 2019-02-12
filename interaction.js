
// La création d'un Dnd requière un canvas et un interacteur.
// L'interacteur viendra dans un second temps donc ne vous en souciez pas au départ.
function DnD(canvas, interactor) {
	var xInit = 0;
	var yInit = 0;
	var xFin = 0;
	var yFin = 0;
	
	var isPressed = false
	

	this.Pression = function(evt){
		isPressed = true
		var p = getMousePosition(canvas,evt);
		this.xInit = p.x;
		this.yInit = p.y;
		console.log(p.x);
		console.log(p.y);
	}.bind(this);
	
	this.Deplacement = function(evt){
		if(isPressed){
		var p = getMousePosition(canvas,evt);
		console.log(p.x);
		console.log(p.y);
		}
	}.bind(this);
	
	this.Relachement = function(evt){
		isPressed = false;
		var p = getMousePosition(canvas,evt);
		this.xFin = p.x;
		this.yFin = p.y;
		console.log(p.x);
		console.log(p.y);
	}.bind(this);
	
	canvas.addEventListener('mousedown', this.Pression, false);
	canvas.addEventListener('mousemove', this.Deplacement, false);
	canvas.addEventListener('mouseup', this.Relachement, false);

};


// Place le point de l'événement evt relativement à la position du canvas.
function getMousePosition(canvas, evt) {
  var rect = canvas.getBoundingClientRect();
  return {
    x: evt.clientX - rect.left,
    y: evt.clientY - rect.top
  };
};



