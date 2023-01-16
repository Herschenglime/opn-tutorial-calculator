preload(libs['GUI'])

//Constructor of the class
var CalcButton=function(label, action){

    this.internalButton = new Button(label)
    this.action = action

    this.internalButton.whenClicked().then(()=>{
        this.action()
    })


    // DO NOT RETURN ANYTHING OR IT BREAKS USING CLASS METHODS
};

CalcButton.prototype.doSomething = function(input){
    this.action()
}


var main=function(args){
	//Export the definition of this class like that:
	exportData({CalcButton:CalcButton});
}
