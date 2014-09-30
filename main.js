//var text = "I can haz " + total + " cheezburgers!",
var total,
value1 = document.getElementById("num_one"),
value2 = document.getElementById("num_two"),
calculateButton = document.getElementById("calculateBtn"),
answer = document.getElementById("answer");

var performCalculation = function(number1,number2){
  number1 = Number(number1.value);
  number2 = Number(number2.value);
  total = number1 + number2;
  var text;
  if(total <= 0){
    text = "I can haz no cheezburgerz! Me Grumpy Cat!!";
  }

  else if(total == 1){
    text = "I can haz a cheezburger!";
  }

  else{
    text = "I can haz " + total + " cheezburgerz!";
  }

  answer.innerHTML = text;

  for(i = 0; i < total; i++){
    var image = document.createElement("img");
    var attr = document.createAttribute("src");
    attr.value = "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcRQ8q5VgxitLgKypref0W9YWOWTO3fUEYHjoM7jJOx-v5gPUUI5"
    image.setAttributeNode(attr);
    answer.appendChild(image);
  }
}

calculateButton.onclick = function(){
  performCalculation(value1,value2);
}
