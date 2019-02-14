class Form {
	constructor(InitX,InitY,FinalX,FinalY,couleur, epaisseur){
		this.couleur = couleur;
		this.epaisseur = epaisseur;
		this.InitX = InitX;
		this.InitY = InitY;
		this.FinalX = FinalX;
		this.FinalY = FinalY;
	}
	getCouleur(){
		return this.couleur;
	}
	getEpaisseur(){
		return this.epaisseur;
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
		return this.InitY;
	}
}

class Rectangle extends Form{
	
	constructor(InitX,InitY,FinalX,FinalY, epaisseur, couleur) {
		super(InitX,InitY,FinalX,FinalY,couleur,epaisseur);	
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
	constructor(InitX,InitY,FinalX,FinalY, epaisseur, couleur) {
		super(InitX,InitY,FinalX,FinalY,couleur,epaisseur);
	}
}
