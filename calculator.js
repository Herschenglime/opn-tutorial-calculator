//loading external libraries
preload(libs['GUI'])
preload(libs['WebStyle']).before(function (args) {
	//this will run before preloading the above libraries and will display the loading progress.
	args.app.showLoading();
});


//loading your local libraries
preload('CalcButton.js');

//To run this test do send an HTTP request to index.html?app=gui_template.js

//You can build your own interface using the GUI elements listed here:
//https://research.dwi.ufl.edu/op.n/file/bslwr55v857mfhfp@research.dwi.ufl.edu_op.n/api

//PLEASE DO NOT MODIFY THIS TEMPLATE
//INSTEAD MAKE A COPY AND EDIT IT THERE

var main = function (args) {
	//First we clear the contents to remove the loading animation
	args.app.clearContents();
	console.log('Your main started!');

	var area = args.app.getContentDiv();

	var myStyle = new WebStyle();

	var outer = new SplitLayout({ parentDiv: area, orientation: 'horizontal', sticky: 'first', editable: true });
	outer.setStickySize('400px');
	outer.applyStyle(myStyle);



	//calc entry section
	var left = outer.getFirstContainer();

	//Example on how to edit the style of a GUI Element
	left.appendCustomStyle({
		applyStyle: function (left) {
			opn.set(left.div.style, {
				//backgroundColor:'rgb(8,75,129)',
				//maxWidth:'80px',
				padding: '5px'
			})
		}
	})

	// calc trace - placed up here because left affects it
	var right = outer.getSecondContainer();
    var rightLabel = new Label('Calculator trace')
    right.append(rightLabel)

	// Example on how to edit the style of a GUI Element
	right.appendCustomStyle({
		applyStyle: function (right) {
			opn.set(right.div.style, {
				//backgroundColor:'rgb(8,75,129)',
				//maxWidth:'80px',
				padding: '5px'
			})
		}
	})

    var traceSpace = new ElementGroup()

    right.append(traceSpace)

	var my_label = new Label("Calculator Entry");
	left.append(my_label);

	var entryBox = new TextField({ name: entryBox, placeholder: "Press some buttons" })
	entryBox.setEditable(false)
	left.append(entryBox)

    var entryVal = ''

	var numberButtons = new ButtonGroup()
	numberButtons.columns = 3
	numberButtons.orientation = 'matrix'

    
	//wacky for loop to put buttons in convenient order
	for (let i = 7; i > 0; i -= 3) {

		for (let j = 0; j < 3; j++) {
			let passedButton = new CalcButton((i+j).toString(), () => {
                entryVal += i
                entryBox.setText(entryVal)
            }).internalButton

			numberButtons.append(passedButton)
		}
	}

	left.append(numberButtons)

	//whenClicked example
	// my_button.whenClicked().then((my_button)=>{
	// 	console.log("I clicked the button!");
	// })

    //function buttons
	var functionButtons = new ButtonGroup()
	functionButtons.columns = 3
	functionButtons.orientation = 'matrix'

    //= button functionality
    functionButtons.append(new CalcButton("=", () => {
        traceSpace.append(new Label(entryVal))
        entryVal = ""
    }).internalButton)

    left.append(functionButtons)

}
