
//Constructor of the class
var MyClass=function(input){
	
	//define properties of the class like that
	this.property1=100;
	
};

//Define public methods of the class like that:
MyClass.prototype.method1=function(input){
	
	//if you have a local function defined inside a method it MUST be declared like that:
	//DO NOT USE THE "function(arguments){...}" notation because you will not be able to access the keyword "this".
	var a_local_function_that_returns_a_string=(a,b,c)=>{
		
		//the code of the local function goes here
		
		return "This is a string. The value of property1 is: "+this.property1;
		
	};
	
	//access properties of this class like that:
	var value=this.property1;
	
	return a_local_function_that_returns_a_string();
};


var main=function(args){
	//Export the definition of this class like that:
	exportData({MyClass:MyClass});	
}