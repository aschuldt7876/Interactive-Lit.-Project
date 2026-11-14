// I comend you more if you got here in your inspect mode serch for spoilers lol.
//good luck trying to understand it though. My comments are somewhat good but I relise my lables get confusing and inconsistant.
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
	newText.classList.add("all");
	document.body.appendChild(newText);
}
function makeButton(btext, bID, bOC){
	const newButton = document.createElement("button");
	newButton.classList.add("C");
	newButton.classList.add("all");
	newButton.innerHTML = btext;
	newButton.setAttribute("id", bID);
	newButton.setAttribute("onclick", bOC);
	document.body.appendChild(newButton);
}
function makeHeading(text, tclass){
	const newHeading = document.createElement("h1");
	newHeading.innerText = text;
	newHeading.classList.add(tclass);
	document.body.appendChild(newHeading);
}
function destroy(){
	var allText = document.getElementsByClassName("all");
	for(var i = 0; i<allText.length; i++){
		allText[i].style.display = "none";
	}
}
function endActionsG(){
	document.body.style.backgroundColor = "#A37D02";
	destroy();
	makeHeading("Welcome to the domain of the Heavenly Ram, where all is good and right. Please stay forever with good in your heart.", "HR");
}
function endActionsR(){
	document.body.style.backgroundColor = "#730E00";
	destroy();
	makeHeading("Welcome to the pad of Satanic Goat, crash on this couch forever. Nasty and bad for life.", "SG");
}
function specialdisable(){
	document.getElementById("hr1").disabled=true;
	document.getElementById("sg1").disabled=true;
	document.getElementById("nb1").disabled=true;
}
function specialdisable2(){
	document.getElementById("hr2").disabled=true;
	document.getElementById("sg2").disabled=true;
	document.getElementById("nb2").disabled=true;
}
//end check
function endCheckS(){
	specialdisable();
	if(rCount>gCount){
		goldEnd();
	}
	else{
		var bndialogtextwithldata = "It is true that Choice Maker's choices aligned with you "+ gCount +" times and with Ram "+ rCount +" times.";
		makeText("Of course you haven't been more right before now, Choice Maker.","HR");
		makeText("HOLD ON! I thought we had something special, Choice Maker. Why are you killing the vibe now?!","SG");
		makeText("Well Choice Maker has seen reason.","HR");
		makeText("I don't believe that.","SG");
		makeText(bndialogtextwithldata,"NB");
		makeText("Fine, let the slob get a false chance.","HR");
		makeText("Choice Maker knows what the best option is.","SG");
		makeText("*Sigh*","NB");
		wdyaw2Q();
	}
}
function endCheckG(){
	specialdisable();
	if(gCount>rCount){
		redEnd();
	}
	else{
		var bndialogtextwithldata = "It is true that Choice Maker's choices aligned with you "+ rCount +" times and with Goat "+ gCount +" times.";
		makeText("YES!","SG");
		makeText("Hold it! You agreed with me more Choice Maker is this a sick joke?!","HR");
		makeText("Choice Maker picked me I won!","SG");
		makeText("I DEMAND A RECOUNT!","HR");
		makeText(bndialogtextwithldata,"NB");
		makeText("Fine ask them again, Choice Maker knows what to do.","SG");
		makeText("Yeah, Choice Maker should know what they need to do.","HR");
		makeText("*Sigh*","NB");
		wdyaw2Q();
	}
}
function trueEnd1(){
	specialdisable();
	trueEnd();
}
function trueEnd2(){
	specialdisable2();
	trueEnd();
}
function goldEnd2(){
	specialdisable2();
	goldEnd();
}
function redEnd2(){
	specialdisable2();
	goldEnd();
}
//ending functions
function goldEnd(){
	makeText("Look at this now, of course I won, Choice Maker knows the path of good.","HR");
	makeText("THIS IS UNFAIR! Choice Maker your no fu-","SG");
	makeText("Let's shut up that slob, for my reformation of my new domain.","HR");
	makeText("This is it Choice Maker, before I am silenced.... Heavenly Ram won their bet and is becoming the sole ruler of this domain. Soon all this will be gone. No more choices, nothing but Ram's way. I wish you well, Choice Maker. I hope you are happy with the choices you made.","NB");
	setTimeout(endActionsG, 30000);
}
function redEnd(){
	makeText("HA HA! Good job Choice Maker!!","SG");
	makeText("This can't be!! Choice maker must be mentally unsta-","HR");
	makeText("There, we don't need that prick talking while I remodel.","SG");
	makeText("This is it Choice Maker, before I am silenced.... Satanic Goat won their bet and is becoming the sole ruler of this domain. Soon all this will be gone. No more choices, nothing but Goat's way. I wish you well, Choice Maker. I hope you are happy with the choices you made.","NB");
	setTimeout(endActionsR, 30000);
}
function trueEnd(){
	makeText("Where did that choice even come from!","SG");
	makeText("This isn't fair you must pick!!","HR");
	makeText("I think the Choice Maker has chosen and we should respect that.","NB");
	makeText("This blows, I'm out of here.","SG");
	makeText("I believe this nonsense is unfair, but it seems I can't do anything about it. *Huff*","HR");
	makeText("They are just going to go sulk awhile, I think. Thank you, Choice Maker, for seeing where I am coming from.","NB");
	makeText("I feel that nothing is truly one way or the other, Red or Gold if you will. I see things more, grey. The grey is where choices lay.","NB");
	makeText("You can choose what to do from here, refresh the page to choose again, stay awhile and reflect on the questions asked here, or leave all together. It is up to you, Choice Maker.","NB");
}
//extra dialog
function extraDialog(){
	makeText("I don't think this question is meant to have a definitive right or wrong answer.","NB");
	makeText("Of course it dose! There must always be a right answer.","HR");
	makeText("There always has to be a wrong answer!","SG");
	makeText("If you two say so.... Let's continue with the next question, Choice Maker.","NB");
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
	makeText("We are never going to settle the bet this way! ","HR");
	makeText("Yeah, I'm getting bored.","SG");
	makeText("I really don't think there is a need for this, can't you two call this off?","NB");
	makeText("Why would I do that!","SG");
	makeText("I would never admit defeat to this slob!","HR");
	makeText("Alright fine you two, Choice Maker can just settle this.","NB");
	makeText("Who do you agree with?","NB");
	makeButton(">Sheep","hr1","endCheckS()");
	makeButton(">Goat","sg1","endCheckG()");
	makeButton(">Neither","nb1","trueEnd1()");
}
//question who do you agree with? second take
function wdyaw2Q(){
	makeText("So to clarify, who do you agree with?","NB");
	makeButton(">Sheep","hr2","goldEnd2()");
	makeButton(">Goat","sg2","redEnd2()");
	makeButton(">Neither","nb2","trueEnd2()");
}
//answer functions
//intro answers
function sheep(){
	//console.log("in sheep"); //test
	makeText("Good as all things should be.","HR");
	makeText("I don't believe that it is how things should be.","SG");
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
	makeText("You're no fun at all.","SG");
	makeText("Let us move on please.","NB");
	rCount++;
	document.getElementById("noF").disabled=true;
	document.getElementById("yesF").disabled=true;
	slecAfterFQ();
}
function yesF(){
	//console.log("Made it yesF"); //test
	makeText("That is quite preposterous.","HR");
	makeText("It's called fun. Ever had it?","SG");
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
	makeText("The point of this question is about if it's wrong to lie in a specific circumstance not about if lying is wrong in general.","NB");
	makeText("Well, lying is always wrong.","HR");
	rCount++;
	document.getElementById("no3").disabled=true;
	document.getElementById("yes3").disabled=true;
	extraDialog();
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
	extraDialog();
	twoQ();
}
//7 answers
function w7(){
	makeText("Oh good, Choice maker, you're seeing reason.","HR");
	makeText("Oh, come on, being selfless isn't everything, give in.","SG");
	makeText("I would agree in a sense that being selfless all the time isn't always everything, but it is important to think of others as well.","NB");
	makeText("Please selfless is boring, selfish is in.","SG");
	makeText("It is never ok to be selfish; I don't know what you're talking about.","HR");
	makeText("*Sigh*","NB");
	rCount++;
	document.getElementById("w7").disabled=true;
	document.getElementById("n7").disabled=true;
	extraDialog();
	sixQ();
}
function n7(){
	makeText("Rock on Choice Maker, live for only yourself.","SG");
	makeText("No being selfish is completely wrong!","HR");
	makeText("I think their maybe is a balance to how selfish or selfless one should be.","NB");
	gCount++;
	document.getElementById("w7").disabled=true;
	document.getElementById("n7").disabled=true;
	extraDialog();
	fiveQ();
}
//1 answers
function w1(){
	makeText("Yes, when you're wrong you pay for it.","HR");
	makeText("I think if you regret something, it means you've changed. Wrong is no reason for regret.","SG");
	makeText("... I expected your opinions to be swapped.","NB");
	makeText("That is preposterous!","HR");
	makeText("Why would you think that, Blob?","SG");
	makeText("I feel like from what I know of your values your answers here would align with the other....","NB");
	makeText("Honestly...","NB");
	rCount++;
	document.getElementById("w1").disabled=true;
	document.getElementById("g1").disabled=true;
	extraDialog();
	twoQ();
}
function g1(){
	makeText("How dare, if you have regret, you've clearly done something wrong.","HR");
	makeText("Wrong is chill, regret means you've changed since that choice. I approve.","SG");
	makeText("...","NB");
	makeText("What has gotten you so quiet. You... Neutral... Blob!!","HR");
	makeText("That isn't even an insult that is just what I... You know what never mind that.","NB");
	makeText("I just expected your answers to be swapped based on what I know of your values.","NB");
	makeText("Well, that's a twist.","SG");
	makeText("That is quite ridiculous of you to think.","HR");
	makeText("*Sigh*","NB");
	gCount++;
	document.getElementById("w1").disabled=true;
	document.getElementById("g1").disabled=true;
	extraDialog();
	sixQ();
}
//4 answers
function no4(){
	makeText("They don't matter. If you did something bad, you did something bad.","HR");
	makeText("I think they do, you can't do half assed bad. That is just depressing.","SG");
	makeText("I feel it really depends on the situation.","NB");
	makeText("That is ridiculous of you! Bad is bad.","HR");
	makeText("Good intentions ruin the fun.","SG");
	rCount++;
	document.getElementById("no4").disabled=true;
	document.getElementById("yes4").disabled=true;
	goldEnd();
}
function yes4(){
	makeText("Yes! Good intentions kill the vibe.","SG");
	makeText("I don't think that is why Choice Maker would choose that intentions matter.","NB");
	makeText("I see it as this Choice Maker siding with bad. As bad is bad.","HR");
	makeText("What other reason would there be?","SG");
	makeText("That good intentions can make a bad action less bad in some cases. I feel this one would really depend.","NB");
	makeText("Ridiculous.","HR");
	gCount++;
	document.getElementById("no4").disabled=true;
	document.getElementById("yes4").disabled=true;
	wdyawQ();
}
//2 answers
function r2(){
	makeText("I agree, reason is the only way it can be. Everything has reason.","HR");
	makeText("Reason, sure. Reason is a ploy to pretend everything wasn't just luck.","SG");
	makeText("I think both can be true honestly.","NB");
	rCount++;
	document.getElementById("r2").disabled=true;
	document.getElementById("l2").disabled=true;
	wdyawQ();
}
function l2(){
	makeText("Yes, reason is a lie to make people feel good about themselves.","SG");
	makeText("That is not true at all! You should take that back!","HR");
	makeText("Make me, coward.","SG");
	makeText("Let's not be hasty, I think I can see both being true here.","NB");
	gCount++;
	document.getElementById("r2").disabled=true;
	document.getElementById("l2").disabled=true;
	wdyawQ();
}
//6 answers
function no6(){
	makeText("Yes, all laws must be just.","HR");
	makeText("Aren't there groups of people fighting for laws to change for the better?","SG");
	makeText("They are wrong to do so.","HR");
	makeText("I feel that while most laws aren't immoral, there are laws that can be.","NB");
	makeText("Ridiculous the law is the law.","HR");
	rCount++;
	document.getElementById("no6").disabled=true;
	document.getElementById("yes6").disabled=true;
	wdyawQ();
}
function yes6(){
	makeText("Laws are laws for a reason!!!","HR");
	makeText("Plenty of bad happen within the letter of the law, I love to watch it.","SG");
	makeText("I feel laws are capable of being immoral, not all laws but some can be.","NB");
	makeText("You spout nonsense.","HR");
	gCount++;
	document.getElementById("no6").disabled=true;
	document.getElementById("yes6").disabled=true;
	wdyawQ();
}
//5 answers
function no5(){
	makeText("Your no fun choice maker.","SG");
	makeText("No Choice Maker is right, revenge is never justified!","HR");
	makeText("Revenge isn't helpful oftentimes, but I don't think this should have a never attitude.","NB");
	rCount++;
	document.getElementById("no5").disabled=true;
	document.getElementById("yes5").disabled=true;
	wdyawQ();
}
function yes5(){
	makeText("Ah ha! Yes! Revenge is fun!","SG");
	makeText("No, it is not! Revenge is never justified!","HR");
	makeText("I think revenge isn't always justified, but I'd never say never.","NB");
	gCount++;
	document.getElementById("no5").disabled=true;
	document.getElementById("yes5").disabled=true;
	redEnd();
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
//Code by Arlo S.