let textOut = document.querySelector('.result');
let clearA = document.querySelector('.deleteAll');
let clearL = document.querySelector('.deleteLast');
let submit = document.querySelector('.submit')
let color = document.querySelector('.color')
let calc = document.querySelector('.calc')
function col(){
    calc.classList.toggle('col');
}
textOut.textContent = 0;
let firstValue = ''
let secondValue = ''
let operator = null;
let j = false;

let keyBtn = document.querySelector('.calc_input');
keyBtn.onclick =(event)=>{
if(event.target.classList.contains('number') && j == false) {
const key = event.target.textContent;
firstValue+=key;
textOut.textContent=firstValue}
else if(event.target.classList.contains('operator')){
    const oper = event.target.textContent;
    operator = oper;
    textOut.textContent=firstValue + operator;
    j = true;
    secondValue = ''
}else if(event.target.classList.contains('number') && j !== false){
    const num = event.target.textContent;
    secondValue+=num;
    textOut.textContent=firstValue + operator + secondValue;
}
}
function subm(){
    let answer = 0;
    switch(operator){
        case '+':
           answer = +firstValue + +secondValue;
           textOut.textContent = answer
            break;
        case '-':
           answer = +firstValue - +secondValue;
           textOut.textContent = answer
            break; 
        case '*':
           answer = (+firstValue) * (+secondValue);
           textOut.textContent = parseFloat(answer.toFixed(4))
            break; 
        case '/':
           answer = +firstValue / +secondValue;
           textOut.textContent = parseFloat(answer.toFixed(4))
            break;
        case '%': 
            answer = (+firstValue / 100) * (+secondValue);
            textOut.textContent = answer;
    }
    if( secondValue == ''){
        answer = firstValue; 
        textOut.textContent = firstValue + operator
    }
    firstValue = answer;
    secondValue = ''
}

function clearLast(){
    let content = textOut.textContent;
    if (content == 0) return;
    else if(content.length == 1){
        textOut.textContent = '0'
        firstValue = ''
    } else if(secondValue == "" && operator ==''){
        content = content.slice(0, -1);
        textOut.textContent = content
        firstValue = firstValue.slice(0, -1);
        j = false;
    }
    else if(secondValue == "" && operator !== ''){
      operator = '';
      content = content.slice(0, -1);
      textOut.textContent = content
    }
    else{
        content = content.slice(0, -1);
        textOut.textContent = content
        secondValue=secondValue.slice(0, -1);
       
    }
}
function clearAll(){
    firstValue = '';
    let operator = null;
    let secondValue = '';
    j = false;
    num = ''
    textOut.textContent = '0';
}
clearA.onclick = clearAll;
clearL.onclick = clearLast;
submit.onclick = subm;
color.onclick = col;
