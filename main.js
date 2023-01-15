//You can preload classes that you defined in other JS files like that:
preload('MyClass.js');

var main=function(args){
	
	//This is a div element in which your app will be rendered.
	var area=args.app.getContentDiv();
	
	//Example:
	area.innerHTML='Check out my cool calculator!';
	
	//You can use preloaded classes like that:
	var a=new MyClass();
	console.log(a.method1());//check what was printed out on the console of your browser
	
	//You can create div elements like that:
	var square=document.createElement('div');
	
	//You can set the style attributes of a div element like that:
	opn.set(square.style,{
		width:'100px',
		height:'100px',
		backgroundColor:'rgb(255,0,0)'
	});
	//Note that in JS all hyphens in CSS attributes are removed and the following character is capitalized.
	//Example  CSS: background-color   JS: backgroundColor
	
	//You can attach divs to other divs like that:
	area.appendChild(square);
}
