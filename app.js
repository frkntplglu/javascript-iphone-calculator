const result = document.querySelector("#result");

const numbers = document.querySelectorAll(".calculator--number");
const operators = document.querySelectorAll(".calculator--operator");
const reset = document.querySelector("#reset");
const decimal = document.querySelector("#decimal");
var displayValue = 0;
var pendingValue = 0;
var evalArray = [];

reset.addEventListener("click",() =>{
  displayValue = 0;
  pendingValue = undefined;
  evalArray = [];
  result.textContent = displayValue
})


decimal.addEventListener("click", () =>{
  if(!displayValue.includes('.')){
    displayValue += '.';
    result.textContent = displayValue;
  }
})


var updateDisplayValue = (e) => {
  var btnValue = e.target.attributes["data-number"].value;
  

  if(displayValue === 0){
    displayValue = '';
  }
  displayValue += btnValue;
  result.textContent = displayValue;
  
}


var performOperation = (e) => {
  var operator = e.target.attributes["data-operator"].value;

  switch(operator){
    case '+':
      process(operator)
      break;
    
    case '-':
      process(operator)
      break;
    
    case '*':
      process(operator)
      break;

    case '/':
      process(operator)
      break;

    case '=':
      evalArray.push(displayValue);
      var evaluation = eval(evalArray.join(" "));
      result.textContent = evaluation;
      displayValue = 0;
      evalArray = [];
      break;

    default:
      break;
  }
}

var process = (operator) => {
  pendingValue = displayValue;
  displayValue = 0;
  result.textContent = displayValue;
  evalArray.push(pendingValue);
  evalArray.push(operator);
}


for(let i = 0; i < numbers.length; i++){
  numbers[i].addEventListener("click",updateDisplayValue,false);
}

for(let i = 0; i < operators.length; i++){
  operators[i].addEventListener("click",performOperation);
}



var performOperation = () => {

}




