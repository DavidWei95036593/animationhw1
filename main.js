



//Question 1
let box1 = document.querySelector("#question1");
box1.addEventListener("click",function(){
	if (box1.classList.contains("move-down")){
		box1.classList.remove("move-down");
	}else{box1.classList.add("move-down");}
	
})

//Question 2
let box2 = document.querySelector("#question2")
box2.addEventListener("click",function(){
	if (box2.classList.contains("move-diaright")){
		box2.classList.remove("move-diaright");
	}else{box2.classList.add("move-diaright");}
	if (box2.classList.contains("red")){
		box2.classList.remove("red");
		box2.classList.add("blue");}
		else{
			box2.classList.remove("blue");
			box2.classList.add("red")}
	
})

//Question5
let input = document.querySelector("#question5");
input.addEventListener("keydown", function(event){
	if(event.key ==="ArrowDown"){
		console.log("You've pressed the down key!")
	}
	
});