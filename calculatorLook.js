const row1 = document.querySelector('.row1');
const row = document.querySelector('.row');
const numberRows = document.querySelector('.numberRows');
// const numbers = document.querySelector('.numbers');
const col = document.querySelector('.col');
const lastRow = document.querySelector('.lastRow');
const numbers1 = document.querySelector('.numbers1');


const items = ["clc", "/", "*", '-', '+', 'Enter', '0', '.'];
const numbers2 = document.querySelector('.numbers2');
const numbers3 = document.querySelector('.numbers3');

const numbers = document.querySelector('.numbers');

let cells = [];
function gridCalculatorButtons(){
  
  for (let i = 0; i < 4; i++) {
    const cell = document.createElement('button');
    cell.classList.add('cell')
    cell.textContent = items[i]; 
    cell.setAttribute('style', 'background: pink;');
    row1.appendChild(cell)
    cells.push(cell);
  };
  
}

const items2 = ["(", ")", "DEL", '+/-', '+'];
function firstRow(){
  for (let i = 0; i < 4; i++) {
    const cell = document.createElement('button');
    cell.classList.add('cell')
    cell.textContent = items2[i]; 
    cell.setAttribute('style', 'background: pink;');
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
      cell.setAttribute('style', 'background: pink;');
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
    const cellP = document.createElement('button');
    cellP.classList.add('cellP')
    cellP.textContent = items[i]; 
    cellP.setAttribute('style', 'background: pink;');
    col.appendChild(cellP)
    cells.push(cellP);
  };
}

  function RowThatContainsZero(){
    for (let i = 6; i < items.length; i++) {
      const cell = document.createElement('button');
      cell.classList.add('cell')
      cell.textContent = items[i]; 
      cell.setAttribute('style', 'background: pink;');
      lastRow.appendChild(cell)
      if(items[i] === "0"){
        cell.classList.add('cellR')
      }
      cells.push(cell);
     
    };
  }




const numeros = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0'];
const operations = ["+", "-", "*", "/"];
const comma = "."
let ans;

firstRow()
gridCalculatorButtons();
numberButtons();
RowThatContainsZero();
plusAndEnterColumn();

let operator = "";
let firstValue = "";
let secondValue = "";

cells.forEach(cell => {
  if(operations.includes(cell.textContent)){
    cell.classList.add('operation');

  }
});






 




// numbers.addEventListener("click", function(event){
//   if(event.target.classList.contains("aNumber")){
//     // console.log("hello")
//     // firstValue += this.textContent;
//     console.log(this.textContent)
//   }
// });

const result = document.querySelector('.result')
cells.forEach(cell =>{
  cell.addEventListener("click", function(){
    if(operator === "" && numeros.includes(cell.textContent)){
        firstValue += this.textContent;
        result.textContent = firstValue;
    }else if(numeros.includes(cell.textContent)){
      console.log("second value")
      
      secondValue += this.textContent;
      result.textContent += this.textContent;
      console.log(secondValue)
    }
    
  });
  
})

let op =""
cells.forEach(cell =>{
  cell.addEventListener("click", function(){
    if(operations.includes(cell.textContent)){
      console.log("operator awel mara ki yod5el" + operator)
      operator = ""
      operator = this.textContent;
      console.log("operator ki yet3aba " + operator)
      result.textContent += this.textContent;
      result.textContent = firstValue + operator
      if(n>1)
        result.textContent = " ANS " + operator;
      }

      
    } ) 
    
  });
  



let n = 1;
console.log("this is taking so long")
let c;
cells.forEach(cell =>{
  cell.addEventListener('click', () =>{
    
    if(cell.textContent === 'Enter'){
      console.log("time number")
      console.log(n)
      console.log("first value " + firstValue)
      console.log("Secc value " + secondValue)
      c = operate(parseInt(firstValue), parseInt(secondValue), operator);
      result.textContent +=  " = " + c;
      firstValue = c;
      secondValue = "";
      operator = "";
      n = 2;
     }
  }
  )
})

cells.forEach(cell =>{
  cell.addEventListener('click', () =>{
    
    if(cell.textContent === 'clc'){
      firstValue = "";
      secondValue = "";
      operator = "";
      result.textContent = ""
      n = 1

     }
  }
  )
})


// operate(parseInt(firstValue), parseInt(secondValue), operator)

const add = function(a, b) {
  return a + b;
	
};

const subtract = function(a, b) {
  return a - b;
};



const multiply = function(a, b) {
  // let sum = 1;

	// for(let i = 0; i < array.length; i ++){
  //   sum *= array[i];
  // }
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
