
// La création d'un Dnd requière un canvas et un interacteur.
// L'interacteur viendra dans un second temps donc ne vous en souciez pas au départ.
function DnD(canvas, interactor) {
	var xInit = 0;
	var yInit = 0;
	var xFin = 0;
	var yFin = 0;
	
	var p = x:0,y:0;

	this.Pression = function(evt){
		this.p = getMousePosition(canvas,evt);
		this.xInit = this.p.x;
		this.yInit = this.p.y;
	}.bind(this);
	
	this.Deplacement = function(evt){
		this.p = getMousePosition(canvas,evt);
	}.bind(this);
	
	this.Relachement = function(evt){
		this.p = getMousePosition(canvas,evt);
		this.xFin = this.p.x;
		this.yFin = this.p.y;
	}.bind(this);
	
	canvas.addEventListener('Drag', this.Pression);
	canvas.addEventListener('move', this.Deplacement);
	canvas.addEventListener('Drop', this.Relachement);

};


// Place le point de l'événement evt relativement à la position du canvas.
function getMousePosition(canvas, evt) {
  var rect = canvas.getBoundingClientRect();
  return {
    x: evt.clientX - rect.left,
    y: evt.clientY - rect.top
  };
};



