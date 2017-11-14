
//Question 1
let box1 = document.querySelector("#question1");
box1.addEventListener("click",function(){
	if (box1.classList.contains("move-down")){
		box1.classList.remove("move-down");
	}else{box1.classList.add("move-down");}

})

//Question 2
let box2 = document.querySelector("#question2");
box2.addEventListener("click",function(){
	if (box2.classList.contains("move-diaright")){

		box2.classList.remove("move-diaright");

	}else{box2.classList.add("move-diaright");
	}


})
//Question 4
let box3 = document.querySelector("#box3");
let input1 = document.querySelector("#question4");
input1.addEventListener("click",function(event){
	if(box3.classList.contains("move-around")){
		box3.classList.remove("move-around");
	}
		else{
		box3.classList.add("move-around");
		// box3.classList.remove("move-once");

	}

})

//Question5
let input = document.querySelector("#question5");
input.addEventListener("keydown", function(event){
	if(event.key ==="ArrowDown"){
		console.log("You've pressed the down key!")
	}

});