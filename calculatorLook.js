const row1 = document.querySelector('.row1');
const row = document.querySelector('.row');
const numberRows = document.querySelector('.numberRows');
const col = document.querySelector('.col');
const lastRow = document.querySelector('.lastRow');
const numbers1 = document.querySelector('.numbers1');
const items = ["clc", "DEL", "*", '-', '+', 'Enter', '0', '.'];
const numbers2 = document.querySelector('.numbers2');
const numbers3 = document.querySelector('.numbers3');
const numbers = document.querySelector('.numbers');

//appending calculator buttons
let cells = [];
function gridCalculatorButtons(){
  
  for (let i = 0; i < 2; i++) {
    const cell = document.createElement('button');
    cell.classList.add('cell')
    cell.textContent = items[i]; 
    cell.classList.add('cellR')
    row1.appendChild(cell)
    cells.push(cell);
  };
  
}

const items2 = ["-", "/", "*", '+/-', '+'];
function firstRow(){
  for (let i = 0; i < 4; i++) {
    const cell = document.createElement('button');
    cell.classList.add('cell')
    cell.textContent = items2[i]; 
    row.appendChild(cell)
    cells.push(cell);
  };
  
}

function numberButtons(){
  let r = 0;
  let j = 9
  while (r < 3){
    for (let i = 0; i < 3; i++) {
      const cell = document.createElement('button');
      cell.classList.add('cell')
      cell.textContent = j; 
      if((j <= 9) && (j >= 7)){
        numbers1.appendChild(cell)
      }
      if((j <= 6) && (j >= 4)){
        numbers2.appendChild(cell)
      }
      if((j <= 3) && (j >= 1)){
        numbers3.appendChild(cell)
      }
      cells.push(cell);
      j--;
    };
    r++;
  }
}

function plusAndEnterColumn() {
  for (let i = 4; i < 6; i++) {
    const cell = document.createElement('button');
    cell.classList.add('cell')
    cell.classList.add('cellP')
    cell.textContent = items[i]; 
    
    col.appendChild(cell)
    cells.push(cell);
  };
}

  function RowThatContainsZero(){
    for (let i = 6; i < items.length; i++) {
      const cell = document.createElement('button');
      cell.classList.add('cell')
      cell.textContent = items[i]; 
      
      lastRow.appendChild(cell)
      if(items[i] === "0"){
        cell.classList.add('cellR')
      }
      cells.push(cell);
     
    };
  }

firstRow()
gridCalculatorButtons();
numberButtons();
RowThatContainsZero();
plusAndEnterColumn();


const numeros = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0'];
const operations = ["+", "-", "*", "/"];
const comma = "."
const firstOperand = document.getElementById("firstOperand")
const secondOperand = document.getElementById("secondOperand")
const op = document.getElementById("op")
const r = document.querySelector('.r')

let operator = "";
let firstValue = "";
let secondValue = "";

cells.forEach(cell => {
  if(operations.includes(cell.textContent)){
    cell.classList.add('operation');

  }
});




const result = document.getElementById('result')
cells.forEach(cell =>{
  cell.addEventListener("click", function(){

    if((op.textContent === "") && numeros.includes(cell.textContent)){
        firstValue += this.textContent;
        firstOperand.textContent = firstValue;

    }
    else if(numeros.includes(cell.textContent)){
      secondValue += this.textContent;
      secondOperand.textContent += this.textContent;
    }
    if(result.textContent != ''){
      resetCalculator();
      firstOperand = this.textcontent;
    }
    
  });
  
})


let lastOperator = "";
cells.forEach(cell =>{
  cell.addEventListener("click", function(){
    if(operations.includes(cell.textContent)){
      if((firstValue != "") && secondOperand.textContent == ''){
        operator = this.textContent;
        op.textContent = operator;
        lastOperator = operator
        console.log
      }
      if((firstValue != "") && (secondValue != "")){
        console.log(op.textContent)
        let c = operate(parseInt(firstValue), parseInt(secondValue), op.textContent)
        firstValue = c;
        secondValue = "";
        firstOperand.textContent = c;
        secondOperand.textContent = "";
        operator = this.textContent;
        op.textContent = operator;

      }
      if(n == 2){
        firstOperand.textContent = firstValue;
        secondOperand.textContent = ""
        result.textContent = ""
        op.textContent = this.textContent
      }
    
       }

      
    } ) 
    
  });
  
cells.forEach(cell =>{
  cell.addEventListener('click', () =>{
    if(cell.textContent === '.'){
      if((firstValue != '') && (firstValue.split(".").length - 1 != 1)){
        firstValue += '.'
        firstOperand.textContent += '.'
      }
      if((secondValue != '') && (secondValue.split(".").length - 1!= 1)){
        secondValue += '.'
        secondOperand.textContent += '.'
      }
    }

    if(cell.textContent === '+/-'){
      if((firstValue.split("-").length - 1 != 1) && firstValue != ''){
        firstValue = '-' + firstValue;
        firstOperand.textContent = firstValue
      }
      if((secondValue.split("-").length - 1 != 1) && secondValue != ''){
        secondValue = '-' + secondValue;
        secondOperand.textContent = secondValue
      }
    }

    if(cell.textContent === 'DEL'){
      if (secondOperand.textContent != ''){
        secondOperand.textContent = secondOperand.textContent.slice(0,-1);
        secondValue = secondOperand.textContent
        console.log(secondValue)
    } else if (op.textContent != ''){
        op.textContent = '';
    } else if (firstOperand.textContent != ''){
        firstOperand.textContent = firstOperand.textContent.slice(0,-1);
        firstValue = firstOperand.textContent
    } else {
        console.log("It seems you are pushing the backspace button regardless of the fact that there's nothing to clear. Hope you enjoy it!")
    }                   
    }
    
  })
})



let n = 1;

let ans;
cells.forEach(cell =>{
  cell.addEventListener('click', () =>{
    
    if(cell.textContent === 'Enter'){
      if((firstValue != "") && (secondValue != "") && op.textContent != ""){
        ans = operate(parseFloat(firstValue), parseFloat(secondValue), op.textContent);
        result.textContent +=  " = " + ans;
        console.log(firstValue)
        console.log(secondValue)
        console.log(operator)
        firstValue = ans;
        secondValue = "";
        operator = "";
        n = 2;
        console.log('ubb')
      }
      
     }
  }
  )
})

  
cells.forEach(cell =>{
  cell.addEventListener('click', () =>{
    
    if(cell.textContent === 'clc'){
      history.textContent += resultBloc.textContent
      resetCalculator();
     

     }
  }
  )
})


function resetCalculator(){
      firstValue = "";
      secondValue = "";
      operator = "";
      firstOperand.textContent = ""
      secondOperand.textContent = ""
      result.textContent = ""
      op.textContent = ""
}

//operations

const add = function(a, b) {
  return a + b;
	
};

const subtract = function(a, b) {
  return a - b;
};



const multiply = function(a, b) {
  return a * b;

};


const divide = function(a, b) {
	if (b === 0) 
    return -1;
  else 
    return a/b;
    
  
};



const operate = function(a, b, op) {
  switch(op) {
    case '+':
      return add(a, b);
      break;

    case '-':
      return subtract(a, b);
      break;

    case '*':
      return multiply(a, b);
      break;

    case '/':
      return divide(a, b);
      break;

    default:
      console.log('Invalid operator');
      break;
  }
}

/* *************************************************** */


cells.forEach(cell => {
  
  if((cell.textContent === 'clc') || (cell.textContent === 'DEL')){
    cell.classList.add('clearorDelete')
  }
} )


// resultBloc = document.querySelector('.result')
//   history = document.querySelector('.history') I MIGHT ADD HISTORY OF OPERATIONS LATER

/* *************************************************** */