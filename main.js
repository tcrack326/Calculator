//var text = "I can haz " + total + " cheezburgers!",
var total,
value1 = document.getElementById("num_one"),
value2 = document.getElementById("num_two"),
calculateButton = document.getElementById("calculateBtn"),
answer = document.getElementById("answer"),
pic = document.getElementById("pic");

var performCalculation = function(number1,number2){

  //Check to make sure values were entered in input fields
  if(number1.value == "" || number2.value == ""){
    alert("Enter numberz meow!");
  }
  else{
    number1 = Number(number1.value);
    number2 = Number(number2.value);
    total = number1 + number2;

    var text;
  //Check to make sure valid numbers were entered in input fields for numbers
    if(isNaN(total)){
      alert("Enter numberz meow!");
    }
    //If total is zero add this text to screen
    else if(total <= 0){
      text = "I can haz no cheezburgerz! Me Grumpy Cat!!";
    }
    //If total is one add this text
    else if(total == 1){
      text = "I can haz a cheezburger!";
    }
    // If total is more than one add this text
    else{
      text = "Answer: I can haz " + total + " cheezburgerz!";
    }
    //Add the text to the screen
    answer.innerHTML = text;

    //Add cheeseburger images equal to total
    for(i = 0; i < total; i++){
      var image = document.createElement("img");
      var attr = document.createAttribute("src");
      attr.value = "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcRQ8q5VgxitLgKypref0W9YWOWTO3fUEYHjoM7jJOx-v5gPUUI5"
      image.setAttributeNode(attr);
      pic.appendChild(image);
    }
  }
}

calculateButton.onclick = function(){
  performCalculation(value1,value2);
}
