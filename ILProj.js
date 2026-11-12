//variables
	var gCount = 0;
	var rCount = 0;
//functions
//simplifying functions
function makeText(text, tclass){
	//console.log("in makeText"); //test
	const newText = document.createElement("p");
	newText.innerText = text;
	newText.classList.add(tclass);
	document.body.appendChild(newText);
}
function makeButton(btext, bID, bOC){
	const newButton = document.createElement("button");
	newButton.classList.add("C");
	newButton.innerHTML = btext;
	newButton.setAttribute("id", bID);
	newButton.setAttribute("onclick", bOC);
	document.body.appendChild(newButton);
}
//question functions
//funny question
function funnyQ(){
	makeText("If your shirt is not tucked into your trousers, are your trousers tucked into your shirt?","NB");
	makeButton(">No","noF","noF()");
	makeButton(">Yes","yesF","yesF()");
}
//question 3
function threeQ(){
	makeText("Is it ever right to lie to protect someone?","NB");
	makeButton(">No","no3","no3()");
	makeButton(">Yes","yes3","yes3()");
}
//question 7
function sevenQ(){
	makeText("Is selfishness always wrong, or sometimes necessary?","NB");
	makeButton(">Wrong","w7","w7()");
	makeButton(">Necessary","n7","n7()");
}
//question 1
function oneQ(){
	makeText("Is regret a sign that you made the wrong choice, or simply proof that you have grown since you made it?","NB");
	makeButton(">Wrong","w1","w1()");
	makeButton(">Grown","g1","g1()");
}
//question 4
function fourQ(){
	makeText("Do good intentions matter if the outcome is bad?","NB");
	makeButton(">No","no4","no4()");
	makeButton(">Yes","yes4","yes4()");
}
//question 2
function twoQ(){
	makeText("Do you believe in luck, or do you think everything happens for a reason?","NB");
	makeButton(">Reason","r2","r2()");
	makeButton(">Luck","l2","l2()");
}
//question 6
function sixQ(){
	makeText("Can a law be legal but still immoral?","NB");
	makeButton(">No","no6","no6()");
	makeButton(">Yes","yes6","yes6()");
}
//question 5
function fiveQ(){
	makeText("Is revenge ever justified?","NB");
	makeButton(">No","no5","no5()");
	makeButton(">Yes","yes5","yes5()");
}
//question who do you agree with?
function wdyawQ(){
	makeText("Who do you agree with?","NB");
	makeButton(">Sheep","hr1","endCheck()"); //flesh out idea for end check later
	makeButton(">Goat","sg1","endCheck()");
	makeButton(">Neither","nb1","trueEnd()");
}
//question who do you agree with? second take
function wdyawQ(){
	makeText("Who do you agree with?","NB");
	makeButton(">Sheep","hr2","goldEnd()"); //flesh out idea for end check later
	makeButton(">Goat","sg2","redEnd()");
	makeButton(">Neither","nb2","trueEnd()");
}
//answer functions
//intro answers
function sheep(){
	//console.log("in sheep"); //test
	makeText("Good as all things should be.","HR");
	makeText("I don’t believe that it is how things should be.","SG");
	makeText("Please answer the next question, Choice Maker.","NB");
	rCount++;
	//console.log("gCount= "+gCount+", rCount= "+rCount) //test
	document.getElementById(">Sheep").disabled=true;
	document.getElementById(">Goat").disabled=true;
	funnyQ();
}
function goat(){
	//console.log("in goat"); //test
	makeText("I am rather disappointed.","HR");
	makeText("Your disappointment means something good is happing.","SG");
	makeText("Please answer the next question, Choice Maker.","NB");
	gCount++;
	//console.log("gCount= "+gCount+", rCount= "+rCount) //test
	document.getElementById(">Sheep").disabled=true;
	document.getElementById(">Goat").disabled=true;
	funnyQ();
}
//funny answers
function noF(){
	//console.log("Made it noF"); //test
	makeText("I am glad this Choice Maker is not a fool.","HR");
	makeText("You’re no fun at all.","SG");
	makeText("Let us move on please.","NB");
	rCount++;
	document.getElementById("noF").disabled=true;
	document.getElementById("yesF").disabled=true;
	slecAfterFQ();
}
function yesF(){
	//console.log("Made it yesF"); //test
	makeText("That is quite preposterous.","HR");
	makeText("It’s called fun. Ever had it?","SG");
	makeText("Let us move on please.","NB");
	gCount++
	document.getElementById("noF").disabled=true;
	document.getElementById("yesF").disabled=true;
	slecAfterFQ();
}
//3 answers
function no3(){
	makeText("You need to have more fun, Choice Maker. Lying is fun.","SG");
	makeText("The Choice Maker picked well, you shut your mouth.","HR");
	makeText("The point of this question is about if it’s wrong to lie in a specific circumstance not about if lying is wrong in general.","NB");
	makeText("Well, lying is always wrong.","HR");
	rCount++;
	document.getElementById("no3").disabled=true;
	document.getElementById("yes3").disabled=true;
	fourQ();
}
function yes3(){
	makeText("It is always wrong to lie no matter what the contents, how could you choose such a thing.","HR");
	makeText("You need to lighten up, lying is fun.","SG");
	makeText("I would see some merit to saying that lying to protect someone is valid.","NB");
	makeText("Are you siding with THEM now??","HR");
	makeText("About time.","SG");
	makeText("No, I am not. I also see why you would choose not to lie. Lies can hurt people no matter what the context. *Sigh*","NB");
	gCount++;
	document.getElementById("no3").disabled=true;
	document.getElementById("yes3").disabled=true;
	twoQ();
}
//7 answers
function w7(){
	//ad dialog later
	rCount++;
	document.getElementById("w7").disabled=true;
	document.getElementById("n7").disabled=true;
	sixQ();
}
function n7(){
	//add dialog later
	gCount++;
	document.getElementById("w7").disabled=true;
	document.getElementById("n7").disabled=true;
	fiveQ();
}
//1 answers
function w1(){
	//ad dialog later
	rCount++;
	document.getElementById("w1").disabled=true;
	document.getElementById("g1").disabled=true;
	twoQ();
}
function g1(){
	//add dialog later
	gCount++;
	document.getElementById("w1").disabled=true;
	document.getElementById("g1").disabled=true;
	sixQ();
}
//specific senerio things that need to call answers
function slecAfterFQ(){
	if(rCount>gCount){ //ram higher
		threeQ();
	}
	else if(gCount>rCount){ //goat higher
		sevenQ();
	}
	else{ //equal
		oneQ();
	}
}
