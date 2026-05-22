
const buttons = document.querySelectorAll(".button")
const operators = document.querySelectorAll(".operator")
const display = document.querySelector(".display")
const equal = document.querySelector(".equal")
const clear = document.querySelector(".Clear")

let number1 = "";
let number2 = "";
let operator = "";

clear.addEventListener('click', () =>{
    display.textContent = ""
    number1 = ""
    number2 = ""
    operator = ""
})

buttons.forEach((button) => {
    button.addEventListener('click', (event)=>{
        if(operator === ""){
            if(event.target.textContent === "." && number1.includes(".")) return
            number1+=event.target.textContent
        } else if(operator !== ""){
            if(event.target.textContent === "." && number2.includes(".")) return
            number2+=event.target.textContent
        }
        display.textContent = number1 + operator + number2
    })
})
operators.forEach((button) => {
    button.addEventListener('click', (event) => {

        const input = event.target.textContent;
        // Operation Chaining
       // If we already have: number1 operator number2
        // then compute the result before continuing
        if(number1 !== "" && number2 !== "" && operator !== ""){
            number1 = operate(number1,number2,operator)
            number2 = ""
            operator = ""
            display.textContent = number1;

        }

        //Handle negative sign
        if(input === "-"){
            //Case 1: start a negative 1st number
            if(number1 === "" && operator === ""){
                number1 = "-"
                display.textContent = number1;
                return;
            }


            //Case 2: start a negative 2nd number
            if(number2 === "" && operator !== ""){
                number2 = "-"
                display.textContent = number1 + operator + number2
                return;
            }
        }

        operator = input;
        display.textContent = number1 + operator;

    })
})

equal.addEventListener('click', () =>{
   number1 = operate(number1,number2,operator)
   number2 = ""
   operator = ""
   display.textContent = number1
})

const addition = (a,b) => a + b;
const subtraction = (a,b) => a-b;
const multiplication = (a,b) => a * b;
const division = (a,b) => {
    if(b === 0){
        return "Undefined"
    }
    return a/b;
};

function operate(number1,number2,operator){

    if(operator === "+"){
        return addition(parseFloat(number1), parseFloat(number2))
    } else if(operator === "-"){
        return subtraction((parseFloat(number1)), parseFloat(number2))
    } else if(operator === "*"){
        return multiplication(parseFloat(number1), parseFloat(number2))
    } else if(operator === "/"){
        return division(parseFloat(number1), parseFloat(number2))
    } else{
        return;
    }
}

