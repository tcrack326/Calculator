//global variables
var text,
total,
value1 = document.getElementById("num_one"),
value2 = document.getElementById("num_two"),
calculateButton = document.getElementById("calculateBtn"),
addBtn = document.getElementById("addBtn"),
subtractBtn = document.getElementById("subtractBtn"),
multBtn = document.getElementById("multBtn"),
divBtn = document.getElementById("divBtn"),
answer = document.getElementById("answer"),
pic = document.getElementById("pic"),
opSpan = document.getElementById("operator"),
operator="add";

//function to do each calculation based on entries provided by user. checks for valid entries.
var performCalculation = function(number1,number2){

  //Check to make sure values were entered in input fields
  if(number1.value == "" || number2.value == ""){
    alert("Enter numberz meow!");
  }
  else{
    number1 = Number(number1.value);
    number2 = Number(number2.value);
  }
    //set up calculation with different operators, TO DO: could also use a switch statement here in future
    if(operator == "add"){
      total = number1 + number2;
      }

    else if(operator == "subtract"){
      total = number1 - number2;
      }

    else if(operator == "multiply"){
      total = number1 * number2;
    }

    else if(operator == "divide"){
      total = number1 / number2;
    }

  //Check to make sure valid numbers were entered in input fields for numbers
    if(isNaN(total)){
      alert("Enter numberz meow!");
    }
    //If total is zero add this text to screen
    else if(total <= 0){
      text = "I can has no cheezburgerz! Me Grumpy Cat!!";
      var image = document.createElement("img");
      var attr = document.createAttribute("src");
      attr.value = "https://fbcdn-sphotos-d-a.akamaihd.net/hphotos-ak-xpa1/v/t1.0-9/14224_740588012643605_3199790989726687713_n.jpg?oh=baa6841988cc97677aada13e0ddd1337&oe=5484C0A3&__gda__=1422667230_0f798b3e1b812e2b53a0362b4d4fca97";
      image.setAttributeNode(attr);
      pic.appendChild(image);
    }
    //If total is one then add this text
    else if(total == 1){
      text = "I can has a cheezburger!";
    }
    // If total is more than one add this text
    else{
      text = "I can has " + total + " cheezburgerz!";
    }
    //Add the text to the screen
    answer.innerHTML = text;

    //Add cheeseburger images equal to total at a maximum of 100 cheeseburger images
    for(i = 0; i < total && i < 100; i++){
      var image = document.createElement("img");
      var attr = document.createAttribute("src");
      attr.value = "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcRQ8q5VgxitLgKypref0W9YWOWTO3fUEYHjoM7jJOx-v5gPUUI5"
      image.setAttributeNode(attr);
      pic.appendChild(image);
    }
}

calculateButton.onclick = function(){
  //need to clear previous burger image additions and inner HTML for answer
  answer.innerHTML = "";
  while(pic.firstChild){
    pic.removeChild(pic.firstChild);
  }
  performCalculation(value1,value2);
}

//set up operator with button clicks (default is "add" defined in global variables)
addBtn.onclick = function(){
  operator = "add";
  opSpan.innerHTML = "add";
}

subtractBtn.onclick = function(){
  operator = "subtract";
  opSpan.innerHTML = "subtract";
}

multBtn.onclick = function(){
  operator = "multiply";
  opSpan.innerHTML = "multiply";
}

divBtn.onclick = function(){
  operator = "divide";
  opSpan.innerHTML = "divide";
}
