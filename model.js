class Form {
	constructor(couleur, epaisseur){
		this.couleur = couleur;
		this.epaisseur = epaisseur;
	}
}

class Rectangle extends Form{
	constructor(couleur, epaisseur,LeftX ,LeftY ,l,h) {
		this.couleur = couleur;
		this.epaisseur = epaisseur;
		this.LeftX = LeftX;
		this.LeftY = LeftY
		this.l = l;
		this.h = h;
	}
	
}

class Drawing{
	constructor(forms){
		this.forms = forms;
	}
	getForms() {
		return this.forms;
	}
}

class Line extends Form{
	constructor(couleur, epaisseur,InitX,InitY,FinalX,FinalY) {
		this.couleur = couleur;
		this.epaisseur = epaisseur;
		this.InitX = InitX;
		this.InitY = InitY;
		this.FinalX = FinalX;
		this.FinalY = FinalY;
		
	}
	getFinalX(){
		return this.FinalX;
	}
	getFinalY(){
		return this.FinalY;
	}
	getInitX(){
		return this.InitX;
	}
	getInitY(){
		return this.InitX;
	}
}
